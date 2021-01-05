import { GrouparooCLI } from "../modules/cli";
import { plugin } from "../modules/plugin";
import { Profile } from "../models/Profile";
import { Group } from "../models/Group";
import { GroupOps } from "../modules/ops/group";
import { Run } from "../models/Run";
import { Import } from "../models/Import";
import { Export } from "../models/Export";
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
    GrouparooCLI.logCLI(this);

    const { value: clusterName } = await plugin.readSetting(
      "core",
      "cluster-name"
    );

    // Intro
    console.log(`Status for ${clusterName} (${env}):`);
    console.log("");

    // Profiles
    const profilesCount = await Profile.count();
    const pendingProfilesCount = await Profile.count({
      where: { state: "pending" },
    });
    console.log(`Profiles: ${profilesCount} (${pendingProfilesCount} pending)`);

    // Groups
    const groupsCount = await Group.count();
    const { groups, newestMembersAdded } = await GroupOps.newestGroupMembers(
      100
    );
    console.log(`Groups: ${groupsCount}`);
    for (const i in groups) {
      const group = groups[i];
      const additionTime = newestMembersAdded[group.guid]
        ? new Date(newestMembersAdded[group.guid]).toISOString()
        : "Never";
      console.log(
        `  ${group.name}: ${await group.$count(
          "groupMembers"
        )} members (most recent addition - ${additionTime})`
      );
    }

    // Runs
    const runningRuns = await Run.findAll({ where: { state: "running" } });
    console.log("Active Runs:");
    if (runningRuns.length === 0) {
      console.log("  None");
    } else {
      for (const i in runningRuns) {
        const run = runningRuns[i];
        console.log(
          `  ${await run.getCreatorName()} - ${run.percentComplete}% ${
            Object.keys(run.highWaterMark).length > 0
              ? `(${Object.keys(run.highWaterMark)[0]})`
              : ""
          }`
        );
      }
    }

    // Imports
    const pendingImportsCount = await Import.count({
      where: { groupsUpdatedAt: null },
    });
    console.log(`Pending Imports: ${pendingImportsCount}`);

    // Exports
    const pendingExportsCount = await Export.count({
      where: { completedAt: null, errorMessage: null },
    });
    console.log(`Pending Exports: ${pendingExportsCount}`);

    return true;
  }
}
