import { config, env, redis } from "actionhero";
import Sequelize, { Op, WhereOptions } from "sequelize";
import {
  AfterDestroy,
  AfterSave,
  AllowNull,
  BeforeDestroy,
  BeforeSave,
  BelongsTo,
  Column,
  DataType,
  Default,
  DefaultScope,
  ForeignKey,
  HasMany,
  Is,
  Length,
  Table,
} from "sequelize-typescript";
import { PropertyConfigurationObject } from "../classes/codeConfig";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { CLS } from "../modules/cls";
import { ConfigWriter } from "../modules/configWriter";
import { FilterHelper } from "../modules/filterHelper";
import { LockableHelper } from "../modules/lockableHelper";
import { PropertyOps } from "../modules/ops/property";
import { OptionHelper } from "../modules/optionHelper";
import { plugin } from "../modules/plugin";
import { StateMachine } from "../modules/stateMachine";
import { TopLevelGroupRules } from "../modules/topLevelGroupRules";
import { Filter } from "./Filter";
import { Group } from "./Group";
import { GroupRule } from "./GroupRule";
import { Mapping } from "./Mapping";
import { Option } from "./Option";
import { GrouparooRecord } from "./GrouparooRecord";
import { RecordProperty } from "./RecordProperty";
import { Run } from "./Run";
import { Source } from "./Source";
import { getGrouparooRunMode } from "../modules/runMode";

const jsMap = {
  boolean: config?.sequelize?.dialect === "sqlite" ? "text" : "boolean", // there is no boolean type in SQLite
  date: "bigint", // we store things via timestamps in the DB
  email: "text",
  float: "float",
  integer: "bigint",
  phoneNumber: "text",
  string: "text",
  url: "text",
} as const;

export const propertyJSToSQLType = (jsType: keyof typeof jsMap) =>
  jsMap[jsType];

export const PropertyTypes = [
  "boolean",
  "date",
  "email",
  "float",
  "integer",
  "phoneNumber",
  "string",
  "url",
] as const;

export interface SimplePropertyOptions extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready", "deleted"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [(instance: Property) => instance.validateOptions()],
  },
  { from: "draft", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
  {
    from: "deleted",
    to: "ready",
    checks: [(instance: Property) => instance.validateOptions()],
  },
];

export interface PropertyFiltersWithKey extends FilterHelper.FiltersWithKey {}

const CACHE_TTL = env === "test" ? -1 : 1000 * 30;

export const CachedProperties: { expires: number; properties: Property[] } = {
  expires: 0,
  properties: [],
};

@DefaultScope(() => ({
  where: { state: { [Op.notIn]: ["draft"] } },
}))
@Table({ tableName: "properties", paranoid: false })
export class Property extends LoggedModel<Property> {
  idPrefix() {
    return "prp";
  }

  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  key: string;

  @AllowNull(false)
  @Is("properType", (value) => {
    if (!PropertyTypes.includes(value)) {
      throw new Error(`${value} is not an allowed type`);
    }
  })
  @Column(DataType.ENUM(...PropertyTypes))
  type: typeof PropertyTypes[number];

  @AllowNull(false)
  @Default(false)
  @Column
  unique: boolean;

  @AllowNull(false)
  @ForeignKey(() => Source)
  @Column
  sourceId: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @Column
  locked: string;

  @AllowNull(false)
  @Default(false)
  @Column
  isPrimaryKey: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  isArray: boolean;

  @BelongsTo(() => Source)
  source: Source;

  @HasMany(() => Option, {
    foreignKey: "ownerId",
    scope: { ownerType: "property" },
  })
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

  @HasMany(() => Filter, {
    foreignKey: "ownerId",
    scope: { ownerType: "property" },
  })
  filters: Filter[];

  @HasMany(() => RecordProperty)
  RecordProperties: RecordProperty[];

  async parameterizedQueryFromRecord(q: string, record: GrouparooRecord) {
    return plugin.replaceTemplateRecordVariables(q, record);
  }

  async test(options?: SimplePropertyOptions) {
    const record = await GrouparooRecord.findOne({
      order: [["id", "asc"]],
    });
    if (record) {
      const source = await Source.findById(this.sourceId);
      return source.importRecordProperty(record, this, options);
    }
  }

  async getOptions(sourceFromEnvironment = true) {
    const options = await OptionHelper.getOptions(this, sourceFromEnvironment);
    const source = await this.$get("source", { scope: null });

    for (const i in options) {
      options[i] =
        await plugin.replaceTemplateRecordPropertyIdsWithRecordPropertyKeys(
          options[i].toString(),
          source.modelId
        );
    }

    return options;
  }

  async setOptions(options: SimplePropertyOptions, test = true) {
    if (test) await this.test(options);
    const source = await this.$get("source", { scope: null });

    for (const i in options) {
      options[i] =
        await plugin.replaceTemplateRecordPropertyKeysWithRecordPropertyId(
          options[i].toString(),
          source.modelId
        );
    }

    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (hasChanges) {
      await Property.invalidateCache();
      await PropertyOps.enqueueRuns(this);
    }
  }

