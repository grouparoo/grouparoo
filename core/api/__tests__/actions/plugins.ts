import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { specHelper } from "actionhero";

import PluginDetails from "./../../src/utils/pluginDetails";
const coreVersion = PluginDetails.getCoreVersion();

let actionhero;

describe("actions/plugins", () => {
  beforeAll(async () => {
    // --- record new nock file ---
    // const nock = await import("nock");
    // nock.recorder.rec();

    // --- use recorded nock file ---
    const nockFile = path.join(
      __dirname,
      "..",
      "fixtures",
      "actions",
      "plugins.ts"
    );
    await import(nockFile);
  });

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("can list plugins", async () => {
    // cannot actually test this without injecting some plugins at the package.json level...
    const { plugins } = await specHelper.runAction("plugins:list");
    expect(plugins.length).toBeGreaterThanOrEqual(1);
    expect(plugins[0]).toEqual({
      name: "@grouparoo/core",
      version: coreVersion,
      latestVersion: "0.1.17", // from nock recording
      license: "MPL-2.0",
      url: "https://github.com/grouparoo/grouparoo",
    });
  });
});
