import { task, api } from "actionhero";
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

export interface DestinationMapping extends MappingHelper.Mappings {}
export interface SimpleDestinationGroupMembership {
  remoteKey: string;
  groupGuid: string;
  groupName: string;
}
export interface SimpleDestinationOptions extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready"] as const;
const STATE_TRANSITIONS = [
  {
    from: "draft",
    to: "ready",
    checks: [(instance: Destination) => instance.validateOptions(null)],
  },
  { from: "draft", to: "deleted", checks: [] },
  { from: "ready", to: "deleted", checks: [] },
];

@DefaultScope(() => ({
  where: { state: "ready" },
}))
@Table({ tableName: "destinations", paranoid: false })
export class Destination extends LoggedModel<Destination> {
  guidPrefix() {
    return "dst";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => App)
  appGuid: string;

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
  groupGuid: string;

  @BelongsTo(() => App)
  app: App;

  @HasMany(() => DestinationGroupMembership)
  destinationGroupMemberships: DestinationGroupMembership[];

  @BelongsTo(() => Group)
  group: Group;

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Export)
  exports: Export[];

  async apiData(includeApp = true, includeGroup = true) {
    let app: App;
    let group: Group;
    if (includeApp) app = await this.$get("app", { scope: null });
    if (includeGroup) {
      group = await this.$get("group", { scope: null });
    }

    const mapping = await this.getMapping();
    const options = await this.getOptions(null);
    const destinationGroupMemberships = await this.getDestinationGroupMemberships();
    const { pluginConnection } = await this.getPlugin();
    const exportTotals = await this.getExportTotals();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
      locked: this.locked,
      app: app ? await app.apiData() : null,
      mapping,
      options,
      connection: pluginConnection,
      destinationGroup: group ? await group.apiData() : null,
      destinationGroupMemberships,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      exportTotals,
    };
  }

  async getExportTotals() {
    return ExportOps.totals({ destinationGuid: this.guid });
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
    const destinationGroupMemberships = await DestinationGroupMembership.findAll(
      { where: { destinationGuid: this.guid }, include: [Group] }
    );

    return destinationGroupMemberships.map((dgm) => {
      return {
        remoteKey: dgm.remoteKey,
        groupGuid: dgm.group.guid,
        groupName: dgm.group.name,
      };
    });
  }

  async setDestinationGroupMemberships(newDestinationGroupMemberships: {
    [groupGuid: string]: string;
  }) {
    for (const groupGuid in newDestinationGroupMemberships) {
      const group = await Group.findByGuid(groupGuid);
      if (group.state === "draft" || group.state === "deleted") {
        throw new Error(`group ${group.name} is not ready`);
      }
    }

    await DestinationGroupMembership.destroy({
      where: {
        destinationGuid: this.guid,
      },
    });

    for (const groupGuid in newDestinationGroupMemberships) {
      await DestinationGroupMembership.create({
        destinationGuid: this.guid,
        groupGuid,
        remoteKey: newDestinationGroupMemberships[groupGuid],
      });
    }

    return this.getDestinationGroupMemberships();
  }

  async validateOptions(options: SimpleDestinationOptions) {
    if (!options) options = await this.getOptions(true);
    return OptionHelper.validateOptions(this, options, null);
  }

  async getPlugin() {
    return OptionHelper.getPlugin(this);
  }

  async exportGroupMembers(force = false) {
    return DestinationOps.exportGroupMembers(this, force);
  }

  async trackGroup(group: Group) {
    return DestinationOps.trackGroup(this, group);
  }

  async unTrackGroup() {
    return DestinationOps.unTrackGroup(this);
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
    const properties = await Property.findAll();
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
          ? await plugin.replaceTemplateRunVariables(options[k])
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
      [groupGuid: string]: string;
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
    const profileGroupGuids = (
      await profile.$get("groups", { attributes: ["guid"] })
    ).map((group) => group.guid);
    if (!profileGroupGuids.includes(this.groupGuid)) {
      throw new Error(
        `profile ${profile.guid} will not be exported by this destination`
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
        appGuid: this.appGuid,
        type: this.type,
        guid: { [Op.not]: this.guid },
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
          `destination "${otherDestination.name}" (${otherDestination.guid}) is already using this app with the same options`
        );
      }
    }
  }

  // --- Class Methods --- //

  static async findByGuid(guid: string) {
    const instance = await this.scope(null).findOne({
      where: { guid },
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static async ensureAppReady(instance: Destination) {
    const app = await App.findByGuid(instance.appGuid);
    if (app.state !== "ready") throw new Error(`app ${app.guid} is not ready`);
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
  static async ensureUniqueName(instance: Destination) {
    const count = await Destination.count({
      where: {
        guid: { [Op.ne]: instance.guid },
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
    if (instance.groupGuid) {
      const group = await Group.findOne({
        where: { guid: instance.groupGuid },
      });
      if (group) {
        throw new Error("cannot delete a destination that is tracking a group");
      }
    }
  }

  @BeforeDestroy
  static async waitForPendingExports(instance: Destination) {
    const pendingExportCount = await instance.$count("exports", {
      where: {
        completedAt: { [Op.eq]: null },
        errorMessage: { [Op.eq]: null },
      },
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
      where: { ownerGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyDestinationOptions(instance: Destination) {
    return Option.destroy({
      where: { ownerGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyDestinationGroupMemberships(instance: Destination) {
    return DestinationGroupMembership.destroy({
      where: { destinationGuid: instance.guid },
    });
  }

  @AfterDestroy
  static async destroyExports(instance: Destination) {
    await Export.destroy({
      where: { destinationGuid: instance.guid },
    });
  }

  /**
   * Determine which destinations are interested in this profile due to the groups they are tracking
   */
  static async destinationsForGroups(
    oldGroups: Group[] = [],
    newGroups: Group[] = []
  ) {
    const combinedGroupGuids = [...oldGroups, ...newGroups].map((g) => g.guid);
    const relevantDestinations = await Destination.findAll({
      where: { groupGuid: { [Op.in]: combinedGroupGuids } },
    });

    return relevantDestinations;
  }
}
