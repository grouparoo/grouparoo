module.exports = async function getConfig() {
  return [
    {
      id: "setting_cluster_name", // this is actually ignored
      class: "Setting",
      pluginName: "core",
      key: "cluster-name",
      value: "Test Cluster!!!",
    },

    {
      id: "data_warehouse", // id -> `data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      refresh: {
        query: "SELECT MAX(stamp) FROM users;",
        recurringFrequency: 90000,
      },
      options: {
        fileId: "new-file-path.db",
      },
    },

    {
      id: "mod_profiles",
      class: "Model",
      name: "Profiles",
      type: "profile",
    },

    {
      id: "users_table", // id -> `data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appId -> `data_warehouse`
      modelId: "mod_profiles",
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
    },

    {
      id: "users_table_schedule", // id -> `sch_users_table_schedule`
      name: "Users Table Schedule",
      class: "Schedule",
      sourceId: "users_table", // sourceId -> `users_table`
      recurring: true,
      recurringFrequency: 1000 * 60 * 15, // 15 minutes in ms
      options: {
        maxColumn: "updated_at",
      },
    },

    {
      id: "user_id", // id -> `user_id`
      name: "userId",
      class: "Property",
      type: "integer",
      unique: true,
      isArray: false,
      sourceId: "users_table", // sourceId -> `users_table`
      options: {
        column: "id",
      },
      filters: [],
    },

    {
      id: "email", // id -> `email`
      name: "Email",
      class: "Property",
      type: "email",
      unique: true,
      isArray: false,
      sourceId: "users_table", // sourceId -> `users_table`
      options: {
        column: "email",
      },
      filters: [],
    },

    {
      id: "first_name", // id -> `first_name`
      name: "First Name",
      class: "Property",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceId -> `users_table`
      options: {
        column: "other_first_name", // CHANGED!
      },
      filters: [],
    },

    {
      id: "last_name", // id -> `first_name`
      name: "Last Name",
      class: "Property",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceId -> `users_table`
      options: {
        column: "last_name",
      },
      filters: [],
    },

    {
      id: "email_group", // id -> `marketing_team`
      name: "People who have Email Addresses",
      class: "Group",
      modelId: "mod_profiles",
      rules: [
        {
          propertyId: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ],
    },

    {
      id: "website_key", // id -> `website_key`
      name: "web-api-key",
      class: "apiKey",
      apiKey: "def456",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "admin_team", // id -> `admin_team`
      name: "Admin Team (no write)",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: false,
      },
    },

    {
      id: "demo", // id -> `person`
      email: "demo@grouparoo.com",
      teamId: "admin_team", // id -> `marketing_team`
      class: "teamMember",
      options: {
        firstName: "Example",
        lastName: "Person",
        password: "new-password",
      },
    },
  ];
};
