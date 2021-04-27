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
      options: {
        fileId: "new-file-path.db",
      },
    },

    {
      id: "events", // id -> `events`
      name: "Grouparoo Events",
      class: "App",
      type: "events",
      options: {
        identifyingPropertyId: "user_id",
      },
    },

    {
      id: "users_table", // id -> `data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appId -> `data_warehouse`
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
      identifying: true,
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
        column: "first_name",
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
      type: "calculated",
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
