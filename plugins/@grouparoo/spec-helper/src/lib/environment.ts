// Note: I should not be exported by the plugin, I configure the ENV on load.
// If I were to be exported, I would create a circular dependency when loading spec-helper -> core -> spec-helper

// ENV variables
if (!process.env.SERVER_TOKEN) process.env.SERVER_TOKEN = "test-server-token";

if (!process.env.DATABASE_URL) {
  if (process.env.DB_DIALECT === "sqlite") {
    process.env.DATABASE_URL = `sqlite://grouparoo_${process.env.NODE_ENV}${
      process.env.JEST_WORKER_ID ? "_" + process.env.JEST_WORKER_ID : ""
    }.sqlite`;
  } else {
    process.env.DATABASE_URL = `postgresql://${
      process.env.CI ? "postgres@" : ""
    }localhost:5432/grouparoo_${process.env.NODE_ENV}${
      process.env.JEST_WORKER_ID ? "_" + process.env.JEST_WORKER_ID : ""
    }`;
  }
}

if (!process.env.REDIS_URL)
  process.env.REDIS_URL = `redis://r@localhost:6379/${process.env.JEST_WORKER_ID}`;

if (!process.env.PORT)
  process.env.PORT = `${18080 + parseInt(process.env.JEST_WORKER_ID || "0")}`;

if (!process.env.WEB_URL)
  process.env.WEB_URL = `http://localhost:${process.env.PORT}`;

// disable the UI for these tests
if (!process.env.NEXT_DISABLED) {
  process.env.NEXT_DISABLED = "true";
} else {
  // if we are testing next, we need to ensure we have the URL module loaded
  const { URL } = require("url");
  globalThis.URL = URL;
}

if (!process.env.GROUPAROO_AUTH_URL) {
  process.env.GROUPAROO_AUTH_URL = "https://auth.grouparoo.com";
}
