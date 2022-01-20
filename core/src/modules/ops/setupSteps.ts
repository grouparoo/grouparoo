import { plugin } from "../plugin";
import { GrouparooModel } from "../../models/GrouparooModel";
import { App } from "../../models/App";
import { Source } from "../../models/Source";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";
import { getGrouparooRunMode } from "../runMode";

const configURL = "https://www.grouparoo.com/docs/config";

export type SetupStepDescription = {
  position?: number;
  key: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  helpLink: string;
  showCtaOnCommunity?: boolean;
  check?: () => Promise<boolean>;
  outcome?: () => Promise<string>;
  disabled: () => Promise<boolean>;
  runModes: string[];
};

export const getSetupStepDescriptions = (modelId?: string) => {
  const allSetupStepDescriptions: SetupStepDescription[] = [
    {
      key: "install_grouparoo",
      title: "Install Grouparoo",
      description: "Install the Grouparoo package.",
      href: undefined,
      cta: undefined,
      showCtaOnCommunity: false,
      helpLink: `https://www.grouparoo.com/docs/installation`,
      check: async () => true,
      disabled: async () => false,
      runModes: ["cli:config"],
    },
    {
      key: "name_your_grouparoo_instance",
      title: "Name your Grouparoo Instance",
      description: "Give your Grouparoo cluster a name.",
      href: "/settings/core",
      cta: "Change your Grouparoo Cluster Name",
      showCtaOnCommunity: true,
      helpLink: `${configURL}/settings`,
      check: async () => {
        const setting = await plugin.readSetting("core", "cluster-name");
        return setting.value !== setting.defaultValue;
      },
      disabled: async () => false,
      runModes: ["cli:start", "cli:run"],
    },
    {
      key: "add_an_app",
      title: "Add an App",
      description:
        "Add your first App to Grouparoo.  Apps are used to connect to your Databases and APIs.",
      href: "/apps",
      cta: "Add an App",
      helpLink: `${configURL}/apps`,
      check: async () => {
        const count = await App.count();
        return count > 0;
      },
      disabled: async () => false,
      runModes: ["cli:start", "cli:run", "cli:config"],
    },
    {
      key: "add_a_model",
      title: "Add a Model",
      description:
        "Models define the shape of your Records.  You can add new Models and customize them when you begin adding Sources and Properties.",
      href: "/model/new",
      cta: "Add a Model",
      helpLink: `${configURL}/models`,
      check: async () => {
        const count = await GrouparooModel.count();
        return count > 0;
      },
      disabled: async () => false,
      runModes: ["cli:start", "cli:run", "cli:config"],
    },
    {
      key: "configure_a_model",
      title: "Define your Model Data",
      description:
        "Create Sources and Properties to define the data in your Grouparoo Model.",
      href: modelId ? `/model/${modelId}/overview` : "/model/new",
      cta: "Configure the Model",
      helpLink: `${configURL}/sources`,
      check: async () => {
        const count = await Source.count();
        return count > 0;
      },
      disabled: async () =>
        (await App.count()) === 0 || (await GrouparooModel.count()) === 0,
      runModes: ["cli:start", "cli:run", "cli:config"],
    },
    {
      key: "create_a_destination",
      title: "Create a Destination",
      description:
        "Create a Destination to sync your Records and Group Memberships.  Grouparoo will automatically send all new information to the Destinations relevant to each Record.",
      href: modelId ? `/model/${modelId}/overview` : "/model/new",
      cta: "Add a Destination",
      helpLink: `${configURL}/destinations`,
      check: async () => {
        const count = await Destination.count();
        return count > 0;
      },
      outcome: async () => {
        const count = await Export.count();
        return `${count} Records exported to a Destination`;
      },
      disabled: async () => (await Source.count()) === 0,
      runModes: ["cli:start", "cli:run", "cli:config"],
    },
  ];

  return allSetupStepDescriptions
    .filter((ssd) =>
      ssd.runModes.includes(getGrouparooRunMode() ?? "cli:start")
    )
    .map((ssd, idx) => {
      return { ...ssd, position: idx + 1 };
    });
};
