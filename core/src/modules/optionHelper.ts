import { api } from "actionhero";
import {
  GrouparooPlugin,
  PluginConnection,
  PluginApp,
  AppOptionsOption,
} from "../classes/plugin";
import { Option } from "./../models/Option";
import { Source } from "./../models/Source";
import { Destination } from "./../models/Destination";
import { Schedule, SimpleScheduleOptions } from "./../models/Schedule";
import { Property, SimplePropertyOptions } from "../models/Property";
import { App } from "./../models/App";
import { LoggedModel } from "../classes/loggedModel";
import { LockableHelper } from "./lockableHelper";
import { plural } from "pluralize";
import { modelName } from "./modelName";

export const ObfuscatedPasswordString = "__ObfuscatedPassword";

export namespace OptionHelper {
  export interface SimpleOptions {
    [key: string]: string | number | boolean;
  }

  export async function getOptions(
    instance: Source | Destination | Schedule | Property | App,
    sourceFromEnvironment = true,
    obfuscatePasswords = false
  ) {
    if (sourceFromEnvironment === null || sourceFromEnvironment === undefined) {
      sourceFromEnvironment = true;
    }

    const options =
      instance.__options ??
      (await Option.findAll({
        where: { ownerId: instance.id, ownerType: modelName(instance) },
      }));

    if (!instance.__options) instance.__options = options;

    const optionsToObfuscate = await getOptionsToObfuscate(
      instance,
      obfuscatePasswords
    );

    let optionsObject = await getDefaultOptionValues(instance);
    options.forEach((option) => {
      if (optionsToObfuscate.includes(option.key)) {
        optionsObject[option.key] = ObfuscatedPasswordString;
      } else {
        optionsObject[option.key] = option.typedValue();
      }
    });

    if (sourceFromEnvironment) {
      optionsObject = sourceEnvironmentVariableOptions(instance, optionsObject);
    }

    return optionsObject;
  }

  export async function setOptions(
    instance: (Source | Destination | Schedule | Property | App) & {
      afterSetOptions?: Function;
    },
    options: SimpleOptions
  ) {
    delete instance.__options;

    const filteredOptions = filterEmptyOptions(options);
    const sanitizedOptions = await replaceObfuscatedPasswords(
      instance,
      filteredOptions,
      false
    );

    await validateOptions(instance, sanitizedOptions, null);
    const oldOptionsWithoutEnv = await getOptions(instance, false);
    const oldOptionsWithEnv = await getOptions(instance, true);

    // If we had previously used an ENV string, and the value was returned, assume we meant to use the ENV
    // This is helpful for some UI options types (list) which really render the value
    for (const key in sanitizedOptions) {
      if (
        oldOptionsWithoutEnv[key] !== undefined &&
        oldOptionsWithoutEnv[key] !== oldOptionsWithEnv[key] &&
        sanitizedOptions[key] === oldOptionsWithEnv[key]
      ) {
        sanitizedOptions[key] = oldOptionsWithoutEnv[key];
      }
    }

    let hasChanges = false;

    for (const key in oldOptionsWithoutEnv) {
      if (oldOptionsWithoutEnv[key] !== sanitizedOptions[key]) {
        hasChanges = true;
      }
    }
    for (const key in sanitizedOptions) {
      if (oldOptionsWithoutEnv[key] !== sanitizedOptions[key]) {
        hasChanges = true;
      }
    }

    if (!hasChanges) return;
    await LockableHelper.beforeUpdateOptions(instance, hasChanges);

    await Option.destroy({
      where: { ownerId: instance.id, ownerType: modelName(instance) },
    });

    const newOptions: Option[] = [];
    const keys = Object.keys(sanitizedOptions);
    for (const i in keys) {
      const key = keys[i];
      const option = await Option.create({
        ownerId: instance.id,
        ownerType: modelName(instance),
        key,
        value: sanitizedOptions[key],
        type: typeof sanitizedOptions[key],
      });
      newOptions.push(option);
    }

    instance.__options = newOptions;
    await instance.touch();
    await LoggedModel.logUpdate(instance);

    // if there's an afterSetMapping hook and we want to commit our changes
    if (typeof instance["afterSetOptions"] === "function") {
      await instance["afterSetOptions"](hasChanges);
    }
  }

  export async function getPlugin(
    instance: Source | Destination | Schedule | Property | App
  ) {
    const type = await getInstanceType(instance);
    return getPluginByType(type);
  }

