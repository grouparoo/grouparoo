import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { Setting } from "../models/Setting";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { ConfigUser } from "../modules/configUser";

type NavigationMode =
  | "authenticated"
  | "unauthenticated"
  | "config:authenticated"
  | "config:unauthenticated";

type NavigationItem = {
  type: string;
  title?: string;
  icon?: string;
  href?: string;
};

export class NavigationList extends OptionallyAuthenticatedAction {
  constructor() {
    super();
    this.name = "navigation:list";
    this.description =
      "returns a list of pages for the UI navigation for this user";
    this.permission = { topic: "*", mode: "read" };
    this.outputExample = {};
  }

  async runWithinTransaction({
    session: { teamMember },
  }: {
    session: { teamMember: TeamMember };
  }) {
    let configUser: ConfigUser.ConfigUserType;
    if (process.env.GROUPAROO_RUN_MODE === "cli:config") {
      configUser = await ConfigUser.get();
    }

    const navigationMode: NavigationMode =
      process.env.GROUPAROO_RUN_MODE === "cli:config"
        ? configUser
          ? "config:authenticated"
          : "config:unauthenticated"
        : teamMember
        ? "authenticated"
        : "unauthenticated";

    let navResponse: {
      navigationItems: NavigationItem[];
      platformItems: NavigationItem[];
      bottomMenuItems: NavigationItem[];
    };

    switch (navigationMode) {
      case "authenticated":
        navResponse = await this.authenticatedNav(teamMember);
        break;
      case "unauthenticated":
        navResponse = await this.unauthenticatedNav(teamMember);
        break;
      case "config:authenticated":
        navResponse = await this.authenticatedConfigNav(configUser);
        break;
      case "config:unauthenticated":
        navResponse = await this.unauthenticatedConfigNav(configUser);
        break;
    }

    const clusterNameSetting = await Setting.findOne({
      where: { pluginName: "core", key: "cluster-name" },
    });

    return {
      navigationMode,
      navigation: navResponse,
      clusterName: {
        default:
          clusterNameSetting?.value &&
          clusterNameSetting.value === clusterNameSetting.defaultValue,
        value: clusterNameSetting?.value || "",
      },
      teamMember: teamMember ? await teamMember.apiData() : undefined,
    };
  }

  async authenticatedNav(teamMember: TeamMember) {
    const systemPermissionsCount = await teamMember.team.$count("permissions", {
      where: {
        read: true,
        topic: [
          "system",
          "app",
          "file",
          "log",
          "import",
          "export",
          "run",
          "notifications",
          "resque",
        ],
      },
    });
    const showSystemLinks = systemPermissionsCount > 0;

    const navigationItems: NavigationItem[] = [
      {
        type: "link",
        title: "Dashboard",
        href: "/dashboard",
        icon: "home",
      },
      {
        type: "link",
        title: "GrouparooRecords",
        href: "/records",
        icon: "user",
      },
      {
        type: "link",
        title: "Properties",
        href: "/properties",
        icon: "address-card",
      },
      { type: "link", title: "Groups", href: "/groups", icon: "users" },
      {
        type: "link",
        title: "Sources",
        href: "/sources",
        icon: "file-import",
      },
      {
        type: "link",
        title: "Destinations",
        href: "/destinations",
        icon: "file-export",
      },
      {
        type: "link",
        title: "Runs",
        href: "/runs",
        icon: "exchange-alt",
      },
      { type: "subNavMenu", title: "Platform", icon: "terminal" },
    ];

    const platformItems: NavigationItem[] = [
      { type: "link", title: "Apps", href: "/apps" },
      { type: "link", title: "Imports", href: "/imports" },
      { type: "link", title: "Exports", href: "/exports" },
      { type: "link", title: "Export Processors", href: "/exportProcessors" },
    ];

    if (showSystemLinks) {
      platformItems.push({
        type: "link",
        title: "Settings",
        href: "/settings/core",
      });

      platformItems.push({
        type: "link",
        title: "Files",
        href: "/files",
      });

      platformItems.push({
        type: "link",
        title: "Logs",
        href: "/logs/list",
      });

      platformItems.push({
        type: "link",
        title: "Teams and Members",
        href: "/teams",
      });

      platformItems.push({
        type: "link",
        title: "API Keys",
        href: "/apiKeys",
      });

      platformItems.push({
        type: "link",
        title: "API Documentation",
        href: "/swagger",
      });

      platformItems.push({
        type: "link",
        title: "Notifications",
        href: "/notifications",
      });

      platformItems.push({
        type: "link",
        title: "Resque",
        href: "/resque/overview",
      });
    }

    const bottomMenuItems: NavigationItem[] = [
      {
        type: "link",
        title: "Account",
        href: "/account",
      },

      { type: "link", title: "About", href: "/about" },

      { type: "link", title: "Help", href: "/help" },

      { type: "divider" },

      {
        type: "link",
        title: "Sign Out",
        href: "/session/sign-out",
      },
    ];

    return { navigationItems, platformItems, bottomMenuItems };
  }

  async unauthenticatedNav(teamMember: TeamMember) {
    const navigationItems: NavigationItem[] = [
      { type: "link", title: "Home", href: "/" },
      { type: "link", title: "About", href: "/about" },
    ];

    let platformItems: NavigationItem[] = [];

    let bottomMenuItems: NavigationItem[] = [];
    const teamsCount = await Team.count();
    if (teamsCount > 0) {
      bottomMenuItems = [
        { type: "link", title: "Sign In", href: "/session/sign-in" },
      ];
    } else {
      bottomMenuItems = [
        { type: "link", title: "Create Team", href: "/team/initialize" },
      ];
    }
    bottomMenuItems.push({ type: "link", title: "Help", href: "/help" });

    return { navigationItems, platformItems, bottomMenuItems };
  }

  async authenticatedConfigNav(configUser: ConfigUser.ConfigUserType) {
    const navigationItems: NavigationItem[] = [
      {
        type: "link",
        title: "Apps",
        href: "/apps",
        icon: "th-large",
      },
      {
        type: "link",
        title: "Sources",
        href: "/sources",
        icon: "file-import",
      },
      {
        type: "link",
        title: "Properties",
        href: "/properties",
        icon: "address-card",
      },
      {
        type: "link",
        title: "GrouparooRecords",
        href: "/records",
        icon: "user",
      },
      {
        type: "link",
        title: "Groups",
        href: "/groups",
        icon: "users",
      },
      {
        type: "link",
        title: "Destinations",
        href: "/destinations",
        icon: "file-export",
      },
    ];
    const platformItems: NavigationItem[] = [];
    const bottomMenuItems: NavigationItem[] = [];

    return { navigationItems, platformItems, bottomMenuItems };
  }

  async unauthenticatedConfigNav(configUser: ConfigUser.ConfigUserType) {
    const navigationItems: NavigationItem[] = [
      { type: "link", title: "Home", href: "/" },
    ];
    const platformItems: NavigationItem[] = [];
    const bottomMenuItems: NavigationItem[] = [];

    return { navigationItems, platformItems, bottomMenuItems };
  }
}
