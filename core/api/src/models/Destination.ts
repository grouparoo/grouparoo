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
  BeforeCreate,
  BeforeSave,
  AfterSave,
  AfterDestroy,
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
import {
  GrouparooPlugin,
  PluginConnection,
  ExportProfilePluginMethod,
} from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { Op } from "sequelize";

export interface DestinationMappings {
  [key: string]: any;
}

export interface SimpleDestinationOptions {
  [key: string]: string;
}

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

  @BeforeCreate
  static async ensureExportProfilesMethod(instance: Destination) {
    const { pluginConnection } = instance.getPlugin();
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
    const { pluginConnection } = this.getPlugin();

    return {
      guid: this.guid,
      name: this.name,
      type: this.type,
      app: await app.apiData(),
      trackAllGroups: this.trackAllGroups,
      mapping,
      options,
      connection: pluginConnection,
      destinationGroups: await Promise.all(groups.map((grp) => grp.apiData())),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  async getMapping() {
    const MappingObject: DestinationMappings = {};
    const mappings = await this.$get("mappings");

    for (const i in mappings) {
      const mapping = mappings[i];
      const rule = await mapping.$get("profilePropertyRule");
      MappingObject[mapping.remoteKey] = rule.key;
    }

    return MappingObject;
  }

  async setMapping(mappings: DestinationMappings) {
    const transaction = await api.sequelize.transaction();

    try {
      await Mapping.destroy({
        where: { ownerGuid: this.guid },
        transaction,
      });

      const keys = Object.keys(mappings);
      for (const i in keys) {
        const remoteKey = keys[i];
        const key = mappings[remoteKey];
        const profilePropertyRule = await ProfilePropertyRule.findOne({
          where: { key },
        });

        if (!profilePropertyRule) {
          throw new Error(`cannot find profile property rule ${key}`);
        }

        await Mapping.create(
          {
            ownerGuid: this.guid,
            ownerType: "destination",
            profilePropertyRuleGuid: profilePropertyRule.guid,
            remoteKey,
          },
          { transaction }
        );
      }

      this.changed("updatedAt", true);
      await this.save({ transaction });

      await transaction.commit();

      // re-sync all groups to this destination
      const destinationGroups = await this.$get("destinationGroups");
      for (const i in destinationGroups) {
        await task.enqueue("group:updateMembers", {
          groupGuid: destinationGroups[i].groupGuid,
        });
      }
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async getOptions() {
    const optionsObject: SimpleDestinationOptions = {};
    const options = await this.$get("_options");

    options.forEach((option) => {
      optionsObject[option.key] = option.value;
    });

    return optionsObject;
  }

  async setOptions(options: SimpleDestinationOptions) {
    const transaction = await api.sequelize.transaction();

    try {
      await this.validateOptions(options);

      await Option.destroy({
        where: { ownerGuid: this.guid },
        transaction,
      });

      const keys = Object.keys(options);
      for (const i in keys) {
        const key = keys[i];
        await Option.create(
          {
            ownerGuid: this.guid,
            ownerType: "destination",
            key,
            value: options[key],
          },
          { transaction }
        );
      }

      this.changed("updatedAt", true);
      await this.save({ transaction });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
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
    const { pluginConnection } = this.getPlugin();
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

    const { pluginConnection } = this.getPlugin();
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
    let ignoreMapping = false;

    const { pluginConnection } = this.getPlugin();
    method = pluginConnection.methods.exportProfile;
    ignoreMapping = pluginConnection.ignoreMapping;

    if (!method) {
      throw new Error(`cannot find an export method for app type ${app.type}`);
    }

    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);

    const mapping = await this.getMapping();
    const mappingKeys = Object.keys(mapping);
    let mappedOldProfileProperties = {};
    let mappedNewProfileProperties = {};
    if (!ignoreMapping) {
      mappingKeys.forEach((k) => {
        mappedOldProfileProperties[k] = oldProfileProperties[mapping[k]];
        mappedNewProfileProperties[k] = newProfileProperties[mapping[k]];
      });
    } else {
      mappedOldProfileProperties = Object.assign({}, oldProfileProperties);
      mappedNewProfileProperties = Object.assign({}, newProfileProperties);
    }

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

  async validateOptions(options: { [key: string]: string }) {
    const requiredOptions = this.getRequiredOptions();
    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption]) {
        throw new Error(
          `${requiredOption} is required for a destination of type ${this.type}`
        );
      }
    });

    const { pluginConnection } = this.getPlugin();
    const allOptions = pluginConnection.options.map((o) => o.key);
    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(`${k} is not an option for a ${this.type} destination`);
      }
    }
  }

  getPlugin() {
    let match: {
      plugin: GrouparooPlugin;
      pluginConnection: PluginConnection;
    } = { plugin: null, pluginConnection: null };

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((pluginConnection) => {
          if (pluginConnection.name === this.type) {
            match = { plugin, pluginConnection };
          }
        });
      }
    });

    return match;
  }

  private getRequiredOptions() {
    const { pluginConnection } = this.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${this.type}`);
    }

    return pluginConnection.options.filter((o) => o.required).map((o) => o.key);
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

    const destinations = await Destination.findAll({ include: [Group] });
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