  export function getPluginByType(type: string) {
    const foundApps: string[] = [];
    const foundConnections: string[] = [];
    let match: {
      plugin: GrouparooPlugin;
      pluginConnection: PluginConnection;
      pluginApp: PluginApp;
    } = { plugin: null, pluginConnection: null, pluginApp: null };

    api.plugins.plugins.forEach((plugin: GrouparooPlugin) => {
      if (plugin.apps) {
        plugin.apps.forEach((pluginApp) => {
          foundApps.push(pluginApp.name);
          if (pluginApp.name === type) {
            match.plugin = plugin;
            match.pluginApp = pluginApp;
          }
        });
      }

      if (plugin.connections) {
        plugin.connections.forEach((pluginConnection) => {
          foundConnections.push(pluginConnection.name);
          if (pluginConnection.name === type) {
            match.plugin = plugin;
            match.pluginConnection = pluginConnection;
          }
        });
      }
    });

    if (!match.plugin) {
      const missingType =
        type.includes("-") || type.includes(":") ? "connection" : "app";
      const collection = missingType === "app" ? foundApps : foundConnections;
      throw new Error(
        `Cannot find a "${type}" ${missingType} available within the installed plugins. Current ${plural(
          missingType
        )} installed are: ${[...collection]
          .sort()
          .join(
            ", "
          )}. Use \`grouparoo install\` to add new plugins if necessary.`
      );
    }

    return match;
  }

