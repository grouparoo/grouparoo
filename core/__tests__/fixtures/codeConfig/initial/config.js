module.exports = async function getConfig() {
  return [
    {
      id: "setting_cluster_name", // this is actually ignored
      class: "Setting",
      pluginName: "core",
      key: "cluster-name",
      value: "Test Cluster",
    },

    {
      id: "data_warehouse", // id -> `app_data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
      },
    },

    {
      id: "events", // id -> `app_events`
      name: "Grouparoo Events",
      class: "App",
      type: "events",
      options: {
        identifyingPropertyId: "rul_user_id",
      },
    },

    {
      id: "users_table", // id -> `src_data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse", // appId -> `app_data_warehouse`
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
      bootstrappedProperty: {
        name: "userId",
        type: "integer",
        id: "user_id", // id -> `rul_user_id`
        options: {
          column: "id",
        },
      },
    },

    {
      id: "users_table_schedule", // id -> `sch_users_table_schedule`
      name: "Users Table Schedule",
      class: "Schedule",
      sourceId: "users_table", // sourceId -> `src_users_table`
      recurring: true,
      recurringFrequency: 1000 * 60 * 15, // 15 minutes in ms
      options: {
        maxColumn: "updated_at",
      },
    },

    {
      id: "email", // id -> `rul_email`
      name: "email",
      class: "Property",
      type: "email",
      unique: true,
      isArray: false,
      sourceId: "users_table", // sourceId -> `src_users_table`
      options: {
        column: "email",
      },
      filters: [],
    },

    {
      id: "first_name", // id -> `rul_first_name`
      name: "first name",
      class: "Property",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceId -> `src_users_table`
      options: {
        column: "first_name",
      },
      filters: [],
    },

    {
      id: "last_name", // id -> `rul_first_name`
      name: "last name",
      class: "Property",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceId -> `src_users_table`
      options: {
        column: "last_name",
      },
      filters: [],
    },

    {
      id: "email_group", // id -> `grp_marketing_team`
      name: "People with Email Addresses",
      class: "Group",
      type: "calculated",
      rules: [
        {
          propertyId: "user_id",
          operation: { op: "exists" },
        },
        {
          propertyId: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ],
    },

    {
      id: "test_destination", // id -> `dst_hubspot_destination`
      name: "Test Destination",
      class: "destination",
      type: "test-plugin-export",
      appId: "data_warehouse", // id -> app_data_warehouse
      groupId: "email_group", // id -> grp_email_group
      options: {
        table: "output",
      },
      mapping: {
        "primary-id": "user_id",
        "secondary-id": "email",
      },
      destinationGroupMemberships: {
        "Literally Everyone": "email_group",
      },
    },

    {
      id: "website_api_key", // id -> `api_website_api_key`
      name: "web-api-key",
      class: "apiKey",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "admin_team", // id -> `tea_admin_team`
      name: "Admin Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "demo", // id -> `tea_person`
      email: "demo@grouparoo.com",
      teamId: "admin_team", // id -> `tea_marketing_team`
      class: "teamMember",
      options: {
        firstName: "Example",
        lastName: "Person",
        password: "password",
      },
    },
  ];
};
