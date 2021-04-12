import { api, config, action, Connection, chatRoom } from "actionhero";
import { CLS } from "../cls";
import { ApiKey } from "../../models/ApiKey";
import { Team } from "../../models/Team";
import { TeamMember } from "../../models/TeamMember";

export class AuthenticationError extends Error {
  code: string;

  constructor(message: string, code = "AUTHENTICATION_ERROR") {
    super(message);
    this.code = code;
  }
}

export class AuthorizationError extends Error {
  code: string;

  constructor(mode: string, topic: string, code = "AUTHORIZATION_ERROR") {
    const message = `Not authorized for mode "${mode}" on topic "${topic}"`;
    super(message);
    this.code = code;
  }
}

export const AuthenticatedActionMiddleware: action.ActionMiddleware = {
  name: "authenticated-action",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    await CLS.wrap(async () => {
      if (data.params.apiKey) {
        return authenticateApiKey(data);
      } else {
        return authenticateTeamMember(data, false);
      }
    });
  },
};

export const OptionallyAuthenticatedActionMiddleware: action.ActionMiddleware = {
  name: "optionally-authenticated-action",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    await CLS.wrap(async () => {
      if (data.params.apiKey) {
        return authenticateApiKey(data);
      } else {
        return authenticateTeamMember(data, true);
      }
    });
  },
};

export const ModelChatRoomMiddleware: chatRoom.ChatMiddleware = {
  name: "model chat room middleware",
  join: async (connection: Connection, room: string) => {
    await CLS.wrap(async () => {
      if (!room.match(/^model:/)) return;

      const topic = room.split(":")[1];
      const mode = "read";
      const session = await api.session.load(connection);
      if (!session || !session.id) {
        throw new AuthenticationError("Please log in to continue");
      } else {
        const teamMember = await TeamMember.findOne({
          where: { id: session.teamMemberId },
          include: [Team],
        });

        if (!teamMember) throw new AuthenticationError("Team member not found");

        const team = await teamMember.$get("team");
        const authorized = await team.authorizeAction(topic, "read");
        if (!authorized) {
          throw new AuthorizationError(mode, topic);
        }
      }
    });
  },
};

// authenticate a web user with session cookie & csrfToken
async function authenticateTeamMember(
  data: { [key: string]: any },
  optional: boolean
) {
  const session = await api.session.load(data.connection);
  if (!session && optional) return;
  if (!session || !session.id) {
    throw new AuthenticationError("Please log in to continue");
  } else if (
    (data.params.csrfToken && data.params.csrfToken !== session.id) ||
    (!data.params.csrfToken &&
      data.connection.rawConnection?.req?.headers[
        "x-grouparoo-server-token"
      ] !== config.general.serverToken)
  ) {
    await api.session.destroy(data.connection);
    throw new AuthenticationError("CSRF error");
  } else {
    const teamMember = await TeamMember.findOne({
      where: { id: session.teamMemberId },
      include: [Team],
    });

    if (!teamMember) {
      throw new AuthenticationError("Team member not found");
    }

    const team = await teamMember.$get("team");
    const authorized = await team.authorizeAction(
      data.actionTemplate.permission.topic,
      data.actionTemplate.permission.mode
    );
    if (!authorized) {
      throw new AuthorizationError(
        data.actionTemplate.permission.mode,
        data.actionTemplate.permission.topic
      );
    }

    data.session.data = session;
    data.session.teamMember = teamMember;
  }
}

// authenticate an API Request
async function authenticateApiKey(data: { [key: string]: any }) {
  const apiKey = await ApiKey.findOne({
    where: { apiKey: data.params.apiKey },
  });
  if (!apiKey) throw new AuthenticationError("apiKey not found");

  const authorized = await apiKey.authorizeAction(
    data.actionTemplate.permission.topic,
    data.actionTemplate.permission.mode
  );
  if (!authorized) {
    throw new AuthorizationError(
      data.actionTemplate.permission.mode,
      data.actionTemplate.permission.topic
    );
  }

  data.session.apiKey = apiKey;
}
