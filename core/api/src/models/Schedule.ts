import { log, task } from "actionhero";
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
} from "sequelize-typescript";
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Source, SimpleSourceOptions, SourceMapping } from "./Source";
import { App, SimpleAppOptions } from "./App";
import { Run, HighWaterMark } from "./Run";
import { Option } from "./Option";
import { plugin } from "../modules/plugin";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";

/**
 * Metadata and methods to return the options a Schedule for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionScheduleOption {
  key: string;
  required: boolean;
  description: string;
  type: string;
  options: (argument: {
    connection: any;
    app: App;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SimpleSourceOptions;
  }) => Promise<
    Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>
  >;
}

export interface SimpleScheduleOptions extends OptionHelper.SimpleOptions {}

const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: ["validateOptions"] },
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
  @Column(DataType.ENUM("draft", "ready"))
  state: string;

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

  @BeforeSave
  static async ensureSourceOptions(instance: Schedule) {
    const source = await Source.findByGuid(instance.sourceGuid);
    const sourceOptions = await source.getOptions();
    await source.validateOptions(sourceOptions);
  }

  @BeforeSave
  static async ensureSourceMapping(instance: Schedule) {
    const source = await Source.findByGuid(instance.sourceGuid);
    const sourceMapping = await source.getMapping();
    if (!sourceMapping || Object.keys(sourceMapping).length === 0) {
      throw new Error("source has no mapping");
    }
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

  @BeforeSave
  static async ensureUniqueName(instance: Schedule) {
    const count = await Schedule.scope(null).count({
      where: {
        guid: { [Op.ne]: instance.guid },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) {
      throw new Error(`name "${instance.name}" is already in use`);
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

    if (source.state !== "ready") {
      throw new Error("source is not ready");
    }

    const scheduleAvailable = await source.scheduleAvailable();
    if (!scheduleAvailable) {
      throw new Error(`source ${instance.sourceGuid} cannot have a schedule`);
    }
  }

  @BeforeSave
  static async updateState(instance: Schedule) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterDestroy
  static async destroyAppOptions(instance: Schedule) {
    return Option.destroy({
      where: {
        ownerGuid: instance.guid,
      },
    });
  }

  @AfterDestroy
  static async destroyRuns(instance: Schedule) {
    await Run.destroy({
      where: { creatorGuid: instance.guid },
    });
  }

  async getOptions() {
    return OptionHelper.getOptions(this);
  }

  async setOptions(options: SimpleScheduleOptions) {
    const existingOptions = await this.getOptions();
    for (const key in options) {
      if (existingOptions[key]) {
        throw new Error(
          `schedule already has option set for ${key}, cannot update`
        );
      }
    }

    return OptionHelper.setOptions(this, options);
  }

  async validateOptions(options?: SimpleSourceOptions) {
    if (!options) {
      options = await this.getOptions();
    }

    return OptionHelper.validateOptions(this, options);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async pluginOptions() {
    const source = await Source.findByGuid(this.sourceGuid);
    const { pluginConnection } = await source.getPlugin();

    const response: Array<{
      key: string;
      description: string;
      required: boolean;
      type: string;
      options: Array<{
        key: string;
        description?: string;
        examples?: Array<any>;
      }>;
    }> = [];

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }
    if (!pluginConnection.scheduleOptions) {
      return response;
    }

    const app = await source.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    for (const i in pluginConnection.scheduleOptions) {
      const opt = pluginConnection.scheduleOptions[i];
      const options = await opt.options({
        connection,
        app,
        appOptions,
        source,
        sourceOptions,
        sourceMapping,
      });

      response.push({
        key: opt.key,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        options,
      });
    }

    return response;
  }

  async apiData() {
    const source = await this.$get("source");
    const options = await this.getOptions();

    return {
      guid: this.guid,
      name: this.name,
      state: this.state,
      source: source ? await source.apiData(false) : undefined,
      recurring: this.recurring,
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
      `[ run ] starting run ${run.guid} for schedule ${this.guid}, ${this.name}`,
      "notice"
    );

    await task.enqueue(
      "schedule:run",
      { scheduleGuid: this.guid, runGuid: run.guid },
      "schedules"
    );
  }

  async run(run: Run) {
    const options = await this.getOptions();
    const source = await this.$get("source");
    const app = await App.findByGuid(source.appGuid);
    const { pluginConnection } = await source.getPlugin();
    const method = pluginConnection.methods.profiles;

    if (!method) {
      throw new Error(`cannot find an import method for app type ${app.type}`);
    }

    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    await app.validateOptions(appOptions);
    const connection = await app.getConnection();
    await source.validateOptions(sourceOptions);

    const limit: number = parseInt(
      (await plugin.readSetting("core", "runs-profile-batch-size")).value
    );

    let highWaterMark = {};
    let sourceOffset: number | string = 0;

    if (run.highWaterMark && Object.keys(run.highWaterMark).length > 0) {
      highWaterMark = run.highWaterMark;
    } else {
      const previousRun = await run.previousRun();
      if (previousRun?.highWaterMark) {
        highWaterMark = previousRun.highWaterMark;
      }
    }

    if (run.sourceOffset) {
      sourceOffset = run.sourceOffset;
    }

    let importsCount = 0;
    let nextHighWaterMark: HighWaterMark;
    let nextSourceOffset: number | string;

    try {
      const response = await method({
        schedule: this,
        scheduleOptions: options,
        connection,
        app,
        appOptions,
        source,
        sourceOptions,
        sourceMapping,
        run,
        limit,
        highWaterMark,
        sourceOffset,
      });

      importsCount = response.importsCount || 0;
      nextHighWaterMark = response.highWaterMark || {};
      nextSourceOffset = response.sourceOffset || 0;
      await run.update({
        highWaterMark: nextHighWaterMark,
        sourceOffset: nextSourceOffset,
      });
    } catch (error) {
      log(
        `failed run ${run.guid} for schedule ${this.guid}: ${error}`,
        "error",
        error
      );
      run.error = error.stack || error.toString();
      await run.save();
    }

    return {
      importsCount,
      highWaterMark: nextHighWaterMark,
      sourceOffset: nextSourceOffset,
    };
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) {
      throw new Error(`cannot find ${this.name} ${guid}`);
    }
    return instance;
  }
}
