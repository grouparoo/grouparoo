export const DEFAULT = {
  routes: (api) => {
    // prettier-ignore
    return {
      get: [
        { path: "/:apiVersion/status", action: "status" },
        { path: "/:apiVersion/plugins", action: "plugins" },
        { path: "/:apiVersion/session", action: "session:view" },
        { path: "/:apiVersion/totals", action: "totals" },
        { path: "/:apiVersion/logs", action: "logs:list" },
        { path: "/:apiVersion/imports", action: "imports:list" },
        { path: "/:apiVersion/import/:guid", action: "import:view" },
        { path: "/:apiVersion/exports", action: "exports:list" },
        { path: "/:apiVersion/export/:guid", action: "export:view" },
        { path: "/:apiVersion/navigation", action: "navigation:list" },
        { path: "/:apiVersion/teams", action: "teams:list" },
        { path: "/:apiVersion/team/:guid", action: "team:view" },
        { path: "/:apiVersion/teamMembers", action: "teamMembers:list" },
        { path: "/:apiVersion/team/:guid/members", action: "teamMembers:list" },
        { path: "/:apiVersion/team/member/:guid", action: "teamMember:view" },
        { path: "/:apiVersion/groups", action: "groups:list" },
        { path: "/:apiVersion/groups/ruleOptions",action: "groups:ruleOptions" },
        { path: "/:apiVersion/group/:guid", action: "group:view" },
        { path: "/:apiVersion/group/:guid/profiles", action: "profiles:list" },
        { path: "/:apiVersion/group/:guid/destinations", action: "group:listDestinations" },
        { path: "/:apiVersion/group/:guid/countComponentMembers", action: "group:countComponentMembers" },
        { path: "/:apiVersion/group/:guid/countPotentialMembers", action: "group:countPotentialMembers" },
        { path: "/:apiVersion/group/:guid/historicCounts", action: "group:viewHistoricCounts" },
        { path: "/:apiVersion/profilePropertyRules", action: "profilePropertyRules:list" },
        { path: "/:apiVersion/profilePropertyRuleOptions", action: "profilePropertyRules:options" },
        { path: "/:apiVersion/profilePropertyRule/:guid", action: "profilePropertyRule:view" },
        { path: "/:apiVersion/profilePropertyRule/:guid/filterOptions", action: "profilePropertyRule:filterOptions" },
        { path: "/:apiVersion/profilePropertyRule/:guid/groups", action: "profilePropertyRule:groups" },
        { path: "/:apiVersion/profilePropertyRule/:guid/profilePreview", action: "profilePropertyRule:profilePreview" },
        { path: "/:apiVersion/profiles", action: "profiles:list" },
        { path: "/:apiVersion/profile/:guid", action: "profile:view" },
        { path: "/:apiVersion/profile/:profileGuid/logs", action: "logs:list" },
        { path: "/:apiVersion/account", action: "account:view" },
        { path: "/:apiVersion/settings", action: "settings:list" },
        { path: "/:apiVersion/apps", action: "apps:list" },
        { path: "/:apiVersion/sources", action: "sources:list" },
        { path: "/:apiVersion/source/:guid/connectionOptions", action: "source:connectionOptions" },
        { path: "/:apiVersion/source/:guid/preview", action: "source:preview" },
        { path: "/:apiVersion/runs", action: "runs:list" },
        { path: "/:apiVersion/run/:guid", action: "run:view" },
        { path: "/:apiVersion/appOptions", action: "app:options" },
        { path: "/:apiVersion/app/:guid/optionOptions", action: "app:optionOptions" },
        { path: "/:apiVersion/app/:guid", action: "app:view" },
        { path: "/:apiVersion/sources/connectionApps", action: "sources:connectionApps" },
        { path: "/:apiVersion/source/:guid", action: "source:view" },
        { path: "/:apiVersion/schedules", action: "schedules:list" },
        { path: "/:apiVersion/schedule/:guid", action: "schedule:view" },
        { path: "/:apiVersion/destinations/connectionApps", action: "destinations:connectionApps" },
        { path: "/:apiVersion/destinations", action: "destinations:list" },
        { path: "/:apiVersion/destinationOptions", action: "destination:options" },
        { path: "/:apiVersion/destination/:guid/columns", action: "destination:columns" },
        { path: "/:apiVersion/destination/:guid", action: "destination:view" },
        { path: "/:apiVersion/destination/:guid/connectionOptions", action: "destination:connectionOptions" },
        { path: "/:apiVersion/destination/:guid/mappingOptions", action: "destination:mappingOptions" },
        { path: "/:apiVersion/destination/:guid/preview", action: "destination:preview" },
        { path: "/:apiVersion/files", action: "files:list" },
        { path: "/:apiVersion/files/options", action: "files:options" },
        { path: "/:apiVersion/file/:guid", action: "file:view" }
      ],

      post: [
        { path: "/:apiVersion/session", action: "session:create" },
        { path: "/:apiVersion/team", action: "team:create" },
        { path: "/:apiVersion/team/initialize", action: "team:initialize" },
        { path: "/:apiVersion/team/member", action: "teamMember:create" },
        { path: "/:apiVersion/group", action: "group:create" },
        { path: "/:apiVersion/profile", action: "profile:create" },
        { path: "/:apiVersion/profile/:guid/importAndUpdate", action: "profile:importAndUpdate" },
        { path: "/:apiVersion/profilePropertyRule", action: "profilePropertyRule:create" },
        { path: "/:apiVersion/profilePropertyRule/:guid/query", action: "profilePropertyRule:buildQuery" },
        { path: "/:apiVersion/app", action: "app:create" },
        { path: "/:apiVersion/source", action: "source:create" },
        { path: "/:apiVersion/source/:guid/bootstrapUniqueProfilePropertyRule", action: "source:bootstrapUniqueProfilePropertyRule" },
        { path: "/:apiVersion/schedule", action: "schedule:create" },
        { path: "/:apiVersion/schedule/:guid/run", action: "schedule:run" },
        { path: "/:apiVersion/destination", action: "destination:create" },
        { path: "/:apiVersion/destination/:guid/track", action: "destination:trackGroup" },
        { path: "/:apiVersion/destination/:guid/unTrack", action: "destination:unTrackGroup" },
        { path: "/:apiVersion/file", action: "file:create" },
        { path: "/:apiVersion/import", action: "import:create" }
      ],

      put: [
        { path: "/:apiVersion/team/:guid", action: "team:edit" },
        { path: "/:apiVersion/team/member/:guid", action: "teamMember:edit" },
        { path: "/:apiVersion/group/:guid", action: "group:edit" },
        { path: "/:apiVersion/group/:guid/add", action: "group:addProfile" },
        { path: "/:apiVersion/group/:guid/run", action: "group:run" },
        { path: "/:apiVersion/group/:guid/updateMembers", action: "group:updateMembers" },
        { path: "/:apiVersion/group/:guid/export", action: "group:export" },
        { path: "/:apiVersion/group/:guid/remove", action: "group:removeProfile" },
        { path: "/:apiVersion/profile/:guid", action: "profile:edit" },
        { path: "/:apiVersion/profiles/importAndUpdate", action: "profiles:importAndUpdate" },
        { path: "/:apiVersion/profilePropertyRule/:guid", action: "profilePropertyRule:edit" },
        { path: "/:apiVersion/account", action: "account:edit" },
        { path: "/:apiVersion/setting/:guid", action: "setting:edit" },
        { path: "/:apiVersion/app/:guid/test", action: "app:test" },
        { path: "/:apiVersion/profilePropertyRule/:guid/test", action: "profilePropertyRule:test" },
        { path: "/:apiVersion/app/:guid", action: "app:edit" },
        { path: "/:apiVersion/source/:guid", action: "source:edit" },
        { path: "/:apiVersion/schedule/:guid", action: "schedule:edit" },
        { path: "/:apiVersion/destination/:guid", action: "destination:edit" }
      ],

      delete: [
        { path: "/:apiVersion/session", action: "session:destroy" },
        { path: "/:apiVersion/team/:guid", action: "team:destroy" },
        { path: "/:apiVersion/group/:guid", action: "group:destroy" },
        { path: "/:apiVersion/profile/:guid", action: "profile:destroy" },
        { path: "/:apiVersion/profilePropertyRule/:guid", action: "profilePropertyRule:destroy" },
        { path: "/:apiVersion/team/member/:guid", action: "teamMember:destroy" },
        { path: "/:apiVersion/app/:guid", action: "app:destroy" },
        { path: "/:apiVersion/source/:guid", action: "source:destroy" },
        { path: "/:apiVersion/schedule/:guid", action: "schedule:destroy" },
        { path: "/:apiVersion/destination/:guid", action: "destination:destroy" },
        { path: "/:apiVersion/file/:guid", action: "file:destroy" }
      ]
    };
  },
};
