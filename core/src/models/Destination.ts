import { log } from "actionhero";
import { Op } from "sequelize";
import {
  AfterDestroy,
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
  Length,
  Scopes,
  Table,
} from "sequelize-typescript";
import { DestinationConfigurationObject } from "../classes/codeConfig";
import { LoggedModel } from "../classes/loggedModel";
import { APIData } from "../modules/apiData";
import { destinationTypeConversions } from "../modules/destinationTypeConversions";
import { LockableHelper } from "../modules/lockableHelper";
import { ExportOps } from "../modules/ops/export";
import { plugin } from "../modules/plugin";
import { ConfigWriter } from "./../modules/configWriter";
import { MappingHelper } from "./../modules/mappingHelper";
import { DestinationOps } from "./../modules/ops/destination";
import { OptionHelper } from "./../modules/optionHelper";
import { StateMachine } from "./../modules/stateMachine";
import { App } from "./App";
import { GrouparooRecord } from "./../models/GrouparooRecord";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import { Export } from "./Export";
import { ExportProcessor } from "./ExportProcessor";
import { Group } from "./Group";
import { GroupRule } from "./GroupRule";
import { Mapping } from "./Mapping";
import { Option } from "./Option";
import { Property } from "./Property";
import { GrouparooModel } from "./GrouparooModel";

export interface DestinationMapping extends MappingHelper.Mappings {}
export interface SimpleDestinationGroupMembership {
  remoteKey: string;
  groupId: string;
  groupName: string;
}
export interface SimpleDestinationOptions extends OptionHelper.SimpleOptions {}

const SYNC_MODES = ["sync", "additive", "enrich"] as const;
export type DestinationSyncMode = typeof SYNC_MODES[number];

const DESTINATION_COLLECTIONS = ["none", "group", "model"] as const;
export type DestinationCollection = typeof DESTINATION_COLLECTIONS[number];

export interface DestinationSyncOperations {
  create: boolean;
  update: boolean;
  delete: boolean;
}

export const DestinationSyncModeData: Record<
  DestinationSyncMode,
  {
    key: DestinationSyncMode;
    displayName: string;
    description: string;
    operations: DestinationSyncOperations;
  }
> = {
  sync: {
    key: "sync",
    displayName: "Sync",
    description: "Sync all records (create, update, delete)",
    operations: {
      create: true,
      update: true,
      delete: true,
    },
  },
  additive: {
    key: "additive",
    displayName: "Additive",
    description: "Sync all records, but do not delete (create, update)",
    operations: {
      create: true,
      update: true,
      delete: false,
    },
  },
  enrich: {
    key: "enrich",
    displayName: "Enrich",
    description: "Only update existing records (update)",
    operations: {
      create: false,
      update: true,
      delete: false,
    },
  },
};

