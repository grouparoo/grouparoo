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
  BeforeUpdate,
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
  ColumnsPluginMethod,
  ExportProfilePluginMethod,
} from "../classes/plugin";
import { plugin } from "../modules/plugin";
import { Op } from "sequelize";

export interface DestinationMappings {
  [key: string]: any;
}

export interface DestinationOptions {
  [key: string]: any;
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
  static async checkCreateTypes(instance: Destination) {
    await instance.validateAllowedTypes();
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

  @BeforeUpdate
  static async checkOptions(instance: Destination) {
    const options = await instance.getOptions();
    await instance.validateRequiredOptions(options);
  }

  @BeforeUpdate
  static async checkUpdateTypes(instance: Destination) {
    await instance.validateAllowedTypes();
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
    const mappings = await this.getMapping();
    const options = await this.getOptions();
    const groups = await this.$get("groups");

    return {
      guid: this.guid,
      name: this.name,
      app: await app.apiData(),
      trackAllGroups: this.trackAllGroups,
      mappings,
      options,
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
    const optionsObject: DestinationMappings = {};
    const options = await this.$get("_options");

    options.forEach((option) => {
      optionsObject[option.key] = option.value;
    });

    return optionsObject;
  }

  async setOptions(options: DestinationMappings) {
    const transaction = await api.sequelize.transaction();

    try {
      await this.validateRequiredOptions(options);

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

  async parameterizedOptions(): Promise<DestinationOptions> {
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

  async columns(): Promise<{
    rows: { [key: string]: any };
    columns: Array<string>;
  }> {
    const app = await this.$get("app");
    const options = this.getOptions();
    await this.validateRequiredOptions(options);

    let method: ColumnsPluginMethod;
    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((connection) => {
          if (connection.app.indexOf(app.type) >= 0) {
            method = connection.methods.columns;
          }
        });
      }
    });

    if (!method) {
      throw new Error(`cannot find a columns method for app type ${app.type}`);
    }

    const appOptions = await app.getOptions();
    await app.validateOptions(appOptions);
    return method(this, app, appOptions);
  }

  async exportProfile(
    profile: Profile,
    imports: Array<Import>,
    oldProfileProperties: { [key: string]: any },
    newProfileProperties: { [key: string]: any },
    oldGroups: Array<Group>,
    newGroups: Array<Group>
  ) {
    const app = await this.$get("app");
    let method: ExportProfilePluginMethod;
    let ignoreMapping = false;

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((connection) => {
          if (
            connection.app.indexOf(app.type) >= 0 &&
            connection.direction === "export" &&
            connection?.methods?.exportProfile
          ) {
            method = connection.methods.exportProfile;
            ignoreMapping = connection.ignoreMapping;
          }
        });
      }
    });

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
        this,
        app,
        appOptions,
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

  async validateRequiredOptions(options: DestinationOptions) {
    let appOptions;

    const app = await this.$get("app");

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((connection) => {
          if (
            connection.app.indexOf(app.type) >= 0 &&
            connection.direction === "export"
          ) {
            appOptions = connection.options;
          }
        });
      }
    });

    if (!appOptions) {
      throw new Error(`cannot create a destination for type ${app.type}`);
    }

    const optionKeys = Object.keys(options);
    if (optionKeys.length === 0) {
      return;
    }

    const requiredOptions = appOptions.filter((opt) => opt.required);

    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption.key]) {
        throw new Error(
          `${requiredOption.key} is required for a destination of type ${app.type}`
        );
      }
    });

    for (const i in optionKeys) {
      if (appOptions.map((opt) => opt.key).indexOf(optionKeys[i]) < 0) {
        throw new Error(
          `${optionKeys[i]} is not an option for a ${app.type} destination`
        );
      }
    }
  }

  async validateAllowedTypes() {
    let allowedAppType: string;

    const app = await this.$get("app");

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.connections) {
        plugin.connections.forEach((connection) => {
          if (
            connection.app.indexOf(app.type) >= 0 &&
            connection.direction === "export"
          ) {
            allowedAppType = connection.app;
          }
        });
      }
    });

    if (allowedAppType !== app.type) {
      throw new Error("this app cannot be used for this type of destination");
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
