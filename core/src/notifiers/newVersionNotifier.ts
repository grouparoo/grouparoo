import { Notifier, NotifierMessagePayload } from "../classes/notifier";
import { listPlugins } from "../modules/plugins";

export class NewVersionNotifier extends Notifier {
  constructor() {
    super();
    this.from = "Grouparoo Version Update Notifications";
    this.messageLimit = 1;
  }

  async buildNotification() {
    const plugins = await listPlugins();
    const core = plugins.find((p) => p.name === "@grouparoo/core");
    const otherPluginsWithUpdates = plugins
      .filter((p) => p.name !== "@grouparoo/core")
      .filter((p) => p.upToDate === false);

    if (core.upToDate) {
      await this.clearNotifications();
      return;
    }

    if (core.latestVersion === "unknown") return;

    const notification: NotifierMessagePayload = {
      subject: "There's a new version of Grouparoo!",
      body: `
**There is a new version of Grouparoo available!**

You are currently running version **${
        core.currentVersion
      }** of @grouparoo/core, but the latest version is **${
        core.latestVersion
      }**.  We suggest that you upgrade your server as soon as possible to take advantage of all the new features and fixes.

You can learn more about upgrading Grouparoo at [www.grouparoo.com](https://www.grouparoo.com/docs).


${
  otherPluginsWithUpdates
    ? `There are also other plugins with updates available:
${otherPluginsWithUpdates
  .map((p) => ` * ${p.name} (${p.currentVersion} -> ${p.latestVersion})`)
  .join("\r\n")}`
    : null
}

Thanks, The Grouparoo Team
`,
      cta: "See what upgrades are available",
      ctaLink: "/about",
    };

    return notification;
  }
}
