import {
  TeamMemberConfigurationObject,
  getCodeConfigLockKey,
  getParentByName,
  IdsByClass,
  logModel,
  validateConfigObjectKeys,
} from "../../classes/codeConfig";
import { Team } from "../../models/Team";
import { TeamMember } from "../../models/TeamMember";
import { Op } from "sequelize";

export async function loadTeamMember(
  configObject: TeamMemberConfigurationObject,
  externallyValidate: boolean,
  validate = false
): Promise<IdsByClass> {
  let isNew = false;

  const team: Team = await getParentByName(Team, configObject.teamId);

  validateConfigObjectKeys(TeamMember, configObject, ["options"]);

  let teamMember = await TeamMember.scope(null).findOne({
    where: { locked: getCodeConfigLockKey(), id: configObject.id },
  });
  if (!teamMember) {
    isNew = true;
    teamMember = TeamMember.build({
      id: configObject.id,
      locked: getCodeConfigLockKey(),
      email: configObject.email,
      teamId: team.id,
    });
  }

  teamMember.teamId = team.id;
  if (configObject?.options?.firstName) {
    teamMember.firstName = configObject.options.firstName;
  }
  if (configObject?.options?.lastName) {
    teamMember.lastName = configObject.options.lastName;
  }
  await teamMember.save();

  if (configObject?.options?.password) {
    await teamMember.updatePassword(configObject.options.password);
  }

  logModel(teamMember, validate ? "validated" : isNew ? "created" : "updated");

  return { teammember: [teamMember.id] };
}

export async function deleteTeamMembers(ids: string[]) {
  const teamMembers = await TeamMember.scope(null).findAll({
    where: { locked: getCodeConfigLockKey(), id: { [Op.notIn]: ids } },
  });

  for (const i in teamMembers) {
    await teamMembers[i].destroy();
    logModel(teamMembers[i], "deleted");
  }

  return teamMembers.map((instance) => instance.id);
}
