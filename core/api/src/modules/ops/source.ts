import { Source, SimpleSourceOptions } from "../../models/Source";
import {
  ProfilePropertyRule,
  ProfilePropertyRuleFiltersWithKey,
} from "../../models/ProfilePropertyRule";
import { Profile } from "../../models/Profile";
import { App } from "../../models/App";
import { OptionHelper } from "../optionHelper";
import { MappingHelper } from "../mappingHelper";
import { utils } from "actionhero";

export namespace SourceOps {
  /**
   * Get the connection options for this source from the plugin
   */
  export async function sourceConnectionOptions(
    source: Source,
    sourceOptions: SimpleSourceOptions = {}
  ) {
    const { pluginConnection } = await source.getPlugin();
    const app = await source.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.sourceOptions) {
      return {};
    }

    return pluginConnection.methods.sourceOptions({
      connection,
      app,
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
    if (!sourceOptions) {
      sourceOptions = await source.getOptions();
    }

    try {
      // if the options aren't set yet, return an empty array of rows
      await source.validateOptions(sourceOptions);
    } catch {
      return [];
    }

    const { pluginConnection } = await source.getPlugin();
    const app = await source.$get("app");
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();

    if (!pluginConnection.methods.sourcePreview) {
      throw new Error(`cannot return a source preview for ${source.type}`);
    }

    return pluginConnection.methods.sourcePreview({
      connection,
      app,
      appOptions,
      source,
      sourceOptions,
    });
  }

  /**
   * Import a profile property for a Profile from this source
   */
  export async function importProfileProperty(
    source: Source,
    profile: Profile,
    profilePropertyRule: ProfilePropertyRule,
    profilePropertyRuleOptionsOverride?: OptionHelper.SimpleOptions,
    profilePropertyRuleFiltersOverride?: ProfilePropertyRuleFiltersWithKey[],
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
      profilePropertyRule.state !== "ready" &&
      !profilePropertyRuleOptionsOverride
    ) {
      return;
    }

    await profilePropertyRule.validateOptions(
      profilePropertyRuleOptionsOverride,
      false,
      true
    );

    const { pluginConnection } = await source.getPlugin();
    if (!pluginConnection) {
      throw new Error(
        `cannot find connection for source ${source.type} (${source.guid})`
      );
    }

    const method = pluginConnection.methods.profileProperty;

    if (!method) {
      return;
    }

    const app = preloadedArgs.app || (await source.$get("app"));
    const connection = preloadedArgs.connection || (await app.getConnection());
    const appOptions = preloadedArgs.appOptions || (await app.getOptions());
    const sourceOptions =
      preloadedArgs.sourceOptions || (await source.getOptions());
    const sourceMapping =
      preloadedArgs.sourceMapping || (await source.getMapping());

    // we may not have the profile property needed to make the mapping (ie: userId is not set on this anonymous profile)
    if (Object.values(sourceMapping).length > 0) {
      const profilePropertyRuleMappingKey = Object.values(sourceMapping)[0];
      const profileProperties =
        preloadedArgs.profileProperties || (await profile.properties());
      if (!profileProperties[profilePropertyRuleMappingKey]) {
        return;
      }
    }

    while ((await app.checkAndUpdateParallelism("incr")) === false) {
      console.log(`parallelism limit reached for ${app.type}, sleeping...`);
      utils.sleep(100);
    }

    const response = await method({
      connection,
      app,
      appOptions,
      source,
      sourceOptions,
      sourceMapping,
      profilePropertyRule,
      profilePropertyRuleOptions: profilePropertyRuleOptionsOverride
        ? profilePropertyRuleOptionsOverride
        : await profilePropertyRule.getOptions(),
      profilePropertyRuleFilters: profilePropertyRuleFiltersOverride
        ? profilePropertyRuleFiltersOverride
        : await profilePropertyRule.getFilters(),
      profile,
    });

    await app.checkAndUpdateParallelism("decr");

    return response;
  }

  /**
   * Import all profile properties from a Source for a Profile
   */
  export async function _import(source: Source, profile: Profile) {
    const hash = {};
    const rules = await source.$get("profilePropertyRules", {
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
          .then((response) => (hash[rule.key] = response))
      )
    );

    // remove null and undefined as we cannot set that value
    const hashKeys = Object.keys(hash);
    for (const i in hashKeys) {
      const key = hashKeys[i];
      if (hash[key] === null || hash[key] === undefined) {
        delete hash[key];
      }
    }

    return hash;
  }

  /**
   * This method is used to bootstrap a new source which requires a profile property rule for a mapping, but the rule doesn't yet exist.
   */
  export async function bootstrapUniqueProfilePropertyRule(
    source: Source,
    key: string,
    type: string,
    mappedColumn: string
  ) {
    const rule = ProfilePropertyRule.build({
      key,
      type,
      state: "ready",
      unique: true,
      sourceGuid: source.guid,
    });

    try {
      // manually run the hooks we want
      ProfilePropertyRule.generateGuid(rule);
      await ProfilePropertyRule.ensureUniqueKey(rule);

      // @ts-ignore
      // danger zone!
      await rule.save({ hooks: false });
      await ProfilePropertyRule.clearCacheAfterSave();

      // build the default options
      const { pluginConnection } = await source.getPlugin();
      if (
        typeof pluginConnection.methods
          .uniqueProfilePropertyRuleBootstrapOptions === "function"
      ) {
        const app = await source.$get("app");
        const connection = await app.getConnection();
        const appOptions = await app.getOptions();
        const options = await source.getOptions();
        const ruleOptions = await pluginConnection.methods.uniqueProfilePropertyRuleBootstrapOptions(
          {
            app,
            connection,
            appOptions,
            source,
            sourceOptions: options,
            mappedColumn,
          }
        );

        await rule.setOptions(ruleOptions);
      }

      return rule;
    } catch (error) {
      if (rule) {
        await rule.destroy();
        throw error;
      }
    }
  }
}
