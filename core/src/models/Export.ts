import {
  Model,
  Table,
  Column,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  Is,
  BelongsTo,
  BeforeCreate,
  BeforeSave,
  ForeignKey,
  DataType,
  Default,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Destination } from "./Destination";
import { Profile } from "./Profile";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { QueryTypes } from "sequelize";
import { ExportOps } from "../modules/ops/export";
import { APIData } from "../modules/apiData";
import { StateMachine } from "../modules/stateMachine";
import { api, config } from "actionhero";
import { ExportProcessor } from "./ExportProcessor";
import { Errors } from "../modules/errors";
import { Mapping } from "./Mapping";
import { Option } from "./Option";

/**
 * The Profile Properties in their normal data types (string, boolean, date, etc)
 */
export interface ExportProfileProperties {
  [key: string]: any | any[];
}

/**
 * The Profile Properties as stringified rawValues + types
 */
export interface ExportProfilePropertiesWithType {
  [key: string]: { type: string; rawValue: string | string[] };
}

export const ExportStates = [
  "draft", // not ready to send, needs manual review
  "pending", // ready to send
  "processing", // have been sent, waiting on the destination's OK
  "canceled", // manually canceled
  "failed", // something went wrong and we won't try again
  "complete", // OK!
] as const;

const STATE_TRANSITIONS = [
  { from: "draft", to: "pending", checks: [] },
  { from: "draft", to: "canceled", checks: [] },
  { from: "pending", to: "processing", checks: [] },
  { from: "pending", to: "canceled", checks: [] },
  { from: "pending", to: "failed", checks: [] },
  { from: "pending", to: "complete", checks: [] },
  { from: "processing", to: "canceled", checks: [] },
  { from: "processing", to: "failed", checks: [] },
  { from: "processing", to: "complete", checks: [] },
  { from: "processing", to: "pending", checks: [] },
];

@Table({ tableName: "exports", paranoid: false })
export class Export extends Model {
  idPrefix() {
    return "exp";
  }

  @Column({ primaryKey: true })
  id: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationId: string;

  @AllowNull(false)
  @ForeignKey(() => Profile)
  @Column
  profileId: string;

  @AllowNull(true)
  @ForeignKey(() => ExportProcessor)
  @Column
  exportProcessorId: string;

  @AllowNull(false)
  @Default(Export.defaultState)
  @Column(DataType.ENUM(...ExportStates))
  state: typeof ExportStates[number];

  @AllowNull(false)
  @Default(false)
  @Column
  force: boolean;

  @Column
  startedAt: Date;

  @Column
  sendAt: Date;

  @Default(0)
  @Column
  retryCount: number;

  @Column
  completedAt: Date;

  @Column
  errorMessage: string;

  @Is("ofValidErrorLevel", (value) => {
    if (value && !Errors.ERROR_LEVELS.includes(value)) {
      throw new Error(
        `errorLevel must be one of: ${Errors.ERROR_LEVELS.join(",")}`
      );
    }
  })
  @Column(DataType.ENUM(...Errors.ERROR_LEVELS))
  errorLevel: Errors.ErrorLevel;

