import os from "os";
import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { GrouparooModel } from "../../dist";
import { ConfigUserCreate } from "../../src/actions/config";
import { NavigationItem, NavigationList } from "../../src/actions/navigation";
import { SessionCreate } from "../../src/actions/session";

const expectModelsInNav = (
  navigationItems: NavigationItem[],
  startIndex: number,
  modelNames?: string[]
) => {
  let index = startIndex;

  if (modelNames) {
    expect(navigationItems[index].type).toEqual("divider");
    index++;

    modelNames.forEach((modelName) => {
      expect(navigationItems[index].title).toEqual(modelName);
      expect(navigationItems[index].type).toEqual("link");
      expect(navigationItems[index].icon).toBeDefined();
      expect(navigationItems[index].href).toBeDefined();
      index++;
    });
  }

  expect(navigationItems[index].title).toEqual("New Model");

  if (modelNames) {
    expect(navigationItems[index + 1].type).toEqual("divider");
  }
};

describe("actions/navigation", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  test("returns index and about pages", async () => {
    const { navigation, navigationMode } =
      await specHelper.runAction<NavigationList>("navigation:list");

    expect(navigationMode).toBe("unauthenticated");

    expect(navigation.navigationItems).toEqual([
      { type: "link", title: "Home", href: "/" },
      { type: "link", title: "About", href: "/about" },
    ]);

    expect(navigation.bottomMenuItems).toEqual([
      { type: "link", title: "Create Team", href: "/team/initialize" },
      { href: "/help", title: "Help", type: "link" },
    ]);
  });

  test("the navigation action includes the clusterName", async () => {
    const { clusterName } = await specHelper.runAction<NavigationList>(
      "navigation:list"
    );
    expect(clusterName).toEqual(
      expect.objectContaining({ default: true, value: "My Grouparoo Cluster" })
    );
  });

  describe("with session", () => {
    let model: GrouparooModel;

    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Peach",
        lastName: "Toadstool",
        password: "P@ssw0rd!",
        email: "peach@example.com",
      });

      model = await helper.factories.model({
        name: "Accounts",
        type: "account",
      });
      await helper.factories.model();
    });

    test("the navigation action does not include the teamMember if not logged in", async () => {
      const { teamMember } = await specHelper.runAction<NavigationList>(
        "navigation:list"
      );
      expect(teamMember).toBeUndefined();
    });

    test("the navigation action includes the teamMember if logged in", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = {
        email: "peach@example.com",
        password: "P@ssw0rd!",
      };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      const csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };

      const { teamMember } = await specHelper.runAction<NavigationList>(
        "navigation:list",
        connection
      );
      expect(teamMember.email).toBe("peach@example.com");
    });

    test("includes Dashboard, Apps and Models", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = {
        email: "peach@example.com",
        password: "P@ssw0rd!",
      };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      const csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };

      const {
        navigation: { navigationItems },
      } = await specHelper.runAction<NavigationList>(
        "navigation:list",
        connection
      );

      expect(navigationItems[0].title).toEqual("Dashboard");
      expect(navigationItems[1].title).toEqual("Apps");
      expectModelsInNav(navigationItems, 2, ["Accounts", "Profiles"]);
    });

    test("the navigation action does not include models if not logged in", async () => {
      const { navigationModel, navigationMode } =
        await specHelper.runAction<NavigationList>("navigation:list");

      expect(navigationMode).toBe("unauthenticated");

      expect(navigationModel.value).toBe(null);
      expect(navigationModel.options).toHaveLength(0);
    });

    test("the navigation action includes models if logged in", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = {
        email: "peach@example.com",
        password: "P@ssw0rd!",
      };
      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      const csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };

      const { navigationModel } = await specHelper.runAction<NavigationList>(
        "navigation:list",
        connection
      );
      expect(navigationModel.value).toBe(model.id);
      expect(navigationModel.options).toHaveLength(2);
    });

    describe("with additional models", () => {
      let adminModel: GrouparooModel;
      beforeAll(async () => {
        adminModel = await helper.factories.model({ name: "Admins" });
      });

      afterAll(async () => {
        await adminModel.destroy();
      });

      test("navigation action returns selected model if model has been passed", async () => {
        const connection = await specHelper.buildConnection();
        connection.params = {
          email: "peach@example.com",
          password: "P@ssw0rd!",
        };
        const sessionResponse = await specHelper.runAction<SessionCreate>(
          "session:create",
          connection
        );
        const csrfToken = sessionResponse.csrfToken;
        connection.params = { csrfToken, modelId: adminModel.id };

        const { navigationModel } = await specHelper.runAction<NavigationList>(
          "navigation:list",
          connection
        );
        expect(navigationModel.value).toBe(adminModel.id);
        expect(navigationModel.options).toHaveLength(3);
      });
    });
  });

  describe("in config mode", () => {
    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Peach",
        lastName: "Toadstool",
        password: "P@ssw0rd!",
        email: "peach@example.com",
      });

      process.env.GROUPAROO_RUN_MODE = "cli:config";
      process.env.GROUPAROO_CONFIG_DIR = `${os.tmpdir()}/test/${
        process.env.JEST_WORKER_ID
      }/config/navigation`;
    });

    test("the navigation includes Models and Apps if authenticated in config mode", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = {
        email: "peach@example.com",
        password: "P@ssw0rd!",
      };

      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      const csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };

      const { error, user } = await specHelper.runAction<ConfigUserCreate>(
        "config:user:create",
        { email: "true", company: "company" }
      );
      let { navigation } = await specHelper.runAction<NavigationList>(
        "navigation:list",
        connection
      );

      expect(navigation.navigationItems[0].title).toEqual("Apps");
      expectModelsInNav(navigation.navigationItems, 1, [
        "Accounts",
        "Profiles",
      ]);
    });

    test("the navigation does not include Platform items if in config mode", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = {
        email: "peach@example.com",
        password: "P@ssw0rd!",
      };

      const sessionResponse = await specHelper.runAction<SessionCreate>(
        "session:create",
        connection
      );
      const csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };

      const { error, user } = await specHelper.runAction<ConfigUserCreate>(
        "config:user:create",
        { email: "true", company: "company" }
      );
      let { navigation } = await specHelper.runAction<NavigationList>(
        "navigation:list",
        connection
      );

      expect(navigation.platformItems.length).toEqual(0);
    });
  });
});
