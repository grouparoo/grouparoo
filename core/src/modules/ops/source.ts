import { Source, SimpleSourceOptions } from "../../models/Source";
import { Property, PropertyFiltersWithKey } from "../../models/Property";
import { Profile } from "../../models/Profile";
import { App } from "../../models/App";
import { OptionHelper } from "../optionHelper";
import { MappingHelper } from "../mappingHelper";
import { log, utils } from "actionhero";
import { LoggedModel } from "../../classes/loggedModel";
import { Transaction } from "sequelize";

export namespace SourceOps {
  /**
   * Get the connection options for this source from the plugin
   */
  export async function sourceConnectionOptions(
    source: Source,
    sourceOptions: SimpleSourceOptions = {},
    transaction?: Transaction
  ) {
    const { pluginConnection } = await source.getPlugin(transaction);
    const app = await source.$get("app", { transaction });
    const connection = await app.getConnection(transaction);
    const appOptions = await app.getOptions(true, transaction);

    if (!pluginConnection.methods.sourceOptions) return {};

    return pluginConnection.methods.sourceOptions({
      connection,
      app,
      appGuid: app.guid,
      appOptions,
      sourceOptions,
    });
  }

  /**
   * Load a preview of the data from this Source
   */
  export async function sourcePreview(
    source: Source,
    sourceOptions?: SimpleSourceOptions,
    transaction?: Transaction
  ) {
    if (!sourceOptions)
      sourceOptions = await source.getOptions(true, transaction);

    try {
      // if the options aren't set yet, return an empty array of rows
      await source.validateOptions(sourceOptions, transaction);
    } catch {
      return [];
    }

    const { pluginConnection } = await source.getPlugin(transaction);
    const app = await source.$get("app", { transaction });
    const connection = await app.getConnection(transaction);
    const appOptions = await app.getOptions(true, transaction);

    if (!pluginConnection.methods.sourcePreview) {
      throw new Error(`cannot return a source preview for ${source.type}`);
    }
    return pluginConnection.methods.sourcePreview({
      connection,
      app,
      appGuid: app.guid,
      appOptions,
      source,
      sourceGuid: source.guid,
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
    if (property.state !== "ready" && !propertyOptionsOverride) {
      return;
    }

    await property.validateOptions(propertyOptionsOverride, false, true);

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.guid})`
      );
    }

    const method = pluginConnection.methods.profileProperty;
    if (!method) return;

    const app = preloadedArgs.app || (await source.$get("app"));
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
        appGuid: app.guid,
        appOptions,
        source,
        sourceGuid: source.guid,
        sourceOptions,
        sourceMapping,
        property,
        propertyGuid: property.guid,
        propertyOptions: propertyOptionsOverride
          ? propertyOptionsOverride
          : await property.getOptions(),
        propertyFilters: propertyFiltersOverride
          ? propertyFiltersOverride
          : await property.getFilters(),
        profile,
        profileGuid: profile.guid,
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
    if (property.state !== "ready" && !propertyOptionsOverride) {
      return;
    }

    await property.validateOptions(propertyOptionsOverride, false, true);

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.guid})`
      );
    }

    const method = pluginConnection.methods.profileProperties;
    if (!method) return;

    const app = preloadedArgs.app || (await source.$get("app"));
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

    try {
      const response = await method({
        connection,
        app,
        appGuid: app.guid,
        appOptions,
        source,
        sourceGuid: source.guid,
        sourceOptions,
        sourceMapping,
        property,
        propertyGuid: property.guid,
        propertyOptions: propertyOptionsOverride
          ? propertyOptionsOverride
          : await property.getOptions(),
        propertyFilters: propertyFiltersOverride
          ? propertyFiltersOverride
          : await property.getFilters(),
        profiles,
        profileGuids: profiles.map((p) => p.guid),
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
    const app = await source.$get("app");
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
          .then((response) => (hash[rule.guid] = response))
      )
    );

    // remove null and undefined as we cannot set that value
    const hashKeys = Object.keys(hash);
    for (const i in hashKeys) {
      const guid = hashKeys[i];
      if (hash[guid] === null || hash[guid] === undefined) {
        delete hash[guid];
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
    guid?: string,
    transaction?: Transaction
  ) {
    const property = Property.build({
      guid,
      key,
      type,
      state: "ready",
      unique: true,
      sourceGuid: source.guid,
      isArray: false,
      identifying: true,
    });

    try {
      // manually run the hooks we want
      Property.generateGuid(property);
      await Property.ensureUniqueKey(property, { transaction });
      await Property.ensureNonArrayAndUnique(property);
      await Property.ensureOneIdentifyingProperty(property, { transaction });

      // danger zone!
      await LoggedModel.logCreate(property, { transaction });
      // @ts-ignore
      await property.save({ hooks: false, transaction });

      // build the default options
      const { pluginConnection } = await source.getPlugin();
      if (
        typeof pluginConnection.methods.uniquePropertyBootstrapOptions ===
        "function"
      ) {
        const app = await source.$get("app", { transaction });
        const connection = await app.getConnection(transaction);
        const appOptions = await app.getOptions(true, transaction);
        const options = await source.getOptions(true, transaction);
        const ruleOptions = await pluginConnection.methods.uniquePropertyBootstrapOptions(
          {
            app,
            appGuid: app.guid,
            connection,
            appOptions,
            source,
            sourceGuid: source.guid,
            sourceOptions: options,
            mappedColumn,
          }
        );

        await property.setOptions(ruleOptions, false, transaction);
      }

      return property;
    } catch (error) {
      if (property) {
        await property.destroy();
        throw error;
      }
    }
  }
}
