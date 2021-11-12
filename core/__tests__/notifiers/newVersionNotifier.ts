import { helper } from "@grouparoo/spec-helper";
import { NewVersionNotifier } from "../../src/notifiers/newVersionNotifier";
import { Notification } from "../../src";
import { Plugins } from "../../src/modules/plugins";

jest.mock("../../src/modules/plugins", () => ({
  __esModule: true,
  Plugins: {
    listPlugins: async () => {
      return [
        {
          name: "@grouparoo/core",
          source: false,
          destination: false,
          installed: true,
          currentVersion: "1.2.3",
          latestVersion: "99.0.1",
          upToDate: false,
          license: undefined,
          url: "https://www.grouparoo.com",
          apps: [],
          description: "foo",
          icon: "foo",
        },
        {
          name: "@grouparoo/postgres",
          source: false,
          destination: false,
          installed: true,
          currentVersion: "1.2.3",
          latestVersion: "99.0.1",
          upToDate: false,
          license: undefined,
          url: "https://www.grouparoo.com",
          apps: [],
          description: "foo",
          icon: "foo",
        },
        {
          name: "@grouparoo/mysql",
          source: false,
          destination: false,
          installed: true,
          currentVersion: "1.2.3",
          latestVersion: "99.0.1",
          upToDate: false,
          license: undefined,
          url: "https://www.grouparoo.com",
          apps: [],
          description: "foo",
          icon: "foo",
        },
      ] as Plugins.PluginWithVersion[];
    },
  },
}));

describe("notifiers/newVersionNotifier", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeEach(async () => {
    await Notification.truncate();
  });

  it("creates a notification when there are new plugin versions available", async () => {
    const notifier = new NewVersionNotifier();
    await notifier.run();

    const notification = await Notification.findOne();
    expect(notification.subject).toBe("There's a new version of Grouparoo!");
    expect(notification.body).toContain(
      "You are currently running version **1.2.3** of @grouparoo/core, but the latest version is **99.0.1**.  We suggest that you upgrade your server as soon as possible to take advantage of all the new features and fixes."
    );
    expect(notification.body).toContain(
      "There are also other plugins with updates available"
    );
    expect(notification.body).toContain(
      " * @grouparoo/postgres (1.2.3 -> 99.0.1)"
    );
    expect(notification.body).toContain(
      " * @grouparoo/mysql (1.2.3 -> 99.0.1)"
    );
    expect(notification.cta).toBe("See what upgrades are available");
    expect(notification.ctaLink).toBe("/about");
  });
});
