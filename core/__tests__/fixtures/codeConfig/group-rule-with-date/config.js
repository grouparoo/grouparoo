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
      id: "mod_profiles",
      class: "Model",
      name: "Profiles",
      type: "profile",
    },
    {
      id: "users_table",
      name: "Users Table",
      class: "Source",
      type: "test-plugin-import",
      appId: "data_warehouse",
      modelId: "mod_profiles",
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
      modelId: "mod_profiles",
      rules: [
        {
          propertyId: "last_purchase_date",
          operation: { op: "lt" },
          match: "2020-03-01", // date only
        },
        {
          propertyId: "last_appointment_date",
          operation: { op: "gte" },
          match: "2019-10-10T14:48:00.000+09:00", //date with time and timezone
        },
        {
          propertyId: "last_email_date",
          operation: { op: "relative_gt" },
          relativeMatchNumber: "8", // relative date rule
          relativeMatchUnit: "days",
        },
      ],
    },
    {
      id: "last_purchase_date",
      name: "Last purchase date",
      type: "date",
      class: "Property",
      sourceId: "users_table",
      unique: false,
      isArray: false,
      options: {
        column: "last_purchase_date",
      },
    },
    {
      id: "last_email_date",
      name: "Last email date",
      type: "date",
      class: "Property",
      sourceId: "users_table",
      unique: false,
      isArray: false,
      options: {
        column: "last_email_date",
      },
    },
    {
      id: "last_appointment_date",
      name: "Last appointment date",
      type: "date",
      class: "Property",
      sourceId: "users_table",
      unique: false,
      isArray: false,
      options: {
        column: "last_appointment_date",
      },
    },
  ];
};
