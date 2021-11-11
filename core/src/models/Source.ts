import { Op } from "sequelize";
import {
  AfterDestroy,
  AfterSave,
  AllowNull,
  BeforeCreate,
  BeforeDestroy,
  BeforeSave,
  BelongsTo,
  Column,
  DataType,
  Default,
  DefaultScope,
  ForeignKey,
  HasMany,
  HasOne,
  Length,
  Table,
} from "sequelize-typescript";
import {
  ScheduleConfigurationObject,
  SourceConfigurationObject,
} from "../classes/codeConfig";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { LockableHelper } from "../modules/lockableHelper";
import { SourceOps } from "../modules/ops/source";
import { plugin } from "../modules/plugin";
import { ConfigWriter } from "./../modules/configWriter";
import { MappingHelper } from "./../modules/mappingHelper";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { App } from "./App";
import { Mapping } from "./Mapping";
import { Option } from "./Option";
import { Schedule } from "./Schedule";
import { GrouparooRecord } from "./GrouparooRecord";
import {
  Property,
  PropertyFiltersWithKey,
  SimplePropertyOptions,
  PropertyTypes,
} from "./Property";
import { Run } from "./Run";
import { GrouparooModel } from "./GrouparooModel";
import { ModelGuard } from "../modules/modelGuard";

export interface SimpleSourceOptions extends OptionHelper.SimpleOptions {}
export interface SourceMapping extends MappingHelper.Mappings {}

const STATES = ["draft", "ready", "deleted"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [
      (instance: Source) => instance.validateOptions(),
      (instance: Source) => instance.validateMapping(),
    ],
  },
  { from: "draft", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
  {
    from: "deleted",
    to: "ready",
    checks: [
      (instance: Source) => instance.validateOptions(),
      (instance: Source) => instance.validateMapping(),
    ],
  },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "sources", paranoid: false })
export class Source extends LoggedModel<Source> {
  idPrefix() {
    return "src";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  appId: string;

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

  @AllowNull(false)
  @ForeignKey(() => GrouparooModel)
  @Column
  modelId: string;

  @BelongsTo(() => App)
  app: App;

  @HasOne(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Property)
  properties: Property[];

  @HasMany(() => Option, {
    foreignKey: "ownerId",
    scope: { ownerType: "source" },
  })
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

  @BelongsTo(() => GrouparooModel)
  model: GrouparooModel;

  async getOptions(sourceFromEnvironment = true) {
    return OptionHelper.getOptions(this, sourceFromEnvironment);
  }

  async setOptions(options: SimpleSourceOptions) {
    return OptionHelper.setOptions(this, options);
  }

  async validateOptions(options?: SimpleSourceOptions) {
    if (!options) options = await this.getOptions(true);
    return OptionHelper.validateOptions(this, options);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async parameterizedOptions(run?: Run): Promise<SimpleSourceOptions> {
    const parameterizedOptions = {};
    const options = await this.getOptions();
    const keys = Object.keys(options);
    for (const i in keys) {
      const k = keys[i];
      parameterizedOptions[k] =
        typeof options[k] === "string"
          ? await plugin.replaceTemplateRunVariables(options[k].toString(), run)
          : options[k];
    }

    return parameterizedOptions;
  }

  async getMapping() {
    return MappingHelper.getMapping(this);
  }

  async setMapping(mappings: SourceMapping) {
    return MappingHelper.setMapping(this, mappings);
  }

  async validateMapping() {
    const previewAvailable = await this.previewAvailable();
    if (!previewAvailable) return true;

    const { pluginConnection } = await this.getPlugin();
    if (pluginConnection.skipSourceMapping) return true;

    const mapping = await this.getMapping();
    if (Object.keys(mapping).length === 1) {
      return true;
    } else {
      throw new Error("mapping not set");
    }
  }

  async sourceConnectionOptions(sourceOptions: SimpleSourceOptions = {}) {
    return SourceOps.sourceConnectionOptions(this, sourceOptions);
  }

  async sourcePreview(sourceOptions?: SimpleSourceOptions) {
    return SourceOps.sourcePreview(this, sourceOptions);
  }

  async defaultPropertyOptions() {
    return SourceOps.defaultPropertyOptions(this);
  }

  async apiData() {
    const model = await this.$get("model");
    const app = await this.$get("app", { scope: null, include: [Option] });
    const schedule = await this.$get("schedule", { scope: null });

    const options = await this.getOptions(null);
    const { pluginConnection } = await this.getPlugin();
    const scheduleAvailable = await this.scheduleAvailable();
    const previewAvailable = await this.previewAvailable();
    const mapping = await this.getMapping();

    return {
      id: this.id,
      name: this.name,
      type: this.type,
      state: this.state,
      mapping,
      app: app ? await app.apiData() : undefined,
      appId: this.appId,
      modelName: model.name,
      modelId: this.modelId,
      scheduleAvailable,
      schedule: schedule ? await schedule.apiData() : undefined,
      previewAvailable,
      locked: this.locked,
      options,
      connection: pluginConnection,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  async scheduleAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.records !== "function") {
      return false;
    }

    const mapping = await this.getMapping();
    if (Object.values(mapping).length === 0) {
      return true;
    } else {
      const propertyMappingKey = Object.values(mapping)[0];
      const property = (await Property.findAllWithCache(this.modelId)).find(
        (p) => p.key === propertyMappingKey
      );
      if (!property) return false;
      if (!property.unique) return false;
      return true;
    }
  }

  async previewAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.sourcePreview === "function") {
      return true;
    }
    return false;
  }

