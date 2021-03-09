import { env } from "actionhero";
import { Team } from "../../models/Team";
import { Setting } from "../../models/Setting";
import { titleize } from "../stringHelpers";

const nodeEnv = env || "development";

export namespace SettingOps {
  /**
   * Sets "cluster-name" setting from the first team's name and current
   * environment if the cluster name hasn't been changed from the default value.
   */
  export async function nameClusterFromTeam(team: Team) {
    const setting = await Setting.findOne({
      where: { pluginName: "core", key: "cluster-name" },
    });

    // Do nothing unless there is a team and setting object and the setting
    // hasn't been changed yet.
    if (!setting || setting.defaultValue !== setting.value) return;

    const clusterName = `${team.name} - ${titleize(nodeEnv)}`;
    return await setting.update({ value: clusterName });
  }
}
