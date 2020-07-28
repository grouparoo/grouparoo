import { task, api } from "actionhero";
import {
  Table,
  Column,
  Default,
  AllowNull,
  BelongsTo,
  HasMany,
  Length,
  BelongsToMany,
  ForeignKey,
  BeforeCreate,
  BeforeSave,
  AfterSave,
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
import { Run } from "./Run";
import { DestinationGroup } from "./DestinationGroup";
import { DestinationGroupMembership } from "./DestinationGroupMembership";
import { plugin } from "../modules/plugin";
import { Op } from "sequelize";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { DestinationOps } from "./../modules/ops/destination";

export interface DestinationMapping extends MappingHelper.Mappings {}
export interface SimpleDestinationGroupMembership {
  remoteKey: string;
  groupGuid: string;
  groupName: string;
}
export interface SimpleDestinationOptions extends OptionHelper.SimpleOptions {}

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
  @Column(DataType.ENUM("draft", "ready"))
  state: string;

  @Default(false)
  @Column
  trackAllGroups: boolean;

  @BelongsTo(() => App)
  app: App;

  @HasMany(() => DestinationGroup)
  destinationGroups: DestinationGroup[];

  @HasMany(() => DestinationGroupMembership)
  destinationGroupMemberships: DestinationGroupMembership[];

  @BelongsToMany(() => Group, () => DestinationGroup)
  groups: Group[];

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Export)
  exports: Export[];

  async apiData(includeApp = true, includeGroups = true) {
    let app: App;
    let groups: Group[];
    if (includeApp) {
      app = await this.$get("app");
    }
    if (includeGroups) {
      groups = await this.$get("groups");
    }

    const mapping = await this.getMapping();
    const options = await this.getOptions();
    const destinationGroupMemberships = await this.getDestinationGroupMemberships();
    const { pluginConnection } = await this.getPlugin();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
      app: app ? await app.apiData() : null,
      trackAllGroups: this.trackAllGroups,
      mapping,
      options,
      connection: pluginConnection,
      destinationGroups: groups
        ? await Promise.all(groups.map((grp) => grp.apiData()))
        : null,
      destinationGroupMemberships,
      createdAt: this.createdAt ? this.createdAt.getTime() : null,
      updatedAt: this.updatedAt ? this.updatedAt.getTime() : null,
    };
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

  async exportGroupMembers() {
    return DestinationOps.exportGroupMembers(this);
  }

  async trackGroup(group: Group) {
    return DestinationOps.trackGroup(this, group);
  }

  async unTrackGroups() {
    return DestinationOps.unTrackGroups(this);
  }

  async validateMappings(mappings: { [groupGuid: string]: string }) {
    if (Object.keys(mappings).length === 0) {
      return;
    }

    const destinationMappingOptions = await this.destinationMappingOptions();
    const cachedProfilePropertyRules = await ProfilePropertyRule.cached();

    // required
    for (const i in destinationMappingOptions.profilePropertyRules.required) {
      const opt = destinationMappingOptions.profilePropertyRules.required[i];
      if (!mappings[opt.key]) {
        throw new Error(`${opt.key} is a required destination mapping option`);
      }

      const profilePropertyRule = cachedProfilePropertyRules[mappings[opt.key]];
      if (opt.type !== "any") {
        // existence checks will happen within the mapping helper
        if (profilePropertyRule && profilePropertyRule.type !== opt.type) {
          throw new Error(
            `${opt.key} requires a profile property rule of type ${opt.type}, but a ${profilePropertyRule.type} (${profilePropertyRule.key}) was mapped`
          );
        }
      }
    }

    // known
    for (const i in destinationMappingOptions.profilePropertyRules.known) {
      const opt = destinationMappingOptions.profilePropertyRules.known[i];
      const profilePropertyRule = cachedProfilePropertyRules[mappings[opt.key]];
      if (opt.type !== "any") {
        // existence checks will happen within the mapping helper
        if (profilePropertyRule && profilePropertyRule.type !== opt.type) {
          throw new Error(
            `${opt.key} requires a profile property rule of type ${opt.type}, but a ${profilePropertyRule.type} (${profilePropertyRule.key}) was mapped`
          );
        }
      }
    }

    // optional rule can't be validated...
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

  async destinationMappingOptions() {
    return DestinationOps.destinationMappingOptions(this);
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
    const destinationGroupGuids = (
      await this.$get("groups", { attributes: ["guid"] })
    ).map((group) => group.guid);
    const intersectingGroupGuids = profileGroupGuids.filter(
      (value) => -1 !== destinationGroupGuids.indexOf(value)
    );

    if (intersectingGroupGuids.length === 0) {
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
    oldProfileProperties: { [key: string]: any[] },
    newProfileProperties: { [key: string]: any[] },
    oldGroups: Array<Group>,
    newGroups: Array<Group>,
    sync = false
  ) {
    return DestinationOps.exportProfile(
      this,
      profile,
      runs,
      imports,
      oldProfileProperties,
      newProfileProperties,
      oldGroups,
      newGroups,
      sync
    );
  }

  async sendExport(_export: Export, sync = false) {
    return DestinationOps.sendExport(this, _export, sync);
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

    if (!pluginConnection.methods.exportProfile) {
      throw new Error(
        `a destination of type ${instance.type} cannot be created as there is no exportProfile method`
      );
    }
  }

  @BeforeSave
  static async ensureOnlyOneDestinationPerApp(instance: Destination) {
    const otherDestination = await Destination.scope(null).findOne({
      where: {
        appGuid: instance.appGuid,
        guid: { [Op.not]: instance.guid },
      },
    });

    if (otherDestination) {
      throw new Error(
        `destination "${otherDestination.name}" is already using this app`
      );
    }
  }

  @BeforeSave
  static async updateState(instance: Destination) {
    await StateMachine.transition(instance, STATE_TRANSITIONS);
  }

  @AfterSave
  static async buildDestinationGroupsWhenTrackingAll(instance: Destination) {
    if (instance.trackAllGroups === true) {
      const groups = await Group.findAll();
      for (const i in groups) {
        await DestinationGroup.findOrCreate({
          where: { groupGuid: groups[i].guid, destinationGuid: instance.guid },
        });
      }
    }

    if (!instance.changed()) {
      return;
    }

    const changes = instance.changed() as Array<string>;
    if (
      instance.trackAllGroups === false &&
      changes.includes("trackAllGroups")
    ) {
      const destinationGroups = await instance.$get("destinationGroups");
      for (const i in destinationGroups) {
        await destinationGroups[i].destroy();
      }
    }
  }

  @BeforeDestroy
  static async cannotDeleteDestinationWithTrackkedGroups(
    instance: Destination
  ) {
    const destinationGroupsCount = await instance.$count("destinationGroups");
    if (instance.trackAllGroups === true || destinationGroupsCount > 0) {
      throw new Error("cannot delete a destination that is tracking a group");
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
  static async destroyDestinationGroups(instance: Destination) {
    // need to go 1-by-1 for callbacks
    const destinationGroups = await instance.$get("destinationGroups");
    await Promise.all(destinationGroups.map((dsg) => dsg.destroy()));
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
    const combinedGroups = oldGroups.concat(newGroups);
    const relevantDestinations: Array<Destination> = [];

    const destinations = await Destination.findAll({
      include: [Group],
      where: { state: "ready" },
    });
    for (const i in destinations) {
      const destination = destinations[i];
      const destinationGroupGuids = destination.groups.map((dsg) => dsg.guid);
      for (const j in combinedGroups) {
        if (destinationGroupGuids.includes(combinedGroups[j].guid)) {
          relevantDestinations.push(destination);
          break;
        }
      }
    }

    return relevantDestinations;
  }
}
