import { api, log, task } from "actionhero";
import {
  Table,
  Column,
  Default,
  AllowNull,
  BelongsTo,
  HasMany,
  BelongsToMany,
  ForeignKey,
  BeforeValidate,
  BeforeCreate,
  BeforeSave,
  AfterSave,
  AfterDestroy,
  DataType,
} from "sequelize-typescript";
import { LoggedModel } from "../classes/loggedModel";
import { App } from "./App";
import { Mapping } from "./Mapping";
import { Option } from "./Option";
import { ProfilePropertyRule } from "./ProfilePropertyRule";
import { Profile } from "./Profile";
import { Group } from "./Group";
import { Import } from "./Import";
import { Export } from "./Export";
import { DestinationGroup } from "./DestinationGroup";
import { ExportProfilePluginMethod } from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { Op } from "sequelize";
import { OptionHelper } from "./../modules/optionHelper";
import { MappingHelper } from "./../modules/mappingHelper";
import { StateMachine } from "./../modules/stateMachine";

export interface DestinationMappings extends MappingHelper.Mappings {}
export interface SimpleDestinationOptions extends OptionHelper.SimpleOptions {}

const STATE_TRANSITIONS = [
  { from: "draft", to: "ready", checks: ["validateOptions"] },
];

@Table({ tableName: "destinations", paranoid: false })
export class Destination extends LoggedModel<Destination> {
  guidPrefix() {
    return "dst";
  }

  @AllowNull(false)
  @Column
  @ForeignKey(() => App)
  appGuid: string;

  @AllowNull(false)
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

  @BelongsToMany(() => Group, () => DestinationGroup)
  groups: Group[];

  @HasMany(() => Mapping)
  mappings: Mapping[];

  @HasMany(() => Option, "ownerGuid")
  _options: Option[]; // the underscore is needed as "options" is an internal method on sequelize instances

  @HasMany(() => Export)
  exports: Export[];

  @BeforeValidate
  static async ensureName(instance: App) {
    if (!instance.name) {
      instance.name = `new ${
        instance.type
      } destination ${new Date().getTime()}`;
    }
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
    const otherDestination = await Destination.findOne({
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

  async apiData() {
    const app = await this.$get("app");
    const mapping = await this.getMapping();
    const options = await this.getOptions();
    const groups = await this.$get("groups");
    const { pluginConnection } = await this.getPlugin();
    const previewAvailable = await this.previewAvailable();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      state: this.state,
      app: await app.apiData(),
      trackAllGroups: this.trackAllGroups,
      mapping,
      options,
      previewAvailable,
      connection: pluginConnection,
      destinationGroups: await Promise.all(groups.map((grp) => grp.apiData())),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  async previewAvailable() {
    const { pluginConnection } = await this.getPlugin();
    if (typeof pluginConnection?.methods?.destinationPreview === "function") {
      return true;
    }
    return false;
  }

  async getMapping() {
    return MappingHelper.getMapping(this);
  }

  async setMapping(mappings: DestinationMappings) {
    return MappingHelper.setMapping(this, mappings);
  }

  async afterSetMapping() {
    const destinationGroups = await this.$get("destinationGroups");
    for (const i in destinationGroups) {
      await task.enqueue("group:updateMembers", {
        groupGuid: destinationGroups[i].groupGuid,
      });
    }
  }

  async getOptions() {
    return OptionHelper.getOptions(this);
  }

  async setOptions(options: SimpleDestinationOptions) {
    return OptionHelper.setOptions(this, options);
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

  async trackGroup(group: Group) {
    return DestinationGroup.create({
      groupGuid: group.guid,
      destinationGuid: this.guid,
    });
  }

  async unTrackGroup(group: Group) {
    if (this.trackAllGroups) {
      throw new Error("destination is tracking all groups");
    }

    const destinationGroup = await DestinationGroup.findOne({
      where: {
        groupGuid: group.guid,
        destinationGuid: this.guid,
      },
    });

    if (!destinationGroup) {
      throw new Error("destination group not found");
    }

    return destinationGroup.destroy();
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

  async destinationConnectionOptions() {
    const { pluginConnection } = await this.getPlugin();
    const app = await this.$get("app");
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.destinationOptions) {
      throw new Error(`cannot return destination options for ${this.type}`);
    }

    return pluginConnection.methods.destinationOptions(app, appOptions);
  }

  async destinationPreview(destinationOptions?: SimpleDestinationOptions) {
    if (!destinationOptions) {
      destinationOptions = await this.getOptions();
    }

    try {
      // if the options aren't set yet, return an empty array of rows
      await this.validateOptions(destinationOptions);
    } catch {
      return [];
    }

    const { pluginConnection } = await this.getPlugin();
    const app = await this.$get("app");
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.destinationPreview) {
      throw new Error(`cannot return a destination preview for ${this.type}`);
    }

    return pluginConnection.methods.destinationPreview(
      app,
      appOptions,
      this,
      destinationOptions
    );
  }

  async exportProfile(
    profile: Profile,
    imports: Array<Import>,
    oldProfileProperties: { [key: string]: any },
    newProfileProperties: { [key: string]: any },
    oldGroups: Array<Group>,
    newGroups: Array<Group>
  ) {
    const options = await this.getOptions();
    const app = await this.$get("app");
    let method: ExportProfilePluginMethod;
    const { pluginConnection } = await this.getPlugin();
    method = pluginConnection.methods.exportProfile;

    if (!method) {
      throw new Error(`cannot find an export method for app type ${app.type}`);
    }

    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);

    const mapping = await this.getMapping();
    const mappingKeys = Object.keys(mapping);
    let mappedOldProfileProperties = {};
    let mappedNewProfileProperties = {};
    mappingKeys.forEach((k) => {
      mappedOldProfileProperties[k] = oldProfileProperties[mapping[k]];
      mappedNewProfileProperties[k] = newProfileProperties[mapping[k]];
    });

    const oldGroupNames = oldGroups.map((g) => g.name);
    const newGroupNames = newGroups.map((g) => g.name);
    const newGroupGuids = newGroups.map((g) => g.guid);
    const destinationGroupGuids = (await this.$get("groups")).map(
      (g) => g.guid
    );
    let toDelete = true;
    newGroupGuids.forEach((newGroupGuid) => {
      if (destinationGroupGuids.includes(newGroupGuid)) {
        toDelete = false;
      }
    });

    const _export = await Export.create({
      destinationGuid: this.guid,
      profileGuid: profile.guid,
      startedAt: new Date(),
      oldProfileProperties: mappedOldProfileProperties,
      newProfileProperties: mappedNewProfileProperties,
      oldGroups: oldGroupNames.sort(),
      newGroups: newGroupNames.sort(),
      toDelete,
    });

    try {
      await _export.associateImports(imports);

      const success = await method(
        app,
        appOptions,
        this,
        options,
        profile,
        mappedOldProfileProperties,
        mappedNewProfileProperties,
        oldGroupNames,
        newGroupNames,
        toDelete
      );

      _export.completedAt = new Date();
      await _export.save();
      await _export.markMostRecent();
      return success;
    } catch (error) {
      _export.errorMessage = error.toString();
      await _export.save();
      error.message = `error exporting profile ${profile.guid} to destination ${this.guid}: ${error}`;
      throw error;
    }
  }

  // --- Class Methods --- //

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
