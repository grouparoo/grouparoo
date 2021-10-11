import { Team } from "./../../models/Team";
import { plugin } from "../plugin";
import { GrouparooModel } from "../../models/GrouparooModel";
import { App } from "../../models/App";
import { Source } from "../../models/Source";
import { Property } from "../../models/Property";
import { GrouparooRecord } from "../../models/GrouparooRecord";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { Group } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";

const configURL = "https://www.grouparoo.com/docs/config";

export namespace SetupStepOps {
  export type setupStepDescription = {
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
  };

  export const setupStepDescriptions = (
    modelId?: string
  ): Array<setupStepDescription> => {
    const allSetupStepDescriptions: { [key: string]: setupStepDescription } = {
      install_grouparoo: {
        key: "install_grouparoo",
        title: "Install Grouparoo",
        description: "Install the Grouparoo package.",
        href: undefined,
        cta: undefined,
        showCtaOnCommunity: false,
        helpLink: `https://www.grouparoo.com/docs/installation`,
        check: async () => true,
        disabled: async () => false,
      },
      name_your_grouparoo_instance: {
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
      },
      add_a_model: {
        key: "add_a_model",
        title: "Add a Model",
        description:
          "Models define the shape of your Records.  Grouparoo uses a Profile Model by default.  You can add new Models and customize them when you begin adding Sources and Properties.",
        href: "/models",
        cta: "Add a Model",
        helpLink: `${configURL}/models`,
        check: async () => {
          const count = await GrouparooModel.count();
          return count > 0;
        },
        disabled: async () => false,
      },
      add_an_app: {
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
      },
      create_a_source: {
        key: "create_a_source",
        title: "Create a Source",
        description:
          "Add your first Source to Grouparoo.  Sources connect to Apps and are able to import data.",
        href: modelId ? `/model/${modelId}/sources` : "/models",
        cta: "Add a Source",
        helpLink: `${configURL}/sources`,
        check: async () => {
          const count = await Source.count();
          return count > 0;
        },
        disabled: async () => (await App.count()) === 0,
      },
      create_a_unique_record_property: {
        key: "create_a_unique_record_property",
        title: "Create a Unique Record Property",
        description:
          "Create your first unique Property.  Grouparoo needs at least one unique Property to identify your Records (email, userId, etc).  You can have more than one!",
        href: modelId ? `/model/${modelId}/properties` : "/models",
        cta: "Add a Record Property",
        helpLink: `${configURL}/properties`,
        check: async () => {
          const count = await Property.count({
            where: { unique: true },
          });
          return count > 0;
        },
        outcome: async () => {
          const count = await GrouparooRecord.count();
          return `${count} Records created`;
        },
        disabled: async () => (await Source.count()) === 0,
      },
      create_a_schedule: {
        key: "create_a_schedule",
        title: "Create a Schedule",
        description:
          "Create a Schedule to import data from your Source regularly.  You can have a Schedule for each Source.",
        href: modelId ? `/model/${modelId}/sources` : "/models",
        cta: "Add a Schedule",
        helpLink: `${configURL}/sources`,
        check: async () => {
          const count = await Schedule.count();
          return count > 0;
        },
        outcome: async () => {
          const count = await Run.count();
          return `${count} Runs created`;
        },
        disabled: async () => (await Source.count()) === 0,
      },
      create_a_sample_record: {
        key: "create_a_sample_record",
        title: "Create a Sample Record",
        description:
          "Create a Sample Record so you can validate your configuration is importing the correct data. These Records will allow you to test Group building and your Destination settings and mappings.",
        href: "/record/new",
        cta: "Add a Sample Record",
        helpLink: `${configURL}/records`,
        check: async () => {
          const count = await GrouparooRecord.count();
          return count > 0;
        },
        disabled: async () => (await Property.count()) === 0,
      },
      create_a_group: {
        key: "create_a_group",
        title: "Create a Group",
        description:
          "Create a Group based on the Properties of your Records.  Groups will be kept up-to-date with changes to your Record's Properties.",
        href: modelId ? `/model/${modelId}/groups` : "/models",
        cta: "Add a Group",
        helpLink: `${configURL}/groups`,
        check: async () => {
          const count = await Group.count();
          return count > 0;
        },
        outcome: async () => {
          const count = await GroupMember.count();
          return `${count} Group Memberships created`;
        },
        disabled: async () => (await Property.count()) === 0,
      },
      create_a_destination: {
        key: "create_a_destination",
        title: "Create a Destination",
        description:
          "Create a Destination to sync your Records and Group Memberships.  Grouparoo will automatically send all new information to the Destinations relevant to each Record.",
        href: modelId ? `/model/${modelId}/destinations` : "/models",
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
        disabled: async () => (await Property.count()) === 0,
      },
    };

    const setupSteps =
      process.env.GROUPAROO_RUN_MODE === "cli:config"
        ? [
            {
              ...allSetupStepDescriptions.install_grouparoo,
              position: 1,
            },
            {
              ...allSetupStepDescriptions.add_an_app,
              position: 2,
            },
            {
              ...allSetupStepDescriptions.add_a_model,
              position: 3,
            },
            {
              ...allSetupStepDescriptions.create_a_source,
              position: 4,
            },
            {
              ...allSetupStepDescriptions.create_a_unique_record_property,
              position: 5,
            },
            {
              ...allSetupStepDescriptions.create_a_schedule,
              position: 6,
            },
            {
              ...allSetupStepDescriptions.create_a_sample_record,
              position: 7,
            },

            {
              ...allSetupStepDescriptions.create_a_group,
              position: 8,
            },
            {
              ...allSetupStepDescriptions.create_a_destination,
              position: 9,
            },
          ]
        : [
            {
              ...allSetupStepDescriptions.name_your_grouparoo_instance,
              position: 1,
            },
            {
              ...allSetupStepDescriptions.add_an_app,
              position: 2,
            },
            {
              ...allSetupStepDescriptions.add_a_model,
              position: 3,
            },
            {
              ...allSetupStepDescriptions.create_a_source,
              position: 4,
            },
            {
              ...allSetupStepDescriptions.create_a_unique_record_property,
              position: 5,
            },
            {
              ...allSetupStepDescriptions.create_a_schedule,
              position: 6,
            },

            {
              ...allSetupStepDescriptions.create_a_group,
              position: 7,
            },
            {
              ...allSetupStepDescriptions.create_a_destination,
              position: 8,
            },
          ];

    return setupSteps;
  };
}
