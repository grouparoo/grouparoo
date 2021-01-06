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
import { Op, Transaction } from "sequelize";
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
    checks: [
      (instance: Destination, transaction?: Transaction) =>
        instance.validateOptions(null, transaction),
    ],
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

  async apiData(
    transaction?: Transaction,
    includeApp = true,
    includeGroup = true
  ) {
    let app: App;
    let group: Group;
    if (includeApp) app = await this.$get("app", { scope: null, transaction });
    if (includeGroup) {
      group = await this.$get("group", { scope: null, transaction });
    }

    const mapping = await this.getMapping(transaction);
    const options = await this.getOptions(null, transaction);
    const destinationGroupMemberships = await this.getDestinationGroupMemberships(
      transaction
    );
    const { pluginConnection } = await this.getPlugin(transaction);

    const exportTotals = await this.getExportTotals(transaction);

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
      locked: this.locked,
      app: app ? await app.apiData(transaction) : null,
      mapping,
      options,
      connection: pluginConnection,
      destinationGroup: group ? await group.apiData(transaction) : null,
      destinationGroupMemberships,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
      exportTotals,
    };
  }

  async getExportTotals(transaction?: Transaction) {
    return ExportOps.totals({ destinationGuid: this.guid }, transaction);
  }

  async getMapping(transaction?: Transaction) {
    return MappingHelper.getMapping(this, transaction);
  }

  async setMapping(
    mappings: DestinationMapping,
    transaction?: Transaction,
    externallyValidate = true
  ) {
    if (externallyValidate) await this.validateMappings(mappings, transaction);
    return MappingHelper.setMapping(this, mappings, transaction);
  }

  async getOptions(sourceFromEnvironment = true, transaction?: Transaction) {
    return OptionHelper.getOptions(this, sourceFromEnvironment, transaction);
  }

  async setOptions(
    options: SimpleDestinationOptions,
    transaction?: Transaction
  ) {
    await this.validateUniqueAppAndOptions(options, transaction);
    return OptionHelper.setOptions(this, options, transaction);
  }

  async getExportArrayProperties(transaction?: Transaction) {
    return DestinationOps.getExportArrayProperties(this, transaction);
  }

  async getDestinationGroupMemberships(
    transaction?: Transaction
  ): Promise<SimpleDestinationGroupMembership[]> {
    const destinationGroupMemberships = await DestinationGroupMembership.findAll(
      { where: { destinationGuid: this.guid }, include: [Group], transaction }
    );

    return destinationGroupMemberships.map((dgm) => {
      return {
        remoteKey: dgm.remoteKey,
        groupGuid: dgm.group.guid,
        groupName: dgm.group.name,
      };
    });
  }

  async setDestinationGroupMemberships(
    newDestinationGroupMemberships: {
      [groupGuid: string]: string;
    },
    transaction?: Transaction
  ) {
    for (const groupGuid in newDestinationGroupMemberships) {
      const group = await Group.findByGuid(groupGuid, transaction);
      if (group.state === "draft" || group.state === "deleted") {
        throw new Error(`group ${group.name} is not ready`);
      }
    }

    let toCommit = false;
    if (!transaction) {
      transaction = await api.sequelize.transaction({
        lock: Transaction.LOCK.UPDATE,
      });
      toCommit = true;
    }

    try {
      await DestinationGroupMembership.destroy({
        where: {
          destinationGuid: this.guid,
        },
        transaction,
      });

      for (const groupGuid in newDestinationGroupMemberships) {
        await DestinationGroupMembership.create(
          {
            destinationGuid: this.guid,
            groupGuid,
            remoteKey: newDestinationGroupMemberships[groupGuid],
          },
          { transaction }
        );
      }

      if (toCommit) await transaction.commit();
      return this.getDestinationGroupMemberships();
    } catch (error) {
      if (toCommit) await transaction.rollback();
      throw error;
    }
  }

  async validateOptions(
    options: SimpleDestinationOptions,
    transaction?: Transaction
  ) {
    if (!options) options = await this.getOptions(true, transaction);
    return OptionHelper.validateOptions(this, options, null, transaction);
  }

  async getPlugin(transaction?: Transaction) {
    return OptionHelper.getPlugin(this, transaction);
  }

  async exportGroupMembers(force = false) {
    return DestinationOps.exportGroupMembers(this, force);
  }

  async trackGroup(group: Group, transaction?: Transaction) {
    return DestinationOps.trackGroup(this, group, transaction);
  }

  async unTrackGroup(transaction?: Transaction) {
    return DestinationOps.unTrackGroup(this, transaction);
  }

  async validateMappings(
    mappings: { [key: string]: string },
    transaction?: Transaction
  ) {
    if (Object.keys(mappings).length === 0) return;

    const destinationMappingOptions = await this.destinationMappingOptions(
      false,
      transaction
    );
    const properties = await Property.findAll({ transaction });
    const exportArrayProperties = await this.getExportArrayProperties(
      transaction
    );

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
    destinationOptions: SimpleDestinationOptions = {},
    transaction?: Transaction
  ) {
    return DestinationOps.destinationConnectionOptions(
      this,
      destinationOptions,
      transaction
    );
  }

  async destinationMappingOptions(cached?: boolean, transaction?: Transaction) {
    return DestinationOps.destinationMappingOptions(this, cached, transaction);
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

  async exportProfile(profile: Profile, sync = false, force = false) {
    return DestinationOps.exportProfile(this, profile, sync, force);
  }

  async sendExport(_export: Export, sync = false) {
    return DestinationOps.sendExport(this, _export, sync);
  }

  async sendExports(_exports: Export[], sync = false) {
    return DestinationOps.sendExports(this, _exports, sync);
  }

  async validateUniqueAppAndOptions(
    options?: SimpleDestinationOptions,
    transaction?: Transaction
  ) {
    if (!options) options = await this.getOptions(true, transaction);
    const otherDestinations = await Destination.scope(null).findAll({
      where: {
        appGuid: this.appGuid,
        type: this.type,
        guid: { [Op.not]: this.guid },
      },
      transaction,
    });

    for (const i in otherDestinations) {
      const otherDestination = otherDestinations[i];
      const otherOptions = await otherDestination.getOptions(true, transaction);
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

  static async findByGuid(guid: string, transaction?: Transaction) {
    const instance = await this.scope(null).findOne({
      where: { guid },
      transaction,
    });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
  }

  @BeforeCreate
  static async ensureAppReady(instance: Destination, { transaction }) {
    const app = await App.findByGuid(instance.appGuid, transaction);
    if (app.state !== "ready") throw new Error(`app ${app.guid} is not ready`);
  }

  @BeforeCreate
  static async ensureExportProfilesMethod(
    instance: Destination,
    { transaction }
  ) {
    const { pluginConnection } = await instance.getPlugin(transaction);
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
  static async ensureUniqueName(instance: Destination, { transaction }) {
    const count = await Destination.count({
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
  static async ensureOnlyOneDestinationPerAppWithSameSettings(
    instance: Destination,
    { transaction }
  ) {
    await instance.validateUniqueAppAndOptions(null, transaction);
  }

  @BeforeSave
  static async updateState(instance: Destination, { transaction }) {
    await StateMachine.transition(instance, STATE_TRANSITIONS, transaction);
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
  static async cannotDeleteDestinationWithTrackedGroup(
    instance: Destination,
    { transaction }
  ) {
    if (instance.groupGuid) {
      const group = await Group.findOne({
        where: { guid: instance.groupGuid },
        transaction,
      });
      if (group) {
        throw new Error("cannot delete a destination that is tracking a group");
      }
    }
  }

  @BeforeDestroy
  static async waitForPendingExports(
    instance: Destination,
    { transaction }: { transaction?: Transaction } = {}
  ) {
    const pendingExportCount = await instance.$count("exports", {
      where: {
        completedAt: { [Op.eq]: null },
        errorMessage: { [Op.eq]: null },
      },
      transaction,
    });
    if (pendingExportCount > 0) {
      throw new Error(
        `cannot delete destination until all pending exports have been sent (${pendingExportCount} pending)`
      );
    }
  }

  @AfterDestroy
  static async destroyDestinationMappings(
    instance: Destination,
    { transaction }
  ) {
    return Mapping.destroy({
      where: { ownerGuid: instance.guid },
      transaction,
    });
  }

  @AfterDestroy
  static async destroyDestinationOptions(
    instance: Destination,
    { transaction }
  ) {
    return Option.destroy({
      where: { ownerGuid: instance.guid },
      transaction,
    });
  }

  @AfterDestroy
  static async destroyDestinationGroupMemberships(
    instance: Destination,
    { transaction }
  ) {
    return DestinationGroupMembership.destroy({
      where: { destinationGuid: instance.guid },
      transaction,
    });
  }

  @AfterDestroy
  static async destroyExports(instance: Destination, { transaction }) {
    await Export.destroy({
      where: { destinationGuid: instance.guid },
      transaction,
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
