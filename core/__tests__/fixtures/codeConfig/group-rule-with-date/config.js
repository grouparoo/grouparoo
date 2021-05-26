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
      rules: [
        {
          propertyId: "last_purchase_date",
          operation: { op: "gt" },
          match: "2020-03-01", // date
          type: "date",
        },
        {
          propertyId: "last_message_date",
          operation: { op: "lt" },
          match: "2021-03-10T07:00", //date with time (UTC)
          type: "date",
        },
        {
          propertyId: "last_appointment_date",
          operation: { op: "lte" },
          match: "2019-10-10T14:48:00.000+09:00", //date with time and timezone
          type: "date",
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
      id: "last_message_date",
      name: "Last message date",
      type: "date",
      class: "Property",
      sourceId: "users_table",
      unique: false,
      isArray: false,
      options: {
        column: "last_message_date",
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
