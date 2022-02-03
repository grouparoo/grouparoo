import path from "path";
import fs from "fs-extra";
import os from "os";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api } from "actionhero";
import { Generate } from "@grouparoo/core/dist/bin/generate";
import { Apply } from "@grouparoo/core/dist/bin/apply";
import {
  beforeData,
  afterData,
  appOptions,
  usersTableName,
} from "../utils/data";

process.env.GROUPAROO_CONFIG_DIR = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/config`;

describe("postgres cli tests", () => {
  beforeAll(() => {
    fs.mkdirpSync(process.env.GROUPAROO_CONFIG_DIR);
    fs.emptyDirSync(process.env.GROUPAROO_CONFIG_DIR);
  });

  helper.grouparooTestServer({ truncate: true, enableTestPlugin: false });

  beforeAll(async () => await beforeData());
  afterAll(async () => await afterData());

  let messages: string[] = [];
  const spies: jest.SpyInstance[] = [];

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
    await command.run({ params: { list: "true" } });

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
      params: { template: "postgres:app", id: "postgres_app" },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/apps/postgres_app.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "app"');
    expect(contents).toContain('id: "postgres_app"');
    expect(contents).toContain('name: "postgres_app"');

    //update the app to work
    fs.writeFileSync(
      file,
      contents
        .replace(`host: "localhost"`, `host: "${appOptions.host}"`)
        .replace(`port: 5432`, `port: "${appOptions.port}"`)
        .replace(`database: "..."`, `database: "${appOptions.database}"`)
        .replace(`user: "..."`, `user: "${appOptions.user}"`)
        .replace(`password: "..."`, `password: "${appOptions.password}"`)
    );
  });

  test("a single source can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "postgres:table:source",
        id: usersTableName,
        parent: "postgres_app",
      },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/sources/${usersTableName}.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "source"');
    expect(contents).toContain(`id: "${usersTableName}"`);
    expect(contents).toContain(`name: "${usersTableName}"`);

    fs.unlinkSync(file);
  });

  test("a single property can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "postgres:table:property",
        id: "first_name",
        parent: usersTableName,
      },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/properties/first_name.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "property"');
    expect(contents).toContain('id: "first_name"');
    expect(contents).toContain('name: "first_name"');

    fs.unlinkSync(file);
  });

  test("a source can be generated with all of its properties", async () => {
    api.codeConfig.allowLockedModelChanges = true;

    await new Apply().run({ params: {} });

    const command = new Generate();
    await command.run({
      params: {
        template: "postgres:table:source",
        id: usersTableName,
        parent: "postgres_app",
        from: usersTableName,
        with: "*",
        mapping: "id=user_id",
        highWaterMark: "stamp",
        overwrite: "true",
      },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/sources/${usersTableName}.js`;
    const output = messages.join("\n");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "source"');
    expect(contents).toContain(`id: "${usersTableName}"`);
    expect(contents).toContain(`name: "${usersTableName}"`);

    expect(contents).toContain(`id: "user_id",`); // mapping
    expect(contents).toContain(`column: "stamp",`); // schedule

    // properties
    [
      { id: "user_id", col: "id" },
      { id: "first_name", col: "first_name" },
      { id: "last_name", col: "last_name" },
      { id: "email", col: "email" },
      { id: "date", col: "date" },
    ].forEach(({ id, col }) => {
      const propertyFile = `${process.env.GROUPAROO_CONFIG_DIR}/properties/${id}.js`;
      expect(fs.existsSync(propertyFile)).toBe(true);

      const propertyContents = fs.readFileSync(propertyFile).toString();
      expect(propertyContents).toContain(`id: "${id}"`);
      expect(propertyContents).toContain(`column: "${col}"`);
    });
  });
});
