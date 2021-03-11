import { Team } from "./../../models/Team";
import { plugin } from "../plugin";
import { App } from "../../models/App";
import { Source } from "../../models/Source";
import { Property } from "../../models/Property";
import { Profile } from "../../models/Profile";
import { Schedule } from "../../models/Schedule";
import { Run } from "../../models/Run";
import { Group } from "../../models/Group";
import { GroupMember } from "../../models/GroupMember";
import { Destination } from "../../models/Destination";
import { Export } from "../../models/Export";

const configURL = "https://www.grouparoo.com/docs/config";

export namespace SetupStepOps {
  export type setupStepDescription = {
    position: number;
    key: string;
    title: string;
    description: string;
    href: string;
    cta: string;
    helpLink: string;
    showCtaOnCommunity?: boolean;
    check?: () => Promise<boolean>;
    outcome?: () => Promise<string>;
  };

  export const setupStepDescriptions: Array<setupStepDescription> = [
    {
      position: 1,
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
    },
    {
      position: 2,
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
    },
    {
      position: 3,
      key: "create_a_source",
      title: "Create a Source",
      description:
        "Add your first Source to Grouparoo.  Sources connect to Apps and are able to import data.",
      href: "/sources",
      cta: "Add a Source",
      helpLink: `${configURL}/sources`,
      check: async () => {
        const count = await Source.count();
        return count > 0;
      },
    },
    {
      position: 4,
      key: "create_a_unique_profile_property",
      title: "Create a Unique Profile Property",
      description:
        "Create your first unique Property.  Grouparoo needs at least one unique Property to identify your Profiles (email, userId, etc).  You can have more than one!",
      href: "/properties",
      cta: "Add a Profile Property",
      helpLink: `${configURL}/properties`,
      check: async () => {
        const count = await Property.count({
          where: { unique: true },
        });
        return count > 0;
      },
      outcome: async () => {
        const count = await Profile.count();
        return `${count} Profiles created`;
      },
    },
    {
      position: 5,
      key: "create_a_schedule",
      title: "Create a Schedule",
      description:
        "Create a Schedule to import data from your Source regularly.  You can have a Schedule for each Source.",
      href: "/sources",
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
    },
    {
      position: 6,
      key: "create_a_group",
      title: "Create a Group",
      description:
        "Create a Group based on the Properties of your Profiles.  Groups will be kept up-to-date with changes to your Profile's Properties.",
      href: "/groups",
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
    },
    {
      position: 7,
      key: "create_a_destination",
      title: "Create a Destination",
      description:
        "Create a Destination to sync your Profiles and Group Memberships.  Grouparoo will automatically send all new information to the Destinations relevant to each Profile.",
      href: "/destinations",
      cta: "Add a Destination",
      helpLink: `${configURL}/destinations`,
      check: async () => {
        const count = await Destination.count();
        return count > 0;
      },
      outcome: async () => {
        const count = await Export.count();
        return `${count} Profiles exported to a Destination`;
      },
    },
  ];
}
