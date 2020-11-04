import { Task, task } from "actionhero";
import { ProfileProperty } from "../../models/ProfileProperty";
import { ProfilePropertyRule } from "../../models/ProfilePropertyRule";
import { plugin } from "../../modules/plugin";

export class ProfilePropertiesEnqueue extends Task {
  constructor() {
    super();
    this.name = "profileProperties:enqueue";
    this.description =
      "Enqueue a batch of Profiles who need a Profile Property";
    this.frequency = 1000 * 10;
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
      const profilePropertyRule = profilePropertyRules[i];
      const source = await profilePropertyRule.$get("source");
      const { pluginConnection } = await source.getPlugin();

      const pendingProfileProperties = await ProfileProperty.findAll({
        where: {
          profilePropertyRuleGuid: profilePropertyRule.guid,
          state: "pending",
        },
        order: [["stateChangedAt", "ASC"]],
        limit,
      });

      const method = pluginConnection.methods.profileProperties
        ? "ProfileProperties"
        : "ProfileProperty";

      if (pendingProfileProperties.length > 0) {
        if (method === "ProfileProperties") {
          await task.enqueue(`profileProperty:import${method}`, {
            profilePropertyRuleGuid: profilePropertyRule.guid,
            profileGuids: pendingProfileProperties.map(
              (ppp) => ppp.profileGuid
            ),
          });
        } else {
          await Promise.all(
            pendingProfileProperties.map((ppp) =>
              task.enqueue(`profileProperty:import${method}`, {
                profilePropertyRuleGuid: profilePropertyRule.guid,
                profileGuid: ppp.profileGuid,
              })
            )
          );
        }
      }

      count = count + pendingProfileProperties.length;
    }

    return count;
  }
}
