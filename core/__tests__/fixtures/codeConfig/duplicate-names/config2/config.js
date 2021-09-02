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
      id: "users_table_2",
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse_2",
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
      identifying: true,
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
      type: "calculated",
    },
    {
      id: "data_warehouse_destination_2",
      name: "Data Warehouse Destination",
      class: "Destination",
      type: "test-plugin-export",
      appId: "data_warehouse_2",
      syncMode: "additive",
      options: {
        table: "test-file-path.db",
      },
    },
  ];
};
