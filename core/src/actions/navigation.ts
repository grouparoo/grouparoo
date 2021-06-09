import { OptionallyAuthenticatedAction } from "../classes/actions/optionallyAuthenticatedAction";
import { Setting } from "../models/Setting";
import { Team } from "../models/Team";
import { TeamMember } from "../models/TeamMember";
import { ConfigUser } from "../modules/configUser";

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
    let navigationItems = [];
    let bottomMenuItems = [];
    let platformItems = [];

    let navigationMode =
      process.env.GROUPAROO_RUN_MODE === "cli:config"
        ? "config:unauthenticated"
        : "unauthenticated";
    let showSystemLinks = false;
    if (teamMember) {
      navigationMode = "authenticated";
      const permissions = await teamMember.team.$get("permissions");
      permissions.map((prm) => {
        if (prm.topic === "system" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "app" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "file" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "log" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "import" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "export" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "run" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "notifications" && prm.read) {
          showSystemLinks = true;
        } else if (prm.topic === "resque" && prm.read) {
          showSystemLinks = true;
        }
      });
    }

    if (navigationMode === "unauthenticated") {
      navigationItems = [
        { type: "link", title: "Home", href: "/" },
        { type: "link", title: "About", href: "/about" },
      ];

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
    }

    if (navigationMode === "authenticated") {
      navigationItems = [
        {
          type: "link",
          title: "Dashboard",
          href: "/dashboard",
          icon: "home",
        },
        { type: "link", title: "Profiles", href: "/profiles", icon: "user" },
        {
          type: "link",
          title: "Properties",
          href: "/properties",
          icon: "address-card",
        },
        { type: "link", title: "Groups", href: "/groups", icon: "users" },
        {
          type: "link",
          title: "Events",
          href: "/events/overview",
          icon: "stream",
        },
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

      platformItems.push(
        { type: "link", title: "Apps", href: "/apps" },
        { type: "link", title: "Imports", href: "/imports" },
        { type: "link", title: "Exports", href: "/exports" },
        { type: "link", title: "Export Processors", href: "/exportProcessors" }
      );

      if (showSystemLinks) {
        platformItems.push({
          type: "link",
          title: "Settings",
          href: "/settings",
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
          href: "/resque",
        });
      }

      bottomMenuItems = [];
      bottomMenuItems.push({
        type: "link",
        title: "Account",
        href: "/account",
      });
      bottomMenuItems.push({ type: "link", title: "About", href: "/about" });
      bottomMenuItems.push({ type: "link", title: "Help", href: "/help" });

      bottomMenuItems.push({ type: "divider" });

      bottomMenuItems.push({
        type: "link",
        title: "Sign Out",
        href: "/session/sign-out",
      });
    }

    if (navigationMode === "config:unauthenticated") {
      navigationItems = [{ type: "link", title: "Home", href: "/" }];
      const user = await ConfigUser.get();

      if (user) {
        navigationMode = "config:authenticated";

        navigationItems = [
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
            title: "Profiles",
            href: "/profiles",
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
      }
    }

    const clusterNameSetting = await Setting.findOne({
      where: { pluginName: "core", key: "cluster-name" },
    });

    return {
      navigationMode,
      clusterName: {
        default:
          clusterNameSetting?.value &&
          clusterNameSetting.value === clusterNameSetting.defaultValue,
        value: clusterNameSetting?.value || "",
      },
      teamMember: teamMember ? await teamMember.apiData() : undefined,
      navigation: {
        navigationItems,
        platformItems,
        bottomMenuItems,
      },
    };
  }
}
