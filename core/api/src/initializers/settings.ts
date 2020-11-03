import { Initializer } from "actionhero";
import { plugin } from "../modules/plugin";
import { settingTypes } from "../models/Setting";
import * as UUID from "uuid";

interface SettingsListItem {
  key: string;
  title: string;
  defaultValue: string | number;
  description: string;
  type: typeof settingTypes[number];
  variant?: string;
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
      const {
        key,
        title,
        defaultValue,
        description,
        type,
        variant,
      } = settingsList[i];
      await plugin.registerSetting(
        pluginName,
        key,
        title,
        defaultValue,
        description,
        type,
        variant
      );
    }
  }

  async start() {
    const coreSettings: SettingsListItem[] = [
      {
        key: "cluster-name",
        title: "Cluster: Name",
        defaultValue: "My Grouparoo Cluster",
        description:
          "A way to identify this Grouparoo cluster.  Will be displayed in the web interface and sent with Telemetry.",
        type: "string",
      },
      {
        key: "groups-calculation-delay-minutes",
        title: "Groups: Calculation Delay Minutes",
        defaultValue: 60,
        description:
          "How many minutes should wait before recalculating a calculated Group's membership?",
        type: "number",
      },
      {
        key: "runs-profile-batch-size",
        title: "Runs: Profile Batch Size",
        defaultValue: 100,
        description:
          "How many Imports should a Run enqueue in each batch before deferring to associate those Imports already enqueued?",
        type: "number",
      },
      {
        key: "imports-profile-properties-batch-size",
        title: "Imports: Profile Property Batch Size",
        defaultValue: 50,
        description:
          "How many Profile Properties needing import should we process at once?",
        type: "number",
      },
      {
        key: "runs-previous-can-include-errors",
        title: "Runs: Previous Runs with Errors Considered",
        defaultValue: "false",
        description:
          "When creating a new Run for a Source/Schedule, we check the most recent complete run to configure it.  This includes setting the starting HighWaterMark for the Run.  Should we consider those Runs which have an error?",
        type: "boolean",
        variant: "warning",
      },
      {
        key: "exports-profile-batch-size",
        title: "Exports: Profile Batch Size",
        defaultValue: 100,
        description:
          "How many Profiles should a Run try to send at once to Destinations which support batch exporting?",
        type: "number",
      },
      {
        key: "profiles-default-country-code",
        title: "Profile: Default Country Code",
        defaultValue: "US",
        description:
          "The default country code Grouparoo will use to format phone numbers and display data",
        type: "string",
      },
      {
        key: "sweeper-delete-old-runs-days",
        title: "Sweeper: Delete Old Runs Days",
        defaultValue: 31,
        description:
          "How many days should we keep Run records for on the server once they are stopped or complete?",
        type: "number",
      },
      {
        key: "sweeper-delete-old-imports-days",
        title: "Sweeper: Delete Old Imports Days",
        defaultValue: 31,
        description:
          "How many days should we keep Import records for on the server?",
        type: "number",
      },
      {
        key: "sweeper-delete-old-exports-days",
        title: "Sweeper: Delete Old Exports Days",
        defaultValue: 31,
        description:
          "How many days should we keep Export records for on the server?  We will keep the most recent export for each Profile & Destination.",
        type: "number",
      },
      {
        key: "sweeper-delete-old-logs-days",
        title: "Sweeper: Delete Old Logs Days",
        defaultValue: 31,
        description:
          "How many days should we keep Log records for on the server?",
        type: "number",
      },
    ];

    const interfaceSettings: SettingsListItem[] = [
      {
        key: "display-startup-steps",
        title: "Display Startup Steps",
        defaultValue: "true",
        description:
          "Should Grouparoo display the Setup Steps to all Team Members?  You can always visit /setup to see your setup steps.",
        type: "boolean",
      },
    ];

    const telemetrySettings: SettingsListItem[] = [
      {
        key: "customer-guid",
        title: "Customer Guid",
        defaultValue: `tcs_${UUID.v4()}`,
        description: "A unique, anonymous ID for this Grouparoo cluster.",
        type: "string",
      },
      {
        key: "customer-license",
        title: "Customer License",
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
