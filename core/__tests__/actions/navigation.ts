import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";

describe("actions/navigation", () => {
  helper.grouparooTestServer({ truncate: true, resetSettings: true });

  test("returns index and about pages", async () => {
    const { navigation, navigationMode } = await specHelper.runAction(
      "navigation:list"
    );

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
    const { clusterName } = await specHelper.runAction("navigation:list");
    expect(clusterName).toBe("My Grouparoo Cluster");
  });

  describe("with session", () => {
    beforeAll(async () => {
      await specHelper.runAction("team:initialize", {
        firstName: "Peach",
        lastName: "Toadstool",
        password: "P@ssw0rd!",
        email: "peach@example.com",
      });
    });

    test("the navigation action does not include the teamMember if not logged in", async () => {
      const { teamMember } = await specHelper.runAction("navigation:list");
      expect(teamMember).toBeUndefined();
    });

    test("the navigation action includes the teamMember if logged in", async () => {
      const connection = await specHelper.buildConnection();
      connection.params = {
        email: "peach@example.com",
        password: "P@ssw0rd!",
      };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      const csrfToken = sessionResponse.csrfToken;
      connection.params = { csrfToken };

      const { teamMember } = await specHelper.runAction(
        "navigation:list",
        connection
      );
      expect(teamMember.email).toBe("peach@example.com");
    });
  });
});
