module.exports = async function getConfig() {
  return [
    {
      id: "data_warehouse_a",
      name: "Data Warehouse A",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
      },
    },

    {
      id: "data_warehouse_a", // duplicate ID
      name: "Data Warehouse B",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "other-file-path.db",
      },
    },
  ];
};
