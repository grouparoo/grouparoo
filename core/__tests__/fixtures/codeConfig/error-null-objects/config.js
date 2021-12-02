module.exports = async function getConfig() {
  return [
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

    // We have 3 good records, and 2 bad ones
    {
      id: "rec_e1e3be15-8cc6-4f46-a786-dceb080f0394",
      class: "Record",
      modelId: "customer",
      properties: {
        id: [1],
      },
    },
    {
      id: "rec_c040168b-16f5-488e-adca-63b298b64a65",
      class: "Record",
      modelId: "customer",
      properties: {
        id: [5],
      },
    },
    {
      id: "rec_af4967c8-4024-48b5-8462-bb408416abd0",
      class: "Record",
      modelId: "customer",
      properties: {
        id: [10],
      },
    },
    null,
    undefined,
  ];
};
