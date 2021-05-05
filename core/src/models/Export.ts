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
import { Op } from "sequelize";
import { ExportOps } from "../modules/ops/export";
import { APIData } from "../modules/apiData";
import { StateMachine } from "../modules/stateMachine";
import { config } from "actionhero";

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

const ERROR_LEVELS = ["error", "info"] as const;
export type ExportErrorLevel = typeof ERROR_LEVELS[number];

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

const MaxExportAttempts = 3; // TODO: Be a Setting

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

  @AllowNull(false)
  @Default("pending")
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
    if (value && !ERROR_LEVELS.includes(value)) {
      throw new Error(`errorLevel must be one of: ${ERROR_LEVELS.join(",")}`);
    }
  })
  @Column(DataType.ENUM(...ERROR_LEVELS))
  errorLevel: ExportErrorLevel;

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
    this.errorMessage = error.message || error.toString();
    if (error["errorLevel"]) this.errorLevel = error["errorLevel"];

    this.retryCount++;
    if (this.retryCount >= MaxExportAttempts) {
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
    const destination = await this.$get("destination", {
      scope: null,
    });

    return {
      id: this.id,
      destination:
        destination && includeDestination
          ? await destination.apiData(false, false)
          : null,
      destinationName: destination ? destination.name : null,
      profileId: this.profileId,
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

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: Profile) {
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

    const _exports = await Export.findAll({
      where: {
        createdAt: {
          [Op.lt]: Moment().subtract(days, "days").toDate(),
        },
      },
      order: [["createdAt", "desc"]],
      limit,
    });

    for (const i in _exports) {
      await _exports[i].destroy();
    }

    return { count: _exports.length, days };
  }
}
