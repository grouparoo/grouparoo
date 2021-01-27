module.exports = async function getConfig() {
  const mailchimpApiKey = "key.notactuallyused";
  const mailchimpListId = "list.notactuallyused";

  const dbHost = process.env.SYNCTABLE_DB_HOST || "127.0.0.1";
  const dbPort = process.env.SYNCTABLE_DB_PORT || "5432";
  const dbDatabase =
    process.env.SYNCTABLE_DB_DATABASE ||
    `grouparoo_${process.env.NODE_ENV}${
      process.env.JEST_WORKER_ID ? "_" + process.env.JEST_WORKER_ID : ""
    }`;
  const dbSchema = process.env.SYNCTABLE_DB_SCHEMA || "synctable";
  const dbUser =
    process.env.SYNCTABLE_DB_USER || process.env.CI ? "postgres" : undefined;
  const dbPassword = process.env.SYNCTABLE_PASS || undefined;

  return [
    {
      id: "data_warehouse",
      name: "Data Warehouse",
      class: "App",
      type: "postgres",
      options: {
        host: dbHost,
        port: dbPort,
        database: dbDatabase,
        schema: dbSchema,
        user: dbUser,
        password: dbPassword,
      },
    },
    {
      id: "mailchimpapp",
      name: "Mailchimp",
      class: "App",
      type: "mailchimp",
      options: {
        apiKey: mailchimpApiKey,
      },
    },
    // single entity to define a source and destination
    // optimizes for the case where they are transforming a data warehouse into the shape of data to sync
    {
      id: "magic_table",
      name: "Sync to Mailchimp",
      class: "SyncTable",
      source: {
        // if not provided , id auto-generates to ${parent}_source (magic_table_source)
        // if not provided, type will be the table mode of the app given (postgres-table-import)
        // if not provided , name auto-generates (Sync to Mailchimp Source)
        appId: "data_warehouse", // required
        table: "mapping_table", // required
        userKeyColumn: "user_id", // makes key magic_table_user_id key (id: magic_table_property_user_id)
        // if userKeyMapsToPropertyId is not there, it will bootstrap it as unique
        //              _or_ add userKeyMapsToPropertyId: "existing_property_id"
        highWaterColumn: "updated_at", // makes schedule (defaulting to recurring every 15 minutes)
        // can change with recurringFrequency: 1000 * 60 * 15, // 15 minutes in ms
        //    otherwise, can set whole schedule object here with recurring, recurringFrequency, id, name

        // can set identityProperty: { id, etc } to know they are in that group
      },
      // can put group here (id name, rules). It will add a rule for a property that is
      //  one auto created of "everyone in this table" with id
      destination: {
        // if not provided , id auto-generates to ${parent}_source (magic_table_destination)
        // if not provided , name auto-generates (Sync to Mailchimp Destination)
        type: "mailchimp-export", // required
        appId: "mailchimpapp", // required
        // if not provided groupId will be the one auto created of "everyone in this table"
        // ${parent}_destination_group (magic_table_destination_group)
        options: {
          listId: mailchimpListId,
        },
        // can add other mappings here other than the ones below    mapping: {},
        // can add tags and such here                               destinationGroupMemberships: {},
      },
      // maps from destination field to which column to get it from
      // can be an array (list of fields and mappings) or just a mapping
      sync: [
        "FNAME", // same field and column name. (magic_table_property_fname)
        {
          // and/or make a mapping from field to column. auto picks data type
          LTV: "decimal_col", // (magic_table_property_decimal_col)
          SIGNUP: "timestamp_col", // (magic_table_property_timestamp_col)
          email_address: {
            column: "email",
            unique: true,
            key: "email",
            type: "email",
            id: "email_custom",
          }, // can give more options including type (magic_table_property_email)
          EXT_ID: "user_id", // can be the same as the bootstrapped one. (magic_table_property_user_id)
        },
      ],
    },
  ];
};
