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
import { CommonModel } from "../classes/commonModel";
import { PropertiesCache } from "../modules/caches/propertiesCache";
import { SourcesCache } from "../modules/caches/sourcesCache";
import { CLS } from "../modules/cls";
import { redis } from "actionhero";

export interface BootstrapUniquePropertyParams {
  mappedColumn: string;
  key?: string;
  type?: typeof PropertyTypes[number];
  id?: string;
  local?: boolean;
  propertyOptions?: Record<string, any>;
  sourceOptions?: Record<string, any>;
}

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
export class Source extends CommonModel<Source> {
  idPrefix() {
    return "src";
  }

  @AllowNull(false)
  @ForeignKey(() => App)
  @Column
  appId: string;

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

  async setOptions(options: SimpleSourceOptions, externallyValidate = true) {
    await this.validateOptions(options, externallyValidate);
    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (hasChanges) await Source.invalidateCache();
  }

  async validateOptions(
    options?: SimpleSourceOptions,
    externallyValidate = true
  ) {
    if (!options) options = await this.getOptions(true);
    const { pluginConnection } = await this.getPlugin();
    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${this.type}`);
    }

    const connectionOptions = externallyValidate
      ? await this.sourceConnectionOptions(options)
      : {};

    const optionsSpec: OptionHelper.OptionsSpec = pluginConnection.options.map(
      (opt) => ({
        ...opt,
        options: connectionOptions[opt.key]?.options ?? [],
      })
    );

    return OptionHelper.validateOptions(this, options, optionsSpec);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async parameterizedOptions(run?: Run) {
    const parameterizedOptions: SimpleSourceOptions = {};
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

  async setMapping(mappings: SourceMapping, externallyValidate = true) {
    return MappingHelper.setMapping(this, mappings, externallyValidate);
  }

  async afterSetMapping() {
    await Source.determinePrimaryKeyProperty(this);
    await Source.invalidateCache();
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
    if (typeof pluginConnection?.methods?.importRecords !== "function") {
      return false;
    }

    const mapping = await this.getMapping();
    if (Object.values(mapping).length === 0) {
      return true;
    } else {
      const propertyMappingKey = Object.values(mapping)[0];
      const property = (
        await PropertiesCache.findAllWithCache(this.modelId, "ready")
      ).find((p) => p.key === propertyMappingKey);
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
    propertyFiltersOverride?: PropertyFiltersWithKey[]
  ) {
    return SourceOps.importRecordProperty(
      this,
      record,
      property,
      propertyOptionsOverride,
      propertyFiltersOverride
    );
  }

  async importRecordProperties(
    records: GrouparooRecord[],
    properties: Property[],
    propertyOptionsOverride?: { [key: string]: SimplePropertyOptions },
    propertyFiltersOverride?: { [key: string]: PropertyFiltersWithKey[] }
  ) {
    return SourceOps.importRecordProperties(
      this,
      records,
      properties,
      propertyOptionsOverride,
      propertyFiltersOverride
    );
  }

  async import(record: GrouparooRecord) {
    return SourceOps._import(this, record);
  }

  async bootstrapUniqueProperty(params: BootstrapUniquePropertyParams) {
    return SourceOps.bootstrapUniqueProperty(this, params);
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

  // --- Class Methods --- //

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

  @BeforeCreate
  static async ensureSupportedAppType(instance: Source) {
    const app = await App.findById(instance.appId);
    const { pluginConnection } = await instance.getPlugin();
    if (!pluginConnection.apps.includes(app.type))
      throw new Error(
        `Source of type "${instance.type}" does not support the App \`${
          app.name
        }\` (${app.id}) of type "${
          app.type
        }". Supported App types: ${pluginConnection.apps.join(", ")}.`
      );
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

  static async determinePrimaryKeyProperty(instance: Source): Promise<void> {
    if (instance.state === "deleted") return;

    const otherSourcePrimaryKey = await Property.findOne({
      include: {
        model: Source,
        required: true,
        where: {
          modelId: instance.modelId,
        },
      },
      where: {
        isPrimaryKey: true,
        sourceId: {
          [Op.ne]: instance.id,
        },
      },
    });

    // Do nothing unless we own the current primary key
    if (otherSourcePrimaryKey) {
      return;
    }

    // Assign the primary key to a property in this source
    const properties = await instance.$get("properties");
    if (!properties.length) return;

    const mapping = await instance.getMapping();
    const mappingValues = Object.values(mapping);

    for (const property of properties) {
      const isPrimaryKey = mappingValues.includes(property.key);
      if (property.isPrimaryKey !== isPrimaryKey) {
        await property.update({ isPrimaryKey });
      }
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
  static async noDestroyIfLocked(instance: Source) {
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

  @AfterSave
  @AfterDestroy
  static async invalidateCache() {
    SourcesCache.invalidate();
    await CLS.afterCommit(
      async () => await redis.doCluster("api.rpc.source.invalidateCache")
    );
  }
}
