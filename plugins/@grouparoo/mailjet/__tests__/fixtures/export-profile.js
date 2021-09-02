const nock = require("nock");

nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:34 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:35 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:36 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:02:08Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:02:08Z",
          ID: 261181511,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:36 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/261181511")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "5eda01bb-4e17-499f-935a-f308ac92d0c4",
    "date",
    "Tue, 31 Aug 2021 03:03:37 GMT",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:02:15Z",
          DeliveredCount: 0,
          Email: "jake.jill@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:02:15Z",
          ID: 261181515,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:38 GMT",
      "content-type",
      "application/json",
      "content-length",
      "411",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/261181515")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "16f05e1d-ffb6-4f4a-b815-264439391460",
    "date",
    "Tue, 31 Aug 2021 03:03:39 GMT",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "emb3vu592",
          CreatedAt: "2021-08-31T03:01:05Z",
          ID: 58704,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:40 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58704")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 31 Aug 2021 03:03:40 GMT",
    "content-type",
    "application/json",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o2bqx2njl",
          CreatedAt: "2021-08-31T03:01:08Z",
          ID: 58705,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58705")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 31 Aug 2021 03:03:42 GMT",
    "content-type",
    "application/json",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Three" })
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 31 Aug 2021 03:03:43 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Four" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "rgk9p04g3",
          CreatedAt: "2021-08-31T03:01:22Z",
          ID: 58706,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:44 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58706")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 31 Aug 2021 03:03:44 GMT",
    "content-type",
    "application/json",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:45 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:46 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:47 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:48 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", {
    IsExcludedFromCampaigns: "false",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:48 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [{ Name: "firstname", Value: "Caio" }],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [{ Name: "firstname", Value: "Caio" }],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "166",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:50 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [{ Name: "firstname", Value: "Caio" }],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:51 GMT",
      "content-type",
      "application/json",
      "content-length",
      "166",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:52 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [
      { Name: "firstname", Value: "Caio" },
      { Name: "lastname", Value: "Silveira" },
      { Name: "phone", Value: "+5583999999999" },
    ],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "lastname", Value: "Silveira" },
            { Name: "phone", Value: "+5583999999999" },
          ],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:52 GMT",
      "content-type",
      "application/json",
      "content-length",
      "263",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:53 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "lastname", Value: "Silveira" },
            { Name: "phone", Value: "+5583999999999" },
          ],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:54 GMT",
      "content-type",
      "application/json",
      "content-length",
      "263",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:55 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:56 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "lastname", Value: "Silveira" },
            { Name: "phone", Value: "+5583999999999" },
          ],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:56 GMT",
      "content-type",
      "application/json",
      "content-length",
      "263",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:57 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [
      { Name: "date_field", Value: "2021-02-11T23:03:03.000Z" },
      { Name: "firstname", Value: "Evan" },
      { Name: "float_field", Value: 30.39 },
      { Name: "lastname", Value: "Podolsky" },
      { Name: "number_field", Value: 3039 },
      { Name: "phone", Value: "+5583999999998" },
    ],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [
            { Name: "date_field", Value: "2021-02-11T23:03:03.000Z" },
            { Name: "firstname", Value: "Evan" },
            { Name: "float_field", Value: "30.39" },
            { Name: "lastname", Value: "Podolsky" },
            { Name: "number_field", Value: "3039" },
            { Name: "phone", Value: "+5583999999998" },
          ],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:58 GMT",
      "content-type",
      "application/json",
      "content-length",
      "422",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:03:59 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [
            { Name: "firstname", Value: "Evan" },
            { Name: "lastname", Value: "Podolsky" },
            { Name: "number_field", Value: "3039" },
            { Name: "date_field", Value: "2021-02-11T23:03:03Z" },
            { Name: "phone", Value: "+5583999999998" },
            { Name: "float_field", Value: "30.39" },
          ],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "418",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [{ Name: "date_field", Value: "asd000" }],
  })
  .once()
  .reply(
    400,
    {
      ErrorInfo: "",
      ErrorMessage:
        '[{ "date_field" : "CM09 "asd000" is not a valid datetime value for key date_field" }]',
      StatusCode: 400,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:01 GMT",
      "content-type",
      "application/json",
      "content-length",
      "152",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:02 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [
      { Name: "date_field" },
      { Name: "firstname" },
      { Name: "float_field" },
      { Name: "lastname" },
      { Name: "number_field" },
      { Name: "phone" },
    ],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        { ContactID: 261181865, Data: [], ID: 261181865, MethodCollection: "" },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:03 GMT",
      "content-type",
      "application/json",
      "content-length",
      "124",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        { ContactID: 261181865, Data: [], ID: 261181865, MethodCollection: "" },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "124",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:05 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:06 GMT",
      "content-type",
      "application/json",
      "content-length",
      "188",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:07 GMT",
      "content-type",
      "application/json",
      "content-length",
      "188",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List One" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:08 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 2,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 2,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "334",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 2,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 2,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:10 GMT",
      "content-type",
      "application/json",
      "content-length",
      "334",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List Two" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:11 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:12 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:13 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:13 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:14 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:15 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 2,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:04:09Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:04:12Z",
        },
      ],
      Total: 2,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "241",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "480",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:18 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:19 GMT",
      "content-type",
      "application/json",
      "content-length",
      "480",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "remove",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:20 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:21 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:21 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:22 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:04:09Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:23 GMT",
      "content-type",
      "application/json",
      "content-length",
      "140",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:24 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:25 GMT",
      "content-type",
      "application/json",
      "content-length",
      "480",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:25 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:26 GMT",
      "content-type",
      "application/json",
      "content-length",
      "480",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:27 GMT",
      "content-type",
      "application/json",
      "content-length",
      "480",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List Three" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:28 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:29 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:30 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:30 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:31 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Three" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:32 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:33 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:04:09Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:04:25Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:04:29Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:33 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:34 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 4,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 4,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:35 GMT",
      "content-type",
      "application/json",
      "content-length",
      "628",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 4,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 4,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:36 GMT",
      "content-type",
      "application/json",
      "content-length",
      "628",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List Four" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:37 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58710/managecontact", {
    Action: "remove",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:38 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:38 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Four" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:39 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:40 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:04:09Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:04:25Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:04:29Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:42 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:43 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:44 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:04:09Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:04:25Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:04:29Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:45 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:45 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:46 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:47 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", {
    IsExcludedFromCampaigns: "false",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:48 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "remove",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:50 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "remove",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:51 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:52 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "remove",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:53 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:53 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181876,
          Email: "lucas.nogueira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:54 GMT",
      "content-type",
      "application/json",
      "content-length",
      "168",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:55 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "addnoforce",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181876,
          Email: "lucas.nogueira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:56 GMT",
      "content-type",
      "application/json",
      "content-length",
      "168",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:57 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "addnoforce",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181876,
          Email: "lucas.nogueira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:58 GMT",
      "content-type",
      "application/json",
      "content-length",
      "168",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:58 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:04:59 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 31 Aug 2021 03:05:00 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:01 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:01 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:02 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Three" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:03 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181876/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:04:54Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:04:56Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:04:57Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:05 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:05 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:06 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:07 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "remove",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181876,
          Email: "lucas.nogueira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:08 GMT",
      "content-type",
      "application/json",
      "content-length",
      "164",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "remove",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181876,
          Email: "lucas.nogueira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "164",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:10 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "remove",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181876,
          Email: "lucas.nogueira@mailinator.com",
          Action: "remove",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:11 GMT",
      "content-type",
      "application/json",
      "content-length",
      "164",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:12 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:13 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:13 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:14 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:15 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: {},
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181876/getcontactslists")
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 31 Aug 2021 03:05:18 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:19 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:20 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:05:13Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:05:14Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:05:16Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:21 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:21 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:04:48Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:04:48Z",
          ID: 261181876,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:22 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [{ Name: "phone", Value: "+5583999999997" }],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [{ Name: "phone", Value: "+5583999999997" }],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:23 GMT",
      "content-type",
      "application/json",
      "content-length",
      "172",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/261181876")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "251e2712-30b1-44c5-ac72-b895c2c20a0c",
    "date",
    "Tue, 31 Aug 2021 03:05:24 GMT",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:25 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:25 GMT",
      "content-type",
      "application/json",
      "content-length",
      "195",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:26 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:27 GMT",
      "content-type",
      "application/json",
      "content-length",
      "195",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:28 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:29 GMT",
      "content-type",
      "application/json",
      "content-length",
      "195",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/lucas.nogueira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:29 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:30 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [{ Name: "phone", Value: "+5583999999997" }],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:31 GMT",
      "content-type",
      "application/json",
      "content-length",
      "172",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:32 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:05:13Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:05:14Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:05:16Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:33 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:33 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/pilo.paz@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:34 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/caio.silveira@mailinator.com", {
    Data: [{ Name: "firstname", Value: "Caio" }],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [{ Name: "firstname", Value: "Caio" }],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:35 GMT",
      "content-type",
      "application/json",
      "content-length",
      "166",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:36 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { firstname: "Caio", phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:37 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:37 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58708/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { firstname: "Caio", phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:38 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:39 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58709/managecontact", {
    Action: "addnoforce",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Email: "caio.silveira@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { firstname: "Caio", phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:40 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/pilo.paz@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181865")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181865,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 261181865,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:42 GMT",
      "content-type",
      "application/json",
      "content-length",
      "216",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:43 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181865/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:05:13Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58708,
          SubscribedAt: "2021-08-31T03:05:14Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58709,
          SubscribedAt: "2021-08-31T03:05:16Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:44 GMT",
      "content-type",
      "application/json",
      "content-length",
      "342",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:45 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:03:48Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:03:48Z",
          ID: 261181865,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:45 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", {
    IsExcludedFromCampaigns: "false",
    Email: "sandro.arturo@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:46 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/sandro.arturo@mailinator.com", {
    Data: [
      { Name: "firstname", Value: "Lucas" },
      { Name: "phone", Value: "+5583999999997" },
    ],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181886,
          Data: [
            { Name: "firstname", Value: "Lucas" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 261181886,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:47 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/261181865")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "9c1a4cc3-33b0-4cf4-9ecf-2b9c58b00d8e",
    "date",
    "Tue, 31 Aug 2021 03:05:48 GMT",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58707/managecontact", {
    Action: "addnoforce",
    Email: "sandro.arturo@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181886,
          Email: "sandro.arturo@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { firstname: "Lucas", phone: "+5583999999997" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "218",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:50 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181886")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181886,
          Data: [
            { Name: "firstname", Value: "Lucas" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 261181886,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:51 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:52 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:53 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181886/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:05:49Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:53 GMT",
      "content-type",
      "application/json",
      "content-length",
      "140",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:54 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:55 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:56 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181886")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181886,
          Data: [
            { Name: "firstname", Value: "Lucas" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 261181886,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:57 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:57 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181886/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58707,
          SubscribedAt: "2021-08-31T03:05:49Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:58 GMT",
      "content-type",
      "application/json",
      "content-length",
      "140",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:05:59 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:05:46Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:05:46Z",
          ID: 261181886,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/261181886")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "c86ec6bd-e339-4308-bd3b-e5757df7c8c1",
    "date",
    "Tue, 31 Aug 2021 03:06:01 GMT",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:01 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:02 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:03 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/sandro.arturo@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:05 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", {
    IsExcludedFromCampaigns: "false",
    Email: "carlos.solimoes@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:06:06Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:06:06Z",
          ID: 261181889,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:06 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/carlos.solimoes@mailinator.com", {
    Data: [{ Name: "firstname", Value: "Carlos" }],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181889,
          Data: [{ Name: "firstname", Value: "Carlos" }],
          ID: 261181889,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:07 GMT",
      "content-type",
      "application/json",
      "content-length",
      "168",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist")
  .once()
  .reply(
    200,
    {
      Count: 5,
      Data: [
        {
          Address: "tok6qnmhx",
          CreatedAt: "2021-08-17T17:13:40Z",
          ID: 56963,
          IsDeleted: false,
          Name: "MyFirstTest",
          SubscriberCount: 1,
        },
        {
          Address: "exw8vnt4f",
          CreatedAt: "2021-08-31T03:04:08Z",
          ID: 58707,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
        {
          Address: "o4pj92y8e",
          CreatedAt: "2021-08-31T03:04:11Z",
          ID: 58708,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
        {
          Address: "epz4rnc1j",
          CreatedAt: "2021-08-31T03:04:28Z",
          ID: 58709,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 5,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:08 GMT",
      "content-type",
      "application/json",
      "content-length",
      "775",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58710/managecontact", {
    Action: "addnoforce",
    Email: "carlos.solimoes@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181889,
          Email: "carlos.solimoes@mailinator.com",
          Action: "addnoforce",
          Name: "",
          Properties: { firstname: "Carlos" },
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "193",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:06:06Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:06:06Z",
          ID: 261181889,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181889")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181889,
          Data: [{ Name: "firstname", Value: "Carlos" }],
          ID: 261181889,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:10 GMT",
      "content-type",
      "application/json",
      "content-length",
      "168",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Four" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "rhx9nnhzw",
          CreatedAt: "2021-08-31T03:04:37Z",
          ID: 58710,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:11 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/carlos.solimoes@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:06:06Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:06:06Z",
          ID: 261181889,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:12 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/261181889/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58710,
          SubscribedAt: "2021-08-31T03:06:09Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:12 GMT",
      "content-type",
      "application/json",
      "content-length",
      "140",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/jake.jill@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:13 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/pilo.paz@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:14 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/jake.jill@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:15 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/pilo.paz@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", {
    IsExcludedFromCampaigns: "false",
    Email: "jake.jill@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:06:16Z",
          DeliveredCount: 0,
          Email: "jake.jill@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:06:16Z",
          ID: 261181894,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "411",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .put("/v3/REST/contactdata/jake.jill@mailinator.com", {
    Data: [{ Name: "firstname", Value: "Jake" }],
  })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181894,
          Data: [{ Name: "firstname", Value: "Jake" }],
          ID: 261181894,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "166",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/jake.jill@mailinator.com")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-31T03:06:16Z",
          DeliveredCount: 0,
          Email: "jake.jill@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-31T03:06:16Z",
          ID: 261181894,
          IsExcludedFromCampaigns: false,
          IsOptInPending: false,
          IsSpamComplaining: false,
          LastActivityAt: "",
          LastUpdateAt: "",
          Name: "",
          UnsubscribedAt: "",
          UnsubscribedBy: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:18 GMT",
      "content-type",
      "application/json",
      "content-length",
      "411",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/261181894")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 261181894,
          Data: [{ Name: "firstname", Value: "Jake" }],
          ID: 261181894,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:19 GMT",
      "content-type",
      "application/json",
      "content-length",
      "166",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/000")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:20 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", { IsExcludedFromCampaigns: "false", Email: "000" })
  .once()
  .reply(
    400,
    {
      ErrorInfo: "",
      ErrorMessage:
        'Internal error: Invalid email address "000", reason: "No @ character in mail"',
      StatusCode: 400,
    },
    [
      "date",
      "Tue, 31 Aug 2021 03:06:20 GMT",
      "content-type",
      "application/json",
      "content-length",
      "142",
      "connection",
      "close",
    ]
  );
