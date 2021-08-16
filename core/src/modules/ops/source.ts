import {
  Source,
  SimpleSourceOptions,
  SourceMapping,
} from "../../models/Source";
import { ProfileProperty } from "../../models/ProfileProperty";
import {
  Property,
  PropertyFiltersWithKey,
  SimplePropertyOptions,
} from "../../models/Property";
import { Profile } from "../../models/Profile";
import { App } from "../../models/App";
import { Option } from "../../models/Option";
import { OptionHelper } from "../optionHelper";
import { MappingHelper } from "../mappingHelper";
import { log, utils, api } from "actionhero";
import { LoggedModel } from "../../classes/loggedModel";
import { FilterHelper } from "../filterHelper";
import { topologicalSort } from "../topologicalSort";
import { ConfigWriter } from "../configWriter";
import { ProfilePropertiesPluginMethodResponse } from "../../classes/plugin";

export namespace SourceOps {
  /**
   * Get the connection options for this source from the plugin
   */
  export async function sourceConnectionOptions(
    source: Source,
    sourceOptions: SimpleSourceOptions = {}
  ) {
    const { pluginConnection } = await source.getPlugin();
    const app = await source.$get("app", { scope: null, include: [Option] });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);

    if (!pluginConnection.methods.sourceOptions) return {};

