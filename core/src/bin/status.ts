import { GrouparooCLI } from "../modules/cli";
import { plugin } from "../modules/plugin";
import { GroupOps } from "../modules/ops/group";
import { env, CLI } from "actionhero";
import { CLS } from "../modules/cls";
import { Status } from "../modules/status";

export class StatusCLI extends CLI {
  constructor() {
    super();
    this.name = "status";
    this.description = "Display the status of your Grouparoo cluster";

    GrouparooCLI.timestampOption(this);
    GrouparooCLI.jsonOption(this);
  }

  preInitialize = () => {
    GrouparooCLI.setGrouparooRunMode(this);
    GrouparooCLI.setNextDevelopmentMode();
  };

  async run({ params }) {
    if (!params.json) GrouparooCLI.logCLI(this.name);

    await CLS.wrap(async () => {
      const { value: clusterName } = await plugin.readSetting(
        "core",
        "cluster-name"
      );

      const samples = await Status.sample();

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
        TotalProfiles: [
          samples.find(
            (s) => s.collection === "totals" && s.topic === "Profile"
          ).count,
        ],
        TotalGroups: [
          samples.find((s) => s.collection === "totals" && s.topic === "Group")
            .count,
        ],
      };

      const pendingItems = samples
        .filter((s) => s.collection === "pending")
        .map((s) => {
          return { [s.topic]: [s.count] };
        })
        .reduce((s, arr) => Object.assign(s, arr), {});

      const pendingRuns = samples
        .filter((s) => s.topic === "Run" && s.collection === "percentComplete")
        .map((s) => {
          return {
            [s.value]: [`${s.count}%${s.metadata ? ` (${s.metadata})` : ""}`],
          };
        })
        .reduce((s, arr) => Object.assign(s, arr), {});

      const data = [
        { header: "Overview", status: overview },
        { header: "Groups", status: groupsStatus },
        { header: "Pending Items", status: pendingItems },
        { header: "Active Runs", status: pendingRuns },
      ];

      if (params.json) {
        const jsonData = {};
        data.map((collection) => {
          jsonData[collection.header] = collection.status;
        });
        GrouparooCLI.logger.log(JSON.stringify(jsonData));
      } else {
        GrouparooCLI.logger.status("Cluster Status", data);
      }
    });

    return true;
  }
}
