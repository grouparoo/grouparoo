import { helper } from "@grouparoo/spec-helper";
import { NewVersionNotifier } from "../../src/notifiers/newVersionNotifier";
import { Notification } from "../../src";

jest.mock("../../src/modules/plugins", () => ({
  __esModule: true,
  Plugins: {
    installedPluginVersions: async () => {
      return [
        {
          name: "@grouparoo/core",
          currentVersion: "1.2.3",
          latestVersion: "99.0.1",
          upToDate: false,
          license: "MPL-2.0",
          url: "https://github.com/grouparoo/grouparoo",
        },
        {
          name: "@grouparoo/postgres",
          currentVersion: "1.2.3",
          latestVersion: "99.0.1",
          upToDate: false,
          license: "MPL-2.0",
          url: "https://github.com/grouparoo/grouparoo",
        },
        {
          name: "@grouparoo/mysql",
          currentVersion: "1.2.3",
          latestVersion: "99.0.1",
          upToDate: false,
          license: "MPL-2.0",
          url: "https://github.com/grouparoo/grouparoo",
        },
      ];
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