  @Column(DataType.TEXT)
  get oldProfileProperties(): ExportProfileProperties {
    return ExportOps.deserializeExportProfileProperties(
      //@ts-ignore
      this.getDataValue("oldProfileProperties")
    );
  }
  set oldProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("oldProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newProfileProperties(): ExportProfileProperties {
    return ExportOps.deserializeExportProfileProperties(
      //@ts-ignore
      this.getDataValue("newProfileProperties")
    );
  }
  set newProfileProperties(value: ExportProfileProperties) {
    //@ts-ignore
    this.setDataValue("newProfileProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get oldGroups(): string[] {
    //@ts-ignore
    return JSON.parse(this.getDataValue("oldGroups") || "[]");
  }
  set oldGroups(value: string[]) {
    //@ts-ignore
    this.setDataValue("oldGroups", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newGroups(): string[] {
    //@ts-ignore
    return JSON.parse(this.getDataValue("newGroups") || "[]");
  }
  set newGroups(value: string[]) {
    //@ts-ignore
    this.setDataValue("newGroups", JSON.stringify(value));
  }

  @Default(false)
  @AllowNull(false)
  @Column
  toDelete: boolean;

  @Default(false)
  @AllowNull(false)
  @Column
  hasChanges: boolean;

  @BelongsTo(() => Destination)
  destination: Destination;

  @BelongsTo(() => Profile)
  profile: Profile;

  async setError(error: Error, retryDelay: number = config.tasks.timeout) {
    const maxExportAttempts = parseInt(
      (await plugin.readSetting("core", "exports-max-retries-count")).value
    );

    this.errorMessage = error.message || error.toString();
    if (error["errorLevel"]) this.errorLevel = error["errorLevel"];

    this.retryCount++;

    if (this.retryCount >= maxExportAttempts) {
      this.state = "failed";
      this.sendAt = null;
    } else if (this.errorLevel === "info") {
      this.state = "failed";
    } else {
      this.state = "pending";
      this.exportProcessorId = null;
      this.sendAt = Moment().add(retryDelay, "ms").toDate();
      this.startedAt = null;
    }

    return this.save();
  }

  async retry(retryDelay: number = config.tasks.timeout) {
    const maxExportAttempts = parseInt(
      (await plugin.readSetting("core", "exports-max-retries-count")).value
    );

    this.retryCount++;
    if (this.retryCount >= maxExportAttempts) {
      this.state = "failed";
      this.sendAt = null;
    } else {
      this.sendAt = Moment().add(retryDelay, "ms").toDate();
      this.startedAt = null;
    }

    return this.save();
  }

  async complete() {
    this.errorMessage = null;
    this.errorLevel = null;
    this.completedAt = new Date();
    this.state = "complete";
    await this.save();
  }

  async apiData(includeDestination = true) {
    const destination =
      this.destination ?? (await this.$get("destination", { scope: null }));

    return {
      id: this.id,
      destination: includeDestination
        ? {
            id: destination.id,
            state: destination.state,
            name: destination.name,
            groupId: destination.groupId,
          }
        : undefined,
      destinationName: destination ? destination.name : null,
      profileId: this.profileId,
      exportProcessorId: this.exportProcessorId,
      state: this.state,
      force: this.force,
      createdAt: APIData.formatDate(this.createdAt),
      sendAt: APIData.formatDate(this.sendAt),
      startedAt: APIData.formatDate(this.startedAt),
      completedAt: APIData.formatDate(this.completedAt),
      retryCount: this.retryCount,
      oldProfileProperties: this.oldProfileProperties,
      newProfileProperties: this.newProfileProperties,
      oldGroups: this.oldGroups,
      newGroups: this.newGroups,
      toDelete: this.toDelete,
      hasChanges: this.hasChanges,
      errorMessage: this.errorMessage,
      errorLevel: this.errorLevel,
    };
  }

  // --- Class Methods --- //

  static defaultState = "pending";

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: Export) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeCreate
  static generateId(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeSave
  static ensureErrorLevel(instance) {
    if (instance.errorMessage && !instance.errorLevel) {
      instance.errorLevel = "error";
    }
  }

  static async sweep(limit: number) {
    const days = parseInt(
      (await plugin.readSetting("core", "sweeper-delete-old-exports-days"))
        .value
    );

    const whereDate = Moment()
      .subtract(days, "days")
      .format("YYYY-MM-DD HH:mm:ss");

    // for SQLite secondary changes queries
    let responseCountWithCompleteExport: number;
    let responseCountWithNoCompleteExports: number;

    // 1. Delete Exports for the Profile older than the oldest complete Export
    const rowsWithCompleteExport: { id: string }[] = await api.sequelize.query(
      `
      DELETE FROM exports
      WHERE id IN (
        SELECT id FROM exports
        WHERE "createdAt" < '${whereDate}'
        AND "createdAt" < (
          SELECT MAX("createdAt")
          FROM exports e2
          WHERE
            e2."profileId" = exports."profileId"
            AND state = 'complete'
        )
        LIMIT ${limit}
      )
     ${config.sequelize.dialect === "postgres" ? "RETURNING id" : ""}
      ;`,
      { type: QueryTypes.SELECT }
    );

    if (config.sequelize.dialect === "sqlite") {
      const changesRows = await api.sequelize.query(
        "SELECT changes() as count;",
        { type: QueryTypes.SELECT }
      );
      responseCountWithCompleteExport = changesRows[0].count;
    }

    // 2. If there are no complete Exports for the Profile, any old Exports can be deleted
    const rowsWithNoCompleteExport: { id: string }[] =
      await api.sequelize.query(
        `
      DELETE FROM exports
      WHERE id IN (
        SELECT id FROM exports
        WHERE "createdAt" < '${whereDate}'
        AND 0 = (
          SELECT COUNT(id)
          FROM exports e2
          WHERE
            e2."profileId" = exports."profileId"
            AND state = 'complete'
        )
        LIMIT ${limit}
      )
     ${config.sequelize.dialect === "postgres" ? "RETURNING id" : ""}
      ;`,
        { type: QueryTypes.SELECT }
      );

    if (config.sequelize.dialect === "sqlite") {
      const changesRows = await api.sequelize.query(
        "SELECT changes() as count;",
        { type: QueryTypes.SELECT }
      );
      responseCountWithNoCompleteExports = changesRows[0].count;
    }

    return {
      count:
        config.sequelize.dialect === "postgres"
          ? rowsWithCompleteExport.length + rowsWithNoCompleteExport.length
          : responseCountWithCompleteExport +
            responseCountWithNoCompleteExports,
      days,
    };
  }
}