  async validateOptions(options?: SimplePropertyOptions, allowEmpty = false) {
    if (!options) options = await this.getOptions(true);

    const response = await OptionHelper.validateOptions(
      this,
      options,
      allowEmpty
    );

    return response;
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async getFilters() {
    return FilterHelper.getFilters(this);
  }

  async setFilters(
    filters: PropertyFiltersWithKey[],
    externallyValidate = true
  ) {
    return FilterHelper.setFilters(this, filters, externallyValidate);
  }

  async afterSetFilters(hasChanges: boolean) {
    if (hasChanges) {
      await Property.invalidateCache();
      return PropertyOps.enqueueRuns(this);
    }
  }

  async pluginOptions(propertyOptions?: SimplePropertyOptions) {
    return PropertyOps.pluginOptions(this, propertyOptions);
  }

  async validateFilters(filters: PropertyFiltersWithKey[]) {
    return FilterHelper.validateFilters(this, filters);
  }

  async apiData() {
    const options = await this.getOptions();
    const filters = await this.getFilters();

    return {
      id: this.id,
      sourceId: this.sourceId,
      key: this.key,
      type: this.type,
      state: this.state,
      unique: this.unique,
      isPrimaryKey: this.isPrimaryKey,
      locked: this.locked,
      options,
      filters,
      isArray: this.isArray,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      recordProperties: this.RecordProperties
        ? await Promise.all(this.RecordProperties.map((rp) => rp.apiData()))
        : undefined,
    };
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.key) : this.id;
  }

  async getConfigObject(): Promise<PropertyConfigurationObject> {
    const { key, type, unique, isArray } = this;

    this.source = await this.$get("source");
    const sourceId = this.source?.getConfigId();
    const options = await this.getOptions(false);
    const filters = await this.getFilters();

    if (!key || !sourceId) return;

    return {
      class: "Property",
      id: this.getConfigId(),
      type,
      key,
      sourceId,
      unique,
      isArray,
      options,
      filters,
    };
  }

  // --- Cache Methods --- //

  static async findAllWithCache(modelId?: string): Promise<Property[]> {
    const now = new Date().getTime();
    if (
      CachedProperties.expires > now &&
      CachedProperties.properties.length > 0
    ) {
      return modelId
        ? CachedProperties.properties.filter(
            (p) => p?.source?.modelId === modelId
          )
        : CachedProperties.properties;
    }

    CachedProperties.properties = await Property.findAll({
      include: [{ model: Source.unscoped(), required: false }],
    });
    CachedProperties.expires = now + CACHE_TTL;
    return modelId
      ? CachedProperties.properties.filter(
          (p) => p?.source?.modelId === modelId
        )
      : CachedProperties.properties;
  }

  static async findOneWithCache(
    value: string,
    modelId?: string,
    lookupKey: keyof Property = "id"
  ) {
    const properties = await Property.findAllWithCache(modelId);
    let property = properties.find((p) => p[lookupKey] === value);

    if (!property) {
      property = await Property.findOne({
        where: { [lookupKey]: value },
        include: [{ model: Source.unscoped(), required: false }],
      });
      if (!property) await Property.invalidateCache();
    }

    return property;
  }

