import { Action, api } from "actionhero";
import { AuthenticatedAction } from "./../classes/authenticatedAction";
import { TeamMember } from "../models/TeamMember";

export class sessionCreate extends Action {
  constructor() {
    super();
    this.name = "session:create";
    this.description = "to create a session and sign in";
    this.inputs = {
      email: { required: true },
      password: { required: true },
    };
    this.outputExample = {};
  }

  async run({ connection, response, params }) {
    response.success = false;
    const teamMember = await TeamMember.findOne({
      where: { email: params.email },
    });
    if (!teamMember) {
      throw new Error("team member not found");
    }

    const match = await teamMember.checkPassword(params.password);
    if (!match) {
      throw new Error("password does not match");
    }

    const sessionData = await api.session.create(connection, teamMember);
    response.teamMember = await teamMember.apiData();
    response.success = true;
    response.csrfToken = sessionData.csrfToken;
  }
}

export class sessionView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "session:view";
    this.description = "to view session information";
    this.permissionTopic = "*";
    this.outputExample = {};
  }

  async run({ connection, response, session: { teamMember } }) {
    const sessionData = await api.session.load(connection);
    if (sessionData) {
      response.csrfToken = sessionData.csrfToken;
      response.teamMember = await teamMember.apiData();
    }
  }
}

export class sessionDestroy extends Action {
  constructor() {
    super();
    this.name = "session:destroy";
    this.description = "to destroy a session and sign out";
    this.outputExample = {};
  }

  async run({ connection, response }) {
    response.success = false;
    await api.session.destroy(connection);
    response.success = true;
  }
}
