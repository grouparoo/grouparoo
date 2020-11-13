import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
let actionhero;

describe("actions/navigation", () => {
  beforeAll(async () => {
    const env = await helper.prepareForAPITest();
    actionhero = env.actionhero;
  }, helper.setupTime);

  afterAll(async () => {
    await helper.shutdown(actionhero);
  });

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
    ]);
  });

  test("the navigation action includes the clusterName", async () => {
    const { clusterName } = await specHelper.runAction("navigation:list");
    expect(clusterName).toBe("My Grouparoo Cluster");
  });
});
