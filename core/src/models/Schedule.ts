import { log } from "actionhero";
import {
  Table,
  Column,
  AllowNull,
  Length,
  Default,
  BelongsTo,
  HasMany,
  ForeignKey,
  BeforeValidate,
  BeforeUpdate,
  BeforeCreate,
  BeforeSave,
  AfterDestroy,
  DataType,
  DefaultScope,
  BeforeDestroy,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Source, SimpleSourceOptions } from "./Source";
import { Property } from "./Property";
import { App, SimpleAppOptions } from "./App";
import { Run } from "./Run";
import { Option } from "./Option";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { ScheduleOps } from "../modules/ops/schedule";
import { LockableHelper } from "../modules/lockableHelper";
import { ConfigWriter } from "../modules/configWriter";
import { CLS } from "../modules/cls";
import { APIData } from "../modules/apiData";

/**
 * Metadata and methods to return the options a Schedule for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionScheduleOption {
  key: string;
  required: boolean;
  description: string;
  type: "list" | "text" | "textarea";
  options: (argument: {
    connection: any;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SimpleSourceOptions;
    properties: Property[];
  }) => Promise<
    Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>
  >;
}

export interface SimpleScheduleOptions extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [(instance: Schedule) => instance.validateOptions()],
  },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "schedules", paranoid: false })
export class Schedule extends LoggedModel<Schedule> {
  idPrefix() {
    return "sch";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => Source)
  sourceId: string;

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  name: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(false)
  @Default(false)
  @Column
  recurring: boolean;

  @Column
  recurringFrequency: number;

  @HasMany(() => Option, {
    foreignKey: "ownerId",
    scope: { ownerType: "schedule" },
  })
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

  @BelongsTo(() => Source)
  source: Source;

  async getOptions(sourceFromEnvironment = true) {
    return OptionHelper.getOptions(this, sourceFromEnvironment);
  }

  async setOptions(options: SimpleScheduleOptions) {
    const existingOptions = await this.getOptions(true);
    for (const key in options) {
      if (existingOptions[key] && existingOptions[key] !== options[key]) {
        throw new Error(
          `schedule already has option set for ${key}, cannot update`
        );
      }
    }

    return OptionHelper.setOptions(this, options);
  }

  async validateOptions(options?: SimpleScheduleOptions) {
    if (!options) options = await this.getOptions(true);
    return OptionHelper.validateOptions(this, options);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async pluginOptions() {
    return ScheduleOps.pluginOptions(this);
  }

  async runPercentComplete(run: Run) {
    return ScheduleOps.runPercentComplete(this, run);
  }

  async apiData() {
    const options = await this.getOptions(null);

    return {
      id: this.id,
      name: this.name,
      state: this.state,
      sourceId: this.sourceId,
      recurring: this.recurring,
      locked: this.locked,
      options,
      recurringFrequency: this.recurringFrequency,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  async enqueueRun() {
    const run = await Run.create({
      creatorId: this.id,
      creatorType: "schedule",
      state: "running",
    });

    await CLS.enqueueTask(
      "schedule:run",
      { scheduleId: this.id, runId: run.id },
      "schedules"
    );
  }

  async run(run: Run) {
    return ScheduleOps.run(this, run);
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject() {
    const { name, recurring, recurringFrequency } = this;

    this.source = await this.$get("source");
    const sourceId = this.source?.getConfigId();

    if (!sourceId || !name) return;

    const options = await this.getOptions(false);
    return {
      class: "Schedule",
      id: this.getConfigId(),
      name,
      sourceId,
      recurring,
      recurringFrequency,
      options,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeSave
  static async ensureSourceOptions(instance: Schedule) {
    const source = await Source.findById(instance.sourceId);
    const sourceOptions = await source.getOptions(true);
    await source.validateOptions(sourceOptions);
  }

  @BeforeSave
  static async ensureSourceMapping(instance: Schedule) {
    const source = await Source.findById(instance.sourceId);
    if (!source.scheduleAvailable()) {
      throw new Error(`a ${source.type} source cannot have a schedule`);
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance, ["state"]);
  }

  @BeforeUpdate
  static async checkRecurringFrequency(instance: Schedule) {
    // we cannot use the @Min validator as null is also allowed
    if (instance.recurring) {
      if (
        !instance.recurringFrequency ||
        instance.recurringFrequency < 1000 * 60
      ) {
        throw new Error(
          "recurring frequency is required to be one minute or greater"
        );
      }
    }
  }

  @BeforeValidate
  static async ensureName(instance: Schedule) {
    if (!instance.name) {
      const source = await Source.findById(instance.sourceId);
      instance.name = `${source.name} schedule`;
    }
  }

  @BeforeCreate
  static async ensureOnePerSource(instance: Schedule) {
    const existingCount = await Schedule.scope(null).count({
      where: {
        sourceId: instance.sourceId,
      },
    });

    if (existingCount > 0) {
      throw new Error(`source ${instance.sourceId} already has a schedule`);
    }
  }

  @BeforeCreate
  static async ensureSourceCanUseSchedule(instance: Schedule) {
    const source = await Source.findById(instance.sourceId);

    if (source.state !== "ready") throw new Error("source is not ready");

    const scheduleAvailable = await source.scheduleAvailable();
    if (!scheduleAvailable) {
      throw new Error(
        `source ${source.name} (${instance.sourceId}) cannot have a schedule`
      );
    }
  }

  @BeforeSave
  static async ensureUniqueName(instance: Schedule) {
    const count = await Schedule.scope(null).count({
      where: {
        id: { [Op.ne]: instance.id },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async updateState(instance: Schedule) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyAppOptions(instance: Schedule) {
    return Option.destroy({
      where: { ownerId: instance.id, ownerType: "schedule" },
    });
  }

  @AfterDestroy
  static async destroyRuns(instance: Schedule) {
    const runs = await Run.findAll({
      where: { creatorId: instance.id },
    });

    for (const i in runs) {
      await runs[i].destroy();
    }
  }
}
