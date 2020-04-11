import { Action, api } from "actionhero";
import { Team } from "../models/Team";

export class NavigationList extends Action {
  constructor() {
    super();
    this.name = "navigation:list";
    this.description =
      "returns a list of pages for the UI navigation for this user";
    this.middleware = ["optional-team-member"];
    this.outputExample = {};
  }

  async run({ response, session: { teamMember } }) {
    let navigationItems = [];
    let bottomMenuItems = [];
    let platformItems = [];

    let navigationMode = "unauthenticated";
    let administer = false;
    if (teamMember) {
      navigationMode = "authenticated";
      if (teamMember.team.administer) {
        administer = true;
      }
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
          title: "Profile Property Rules",
          href: "/profilePropertyRules",
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
        { type: "subNavMenu", title: "Platform", icon: "terminal" },
      ];

      platformItems.push(
        { type: "link", title: "Apps", href: "/apps" },
        { type: "link", title: "Runs", href: "/runs" },
        { type: "link", title: "Imports", href: "/imports" },
        { type: "link", title: "Exports", href: "/exports" }
      );

      if (administer) {
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
          href: "/logs",
        });

        platformItems.push({
          type: "link",
          title: "Teams and Members",
          href: "/teams",
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

      bottomMenuItems.push({ type: "divider" });

      bottomMenuItems.push({
        type: "link",
        title: "Sign Out",
        href: "/session/sign-out",
      });
    }

    response.navigationMode = navigationMode;
    response.navigation = {
      navigationItems,
      platformItems,
      bottomMenuItems,
    };
  }
}
