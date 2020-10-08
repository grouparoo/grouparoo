import { AuthenticatedAction } from "../classes/authenticatedAction";
import { TeamMember } from "../models/TeamMember";

export class AccountView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "account:view";
    this.description = "view your account details";
    this.permission = { topic: "*", mode: "read" };
    this.outputExample = {};
    this.inputs = {};
  }

  async run({
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
  constructor() {
    super();
    this.name = "account:edit";
    this.description = "edit your account details";
    this.permission = { topic: "*", mode: "write" };
    this.outputExample = {};
    this.inputs = {
      firstName: { required: false },
      lastName: { required: false },
      password: { required: false },
      email: { required: false },
    };
  }

  async run({
    params,
    session: { teamMember },
  }: {
    params: { [key: string]: string };
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
