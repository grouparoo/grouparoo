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
  HasMany,
} from "sequelize-typescript";
import * as uuid from "uuid";
import { Destination } from "./Destination";
import { plugin } from "../modules/plugin";
import Moment from "moment";
import { APIData } from "../modules/apiData";
import { StateMachine } from "../modules/stateMachine";
import { config } from "actionhero";
import { Export } from "./Export";
import { ExportProcessorOps } from "../modules/ops/exportProcessor";
import { Op } from "sequelize/types";

const ERROR_LEVELS = ["error", "info"] as const;
export type ExportProcessorErrorLevel = typeof ERROR_LEVELS[number];

export const ExportProcessorStates = [
  "pending", // waiting to be processed
  "failed", // something went wrong and we won't try again
  "complete", // OK!
] as const;

const STATE_TRANSITIONS = [
  { from: "pending", to: "failed", checks: [] },
  {
    from: "pending",
    to: "complete",
    checks: [
      (instance: ExportProcessor) => instance.ensureAllExportsProcessed(),
    ],
  },
];

@Table({ tableName: "exportProcessors", paranoid: false })
export class ExportProcessor extends Model {
  idPrefix() {
    return "prc";
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

  @Column
  remoteKey: string;

  @AllowNull(false)
  @Default(ExportProcessor.defaultState)
  @Column(DataType.ENUM(...ExportProcessorStates))
  state: typeof ExportProcessorStates[number];

  @Column
  startedAt: Date;

  @Column
  processAt: Date;

  @Default(0)
  @Column
  retryCount: number;

  @Column
  completedAt: Date;

  @Column
  errorMessage: string;

  @HasMany(() => Export)
  exports: Export[];

  @Is("ofValidErrorLevel", (value) => {
    if (value && !ERROR_LEVELS.includes(value)) {
      throw new Error(`errorLevel must be one of: ${ERROR_LEVELS.join(",")}`);
    }
  })
  @Column(DataType.ENUM(...ERROR_LEVELS))
  errorLevel: ExportProcessorErrorLevel;

  @BelongsTo(() => Destination)
  destination: Destination;

  async setError(error: Error, retryDelay: number = config.tasks.timeout) {
    return ExportProcessorOps.setError(this, error, retryDelay);
  }

  async retry(retryDelay: number = config.tasks.timeout) {
    return ExportProcessorOps.retry(this, retryDelay);
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
      state: this.state,
      createdAt: APIData.formatDate(this.createdAt),
      processAt: APIData.formatDate(this.processAt),
      startedAt: APIData.formatDate(this.startedAt),
      completedAt: APIData.formatDate(this.completedAt),
      retryCount: this.retryCount,
      errorMessage: this.errorMessage,
      errorLevel: this.errorLevel,
    };
  }

  async getExportsToProcess() {
    return ExportProcessorOps.getExportsToProcess(this);
  }

  async ensureAllExportsProcessed() {
    const pendingExportsCount = await this.$count("exports", {
      where: { state: { [Op.notIn]: ["complete", "failed"] } },
    });

    if (pendingExportsCount > 0) {
      throw new Error(
        "Cannot mark export processor as complete because some exports have not been processed"
      );
    }
  }

  // --- Class Methods --- //

  static defaultState = "pending";

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async updateState(instance: ExportProcessor) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeCreate
  static generateId(instance) {
    if (!instance.id) {
      instance.id = `${instance.idPrefix()}_${uuid.v4()}`;
    }
  }

  @BeforeSave
  static ensureErrorLevel(instance: ExportProcessor) {
    if (instance.errorMessage && !instance.errorLevel) {
      instance.errorLevel = "error";
    }
  }

  static async sweep(limit: number) {
    throw new Error("not implemented");
  }
}
