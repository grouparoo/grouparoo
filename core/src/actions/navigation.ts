import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { GrouparooModel } from "../models/GrouparooModel";
import { ActionPermission } from "../models/Permission";
import { Setting } from "../models/Setting";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { ConfigUser } from "../modules/configUser";
import { getGrouparooRunMode } from "../modules/runMode";

type NavigationMode =
  | "authenticated"
  | "unauthenticated"
  | "config:authenticated"
  | "config:unauthenticated";

export interface NavigationItem {
  type: "link" | "divider" | "subNavMenu";
  title?: string;
  icon?: string;
  href?: string;
  mainPathSectionIdx?: number;
  small?: boolean;
  subNavItems?: NavigationItem[];
}

export class NavigationList extends OptionallyAuthenticatedAction {
  name = "navigation:list";
  description = "returns a list of pages for the UI navigation for this user";
  permission: ActionPermission = { topic: "*", mode: "read" };
  outputExample = {};

  async runWithinTransaction({
    session: { teamMember },
  }: {
    session: { teamMember: TeamMember };
  }) {
    const navigationMode: NavigationMode =
      getGrouparooRunMode() === "cli:config"
        ? (await ConfigUser.isAuthenticated())
          ? "config:authenticated"
          : "config:unauthenticated"
        : teamMember
        ? "authenticated"
        : "unauthenticated";

    const models = await GrouparooModel.findAll({
      order: [["name", "asc"]],
    });

    let navResponse: {
      navigationItems: NavigationItem[];
      platformItems: NavigationItem[];
      bottomMenuItems: NavigationItem[];
    };

    switch (navigationMode) {
      case "authenticated":
        navResponse = await this.authenticatedNav(teamMember, models);
        break;
      case "unauthenticated":
        navResponse = await this.unauthenticatedNav();
        break;
      case "config:authenticated":
        navResponse = await this.authenticatedConfigNav(models);
        break;
      case "config:unauthenticated":
        navResponse = await this.unauthenticatedConfigNav();
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

  private static createModelNavigationItems(models: GrouparooModel[]) {
    const navigationItems: NavigationItem[] = [];
    const hasModels = !!models.length;

    if (hasModels) {
      navigationItems.push({ type: "divider" });

      models.forEach((model) => {
        navigationItems.push({
          type: "link",
          title: model.name,
          icon: model.getIcon(),
          href: `/model/${model.id}/overview`,
          mainPathSectionIdx: 2,
          subNavItems: [
            {
              type: "link",
              title: "Model Data",
              icon: "file-import",
              href: `/model/${model.id}/overview#model-data`,
              mainPathSectionIdx: 3,
              small: true,
            },
            {
              type: "link",
              title: "Sample Record",
              icon: "flask",
              href: `/model/${model.id}/overview#sample-record`,
              mainPathSectionIdx: 3,
              small: true,
            },
            {
              type: "link",
              title: "Records",
              icon: "file-alt",
              href: `/model/${model.id}/records`,
              mainPathSectionIdx: 3,
              small: true,
            },
            {
              type: "link",
              title: "Destinations",
              icon: "file-export",
              href: `/model/${model.id}/overview#destinations`,
              mainPathSectionIdx: 3,
              small: true,
            },
          ],
        });
      });
    }

    if (process.env.GROUPAROO_UI_EDITION !== "community") {
      navigationItems.push({
        type: "link",
        title: "New Model",
        icon: "plus",
        href: `/model/new`,
        mainPathSectionIdx: 2,
        small: hasModels,
      });
    }

    if (hasModels) {
      navigationItems.push({ type: "divider" });
    }

    return navigationItems;
  }

  async authenticatedNav(teamMember: TeamMember, models: GrouparooModel[]) {
    const systemPermissionsCount = await teamMember.team.$count("permissions", {
      where: {
        read: true,
        topic: [
          "system",
          "app",
          "file",
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
      { type: "link", title: "Apps", href: "/apps", icon: "th-large" },
    ];

    navigationItems.push(...NavigationList.createModelNavigationItems(models));

    navigationItems.push({
      type: "subNavMenu",
      title: "Platform",
      icon: "terminal",
    });

    const platformItems: NavigationItem[] = [
      { type: "link", title: "Imports", href: "/imports" },
      { type: "link", title: "Exports", href: "/exports" },
      { type: "link", title: "Runs", href: "/runs" },
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

  async unauthenticatedNav() {
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

  async authenticatedConfigNav(models: GrouparooModel[]) {
    const navigationItems: NavigationItem[] = [
      {
        type: "link",
        title: "Apps",
        href: "/apps",
        icon: "th-large",
      },
    ];

    navigationItems.push(...NavigationList.createModelNavigationItems(models));

    return {
      navigationItems,
      platformItems: [] as NavigationItem[],
      bottomMenuItems: [] as NavigationItem[],
    };
  }

  async unauthenticatedConfigNav() {
    const navigationItems: NavigationItem[] = [
      { type: "link", title: "Home", href: "/" },
    ];
    const platformItems: NavigationItem[] = [];
    const bottomMenuItems: NavigationItem[] = [];

    return { navigationItems, platformItems, bottomMenuItems };
  }
}
