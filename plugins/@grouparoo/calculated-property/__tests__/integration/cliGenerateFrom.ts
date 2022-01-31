import path from "path";
import fs from "fs-extra";
import os from "os";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { Generate } from "@grouparoo/core/dist/bin/generate";

process.env.GROUPAROO_CONFIG_DIR = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/config`;

describe("calculated-property cli tests", () => {
  beforeAll(() => {
    fs.mkdirpSync(process.env.GROUPAROO_CONFIG_DIR);
    fs.emptyDirSync(process.env.GROUPAROO_CONFIG_DIR);
  });

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  let messages = [];
  let spies = [];

  beforeEach(() => {
    messages = [];
    spies.push(
      jest
        .spyOn(console, "log")
        .mockImplementation((message) => messages.push(message))
    );
    spies.push(
      jest
        .spyOn(console, "error")
        .mockImplementation((message) => messages.push(message))
    );
  });

  afterEach(() => {
    spies.map((s) => s.mockRestore());
  });

  test("the calculated-property commands appear in the generate list", async () => {
    const command = new Generate();
    await command.run({ params: { list: "true" } });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`calculated-property:app`);
    expect(output).toContain(`calculated-property:source`);
    expect(output).toContain(`calculated-property:property`);
  });

  test("an app can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: { template: "calculated-property:app", id: "calc_app" },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/apps/calc_app.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "app"');
    expect(contents).toContain('id: "calc_app"');
    expect(contents).toContain('name: "calc_app"');

    //update the app to work
    fs.writeFileSync(file, contents);
  });

  test("a single source can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "calculated-property:source",
        parent: "calc_app",
        id: "calc_source",
      },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/sources/calc_source.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "source"');
    expect(contents).toContain(`id: "calc_source"`);
    expect(contents).toContain(`name: "calc_source"`);

    fs.unlinkSync(file);
  });

  test("a single property can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "calculated-property:property",
        id: "calc_property",
        parent: "calc_source",
      },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/properties/calc_property.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "property"');
    expect(contents).toContain('id: "calc_property"');
    expect(contents).toContain('name: "calc_property"');

    fs.unlinkSync(file);
  });
});
