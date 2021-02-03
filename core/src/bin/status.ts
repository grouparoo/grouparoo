import { GrouparooCLI } from "../modules/cli";
import { plugin } from "../modules/plugin";
import { Profile } from "../models/Profile";
import { Group } from "../models/Group";
import { GroupOps } from "../modules/ops/group";
import { env, CLI } from "actionhero";

export class Status extends CLI {
  constructor() {
    super();
    this.name = "status";
    this.description = "Display the status of your Grouparoo cluster";

    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.timestampOption(this);
  }

  async run() {
    GrouparooCLI.logCLI(this.name);

    const { value: clusterName } = await plugin.readSetting(
      "core",
      "cluster-name"
    );

    const totalProfiles = await Profile.count();
    const totalGroups = await Group.count();
    const { groups, newestMembersAdded } = await GroupOps.newestGroupMembers(
      100
    );
    const groupsStatus = {};
    for (const i in groups) {
      const group = groups[i];
      const additionTime = newestMembersAdded[group.id]
        ? new Date(newestMembersAdded[group.id]).toISOString()
        : "Never";
      const groupMembersCount = await group.$count("groupMembers");
      groupsStatus[group.name] = [
        `${groupMembersCount} members`,
        "newest member: " + additionTime,
      ];
    }

    const overview = {
      ClusterName: [clusterName, env ? `${env}` : undefined],
      TotalProfiles: [totalProfiles],
      TotalGroups: [totalGroups],
    };

    const pendingStatus = await GrouparooCLI.getPendingStatus();
    const runStatus = await GrouparooCLI.getRunsStatus();

    GrouparooCLI.logStatus("Cluster Status", [
      { header: "Overview", status: overview },
      { header: "Groups", status: groupsStatus },
      { header: "Active Runs", status: runStatus },
      { header: "Pending Items", status: pendingStatus },
    ]);

    return true;
  }
}
