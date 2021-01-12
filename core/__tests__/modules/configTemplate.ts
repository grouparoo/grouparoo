import { helper } from "@grouparoo/spec-helper";
import { ConfigTemplate } from "../../src/classes/configTemplate";
import { ConfigTemplateUtils } from "../../src/modules/configTemplateUtils";
import os from "os";
import fs from "fs-extra";

let actionhero;
const tmpDir = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/generate/config`;

describe("bin/generate", () => {
  let templates: ConfigTemplate[] = [];

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await helper.factories.properties();
    templates = ConfigTemplateUtils.loadTemplates();
  }, helper.setupTime);

  beforeAll(() => {
    fs.mkdirpSync(tmpDir);
    fs.emptyDirSync(tmpDir);
  });

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  test("all the template can be loaded", async () => {
    const templateNames = templates.map((t) => t.name);
    expect(templateNames).toContain("group:calculated");
    expect(templateNames).toContain("group:manual");
  });

  test("ConfigTemplates will check for missing args", async () => {
    const template = templates.find((t) => t.name === "group:manual");

    await expect(() =>
      template.run({ params: { path: tmpDir } })
    ).rejects.toThrow(/Missing required input "name"/);

    await expect(() =>
      template.run({ params: { path: tmpDir, name: "name" } })
    ).rejects.toThrow(/Missing required input "id"/);
  });

  test("defaults can be applied", async () => {
    const template = templates.find((t) => t.name === "group:manual");

    const fileData = await template.run({
      params: template.prepareParams({ path: tmpDir, id: "test_group" }),
    });

    const newFile = `${tmpDir}/group/manual/new_group.js`;
    expect(fileData[newFile]).toBeTruthy();
    expect(fileData[newFile]).toContain('name: "New Group"');
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

      const newFile = `${tmpDir}/group/manual/test_name.js`;
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

      const newFile = `${tmpDir}/group/calculated/test_name.js`;
      expect(fileData[newFile]).toBeTruthy();
      expect(fileData[newFile]).toContain('id: "test_group"');
      expect(fileData[newFile]).toContain('propertyId: "ltv",');
    });
  });
});
