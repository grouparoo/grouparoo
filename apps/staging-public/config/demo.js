export default async function getConfig() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  return [
    {
      guid: "data_warehouse", // we can prefix `app_` ourselves
      name: "Data Warehouse",
      class: "App",
      type: "postgres",
      options: {
        host: "127.0.0.1",
        port: "5432",
        user: "evan",
        password: null,
        database: "grouparoo_development",
        schema: "demo",
      },
    },

    {
      guid: "users_table", // src_users_table
      name: "Users Table",
      class: "Source",
      type: "postgres-table-import",
      app: "data_warehouse", // <-- reference name
      options: {
        table: "users",
      },
      mapping: {
        id: "User Id",
      },
      bootstrappedProfilePropertyRule: {
        name: "User Id",
        type: "integer",
        options: {
          column: "id",
        },
      },
    },

    {
      guid: "email_rule", // prp_email_rule
      name: "email",
      class: "ProfilePropertyRule",
      type: "email",
      unique: true,
      isArray: false,
      source: "users_table", // <-- reference name
      options: {
        column: "email",
        "aggregation method": "exact",
        sort: null,
      },
      filters: [],
    },

    {
      guid: "first_name", // pro_first_name
      name: "first name",
      class: "ProfilePropertyRule",
      type: "string",
      unique: false,
      isArray: false,
      source: "users_table", // <-- reference name
      options: {
        column: "first_name",
        "aggregation method": "exact",
        sort: null,
      },
      filters: [],
    },

    {
      guid: "last_name", // prp_last_name
      name: "last name",
      class: "ProfilePropertyRule",
      type: "string",
      unique: false,
      isArray: false,
      source: "users_table", // <-- reference name
      options: {
        column: "last_name",
        "aggregation method": "exact",
        sort: null,
      },
      filters: [],
    },

    {
      guid: "email_group", // grp_email_group
      name: "People with Email Addresses",
      class: "Group",
      type: "calculated",
      rules: [{ profilePropertyRule: "email", op: "like", match: "%@%" }], // reference prp_email
    },

    {
      guid: "website_api_key", // api_website_api_key
      name: "web-api-key",
      class: "apiKey",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      guid: "marketing_team", // tea_marketing_team
      name: "Marketing Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: false,
      },
    },

    {
      guid: "person_team_member", // tem_person_team_member
      email: "person@grouparoo.com",
      team: "Marketing Team",
      class: "teamMember",
      options: {
        firstName: "Example",
        lastName: "Person",
        password: "password",
      },
    },
  ];
}
