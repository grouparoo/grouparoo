import {
  Table,
  Column,
  AllowNull,
  BelongsTo,
  HasOne,
  HasMany,
  Length,
  BeforeCreate,
  BeforeSave,
  AfterDestroy,
  BeforeDestroy,
  ForeignKey,
  Default,
  DataType,
  DefaultScope,
  AfterSave,
} from "sequelize-typescript";
import { Op, Transaction } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Schedule } from "./Schedule";
import { Property } from "./Property";
import { Option } from "./Option";
import { App } from "./App";
import { Run } from "./Run";
import { Profile } from "./Profile";
import { Mapping } from "./Mapping";
import { plugin } from "../modules/plugin";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";
import { PropertyFiltersWithKey } from "../classes/plugin";
import { SourceOps } from "../modules/ops/source";
import { LockableHelper } from "../modules/lockableHelper";

export interface SimpleSourceOptions extends OptionHelper.SimpleOptions {}
export interface SourceMapping extends MappingHelper.Mappings {}

const STATES = ["draft", "ready"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [
      (instance: Source, transaction?: Transaction) =>
        instance.validateOptions(null, transaction),
      (instance: Source, transaction?: Transaction) =>
        instance.validateMapping(transaction),
    ],
  },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "sources", paranoid: false })
export class Source extends LoggedModel<Source> {
  guidPrefix() {
    return "src";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  appGuid: string;

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(true)
  @Column
  locked: string;

  @BelongsTo(() => App)
  app: App;

  @HasOne(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Property)
  properties: Property[];

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  async getOptions(sourceFromEnvironment = true, transaction?: Transaction) {
    return OptionHelper.getOptions(this, sourceFromEnvironment, transaction);
  }

  async setOptions(options: SimpleSourceOptions, transaction?: Transaction) {
    return OptionHelper.setOptions(this, options, transaction);
  }

  async validateOptions(
    options?: SimpleSourceOptions,
    transaction?: Transaction
  ) {
    if (!options) options = await this.getOptions(true, transaction);
    return OptionHelper.validateOptions(this, options, null, transaction);
  }

  async getPlugin(transaction?: Transaction) {
    return OptionHelper.getPlugin(this, transaction);
  }

  async parameterizedOptions(run?: Run): Promise<SimpleSourceOptions> {
    const parameterizedOptions = {};
    const options = await this.getOptions();
    const keys = Object.keys(options);
    for (const i in keys) {
      const k = keys[i];
      parameterizedOptions[k] =
        typeof options[k] === "string"
          ? await plugin.replaceTemplateRunVariables(options[k], run)
          : options[k];
    }

    return parameterizedOptions;
  }

  async getMapping(transaction?: Transaction) {
    return MappingHelper.getMapping(this, transaction);
  }

  async setMapping(mappings: SourceMapping, transaction?: Transaction) {
    return MappingHelper.setMapping(this, mappings, transaction);
  }

  async validateMapping(transaction?: Transaction) {
    const { pluginConnection } = await this.getPlugin(transaction);
    if (pluginConnection.skipSourceMapping) return true;

    const previewAvailable = await this.previewAvailable();
    if (!previewAvailable) {
      return true;
    }

    const mapping = await this.getMapping(transaction);
    if (Object.keys(mapping).length === 1) {
      return true;
    } else {
      throw new Error("mapping not set");
    }
  }

  async sourceConnectionOptions(
    sourceOptions: SimpleSourceOptions = {},
    transaction?: Transaction
  ) {
    return SourceOps.sourceConnectionOptions(this, sourceOptions, transaction);
  }

  async sourcePreview(
    sourceOptions?: SimpleSourceOptions,
    transaction?: Transaction
  ) {
    return SourceOps.sourcePreview(this, sourceOptions, transaction);
  }

  async apiData() {
    const app = await this.$get("app", { scope: null });
    const schedule = await this.$get("schedule", { scope: null });

    const options = await this.getOptions();
    const { pluginConnection } = await this.getPlugin();
    const scheduleAvailable = await this.scheduleAvailable();
    const previewAvailable = await this.previewAvailable();
    const mapping = await this.getMapping();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
      mapping,
      app: app ? await app.apiData() : undefined,
      appGuid: this.appGuid,
      scheduleAvailable,
      schedule: schedule ? await schedule.apiData() : undefined,
      previewAvailable,
      locked: this.locked,
      options,
      connection: pluginConnection,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
  }

  async scheduleAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.profiles === "function") {
      return true;
    }
    return false;
  }

  async previewAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.sourcePreview === "function") {
      return true;
    }
    return false;
  }

  async importProfileProperty(
    profile: Profile,
    property: Property,
    propertyOptionsOverride?: OptionHelper.SimpleOptions,
    propertyFiltersOverride?: PropertyFiltersWithKey[],
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      profileProperties?: {};
    } = {}
  ) {
    return SourceOps.importProfileProperty(
      this,
      profile,
      property,
      propertyOptionsOverride,
      propertyFiltersOverride,
      preloadedArgs
    );
  }

  async importProfileProperties(
    profiles: Profile[],
    property: Property,
    propertyOptionsOverride?: OptionHelper.SimpleOptions,
    propertyFiltersOverride?: PropertyFiltersWithKey[],
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      profileProperties?: {};
    } = {}
  ) {
    return SourceOps.importProfileProperties(
      this,
      profiles,
      property,
      propertyOptionsOverride,
      propertyFiltersOverride,
      preloadedArgs
    );
  }

  async import(profile: Profile) {
    return SourceOps._import(this, profile);
  }

  async bootstrapUniqueProperty(
    key: string,
    type: string,
    mappedColumn: string,
    guid?: string,
    transaction?: Transaction
  ) {
    return SourceOps.bootstrapUniqueProperty(
      this,
      key,
      type,
      mappedColumn,
      guid,
      transaction
    );
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static async ensurePluginConnection(instance: Source) {
    const { plugin } = await instance.getPlugin();
    if (!plugin) {
      throw new Error(
        `cannot find an import connection for a source of ${instance.type}`
      );
    }
  }

  @BeforeCreate
  static async ensureAppReady(instance: Source, { transaction }) {
    const app = await App.findByGuid(instance.appGuid, transaction);
    if (app.state !== "ready") throw new Error(`app ${app.guid} is not ready`);
  }

  @BeforeSave
  static async ensureUniqueName(instance: Source, { transaction }) {
    const count = await Source.count({
      where: {
        guid: { [Op.ne]: instance.guid },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
      transaction,
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async updateState(instance: Source, { transaction }) {
    await StateMachine.transition(instance, STATE_TRANSITIONS, transaction);
  }

  @BeforeSave
  static async noUpdateIfLocked(instance: Source) {
    await LockableHelper.beforeSave(instance, ["state"]);
  }

  @AfterSave
  static async updateRuleDirectMappings(instance: Source, { transaction }) {
    const properties = await instance.$get("properties", { transaction });
    for (const i in properties) {
      const property = properties[i];
      await Property.determineDirectlyMapped(property, { transaction });
      if (property.changed()) await property.save({ transaction });
    }
  }

  @BeforeDestroy
  static async ensureNoSchedule(instance: Source) {
    const schedule = await instance.$get("schedule", { scope: null });
    if (schedule) {
      throw new Error("cannot delete a source that has a schedule");
    }
  }

  @BeforeDestroy
  static async ensureNoProperties(instance: Source) {
    const properties = await instance.$get("properties", {
      scope: null,
    });
    if (properties.length > 0) {
      throw new Error("cannot delete a source that has a property");
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyOptions(instance: Source, { transaction }) {
    return Option.destroy({
      where: { ownerGuid: instance.guid },
      transaction,
    });
  }

  @AfterDestroy
  static async destroyMappings(instance: Source, { transaction }) {
    return Mapping.destroy({
      where: { ownerGuid: instance.guid },
      transaction,
    });
  }
}
