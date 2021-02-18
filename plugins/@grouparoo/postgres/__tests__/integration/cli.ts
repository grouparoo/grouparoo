import path from "path";
import fs from "fs-extra";
import os from "os";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { Generate } from "@grouparoo/core/src/bin/generate";

const tmpDir = `${os.tmpdir()}/test/${process.env.JEST_WORKER_ID}/config`;

describe("postgres cli tests", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  beforeAll(() => {
    fs.mkdirpSync(tmpDir);
    fs.emptyDirSync(tmpDir);
  });

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

  test("the postgres commands appear in the generate list", async () => {
    const command = new Generate();
    await command.run({ params: { path: tmpDir, list: true } });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`postgres:app`);
    expect(output).toContain(`postgres:table:source`);
    expect(output).toContain(`postgres:table:property`);
    expect(output).toContain(`postgres:query:source`);
    expect(output).toContain(`postgres:query:property`);
    expect(output).toContain(`postgres:destination`);
  });

  test("an app can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: { path: tmpDir, template: "postgres:app", id: "postgres_app" },
    });

    const file = `${tmpDir}/apps/postgres_app.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "app"');
    expect(contents).toContain('id: "postgres_app"');
    expect(contents).toContain('name: "postgres_app"');
  });
});
