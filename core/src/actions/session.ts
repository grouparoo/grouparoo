import { Action, api, Connection } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { CLSAction } from "../classes/actions/clsAction";
import { TeamMember } from "../models/TeamMember";

export class SessionCreate extends CLSAction {
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

  async runWithinTransaction({
    connection,
    params,
  }: {
    connection: Connection;
    params: { [key: string]: string };
  }) {
    const errorCode = "AUTHENTICATION_ERROR";
    let error: Error;
    const teamMember = await TeamMember.findOne({
      where: { email: params.email.toLocaleLowerCase() },
    });
    if (!teamMember) {
      error = Error("team member not found");
      error["code"] = errorCode;
      throw error;
    }

    const match = await teamMember.checkPassword(params.password);
    if (!match) {
      error = Error("password does not match");
      error["code"] = errorCode;
      throw error;
    }

    const session = await api.session.create(connection, teamMember);

    return {
      success: true,
      teamMember: await teamMember.apiData(),
      csrfToken: session.id,
    };
  }
}

export class SessionView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "session:view";
    this.description = "to view session information";
    this.permission = { topic: "*", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction({
    connection,
    session: { teamMember },
  }: {
    connection: Connection;
    session: { teamMember: TeamMember };
  }) {
    const session = await api.session.load(connection);
    if (!session) throw new Error("session not found");

    return {
      teamMember: await teamMember.apiData(),
      csrfToken: session.id,
    };
  }
}

export class SessionDestroy extends Action {
  constructor() {
    super();
    this.name = "session:destroy";
    this.description = "to destroy a session and sign out";
    this.outputExample = {};
  }

  async run({ connection }) {
    await api.session.destroy(connection);
    return { success: true };
  }
}
