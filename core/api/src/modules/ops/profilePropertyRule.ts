import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { Group } from "../../models/Group";
import { GroupRule } from "../../models/GroupRule";
import { App } from "../../models/App";
import { internalRun } from "../internalRun";
import { task } from "actionhero";

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
    const source = await profilePropertyRule.$get("source");
    const { pluginConnection } = await source.getPlugin();

    if (!pluginConnection)
      throw new Error(`cannot find a pluginConnection for type ${source.type}`);

    if (!pluginConnection.profilePropertyRuleOptions)
      throw new Error(
        `cannot find profilePropertyRuleOptions for type ${source.type}`
      );

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
        appOptions,
        source,
        sourceOptions,
        sourceMapping,
        profilePropertyRule,
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
    const source = await profilePropertyRule.$get("source");
    const sourceOptions = await source.getOptions();
    const sourceMapping = await source.getMapping();
    const app = await App.findByGuid(source.appGuid);
    const connection = await app.getConnection();
    const appOptions = await app.getOptions();

    const method = pluginConnection.methods.sourceFilters;
    const options = await method({
      connection,
      app,
      appOptions,
      source,
      sourceOptions,
      sourceMapping,
      profilePropertyRule,
      profilePropertyRuleOptions,
    });

    return options;
  }
}
