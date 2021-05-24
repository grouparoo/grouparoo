import { task, api, log } from "actionhero";
import {
  Table,
  Column,
  Default,
  AllowNull,
  BelongsTo,
  HasMany,
  Length,
  ForeignKey,
  BeforeCreate,
  BeforeSave,
  AfterDestroy,
  DataType,
  DefaultScope,
  BeforeDestroy,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { App } from "./App";
import { Mapping } from "./Mapping";
import { Option } from "./Option";
import { Profile } from "./Profile";
import { Group } from "./Group";
import { Export } from "./Export";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import { plugin } from "../modules/plugin";
import { Op } from "sequelize";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";
import { Property } from "./Property";
import { DestinationOps } from "./../modules/ops/destination";
import { ExportOps } from "../modules/ops/export";
import { destinationTypeConversions } from "../modules/destinationTypeConversions";
import { LockableHelper } from "../modules/lockableHelper";
import { APIData } from "../modules/apiData";

export interface DestinationMapping extends MappingHelper.Mappings {}
export interface SimpleDestinationGroupMembership {
  remoteKey: string;
  groupId: string;
  groupName: string;
}
export interface SimpleDestinationOptions extends OptionHelper.SimpleOptions {}

const SYNC_MODES = ["sync", "additive", "enrich"] as const;
export type DestinationSyncMode = typeof SYNC_MODES[number];

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
    description: "Sync all profiles (create, update, delete)",
    operations: {
      create: true,
      update: true,
      delete: true,
    },
  },
  additive: {
    key: "additive",
    displayName: "Additive",
    description: "Sync all profiles, but do not delete (create, update)",
    operations: {
      create: true,
      update: true,
      delete: false,
    },
  },
  enrich: {
    key: "enrich",
    displayName: "Enrich",
    description: "Only update existing profiles (update)",
    operations: {
      create: false,
      update: true,
      delete: false,
    },
  },
};

