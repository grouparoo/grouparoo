import { Initializer, log } from "actionhero";
import { Team } from "../models/Team";

export class TeamPermissions extends Initializer {
  constructor() {
    super();
    this.name = "teamPermissions";
  }

  async updateTeamPermissions(team: Team) {
    const permissionsWithStatus = await Team.buildPermissions(team);
    permissionsWithStatus.map(({ isNew, permission }) => {
      log(
        `${isNew ? "Created new" : "Checked"} permission record for team ${
          team.name
        } @ ${permission.topic}`,
        isNew ? "notice" : "debug",
        { read: permission.read, write: permission.write }
      );
    });
  }

  async start() {
    const teams = await Team.findAll();
    for (const i in teams) {
      await this.updateTeamPermissions(teams[i]);
    }
  }
}
