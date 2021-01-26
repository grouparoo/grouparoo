import { helper } from "@grouparoo/spec-helper";
import { ConfigTemplate } from "../../dist/classes/configTemplate";
import { api } from "actionhero";
import os from "os";
import fs from "fs-extra";

describe("bin/generate", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  let templates: ConfigTemplate[] = [];
  const tmpDir = `${os.tmpdir()}/test/${
    process.env.JEST_WORKER_ID
  }/generate/config`;

  beforeAll(async () => {
    await helper.factories.properties();
    templates = api.plugins.templates();
  });

  beforeAll(() => {
    fs.mkdirpSync(tmpDir);
    fs.emptyDirSync(tmpDir);
  });

  test("all the template can be loaded", async () => {
    const templateNames = templates.map((t) => t.name);
    expect(templateNames).toContain("group:calculated");
    expect(templateNames).toContain("group:manual");
  });

  test("ConfigTemplates will check for missing args", async () => {
    const template = templates.find((t) => t.name === "group:manual");

    await expect(() =>
      template.run({ params: { path: tmpDir, name: "name" } })
    ).rejects.toThrow(/Missing required input "id"/);
  });

  test("defaults can be applied", async () => {
    const template = templates.find((t) => t.name === "group:manual");

    const fileData = await template.run({
      params: template.prepareParams({ path: tmpDir, id: "test_group" }),
    });

    const newFile = `${tmpDir}/groups/test_group.js`;

    expect(fileData[newFile]).toBeTruthy();
    expect(fileData[newFile]).toContain('name: "test_group"');
  });

  describe("templates", () => {
    test("group:manual", async () => {
      const template = templates.find((t) => t.name === "group:manual");
      const fileData = await template.run({
        params: template.prepareParams({
          path: tmpDir,
          id: "test_group",
          name: "test_name",
        }),
      });

      const newFile = `${tmpDir}/groups/test_group.js`;
      expect(fileData[newFile]).toBeTruthy();
      expect(fileData[newFile]).toContain('id: "test_group"');
    });

    test("group:calculated", async () => {
      const template = templates.find((t) => t.name === "group:calculated");
      const fileData = await template.run({
        params: template.prepareParams({
          path: tmpDir,
          id: "test_group",
          name: "test_name",
          rules: JSON.stringify({
            propertyId: "ltv",
            operation: { op: "gt" },
            match: 100,
          }),
        }),
      });

      const newFile = `${tmpDir}/groups/test_group.js`;
      expect(fileData[newFile]).toBeTruthy();
      expect(fileData[newFile]).toContain('id: "test_group"');
      expect(fileData[newFile]).toContain('propertyId: "ltv",');
    });
  });
});
