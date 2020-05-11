import { api, action, Initializer, Connection } from "actionhero";
import { Team, TeamMember, ApiKey } from "../index";
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

const authenticatedActionMiddleware: action.ActionMiddleware = {
  name: "authenticated-action",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    // authenticate a web user with session cookie & csrfToken
    async function authenticateTeamMember() {
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

        const team = await teamMember.$get("team");
        const authorized = await team.authorizeAction(
          data.actionTemplate.permission.topic,
          data.actionTemplate.permission.mode
        );
        if (!authorized) {
          throw new AuthenticationError(
            `not authorized for mode "${data.actionTemplate.permission.mode}" on topic "${data.actionTemplate.permission.topic}"`
          );
        }

        data.session.data = sessionData;
        data.session.teamMember = teamMember;
      }
    }

    // authenticate an API Request
    async function authenticateApiKey() {
      const apiKey = await ApiKey.findOne({
        where: { apiKey: data.params.apiKey },
      });
      if (!apiKey) {
        throw new AuthenticationError("apiKey not found");
      }
      const authorized = await apiKey.authorizeAction(
        data.actionTemplate.permission.topic,
        data.actionTemplate.permission.mode
      );
      if (!authorized) {
        throw new AuthenticationError(
          `not authorized for mode "${data.actionTemplate.permission.mode}" on topic "${data.actionTemplate.permission.topic}"`
        );
      }
    }

    // choose which mode to authenticate with
    if (data.params.apiKey) {
      return authenticateApiKey();
    } else {
      return authenticateTeamMember();
    }
  },
};

const optionallyAuthenticatedActionMiddleware: action.ActionMiddleware = {
  name: "optionally-authenticated-action",
  global: false,
  priority: 1000,
  preProcessor: async (data) => {
    // authenticate a web user with session cookie & csrfToken
    async function authenticateTeamMember() {
      const sessionData = await api.session.load(data.connection);
      if (sessionData) {
        if (
          !data.params.csrfToken ||
          data.params.csrfToken !== sessionData.csrfToken
        ) {
          throw new AuthenticationError("CSRF error");
        } else {
          const teamMember = await TeamMember.findOne({
            where: { guid: sessionData.guid },
            include: [Team],
          });

          if (teamMember) {
            const team = await teamMember.$get("team");
            const authorized = await team.authorizeAction(
              data.actionTemplate.permission.topic,
              data.actionTemplate.permission.mode
            );
            if (!authorized) {
              throw new AuthenticationError(
                `not authorized for mode "${data.actionTemplate.permission.mode}" on topic "${data.actionTemplate.permission.topic}"`
              );
            }
            data.session.data = sessionData;
            data.session.teamMember = teamMember;
          }
        }
      }
    }

    // authenticate an API Request
    async function authenticateApiKey() {
      const apiKey = await ApiKey.findOne({
        where: { apiKey: data.params.apiKey },
      });
      if (!apiKey) {
        throw new AuthenticationError("apiKey not found");
      }
      const authorized = await apiKey.authorizeAction(
        data.actionTemplate.permission.topic,
        data.actionTemplate.permission.mode
      );
      if (!authorized) {
        throw new AuthenticationError(
          `not authorized for mode "${data.actionTemplate.permission.mode}" on topic "${data.actionTemplate.permission.topic}"`
        );
      }
    }

    // choose which mode to authenticate with
    if (data.params.apiKey) {
      return authenticateApiKey();
    } else {
      return authenticateTeamMember();
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
    action.addMiddleware(authenticatedActionMiddleware);
    action.addMiddleware(optionallyAuthenticatedActionMiddleware);

    api.params.globalSafeParams.push("csrfToken");
    api.params.globalSafeParams.push("apiKey");
  }
}
