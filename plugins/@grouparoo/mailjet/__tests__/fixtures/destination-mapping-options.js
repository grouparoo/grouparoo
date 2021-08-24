const nock = require("nock");

nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactmetadata")
  .once()
  .reply(
    200,
    {
      Count: 8,
      Data: [
        { Datatype: "str", ID: 90568, Name: "firstname", NameSpace: "static" },
        { Datatype: "str", ID: 90569, Name: "name", NameSpace: "static" },
        { Datatype: "str", ID: 90570, Name: "country", NameSpace: "static" },
        {
          Datatype: "str",
          ID: 90571,
          Name: "newsletter_sub",
          NameSpace: "static",
        },
        { Datatype: "str", ID: 91488, Name: "lastname", NameSpace: "static" },
        {
          Datatype: "int",
          ID: 91489,
          Name: "number_field",
          NameSpace: "static",
        },
        {
          Datatype: "datetime",
          ID: 91490,
          Name: "date_field",
          NameSpace: "static",
        },
        { Datatype: "str", ID: 91491, Name: "phone", NameSpace: "static" },
      ],
      Total: 8,
    },
    [
      "date",
      "Tue, 24 Aug 2021 18:25:35 GMT",
      "content-type",
      "application/json",
      "content-length",
      "713",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactmetadata")
  .once()
  .reply(
    200,
    {
      Count: 8,
      Data: [
        { Datatype: "str", ID: 90568, Name: "firstname", NameSpace: "static" },
        { Datatype: "str", ID: 90569, Name: "name", NameSpace: "static" },
        { Datatype: "str", ID: 90570, Name: "country", NameSpace: "static" },
        {
          Datatype: "str",
          ID: 90571,
          Name: "newsletter_sub",
          NameSpace: "static",
        },
        { Datatype: "str", ID: 91488, Name: "lastname", NameSpace: "static" },
        {
          Datatype: "int",
          ID: 91489,
          Name: "number_field",
          NameSpace: "static",
        },
        {
          Datatype: "datetime",
          ID: 91490,
          Name: "date_field",
          NameSpace: "static",
        },
        { Datatype: "str", ID: 91491, Name: "phone", NameSpace: "static" },
      ],
      Total: 8,
    },
    [
      "date",
      "Tue, 24 Aug 2021 18:25:36 GMT",
      "content-type",
      "application/json",
      "content-length",
      "713",
      "connection",
      "close",
    ]
  );
