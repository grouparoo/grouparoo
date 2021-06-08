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

      await Status.setAll();
      const samples = await Status.get();

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
        TotalProfiles: [getLatestMetric(samples, "Profile", "totals").count],
        TotalGroups: [getLatestMetric(samples, "Group", "totals").count],
      };

      const pendingItems = [];
      const pendingRuns = [];

      for (const topic in samples) {
        for (const collection in samples[topic]) {
          const metrics = samples[topic][collection];
          const { metric } = metrics[metrics.length - 1];
          if (metric.collection === "pending") {
            pendingItems.push({
              [metric.topic]: [metric.count],
            });
          }

          if (
            metric.topic === "Run" &&
            metric.collection === "percentComplete"
          ) {
            pendingRuns.push({
              [metric.value]: [
                `${metric.count}%${
                  metric.metadata ? ` (${metric.metadata})` : ""
                }`,
              ],
            });
          }
        }
      }

      const data = [
        { header: "Overview", status: overview },
        { header: "Groups", status: groupsStatus },
        {
          header: "Pending Items",
          status: pendingItems.reduce((s, arr) => Object.assign(s, arr), {}),
        },
        {
          header: "Active Runs",
          status: pendingRuns.reduce((s, arr) => Object.assign(s, arr), {}),
        },
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

function getLatestMetric(
  samples: Status.StatusGetResponse,
  topic: string,
  collection: string
) {
  return samples[topic][collection][samples[topic][collection].length - 1]
    .metric;
}
