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
      id: "data_warehouse", // id -> `data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
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
      modelId: "mod_profiles",
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
      name: "email",
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
      name: "first name",
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
      name: "last name",
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
      id: "purchases_table", // id -> `purchases_table`
      name: "Purchases Table",
      class: "Source",
      type: "test-plugin-import",
      modelId: "mod_profiles",
      appId: "data_warehouse", // appId -> `data_warehouse`
      options: {
        table: "purchases",
      },
      mapping: {
        user_id: "user_id",
      },
    },

    {
      id: "purchases_table_schedule", // id -> `sch_purchases_table_schedule`
      name: "Purchases Table Schedule",
      class: "Schedule",
      sourceId: "purchases_table", // sourceId -> `purchases_table`
      recurring: true,
      recurringFrequency: 1000 * 60 * 15, // 15 minutes in ms
      options: {
        maxColumn: "updated_at",
      },
    },

    {
      id: "purchase_count",
      name: "purchaseCount",
      class: "Property",
      type: "integer",
      unique: false,
      isArray: false,
      sourceId: "purchases_table",
      options: {
        column: "id",
        aggregationMethod: "count",
        sortColumn: null,
      },
      filters: [{ key: "state", op: "equals", match: "successful" }],
    },

    {
      id: "email_group", // id -> `marketing_team`
      name: "People with Email Addresses",
      class: "Group",
      modelId: "mod_profiles",
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
      appId: "data_warehouse", // id -> data_warehouse
      groupId: "email_group", // id -> email_group
      collection: "group",
      syncMode: "additive",
      modelId: "mod_profiles",
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
      id: "website_key", // id -> `website_key`
      name: "web-api-key",
      class: "apiKey",
      apiKey: "abc123",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "admin_team", // id -> `admin_team`
      name: "Admin Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
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
        password: "password",
      },
    },
  ];
};
