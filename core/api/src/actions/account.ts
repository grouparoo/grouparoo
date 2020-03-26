import { Action } from "actionhero";

export class AccountView extends Action {
  constructor() {
    super();
    this.name = "account:view";
    this.description = "view your account details";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member"];
    this.inputs = {};
  }

  async run({ response, session: { teamMember } }) {
    if (!teamMember) {
      throw new Error("team member not found");
    }
    response.teamMember = await teamMember.apiData();
    response.team = await teamMember.team.apiData();
  }
}

export class AccountEdit extends Action {
  constructor() {
    super();
    this.name = "account:edit";
    this.description = "edit your account details";
    this.outputExample = {};
    this.middleware = ["authenticated-team-member"];
    this.inputs = {
      firstName: { required: false },
      lastName: { required: false },
      password: { required: false },
      email: { required: false },
    };
  }

  async run({ params, response, session: { teamMember } }) {
    await teamMember.update(params);

    if (params.password) {
      await teamMember.updatePassword(params.password);
    }

    response.teamMember = await teamMember.apiData();
    response.team = await teamMember.team.apiData();
  }
}
