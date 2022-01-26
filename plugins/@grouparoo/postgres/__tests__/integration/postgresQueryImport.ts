import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/postgres": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Property } from "@grouparoo/core";
import { SessionCreate } from "@grouparoo/core/src/actions/session";
import { AppCreate, AppTest } from "@grouparoo/core/src/actions/apps";
import { SourceCreate } from "@grouparoo/core/src/actions/sources";
import { PropertyCreate } from "@grouparoo/core/src/actions/properties";

import { beforeData, afterData, getConfig } from "../utils/data";
import { SpecHelperConnection } from "actionhero/dist/modules/specHelper";

const { appOptions, usersTableName } = getConfig();

describe("integration/runs/postgres", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => helper.disableTestPluginImport());
  beforeAll(async () => await helper.factories.properties());
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());

  let session: SpecHelperConnection;
  let csrfToken: string;
  let app: Awaited<ReturnType<AppCreate["run"]>>["app"];
  let source: Awaited<ReturnType<SourceCreate["run"]>>["source"];

  beforeAll(async () => await beforeData());
  afterAll(async () => await afterData());

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
    const sessionResponse = await specHelper.runAction<SessionCreate>(
      "session:create",
      session
    );
    expect(sessionResponse.error).toBeUndefined();
    csrfToken = sessionResponse.csrfToken;

    // create a postgres app
    session.params = {
      csrfToken,
      name: "test app",
      type: "postgres",
      options: appOptions,
      state: "ready",
    };
    const appResponse = await specHelper.runAction<AppCreate>(
      "app:create",
      session
    );
    expect(appResponse.error).toBeUndefined();
    app = appResponse.app;

    // create the source
    session.params = {
      csrfToken,
      name: "pg import source",
      type: "postgres-import-query",
      appId: app.id,
      modelId: "mod_profiles",
      state: "ready",
    };
    const sourceResponse = await specHelper.runAction<SourceCreate>(
      "source:create",
      session
    );
    expect(sourceResponse.error).toBeUndefined();
    source = sourceResponse.source;
  });

  test("we can test the app options", async () => {
    session.params = {
      csrfToken,
      id: app.id,
    };
    const { error, test } = await specHelper.runAction<AppTest>(
      "app:test",
      session
    );
    expect(error).toBeUndefined();
    expect(test.success).toBe(true);
    expect(test.error).toBeUndefined();
  });

  test("replace the email property with a new one for this source", async () => {
    const oldProperty = await Property.findOne({
      where: { key: "email" },
    });
    await oldProperty.destroy();

    session.params = {
      csrfToken,
      sourceId: source.id,
      key: "email",
      type: "string",
      unique: true,
    };

    const { error, property, pluginOptions } =
      await specHelper.runAction<PropertyCreate>("property:create", session);
    expect(error).toBeUndefined();
    expect(property.id).toBeTruthy();

    // check the pluginOptions
    expect(pluginOptions.length).toBe(1);
    expect(pluginOptions[0].key).toBe("query");

    // set the options
    session.params = {
      csrfToken,
      id: property.id,
      options: {
        query: `select email from ${usersTableName} where id = {{{ userId }}}`,
      },
      state: "ready",
    };
    const { error: editError } = await specHelper.runAction(
      "property:edit",
      session
    );
    expect(editError).toBeUndefined();
  });

  test(
    "the property sets record data upon import",
    async () => {
      let i = 1;
      while (i <= 10) {
        const record = await helper.factories.record();
        await record.addOrUpdateProperties({ userId: [i] });
        await record.import();
        await record.reload();

        expect(record.id).toBeTruthy();
        const properties = await record.getProperties();
        expect(properties.email.values[0]).toMatch(/.*@example.com/);
        i++;
      }
    },
    helper.longTime
  );
});
