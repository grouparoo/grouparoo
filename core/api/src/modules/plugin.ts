import { api, log } from "actionhero";
import { GrouparooPlugin } from "../classes/plugin";
import Mustache from "mustache";

import { App } from "../models/App";
import { ApiKey } from "../models/ApiKey";
import { Destination } from "../models/Destination";
import { DestinationGroup } from "../models/DestinationGroup";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";
import { File } from "../models/File";
import { Export } from "../models/Export";
import { ExportImport } from "../models/ExportImport";
import { Group } from "../models/Group";
import { GroupMember } from "../models/GroupMember";
import { GroupRule } from "../models/GroupRule";
import { Import } from "../models/Import";
import { Log } from "../models/Log";
import { Mapping } from "../models/Mapping";
import { Option } from "../models/Option";
import { Permission } from "../models/Permission";
import { Profile } from "../models/Profile";
import { ProfileProperty } from "../models/ProfileProperty";
import { ProfilePropertyRule } from "../models/ProfilePropertyRule";
import { ProfilePropertyRuleFilter } from "../models/ProfilePropertyRuleFilter";
import { ProfileMultipleAssociationShim } from "../models/ProfileMultipleAssociationShim";
import { Run } from "../models/Run";
import { Schedule } from "../models/Schedule";
import { Setting } from "../models/Setting";
import { Source } from "../models/Source";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";

// the order matters here - the children need to come before the parents (destinationGroup -> destination)
const models = [
  App,
  ApiKey,
  Source,
  Schedule,
  DestinationGroup,
  Destination,
  DestinationGroupMembership,
  Option,
  Import,
  ExportImport,
  Run,
  Export,
  File,
  GroupMember,
  Group,
  GroupRule,
  Log,
  Permission,
  Profile,
  ProfileProperty,
  ProfilePropertyRule,
  ProfilePropertyRuleFilter,
  ProfileMultipleAssociationShim,
  Mapping,
  Team,
  TeamMember,
];

export namespace plugin {
  /**
   * This is needed when running in dev mode (TS) but you are using a compiled plugin (JS).
   * The plugin will actually load the JS model while core will be loading the TS model.
   * Both need to be "added" to sequelize to know which connection to use.
   */
  export function mountModels() {
    models.map((model) => {
      if (!model.isInitialized) {
        api.sequelize.addModels([model]);
      }
    });
  }

  /**
   * Register a Grouparoo Plugin
   */
  export function registerPlugin(plugin: GrouparooPlugin) {
    log(`registering grouparoo plugin: ${plugin.name}`);
    api.plugins.plugins.push(plugin);
  }

  /**
   * Register a setting for your Grouparoo plugin
   */
  export async function registerSetting(
    pluginName: string,
    key: string,
    defaultValue: any,
    description: string
  ) {
    const setting = await Setting.findOne({ where: { pluginName, key } });

    if (setting) {
      return setting;
    }

    try {
      const setting = await Setting.create({
        pluginName,
        key,
        value: defaultValue,
        defaultValue,
        description,
      });

      return setting;
    } catch (error) {
      throw new Error(
        `error registering setting: ${JSON.stringify({
          pluginName,
          key,
          defaultValue,
          description,
        })}: ${error}`
      );
    }
  }

  /**
   * Read a setting for this plugin
   */
  export async function readSetting(pluginName: string, key: string) {
    const setting = await Setting.findOne({ where: { pluginName, key } });
    if (!setting) {
      throw new Error(
        `setting ${key} not registered for grouparoo plugin ${pluginName}`
      );
    }
    return setting;
  }

  /**
   * Update a setting for this plugin
   */
  export async function updateSetting(
    pluginName: string,
    key: string,
    value: any
  ) {
    const setting = await plugin.readSetting(pluginName, key);
    setting.value = value;
    await setting.save();
    return setting;
  }

  /**
   * When your plugin has a record for a profile, send it to this method.  We will use the provided mapping against your raw data row to store the original data and mapped data to the profile.
   * mapping: an object whose keys are remote columns and whose values are the profilePropertyRule keys, ie: {remoteColumnId: 'userId'}
   * row: {email: 'abc@company.com', vip: true}
   */
  export async function createImport(
    mapping: { [remoteKey: string]: string },
    run: Run,
    row: { [remoteKey: string]: any }
  ) {
    const mappingKeys = Object.keys(mapping);
    const mappedProfileProperties = {};
    mappingKeys.forEach((k) => {
      mappedProfileProperties[mapping[k]] = row[k];
    });

    const transaction = await api.sequelize.transaction();

    const _import = await Import.create(
      {
        rawData: row,
        data: mappedProfileProperties,
        creatorType: "run",
        creatorGuid: run.guid,
      },
      { transaction }
    );
    await run.increment(["importsCreated"], { transaction });
    await transaction.commit();

    return _import;
  }

