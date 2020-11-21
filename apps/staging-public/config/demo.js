module.exports = async function getConfig() {
  await new Promise((resolve) => setTimeout(resolve, 100));

  // TODO: How can I delete an option.name?  Does null/undefined delete stuff?
  // TODO: Delete Objects that are no longer in config
  //   - Perhaps the guid is stored in the `locked` column so that we know it's save to delete?
  // TODO: Configurable config dir

  // QUESTION: Can we use the Actions vs the Code Config-ers?

  // DECIDED: use ID in these configs.  Guids, are made form IDS => `app_${id}`

  return [
    {
      id: "setting_cluster_name", // this is actually ignored
      class: "Setting",
      pluginName: "core",
      key: "cluster-name",
      value: "Evan's Test Cluster",
    },

    {
      id: "data_warehouse", // guid -> `app_data_warehouse`
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
      id: "hubspot", // guid -> `app_hubspot`
      name: "Hubspot",
      class: "App",
      type: "hubspot",
      options: {
        hapikey: "HUBSPOT_API_KEY", // Use an ENV variable `GROUPAROO_OPTION__APP__HUBSPOT_API_KEY` without storing it in the DB
      },
    },

    {
      id: "users_table", // guid -> `src_data_warehouse`
      name: "Users Table",
      class: "Source",
      type: "postgres-table-import",
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
      id: "users_table_schedule", // guid -> `sch_users_table_schedule`
      name: "Users Table Schedule",
      class: "Schedule",
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      recurring: true,
      recurringFrequency: 1000 * 60 * 15, // 15 minutes in ms
      options: {
        column: "updated_at",
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
        "aggregation method": "exact",
        sort: null,
      },
      filters: [],
    },

    {
      id: "first_name", // guid -> `rul_first_name`
      name: "first name",
      class: "ProfilePropertyRule",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      options: {
        column: "first_name",
        "aggregation method": "exact",
        sort: null,
      },
      filters: [],
    },

    {
      id: "last_name", // guid -> `rul_first_name`
      name: "last name",
      class: "ProfilePropertyRule",
      type: "string",
      unique: false,
      isArray: false,
      sourceId: "users_table", // sourceGuid -> `src_users_table`
      options: {
        column: "last_name",
        "aggregation method": "exact",
        sort: null,
      },
      filters: [],
    },

    {
      id: "email_group", // guid -> `grp_marketing_team`
      name: "People with Email Addresses",
      class: "Group",
      type: "calculated",
      rules: [
        {
          profilePropertyRuleId: "user_id",
          operation: { op: "exists" },
        },
        {
          profilePropertyRuleId: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ],
    },

    {
      id: "small_group", // guid -> `grp_marketing_team`
      name: "A Small Group",
      class: "Group",
      type: "calculated",
      rules: [
        {
          profilePropertyRuleId: "user_id",
          operation: { op: "gt" },
          match: 950,
        },
        {
          profilePropertyRuleId: "email",
          operation: { op: "like" },
          match: "%@%",
        },
      ],
    },

    {
      id: "hubspot_destination", // guid -> `dst_hubspot_destination`
      name: "Hubspot Destination",
      class: "destination",
      type: "hubspot-export",
      appId: "hubspot", // guid -> app_hubspot
      groupId: "small_group", // guid -> grp_small_group
      options: {},
      mapping: {
        email: "email",
        firstname: "first_name",
        lastname: "last_name",
      },
      destinationGroupMemberships: {
        "Hubspot Small Group": "small_group",
        "Literally Everyone": "email_group",
      },
    },

    {
      id: "website_api_key", // guid -> `api_website_api_key`
      name: "web-api-key",
      class: "apiKey",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "admin_team", // guid -> `tea_admin_team`
      name: "Admin Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: true,
      },
    },

    {
      id: "demo", // guid -> `tea_person`
      email: "demo@grouparoo.com",
      teamId: "admin_team", // guid -> `tea_marketing_team`
      class: "teamMember",
      options: {
        firstName: "Example",
        lastName: "Person",
        password: "password",
      },
    },

    {
      id: "marketing_team", // guid -> `tea_marketing_team`
      name: "Marketing Team",
      class: "team",
      options: {
        permissionAllRead: true,
        permissionAllWrite: false,
      },
    },

    {
      id: "person", // guid -> `tea_person`
      email: "person@grouparoo.com",
      teamId: "marketing_team", // guid -> `tea_marketing_team`
      class: "teamMember",
      options: {
        firstName: "Example",
        lastName: "Person",
        password: "password",
      },
    },
  ];
};
