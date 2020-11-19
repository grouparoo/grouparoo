import {
  ConfigurationObject,
  extractNonNullParts,
  getParentByName,
  logModel,
} from "../../classes/codeConfig";
import { Team, TeamMember } from "../..";

export async function loadTeamMember(configObject: ConfigurationObject) {
  const team: Team = await getParentByName(Team, configObject.team);

  let isNew = false;
  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: true, email: configObject.email, teamGuid: team.guid },
  });
  if (!teamMember) {
    isNew = true;
    teamMember = TeamMember.build({
      locked: true,
      email: configObject.email,
      teamGuid: team.guid,
    });
  }

  if (configObject?.options.firstName) {
    teamMember.firstName = configObject.options.firstName;
  }
  if (configObject?.options.lastName) {
    teamMember.lastName = configObject.options.lastName;
  }
  await teamMember.save();

  if (configObject?.options.password) {
    await teamMember.updatePassword(configObject.options.password);
  }

  logModel(teamMember, isNew);
  return teamMember;
}
