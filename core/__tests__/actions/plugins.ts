import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { PluginsList } from "../../src/actions/plugins";

helper.useNock(__filename, {});

describe("actions/plugins", () => {
  helper.grouparooTestServer({ truncate: true });

  test("can list installed plugins", async () => {
    // cannot actually test this without injecting some plugins at the package.json level...
    const { plugins, error } = await specHelper.runAction<PluginsList>(
      "plugins:list",
      { includeInstalled: true, includeAvailable: false, includeVersions: true }
    );
    expect(error).toBeFalsy();
    expect(plugins.length).toBeGreaterThanOrEqual(1);
    expect(plugins[0]).toEqual({
      apps: undefined,
      currentVersion: expect.any(String),
      description: "@grouparoo/core",
      destination: false,
      icon: "/public/@grouparoo/logo.png",
      installed: true,
      latestVersion: expect.any(String),
      license: "MPL-2.0",
      name: "@grouparoo/core",
      source: false,
      upToDate: true,
      url: "https://github.com/grouparoo/grouparoo",
    });
  });

  test("can list available plugins", async () => {
    const { plugins, error } = await specHelper.runAction<PluginsList>(
      "plugins:list",
      { includeInstalled: false, includeAvailable: true, includeVersions: true }
    );
    expect(error).toBeFalsy();
    expect(plugins.length).toBeGreaterThanOrEqual(1);

    const postgresPlugin = plugins.find(
      (p) => p.name === "@grouparoo/postgres"
    );

    expect(postgresPlugin).toEqual(
      expect.objectContaining({
        apps: [],
        currentVersion: undefined,
        description:
          "Grouparoo's Postgres integration allows you to sync all of your customer data that lives in your Postgres DB with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
        destination: true,
        icon: "https://www.grouparoo.com/images/home/integrations/postgres/postgres.png",
        installed: false,
        latestVersion: "unknown",
        license: undefined,
        name: "@grouparoo/postgres",
        source: true,
        upToDate: false,
        url: "https://www.npmjs.com/package/@grouparoo/postgres",
      })
    );
  });

  test("can list skip loading versions from NPM", async () => {
    const { plugins, error } = await specHelper.runAction<PluginsList>(
      "plugins:list",
      {
        includeInstalled: true,
        includeAvailable: false,
        includeVersions: false,
      }
    );
    expect(error).toBeFalsy();
    expect(plugins.length).toBeGreaterThanOrEqual(1);

    const postgresPlugin = plugins.find((p) => p.name === "@grouparoo/core");

    expect(postgresPlugin).toEqual(
      expect.objectContaining({
        apps: undefined,
        currentVersion: "0.7.4-alpha.1",
        description: "@grouparoo/core",
        destination: false,
        icon: "/public/@grouparoo/logo.png",
        installed: true,
        latestVersion: "unknown",
        license: "MPL-2.0",
        name: "@grouparoo/core",
        source: false,
        upToDate: true,
        url: "https://github.com/grouparoo/grouparoo",
      })
    );
  });
});
