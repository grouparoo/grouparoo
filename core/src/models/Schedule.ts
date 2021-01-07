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
import { CLS } from "../modules/cls";

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
    appGuid: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceGuid: string;
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
    checks: [(instance: Schedule) => instance.validateOptions(null)],
  },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "schedules", paranoid: false })
export class Schedule extends LoggedModel<Schedule> {
  guidPrefix() {
    return "sch";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => Source)
  sourceGuid: string;

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

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

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
      guid: this.guid,
      name: this.name,
      state: this.state,
      sourceGuid: this.sourceGuid,
      recurring: this.recurring,
      locked: this.locked,
      options,
      recurringFrequency: this.recurringFrequency,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async enqueueRun() {
    const run = await Run.create({
      creatorGuid: this.guid,
      creatorType: "schedule",
      state: "running",
    });

    log(
      `[ run ] starting run ${run.guid} for schedule ${this.name} (${this.guid})`,
      "notice"
    );

    await CLS.enqueueTask(
      "schedule:run",
      { scheduleGuid: this.guid, runGuid: run.guid },
      "schedules"
    );
  }

  async run(run: Run) {
    return ScheduleOps.run(this, run);
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({
      where: { guid },
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeSave
  static async ensureSourceOptions(instance: Schedule) {
    const source = await Source.findByGuid(instance.sourceGuid);
    const sourceOptions = await source.getOptions(true);
    await source.validateOptions(sourceOptions);
  }

  @BeforeSave
  static async ensureSourceMapping(instance: Schedule) {
    const source = await Source.findByGuid(instance.sourceGuid);
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
      const source = await Source.findByGuid(instance.sourceGuid);
      instance.name = `${source.name} schedule`;
    }
  }

  @BeforeCreate
  static async ensureOnePerSource(instance: Schedule) {
    const existingCount = await Schedule.scope(null).count({
      where: {
        sourceGuid: instance.sourceGuid,
      },
    });

    if (existingCount > 0) {
      throw new Error(`source ${instance.sourceGuid} already has a schedule`);
    }
  }

  @BeforeCreate
  static async ensureSourceCanUseSchedule(instance: Schedule) {
    const source = await Source.findByGuid(instance.sourceGuid);

    if (source.state !== "ready") throw new Error("source is not ready");

    const scheduleAvailable = await source.scheduleAvailable();
    if (!scheduleAvailable) {
      throw new Error(
        `source ${source.name} (${instance.sourceGuid}) cannot have a schedule`
      );
    }
  }

  @BeforeSave
  static async ensureUniqueName(instance: Schedule) {
    const count = await Schedule.scope(null).count({
      where: {
        guid: { [Op.ne]: instance.guid },
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
    return Option.destroy({ where: { ownerGuid: instance.guid } });
  }

  @AfterDestroy
  static async stopRuns(instance: Schedule) {
    const runs = await Run.findAll({
      where: { creatorGuid: instance.guid, state: "running" },
    });

    for (const i in runs) {
      await runs[i].update({ state: "stopped" });
    }
  }
}
