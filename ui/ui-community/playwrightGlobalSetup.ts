import { PlaywrightTestConfig } from "@playwright/test";

import "@grouparoo/spec-helper/dist/lib/environment";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/ui-community": { path: __dirname },
});

// @ts-ignore
process.env.NODE_ENV = "test";
process.env.NEXT_DISABLED = "false";
process.env.GROUPAROO_UI_EDITION = "community";
process.env.GROUPAROO_PARENT_PATH = __dirname;
process.env.WORKERS = "1";

const globalSetup = (testConfig: PlaywrightTestConfig) => {};

export default globalSetup;
