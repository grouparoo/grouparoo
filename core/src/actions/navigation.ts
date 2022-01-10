import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { GrouparooModel } from "../models/GrouparooModel";
import { ActionPermission } from "../models/Permission";
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
  type: "link" | "divider" | "subNavMenu" | "modelMenu";
  title?: string;
  icon?: string;
  href?: string;
  mainPathSectionIdx?: number;
};

export class NavigationList extends OptionallyAuthenticatedAction {
  name = "navigation:list";
  description = "returns a list of pages for the UI navigation for this user";
  permission: ActionPermission = { topic: "*", mode: "read" };
  outputExample = {};
  inputs = {
    modelId: { required: false },
  };

  async runWithinTransaction({
    session: { teamMember },
    params,
  }: {
    session: { teamMember: TeamMember };
    params: { modelId: string };
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

    const isAuthenticated =
      navigationMode === "authenticated" ||
      navigationMode === "config:authenticated";

    const models = await GrouparooModel.findAll({
      order: [["createdAt", "asc"]],
    });
    const currentModel = models.find((m) => m.id === params.modelId);
    const currentModelId = currentModel
      ? currentModel.id
      : models.length > 0
      ? models[0].id
      : null;

    let navResponse: {
      navigationItems: NavigationItem[];
      platformItems: NavigationItem[];
      bottomMenuItems: NavigationItem[];
    };

    switch (navigationMode) {
      case "authenticated":
        navResponse = await this.authenticatedNav(teamMember, currentModelId);
        break;
      case "unauthenticated":
        navResponse = await this.unauthenticatedNav(teamMember);
        break;
      case "config:authenticated":
        navResponse = await this.authenticatedConfigNav(
          configUser,
          currentModelId
        );
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
      navigationModel: isAuthenticated
        ? {
            value: currentModelId,
            options: await Promise.all(models.map((m) => m.apiData())),
          }
        : { value: null, options: [] },
    };
  }

  async authenticatedNav(teamMember: TeamMember, modelId?: string) {
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
      { type: "modelMenu" },
      {
        type: "link",
        title: "Dashboard",
        href: "/dashboard",
        icon: "home",
      },
    ];

    if (modelId) {
      navigationItems.push(
        {
          type: "link",
          title: "Records",
          href: `/model/${modelId}/records`,
          mainPathSectionIdx: 3,
          icon: "list",
        },
        {
          type: "link",
          title: "Properties",
          href: `/model/${modelId}/properties`,
          mainPathSectionIdx: 3,
          icon: "address-card",
        },
        {
          type: "link",
          title: "Groups",
          href: `/model/${modelId}/groups`,
          mainPathSectionIdx: 3,
          icon: "users",
        },
        {
          type: "link",
          title: "Sources",
          href: `/model/${modelId}/sources`,
          mainPathSectionIdx: 3,
          icon: "file-import",
        },
        {
          type: "link",
          title: "Destinations",
          href: `/model/${modelId}/destinations`,
          mainPathSectionIdx: 3,
          icon: "file-export",
        }
      );
    }

    navigationItems.push({
      type: "subNavMenu",
      title: "Platform",
      icon: "terminal",
    });

    const platformItems: NavigationItem[] = [
      { type: "link", title: "Apps", href: "/apps" },
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
        title: "Logs",
        href: "/logs/list",
      });

      platformItems.push({
        type: "link",
        title: "Models",
        href: "/models",
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

  async authenticatedConfigNav(
    configUser: ConfigUser.ConfigUserType,
    modelId?: string
  ) {
    const navigationItems: NavigationItem[] = [
      { type: "modelMenu" },
      {
        type: "link",
        title: "Apps",
        href: "/apps",
        icon: "th-large",
      },
      {
        type: "link",
        title: "Models",
        href: "/models",
        icon: "clipboard-list",
      },
    ];

    if (modelId) {
      navigationItems.push(
        {
          type: "link",
          title: "Sources",
          href: `/model/${modelId}/sources`,
          mainPathSectionIdx: 3,
          icon: "file-import",
        },
        {
          type: "link",
          title: "Properties",
          href: `/model/${modelId}/properties`,
          mainPathSectionIdx: 3,
          icon: "address-card",
        },
        {
          type: "link",
          title: "Records",
          href: `/model/${modelId}/records`,
          mainPathSectionIdx: 3,
          icon: "list",
        },
        {
          type: "link",
          title: "Groups",
          href: `/model/${modelId}/groups`,
          mainPathSectionIdx: 3,
          icon: "users",
        },
        {
          type: "link",
          title: "Destinations",
          href: `/model/${modelId}/destinations`,
          mainPathSectionIdx: 3,
          icon: "file-export",
        }
      );
    }

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
