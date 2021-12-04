import { api } from "actionhero";
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
  AfterSave,
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
import { FilterHelper } from "../modules/filterHelper";
import { Filter } from "./Filter";
import { ScheduleConfigurationObject } from "../classes/codeConfig";

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

export interface ScheduleFiltersWithKey extends FilterHelper.FiltersWithKey {}

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
  @Default(null)
  @Column
  locked: string;

  @AllowNull(false)
  @Default(false)
  @Column
  recurring: boolean;

  @Column
  recurringFrequency: number;

  @AllowNull(false)
  @Default(false)
  @Column
  confirmRecords: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  refreshEnabled: boolean;

  @HasMany(() => Option, {
    foreignKey: "ownerId",
    scope: { ownerType: "schedule" },
  })
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

  @HasMany(() => Filter, {
    foreignKey: "ownerId",
    scope: { ownerType: "schedule" },
  })
  filters: Filter[];

  @HasMany(() => Run, {
    foreignKey: "creatorId",
    scope: { creatorType: "schedule" },
  })
  runs: Run[];

  @BelongsTo(() => Source)
  source: Source;

  async getOptions(sourceFromEnvironment = true) {
    return OptionHelper.getOptions(this, sourceFromEnvironment);
  }

  async setOptions(options: SimpleScheduleOptions) {
    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (!hasChanges) return;
    if (this.state !== "ready") return;

    await this.resetHighWatermarks();
    await this.enqueueRun();
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

  async getFilters() {
    return FilterHelper.getFilters(this);
  }

  async setFilters(
    filters: ScheduleFiltersWithKey[],
    externallyValidate = true
  ) {
    return FilterHelper.setFilters(this, filters, externallyValidate);
  }

  async afterSetFilters(hasChanges: boolean) {
    if (!hasChanges) return;
    if (this.state !== "ready") return;

    await this.resetHighWatermarks();
    await this.enqueueRun();
  }

  async shouldRun(
    options: { ignoreDeltas?: boolean; runIfNotRecurring?: boolean } = {}
  ) {
    return ScheduleOps.shouldRun(this, options);
  }

  async runPercentComplete(run: Run) {
    return ScheduleOps.runPercentComplete(this, run);
  }

  async apiData() {
    const options = await this.getOptions(null);
    const filters = await this.getFilters();

    return {
      id: this.id,
      name: this.name,
      state: this.state,
      sourceId: this.sourceId,
      recurring: this.recurring,
      refreshEnabled: this.refreshEnabled,
      locked: this.locked,
      confirmRecords: this.confirmRecords,
      options,
      filters,
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

    return run;
  }

  async resetHighWatermarks() {
    let runs: Run[] = await this.$get("runs", {
      where: { highWaterMark: { [Op.ne]: null } },
      scope: null,
      limit: 1,
    });

    while (runs.length > 0) {
      runs = await this.$get("runs", {
        where: { highWaterMark: { [Op.ne]: null } },
        scope: null,
        limit: 100,
      });

      for (const run of runs) if (run.state === "running") await run.stop();
      // sequelize doesn't seem to be able to set a value back to null
      if (runs.length > 0) {
        await api.sequelize.query(
          `UPDATE "runs" SET "highWaterMark" = NULL WHERE "id" IN (${runs
            .map((r) => `'${r.id}'`)
            .join(", ")});`
        );
      }
    }
  }

  async run(run: Run) {
    return ScheduleOps.run(this, run);
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject(): Promise<ScheduleConfigurationObject> {
    const { name, recurring, recurringFrequency, confirmRecords } = this;

    this.source = await this.$get("source");
    const sourceId = this.source?.getConfigId();

    if (!sourceId || !name) return;

    const options = await this.getOptions(false);
    const filters = await this.getFilters();

    return {
      class: "Schedule",
      id: this.getConfigId(),
      name,
      sourceId,
      recurring,
      recurringFrequency,
      confirmRecords,
      options,
      filters,
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

  @AfterSave
  static async runAfterSave(instance: Schedule) {
    const shouldRun = await instance.shouldRun();
    if (shouldRun) await instance.enqueueRun();
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
  static async destroyFilters(instance: Property) {
    await Filter.destroy({
      where: { ownerId: instance.id, ownerType: "schedule" },
    });
  }

  @AfterDestroy
  static async destroyRuns(instance: Schedule) {
    const runs = await Run.findAll({
      where: { creatorId: instance.id },
    });

    for (const i in runs) await runs[i].destroy();
  }
}
