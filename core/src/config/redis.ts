import { URL } from "url";

const namespace = "redis";

declare module "actionhero" {
  export interface ActionheroConfigInterface {
    [namespace]: ReturnType<typeof DEFAULT[typeof namespace]>;
  }
}

export const DEFAULT = {
  [namespace]: () =>
    process.env.REDIS_URL === "redis://mock" || process.env.REDIS_URL === "mock"
      ? MockRedisConfig()
      : process.env.REDIS_URL.includes("cluster=true")
      ? RedisClusterConfig()
      : RealRedisConfig(),
};

const maxBackOff = 1000;

function RealRedisConfig() {
  const konstructor = require("ioredis");
  const { host, port, db, username, password, protocol } =
    getRedisConnectionOptions();

  const commonArgs = {
    port,
    host,
    // For older redis servers, we cannot supply a username.  This is normally triggered by a 1 or 0 char username in REDIS_URL
    username:
      username?.length > 1 || process.env.REDIS_USER ? username : undefined,
    password,
    // If we have a REDIS_URL, but no database, assume we mean db=0
    db: parseInt(db || "0"),
    // ssl options
    tls: protocol === "rediss" ? { rejectUnauthorized: false } : undefined,
    // you can learn more about retryStrategy @ https://github.com/luin/ioredis#auto-reconnect
    retryStrategy: (times) => {
      if (times === 1) {
        console.error(
          "Unable to connect to Redis - please check your Redis config!"
        );
        return 5000;
      }
      return Math.min(times * 50, maxBackOff);
    },
  };

  return {
    scanCount: 1000,

    _toExpand: false,
    client: {
      konstructor,
      args: [commonArgs],
      buildNew: true,
    },
    subscriber: {
      konstructor,
      args: [commonArgs],
      buildNew: true,
    },
    tasks: {
      konstructor,
      args: [commonArgs],
      buildNew: true,
    },
  };
}

function RedisClusterConfig() {
  const konstructor = require("ioredis").Cluster;
  const { host, port, db, username, password, protocol } =
    getRedisConnectionOptions();

  const commonArgs = {
    port,
    host,
    // For older redis servers, we cannot supply a username.  This is normally triggered by a 1 or 0 char username in REDIS_URL
    username:
      username?.length > 1 || process.env.REDIS_USER ? username : undefined,
    password,
    // If we have a REDIS_URL, but no database, assume we mean db=0
    db: parseInt(db || "0"),
    // ssl options
    tls: protocol === "rediss" ? { rejectUnauthorized: false } : undefined,
    // you can learn more about retryStrategy @ https://github.com/luin/ioredis#auto-reconnect
  };

  return {
    scanCount: 1000,

    _toExpand: false,
    client: {
      konstructor,
      args: [[commonArgs]],
      buildNew: true,
    },
    subscriber: {
      konstructor,
      args: [[commonArgs]],
      buildNew: true,
    },
    tasks: {
      konstructor,
      args: [[commonArgs]],
      buildNew: true,
    },
  };
}

function MockRedisConfig() {
  const MockIORedis = require("ioredis-mock");
  const baseRedis = new MockIORedis();

  return {
    scanCount: 1000,

    _toExpand: false,
    client: {
      konstructor: () => baseRedis,
      args: [],
      buildNew: false,
    },
    subscriber: {
      konstructor: () => baseRedis.createConnectedClient(),
      args: [],
      buildNew: false,
    },
    tasks: {
      konstructor: () => baseRedis.createConnectedClient(),
      args: [],
      buildNew: false,
    },
  };
}

function getRedisConnectionOptions() {
  let host = process.env.REDIS_HOST;
  let port = process.env.REDIS_PORT;
  let db = process.env.REDIS_DB;
  let username = process.env.REDIS_USER;
  let password = process.env.REDIS_PASS;
  let protocol = process.env.REDIS_SSL ? "rediss" : "redis";

  if (process.env.REDIS_URL) {
    const parsed = new URL(process.env.REDIS_URL);
    if (parsed.protocol) protocol = parsed.protocol.split(":")[0];
    if (parsed.username) username = parsed.username;
    if (parsed.password) password = parsed.password;
    if (parsed.hostname) host = parsed.hostname;
    if (parsed.port) port = parsed.port;
    if (parsed.pathname) db = parsed.pathname.substring(1);
  }

  return { host, port, db, username, password, protocol };
}
