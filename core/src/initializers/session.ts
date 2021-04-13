import {
  api,
  config,
  action,
  Initializer,
  Connection,
  chatRoom,
} from "actionhero";
import { TeamMember } from "../index";
import { Session } from "../models/Session";
import {
  ChatRoomMiddleware,
  AuthenticatedActionMiddleware,
  OptionallyAuthenticatedActionMiddleware,
} from "../modules/middleware/authentication";

declare module "actionhero" {
  export interface Api {
    session: {
      prefix: string;
      ttl: number;
      // key: (connection: Connection) => string;
      load: (connection: Connection) => Promise<Session>;
      destroy: (connection: Connection) => Promise<void>;
      create: (
        connection: Connection,
        teamMember: TeamMember
      ) => Promise<Session>;
    };
  }
}

export class SessionInitializer extends Initializer {
  constructor() {
    super();
    this.name = "session";
    this.startPriority = 100;
  }

  async initialize() {
    api.session = {
      prefix: "session",
      ttl: 1000 * 60 * 60 * 24 * 30, // 30 days; in milliseconds

      load: async (connection: Connection) => {
        const session = await Session.findOne({
          where: { fingerprint: connection.fingerprint },
        });
        if (!session) return null;
        return session;
      },

      create: async (connection, teamMember) => {
        await Session.destroy({
          where: { fingerprint: connection.fingerprint },
        });

        const session = await Session.create({
          fingerprint: connection.fingerprint,
          teamMemberId: teamMember.id,
          expiresAt: new Date().getTime() + api.session.ttl,
        });

        await teamMember.update({ lastLoginAt: new Date() });

        return session;
      },

      destroy: async (connection: Connection) => {
        await Session.destroy({
          where: { fingerprint: connection.fingerprint },
        });
      },
    };
  }

  async start() {
    if (!config.general.serverToken || config.general.serverToken === "") {
      throw new Error("SERVER_TOKEN environment variable missing");
    }

    action.addMiddleware(AuthenticatedActionMiddleware);
    action.addMiddleware(OptionallyAuthenticatedActionMiddleware);
    chatRoom.addMiddleware(ChatRoomMiddleware);

    api.params.globalSafeParams.push("csrfToken");
    api.params.globalSafeParams.push("apiKey");
  }
}