  static invalidateLocalCache() {
    CachedProperties.expires = 0;
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @AfterSave
  @AfterDestroy
  static async invalidateCache() {
    Property.invalidateLocalCache();
    await CLS.afterCommit(
      async () => await redis.doCluster("api.rpc.property.invalidateCache")
    );
  }

  @BeforeSave
  static async ensureUniqueKey(instance: Property) {
    const count = await Property.count({
      where: {
        id: { [Op.ne]: instance.id },
        key: instance.key,
        state: { [Op.notIn]: ["draft", "deleted"] },
      },
    });
    if (count > 0) {
      throw new Error(`key "${instance.key}" is already in use`);
    }
  }

  @BeforeSave
  static async ensureOptions(instance: Property) {
    const source = await Source.findById(instance.sourceId);
    await source.validateOptions(null);
  }

  @BeforeSave
  static async updateState(instance: Property) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async ensureNonArrayAndUnique(instance: Property) {
    if (instance.isArray && instance.unique) {
      throw new Error("unique record properties cannot be arrays");
    }
  }

  @BeforeSave
  static async ensureUniqueProperties(instance: Property) {
    if (instance.changed("unique") && instance.unique) {
      const valueCounts = await RecordProperty.findAll({
        attributes: [
          "rawValue",
          [Sequelize.fn("COUNT", Sequelize.col("rawValue")), "count"],
        ],
        group: ["rawValue"],
        where: { propertyId: instance.id },
        having: Sequelize.where(
          Sequelize.fn("COUNT", Sequelize.col("rawValue")),
          { [Op.gt]: 1 }
        ),
        limit: 1,
        raw: true,
      });

      if (valueCounts.length > 0) {
        throw new Error(
          //@ts-ignore
          `cannot make this property unique as there are ${valueCounts[0]["count"]} records with the value \'${valueCounts[0]["rawValue"]}\'`
        );
      }
    }
  }

  @BeforeSave
  static async ensureSourceReady(instance: Property) {
    const source = await Source.findById(instance.sourceId);
    if (source.state !== "ready") {
      // allow the bootstrap for this source (first one and unique)
      if (!instance.unique) {
        throw new Error("source is not ready and property not unique");
      }

      const otherProperties = await Property.scope(null).count({
        where: {
          sourceId: instance.sourceId,
          id: { [Op.ne]: instance.id },
        },
      });
      if (otherProperties > 0) {
        // already has another property
        throw new Error("source is not ready and property not first");
      }
    }
  }

  @BeforeSave
  static async validateQuery(instance: Property) {
    await instance.test();
  }

  @BeforeSave
  static async validateReservedKeys(instance: Property) {
    const reservedKeys = ["_meta"].concat(
      TopLevelGroupRules.map((tlgr) => tlgr.key)
    );
    if (reservedKeys.includes(instance.key)) {
      throw new Error(
        `${instance.key} is a reserved key and cannot be used as a property`
      );
    }
  }

  @BeforeSave
  static async noUniqueOrArrayThroughNonUniqueMapping(instance: Property) {
    if (instance.state === "draft") return;

    const source = await Source.findById(instance.sourceId);
    if (source.state !== "ready") return; // we are bootstrapping
    const sourceMapping = await source.getMapping();
    if (Object.keys(sourceMapping).length === 0) return; // Query source
    const mappedPropertyKey = Object.values(sourceMapping)[0];
    const mappedProperty = await Property.findOne({
      where: { key: mappedPropertyKey },
    });

    if (mappedProperty.unique) return;

    if (instance.unique)
      throw new Error(
        `Unique Property ${instance.key} (${instance.id}) cannot be mapped through a non-unique Property - ${mappedProperty.key} (${mappedProperty.id})`
      );

    if (instance.isArray)
      throw new Error(
        `Array Property ${instance.key} (${instance.id}) cannot be mapped through a non-unique Property - ${mappedProperty.key} (${mappedProperty.id})`
      );
  }

  @BeforeSave
  static async noUpdateIfLocked(instance: Property) {
    await LockableHelper.beforeSave(instance, ["state", "isPrimaryKey"]);
  }

  @BeforeSave
  static async runPropertyWithNoOptionsOrFiltersWhenReady(instance: Property) {
    const changedState = instance.changed("state");
    if (changedState && instance.state === "ready") {
      const options = await instance.getOptions();
      const filters = await instance.getFilters();
      if (
        Object.keys(options).length === 0 &&
        Object.keys(filters).length === 0
      ) {
        await PropertyOps.enqueueRuns(instance);
      }
    }
  }

  @BeforeSave
  static async updateRecordPropertyUniqueness(instance: Property) {
    if (!instance.isNewRecord && instance.changed("unique")) {
      CLS.enqueueTask("property:updateRecordProperties", {
        propertyId: instance.id,
      });
    }
  }

  @BeforeDestroy
  static async ensureNotInUse(
    instance: Property,
    excludeMappingOwnerIds?: string[]
  ) {
    const groupRule = await GroupRule.findOne({
      where: { propertyId: instance.id },
    });

    if (groupRule) {
      const group = await Group.findById(groupRule.groupId);
      throw new Error(
        `cannot delete property "${instance.key}", group ${group.name} (${group.id}) is based on it`
      );
    }

    const mappingWhere: WhereOptions = { propertyId: instance.id };
    if (excludeMappingOwnerIds) {
      mappingWhere.ownerId = { [Op.notIn]: excludeMappingOwnerIds };
    }
    const mapping = await Mapping.findOne({
      where: mappingWhere,
    });
    if (mapping) {
      throw new Error(
        `cannot delete property "${instance.key}" as ${mapping.ownerId} is using it in a mapping`
      );
    }
  }

  @AfterSave
  static async updateRecordsOnTypeChange(instance: Property) {
    if (instance.changed("type") && instance.state === "ready") {
      await PropertyOps.enqueueRuns(instance);
    }
  }

  @AfterSave
  static async updateSampleRecords(instance: Property) {
    if (getGrouparooRunMode() !== "cli:config") return;
    if (instance.state !== "ready") return;

    const source = await instance.$get("source");
    if (!source) return;

    const records = await GrouparooRecord.findAll({
      where: { modelId: source.modelId },
    });
    for (const record of records) await record.buildNullProperties();
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance: Property) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyOptions(instance: Property) {
    await Option.destroy({
      where: { ownerId: instance.id, ownerType: "property" },
    });
  }

  @AfterDestroy
  static async stopRuns(instance: Property) {
    const runs = await Run.findAll({
      where: { creatorId: instance.id, state: "running" },
    });

    for (const i in runs) {
      await runs[i].update({ state: "stopped" });
    }
  }

  @AfterDestroy
  static async destroyFilters(instance: Property) {
    await Filter.destroy({
      where: { ownerId: instance.id, ownerType: "property" },
    });
  }

  @AfterDestroy
  static async destroyRecordProperties(instance: Property) {
    await RecordProperty.destroy({
      where: { propertyId: instance.id },
    });
  }
}
