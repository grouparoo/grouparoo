import { helper } from "@grouparoo/spec-helper";
import {
  getAvailableGrouparooPlugins,
  listPlugins,
} from "../../src/modules/plugins";
import "isomorphic-fetch";
import {
  getPluginManifest,
  PluginManifest,
} from "../../src/modules/pluginDetails";

helper.useNock(__filename, {});

describe("actions/plugins", () => {
  helper.grouparooTestServer({ truncate: true });

  describe("#getAvailableGrouparooPlugins", () => {
    test("plugin manifest data can be loaded", async () => {
      const manifest = await getAvailableGrouparooPlugins();

      expect(manifest.length).toBeGreaterThan(0);
      expect(manifest.find((rows) => rows.name === "BigQuery")).toEqual(
        expect.objectContaining({
          name: "BigQuery",
          packageName: "@grouparoo/bigquery",
          npmUrl: "https://www.npmjs.com/package/@grouparoo/bigquery",
        })
      );
    });
  });

  describe("#listPlugins", () => {
    test("plugin data propertly formats remotely available plugins", async () => {
      const plugins = await listPlugins(true, true, true);

      expect(
        // assert the name for the plugin is the NPM name
        plugins.find((rows) => rows.name === "@grouparoo/bigquery")
      ).toBeTruthy();
    });
  });
});
