import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { specHelper } from "actionhero";

import PluginDetails from "./../../dist/utils/pluginDetails";
const coreVersion = PluginDetails.getCoreVersion();

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

  helper.grouparooTestServer({ truncate: true });

  test("can list plugins", async () => {
    // cannot actually test this without injecting some plugins at the package.json level...
    const { plugins } = await specHelper.runAction("plugins:list");
    expect(plugins.length).toBeGreaterThanOrEqual(1);
    expect(plugins[0]).toEqual({
      name: "@grouparoo/core",
      currentVersion: coreVersion,
      latestVersion: "0.1.17", // from nock recording
      upToDate: true,
      license: "MPL-2.0",
      url: "https://github.com/grouparoo/grouparoo",
    });
  });
});
