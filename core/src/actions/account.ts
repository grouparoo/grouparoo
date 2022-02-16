import { ParamsFrom } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { TeamMember } from "../models/TeamMember";
import { ActionPermission } from "../models/Permission";

export class AccountView extends AuthenticatedAction {
  name = "account:view";
  description = "view your account details";
  permission: ActionPermission = { topic: "*", mode: "read" };
  outputExample = {};

  async runWithinTransaction({
    session: { teamMember },
  }: {
    session: { teamMember: TeamMember };
  }) {
    if (!teamMember) throw new Error("team member not found");

    return {
      teamMember: await teamMember.apiData(),
      team: await teamMember.team.apiData(),
    };
  }
}

export class AccountEdit extends AuthenticatedAction {
  name = "account:edit";
  description = "edit your account details";
  permission: ActionPermission = { topic: "*", mode: "write" };
  outputExample = {};
  inputs = {
    firstName: { required: false },
    lastName: { required: false },
    password: { required: false },
    email: { required: false },
  } as const;

  async runWithinTransaction({
    params,
    session: { teamMember },
  }: {
    params: ParamsFrom<AccountEdit>;
    session: { teamMember: TeamMember };
  }) {
    await teamMember.update(params);

    if (params.password) {
      await teamMember.updatePassword(params.password);
    }

    return {
      teamMember: await teamMember.apiData(),
      team: await teamMember.team.apiData(),
    };
  }
}
