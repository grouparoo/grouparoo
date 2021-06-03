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
import { Op } from "sequelize";
import { LoggedModel } from "../classes/loggedModel";
import { Schedule } from "./Schedule";
import { Property, PropertyFiltersWithKey } from "./Property";
import { Option } from "./Option";
import { App } from "./App";
import { Run } from "./Run";
import { Profile } from "./Profile";
import { Mapping } from "./Mapping";
import { plugin } from "../modules/plugin";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";
import { SourceOps } from "../modules/ops/source";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";

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

  @BelongsTo(() => App)
  app: App;

  @HasOne(() => Schedule)
  schedule: Schedule;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Property)
  properties: Property[];

  @HasMany(() => Option, "ownerId")
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

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

  async apiData() {
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

  async getConfigObject() {
    const { id, name, type, appId } = this;

    const options = await this.getOptions();
    const mapping = await MappingHelper.getMapping(this, "id");

    let configObject: any = {
      class: "Source",
      id,
      name,
      type,
      appId,
      mapping,
      options,
    };

    const setSchedule = async () => {
      if (!this.schedule) return;
      const scheduleConfigObject = await this.schedule.getConfigObject();
      configObject = [{ ...configObject }, { ...scheduleConfigObject }];
    };

    if (!this.schedule) this.schedule = await this.$get("schedule");
    await setSchedule();

    return configObject;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
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
        state: { [Op.ne]: "draft" },
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
      await Property.determineDirectlyMapped(property);
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
  static async destroyOptions(instance: Source) {
    return Option.destroy({
      where: { ownerId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyMappings(instance: Source) {
    return Mapping.destroy({
      where: { ownerId: instance.id },
    });
  }
}
