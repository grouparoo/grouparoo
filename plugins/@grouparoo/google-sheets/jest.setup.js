process.env.NEXT_DISABLED = "true";

if (!process.env.SERVER_TOKEN) {
  process.env.SERVER_TOKEN = "test-server-token";
}

// gaxios needs this and jest isn't loading it for some reason...
global.URL = require("url").URL;
