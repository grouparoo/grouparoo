module.exports = async function getConfig() {
  return [
    {
      id: "data_warehouse_2",
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
      id: "users_table_2",
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse_2",
      modelId: "mod_profiles",
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id_2",
      },
    },
    {
      id: "user_id_2",
      name: "userId",
      class: "Property",
      type: "integer",
      unique: true,
      isArray: false,
      sourceId: "users_table_2",
      options: {
        column: "id",
      },
      filters: [],
    },
    {
      id: "calculate_dates_2",
      name: "Calculated date group",
      class: "Group",
      modelId: "mod_profiles",
    },
    {
      id: "data_warehouse_destination_2",
      name: "Data Warehouse Destination",
      class: "Destination",
      type: "test-plugin-export",
      appId: "data_warehouse_2",
      syncMode: "additive",
      modelId: "mod_profiles",
      options: {
        table: "test-file-path.db",
      },
    },
  ];
};