    return pluginConnection.methods.sourceOptions({
      connection,
      app,
      appId: app.id,
      appOptions,
      sourceOptions,
    });
  }

  /**
   * Load a preview of the data from this Source
   */
  export async function sourcePreview(
    source: Source,
    sourceOptions?: SimpleSourceOptions
  ) {
    if (!sourceOptions) sourceOptions = await source.getOptions(true);

    try {
      // if the options aren't set yet, return an empty array of rows
      await source.validateOptions(sourceOptions);
    } catch {
      return [];
    }

    const { pluginConnection } = await source.getPlugin();
    const app = await source.$get("app", { scope: null, include: [Option] });
    const connection = await app.getConnection();
    const appOptions = await app.getOptions(true);

    if (!pluginConnection.methods.sourcePreview) {
      throw new Error(`cannot return a source preview for ${source.type}`);
    }
    return pluginConnection.methods.sourcePreview({
      connection,
      app,
      appId: app.id,
      appOptions,
      source,
      sourceId: source.id,
      sourceOptions,
    });
  }

  /**
   * Import a profile property for a Profile from this source
   */
  export async function importProfileProperty(
    source: Source,
    profile: Profile,
    property: Property,
    propertyOptionsOverride?: OptionHelper.SimpleOptions,
    propertyFiltersOverride?: PropertyFiltersWithKey[],
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      profileProperties?: {};
    } = {}
  ) {
    if (property.state !== "ready" && !propertyOptionsOverride) return;

    if (propertyOptionsOverride) {
      await property.validateOptions(propertyOptionsOverride, false);
    }

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.id})`
      );
    }

    const method = pluginConnection.methods.profileProperty;
    if (!method) return;

    const app =
      preloadedArgs.app ||
      (await source.$get("app", { scope: null, include: [Option] }));
    const connection = preloadedArgs.connection || (await app.getConnection());
    const appOptions = preloadedArgs.appOptions || (await app.getOptions());
    const sourceOptions =
      preloadedArgs.sourceOptions || (await source.getOptions());
    const sourceMapping =
      preloadedArgs.sourceMapping || (await source.getMapping());

    // we may not have the profile property needed to make the mapping (ie: userId is not set on this anonymous profile)
    if (Object.values(sourceMapping).length > 0) {
      const propertyMappingKey = Object.values(sourceMapping)[0];
      const profileProperties =
        preloadedArgs.profileProperties || (await profile.getProperties());
      if (!profileProperties[propertyMappingKey]) {
        return;
      }
    }

    while ((await app.checkAndUpdateParallelism("incr")) === false) {
      log(`parallelism limit reached for ${app.type}, sleeping...`);
      utils.sleep(100);
    }

    try {
      const response = await method({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        property,
        propertyId: property.id,
        propertyOptions: propertyOptionsOverride
          ? propertyOptionsOverride
          : await property.getOptions(),
        propertyFilters: propertyFiltersOverride
          ? propertyFiltersOverride
          : await property.getFilters(),
        profile,
        profileId: profile.id,
      });

      return response;
    } catch (error) {
      throw error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }
  }

  /**
   * Import a profile property for a Profile from this source
   */
  export async function importProfileProperties(
    source: Source,
    profiles: Profile[],
    properties: Property[],
    propertyOptionsOverride?: { [key: string]: SimplePropertyOptions },
    propertyFiltersOverride?: { [key: string]: PropertyFiltersWithKey[] },
    preloadedArgs: {
      app?: App;
      connection?: any;
      appOptions?: OptionHelper.SimpleOptions;
      sourceOptions?: OptionHelper.SimpleOptions;
      sourceMapping?: MappingHelper.Mappings;
      profileProperties?: {};
    } = {}
  ) {
    if (
      properties.find((p) => p.state !== "ready") &&
      !propertyOptionsOverride
    ) {
      return;
    }

    for (const key in propertyOptionsOverride) {
      const property = properties.find((p) => (p.id = key));
      await property.validateOptions(propertyOptionsOverride[key], false);
    }

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.id})`
      );
    }

    const method = pluginConnection.methods.profileProperties;
    if (!method) return;

    const app =
      preloadedArgs.app || (await source.$get("app", { include: [Option] }));
    const connection = preloadedArgs.connection || (await app.getConnection());
    const appOptions = preloadedArgs.appOptions || (await app.getOptions());
    const sourceOptions =
      preloadedArgs.sourceOptions || (await source.getOptions());
    const sourceMapping =
      preloadedArgs.sourceMapping || (await source.getMapping());

    while ((await app.checkAndUpdateParallelism("incr")) === false) {
      log(`parallelism limit reached for ${app.type}, sleeping...`);
      utils.sleep(100);
    }

    const propertyOptions: { [key: string]: SimplePropertyOptions } = {};
    const propertyFilters: { [key: string]: FilterHelper.FiltersWithKey[] } =
      {};
    for (const property of properties) {
      if (propertyOptionsOverride && propertyOptionsOverride[property.id]) {
        propertyOptions[property.id] = propertyOptionsOverride[property.id];
      } else {
        propertyOptions[property.id] = await property.getOptions();
      }

      if (propertyFiltersOverride && propertyFiltersOverride[property.id]) {
        propertyFilters[property.id] = propertyFiltersOverride[property.id];
      } else {
        propertyFilters[property.id] = await property.getFilters();
      }
    }

    try {
      const response = await method({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        properties,
        propertyIds: properties.map((p) => p.id),
        propertyOptions,
        propertyFilters,
        profiles,
        profileIds: profiles.map((p) => p.id),
      });

      await applyNonUniqueMappedResultsToAllProfiles(response, {
        profiles,
        properties,
        sourceMapping,
      });

      return response;
    } catch (error) {
      throw error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }
  }

  // for non-unique mappings, we need to fan out the values we received back from the source
  export async function applyNonUniqueMappedResultsToAllProfiles(
    response: ProfilePropertiesPluginMethodResponse,
    {
      profiles,
      properties,
      sourceMapping,
    }: {
      profiles: Profile[];
      properties: Property[];
      sourceMapping: SourceMapping;
    }
  ) {
    const mappedPropertyKey = Object.values(sourceMapping)[0];
    const mappedProperty = await Property.findOne({
      where: { key: mappedPropertyKey },
    });

    if (!mappedProperty) return;
    if (mappedProperty.unique) return;

    const valueMap: { [mappedPropertyId: string]: { [match: string]: any } } =
      {};

    // load up the values
    for (const profileId of Object.keys(response)) {
      const profile = profiles.find((p) => p.id === profileId);
      const profileProperties = await profile.getProperties();
      for (const property of properties) {
        if (!valueMap[property.id]) valueMap[property.id] = {};
        if (profileProperties[mappedProperty.key].state !== "ready") {
          throw new Error(
            `ProfileProperty ${mappedProperty.key} for profile ${profile.id} is not ready`
          );
        }

        valueMap[property.id][
          profileProperties[mappedProperty.key].values[0].toString()
        ] = response[profile.id][property.id];
      }
    }

    // apply the values
    for (const profile of profiles) {
      if (!response[profile.id]) {
        response[profile.id] = {};
        const profileProperties = await profile.getProperties();
        for (const propertyKey of Object.keys(valueMap)) {
          const lookupValue =
            profileProperties[mappedProperty.key]?.values[0]?.toString();
          response[profile.id][propertyKey] =
            lookupValue && valueMap[propertyKey][lookupValue] !== undefined
              ? valueMap[propertyKey][lookupValue]
              : [null];
        }
      }
    }
  }

  /**
   * Import all profile properties from a Source for a Profile
   */
  export async function _import(source: Source, profile: Profile) {
    const hash = {};
    const properties = await source.$get("properties", {
      where: { state: "ready" },
    });

    const profileProperties = await profile.getProperties();
    const app = await source.$get("app", { scope: null, include: [Option] });
    const appOptions = await app.getOptions();
    const connection = await app.getConnection();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    const preloadedArgs = {
      app,
      connection,
      appOptions,
      sourceOptions,
      sourceMapping,
      profileProperties,
    };

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.id})`
      );
    }

    const canImport = pluginConnection.methods.profileProperty;
    if (!canImport) {
      return {
        canImport: false,
        properties: {},
      };
    }

    for (const property of properties) {
      hash[property.id] = await source.importProfileProperty(
        profile,
        property,
        null,
        null,
        preloadedArgs
      );
    }

    // remove null and undefined as we cannot set that value
    const hashKeys = Object.keys(hash);
    for (const i in hashKeys) {
      const id = hashKeys[i];
      if (hash[id] === null || hash[id] === undefined) {
        delete hash[id];
      }
    }

    return {
      canImport: true,
      properties: hash,
    };
  }

  /**
   * Sorts an array of Sources by their dependencies.
   * Be sure to eager-load Mappings and Properties
   */
  export function sortByDependencies(sources: Source[]) {
    const sortedSources: Source[] = [];

    const graph: { [id: string]: string[] } = {};
    for (const source of sources) {
      const provides = source.properties.map((p) => p.id);
      const dependsOn = source.mappings.map((p) => p.propertyId);
      for (const p of provides) {
        graph[p] = dependsOn.filter((id) => id !== p);
      }
    }

    const sortedPropertyIds = topologicalSort(graph);
    for (const propertyId of sortedPropertyIds) {
      const source = sources.find((s) =>
        s.properties.map((p) => p.id).includes(propertyId)
      );
      if (!sortedSources.map((s) => s.id).includes(source.id)) {
        sortedSources.push(source);
      }
    }

    return sortedSources;
  }

  /**
   * Get the default values of the options of a Property from this source
   */
  export async function defaultPropertyOptions(source: Source) {
    const { pluginConnection } = await source.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }

    if (!pluginConnection.methods.propertyOptions) {
      throw new Error(`cannot find propertyOptions for type ${source.type}`);
    }

    const response: Array<{
      key: string;
      displayName?: string;
      default?: boolean;
      description: string;
      required: boolean;
      type: string;
      primary?: boolean;
      options: Array<{
        key: string;
        description?: string;
        default?: boolean;
        examples?: Array<any>;
      }>;
    }> = [];
    const app = await source.$get("app", { include: [Option], scope: null });
    const appOptions = await app.getOptions(true);
    const connection = await app.getConnection();
    const sourceOptions = await source.getOptions(true);
    const sourceMapping = await source.getMapping();

    const propertyOptionOptions =
      await pluginConnection.methods.propertyOptions({
        property: null,
        propertyId: null,
        propertyOptions: {},
      });

    for (const i in propertyOptionOptions) {
      const opt = propertyOptionOptions[i];
      const options = await opt.options({
        connection,
        app,
        appId: app.id,
        appOptions,
        source,
        sourceId: source.id,
        sourceOptions,
        sourceMapping,
        property: null,
        propertyId: null,
      });

      response.push({
        key: opt.key,
        displayName: opt.displayName,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        primary: opt.primary,
        options,
      });
    }

    return response;
  }

  /**
   * This method is used to bootstrap a new source which requires a Property for a mapping, when the rule doesn't yet exist.
   */
  export async function bootstrapUniqueProperty(
    source: Source,
    key: string,
    type: string,
    mappedColumn: string,
    id?: string,
    local = false,
    propertyOptions?: { [key: string]: any }
  ) {
    const existingIdentifying = await Property.findOne({
      where: { identifying: true },
    });
    const identifying = existingIdentifying ? false : true; // if there isn't one already, make this one identifying

    const property = Property.build({
      id: id ?? ConfigWriter.generateId(key),
      key,
      type,
      state: "ready",
      unique: true,
      sourceId: source.id,
      isArray: false,
      identifying,
    });

    try {
      // manually run the hooks we want
      Property.generateId(property);
      await Property.ensureUniqueKey(property);
      await Property.ensureNonArrayAndUnique(property);
      await Property.ensureOneIdentifyingProperty(property);

      // danger zone!
      await LoggedModel.logCreate(property);
      // @ts-ignore
      await property.save({ hooks: false });

      // build the default options
      const { pluginConnection } = await source.getPlugin();
      if (!local) {
        let ruleOptions: SimplePropertyOptions = {};

        if (
          typeof pluginConnection.methods.uniquePropertyBootstrapOptions ===
          "function"
        ) {
          const app = await source.$get("app", { include: [Option] });
          const connection = await app.getConnection();
          const appOptions = await app.getOptions(true);
          const options = await source.getOptions(true);
          const defaultOptions =
            await pluginConnection.methods.uniquePropertyBootstrapOptions({
              app,
              appId: app.id,
              connection,
              appOptions,
              source,
              sourceId: source.id,
              sourceOptions: options,
              mappedColumn,
            });

          ruleOptions = defaultOptions;
        }

        if (propertyOptions) {
          Object.assign(ruleOptions, propertyOptions);
        }

        await property.setOptions(ruleOptions, false);
      }

      return property;
    } catch (error) {
      if (property) {
        await property.destroy();
        throw error;
      }
    }
  }

  export async function pendingImportsBySource() {
    const countsBySource = await Property.findAll({
      attributes: [
        "sourceId",
        [
          api.sequelize.fn(
            "COUNT",
            api.sequelize.fn("DISTINCT", api.sequelize.col("profileId"))
          ),
          "count",
        ],
      ],
      group: ["sourceId"],
      include: [
        { model: ProfileProperty, attributes: [], where: { state: "pending" } },
      ],
      raw: true,
    });

    const counts: { [sourceId: string]: number } = {};
    countsBySource.forEach((record) => {
      counts[record.sourceId] = record["count"];
    });

    return { counts };
  }
}
