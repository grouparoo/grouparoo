import { log } from "actionhero";
import { Team } from "../models/Team";
import { waitForLock } from "../modules/locks";
import { CLSInitializer } from "../classes/initializers/clsInitializer";

export class TeamPermissions extends CLSInitializer {
  constructor() {
    super();
    this.name = "teamPermissions";
    this.startPriority = 10;
  }

  async updateTeamPermissions(team: Team) {
    const { releaseLock } = await waitForLock(
      `team:${team.id}:updateTeamPermissions`
    );

    try {
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
    } finally {
      releaseLock();
    }
  }

  async initializeWithinTransaction() {}

  async startWithinTransaction() {
    const teams = await Team.findAll();
    for (const i in teams) {
      await this.updateTeamPermissions(teams[i]);
    }
  }

  async stopWithinTransaction() {}
}
