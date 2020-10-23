import { api, task } from "actionhero";
import { RetryableTask } from "../../classes/retryableTask";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { plugin } from "../../modules/plugin";

export class ProfilePropertiesEnqueue extends RetryableTask {
  constructor() {
    super();
    this.name = "profileProperties:enqueue";
    this.description =
      "Enqueue a batch of Profiles who need a Profile Property";
    this.frequency = 1000 * 30;
    this.queue = "profileProperties";
    this.inputs = {};
  }

  async run() {
    let count = 0;
    const limit = parseInt(
      (
        await plugin.readSetting(
          "core",
          "imports-profile-properties-batch-size"
        )
      ).value
    );

    const profilePropertyRules = await ProfilePropertyRule.findAll({
      where: { state: "ready" },
    });

    for (const i in profilePropertyRules) {
      const rule = profilePropertyRules[i];

      const pendingProfileProperties = await ProfileProperty.findAll({
        where: { profilePropertyRuleGuid: rule.guid, state: "pending" },
        order: [["stateChangedAt", "ASC"]],
        limit,
      });

      count = count + pendingProfileProperties.length;

      if (pendingProfileProperties.length > 0) {
        await task.enqueue("profileProperty:import", {
          profilePropertyRuleGuid: rule.guid,
          profileGuids: pendingProfileProperties.map((ppp) => ppp.profileGuid),
        });
      }
    }

    return count;
  }
}
