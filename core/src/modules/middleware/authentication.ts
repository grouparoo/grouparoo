import { api, config, action, Connection, chatRoom, env } from "actionhero";
import { CLS } from "../cls";
import { ApiKey } from "../../models/ApiKey";
import { Team } from "../../models/Team";
import { TeamMember } from "../../models/TeamMember";
import { Errors } from "../errors";
import { ConfigUser } from "../configUser";
import { ActionPermissionTopic, Permission } from "../../models/Permission";

export const AuthenticatedActionMiddleware: action.ActionMiddleware = {
  name: "authenticated-action",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    if (data.params.apiKey) {
      return authenticateApiKey(data);
    } else {
      return authenticateTeamMember(data, false);
    }
  },
};

export const OptionallyAuthenticatedActionMiddleware: action.ActionMiddleware =
  {
    name: "optionally-authenticated-action",
    global: false,
    priority: 1000,
    preProcessor: async (data) => {
      if (data.params.apiKey) {
        return authenticateApiKey(data);
      } else {
        return authenticateTeamMember(data, true);
      }
    },
  };

export const ChatRoomMiddleware: chatRoom.ChatMiddleware = {
  name: "model chat room middleware",
  priority: 1000,
  join: async (connection: Connection, room: string) => {
    return authenticateTeamMemberInRoom(connection, room);
  },
};

// authenticate a web user with session cookie & csrfToken
async function authenticateTeamMemberFromSession(
  data: { [key: string]: any },
  optional: boolean
) {
  return await CLS.wrap(
    async () => {
      const session = await api.session.load(data.connection);
      if (!session && optional) return;
      if (!session || !session.id) {
        const teamsCount = await Team.count();
        if (teamsCount === 0) {
          throw new Errors.AuthenticationError(
            "Please create the first team",
            "NO_TEAMS_ERROR"
          );
        } else {
          throw new Errors.AuthenticationError("Please log in to continue");
        }
      } else if (
        (data.params.csrfToken && data.params.csrfToken !== session.id) ||
        (!data.params.csrfToken &&
          data.connection.rawConnection?.req?.headers[
            "x-grouparoo-server-token"
          ] !== config.general.serverToken)
      ) {
        throw new Errors.AuthenticationError("CSRF error");
      } else {
        const teamMember = await TeamMember.findOne({
          where: { id: session.teamMemberId },
          include: [{ model: Team, include: [Permission] }],
        });

        if (!teamMember)
          throw new Errors.AuthenticationError("Team member not found");

        const authorized = await teamMember.team.authorizeAction(
          data.actionTemplate.permission.topic,
          data.actionTemplate.permission.mode
        );
        if (!authorized) {
          throw new Errors.AuthorizationError(
            data.actionTemplate.permission.mode,
            data.actionTemplate.permission.topic
          );
        }

        data.session.data = session;
        data.session.teamMember = teamMember;
      }
    },
    { catchError: true }
  );
}

// Authenticate user from file in .local directory
async function authenticateConfigUser(
  data: { [key: string]: any },
  optional: boolean
) {
  if (optional) return;
  try {
    const user = await ConfigUser.get();
    if (user?.email !== true) {
      const error = new Error("Config user not properly set.");
      error["code"] = "AUTHENTICATION_ERROR";
      throw error;
    }
  } catch (err) {
    return err;
  }
}

// Conditionally choose auth method based on run mode.
async function authenticateTeamMember(
  data: { [key: string]: any },
  optional: boolean
) {
  let error: Error;

  if (
    process.env.GROUPAROO_RUN_MODE === "cli:config" &&
    ["development", "test"].includes(env)
  ) {
    error = await authenticateConfigUser(data, optional);
  } else {
    error = await authenticateTeamMemberFromSession(data, optional);
  }

  if (error) {
    if (error["code"] === "AUTHENTICATION_ERROR") {
      await CLS.wrap(
        async () => {
          await api.session.destroy(data.connection);
        },
        { write: true, priority: true }
      );
    }

    throw error;
  }
}

// authenticate an API Request
async function authenticateApiKey(data: { [key: string]: any }) {
  await CLS.wrap(async () => {
    const apiKey = await ApiKey.findOne({
      where: { apiKey: data.params.apiKey },
      include: [Permission],
    });

    if (!apiKey) throw new Errors.AuthenticationError("apiKey not found");

    const authorized = await apiKey.authorizeAction(
      data.actionTemplate.permission.topic,
      data.actionTemplate.permission.mode
    );
    if (!authorized) {
      throw new Errors.AuthorizationError(
        data.actionTemplate.permission.mode,
        data.actionTemplate.permission.topic
      );
    }

    data.session.apiKey = apiKey;
  });
}

// authenticate a teamMember against an already-existing session in a WS room
async function authenticateTeamMemberInRoom(
  connection: Connection,
  room: string
) {
  if (!room.match(/^model:/) && !room.match(/^system:/)) {
    return;
  }

  const roomNameParts = room.split(":");
  const mode = "read";
  const topic = (
    roomNameParts[0] === "model" ? roomNameParts[1] : roomNameParts[0]
  ) as ActionPermissionTopic;

  if (
    process.env.GROUPAROO_RUN_MODE === "cli:config" &&
    env === "development"
  ) {
    return;
  }

  await CLS.wrap(async () => {
    const session = await api.session.load(connection);
    if (!session || !session.id) {
      throw new Errors.AuthenticationError("Please log in to continue");
    } else {
      const teamMember = await TeamMember.findOne({
        where: { id: session.teamMemberId },
        include: [{ model: Team, include: [Permission] }],
      });

      if (!teamMember)
        throw new Errors.AuthenticationError("Team member not found");

      const authorized = await teamMember.team.authorizeAction(topic, mode);
      if (!authorized) {
        throw new Errors.AuthorizationError(mode, topic);
      }
    }
  });
}
