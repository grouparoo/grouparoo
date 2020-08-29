import { log, CLI } from "actionhero";
import { Team } from "../../models/Team";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo updateTeamPermissions";
    this.description =
      "Ensure that your Grouparoo teams have an entry for every permission";
  }

  async updateTeamPermissions(team: Team) {
    log("");
    log(`updating permissions for team: ${team.name} (${team.guid})`);
    const permissionsWithStatus = await Team.buildPermissions(team);
    permissionsWithStatus.map(({ isNew, permission }) => {
      log(
        `     ${permission.topic}${isNew ? " (NEW)" : ""}`,
        isNew ? "notice" : "info",
        { read: permission.read, write: permission.write }
      );
    });
  }

  async run() {
    const teams = await Team.findAll();
    for (const i in teams) {
      await this.updateTeamPermissions(teams[i]);
    }

    console.log("Done!");

    return true;
  }
}
