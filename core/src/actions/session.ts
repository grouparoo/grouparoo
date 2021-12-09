import { Action, api, Connection } from "actionhero";
import { OAuthRequest } from "..";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { CLSAction } from "../classes/actions/clsAction";
import { TeamMember } from "../models/TeamMember";
import { Errors } from "../modules/errors";

export class SessionCreate extends CLSAction {
  constructor() {
    super();
    this.name = "session:create";
    this.description = "to create a session and sign in";
    this.inputs = {
      email: { required: true },
      password: { required: false },
      requestId: { required: false },
    };
    this.outputExample = {};
  }

  isWriteTransaction() {
    return true;
  }

  async runWithinTransaction({
    connection,
    params,
  }: {
    connection: Connection;
    params: { email: string; password?: string; requestId?: string };
  }) {
    if (!params.password && !params.requestId) {
      throw new Error(`password or an oAuth requestId is required`);
    }

    const teamMember = await TeamMember.findOne({
      where: { email: params.email.toLocaleLowerCase() },
    });
    if (!teamMember) {
      throw new Errors.AuthenticationError("team member not found");
    }

    if (params.password) {
      const match = await teamMember.checkPassword(params.password);
      if (!match)
        throw new Errors.AuthenticationError("password does not match");
    } else {
      const oauthRequest = await OAuthRequest.findById(params.requestId);
      const identity = oauthRequest.identities.find(
        (i) => i.email === teamMember.email
      );
      if (!identity)
        throw new Error(
          `${teamMember.email} was not returned in oAuth Request ${oauthRequest.id}`
        );
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
