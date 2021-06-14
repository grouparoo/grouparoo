import {
  Table,
  Column,
  AllowNull,
  DataType,
  Length,
  Default,
  BeforeSave,
  BeforeDestroy,
  AfterDestroy,
  ForeignKey,
  BelongsTo,
  HasMany,
  Is,
  DefaultScope,
  BeforeUpdate,
  BeforeCreate,
  AfterSave,
} from "sequelize-typescript";
import { Op, WhereOptions } from "sequelize";
import { env, api, redis, config } from "actionhero";
import { plugin } from "../modules/plugin";
import { LoggedModel } from "../classes/loggedModel";
import { Profile } from "./Profile";
import { ProfileProperty } from "./ProfileProperty";
import { App, SimpleAppOptions } from "./App";
import { Source, SimpleSourceOptions, SourceMapping } from "./Source";
import { Option } from "./Option";
import { Group } from "./Group";
import { Run } from "./Run";
import { GroupRule } from "./GroupRule";
import { PropertyFilter } from "./PropertyFilter";
import { OptionHelper } from "../modules/optionHelper";
import { ConfigWriter } from "../modules/configWriter";
import { StateMachine } from "../modules/stateMachine";
import { Mapping } from "./Mapping";
import { PropertyOps } from "../modules/ops/property";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";
import { CLS } from "../modules/cls";

export function propertyJSToSQLType(jsType: string) {
  const map = {
    boolean: config.sequelize.dialect === "sqlite" ? "text" : "boolean", // there is no boolean type in SQLite
    date: "bigint", // we store things via timestamps in the DB
    email: "text",
    float: "float",
    integer: "bigint",
    phoneNumber: "text",
    string: "text",
    url: "text",
  };

  return map[jsType];
}

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

const CACHE_TTL = env === "test" ? -1 : 1000 * 30;

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

/**
 * Metadata and methods to return the options a Property for this connection/app.
 * Options is a method which will poll the source for available options to select (ie: names of tables or columns)
 */
export interface PluginConnectionPropertyOption {
  key: string;
  displayName?: string;
  required: boolean;
  description: string;
  type: string;
  options: (argument: {
    connection: any;
    app: App;
    appId: string;
    appOptions: SimpleAppOptions;
    source: Source;
    sourceId: string;
    sourceOptions: SimpleSourceOptions;
    sourceMapping: SourceMapping;
    property: Property;
    propertyId: string;
  }) => Promise<
    Array<{
      key: string;
      description?: string;
      examples?: Array<any>;
    }>
  >;
}

