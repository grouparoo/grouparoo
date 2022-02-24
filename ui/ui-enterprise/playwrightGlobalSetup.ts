process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-enterprise": { path: __dirname },
});
import { PlaywrightTestConfig } from "@playwright/test";

// @ts-ignore
process.env.NODE_ENV = "test";
process.env.NEXT_DISABLED = "false";
process.env.GROUPAROO_UI_EDITION = "enterprise";

require("@grouparoo/spec-helper/dist/lib/environment");

let globalSetup = (testConfig: PlaywrightTestConfig) => {};
export default globalSetup;
