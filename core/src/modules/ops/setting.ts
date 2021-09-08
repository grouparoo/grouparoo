import * as UUID from "uuid";
import { Op } from "sequelize";
import { Setting, settingTypes } from "../../models/Setting";
import { plugin } from "../../modules/plugin";

export namespace SettingOps {
  export interface SettingsListItem {
    key: string;
    title: string;
    defaultValue: string | number;
    description: string;
    type: typeof settingTypes[number];
    variant?: string;
  }

  export async function prepare() {
    const settingKeys: string[] = [
      ...coreSettings,
      ...interfaceSettings,
      ...telemetrySettings,
    ].map(({ key }) => key);

    await cleanSettings(settingKeys);

    await this.registerSettingsArray(coreSettings, "core");
    await this.registerSettingsArray(interfaceSettings, "interface");
    await this.registerSettingsArray(telemetrySettings, "telemetry");
  }

  export async function cleanSettings(inUseKeys: string[]) {
    return Setting.destroy({
      where: {
        key: { [Op.notIn]: inUseKeys },
      },
    });
  }

  export async function registerSettingsArray(
    settingsList: SettingsListItem[],
    pluginName: string
  ) {
    for (const i in settingsList) {
      const { key, title, defaultValue, description, type, variant } =
        settingsList[i];
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

  export const coreSettings: SettingsListItem[] = [
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
      defaultValue: 60 * 24,
      description:
        "How many minutes should wait before recalculating a calculated Group's membership?",
      type: "number",
    },
    {
      key: "runs-recurring-internal-run-frequency-hours",
      title: "Runs: Recurring Internal Run Frequency Hours",
      defaultValue: 0,
      description:
        "Should Grouparoo periodically re-import all of your profiles, and if so, how long between runs (in hours)?",
      type: "number",
    },
    {
      key: "imports-retry-delay-seconds",
      title: "Imports Retry Delay Seconds",
      defaultValue: 60 * 30, // 30 minutes
      description:
        "How long before Grouparoo considers a started but not-yet-complete Import to have stalled and try again?",
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
      key: "exports-retry-delay-seconds",
      title: "Exports Retry Delay Seconds",
      defaultValue: 60 * 30, // 30 minutes
      description:
        "How long before Grouparoo considers a started but not-yet-complete Export to have stalled and try again?",
      type: "number",
    },
    {
      key: "exports-max-retries-count",
      title: "Exports Maximum Retry Count",
      defaultValue: 5,
      description:
        "How many times should we attempt to retry an Export before considering it failed?",
      type: "number",
    },
    {
      key: "export-processors-retry-delay-seconds",
      title: "Export Processors Retry Delay Seconds",
      defaultValue: 60 * 30, // 30 minutes
      description:
        "How long before Grouparoo considers a started but not-yet-complete Export Processor to have stalled and try again?",
      type: "number",
    },
    {
      key: "export-processors-max-retries-count",
      title: "Export Processors Maximum Retry Count",
      defaultValue: 10,
      description:
        "How many times should we attempt to check on an Export Processor before considering it failed?",
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
      key: "confirm-profiles-days",
      title: "Confirm Profile Existence Days",
      defaultValue: 7,
      description:
        "How often should Grouparoo check that a Profile still exists in your Source, deleting the Profile if it has been removed? Setting to `0` will disable this check.",
      type: "number",
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
      defaultValue: 7,
      description:
        "How many days should we keep Log records for on the server?",
      type: "number",
    },
  ];

  export const interfaceSettings: SettingsListItem[] = [
    {
      key: "status-calculation-frequency-seconds",
      title: "Status Calculation Frequency Seconds",
      defaultValue: 10,
      description:
        "How often should Grouparoo calculate updated status and totals for the UI?  This includes information on the Dashboard, pending Runs, and Resque information.  For larger clusters, calculating this often may have adverse effects.",
      type: "number",
    },
  ];

  export const telemetrySettings: SettingsListItem[] = [
    {
      key: "customer-id",
      title: "Customer Id",
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
}
