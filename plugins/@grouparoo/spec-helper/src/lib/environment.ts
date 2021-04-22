// Note: I should not be exported by the plugin, I configure the ENV on load.
// If I were to be exported, I would create a circular dependency when loading spec-helper -> core -> spec-helper

// ENV variables
if (!process.env.DATABASE_URL)
  process.env.DATABASE_URL = `postgresql://${
    process.env.CI ? "postgres@" : ""
  }127.0.0.1:5432/grouparoo_${process.env.NODE_ENV}${
    process.env.JEST_WORKER_ID ? "_" + process.env.JEST_WORKER_ID : ""
  }`;

if (!process.env.REDIS_URL)
  process.env.REDIS_URL = `redis://r@127.0.0.1:6379/${process.env.JEST_WORKER_ID}`;

if (!process.env.SERVER_TOKEN) process.env.SERVER_TOKEN = "test-server-token";

if (!process.env.PORT)
  process.env.PORT = `${18080 + parseInt(process.env.JEST_WORKER_ID || "0")}`;

// disable the UI for these tests
process.env.NEXT_DISABLED = "true";