export interface PropertyFiltersWithKey {
  key: string;
  op: string;
  match?: string | number | boolean;
  relativeMatchNumber?: number;
  relativeMatchUnit?: string;
  relativeMatchDirection?: string;
}

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
    return "rul";
  }

  @AllowNull(true)
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

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(false)
  @Default(false)
  @Column
  identifying: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  directlyMapped: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  isArray: boolean;

  @BelongsTo(() => Source)
  source: Source;

  @HasMany(() => Option, "ownerId")
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

  @HasMany(() => PropertyFilter)
  propertyFilters: PropertyFilter[];

  @HasMany(() => ProfileProperty)
  ProfileProperties: ProfileProperty[];

  async parameterizedQueryFromProfile(q: string, profile: Profile) {
    return plugin.replaceTemplateProfileVariables(q, profile);
  }

  async test(options?: SimplePropertyOptions) {
    const profile = await Profile.findOne({
      order: [["id", "asc"]],
    });
    if (profile) {
      const source = await Source.findById(this.sourceId);
      return source.importProfileProperty(profile, this, options);
    }
  }

  async getOptions(sourceFromEnvironment = true) {
    const options = await OptionHelper.getOptions(this, sourceFromEnvironment);
    for (const i in options) {
      options[i] =
        await plugin.replaceTemplateProfilePropertyIdsWithProfilePropertyKeys(
          options[i].toString()
        );
    }

    return options;
  }

  async setOptions(options: SimplePropertyOptions, test = true) {
    if (test) await this.test(options);

    for (const i in options) {
      options[i] =
        await plugin.replaceTemplateProfilePropertyKeysWithProfilePropertyId(
          options[i].toString()
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
    const filtersWithCol: PropertyFiltersWithKey[] = [];
    const filters = this.propertyFilters
      ? this.propertyFilters.sort((a, b) => a.position - b.position)
      : await this.$get("propertyFilters", {
          order: [["position", "asc"]],
        });

    if (!this.propertyFilters) this.propertyFilters = filters;

    for (const i in filters) {
      const filter = filters[i];
      filtersWithCol.push({
        key: filter.key,
        op: filter.op,
        match: filter.match,
        relativeMatchNumber: filter.relativeMatchNumber,
        relativeMatchUnit: filter.relativeMatchUnit,
        relativeMatchDirection: filter.relativeMatchDirection,
      });
    }

    return filtersWithCol;
  }

  async setFilters(
    filters: PropertyFiltersWithKey[],

    externallyValidate = true
  ) {
    delete this.propertyFilters;

    if (externallyValidate) await this.validateFilters(filters);
    const existingFilters = await this.getFilters();
    const filtersAreEqual = await PropertyOps.filtersAreEqual(
      filters,
      existingFilters
    );
    if (filtersAreEqual) return;

    await PropertyFilter.destroy({
      where: { propertyId: this.id },
    });

    const newPropertyFilters: PropertyFilter[] = [];
    for (const i in filters) {
      const filter = filters[i];

      const propertyFilter = await PropertyFilter.create({
        position: parseInt(i) + 1,
        propertyId: this.id,
        key: filter.key,
        op: filter.op,
        match: filter.match?.toString() ?? null,
        relativeMatchNumber: filter.relativeMatchNumber ?? null,
        relativeMatchUnit: filter.relativeMatchUnit ?? null,
        relativeMatchDirection: filter.relativeMatchDirection ?? null,
      });
      newPropertyFilters.push(propertyFilter);
    }

    this.propertyFilters = newPropertyFilters;
    await this.touch();
    await Property.invalidateCache();
    return PropertyOps.enqueueRuns(this);
  }

  async pluginOptions() {
    return PropertyOps.pluginOptions(this);
  }

  async pluginFilterOptions() {
    return PropertyOps.pluginFilterOptions(this);
  }

  async validateFilters(filters: PropertyFiltersWithKey[]) {
    if (!filters) filters = await this.getFilters();
    const pluginFilterOptions = await this.pluginFilterOptions();

    for (const i in filters) {
      const filter = filters[i];
      const relevantOption = pluginFilterOptions.filter(
        (pfo) => pfo.key === filter.key
      )[0];
      if (!relevantOption) {
        throw new Error(`${filter.key} is not filterable`);
      }
      if (!relevantOption.ops.includes(filter.op)) {
        throw new Error(`"${filter.op}" cannot be applied to ${filter.key}`);
      }
    }
  }

  async makeIdentifying() {
    return PropertyOps.makeIdentifying(this);
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
      identifying: this.identifying,
      directlyMapped: this.directlyMapped,
      locked: this.locked,
      options,
      filters,
      isArray: this.isArray,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
    };
  }

  getConfigId() {
    return ConfigWriter.generateId(this.key);
  }

  async getConfigObject() {
    const { key, type, unique, identifying, isArray } = this;

    this.source = await this.$get("source");
    const sourceId = this.source?.getConfigId();
    const options = await this.getOptions(false);
    const filters = await this.getFilters();

    if (!key || !sourceId) return;

    return {
      class: "Property",
      id: this.getConfigId(),
      type,
      name: key,
      sourceId,
      unique,
      identifying,
      isArray,
      options,
      filters,
    };
  }

  // --- Cache Methods --- //

  static async findAllWithCache(): Promise<Property[]> {
    const now = new Date().getTime();
    if (
      CachedProperties.expires > now &&
      CachedProperties.properties.length > 0
    ) {
      return CachedProperties.properties;
    }

    CachedProperties.properties = await Property.findAll();
    CachedProperties.expires = now + CACHE_TTL;
    return CachedProperties.properties;
  }

  static async findOneWithCache(value: string, key = "id") {
    const properties = await Property.findAllWithCache();
    let property = properties.find((p) => p[key] === value);

    if (!property) {
      // fallback if not found
      property = await Property.findOne({ where: { [key]: value } });
      if (!property) await Property.invalidateCache();
    }

    return property;
  }

  static invalidateLocalCache() {
    CachedProperties.expires = 0;
  }

  @AfterSave
  @AfterDestroy
  static async invalidateCache() {
    Property.invalidateLocalCache();
    await CLS.afterCommit(async () =>
      redis.doCluster("api.rpc.property.invalidateCache")
    );
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeUpdate
  @BeforeCreate
  static async determineDirectlyMapped(instance: Property) {
    if (instance.state === "draft") return;

    const source = await instance.$get("source", { scope: null });
    const mapping = await source.getMapping();
    const mappingValues = Object.values(mapping);
    instance.directlyMapped = mappingValues.includes(instance.key);
  }

  @BeforeSave
  static async ensureUniqueKey(instance: Property) {
    const count = await Property.count({
      where: {
        id: { [Op.ne]: instance.id },
        key: instance.key,
        state: { [Op.ne]: "draft" },
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
      throw new Error("unique profile properties cannot be arrays");
    }
  }

  @BeforeSave
  static async ensureUniqueProperties(instance: Property) {
    if (instance.changed("unique") && instance.unique) {
      const valueCounts = await ProfileProperty.findAll({
        attributes: [
          "rawValue",
          [api.sequelize.fn("COUNT", api.sequelize.col("rawValue")), "count"],
        ],
        group: ["rawValue"],
        where: { propertyId: instance.id },
        having: api.sequelize.where(
          api.sequelize.fn("COUNT", api.sequelize.col("rawValue")),
          { [Op.gt]: 1 }
        ),
        limit: 1,
        raw: true,
      });

      if (valueCounts.length > 0) {
        throw new Error(
          `cannot make this property unique as there are ${valueCounts[0]["count"]} records with the value \'${valueCounts[0]["rawValue"]}\'`
        );
      }
    }
  }

  @BeforeSave
  static async ensureOneIdentifyingProperty(instance: Property) {
    if (instance.identifying) {
      const otherIdentifyingRulesCount = await Property.count({
        where: { identifying: true, id: { [Op.ne]: instance.id } },
      });

      if (otherIdentifyingRulesCount > 0) {
        throw new Error("only one property can be identifying");
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
    const reservedKeys = ["id", "createdAt", "updatedAt"];
    if (reservedKeys.includes(instance.key)) {
      throw new Error(
        `${instance.key} is a reserved key and cannot be used as a property`
      );
    }
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance, ["state", "directlyMapped"]);
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
  static async updateProfilePropertyUniqueness(instance: Property) {
    if (!instance.isNewRecord && instance.changed("unique")) {
      CLS.enqueueTask("property:updateProfileProperties", {
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

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @AfterDestroy
  static async destroyOptions(instance: Property) {
    await Option.destroy({
      where: { ownerId: instance.id },
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
  static async destroyPropertyFilters(instance: Property) {
    await PropertyFilter.destroy({
      where: { propertyId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyProfileProperties(instance: Property) {
    await ProfileProperty.destroy({
      where: { propertyId: instance.id },
    });
  }
}
