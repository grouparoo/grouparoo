import path from "path";
process.env.GROUPAROO_INJECTED_PLUGINS = JSON.stringify({
  "@grouparoo/mysql": { path: path.join(__dirname, "..", "..") },
});

import { helper } from "@grouparoo/spec-helper";
import { api, specHelper } from "actionhero";
import { Property } from "@grouparoo/core";
import { beforeData, afterData, getConfig } from "../utils/data";

const { usersTableName, appOptions } = getConfig();

describe("integration/runs/mysql", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  beforeAll(async () => await api.resque.queue.connection.redis.flushdb());
  beforeAll(async () => await helper.factories.properties());

  let session;
  let csrfToken;
  let app;
  let source;

  beforeAll(async () => await beforeData());

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  afterAll(async () => {
    await afterData();
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
      options: appOptions,
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
      appId: app.id,
      state: "ready",
    };
    const sourceResponse = await specHelper.runAction("source:create", session);
    expect(sourceResponse.error).toBeUndefined();
    source = sourceResponse.source;
  });

  test("we can test the app options", async () => {
    session.params = {
      csrfToken,
      id: app.id,
    };
    const { error, test } = await specHelper.runAction("app:test", session);
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

    const { error, property, pluginOptions } = await specHelper.runAction(
      "property:create",
      session
    );
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
        query: `select email from ${usersTableName} where id = {{ userId }}`,
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
    "the property sets profile data upon import",
    async () => {
      let i = 1;
      while (i <= 10) {
        const profile = await helper.factories.profile();
        await profile.addOrUpdateProperties({ userId: [i] });
        await profile.import();
        await profile.reload();

        expect(profile.id).toBeTruthy();
        const properties = await profile.getProperties();
        expect(properties.email.values[0]).toMatch(/.*@example.com/);
        i++;
      }
    },
    helper.longTime
  );
});
