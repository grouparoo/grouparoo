import { helper } from "@grouparoo/spec-helper";
import path from "path";
import { specHelper } from "actionhero";
import {
  PluginsAvailableList,
  PluginsInstalledList,
} from "../../src/actions/plugins";

import PluginDetails from "./../../src/utils/pluginDetails";
const coreVersion = PluginDetails.getCoreVersion();

const nockFile = path.join(
  __dirname,
  "..",
  "fixtures",
  "actions",
  "plugins.js"
);

// these comments to use nock
require("./../fixtures/actions/plugins");
// or these to make it record a new one
//helper.recordNock(nockFile);

describe("actions/plugins", () => {
  helper.grouparooTestServer({ truncate: true });

  test("can list installed plugins", async () => {
    // cannot actually test this without injecting some plugins at the package.json level...
    const { plugins, error } = await specHelper.runAction<PluginsInstalledList>(
      "plugins:installed:list"
    );
    expect(error).toBeFalsy();
    expect(plugins.length).toBeGreaterThanOrEqual(1);
    expect(plugins[0]).toEqual({
      name: "@grouparoo/core",
      currentVersion: coreVersion,
      latestVersion: "0.5.2", // from nock recording
      upToDate: true,
      license: "MPL-2.0",
      url: "https://github.com/grouparoo/grouparoo",
    });
  });

  test("can list available plugins", async () => {
    const { plugins, error } = await specHelper.runAction<PluginsAvailableList>(
      "plugins:available:list"
    );
    expect(error).toBeFalsy();
    expect(plugins.length).toBeGreaterThanOrEqual(1);

    const postgresPlugin = plugins.find((p) => p.name === "Postgres");

    expect(postgresPlugin).toEqual(
      expect.objectContaining({
        name: "Postgres",
        imageUrl:
          "https://www.grouparoo.com/images/home/integrations/postgres/postgres.png",
        packageName: "@grouparoo/postgres",
        source: true,
        destination: true,
        npmUrl: "https://www.npmjs.com/package/@grouparoo/postgres",
        docsUrl: "https://www.grouparoo.com/docs/plugins/grouparoo-postgres",
        installed: false,
      })
    );
  });
});
