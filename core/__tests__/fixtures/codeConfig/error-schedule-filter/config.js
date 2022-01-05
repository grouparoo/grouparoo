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
      id: "mod_profiles",
      class: "Model",
      name: "Profiles",
      type: "profile",
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
      filters: [{ key: "userId", op: "greater than", match: 5 }],
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
      sourceId: "users_table",
      options: {
        column: "email",
      },
      filters: [],
    },
  ];
};