  /**
   * Given a fileGuid, download the file to this server and return the readable local path
   */
  export async function getLocalFilePath(fileGuid: string): Promise<string> {
    const file = await File.findOne({ where: { guid: fileGuid } });

    if (!file) {
      throw new Error(`cannot find a file with guid ${fileGuid}`);
    }

    const { localPath } = await api.files.downloadToServer(file);
    return localPath;
  }

  /**
   * data helpers
   */
  export function expandDates(raw: Date) {
    if (!raw) {
      return null;
    }

    return {
      raw,
      iso: raw.toISOString(),
      sql: raw.toISOString().slice(0, 19).replace("T", " "),
      date: raw.toISOString().split("T")[0],
      time: raw.toISOString().split("T")[1].split(".")[0],
    };
  }

  /**
   * Takes a string with mustache variables and replaces them with the proper values for a schedule and run
   */
  export async function replaceTemplateRunVariables(string: string, run?: Run) {
    if (string.indexOf("{{") < 0) {
      return string;
    }

    const data = {
      now: expandDates(new Date()),
      run: {},
      previousRun: {
        guid: "",
        creatorGuid: "",
        creatorType: "",
        error: null,
        state: "mocked",
        createdAt: expandDates(new Date(0)),
        updatedAt: expandDates(new Date(0)),
      },
    };

    if (run) {
      data.run = {
        guid: run.guid,
        creatorGuid: run.creatorGuid,
        creatorType: run.creatorType,
        state: run.state,
        error: run.error,
        createdAt: expandDates(run.createdAt),
        updatedAt: expandDates(run.updatedAt),
      };

      const previousRun = await run.previousRun();

      if (previousRun) {
        data.previousRun = {
          guid: previousRun.guid,
          creatorGuid: previousRun.creatorGuid,
          creatorType: previousRun.creatorType,
          state: previousRun.state,
          error: previousRun.error,
          createdAt: expandDates(previousRun.createdAt),
          updatedAt: expandDates(previousRun.updatedAt),
        };
      }
    }

    validateMustacheVariables(string, data);
    return Mustache.render(string, data);
  }

  /**
   * Takes a profile and returns data with the values from the properties and current time.
   */
  export async function getProfileData(
    profile: Profile
  ): Promise<{ [remoteKey: string]: any }> {
    const data = {
      now: expandDates(new Date()),
      createdAt: expandDates(profile.createdAt),
      updatedAt: expandDates(profile.updatedAt),
    };

    const properties = await profile.properties();

    for (const key in properties) {
      data[key] =
        properties[key].value instanceof Date
          ? expandDates(properties[key].value)
          : properties[key].value;
    }
    return data;
  }

  /**
   * Takes a string with mustache variables and replaces them with the proper values for a profile
   */
  export async function replaceTemplateProfileVariables(
    string: string,
    profile: Profile
  ): Promise<string> {
    if (string.indexOf("{{") < 0) {
      return string;
    }
    const data = await getProfileData(profile);

    validateMustacheVariables(string, data);
    return Mustache.render(string, data);
  }

  /**
   * Takes a string with mustache variable (keys) and replaces them with the profile property guids
   * ie: `select * where id = {{ userId }}` => `select * where id = {{ ppr_abc123 }}`
   */
  export async function replaceTemplateProfilePropertyKeysWithProfilePropertyGuid(
    string: string
  ): Promise<string> {
    if (string.indexOf("{{") < 0) {
      return string;
    }

    const profilePropertyRules = await ProfilePropertyRule.cached();
    const data = {};
    for (const i in profilePropertyRules) {
      const rule = profilePropertyRules[i];
      data[rule.key] = `{{ ${rule.guid} }}`;
    }

    validateMustacheVariables(string, data);
    return Mustache.render(string, data);
  }

  /**
   * Takes a string with mustache variable (guids) and replaces them with the profile property keys
   * ie: `select * where id = {{ ppr_abc123 }}` => `select * where id = {{ userId }}`
   */
  export async function replaceTemplateProfilePropertyGuidsWithProfilePropertyKeys(
    string: string
  ): Promise<string> {
    if (string.indexOf("{{") < 0) {
      return string;
    }

    const profilePropertyRules = await ProfilePropertyRule.cached();
    const data = {};
    for (const i in profilePropertyRules) {
      const rule = profilePropertyRules[i];
      data[rule.guid] = `{{ ${rule.key} }}`;
    }

    validateMustacheVariables(string, data);
    return Mustache.render(string, data);
  }
}

function validateMustacheVariables(string, data) {
  Mustache.parse(string)
    .filter((chunk) => chunk[0] === "name")
    .map((chunk) => chunk[1])
    .map((key) => {
      const value = key.split(".").reduce((o, i) => o[i], data);
      if (value === undefined) {
        throw new Error(`missing mustache key "${key}"`);
      }
    });
}
