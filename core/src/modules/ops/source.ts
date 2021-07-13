import { Source, SimpleSourceOptions } from "../../models/Source";
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
        preloadedArgs.profileProperties || (await profile.properties());
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

      return response;
    } catch (error) {
      throw error;
    } finally {
      await app.checkAndUpdateParallelism("decr");
    }
  }

  /**
   * Import all profile properties from a Source for a Profile
   */
  export async function _import(source: Source, profile: Profile) {
    const hash = {};
    const rules = await source.$get("properties", {
      where: { state: "ready" },
    });

    const profileProperties = await profile.properties();
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

    await Promise.all(
      rules.map((rule) =>
        source
          .importProfileProperty(profile, rule, null, null, preloadedArgs)
          .then((response) => (hash[rule.id] = response))
      )
    );

    // remove null and undefined as we cannot set that value
    const hashKeys = Object.keys(hash);
    for (const i in hashKeys) {
      const id = hashKeys[i];
      if (hash[id] === null || hash[id] === undefined) {
        delete hash[id];
      }
    }

    return hash;
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
    // if there isn't one already, make this one identifying
    const identifying = existingIdentifying ? false : true;

    const property = Property.build({
      id,
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
        let ruleOptions = {};

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
