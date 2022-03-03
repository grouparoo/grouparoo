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
import { Schedule } from "./../models/Schedule";
import { Property } from "../models/Property";
import { App } from "./../models/App";
import { LockableHelper } from "./lockableHelper";
import { plural } from "pluralize";
import { modelName } from "./modelName";
import { SourcesCache } from "../modules/caches/sourcesCache";

export const ObfuscatedOptionString = "__ObfuscatedOption";

type ModelWithOptions = Source | Destination | Schedule | Property | App;

export namespace OptionHelper {
  export interface SimpleOptions {
    [key: string]: string | number | boolean;
  }

  export async function getOptions(
    instance: ModelWithOptions,
    sourceFromEnvironment = true,
    obfuscateSensitive = false
  ) {
    if (sourceFromEnvironment === null || sourceFromEnvironment === undefined) {
      sourceFromEnvironment = true;
    }

    const options =
      instance.__options ??
      (await Option.findAll({
        where: {
          ownerId: instance.id,
          ownerType: modelName<ModelWithOptions>(instance),
        },
      }));

    if (!instance.__options) instance.__options = options;

    const optionsToObfuscate = await getOptionsToObfuscate(
      instance,
      obfuscateSensitive
    );

    let optionsObject = await getDefaultOptionValues(instance);
    options.forEach((option) => {
      if (optionsToObfuscate.includes(option.key)) {
        optionsObject[option.key] = ObfuscatedOptionString;
      } else {
        optionsObject[option.key] = option.typedValue();
      }
    });

    if (sourceFromEnvironment) {
      optionsObject = sourceEnvironmentVariableOptions(instance, optionsObject);
    }

    return optionsObject;
  }

  async function prepareOptions(
    instance: ModelWithOptions,
    options: SimpleOptions,
    sourceFromEnvironment = false
  ) {
    const filteredOptions = filterEmptyOptions(options);
    const sanitizedOptions = await replaceObfuscatedOptions(
      instance,
      filteredOptions,
      false
    );

    if (sourceFromEnvironment) {
      return sourceEnvironmentVariableOptions(instance, {
        ...sanitizedOptions,
      });
    }

    return sanitizedOptions;
  }

  export async function setOptions(
    instance: (Source | Destination | Schedule | Property | App) & {
      afterSetOptions?: Function;
    },
    options: SimpleOptions,
    externallyValidate = true
  ) {
    delete instance.__options;

    const sanitizedOptions = await prepareOptions(instance, options, false);

    if (typeof instance["validateOptions"] === "function")
      await instance.validateOptions(sanitizedOptions, externallyValidate);

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
      where: {
        ownerId: instance.id,
        ownerType: modelName<ModelWithOptions>(instance),
      },
    });

    const newOptions: Option[] = [];
    for (const [key, value] of Object.entries(sanitizedOptions)) {
      const option = await Option.create({
        ownerId: instance.id,
        ownerType: modelName<ModelWithOptions>(instance),
        key,
        value: String(value),
        type: typeof value as "string" | "number" | "boolean",
      });
      newOptions.push(option);
    }

    instance.__options = newOptions;
    await instance.touch();

    // if there's an afterSetOptions hook and we want to commit our changes
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
    const match: {
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

  export type OptionsSpec = {
    key: string;
    required: boolean;
    options?: string[];
  }[];

  export async function validateOptions(
    instance: ModelWithOptions & {
      name?: string;
      key?: string;
    },
    options: SimpleOptions,
    optionsSpec: OptionsSpec,
    allowEmpty = false
  ) {
    options = await prepareOptions(instance, options, true);
    const type = await getInstanceType(instance);

    if (allowEmpty && Object.keys(options).length === 0) {
      return;
    }

    const allOptions = optionsSpec.map((o) => o.key);
    const requiredOptions = optionsSpec
      .filter((o) => o.required)
      .map((o) => o.key);
    const optionOptions: Record<string, string[]> = optionsSpec
      .filter((o) => o.options)
      .reduce(
        (optionOptions, opt) => ({
          ...optionOptions,
          [opt.key]: opt.options,
        }),
        {}
      );

    requiredOptions.forEach((requiredOption) => {
      if (!options[requiredOption]) {
        throw new Error(
          `${requiredOption} is required for a ${modelName<ModelWithOptions>(
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
          `${k} is not an option for a ${type} ${modelName<ModelWithOptions>(
            instance
          )} (${instance["name"] || instance["key"]}, ${instance.id})`
        );
      }

      const val = options[k].toString();
      const opts = optionOptions[k];
      if (opts && opts.length > 0 && !opts.includes(val)) {
        throw new Error(
          `"${val}" is not a valid value for ${type} ${modelName<ModelWithOptions>(
            instance
          )} option "${k}"`
        );
      }
    }
  }

  async function getInstanceType(
    instance: ModelWithOptions & {
      type?: string;
      sourceId?: string;
    }
  ) {
    let type = instance["type"];

    if (!type || instance instanceof Property) {
      if (instance["sourceId"]) {
        const source = await SourcesCache.findOneWithCache(
          instance["sourceId"]
        );
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
    instance: ModelWithOptions,
    options: SimpleOptions
  ) {
    const envOptionKeys = getEnvironmentVariableOptionsForTopic(
      modelName<ModelWithOptions>(instance)
    );

    for (const k in options) {
      if (envOptionKeys.includes(options[k].toString()))
        options[k] = getEnvironmentVariableOption(
          modelName<ModelWithOptions>(instance),
          options[k].toString()
        );
    }

    return options;
  }

  async function getDefaultOptionValues(instance: ModelWithOptions) {
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
    const opts = { ...options };

    Object.keys(opts).forEach((k) => {
      if (typeof opts[k] === "undefined" || opts[k] === null || opts[k] === "")
        delete opts[k];
    });

    return opts;
  }

  export async function getOptionsToObfuscate(
    instance: ModelWithOptions,
    obfuscateSensitive = false
  ) {
    const optionsToObfuscate: string[] = [];
    const obfuscatedOptionTypes = ["password", "oauth-token"];

    // TODO: only for Apps for now
    if (instance instanceof App) {
      const plugin = await instance.getPlugin();
      const staticAppOptions = plugin.pluginApp.options;

      staticAppOptions.forEach((option) => {
        if (obfuscatedOptionTypes.includes(option.type) && obfuscateSensitive) {
          optionsToObfuscate.push(option.key);
        }
      });

      const appOptions = await instance.appOptions();
      const appOptionKeys = Object.keys(appOptions);

      appOptionKeys.forEach((k) => {
        if (
          obfuscatedOptionTypes.includes(appOptions[k].type) &&
          obfuscateSensitive
        ) {
          optionsToObfuscate.push(k);
        }
      });
    }

    return optionsToObfuscate;
  }

  export async function replaceObfuscatedOptions(
    instance: ModelWithOptions,
    options?: SimpleOptions,
    sourceFromEnvironment = true
  ) {
    let sanitizedOptions: SimpleOptions = { ...options };

    const optionsFromDatabase = await getOptions(
      instance,
      sourceFromEnvironment,
      false
    );
    if (Object.keys(sanitizedOptions).length === 0) {
      sanitizedOptions = optionsFromDatabase;
    }

    for (const key of Object.keys(sanitizedOptions)) {
      if (sanitizedOptions[key] === ObfuscatedOptionString) {
        sanitizedOptions[key] = optionsFromDatabase[key];
      }
    }

    return sanitizedOptions;
  }
}
