import path from "path";
import fs from "fs";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import parse from "csv-parse/lib/sync";
import { api, specHelper } from "actionhero";
import { ProfilePropertyRule } from "@grouparoo/core";
import { connect } from "../../src/lib/connect";

let actionhero;

const MYSQL_OPTIONS = {
  user: "root",
  database: "grouparoo_test",
};

const sourceTableName = `users_${process.env.JEST_WORKER_ID || 1}`;
const createSourceTableSQL = `
CREATE TABLE ${sourceTableName} (
  id int(11) NOT NULL,
  first_name VARCHAR(191) DEFAULT NULL,
  last_name VARCHAR(191) DEFAULT NULL,
  email VARCHAR(191) DEFAULT NULL,
  gender VARCHAR(191) DEFAULT NULL,
  ip_address VARCHAR(191) DEFAULT NULL,
  ios_app VARCHAR(191) DEFAULT NULL,
  android_app VARCHAR(191) DEFAULT NULL,
  vip VARCHAR(191) DEFAULT NULL,
  ltv VARCHAR(191) DEFAULT NULL,
  PRIMARY KEY (id)
)
`;

describe("integration/runs/mysql", () => {
  let client;
  let session;
  let csrfToken;
  let app;
  let source;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    client = await connect({ appOptions: MYSQL_OPTIONS, app: null });

    await client.asyncQuery(`drop table if exists ${sourceTableName}`);
    await client.asyncQuery(createSourceTableSQL);
    const file = path.join(
      process.cwd(),
      "__tests__",
      "data",
      "profiles-10.csv"
    );
    const rows = parse(fs.readFileSync(file), { columns: true });
    for (const i in rows) {
      const row = rows[i];
      const q = `INSERT INTO ${sourceTableName} (${Object.keys(row).join(
        ", "
      )}) VALUES ('${Object.values(row).join("', '")}')`;
      await client.asyncQuery(q);
    }
  });

  beforeAll(async () => {
    await helper.factories.profilePropertyRules();
    helper.disableTestPluginImport();
  });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  afterAll(async () => {
    await client.end();
  });

  test("an administrator can create the related import app", async () => {
    // sign in
    session = await specHelper.buildConnection();
    session.params = { email: "mario@example.com", password: "P@ssw0rd!" };
    const sessionResponse = await specHelper.runAction(
      "session:create",
      session
    );
    expect(sessionResponse.error).toBeUndefined();
    csrfToken = sessionResponse.csrfToken;

    // create a mysql app
    session.params = {
      csrfToken,
      name: "test app",
      type: "mysql",
      options: MYSQL_OPTIONS,
      state: "ready",
    };
    const appResponse = await specHelper.runAction("app:create", session);
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the source
    session.params = {
      csrfToken,
      name: "mysql source",
      type: "mysql-query-import",
      appGuid: app.guid,
      state: "ready",
    };
    const sourceResponse = await specHelper.runAction("source:create", session);
    expect(sourceResponse.error).toBeUndefined();
    source = sourceResponse.source;
  });

  test("we can test the app options", async () => {
    session.params = {
      csrfToken,
      guid: app.guid,
    };
    const { error, test } = await specHelper.runAction("app:test", session);
    expect(error).toBeUndefined();
    expect(test.success).toBe(true);
    expect(test.error).toBeUndefined();
  });

  test("replace the email profile property rule with a new one for this source", async () => {
    const oldRule = await ProfilePropertyRule.findOne({
      where: { key: "email" },
    });
    await oldRule.destroy();

    session.params = {
      csrfToken,
      sourceGuid: source.guid,
      key: "email",
      type: "string",
      unique: true,
    };

    const {
      error,
      profilePropertyRule,
      pluginOptions,
    } = await specHelper.runAction("profilePropertyRule:create", session);
    expect(error).toBeUndefined();
    expect(profilePropertyRule.guid).toBeTruthy();

    // check the pluginOptions
    expect(pluginOptions.length).toBe(1);
    expect(pluginOptions[0].key).toBe("query");

    // set the options
    session.params = {
      csrfToken,
      guid: profilePropertyRule.guid,
      options: {
        query: `select email from ${sourceTableName} where id = {{ userId }}`,
      },
      state: "ready",
    };
    const { error: editError } = await specHelper.runAction(
      "profilePropertyRule:edit",
      session
    );
    expect(editError).toBeUndefined();
  });

  test("the profile property rule sets profile data upon import", async () => {
    let i = 1;
    while (i <= 10) {
      const profile = await helper.factories.profile();
      await profile.addOrUpdateProperties({ userId: [i] });
      await profile.import();
      await profile.reload();

      expect(profile.guid).toBeTruthy();
      const properties = await profile.properties();
      expect(properties.email.values[0]).toMatch(/.*@example.com/);
      i++;
    }
  });
});
