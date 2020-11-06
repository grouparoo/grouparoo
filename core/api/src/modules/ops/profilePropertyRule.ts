import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Group } from "../../models/Group";
import { GroupRule } from "../../models/GroupRule";
import { App } from "../../models/App";
import { internalRun } from "../internalRun";
import { task } from "actionhero";
import Mustache from "mustache";

export namespace ProfilePropertyRuleOps {
  /**
   * Enqueue Runs to update all Groups that rely on this Profile Property Rule
   */
  export async function enqueueRuns(profilePropertyRule: ProfilePropertyRule) {
    await internalRun("profilePropertyRule", profilePropertyRule.guid); // update *all* profiles

    const groups = await Group.findAll({
      include: [
        {
          model: GroupRule,
          where: { profilePropertyRuleGuid: profilePropertyRule.guid },
        },
      ],
    });

    for (const i in groups) {
      const group = groups[i];
      await group.update({ state: "initializing" });
      await task.enqueue("group:run", { groupGuid: group.guid });
    }
  }

  /**
   * Get the options for a Profile Property Rule from its plugin
   */
  export async function pluginOptions(
    profilePropertyRule: ProfilePropertyRule
  ) {
    const source = await profilePropertyRule.$get("source", { scope: null });
    const { pluginConnection } = await source.getPlugin();

    if (!pluginConnection) {
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);
    }

    if (!pluginConnection.profilePropertyRuleOptions) {
      throw new Error(
        `cannot find profilePropertyRuleOptions for type ${source.type}`
      );
    }

    const response: Array<{
      key: string;
      description: string;
      required: boolean;
      type: string;
      options: Array<{
        key: string;
        description?: string;
        examples?: Array<any>;
      }>;
    }> = [];
    const app = await App.findByGuid(source.appGuid);
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();

    for (const i in pluginConnection.profilePropertyRuleOptions) {
      const opt = pluginConnection.profilePropertyRuleOptions[i];
      const options = await opt.options({
        connection,
        app,
        appGuid: app.guid,
        appOptions,
        source,
        sourceGuid: source.guid,
        sourceOptions,
        sourceMapping,
        profilePropertyRule,
        profilePropertyRuleGuid: profilePropertyRule.guid,
      });

      response.push({
        key: opt.key,
        description: opt.description,
        required: opt.required,
        type: opt.type,
        options,
      });
    }

    return response;
  }

  /**
   * Returns any Profile Properties that this Rule depends on.
   * For example, if email depends on userId, this method would return [userIdRule]
   */
  export async function dependencies(profilePropertyRule: ProfilePropertyRule) {
    const dependencies: ProfilePropertyRule[] = [];
    const source = await profilePropertyRule.$get("source");
    const sourceMapping = await source.getMapping();
    const ruleOptions = await profilePropertyRule.getOptions();
    const rules = await ProfilePropertyRule.findAll();

    // does our source depend on another property to be mapped?
    const remoteMappingKeys = Object.values(sourceMapping);
    rules
      .filter((rule) => remoteMappingKeys.includes(rule.key))
      .filter((rule) => rule.guid !== profilePropertyRule.guid)
      .forEach((rule) => dependencies.push(rule));

    // does this rule have any mustache variables depended on?
    for (const key in ruleOptions) {
      const mustacheString = ruleOptions[key];
      const mustacheVariables: string[] = Mustache.parse(mustacheString)
        .filter((chunk) => chunk[0] === "name")
        .map((chunk) => chunk[1]);
      rules
        .filter((rule) => mustacheVariables.includes(rule.key))
        .filter((rule) => rule.guid !== profilePropertyRule.guid)
        .forEach((rule) => dependencies.push(rule));
    }

    // de-duplicate
    return dependencies.filter(
      (v, i, a) => a.findIndex((t) => t.guid === v.guid) === i
    );
  }

  /**
   * Determine if this profile property rule is directly mapped (ie: used in the mapping) and therefore profile property values for this rule will never change
   */
  export async function directlyMapped(
    profilePropertyRule: ProfilePropertyRule
  ) {
    const source = await profilePropertyRule.$get("source");
    const mapping = await source.getMapping();
    const mappingValues = Object.values(mapping);
    return mappingValues.includes(profilePropertyRule.key);
  }

  /**
   * Get the options for a Profile Property Rule's Filter from its plugin
   */
  export async function pluginFilterOptions(
    profilePropertyRule: ProfilePropertyRule
  ) {
    const { pluginConnection } = await profilePropertyRule.getPlugin();
    if (!pluginConnection.methods.sourceFilters) {
      return [];
    }

    const profilePropertyRuleOptions = await profilePropertyRule.getOptions();
    const source = await profilePropertyRule.$get("source", { scope: null });
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const app = await App.findByGuid(source.appGuid);
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();

    const method = pluginConnection.methods.sourceFilters;
    const options = await method({
      connection,
      app,
      appGuid: app.guid,
      appOptions,
      source,
      sourceGuid: source.guid,
      sourceOptions,
      sourceMapping,
      profilePropertyRule,
      profilePropertyRuleGuid: profilePropertyRule.guid,
      profilePropertyRuleOptions,
    });

    return options;
  }
}
