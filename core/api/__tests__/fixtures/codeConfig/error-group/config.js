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
      id: "data_warehouse", // guid -> `app_data_warehouse`
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileGuid: "test-file-path.db",
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
      id: "email", // guid -> `rul_email`
      name: "email",
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
      id: "broken_group", // guid -> `grp_marketing_team`
      name: "People with Email Addresses",
      class: "Group",
      type: "calculated",
      rules: [
        {
          profilePropertyRuleId: "missing_profile_property",
          operation: { op: "exists" },
        },
      ],
    },
  ];
};
