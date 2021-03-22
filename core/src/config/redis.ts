import { URL } from "url";

export const DEFAULT = {
  redis: () =>
    process.env.REDIS_URL === "redis://mock" || process.env.REDIS_URL === "mock"
      ? MockRedisConfig()
      : RealRedisConfig(),
};

function RealRedisConfig() {
  const konstructor = require("ioredis");

  let host = process.env.REDIS_HOST || "127.0.0.1";
  let port = process.env.REDIS_PORT || 6379;
  let db = process.env.REDIS_DB || process.env.JEST_WORKER_ID || "0";
  let username = process.env.REDIS_USER || null;
  let password = process.env.REDIS_PASS || null;

  if (process.env.REDIS_URL) {
    const parsed = new URL(process.env.REDIS_URL);
    if (parsed.username) username = parsed.username;
    if (parsed.password) password = parsed.password;
    if (parsed.hostname) host = parsed.hostname;
    if (parsed.port) port = parsed.port;
    if (parsed.pathname) db = parsed.pathname.substring(1);
  }

  const maxBackoff = 1000;
  const commonArgs = {
    port,
    host,
    username,
    password,
    db: parseInt(db),
    // you can learn more about retryStrategy @ https://github.com/luin/ioredis#auto-reconnect
    retryStrategy: (times) => {
      if (times === 1) {
        console.error(
          "Unable to connect to Redis - please check your Redis config!"
        );
        return 5000;
      }
      return Math.min(times * 50, maxBackoff);
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
