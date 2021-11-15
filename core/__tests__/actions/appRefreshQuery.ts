import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { App, Run } from "../../src";
import { SessionCreate } from "../../src/actions/session";
import {
  AppRefreshQueryCreate,
  AppRefreshQueryDestroy,
  AppRefreshQueryEdit,
  AppRefreshQueryQuery,
  AppRefreshQueryTest,
  AppRefreshQueryView,
} from "../../src/actions/appRefreshQuery";
import { ConfigWriter } from "../../src/modules/configWriter";
import { GrouparooModel, Schedule, Source } from "../../dist";
import { Connections } from "actionhero/dist/initializers/connections";

describe("actions/appRefreshQuery", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });
  const configSpy = jest.spyOn(ConfigWriter, "run");

  let id: string;
  let model: GrouparooModel;
  let app: App;
  let source: Source;
  let schedule: Schedule;

  beforeAll(async () => {
    ({ model } = await helper.factories.properties());

    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  afterEach(() => {
    configSpy.mockClear();
  });

  describe("administrator signed in", () => {
    let connection;
    let csrfToken;

    beforeAll(async () => {
      //sign in
      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;

      app = await helper.factories.app({ modelId: "mod_profiles" });
      await app.update({ name: "test app" });

      source = await helper.factories.source(app);
      await source.setOptions({ table: "test table" });
      await source.setMapping({ id: "userId" });
      await source.update({ state: "ready" });

      schedule = await helper.factories.schedule(source);
    });
    test("an administrator can create a new appRefreshQuery", async () => {
      connection.params = {
        csrfToken,
        refreshQuery: "SELECT 'hi' AS name",
        appId: app.id,
        type: "test-plugin-import",
      };
      const { error, appRefreshQuery } =
        await specHelper.runAction<AppRefreshQueryCreate>(
          "appRefreshQuery:create",
          connection
        );
      expect(error).toBeUndefined();
      expect(appRefreshQuery.id).toBeTruthy();
      expect(appRefreshQuery.refreshQuery).toBe("SELECT 'hi' AS name");
      expect(configSpy).toBeCalledTimes(1);

      id = appRefreshQuery.id;
    });
    describe("with appRefreshQuery", () => {
      test("an administrator can edit an appRefreshQuery", async () => {
        connection.params = {
          csrfToken,
          id: id,
          refreshQuery: "SELECT 'hello' AS name",
        };
        const { error, appRefreshQuery } =
          await specHelper.runAction<AppRefreshQueryEdit>(
            "appRefreshQuery:edit",
            connection
          );
        expect(error).toBeUndefined();
        expect(appRefreshQuery.id).toBeTruthy();
        expect(appRefreshQuery.refreshQuery).toBe("SELECT 'hello' AS name");
        expect(appRefreshQuery.state).toBe("draft");
        expect(configSpy).toBeCalledTimes(1);
      });
      test("an administrator can make an appRefreshQuery ready", async () => {
        connection.params = {
          csrfToken,
          id,
          state: "ready",
        };
        const { error, appRefreshQuery } =
          await specHelper.runAction<AppRefreshQueryEdit>(
            "appRefreshQuery:edit",
            connection
          );
        expect(error).toBeUndefined();
        expect(appRefreshQuery.state).toBe("ready");
      });
      test("an administrator can test an appRefreshQuery", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { error, test, appRefreshQuery } =
          await specHelper.runAction<AppRefreshQueryTest>(
            "appRefreshQuery:test",
            connection
          );
        expect(error).toBeUndefined();
        expect(test.success).toBeTruthy();
        expect(test.message.length).toBe(13); //test plugin queries return a unix timestamp
        expect(appRefreshQuery.value).toBeFalsy(); //tests shouldn't save any values
      });
      test("an administrator can query with an appRefreshQuery", async () => {
        connection.params = {
          csrfToken,
          id,
        };
        const { error, appRefreshQuery, valueUpdated } =
          await specHelper.runAction<AppRefreshQueryQuery>(
            "appRefreshQuery:query",
            connection
          );
        expect(error).toBeUndefined();
        expect(appRefreshQuery.id).toBeTruthy();
        expect(appRefreshQuery.refreshQuery).toBe("SELECT 'hello' AS name");
        expect(appRefreshQuery.value.length).toBe(13);
        expect(valueUpdated).toBeTruthy();
      });
      test("an administrator can destroy an appQueryRefresh", async () => {
        connection.params = { csrfToken, id };
        const destroyResponse =
          await specHelper.runAction<AppRefreshQueryDestroy>(
            "appRefreshQuery:destroy",
            connection
          );
        expect(destroyResponse.error).toBeUndefined();
        expect(destroyResponse.success).toBe(true);
        expect(configSpy).toBeCalledTimes(1);
      });
    });
  });
});
