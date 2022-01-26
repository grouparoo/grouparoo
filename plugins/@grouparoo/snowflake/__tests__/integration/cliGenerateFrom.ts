import path from "path";
import fs from "fs-extra";
import os from "os";

process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/snowflake": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { loadAppOptions, updater } from "../utils/nockHelper";
import { SimpleAppOptions } from "@grouparoo/core";

const { newNock } = helper.useNock(__filename, updater);
const appOptions: SimpleAppOptions = loadAppOptions(newNock);
const usersTableName = "PROFILES";

import { Generate } from "@grouparoo/core/dist/bin/generate";

process.env.GROUPAROO_CONFIG_DIR = `${os.tmpdir()}/test/${
  process.env.JEST_WORKER_ID
}/config`;

describe("snowflake cli tests", () => {
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

  test("the snowflake commands appear in the generate list", async () => {
    const command = new Generate();
    await command.run({ params: { list: "true" } });

    const output = messages.join(" ");
    expect(output).toContain(`Available Templates:`);
    expect(output).toContain(`snowflake:app`);
    expect(output).toContain(`snowflake:table:source`);
    expect(output).toContain(`snowflake:table:property`);
    expect(output).toContain(`snowflake:query:source`);
    expect(output).toContain(`snowflake:query:property`);
  });

  test("an app can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: { template: "snowflake:app", id: "snowflake_app" },
    });

    const file = `${process.env.GROUPAROO_CONFIG_DIR}/apps/snowflake_app.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "app"');
    expect(contents).toContain('id: "snowflake_app"');
    expect(contents).toContain('name: "snowflake_app"');

    //update the app to work
    fs.writeFileSync(
      file,
      contents
        .replace(
          `account: "xxx.us-east-1 or xxx.us-east-2.aws"`,
          `account: "${appOptions.account}"`
        )
        .replace(`username: "..."`, `username: "${appOptions.username}"`)
        .replace(`password: "..."`, `password: "${appOptions.password}"`)
        .replace(`warehouse: "..."`, `warehouse: "${appOptions.warehouse}"`)
        .replace(`database: "..."`, `database: "${appOptions.database}"`)
        .replace(`schema: "..."`, `schema: "${appOptions.schema}"`)
    );
  });

  test("a single source can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "snowflake:table:source",
        id: usersTableName,
        parent: "snowflake_app",
      },
    });

    const file = `${
      process.env.GROUPAROO_CONFIG_DIR
    }/sources/${usersTableName.toLowerCase()}.js`;
    const output = messages.join(" ");
    expect(output).toContain(`wrote ${file}`);

    const contents = fs.readFileSync(file).toString();
    expect(contents).toContain('class: "source"');
    expect(contents).toContain(`id: "${usersTableName.toLowerCase()}"`);
    expect(contents).toContain(`name: "${usersTableName.toLowerCase()}"`);

    fs.unlinkSync(file);
  });

  test("a single property can be generated", async () => {
    const command = new Generate();
    await command.run({
      params: {
        template: "snowflake:table:property",
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

  /**
   * This test is marked at TODO because nock isn't fully preventing access to snowflake.
   * On CI, requests to snowflake are still getting made, even with the nockfile loaded in.
   * The test runs just fine locally / when recording nockfiles.
   *
   * The problem is related to app.test() in the CI server.  The way the nockfiles are updated is insufficient
   */

  test.todo(
    "a source can be generated with all of its properties"
    // async () => {
    //   api.codeConfig.allowLockedModelChanges = true;

    //   await new Apply().run({ params: {} });

    //   const command = new Generate();
    //   await command.run({
    //     params: {
    //       template: "snowflake:table:source",
    //       id: usersTableName,
    //       parent: "snowflake_app",
    //       from: usersTableName,
    //       with: "*",
    //       mapping: "id=user_id",
    //       highWaterMark: "stamp",
    //       overwrite: true,
    //     },
    //   });

    //   const file = `${
    //     process.env.GROUPAROO_CONFIG_DIR
    //   }/sources/${usersTableName.toLowerCase()}.js`;
    //   const output = messages.join("\n");
    //   expect(output).toContain(`wrote ${file}`);

    //   const contents = fs.readFileSync(file).toString();
    //   expect(contents).toContain('class: "source"');
    //   expect(contents).toContain(`id: "${usersTableName.toLowerCase()}"`);
    //   expect(contents).toContain(`name: "${usersTableName.toLowerCase()}"`);

    //   expect(contents).toContain(`id: "user_id",`); // mapping
    //   expect(contents).toContain(`column: "id",`); // bootstrap
    //   expect(contents).toContain(`column: "stamp",`); // schedule

    //   // properties
    //   ["first_name", "last_name", "email", "date"].forEach((col) => {
    //     expect(
    //       fs.existsSync(
    //         `${process.env.GROUPAROO_CONFIG_DIR}/properties/${col}.js`
    //       )
    //     ).toBe(true);
    //   });
    // }
  );
});
