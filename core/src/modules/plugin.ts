import { api } from "actionhero";
import { Op } from "sequelize";
import { GrouparooPlugin } from "../classes/plugin";
import { MustacheUtils } from "./mustacheUtils";
import { APMWrap } from "./apm";

import { App } from "../models/App";
import { ApiKey } from "../models/ApiKey";
import { Destination } from "../models/Destination";
import { DestinationGroupMembership } from "../models/DestinationGroupMembership";
import { File } from "../models/File";
import { Export } from "../models/Export";
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
import { Property } from "../models/Property";
import { Filter } from "../models/Filter";
import { ProfileMultipleAssociationShim } from "../models/ProfileMultipleAssociationShim";
import { Run } from "../models/Run";
import { Schedule } from "../models/Schedule";
import { Session } from "../models/Session";
import { Setting, settingTypes } from "../models/Setting";
import { SetupStep } from "../models/SetupStep";
import { Source } from "../models/Source";
import { Notification } from "../models/Notification";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { ExportProcessor } from "../models/ExportProcessor";

// the order matters here - the children need to come before the parents (destinationGroup -> destination)
const models = [
  App,
  ApiKey,
  Source,
  Schedule,
  Destination,
  DestinationGroupMembership,
  Option,
  Filter,
  Import,
  Run,
  Export,
  ExportProcessor,
  File,
  GroupMember,
  Group,
  GroupRule,
  Log,
  Permission,
  Profile,
  ProfileProperty,
  Property,
  ProfileMultipleAssociationShim,
  Mapping,
  Notification,
  Setting,
  Session,
  SetupStep,
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
      if (!model.isInitialized) api.sequelize.addModels([model]);
    });
  }

  export async function cleanSettings(inUseKeys: string[]) {
    return await Setting.destroy({
      where: {
        key: { [Op.notIn]: inUseKeys },
      },
    });
  }

  /**
   * Register a Grouparoo Plugin
   */
  export function registerPlugin(plugin: GrouparooPlugin, validate?: boolean) {
    api.plugins.register(plugin, validate);
  }

  /**
   * Register a setting for your Grouparoo plugin
   */
  export async function registerSetting(
    pluginName: string,
    key: string,
    title: string,
    defaultValue: any,
    description: string,
    type: typeof settingTypes[number],
    variant = "info"
  ) {
    const setting = await Setting.findOne({ where: { pluginName, key } });

    if (setting) {
      return setting.update({
        title,
        defaultValue: defaultValue.toString(),
        description,
        type,
        variant,
      });
    }

    try {
      const setting = await Setting.create({
        pluginName,
        key,
        title,
        value: defaultValue,
        defaultValue,
        description,
        type,
        variant,
      });

      return setting;
    } catch (error) {
      throw new Error(
        `error registering setting: ${JSON.stringify({
          pluginName,
          key,
          defaultValue: defaultValue.toString(),
          description,
          type,
        })}: ${error}`
      );
    }
  }

  /**
   * Read a setting for this plugin
   */
  export async function readSetting(pluginName: string, key: string) {
    const setting = await Setting.findOne({
      where: { pluginName, key },
    });
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
   * mapping: an object whose keys are remote columns and whose values are the property keys, ie: {remoteColumnId: 'userId'}
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
      mappedProfileProperties[mapping[k]] = Array.isArray(row[k])
        ? row[k]
        : [row[k]];
    });

    const _import = await Import.create({
      rawData: row,
      data: mappedProfileProperties,
      creatorType: "run",
      creatorId: run.id,
    });

    return _import;
  }

  /**
   * Like plugin.createImport, but for many imports at once!
   * * mapping: an object whose keys are remote columns and whose values are the property keys, ie: {remoteColumnId: 'userId'}
   * rows: Array<{email: 'abc@company.com', vip: true}>
   */
  export async function createImports(
    mapping: { [remoteKey: string]: string },
    run: Run,
    rows: { [remoteKey: string]: any }[]
  ) {
    const bulkParams = [];
    const mappingKeys = Object.keys(mapping);

    for (const row of rows) {
      const mappedProfileProperties = {};
      mappingKeys.forEach((k) => {
        mappedProfileProperties[mapping[k]] = Array.isArray(row[k])
          ? row[k]
          : [row[k]];
      });

      bulkParams.push({
        rawData: row,
        data: mappedProfileProperties,
        creatorType: "run",
        creatorId: run.id,
      });
    }

    const _imports =
      bulkParams.length > 0 ? await Import.bulkCreate(bulkParams) : [];

    return _imports;
  }

  /**
   * Given a fileId, download the file to this server and return the readable local path
   */
  export async function getLocalFilePath(fileId: string): Promise<string> {
    const file = await File.findOne({ where: { id: fileId } });

    if (!file) throw new Error(`cannot find a file with id ${fileId}`);

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
        id: "",
        creatorId: "",
        creatorType: "",
        error: null,
        state: "mocked",
        createdAt: expandDates(new Date(0)),
        updatedAt: expandDates(new Date(0)),
      },
    };

    if (run) {
      data.run = {
        id: run.id,
        creatorId: run.creatorId,
        creatorType: run.creatorType,
        state: run.state,
        error: run.error,
        createdAt: expandDates(run.createdAt),
        updatedAt: expandDates(run.updatedAt),
      };

      const previousRun = await run.previousRun();

      if (previousRun) {
        data.previousRun = {
          id: previousRun.id,
          creatorId: previousRun.creatorId,
          creatorType: previousRun.creatorType,
          state: previousRun.state,
          error: previousRun.error,
          createdAt: expandDates(previousRun.createdAt),
          updatedAt: expandDates(previousRun.updatedAt),
        };
      }
    }

    return MustacheUtils.strictlyRender(string, data);
  }

  /**
   * Takes a profile and returns data with the values from the properties and current time.
   */
  export async function getProfileData(
    profile: Profile
  ): Promise<{ [remoteKey: string]: any }> {
    // TODO: we could do these types better to be string | number | etc | Array<string | etc>
    const data = {
      now: expandDates(new Date()),
      createdAt: expandDates(profile.createdAt),
      updatedAt: expandDates(profile.updatedAt),
    };

    const properties = await profile.getProperties();

    for (const key in properties) {
      data[key] =
        properties[key].values.length === 1
          ? properties[key].values[0] instanceof Date
            ? expandDates(properties[key].values[0] as Date)
            : properties[key].values[0]
          : properties[key].values
              .map((value) => (value || "").toString())
              .join(", ");
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
    if (string.indexOf("{{") < 0) return string;

    const data = await getProfileData(profile);
    console.log(JSON.stringify(profile));
    return MustacheUtils.strictlyRender(string, data);
  }

  /**
   * Takes a string with mustache variable (keys) and replaces them with the profile property ids
   * ie: `select * where id = {{ userId }}` => `select * where id = {{ ppr_abc123 }}`
   */
  export async function replaceTemplateProfilePropertyKeysWithProfilePropertyId(
    string: string
  ): Promise<string> {
    if (string.indexOf("{{") < 0) return string;

    const properties = (await Property.findAllWithCache()).filter(
      (p) => p.isArray === false
    );

    const data = {};
    properties.forEach((rule) => {
      data[rule.key] = `{{ ${rule.id} }}`;
    });

    return MustacheUtils.strictlyRender(string, data);
  }

  /**
   * Takes a string with mustache variable (ids) and replaces them with the profile property keys
   * ie: `select * where id = {{ ppr_abc123 }}` => `select * where id = {{ userId }}`
   */
  export async function replaceTemplateProfilePropertyIdsWithProfilePropertyKeys(
    string: string
  ): Promise<string> {
    if (string.indexOf("{{") < 0) return string;

    const properties = await Property.findAllWithCache();

    const data = {};
    properties.forEach((rule) => {
      data[rule.id] = `{{ ${rule.key} }}`;
    });

    return MustacheUtils.strictlyRender(string, data);
  }

  export function setApmWrap(f: APMWrap) {
    api.apm.wrap = f;
  }
}
