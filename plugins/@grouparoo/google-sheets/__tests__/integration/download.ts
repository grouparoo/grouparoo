import path from "path";
import { helper } from "@grouparoo/spec-helper";
import fs from "fs-extra";
import { updater } from "../utils/nockHelper";
import { downloadAndRefreshFile } from "../../src/lib/sheet-import/downloadAndRefreshFile";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/google-sheets": { path: path.join(__dirname, "..", "..") },
});

let envFile = path.resolve(path.join(__dirname, "../", ".env"));
if (fs.existsSync(envFile)) {
  require("dotenv").config({ path: envFile });
} else {
  envFile = path.resolve(path.join(__dirname, "../", ".env.example"));
  require("dotenv").config({ path: envFile });
}
const GOOGLE_SERVICE_CLIENT_EMAIL = process.env.GOOGLE_SERVICE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY;
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/11zccS101c27B9mYLMJiaAPfDgoj2chOq39n3MZrcKTk/edit#gid=0";

// NOCK=true on cmd line to record new nock file: have to change "assertion" afterwards for google auth
helper.useNock(__filename, updater);

describe("integration/runs/google-sheets", () => {
  describe("import", () => {
    test("download content", async () => {
      const appOptions = {
        client_email: GOOGLE_SERVICE_CLIENT_EMAIL,
        private_key: GOOGLE_SERVICE_PRIVATE_KEY,
      };
      const sourceOptions = {
        sheet_url: SHEET_URL,
      };

      await downloadAndRefreshFile("3039", appOptions, sourceOptions);
    });
  });
});
