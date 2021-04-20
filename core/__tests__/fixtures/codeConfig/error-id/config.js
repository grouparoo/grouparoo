module.exports = async function getConfig() {
  return [
    {
      id: "data warehouse",
      name: "Data Warehouse",
      class: "App",
      type: "test-plugin-app",
      options: {
        fileId: "test-file-path.db",
      },
    },
  ];
};
