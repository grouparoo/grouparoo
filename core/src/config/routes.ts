export const DEFAULT = {
  routes: (api) => {
    // prettier-ignore
    return {
      head: [
        { path: "/v:apiVersion/status/:route", action: "status:public", matchTrailingPathParts: true },
      ],

      get: [
        { path: "/v:apiVersion/status/public", action: "status:public" },
        { path: "/v:apiVersion/status/private", action: "status:private" },
        { path: "/v:apiVersion/swagger", action: "swagger" },
        { path: "/v:apiVersion/plugins/installed", action: "plugins:installed:list" },
        { path: "/v:apiVersion/plugins/available", action: "plugins:available:list" },
        { path: "/v:apiVersion/session", action: "session:view" },
        { path: "/v:apiVersion/setupSteps", action: "setupSteps:list" },
        { path: "/v:apiVersion/totals", action: "totals" },
        { path: "/v:apiVersion/logs", action: "logs:list" },
        { path: "/v:apiVersion/imports", action: "imports:list" },
        { path: "/v:apiVersion/import/:id", action: "import:view" },
        { path: "/v:apiVersion/exports", action: "exports:list" },
        { path: "/v:apiVersion/exports/totals", action: "exports:totals" },
        { path: "/v:apiVersion/export/:id", action: "export:view" },
        { path: "/v:apiVersion/navigation", action: "navigation:list" },
        { path: "/v:apiVersion/teams", action: "teams:list" },
        { path: "/v:apiVersion/team/:id", action: "team:view" },
        { path: "/v:apiVersion/teamMembers", action: "teamMembers:list" },
        { path: "/v:apiVersion/team/:id/members", action: "teamMembers:list" },
        { path: "/v:apiVersion/team/member/:id", action: "teamMember:view" },
        { path: "/v:apiVersion/apiKeys", action: "apiKeys:list" },
        { path: "/v:apiVersion/apiKey/:id", action: "apiKey:view" },
        { path: "/v:apiVersion/groups", action: "groups:list" },
        { path: "/v:apiVersion/groups/ruleOptions",action: "groups:ruleOptions" },
        { path: "/v:apiVersion/group/:id", action: "group:view" },
        { path: "/v:apiVersion/group/:groupId/profiles", action: "profiles:list" },
        { path: "/v:apiVersion/group/:id/destinations", action: "group:listDestinations" },
        { path: "/v:apiVersion/group/:id/countComponentMembers", action: "group:countComponentMembers" },
        { path: "/v:apiVersion/group/:id/countPotentialMembers", action: "group:countPotentialMembers" },
        { path: "/v:apiVersion/properties", action: "properties:list" },
        { path: "/v:apiVersion/propertyOptions", action: "properties:options" },
        { path: "/v:apiVersion/property/:id", action: "property:view" },
        { path: "/v:apiVersion/property/:id/pluginOptions", action: "property:pluginOptions" },
        { path: "/v:apiVersion/property/:id/filterOptions", action: "property:filterOptions" },
        { path: "/v:apiVersion/property/:id/groups", action: "property:groups" },
        { path: "/v:apiVersion/property/:id/profilePreview", action: "property:profilePreview" },
        { path: "/v:apiVersion/profiles", action: "profiles:list" },
        { path: "/v:apiVersion/profiles/autocompleteProfileProperty", action: "profiles:autocompleteProfileProperty" },
        { path: "/v:apiVersion/profile/:id", action: "profile:view" },
        { path: "/v:apiVersion/profile/:profileId/logs", action: "logs:list" },
        { path: "/v:apiVersion/account", action: "account:view" },
        { path: "/v:apiVersion/settings", action: "settings:list" },
        { path: "/v:apiVersion/events", action: "events:list" },
        { path: "/v:apiVersion/events/counts", action: "events:counts" },
        { path: "/v:apiVersion/events/types", action: "events:types" },
        { path: "/v:apiVersion/events/autocompleteType", action: "events:autocompleteType" },
        { path: "/v:apiVersion/apps", action: "apps:list" },
        { path: "/v:apiVersion/sources", action: "sources:list" },
        { path: "/v:apiVersion/source/:id/connectionOptions", action: "source:connectionOptions" },
        { path: "/v:apiVersion/source/:id/preview", action: "source:preview" },
        { path: "/v:apiVersion/runs", action: "runs:list" },
        { path: "/v:apiVersion/run/:id", action: "run:view" },
        { path: "/v:apiVersion/appOptions", action: "app:options" },
        { path: "/v:apiVersion/app/:id/optionOptions", action: "app:optionOptions" },
        { path: "/v:apiVersion/app/:id", action: "app:view" },
        { path: "/v:apiVersion/event/:id", action: "event:view" },
        { path: "/v:apiVersion/sources/connectionApps", action: "sources:connectionApps" },
        { path: "/v:apiVersion/source/:id", action: "source:view" },
        { path: "/v:apiVersion/schedules", action: "schedules:list" },
        { path: "/v:apiVersion/schedule/:id", action: "schedule:view" },
        { path: "/v:apiVersion/destinations/connectionApps", action: "destinations:connectionApps" },
        { path: "/v:apiVersion/destinations", action: "destinations:list" },
        { path: "/v:apiVersion/destination/:id", action: "destination:view" },
        { path: "/v:apiVersion/destination/:id/connectionOptions", action: "destination:connectionOptions" },
        { path: "/v:apiVersion/destination/:id/mappingOptions", action: "destination:mappingOptions" },
        { path: "/v:apiVersion/destination/:id/profilePreview", action: "destination:profilePreview" },
        { path: "/v:apiVersion/destination/:id/exportArrayProperties", action: "destination:exportArrayProperties" },
        { path: "/v:apiVersion/files", action: "files:list" },
        { path: "/v:apiVersion/files/options", action: "files:options" },
        { path: "/v:apiVersion/file/:id/details", action: "file:details" },
        { path: "/v:apiVersion/file/:id", action: "file:view" },
        { path: "/v:apiVersion/notifications", action: "notifications:list" },
        { path: "/v:apiVersion/notification/:id", action: "notification:view" },
        { path: "/v:apiVersion/object/:id", action: "object:find" }
      ],

      post: [
        { path: "/v:apiVersion/session", action: "session:create" },
        { path: "/v:apiVersion/plugin/install", action: "plugin:install" },
        { path: "/v:apiVersion/plugin/uninstall", action: "plugin:uninstall" },
        { path: "/v:apiVersion/config/validate", action: "config:validate" },
        { path: "/v:apiVersion/config/apply", action: "config:apply" },
        { path: "/v:apiVersion/config/generate", action: "config:generate" },
        { path: "/v:apiVersion/team", action: "team:create" },
        { path: "/v:apiVersion/team/initialize", action: "team:initialize" },
        { path: "/v:apiVersion/team/member", action: "teamMember:create" },
        { path: "/v:apiVersion/apiKey", action: "apiKey:create" },
        { path: "/v:apiVersion/group", action: "group:create" },
        { path: "/v:apiVersion/profile", action: "profile:create" },
        { path: "/v:apiVersion/profile/:id/importAndExport", action: "profile:importAndExport" },
        { path: "/v:apiVersion/property", action: "property:create" },
        { path: "/v:apiVersion/app", action: "app:create" },
        { path: "/v:apiVersion/event", action: "event:create" },
        { path: "/v:apiVersion/track", action: "event:create" },
        { path: "/v:apiVersion/source", action: "source:create" },
        { path: "/v:apiVersion/source/:id/bootstrapUniqueProperty", action: "source:bootstrapUniqueProperty" },
        { path: "/v:apiVersion/schedule", action: "schedule:create" },
        { path: "/v:apiVersion/schedule/:id/run", action: "schedule:run" },
        { path: "/v:apiVersion/destination", action: "destination:create" },
        { path: "/v:apiVersion/destination/:id/export", action: "destination:export" },
        { path: "/v:apiVersion/file", action: "file:create" },
        { path: "/v:apiVersion/import", action: "import:create" }
      ],

      put: [
        { path: "/v:apiVersion/setupStep/:id", action: "setupStep:edit" },
        { path: "/v:apiVersion/team/:id", action: "team:edit" },
        { path: "/v:apiVersion/team/member/:id", action: "teamMember:edit" },
        { path: "/v:apiVersion/apiKey/:id", action: "apiKey:edit" },
        { path: "/v:apiVersion/group/:id", action: "group:edit" },
        { path: "/v:apiVersion/group/:id/add", action: "group:addProfile" },
        { path: "/v:apiVersion/group/:id/run", action: "group:run" },
        { path: "/v:apiVersion/group/:id/export", action: "group:export" },
        { path: "/v:apiVersion/group/:id/remove", action: "group:removeProfile" },
        { path: "/v:apiVersion/profile/:id", action: "profile:edit" },
        { path: "/v:apiVersion/profiles/importAndUpdate", action: "profiles:importAndUpdate" },
        { path: "/v:apiVersion/property/:id", action: "property:edit" },
        { path: "/v:apiVersion/property/:id/makeIdentifying", action: "property:makeIdentifying" },
        { path: "/v:apiVersion/account", action: "account:edit" },
        { path: "/v:apiVersion/setting/:id", action: "setting:edit" },
        { path: "/v:apiVersion/app/:id/test", action: "app:test" },
        { path: "/v:apiVersion/property/:id/test", action: "property:test" },
        { path: "/v:apiVersion/app/:id", action: "app:edit" },
        { path: "/v:apiVersion/run/:id", action: "run:edit" },
        { path: "/v:apiVersion/source/:id", action: "source:edit" },
        { path: "/v:apiVersion/schedule/:id", action: "schedule:edit" },
        { path: "/v:apiVersion/destination/:id", action: "destination:edit" }
      ],

      delete: [
        { path: "/v:apiVersion/session", action: "session:destroy" },
        { path: "/v:apiVersion/team/:id", action: "team:destroy" },
        { path: "/v:apiVersion/team/member/:id", action: "teamMember:destroy" },
        { path: "/v:apiVersion/apiKey/:id", action: "apiKey:destroy" },
        { path: "/v:apiVersion/group/:id", action: "group:destroy" },
        { path: "/v:apiVersion/profile/:id", action: "profile:destroy" },
        { path: "/v:apiVersion/property/:id", action: "property:destroy" },
        { path: "/v:apiVersion/app/:id", action: "app:destroy" },
        { path: "/v:apiVersion/event/:id", action: "event:destroy" },
        { path: "/v:apiVersion/source/:id", action: "source:destroy" },
        { path: "/v:apiVersion/schedule/:id", action: "schedule:destroy" },
        { path: "/v:apiVersion/destination/:id", action: "destination:destroy" },
        { path: "/v:apiVersion/file/:id", action: "file:destroy" },
        { path: "/v:apiVersion/reset/cluster", action: "reset:cluster" },
        { path: "/v:apiVersion/reset/data", action: "reset:data" },
        { path: "/v:apiVersion/reset/cache", action: "reset:cache" }
      ]
    };
  },
};
