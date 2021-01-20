module.exports = async function getConfig() {
  return [
    {
      id: "data_warehouse",
      name: "Data Warehouse",
      class: "App",
      type: "postgres",
      options: {
        port: "5432",
        database: "db_name",
        host: "127.0.0.1",
      },
    },
    {
      id: "mailchimpapp",
      name: "Mailchimp",
      class: "App",
      type: "mailchimp",
      options: {
        apiKey: "qwertyuiop",
      },
    },
    // single entity to define a source and destination
    // optimizes for the case where they are transforming a data warehouse into the shape of data to sync
    {
      id: "magic_table",
      name: "Sync to Marketo",
      class: "SyncTable",
      source: {
        // if not provided , id auto-generates to ${parent}_source (magic_table_source)
        // if not provided, type will be the table mode of the app given (postgres-import-table)
        // if not provided , name auto-generates (Sync to Marketo Source)
        appId: "data_warehouse", // required
        table: "mapping_table", // required
        primaryKeyColumn: "user_id",
        // if primaryKeyMapping is not there, it will bootstrap it _or_ add primaryKeyMapping: "userId"
      },
      destination: {
        // if not provided , id auto-generates to ${parent}_source (magic_table_destination)
        // if not provided , name auto-generates (Sync to Marketo Destination)
        type: "mailchimp-export", // required
        appId: "mailchimpapp", // required
        // if not provided groupId will be one auto created of "everyone in this table" with id
        // ${parent}_destination_group (magic_table_destination_group)
        options: {
          listId: "asdf",
        },
        // can add other mappings here other than the ones below    mapping: {},
        // can add tags and such here
        destinationGroupMemberships: {},
      },
      // maps from destination field to which column to get it from
      // can be an array (list of fields and mappings) or just a mapping
      sync: [
        "FNAME", // same field and column name. (magic_table_property_fname)
        {
          // and/or make a mapping from field to column. auto picks data type
          LNAME: "last_name", // (magic_table_property_last_name)
          email_address: { column: "email", unique: true }, // can give more options including type (magic_table_property_email)
          EXT_ID: "user_id", // can be the same as the bootstrapped one. (magic_table_property_user_id)
        },
      ],
    },
  ];
};
