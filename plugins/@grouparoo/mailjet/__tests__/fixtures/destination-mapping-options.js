const nock = require("nock");

nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactmetadata")
  .once()
  .reply(
    200,
    {
      Count: 4,
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
      ],
      Total: 4,
    },
    [
      "date",
      "Fri, 20 Aug 2021 02:53:30 GMT",
      "content-type",
      "application/json",
      "content-length",
      "373",
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
      Count: 4,
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
      ],
      Total: 4,
    },
    [
      "date",
      "Fri, 20 Aug 2021 02:53:31 GMT",
      "content-type",
      "application/json",
      "content-length",
      "373",
      "connection",
      "close",
    ]
  );
