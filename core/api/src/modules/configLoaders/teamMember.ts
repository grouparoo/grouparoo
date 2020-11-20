import {
  ConfigurationObject,
  extractNonNullParts,
  getParentByName,
  logModel,
  validateAndFormatGuid,
} from "../../classes/codeConfig";
import { Team, TeamMember } from "../..";

export async function loadTeamMember(configObject: ConfigurationObject) {
  let isNew = false;

  const team: Team = await getParentByName(Team, configObject.teamId);

  const guid = await validateAndFormatGuid(TeamMember, configObject.id);
  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: true, guid },
  });
  if (!teamMember) {
    isNew = true;
    teamMember = TeamMember.build({
      guid,
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