const STATES = ["draft", "ready"] as const;
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

  @BelongsTo(() => App)
  app: App;

  @HasMany(() => DestinationGroupMembership)
  destinationGroupMemberships: DestinationGroupMembership[];

  @BelongsTo(() => Group)
  group: Group;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Option, "ownerId")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Export)
  exports: Export[];

  @AllowNull(true)
  @Column(DataType.ENUM(...SYNC_MODES))
  syncMode: DestinationSyncMode;

  async apiData(includeApp = true, includeGroup = true) {
    let app: App;
    let group: Group;
    if (includeApp) app = await this.$get("app", { scope: null });
    if (includeGroup) {
      group = await this.$get("group", { scope: null });
    }

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
      app: app ? await app.apiData() : null,
      mapping,
      options,
      connection: pluginConnection,
      destinationGroup: group ? await group.apiData() : null,
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
    await this.validateUniqueAppAndOptions(options);
    return OptionHelper.setOptions(this, options);
  }

  async afterSetOptions(hasChanges: boolean) {
    if (hasChanges) return this.exportGroupMembers(true);
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

  async exportGroupMembers(force = false) {
    return DestinationOps.exportGroupMembers(this, force);
  }

  async trackGroup(group: Group, force = true) {
    return DestinationOps.trackGroup(this, group, force);
  }

  async unTrackGroup(force = false) {
    return DestinationOps.unTrackGroup(this, force);
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
    const properties = await Property.findAllWithCache();
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
          `${k} is an array profile property that ${this.name} cannot support`
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

  async profilePreview(
    profile: Profile,
    mapping: MappingHelper.Mappings,
    destinationGroupMemberships: {
      [groupId: string]: string;
    }
  ) {
    return DestinationOps.profilePreview(
      this,
      profile,
      mapping,
      destinationGroupMemberships
    );
  }

  async checkProfileWillBeExported(profile: Profile) {
    const profileGroupIds = (
      await profile.$get("groups", { attributes: ["id"] })
    ).map((group) => group.id);
    if (!profileGroupIds.includes(this.groupId)) {
      throw new Error(
        `profile ${profile.id} will not be exported by this destination`
      );
    }

    return true;
  }

  async exportProfile(
    profile: Profile,
    sync = false,
    force = false,
    saveExports = true
  ) {
    return DestinationOps.exportProfile(
      this,
      profile,
      sync,
      force,
      saveExports
    );
  }

  async sendExport(_export: Export, sync = false) {
    return DestinationOps.sendExport(this, _export, sync);
  }

  async sendExports(_exports: Export[], sync = false) {
    return DestinationOps.sendExports(this, _exports, sync);
  }

  async validateUniqueAppAndOptions(options?: SimpleDestinationOptions) {
    if (!options) options = await this.getOptions(true);
    const otherDestinations = await Destination.scope(null).findAll({
      where: {
        appId: this.appId,
        type: this.type,
        id: { [Op.not]: this.id },
      },
    });

    for (const i in otherDestinations) {
      const otherDestination = otherDestinations[i];
      const otherOptions = await otherDestination.getOptions(true);
      let isSameOptions =
        Object.entries(otherOptions).toString() ===
        Object.entries(options).toString();

      if (isSameOptions) {
        throw new Error(
          `destination "${otherDestination.name}" (${otherDestination.id}) is already using this app with the same options`
        );
      }
    }
  }

  async getConfigObject() {
    const { id, name, type, appId, groupId, syncMode } = this;

    const options = await this.getOptions();
    const mapping = await MappingHelper.getMapping(this, "id");

    const dgm = await DestinationGroupMembership.findAll({
      where: { destinationId: id },
    });
    const destinationGroupMemberships = Object.fromEntries(
      dgm.map((dgm) => [dgm.groupId, dgm.remoteKey])
    );

    return {
      class: "Destination",
      id,
      name,
      type,
      appId,
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
  static async ensureAppReady(instance: Destination) {
    const app = await App.findById(instance.appId);
    if (app.state !== "ready") throw new Error(`app ${app.id} is not ready`);
  }

  @BeforeCreate
  static async ensureExportProfilesMethod(instance: Destination) {
    const { pluginConnection } = await instance.getPlugin();
    if (!pluginConnection) {
      throw new Error(`a destination of type ${instance.type} cannot be found`);
    }

    if (
      !pluginConnection?.methods.exportProfile &&
      !pluginConnection?.methods.exportProfiles
    ) {
      throw new Error(
        `a destination of type ${instance.type} cannot be created as there are no profile export methods`
      );
    }
  }

  @BeforeSave
  static async validateSyncMode(instance: Destination) {
    if (instance.state !== "ready") return;
    await instance.validateSyncMode();
  }

  @BeforeSave
  static async ensureUniqueName(instance: Destination) {
    const count = await Destination.count({
      where: {
        id: { [Op.ne]: instance.id },
        name: instance.name,
        state: { [Op.ne]: "draft" },
      },
    });
    if (count > 0) throw new Error(`name "${instance.name}" is already in use`);
  }

  @BeforeSave
  static async ensureOnlyOneDestinationPerAppWithSameSettings(
    instance: Destination
  ) {
    await instance.validateUniqueAppAndOptions(null);
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
      const group = await Group.findOne({
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
      where: { state: "pending" },
    });
    if (pendingExportCount > 0) {
      throw new Error(
        `cannot delete destination until all pending exports have been sent (${pendingExportCount} pending)`
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
      where: { ownerId: instance.id },
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
   * Determine which destinations are interested in this profile due to the groups they are tracking
   */
  static async destinationsForGroups(
    oldGroups: Group[] = [],
    newGroups: Group[] = []
  ) {
    const combinedGroupIds = [...oldGroups, ...newGroups].map((g) => g.id);
    const relevantDestinations = await Destination.findAll({
      where: { groupId: { [Op.in]: combinedGroupIds } },
    });

    return relevantDestinations;
  }
}
