// mock pluginInjection so that this plugin will be loaded (needs static path string)
jest.mock(
  `${__dirname}/../../../../../core/api/src/config/pluginInjection.ts`,
  () => ({
    "@grouparoo/bigquery": { path: `${__dirname}/../..` },
  })
);

// ~ jump over to core for this test ~
process.chdir(`${__dirname}/../../../../../core/api`);

// import statements are still relative to the file, regardless of cwd
import fs from "fs";
import path from "path";
import parse from "csv-parse/lib/sync";
import { helper } from "../../../../../core/api/__tests__/utils/specHelper";
import { specHelper, config } from "actionhero";
import { Profile } from "../../../../../core/api/src/models/Profile";
import { ProfilePropertyRule } from "../../../../../core/api/src/models/ProfilePropertyRule";
import { ProfileProperty } from "../../../../../core/api/src/models/ProfileProperty";
import { Mapping } from "../../../../../core/api/src/models/Mapping";
import { Run } from "../../../../../core/api/src/models/Run";

let api, actionhero;

const sourceTableName = `users_${process.env.JEST_WORKER_ID || 1}`;
const createSourceTableSQL = `
CREATE TABLE ${sourceTableName} (
    id SERIAL PRIMARY KEY,
    first_name text,
    last_name text,
    email text,
    gender text,
    ip_address text,
    ios_app boolean,
    android_app boolean,
    vip boolean,
    ltv double precision
)
`;

describe("integration/runs/bigquery", () => {
  let session;
  let csrfToken;
  let app;
  let source;

  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
    api = env.api;
    await api.resque.queue.connection.redis.flushdb();
  }, 1000 * 30);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

  beforeAll(async () => {
    await api.sequelize.query(`drop table if exists ${sourceTableName}`);
    await api.sequelize.query(createSourceTableSQL);
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
      await api.sequelize.query(q);
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

    // create a bigquery app
    session.params = {
      csrfToken,
      name: "test app",
      type: "bigquery",
      options: {
        user: config.sequelize.username || require("os").userInfo().username,
        password: config.sequelize.password || "password",
        host: config.sequelize.host,
        port: config.sequelize.port,
        database: config.sequelize.database,
      },
      state: "ready",
    };
    const appResponse = await specHelper.runAction("app:create", session);
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the source
    session.params = {
      csrfToken,
      name: "pg import source",
      type: "bigquery-query-import",
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
    expect(test.result).toBe(true);
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
      await profile.addOrUpdateProperties({ userId: i });
      await profile.import();
      await profile.reload();

      expect(profile.guid).toBeTruthy();
      const properties = await profile.properties();
      expect(properties.email.value).toMatch(/.*@example.com/);
      i++;
    }
  });
});
