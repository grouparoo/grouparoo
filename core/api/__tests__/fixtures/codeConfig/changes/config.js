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
      id: "data_warehouse", // guid -> `app_data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileGuid: "new-file-path.db",
      },
    },

    {
      id: "users_table", // guid -> `src_data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appGuid -> `app_data_warehouse`
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
      bootstrappedProfilePropertyRule: {
        name: "User Id",
        type: "integer",
        id: "user_id", // guid -> `rul_user_id`
        options: {
          column: "id",
        },
      },
    },

    {
      id: "users_table_schedule", // guid -> `sch_users_table_schedule`
      name: "Users Table Schedule",
      class: "Schedule",
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      recurring: true,
      recurringFrequency: 1000 * 60 * 15, // 15 minutes in ms
      options: {
        maxColumn: "updated_at",
      },
    },

    {
      id: "email", // guid -> `rul_email`
      name: "Email",
      class: "ProfilePropertyRule",
      type: "email",
      unique: true,
      isArray: false,
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      options: {
        column: "email",
      },
      filters: [],
    },

    {
      id: "first_name", // guid -> `rul_first_name`
      name: "First Name",
      class: "ProfilePropertyRule",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      options: {
        column: "first_name",
      },
      filters: [],
    },

    {
      id: "last_name", // guid -> `rul_first_name`
      name: "Last Name",
      class: "ProfilePropertyRule",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      options: {
        column: "last_name",
      },
      filters: [],
    },

    {
      id: "email_group", // guid -> `grp_marketing_team`
      name: "People who have Email Addresses",
      class: "Group",
      type: "calculated",
      rules: [
        {
          profilePropertyRuleId: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ],
    },

    {
      id: "website_api_key", // guid -> `api_website_api_key`
      name: "web-api-key",
      class: "apiKey",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "admin_team", // guid -> `tea_admin_team`
      name: "Admin Team (no write)",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: false,
      },
    },

    {
      id: "demo", // guid -> `tea_person`
      email: "demo@grouparoo.com",
      teamId: "admin_team", // guid -> `tea_marketing_team`
      class: "teamMember",
      options: {
        firstName: "Example",
        lastName: "Person",
        password: "new-password",
      },
    },
  ];
};
