import { api, action, Initializer, Connection } from "actionhero";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import crypto from "crypto";

class AuthenticationError extends Error {
  code: string;

  constructor(message, code = "AUTHENTICATION_ERROR") {
    super(message);
    this.code = code;
  }
}

const randomBytesAsync = function (bytes = 64) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(bytes, (error, buf) => {
      if (error) {
        return reject(error);
      }
      return resolve(buf.toString("hex"));
    });
  });
};

const authenticatedTeamMemberMiddleware: action.ActionMiddleware = {
  name: "authenticated-team-member",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    const sessionData = await api.session.load(data.connection);
    if (!sessionData) {
      throw new AuthenticationError("Please log in to continue");
    } else if (
      !data.params.csrfToken ||
      data.params.csrfToken !== sessionData.csrfToken
    ) {
      throw new AuthenticationError("CSRF error");
    } else {
      const teamMember = await TeamMember.findOne({
        where: { guid: sessionData.guid },
        include: [Team],
      });

      if (!teamMember) {
        throw new AuthenticationError("Team member not found");
      }

      data.session.data = sessionData;
      data.session.teamMember = teamMember;
    }
  },
};

const optionalTeamMember: action.ActionMiddleware = {
  name: "optional-team-member",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    const sessionData = await api.session.load(data.connection);
    if (sessionData) {
      const teamMember = await TeamMember.findOne({
        where: { guid: sessionData.guid },
        include: [Team],
      });
      data.session.data = sessionData;
      data.session.teamMember = teamMember;
    }
  },
};

const roleReadMiddleware: action.ActionMiddleware = {
  name: "role-read",
  global: false,
  priority: 1001,
  preProcessor: async (data) => {
    if (!data.session) {
      throw new AuthenticationError("request is no associated session");
    }
    if (data.session.teamMember.team.read !== true) {
      throw new AuthenticationError(
        "you do not have the read privilege",
        "NO_READ_PRIVILEGE"
      );
    }
  },
};

const roleWriteMiddleware: action.ActionMiddleware = {
  name: "role-write",
  global: false,
  priority: 1001,
  preProcessor: async (data) => {
    if (!data.session) {
      throw new AuthenticationError("request is no associated session");
    }
    if (data.session.teamMember.team.write !== true) {
      throw new AuthenticationError(
        "you do not have the write privilege",
        "NO_WRITE_PRIVILEGE"
      );
    }
  },
};

const roleAdminMiddleware: action.ActionMiddleware = {
  name: "role-admin",
  global: false,
  priority: 1001,
  preProcessor: async (data) => {
    if (!data.session) {
      throw new AuthenticationError("request is no associated session");
    }
    if (data.session.teamMember.team.administer !== true) {
      throw new AuthenticationError(
        "you do not have the admin privilege",
        "NO_ADMIN_PRIVILEGE"
      );
    }
  },
};

export class Session extends Initializer {
  constructor() {
    super();
    this.name = "session";
  }

  async initialize() {
    const redis = api.redis.clients.client;

    api.session = {
      prefix: "session",
      ttl: 60 * 60 * 24 * 30, // 1 month; in seconds

      key: (connection: Connection) => {
        return `${api.session.prefix}:${connection.fingerprint}`;
      },

      load: async (connection) => {
        const key = api.session.key(connection);
        const data = await redis.get(key);
        if (!data) {
          return false;
        }
        await redis.expire(key, api.session.ttl);
        return JSON.parse(data);
      },

      create: async (connection: Connection, teamMember) => {
        const key = api.session.key(connection);
        const csrfToken = await randomBytesAsync();

        const sessionData = {
          guid: teamMember.guid,
          csrfToken: csrfToken,
          createdAt: new Date().getTime(),
        };

        await teamMember.update({ lastLoginAt: new Date() });
        await redis.set(key, JSON.stringify(sessionData));
        await redis.expire(key, api.session.ttl);
        return sessionData;
      },

      destroy: async (connection: Connection) => {
        const key = api.session.key(connection);
        await redis.del(key);
      },
    };
  }

  async start() {
    action.addMiddleware(authenticatedTeamMemberMiddleware);
    action.addMiddleware(optionalTeamMember);
    action.addMiddleware(roleReadMiddleware);
    action.addMiddleware(roleWriteMiddleware);
    action.addMiddleware(roleAdminMiddleware);
    api.params.globalSafeParams.push("csrfToken");
  }
}