  export async function validateOptions(
    instance: (Source | Destination | Schedule | Property | App) & {
      name?: string;
      key?: string;
    },
    options: SimpleOptions,
    allowEmpty = false
  ) {
    let requiredOptions: string[];
    let allOptions: string[];

    if (allowEmpty && Object.keys(options).length === 0) {
      return;
    }

    const type = await getInstanceType(instance);

    if (instance instanceof Source) {
      requiredOptions = await getRequiredConnectionOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.options.map((o) => o.key);
    } else if (instance instanceof Destination) {
      requiredOptions = await getRequiredConnectionOptions(instance);
      const { pluginConnection } = await getPlugin(instance);
      allOptions = pluginConnection.options.map((o) => o.key);
    } else if (instance instanceof Schedule) {
      const scheduleOptions = await getScheduleOptions(instance, options);
      allOptions = scheduleOptions.map((o) => o.key);
      requiredOptions = scheduleOptions
        .filter((o) => o.required)
        .map((o) => o.key);
    } else if (instance instanceof Property) {
      const propertyOptions = await getPropertyOptions(instance, options);
      allOptions = propertyOptions.map((o) => o.key);
      requiredOptions = propertyOptions
        .filter((o) => o.required)
        .map((o) => o.key);
    } else if (instance instanceof App) {
      requiredOptions = await getRequiredAppOptions(instance);
      const { pluginApp } = await getPlugin(instance);
      allOptions = pluginApp.options.map((o) => o.key);
    } else {
      throw new Error(`cannot get required options`);
    }

    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption]) {
        throw new Error(
          `${requiredOption} is required for a ${modelName(
            instance
          )} of type ${type} (${instance["name"] || instance["key"]}, ${
            instance.id
          })`
        );
      }
    });

    for (const k in options) {
      if (allOptions.indexOf(k) < 0) {
        throw new Error(
          `${k} is not an option for a ${type} ${modelName(instance)} (${
            instance["name"] || instance["key"]
          }, ${instance.id})`
        );
      }
    }
  }

  export async function getRequiredConnectionOptions(
    instance: Source | Destination
  ) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    return pluginConnection.options.filter((o) => o.required).map((o) => o.key);
  }

  export async function getScheduleOptions(
    instance: Schedule,
    scheduleOptions: SimpleScheduleOptions
  ) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    if (!pluginConnection.methods.scheduleOptions) return [];

    const scheduleOptionOptions =
      await pluginConnection.methods.scheduleOptions({
        schedule: instance,
        scheduleId: instance.id,
        scheduleOptions,
      });

    return scheduleOptionOptions;
  }

  export async function getPropertyOptions(
    instance: Property,
    propertyOptions: SimplePropertyOptions
  ) {
    const { pluginConnection } = await getPlugin(instance);
    const type = await getInstanceType(instance);
    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${type}`);
    }

    if (!pluginConnection.methods.propertyOptions) return [];

    const propertyOptionOptions =
      await pluginConnection.methods.propertyOptions({
        property: instance,
        propertyId: instance.id,
        propertyOptions,
      });

    return propertyOptionOptions;
  }

  export async function getRequiredAppOptions(instance: App) {
    const { pluginApp } = await getPlugin(instance);
    const type = await getInstanceType(instance);

    if (!pluginApp) throw new Error(`cannot find a pluginApp for type ${type}`);

    return pluginApp.options.filter((o) => o.required).map((o) => o.key);
  }

  async function getInstanceType(
    instance: (Source | Destination | Schedule | Property | App) & {
      type?: string;
      sourceId?: string;
    }
  ) {
    let type = instance["type"];

    if (!type || instance instanceof Property) {
      if (instance["sourceId"]) {
        const source = await Source.scope(null).findOne({
          where: { id: instance["sourceId"] },
        });
        if (source) type = source.type;
      }
    }

    return type;
  }

  /**
   * Return the list of possible environment variable options for this type,
   * GROUPAROO_OPTION__APP__production-hubspot-api-key=abc123 returns production-hubspot-api-key
   */
  export function getEnvironmentVariableOptionsForTopic(topic: string) {
    const regexp = new RegExp(
      `^GROUPAROO_OPTION__${topic.toUpperCase()}__(.*)`
    );
    return Object.keys(process.env)
      .filter((k) => k.match(regexp))
      .map((k) => k.match(regexp)[1]);
  }

  /**
   * Load the value of an environment variable option from the environment
   */
  export function getEnvironmentVariableOption(type: string, key: string) {
    const fullKey = `GROUPAROO_OPTION__${type.toUpperCase()}__${key}`;
    const value = process.env[fullKey];
    if (!value)
      throw new Error(
        `cannot find environment variable for type=${type} and key=${key} (full key "${fullKey}")`
      );

    return value;
  }

  /**
   * Replace all values in a bundle of SimpleOptions with those values loaded from the ENV
   */
  export function sourceEnvironmentVariableOptions(
    instance: Source | Destination | Schedule | Property | App,
    options: SimpleOptions
  ) {
    const envOptionKeys = getEnvironmentVariableOptionsForTopic(
      modelName(instance)
    );

    for (const k in options) {
      if (envOptionKeys.includes(options[k].toString()))
        options[k] = getEnvironmentVariableOption(
          modelName(instance),
          options[k].toString()
        );
    }

    return options;
  }

  async function getDefaultOptionValues(
    instance: Source | Destination | Schedule | Property | App
  ) {
    const plugin = await getPlugin(instance);

    let options: AppOptionsOption[] = [];
    if (instance instanceof App && plugin.pluginApp) {
      options = plugin.pluginApp.options;
    } else if (
      (instance instanceof Source || instance instanceof Destination) &&
      plugin.pluginConnection
    ) {
      options = plugin.pluginConnection.options;
    }

    const defaultOptions: SimpleOptions = {};
    for (const opt of options) {
      if (opt.defaultValue !== undefined) {
        defaultOptions[opt.key] = opt.defaultValue;
      }
    }

    return defaultOptions;
  }

  export function filterEmptyOptions(options: SimpleOptions) {
    const opts = Object.assign({}, options);

    Object.keys(opts).forEach((k) => {
      if (opts[k] === "") delete opts[k];
    });

    return opts;
  }

  export async function getOptionsToObfuscate(
    instance: Source | Destination | Schedule | Property | App,
    obfuscatePasswords = false
  ) {
    const optionsToObfuscate: string[] = [];

    // TODO: only for Apps for now
    if (instance instanceof App) {
      const plugin = await instance.getPlugin();
      const staticAppOptions = plugin.pluginApp.options;

      staticAppOptions.forEach((option) => {
        if (option.type === "password" && obfuscatePasswords) {
          optionsToObfuscate.push(option.key);
        }
      });

      const appOptions = await instance.appOptions();
      const appOptionKeys = Object.keys(appOptions);

      appOptionKeys.forEach((k) => {
        if (appOptions[k].type === "password" && obfuscatePasswords) {
          optionsToObfuscate.push(k);
        }
      });
    }

    return optionsToObfuscate;
  }

  export async function replaceObfuscatedPasswords(
    instance: Source | Destination | Schedule | Property | App,
    options?: SimpleOptions,
    sourceFromEnvironment = true
  ) {
    let sanitizedOptions: SimpleOptions = Object.assign({}, options);

    const optionsFromDatabase = await getOptions(
      instance,
      sourceFromEnvironment,
      false
    );
    if (Object.keys(sanitizedOptions).length === 0) {
      sanitizedOptions = optionsFromDatabase;
    }

    for (const key of Object.keys(sanitizedOptions)) {
      if (sanitizedOptions[key] === ObfuscatedPasswordString) {
        sanitizedOptions[key] = optionsFromDatabase[key];
      }
    }

    return sanitizedOptions;
  }
}
