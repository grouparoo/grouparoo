import { Action, api, Connection, ParamsFrom } from "actionhero";
import { OAuthRequest } from "../models/OAuthRequest";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { CLSAction } from "../classes/actions/clsAction";
import { TeamMember } from "../models/TeamMember";
import { Errors } from "../modules/errors";
import { ActionPermission } from "../models/Permission";

export class SessionCreate extends CLSAction {
  name = "session:create";
  description = "to create a session and sign in";
  inputs = {
    email: { required: true },
    password: { required: false },
    requestId: { required: false },
  } as const;

  outputExample = {};

  isWriteTransaction() {
    return true;
  }

  async runWithinTransaction({
    connection,
    params,
  }: {
    connection: Connection;
    params: ParamsFrom<SessionCreate>;
  }) {
    if (!params.password && !params.requestId) {
      throw new Errors.AuthenticationError(
        `password or an oAuth requestId is required`
      );
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
      const oauthRequest = await OAuthRequest.findOne({
        where: { id: params.requestId, consumed: false },
      });
      if (!oauthRequest)
        throw new Errors.AuthenticationError(
          `cannot find OAuthRequest ${params.requestId}`
        );
      const identity = oauthRequest.identities.find(
        (i) => i.email === teamMember.email
      );
      if (!identity)
        throw new Errors.AuthenticationError(
          `${teamMember.email} was not returned in oAuth request ${oauthRequest.id}`
        );
      await oauthRequest.update({ consumed: true });
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
  name = "session:view";
  description = "to view session information";
  permission: ActionPermission = { topic: "*", mode: "read" };
  outputExample = {};

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
  name = "session:destroy";
  description = "to destroy a session and sign out";
  outputExample = {};

  async run({ connection }: { connection: Connection }) {
    await api.session.destroy(connection);
    return { success: true };
  }
}
