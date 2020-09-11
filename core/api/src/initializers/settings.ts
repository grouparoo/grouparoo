import { Initializer } from "actionhero";
import { plugin } from "../modules/plugin";
import { settingTypes } from "../models/Setting";
import * as UUID from "uuid";

interface SettingsListItem {
  key: string;
  defaultValue: string | number;
  description: string;
  type: typeof settingTypes[number];
}
export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = "settings";
  }

  async registerSettingsArray(
    settingsList: SettingsListItem[],
    pluginName: string
  ) {
    for (const i in settingsList) {
      const { key, defaultValue, description, type } = settingsList[i];
      await plugin.registerSetting(
        pluginName,
        key,
        defaultValue,
        description,
        type
      );
    }
  }

  async start() {
    const coreSettings: SettingsListItem[] = [
      {
        key: "cluster-name",
        defaultValue: "My Grouparoo Cluster",
        description:
          "A way to identify this Grouparoo cluster.  Will be displayed in the web interface and sent with Telemetry.",
        type: "string",
      },
      {
        key: "groups-calculation-delay-minutes",
        defaultValue: 60,
        description:
          "How many minutes should wait before recalculating a calculated Group's membership?",
        type: "number",
      },
      {
        key: "runs-profile-batch-size",
        defaultValue: 100,
        description:
          "How many Profiles or Imports should a Run enqueue in each batch before deferring to process those Imports already enqueued?",
        type: "number",
      },
      {
        key: "export-profile-batch-size",
        defaultValue: 100,
        description:
          "How many Profiles should a Run try to send at once to Destinations which support batch exporting?",
        type: "number",
      },
      {
        key: "default-country-code",
        defaultValue: "US",
        description:
          "The default country code Grouparoo will use to format phone numbers and display data",
        type: "string",
      },
      {
        key: "sweeper-delete-old-logs-days",
        defaultValue: 31,
        description:
          "How many days should we keep Log records for on the server?",
        type: "number",
      },
      {
        key: "sweeper-delete-old-imports-days",
        defaultValue: 31,
        description:
          "How many days should we keep Import records for on the server?",
        type: "number",
      },
      {
        key: "sweeper-delete-old-exports-days",
        defaultValue: 31,
        description:
          "How many days should we keep Export records for on the server?  We will keep the most recent export for each Profile & Destination.",
        type: "number",
      },
    ];

    const interfaceSettings: SettingsListItem[] = [
      {
        key: "display-startup-steps",
        defaultValue: "true",
        description:
          "Should Grouparoo display the Setup Steps to all Team Members?  You can always visit /setup to see your setup steps.",
        type: "boolean",
      },
    ];

    const telemetrySettings: SettingsListItem[] = [
      {
        key: "customer-guid",
        defaultValue: `tcs_${UUID.v4()}`,
        description: "A unique, anonymous ID for this Grouparoo cluster.",
        type: "string",
      },
      {
        key: "customer-license",
        defaultValue: ``,
        description: "Your Grouparoo License Key (for paid features).",
        type: "string",
      },
    ];

    await this.registerSettingsArray(coreSettings, "core");
    await this.registerSettingsArray(interfaceSettings, "interface");
    await this.registerSettingsArray(telemetrySettings, "telemetry");
  }
}
