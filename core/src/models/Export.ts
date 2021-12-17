import {
  Table,
  Column,
  AllowNull,
  Is,
  BelongsTo,
  BeforeSave,
  ForeignKey,
  DataType,
  Default,
  AfterUpdate,
} from "sequelize-typescript";
import { appendFile } from "fs/promises";
import { api, config, log } from "actionhero";
import { Destination } from "./Destination";
import { GrouparooRecord } from "./GrouparooRecord";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { QueryTypes } from "sequelize";
import { ExportOps } from "../modules/ops/export";
import { APIData } from "../modules/apiData";
import { StateMachine } from "../modules/stateMachine";
import { ExportProcessor } from "./ExportProcessor";
import { Errors } from "../modules/errors";
import { PropertyTypes } from "./Property";
import { CommonModel } from "../classes/commonModel";

/**
 * The GrouparooRecord Properties in their normal data types (string, boolean, date, etc)
 */
export interface ExportRecordProperties {
  [key: string]: any | any[];
}

/**
 * The GrouparooRecord Properties as stringified rawValues + types
 */
export interface ExportRecordPropertiesWithType {
  [key: string]: {
    type: typeof PropertyTypes[number];
    rawValue: string | string[];
  };
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
export class Export extends CommonModel<Export> {
  idPrefix() {
    return "exp";
  }

  @AllowNull(false)
  @ForeignKey(() => Destination)
  @Column
  destinationId: string;

  @AllowNull(false)
  @ForeignKey(() => GrouparooRecord)
  @Column
  recordId: string;

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
  get oldRecordProperties(): ExportRecordProperties {
    return ExportOps.deserializeExportRecordProperties(
      //@ts-ignore
      this.getDataValue("oldRecordProperties")
    );
  }
  set oldRecordProperties(value: ExportRecordProperties) {
    //@ts-ignore
    this.setDataValue("oldRecordProperties", JSON.stringify(value));
  }

  @Column(DataType.TEXT)
  get newRecordProperties(): ExportRecordProperties {
    return ExportOps.deserializeExportRecordProperties(
      //@ts-ignore
      this.getDataValue("newRecordProperties")
    );
  }
  set newRecordProperties(value: ExportRecordProperties) {
    //@ts-ignore
    this.setDataValue("newRecordProperties", JSON.stringify(value));
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

  @BelongsTo(() => GrouparooRecord)
  record: GrouparooRecord;

  async setError(error: Error, retryDelay?: number) {
    const maxExportAttempts = parseInt(
      (await plugin.readSetting("core", "exports-max-retries-count")).value
    );

    this.errorMessage = error.message || error.toString();
    if (error["errorLevel"]) this.errorLevel = error["errorLevel"];

    if (!retryDelay) this.retryCount++;

    if (this.retryCount >= maxExportAttempts) {
      this.state = "failed";
      this.sendAt = null;
    } else if (this.errorLevel === "info") {
      this.state = "failed";
    } else {
      this.state = "pending";
      this.exportProcessorId = null;
      this.sendAt = Moment()
        .add(retryDelay ?? config.tasks.timeout, "ms")
        .toDate();
      this.startedAt = null;
    }

    return this.save();
  }

  async retry(
    retryDelay: number = config.tasks.timeout,
    skipCount: boolean = false
  ) {
    const maxExportAttempts = parseInt(
      (await plugin.readSetting("core", "exports-max-retries-count")).value
    );

    if (!skipCount) this.retryCount++;
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
            modelId: destination.modelId,
          }
        : undefined,
      destinationName: destination ? destination.name : null,
      recordId: this.recordId,
      exportProcessorId: this.exportProcessorId,
      state: this.state,
      force: this.force,
      createdAt: APIData.formatDate(this.createdAt),
      sendAt: APIData.formatDate(this.sendAt),
      startedAt: APIData.formatDate(this.startedAt),
      completedAt: APIData.formatDate(this.completedAt),
      retryCount: this.retryCount,
      oldRecordProperties: this.oldRecordProperties,
      newRecordProperties: this.newRecordProperties,
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

  @BeforeSave
  static ensureErrorLevel(instance) {
    if (instance.errorMessage && !instance.errorLevel) {
      instance.errorLevel = "error";
    }
  }

  @AfterUpdate
  static async logExport(instance: Export) {
    if (!process.env.GROUPAROO_EXPORT_LOG) return;

    if (
      instance.changed("state") &&
      ["canceled", "failed", "complete"].includes(instance.state)
    ) {
      const exportData = {
        id: instance.id,
        state: instance.state,
        recordId: instance.recordId,
        modelId: (await instance.$get("record")).modelId,
        destinationId: instance.destinationId,
        newRecordProperties: instance.newRecordProperties,
        newGroups: instance.newGroups,
        toDelete: instance.toDelete,
        errorMessage: instance.errorMessage,
        errorLevel: instance.errorLevel,
        timestamp: new Date().toISOString(),
      };

      const message = JSON.stringify(exportData);

      if (process.env.GROUPAROO_EXPORT_LOG === "stdout") {
        log(`[ export ] ${message}`);
      } else {
        await appendFile(process.env.GROUPAROO_EXPORT_LOG, `${message}\n`);
      }
    }
  }

  static async sweep(limit: number) {
    const days = 90; // keep all exports for at least 90 days
    const whereDate = Moment()
      .subtract(days, "days")
      .format("YYYY-MM-DD HH:mm:ss");

    // for SQLite secondary changes queries
    let responseCountWithCompleteExport: number;
    let responseCountWithNoRecord: number;
    let responseCountWithNoDestination: number;

    // 1. Delete Complete Exports for the GrouparooRecord older than the oldest complete Export for this Record+Destination
    const rowsWithCompleteExport: { id: string }[] = await api.sequelize.query(
      `
      DELETE FROM exports
      WHERE id IN (
        SELECT id FROM exports
        WHERE "state" IN ('complete', 'failed', 'canceled')
        AND "createdAt" < '${whereDate}'
        AND "createdAt" < (
          SELECT MAX("createdAt")
          FROM exports e2
          WHERE
            state = 'complete'
            AND e2."recordId" = exports."recordId"
            AND e2."destinationId" = exports."destinationId"
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
      responseCountWithCompleteExport = changesRows[0]["count"];
    }

    // 2. Delete exports older than the limit which no longer have a Record
    const rowsWithNoRecord: { id: string }[] = await api.sequelize.query(
      `
      DELETE FROM exports
      WHERE id IN (
        SELECT id FROM exports
        WHERE "createdAt" < '${whereDate}'
        AND (
          SELECT id
          FROM records
          WHERE "records"."id" = "exports"."recordId"
        ) IS NULL
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
      responseCountWithNoRecord = changesRows[0]["count"];
    }

    // 3. Delete exports older than the limit which no longer have a Destination
    const rowsWithNoDestination: { id: string }[] = await api.sequelize.query(
      `
          DELETE FROM exports
          WHERE id IN (
            SELECT id FROM exports
            WHERE "createdAt" < '${whereDate}'
            AND (
              SELECT id
              FROM destinations
              WHERE "destinations"."id" = "exports"."destinationId"
            ) IS NULL
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
      responseCountWithNoDestination = changesRows[0]["count"];
    }

    return {
      count:
        config.sequelize.dialect === "postgres"
          ? rowsWithCompleteExport.length +
            rowsWithNoRecord.length +
            rowsWithNoDestination.length
          : responseCountWithCompleteExport +
            responseCountWithNoRecord +
            responseCountWithNoDestination,
      days,
    };
  }
}
