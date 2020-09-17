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
import { Import } from "./Import";
import { Export } from "./Export";
import { ExportRun } from "./ExportRun";
import { Run } from "./Run";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import { plugin } from "../modules/plugin";
import { Op } from "sequelize";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { DestinationOps } from "./../modules/ops/destination";
import { ExportOps } from "../modules/ops/export";
import { destinationTypeConversions } from "../modules/destinationTypeConversions";

export interface DestinationMapping extends MappingHelper.Mappings {}
export interface SimpleDestinationGroupMembership {
  remoteKey: string;
  groupGuid: string;
  groupName: string;
}
export interface SimpleDestinationOptions extends OptionHelper.SimpleOptions {}

const STATES = ["draft", "ready"] as const;
const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: ["validateOptions"] },
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
    if (includeGroup) group = await this.$get("group", { scope: null });

    const mapping = await this.getMapping();
    const options = await this.getOptions();
    const destinationGroupMemberships = await this.getDestinationGroupMemberships();
    const { pluginConnection } = await this.getPlugin();

    const exportTotals = await this.getExportTotals();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
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

  async setMapping(mappings: DestinationMapping) {
    await this.validateMappings(mappings);
    return MappingHelper.setMapping(this, mappings);
  }

  async getOptions() {
    return OptionHelper.getOptions(this);
  }

  async setOptions(options: SimpleDestinationOptions) {
    await this.validateUniqueAppAndOptions(options);
    return OptionHelper.setOptions(this, options);
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

    const transaction = await api.sequelize.transaction();

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

      await transaction.commit();
      return this.getDestinationGroupMemberships();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async validateOptions(options: SimpleDestinationOptions) {
    if (!options) {
      options = await this.getOptions();
    }

    return OptionHelper.validateOptions(this, options);
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

  async validateMappings(mappings: { [key: string]: string }) {
    if (Object.keys(mappings).length === 0) return;

    const destinationMappingOptions = await this.destinationMappingOptions(
      false
    );
    const cachedProfilePropertyRules = await ProfilePropertyRule.cached();
    const exportArrayProperties = await this.getExportArrayProperties();

    // check for array properties
    Object.values(mappings).forEach((k) => {
      const profilePropertyRule = cachedProfilePropertyRules[k];
      if (
        profilePropertyRule &&
        profilePropertyRule.isArray &&
        !exportArrayProperties.includes(k) &&
        !exportArrayProperties.includes("*")
      ) {
        throw new Error(
          `${k} is an array profile property that ${this.name} cannot support`
        );
      }
    });

    // required
    for (const i in destinationMappingOptions.profilePropertyRules.required) {
      const opt = destinationMappingOptions.profilePropertyRules.required[i];
      if (!mappings[opt.key]) {
        throw new Error(`${opt.key} is a required destination mapping option`);
      }

      const profilePropertyRule = cachedProfilePropertyRules[mappings[opt.key]];
      const validDestinationTypes = profilePropertyRule?.type
        ? Object.keys(destinationTypeConversions[profilePropertyRule.type])
        : [];

      if (profilePropertyRule && !validDestinationTypes?.includes(opt.type)) {
        throw new Error(
          `${opt.key} requires a profile property rule of type ${opt.type}, but a ${profilePropertyRule.type} (${profilePropertyRule.key}) was mapped`
        );
      }
    }

    // known
    for (const i in destinationMappingOptions.profilePropertyRules.known) {
      const opt = destinationMappingOptions.profilePropertyRules.known[i];
      const profilePropertyRule = cachedProfilePropertyRules[mappings[opt.key]];
      const validDestinationTypes = profilePropertyRule?.type
        ? Object.keys(destinationTypeConversions[profilePropertyRule.type])
        : [];

      if (profilePropertyRule && !validDestinationTypes?.includes(opt.type)) {
        throw new Error(
          `${opt.key} requires a profile property rule of type ${opt.type}, but a ${profilePropertyRule.type} (${profilePropertyRule.key}) was mapped`
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

  async destinationMappingOptions(cached?: boolean) {
    return DestinationOps.destinationMappingOptions(this, cached);
  }

  async getRuns(state?: string, limit = 100, offset = 0): Promise<Run[]> {
    const exportRuns = await ExportRun.findAll({
      raw: true,
      attributes: [
        [api.sequelize.fn("DISTINCT", api.sequelize.col("runGuid")), "runGuid"],
        [
          api.sequelize.fn("MIN", api.sequelize.col("export.createdAt")),
          "createdAt",
        ],
      ],
      group: ["runGuid"],
      include: [
        {
          model: Export,
          where: { destinationGuid: this.guid },
          required: true,
          attributes: [],
        },
      ],
      limit,
      offset,
      order: [[api.sequelize.col("createdAt"), "desc"]],
    });

    const where = { guid: { [Op.in]: exportRuns.map((er) => er.runGuid) } };
    if (state) where["state"] = state;

    return Run.scope(null).findAll({ where, order: [["createdAt", "desc"]] });
  }

  async profilePreview(
    profile: Profile,
    mapping: MappingHelper.Mappings,
    destinationGroupMemberships: {
      [groupGuid: string]: string;
    }
  ) {
    return DestinationOps.profilePreview(
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
    runs: Run[],
    imports: Array<Import>,
    sync = false,
    force = false
  ) {
    return DestinationOps.exportProfile(
      this,
      profile,
      runs,
      imports,
      sync,
      force
    );
  }

  async sendExport(_export: Export, sync = false) {
    return DestinationOps.sendExport(this, _export, sync);
  }

  async sendExports(_exports: Export[], sync = false) {
    return DestinationOps.sendExports(this, _exports, sync);
  }

  async validateUniqueAppAndOptions(options?: SimpleDestinationOptions) {
    if (!options) options = await this.getOptions();
    const otherDestinations = await Destination.scope(null).findAll({
      where: {
        appGuid: this.appGuid,
        guid: { [Op.not]: this.guid },
      },
    });

    for (const i in otherDestinations) {
      const otherDestination = otherDestinations[i];
      const otherOptions = await otherDestination.getOptions();
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
    const instance = await this.scope(null).findOne({ where: { guid } });
    if (!instance) throw new Error(`cannot find ${this.name} ${guid}`);
    return instance;
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
  static async ensureOnlyOneDestinationPerAppWithSameSettings(
    instance: Destination
  ) {
    await instance.validateUniqueAppAndOptions();
  }

  @BeforeSave
  static async updateState(instance: Destination) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
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
  static async waitForRunningRuns(instance: Destination) {
    const runningRuns = await instance.getRuns("running");
    if (runningRuns.length > 0) {
      throw new Error(
        `cannot delete destination until all runs are complete (${runningRuns.length} running)`
      );
    }
  }

  @BeforeDestroy
  static async waitUpdatingGroupsPreviouslySynced(instance: Destination) {
    const recentRuns = await instance.getRuns(undefined, 1, 0);
    const recentGroupGuids = Array.from(
      new Set(
        recentRuns
          .filter((run) => run.creatorGuid.match(/^grp_/))
          .map((run) => run.creatorGuid)
      )
    );
    const updatingGroups = await Group.findAll({
      where: { guid: { [Op.in]: recentGroupGuids }, state: "updating" },
    });
    if (updatingGroups.length > 0) {
      throw new Error(
        `cannot delete destination until previous exported groups are done updating (${updatingGroups[0].name})`
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
    await task.enqueue("destination:destroyExports", {
      destinationGuid: instance.guid,
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
    const relevantDestinations = await Destination.scope(null).findAll({
      where: {
        state: "ready",
        groupGuid: { [Op.in]: combinedGroupGuids },
      },
    });

    return relevantDestinations;
  }
}