const STATES = ["draft", "ready", "deleted"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [(instance: Destination) => instance.validateOptions()],
  },
  { from: "draft", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
  {
    from: "deleted",
    to: "ready",
    checks: [(instance: Destination) => instance.validateOptions()],
  },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Scopes(() => ({
  notDraft: {
    where: {
      state: { [Op.notIn]: ["draft"] },
    },
  },
}))
@Table({ tableName: "destinations", paranoid: false })
export class Destination extends LoggedModel<Destination> {
  idPrefix() {
    return "dst";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => App)
  appId: string;

  @AllowNull(true)
  @Length({ min: 0, max: 191 })
  @Default("")
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(true)
  @Column
  locked: string;

  @AllowNull(false)
  @Default("draft")
  @Column(DataType.ENUM(...STATES))
  state: typeof STATES[number];

  @AllowNull(true)
  @Column
  @ForeignKey(() => Group)
  groupId: string;

  @AllowNull(true)
  @Column(DataType.ENUM(...SYNC_MODES))
  syncMode: DestinationSyncMode;

  @AllowNull(false)
  @Default("none")
  @Column(DataType.ENUM(...DESTINATION_COLLECTIONS))
  collection: DestinationCollection;

  @AllowNull(false)
  @ForeignKey(() => GrouparooModel)
  @Column
  modelId: string;

  @BelongsTo(() => App)
  app: App;

  @HasMany(() => DestinationGroupMembership)
  destinationGroupMemberships: DestinationGroupMembership[];

  @BelongsTo(() => Group)
  group: Group;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Option, {
    foreignKey: "ownerId",
    scope: { ownerType: "destination" },
  })
  __options: Option[]; // the underscores are needed as "options" is an internal method on sequelize instances

  @HasMany(() => Export)
  exports: Export[];

  @BelongsTo(() => GrouparooModel)
  model: GrouparooModel;

  async apiData(includeApp = true, includeGroup = true) {
    let app: App;
    let group: Group;
    if (includeApp)
      app = await this.$get("app", { scope: null, include: [Option] });
    if (includeGroup) {
      group = await this.$get("group", { scope: null, include: [GroupRule] });
    }

    const model = await this.$get("model");
    const mapping = await this.getMapping();
    const options = await this.getOptions(null);
    const destinationGroupMemberships =
      await this.getDestinationGroupMemberships();
    const { pluginConnection } = await this.getPlugin();
    const exportTotals = await this.getExportTotals();

    const syncMode = await this.getSyncMode();
    const { supportedModes } = await this.getSupportedSyncModes();
    const syncModeData = supportedModes.map(
      (mode) => DestinationSyncModeData[mode]
    );

    return {
      id: this.id,
      name: this.name,
      type: this.type,
      state: this.state,
      locked: this.locked,
      syncMode,
      syncModes: syncModeData,
      collection: this.collection,
      app: app ? await app.apiData() : null,
      modelId: this.modelId,
      modelName: model.name,
      mapping,
      options,
      connection: pluginConnection,
      group: group ? await group.apiData() : null,
      destinationGroupMemberships,
      createdAt: APIData.formatDate(this.createdAt),
      updatedAt: APIData.formatDate(this.updatedAt),
      exportTotals,
    };
  }

  async getExportTotals() {
    return ExportOps.totals({ destinationId: this.id });
  }

  async getMapping() {
    return MappingHelper.getMapping(this);
  }

  async setMapping(
    mappings: DestinationMapping,
    externallyValidate = true,
    saveCache = true
  ) {
    if (externallyValidate) await this.validateMappings(mappings, saveCache);
    return MappingHelper.setMapping(this, mappings);
  }

  async getOptions(sourceFromEnvironment = true) {
    return OptionHelper.getOptions(this, sourceFromEnvironment);
  }

  async setOptions(options: SimpleDestinationOptions) {
    await this.validateUniqueAppAndOptionsForGroup(options);
    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (hasChanges) return this.exportMembers(true);
  }

  async getExportArrayProperties() {
    return DestinationOps.getExportArrayProperties(this);
  }

  async getDestinationGroupMemberships(): Promise<
    SimpleDestinationGroupMembership[]
  > {
    const destinationGroupMemberships =
      await DestinationGroupMembership.findAll({
        where: { destinationId: this.id },
        include: [Group],
      });

    return destinationGroupMemberships.map((dgm) => {
      return {
        remoteKey: dgm.remoteKey,
        groupId: dgm.group.id,
        groupName: dgm.group.name,
      };
    });
  }

  async setDestinationGroupMemberships(newDestinationGroupMemberships: {
    [groupId: string]: string;
  }) {
    for (const groupId in newDestinationGroupMemberships) {
      const group = await Group.findById(groupId);
      if (group.state === "draft" || group.state === "deleted") {
        throw new Error(`group ${group.name} is not ready`);
      }
    }

    await DestinationGroupMembership.destroy({
      where: {
        destinationId: this.id,
      },
    });

    for (const groupId in newDestinationGroupMemberships) {
      await DestinationGroupMembership.create({
        destinationId: this.id,
        groupId,
        remoteKey: newDestinationGroupMemberships[groupId],
      });
    }

    return this.getDestinationGroupMemberships();
  }

  async validateOptions(options?: SimpleDestinationOptions) {
    if (!options) options = await this.getOptions(true);
    return OptionHelper.validateOptions(this, options, null);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async exportMembers(force = false) {
    return DestinationOps.exportMembers(this, force);
  }

  async updateTracking(
    collection: Destination["collection"],
    collectionId?: string
  ) {
    return DestinationOps.updateTracking(this, collection, collectionId);
  }

  async getSupportedSyncModes() {
    return DestinationOps.getSupportedSyncModes(this);
  }

  async getSyncMode() {
    if (this.syncMode) return this.syncMode;
    const { supportedModes, defaultMode } = await this.getSupportedSyncModes();
    if (supportedModes.length > 1 && defaultMode) {
      // If destination has defined a default sync mode, use it but warn about its usage
      log(
        `Using default sync mode "${defaultMode}" for destination "${this.name}". You should explicitly set a sync mode for the destination to prevent unintended behavior.`,
        "warning"
      );

      return defaultMode;
    } else if (supportedModes.length === 1) {
      // If destination only supports one sync mode, use it
      return supportedModes[0];
    }

    return null;
  }

  async validateSyncMode() {
    const { supportedModes, defaultMode } = await this.getSupportedSyncModes();

    // Sync mode is not required for destinations that:
    //    1. Have not implemented sync modes
    //    2. Only support one sync mode (it'll always be used)
    //    3. Have defined a default sync mode
    const isRequired = supportedModes.length > 1 && !defaultMode;

    if (isRequired && !this.syncMode) {
      throw new Error(`Sync mode is required for destination ${this.name}`);
    }

    if (this.syncMode && !supportedModes.includes(this.syncMode)) {
      throw new Error(
        `${this.name} does not support sync mode "${this.syncMode}"`
      );
    }
  }

  async validateMappings(
    mappings: { [key: string]: string },
    saveCache = true
  ) {
    if (Object.keys(mappings).length === 0) return;

    const destinationMappingOptions = await this.destinationMappingOptions(
      false,
      saveCache
    );
    const properties = await Property.findAllWithCache(this.modelId);
    const exportArrayProperties = await this.getExportArrayProperties();

    // check for array properties
    Object.values(mappings).forEach((k) => {
      const property = properties.find((r) => r.key === k);
      if (
        property &&
        property.isArray &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        throw new Error(
          `${k} is an array record property that ${this.name} cannot support`
        );
      }
    });

    // required
    for (const i in destinationMappingOptions.properties.required) {
      const opt = destinationMappingOptions.properties.required[i];
      if (!mappings[opt.key]) {
        throw new Error(`${opt.key} is a required destination mapping option`);
      }

      const property = properties.find((r) => r.key === mappings[opt.key]);
      const validDestinationTypes = property?.type
        ? Object.keys(destinationTypeConversions[property.type])
        : [];

      if (property && !validDestinationTypes?.includes(opt.type)) {
        throw new Error(
          `${opt.key} requires a property of type ${opt.type}, but a ${property.type} (${property.key}) was mapped`
        );
      }
    }

    // known
    for (const i in destinationMappingOptions.properties.known) {
      const opt = destinationMappingOptions.properties.known[i];
      const property = properties.find((r) => r.key === mappings[opt.key]);
      const validDestinationTypes = property?.type
        ? Object.keys(destinationTypeConversions[property.type])
        : [];

      if (property && !validDestinationTypes?.includes(opt.type)) {
        throw new Error(
          `${opt.key} requires a property of type ${opt.type}, but a ${property.type} (${property.key}) was mapped`
        );
      }
    }

    // optional rules can't be validated...
  }

  async parameterizedOptions(): Promise<SimpleDestinationOptions> {
    const parameterizedOptions = {};
    const options = await this.getOptions();
    const keys = Object.keys(options);
    for (const i in keys) {
      const k = keys[i];
      parameterizedOptions[k] =
        typeof options[k] === "string"
          ? await plugin.replaceTemplateRunVariables(options[k].toString())
          : options[k];
    }

    return parameterizedOptions;
  }

  async destinationConnectionOptions(
    destinationOptions: SimpleDestinationOptions = {}
  ) {
    return DestinationOps.destinationConnectionOptions(
      this,
      destinationOptions
    );
  }

  async destinationMappingOptions(cached?: boolean, saveCache = true) {
    return DestinationOps.destinationMappingOptions(this, cached, saveCache);
  }

  async recordPreview(
    record: GrouparooRecord,
    mapping: MappingHelper.Mappings,
    destinationGroupMemberships: {
      [groupId: string]: string;
    }
  ) {
    return DestinationOps.recordPreview(
      this,
      record,
      mapping,
      destinationGroupMemberships
    );
  }

  async checkRecordWillBeExported(record: GrouparooRecord) {
    const recordGroupIds = (
      await record.$get("groups", { attributes: ["id"] })
    ).map((group) => group.id);
    if (!recordGroupIds.includes(this.groupId)) {
      throw new Error(
        `record ${record.id} will not be exported by this destination`
      );
    }

    return true;
  }

  async exportRecord(
    record: GrouparooRecord,
    sync = false,
    force = false,
    saveExports = true
  ) {
    return DestinationOps.exportRecord(this, record, sync, force, saveExports);
  }

  async sendExport(_export: Export, sync = false) {
    return DestinationOps.sendExport(this, _export, sync);
  }

  async sendExports(_exports: Export[], sync = false) {
    return DestinationOps.sendExports(this, _exports, sync);
  }

  async runExportProcessor(exportProcessor: ExportProcessor) {
    return DestinationOps.runExportProcessor(this, exportProcessor);
  }

  async validateUniqueAppAndOptionsForGroup(
    options?: SimpleDestinationOptions
  ) {
    if (!options) options = await this.getOptions(true);

    const otherDestinations = await Destination.scope(null).findAll({
      where: {
        appId: this.appId,
        type: this.type,
        id: { [Op.not]: this.id },
      },
    });

    for (const otherDestination of otherDestinations) {
      const otherOptions = await otherDestination.getOptions(true);
      const isSameGroup =
        this.collection === "group" && otherDestination.collection === "group"
          ? this.groupId === otherDestination.groupId
          : false;
      const isSameModel =
        this.collection === "model" && otherDestination.collection === "model"
          ? this.modelId === otherDestination.modelId
          : false;
      const isSameOptions =
        JSON.stringify(Object.entries(otherOptions)) ===
        JSON.stringify(Object.entries(options));

      if (isSameOptions && (isSameGroup || isSameModel)) {
        throw new Error(
          `destination "${otherDestination.name}" (${otherDestination.id}) is already using this app with the same options and group`
        );
      }
    }
  }

  getConfigId() {
    return this.idIsDefault() ? ConfigWriter.generateId(this.name) : this.id;
  }

  async getConfigObject(): Promise<DestinationConfigurationObject> {
    const { name, type, syncMode } = this;

    this.app = await this.$get("app");
    this.model = await this.$get("model");
    const modelId = this.model?.getConfigId();
    const appId = this.app?.getConfigId();
    this.group = await this.$get("group");
    const groupId = this.group?.getConfigId();
    const dgms = await DestinationGroupMembership.findAll({
      where: { destinationId: this.id },
      include: [Group],
    });
    const destinationGroupMemberships = Object.fromEntries(
      dgms.map((dgm) => [dgm.remoteKey, dgm.group.getConfigId()])
    );

    const options = await this.getOptions(false);
    const mapping = await MappingHelper.getConfigMapping(this);

    if (!name || !appId || !modelId) {
      return;
    }

    return {
      class: "Destination",
      id: this.getConfigId(),
      modelId,
      name,
      type,
      appId,
      collection: this.collection,
      groupId,
      syncMode,
      options,
      mapping,
      destinationGroupMemberships,
    };
  }

  // --- Class Methods --- //

  static async findById(id: string) {
    const instance = await this.scope(null).findOne({ where: { id } });
    if (!instance) throw new Error(`cannot find ${this.name} ${id}`);
    return instance;
  }

  @BeforeCreate
  static async ensureModelNotDeleted(instance: Destination) {
    const model = await GrouparooModel.findOne({
      where: { id: instance.modelId },
    });
    if (!model) {
      throw new Error(`cannot find ready model with id ${instance.modelId}`);
    }
  }

  @BeforeSave
  static async ensureModel(instance: Destination) {
    if (instance.state === "deleted") {
      const model = await GrouparooModel.scope(null).findOne({
        where: { id: instance.modelId },
      });
      if (!model) {
        throw new Error(`cannot find model with id ${instance.modelId}`);
      }
    } else {
      const model = await GrouparooModel.findOne({
        where: { id: instance.modelId },
      });
      if (!model) {
        throw new Error(`cannot find ready model with id ${instance.modelId}`);
      }
    }
  }

  @BeforeCreate
  static async ensureAppReady(instance: Destination) {
    const app = await App.findById(instance.appId);
    if (app.state !== "ready") throw new Error(`app ${app.id} is not ready`);
  }

  @BeforeCreate
  static async ensureExportRecordsMethod(instance: Destination) {
    const { pluginConnection } = await instance.getPlugin();
    if (!pluginConnection) {
      throw new Error(`a destination of type ${instance.type} cannot be found`);
    }

    if (
      !pluginConnection?.methods.exportRecord &&
      !pluginConnection?.methods.exportRecords
    ) {
      throw new Error(
        `a destination of type ${instance.type} cannot be created as there are no record export methods`
      );
    }
  }

  @BeforeSave
  static async validateSyncMode(instance: Destination) {
    if (instance.state !== "ready") return;
    await instance.validateSyncMode();
  }

  @BeforeSave
  static async validateRecordCollectionMode(instance: Destination) {
    if (
      instance.collection &&
      !DESTINATION_COLLECTIONS.includes(instance.collection)
    ) {
      throw new Error(
        `${instance.collection} is not a valid destination collection`
      );
    }

    if (instance.collection !== "group" && instance.groupId) {
      instance.groupId = null;
    }
  }

  @BeforeSave
  static async ensureUniqueName(instance: Destination) {
    const count = await Destination.count({
      where: {
        id: { [Op.ne]: instance.id },
        name: instance.name,
        state: { [Op.notIn]: ["draft", "deleted"] },
      },
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async ensureOnlyOneDestinationPerAppWithSameSettingsAndGroup(
    instance: Destination
  ) {
    await instance.validateUniqueAppAndOptionsForGroup(null);
  }

  @BeforeSave
  static async updateState(instance: Destination) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @BeforeSave
  static async noUpdateIfLocked(instance) {
    await LockableHelper.beforeSave(instance, ["state"]);
  }

  @BeforeDestroy
  static async noDestroyIfLocked(instance) {
    await LockableHelper.beforeDestroy(instance);
  }

  @BeforeDestroy
  static async cannotDeleteDestinationWithTrackedGroup(instance: Destination) {
    if (process.env.GROUPAROO_RUN_MODE === "cli:config") return;
    if (instance.groupId) {
      const group = await Group.scope("notDraft").findOne({
        where: { id: instance.groupId },
      });
      if (group) {
        throw new Error("cannot delete a destination that is tracking a group");
      }
    }
  }

  @BeforeDestroy
  static async waitForPendingExports(instance: Destination) {
    const pendingExportCount = await instance.$count("exports", {
      where: { state: ["pending", "processing"] },
    });
    if (pendingExportCount > 0) {
      throw new Error(
        `cannot delete destination until all pending exports have been processed (${pendingExportCount} pending)`
      );
    }
  }

  @AfterDestroy
  static async destroyDestinationMappings(instance: Destination) {
    return Mapping.destroy({
      where: { ownerId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyDestinationOptions(instance: Destination) {
    return Option.destroy({
      where: { ownerId: instance.id, ownerType: "destination" },
    });
  }

  @AfterDestroy
  static async destroyDestinationGroupMemberships(instance: Destination) {
    return DestinationGroupMembership.destroy({
      where: { destinationId: instance.id },
    });
  }

  @AfterDestroy
  static async destroyExports(instance: Destination) {
    await Export.destroy({
      where: { destinationId: instance.id },
    });
  }

  /**
   * Determine which destinations are interested in this record due to the groups they are tracking
   */
  static async relevantFor(
    record: GrouparooRecord,
    oldGroups: Group[] = [],
    newGroups: Group[] = []
  ) {
    const combinedGroupIds = [...oldGroups, ...newGroups].map((g) => g.id);
    const relevantDestinations =
      combinedGroupIds.length > 0
        ? await Destination.findAll({
            where: {
              [Op.or]: [
                { collection: "model", modelId: record.modelId },
                { collection: "group", groupId: { [Op.in]: combinedGroupIds } },
              ],
            },
          })
        : await Destination.findAll({
            where: { collection: "model", modelId: record.modelId },
          });

    return relevantDestinations;
  }
}