  async importRecordProperty(
    record: GrouparooRecord,
    property: Property,
    propertyOptionsOverride?: OptionHelper.SimpleOptions,
    propertyFiltersOverride?: PropertyFiltersWithKey[],
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      recordProperties?: {};
    } = {}
  ) {
    return SourceOps.importRecordProperty(
      this,
      record,
      property,
      propertyOptionsOverride,
      propertyFiltersOverride,
      preloadedArgs
    );
  }

  async importRecordProperties(
    records: GrouparooRecord[],
    properties: Property[],
    propertyOptionsOverride?: { [key: string]: SimplePropertyOptions },
    propertyFiltersOverride?: { [key: string]: PropertyFiltersWithKey[] },
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      recordProperties?: {};
    } = {}
  ) {
    return SourceOps.importRecordProperties(
      this,
      records,
      properties,
      propertyOptionsOverride,
      propertyFiltersOverride,
      preloadedArgs
    );
  }

  async import(record: GrouparooRecord) {
    return SourceOps._import(this, record);
  }

  async bootstrapUniqueProperty(
    key: string,
    type: typeof PropertyTypes[number],
    mappedColumn: string,
    id?: string,
    local = false,
    options?: { [key: string]: any }
  ) {
    return SourceOps.bootstrapUniqueProperty(
      this,
      key,
      type,
      mappedColumn,
      id,
      local,
      options
    );
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject(): Promise<
    | SourceConfigurationObject
    | [SourceConfigurationObject, ScheduleConfigurationObject]
  > {
    const { name, type } = this;

    this.app = await this.$get("app");
    this.model = await this.$get("model");
    const appId = this.app?.getConfigId();
    const modelId = this.model?.getConfigId();
    const options = await this.getOptions(false);

    if (!appId || !modelId || !name) {
      return;
    }

    let configObject: any = {
      class: "Source",
      id: this.getConfigId(),
      modelId,
      name,
      type,
      appId,
      options,
    };

    const mapping = await MappingHelper.getConfigMapping(this);
    if (Object.keys(mapping).length > 0) {
      configObject.mapping = mapping;
    }

    const setSchedule = async () => {
      if (!this.schedule) return;
      const scheduleConfigObject = await this.schedule.getConfigObject();
      if (scheduleConfigObject?.id) {
        configObject = [{ ...configObject }, { ...scheduleConfigObject }];
      }
    };

    this.schedule = await this.$get("schedule");
    await setSchedule();

    return configObject;
  }

  async afterSetMapping() {
    await Source.updateRuleDirectMappings(this);
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  @BeforeSave
  static async ensureModel(instance: Source) {
    return ModelGuard.check(instance);
  }

  @BeforeCreate
  static async ensurePluginConnection(instance: Source) {
    await instance.getPlugin(); // will throw if not found
  }

  @BeforeCreate
  static async ensureAppReady(instance: Source) {
    const app = await App.findById(instance.appId);
    if (app.state !== "ready") throw new Error(`app ${app.id} is not ready`);
  }

  @BeforeSave
  static async ensureUniqueName(instance: Source) {
    const count = await Source.count({
      where: {
        id: { [Op.ne]: instance.id },
        name: instance.name,
        state: { [Op.notIn]: ["draft", "deleted"] },
      },
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async updateState(instance: Source) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async noUpdateIfLocked(instance: Source) {
    await LockableHelper.beforeSave(instance, ["state"]);
  }

  @AfterSave
  static async updateRuleDirectMappings(instance: Source) {
    const properties = await instance.$get("properties");
    for (const i in properties) {
      const property = properties[i];
      await Property.determineIsPrimaryKey(property);
      if (property.changed()) await property.save();
    }
  }

  @BeforeDestroy
  static async ensureNotInUse(instance: Source) {
    const schedule = await instance.$get("schedule", { scope: null });
    if (schedule) {
      throw new Error("cannot delete a source that has a schedule");
    }

    const properties = await instance.$get("properties", {
      scope: null,
      where: { isPrimaryKey: false },
    });

    if (properties.length > 0) {
      throw new Error("cannot delete a source that has a property");
    }
  }

  @BeforeDestroy
  static async ensurePrimaryKeyPropertyNotInUse(instance: Source) {
    const primaryKeyProperty = await Property.findOne({
      where: { sourceId: instance.id, isPrimaryKey: true },
    });

    if (primaryKeyProperty) {
      await Property.ensureNotInUse(primaryKeyProperty, [instance.id]);
    }
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyOptions(instance: Source) {
    return Option.destroy({
      where: { ownerId: instance.id, ownerType: "source" },
    });
  }

  @AfterDestroy
  static async destroyMappings(instance: Source) {
    return Mapping.destroy({
      where: { ownerId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyPrimaryKeyProperty(instance: Source) {
    const primaryKeyProperty = await Property.findOne({
      where: { sourceId: instance.id, isPrimaryKey: true },
    });

    if (primaryKeyProperty) {
      await primaryKeyProperty.destroy();
    }
  }
}
