module.exports = async function getConfig() {
  return [
    {
      id: "data_warehouse",
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
      },
    },
    {
      id: "users_table",
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse",
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
    },
    {
      id: "user_id",
      name: "userId",
      class: "Property",
      type: "integer",
      identifying: true,
      unique: true,
      isArray: false,
      sourceId: "users_table",
      options: {
        column: "id",
      },
      filters: [],
    },
    {
      id: "calculate_dates",
      name: "Calculated date group",
      class: "Group",
      type: "calculated",
    },

    {
      id: "data_warehouse_destination",
      name: "Data Warehouse Destination",
      class: "Destination",
      type: "test-plugin-export",
      appId: "data_warehouse",
      syncMode: "additive",
      options: {
        table: "test-file-path.db",
      },
    },
  ];
};
