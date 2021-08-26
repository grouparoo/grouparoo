const nock = require("nock");

nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/caio.silveira@mailinator.com")
  .once()
  .reply(
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:31 GMT",
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
      "Tue, 24 Aug 2021 23:04:32 GMT",
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
      "Tue, 24 Aug 2021 23:04:33 GMT",
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
      "Tue, 24 Aug 2021 23:04:34 GMT",
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
      "Tue, 24 Aug 2021 23:04:35 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20One" })
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:04:35 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Two" })
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:04:36 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Three" })
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:04:37 GMT",
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
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:04:38 GMT",
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
    404,
    { ErrorInfo: "", ErrorMessage: "Object not found", StatusCode: 404 },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:39 GMT",
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
      "Tue, 24 Aug 2021 23:04:39 GMT",
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
      "Tue, 24 Aug 2021 23:04:40 GMT",
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
      "Tue, 24 Aug 2021 23:04:41 GMT",
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
    IsExcludedFromCampaigns: "true",
    Email: "caio.silveira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:42 GMT",
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
          ContactID: 254744452,
          Data: [{ Name: "firstname", Value: "Caio" }],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:43 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:43 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744452,
          Data: [{ Name: "firstname", Value: "Caio" }],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:44 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:45 GMT",
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
          ContactID: 254744452,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "lastname", Value: "Silveira" },
            { Name: "phone", Value: "+5583999999999" },
          ],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:46 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:47 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744452,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "lastname", Value: "Silveira" },
            { Name: "phone", Value: "+5583999999999" },
          ],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:47 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:48 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744452,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "lastname", Value: "Silveira" },
            { Name: "phone", Value: "+5583999999999" },
          ],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:50 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:50 GMT",
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
          ContactID: 254744452,
          Data: [
            { Name: "date_field", Value: "2021-02-11T23:03:03.000Z" },
            { Name: "firstname", Value: "Evan" },
            { Name: "float_field", Value: "30.39" },
            { Name: "lastname", Value: "Podolsky" },
            { Name: "number_field", Value: "3039" },
            { Name: "phone", Value: "+5583999999998" },
          ],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:51 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:52 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744452,
          Data: [
            { Name: "firstname", Value: "Evan" },
            { Name: "lastname", Value: "Podolsky" },
            { Name: "number_field", Value: "3039" },
            { Name: "date_field", Value: "2021-02-11T23:03:03Z" },
            { Name: "phone", Value: "+5583999999998" },
            { Name: "float_field", Value: "30.39" },
          ],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:53 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:54 GMT",
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
      "Tue, 24 Aug 2021 23:04:55 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:55 GMT",
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
        { ContactID: 254744452, Data: [], ID: 254744452, MethodCollection: "" },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:56 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:57 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        { ContactID: 254744452, Data: [], ID: 254744452, MethodCollection: "" },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:04:58 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:04:59 GMT",
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
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:04:59 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List One" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:01 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Two" })
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:05:02 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List Two" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:03 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:03 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:04 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:05 GMT",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:06 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:07 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 2,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:05:01Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:05:03Z",
        },
      ],
      Total: 2,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:07 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:08 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:10 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:11 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:11 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:12 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:13 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:14 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:05:01Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:15 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:15 GMT",
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
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactslist/")
  .query({ Name: "List%20Three" })
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:05:18 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List Three" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:19 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:19 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:20 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:21 GMT",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:22 GMT",
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:23 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:23 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:05:01Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:05:17Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:05:19Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:24 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:25 GMT",
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
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:05:26 GMT",
    "content-type",
    "application/json",
    "content-length",
    "41",
    "connection",
    "close",
  ]);
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist", { Name: "List Four" })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          Address: "roaibnxis",
          CreatedAt: "2021-08-24T23:05:27Z",
          ID: 58030,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:27 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58030/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:27 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:28 GMT",
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
          Address: "roaibnxis",
          CreatedAt: "2021-08-24T23:05:27Z",
          ID: 58030,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:29 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:30 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:05:01Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:05:17Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:05:19Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:31 GMT",
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
      "Tue, 24 Aug 2021 23:05:31 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:32 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:33 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:34 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:05:01Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:05:17Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:05:19Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:35 GMT",
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
      "Tue, 24 Aug 2021 23:05:35 GMT",
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
      "Tue, 24 Aug 2021 23:05:36 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:37 GMT",
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
    IsExcludedFromCampaigns: "true",
    Email: "lucas.nogueira@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:38 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:39 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:39 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:40 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:42 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:05:43 GMT",
      "content-type",
      "application/json",
      "content-length",
      "163",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:43 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744731,
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
      "Tue, 24 Aug 2021 23:05:44 GMT",
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
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:45 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744731,
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
      "Tue, 24 Aug 2021 23:05:46 GMT",
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
  .query({ Name: "List%20Three" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:47 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744731,
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
      "Tue, 24 Aug 2021 23:05:48 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:48 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:49 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:05:50 GMT",
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
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:51 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:52 GMT",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:52 GMT",
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:53 GMT",
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
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:54 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744731/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:05:44Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:05:46Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:05:48Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:55 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:56 GMT",
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
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:05:56 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:57 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744731,
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
      "Tue, 24 Aug 2021 23:05:58 GMT",
      "content-type",
      "application/json",
      "content-length",
      "164",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:05:59 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744731,
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
      "Tue, 24 Aug 2021 23:06:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "164",
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744731,
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
      "Tue, 24 Aug 2021 23:06:01 GMT",
      "content-type",
      "application/json",
      "content-length",
      "164",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:02 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:03 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:04 GMT",
      "content-type",
      "application/json",
      "content-length",
      "167",
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:05 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:06 GMT",
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
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:07 GMT",
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
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:08 GMT",
      "content-type",
      "application/json",
      "content-length",
      "416",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744731/getcontactslists")
  .once()
  .reply(200, { Count: 0, Data: [], Total: 0 }, [
    "date",
    "Tue, 24 Aug 2021 23:06:08 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:09 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:10 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:06:03Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:06:04Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:06:06Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:11 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:12 GMT",
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
          CreatedAt: "2021-08-24T23:05:38Z",
          DeliveredCount: 0,
          Email: "lucas.nogueira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:05:38Z",
          ID: 254744731,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:12 GMT",
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
          ContactID: 254744452,
          Data: [{ Name: "phone", Value: "+5583999999997" }],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:13 GMT",
      "content-type",
      "application/json",
      "content-length",
      "172",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/254744731")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "9d928108-9119-4e95-bbeb-0fe481566c27",
    "date",
    "Tue, 24 Aug 2021 23:06:14 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:15 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "195",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "195",
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:18 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:19 GMT",
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
      "Tue, 24 Aug 2021 23:06:20 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:21 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744452,
          Data: [{ Name: "phone", Value: "+5583999999997" }],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:21 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:22 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:06:03Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:06:04Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:06:06Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:23 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:24 GMT",
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
      "Tue, 24 Aug 2021 23:06:25 GMT",
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
          ContactID: 254744452,
          Data: [{ Name: "firstname", Value: "Caio" }],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:25 GMT",
      "content-type",
      "application/json",
      "content-length",
      "166",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:26 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:27 GMT",
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
  .query({ Name: "List%20Two" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:28 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58028/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:29 GMT",
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
  .query({ Name: "List%20Three" })
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:29 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58029/managecontact", {
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
          ContactID: 254744452,
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
      "Tue, 24 Aug 2021 23:06:30 GMT",
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
      "Tue, 24 Aug 2021 23:06:31 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:32 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744452")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744452,
          Data: [
            { Name: "firstname", Value: "Caio" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 254744452,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:33 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:33 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744452/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 3,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:06:03Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58028,
          SubscribedAt: "2021-08-24T23:06:04Z",
        },
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58029,
          SubscribedAt: "2021-08-24T23:06:06Z",
        },
      ],
      Total: 3,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:34 GMT",
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
      "Tue, 24 Aug 2021 23:06:35 GMT",
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
          CreatedAt: "2021-08-24T23:04:42Z",
          DeliveredCount: 0,
          Email: "caio.silveira@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:04:42Z",
          ID: 254744452,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:36 GMT",
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
    IsExcludedFromCampaigns: "true",
    Email: "sandro.arturo@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:37 GMT",
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
          ContactID: 254744990,
          Data: [
            { Name: "firstname", Value: "Lucas" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 254744990,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:37 GMT",
      "content-type",
      "application/json",
      "content-length",
      "217",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/254744452")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "1c8b4e6b-6bf7-4050-9328-bf8e54b66833",
    "date",
    "Tue, 24 Aug 2021 23:06:38 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:39 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58027/managecontact", {
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
          ContactID: 254744990,
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
      "Tue, 24 Aug 2021 23:06:40 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:41 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744990")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744990,
          Data: [
            { Name: "firstname", Value: "Lucas" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 254744990,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:41 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:42 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:43 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744990/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:06:40Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:44 GMT",
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
      "Tue, 24 Aug 2021 23:06:45 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:45 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:46 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254744990")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254744990,
          Data: [
            { Name: "firstname", Value: "Lucas" },
            { Name: "phone", Value: "+5583999999997" },
          ],
          ID: 254744990,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:47 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:48 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254744990/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58027,
          SubscribedAt: "2021-08-24T23:06:40Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:49 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:49 GMT",
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
          CreatedAt: "2021-08-24T23:06:37Z",
          DeliveredCount: 0,
          Email: "sandro.arturo@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:37Z",
          ID: 254744990,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:50 GMT",
      "content-type",
      "application/json",
      "content-length",
      "415",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/254744990")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "8d1294b9-fd73-4a8a-b1dc-be2e2e3e810b",
    "date",
    "Tue, 24 Aug 2021 23:06:51 GMT",
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
      "Tue, 24 Aug 2021 23:06:52 GMT",
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
      "Tue, 24 Aug 2021 23:06:53 GMT",
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
      "Tue, 24 Aug 2021 23:06:53 GMT",
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
      "Tue, 24 Aug 2021 23:06:54 GMT",
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
      "Tue, 24 Aug 2021 23:06:55 GMT",
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
      "Tue, 24 Aug 2021 23:06:56 GMT",
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
    IsExcludedFromCampaigns: "true",
    Email: "carlos.solimoes@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-24T23:06:57Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:57Z",
          ID: 254745076,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:06:57 GMT",
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
          ContactID: 254745076,
          Data: [{ Name: "firstname", Value: "Carlos" }],
          ID: 254745076,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:57 GMT",
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
          Address: "roaibnxis",
          CreatedAt: "2021-08-24T23:05:27Z",
          ID: 58030,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:06:58 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contactslist/58030/managecontact", {
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
          ContactID: 254745076,
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
      "Tue, 24 Aug 2021 23:06:59 GMT",
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
          CreatedAt: "2021-08-24T23:06:57Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:57Z",
          ID: 254745076,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:07:00 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254745076")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254745076,
          Data: [{ Name: "firstname", Value: "Carlos" }],
          ID: 254745076,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:01 GMT",
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
          Address: "roaibnxis",
          CreatedAt: "2021-08-24T23:05:27Z",
          ID: 58030,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 1,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:01 GMT",
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
          CreatedAt: "2021-08-24T23:06:57Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:57Z",
          ID: 254745076,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:07:02 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contact/254745076/getcontactslists")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          IsActive: true,
          IsUnsub: false,
          ListID: 58030,
          SubscribedAt: "2021-08-24T23:06:59Z",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:03 GMT",
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
      "Tue, 24 Aug 2021 23:07:04 GMT",
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
      "Tue, 24 Aug 2021 23:07:05 GMT",
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
      "Tue, 24 Aug 2021 23:07:05 GMT",
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
      "Tue, 24 Aug 2021 23:07:06 GMT",
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
    IsExcludedFromCampaigns: "true",
    Email: "jake.jill@mailinator.com",
  })
  .once()
  .reply(
    201,
    {
      Count: 1,
      Data: [
        {
          CreatedAt: "2021-08-24T23:07:07Z",
          DeliveredCount: 0,
          Email: "jake.jill@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:07:07Z",
          ID: 254745125,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:07:07 GMT",
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
          ContactID: 254745125,
          Data: [{ Name: "firstname", Value: "Jake" }],
          ID: 254745125,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:08 GMT",
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
          CreatedAt: "2021-08-24T23:07:07Z",
          DeliveredCount: 0,
          Email: "jake.jill@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:07:07Z",
          ID: 254745125,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:07:09 GMT",
      "content-type",
      "application/json",
      "content-length",
      "411",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .get("/v3/REST/contactdata/254745125")
  .once()
  .reply(
    200,
    {
      Count: 1,
      Data: [
        {
          ContactID: 254745125,
          Data: [{ Name: "firstname", Value: "Jake" }],
          ID: 254745125,
          MethodCollection: "",
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:09 GMT",
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
      "Tue, 24 Aug 2021 23:07:10 GMT",
      "content-type",
      "application/json",
      "content-length",
      "77",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .post("/v3/REST/contact", { IsExcludedFromCampaigns: "true", Email: "000" })
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
      "Tue, 24 Aug 2021 23:07:11 GMT",
      "content-type",
      "application/json",
      "content-length",
      "142",
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
      "Tue, 24 Aug 2021 23:07:12 GMT",
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
      "Tue, 24 Aug 2021 23:07:13 GMT",
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
      "Tue, 24 Aug 2021 23:07:13 GMT",
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
          CreatedAt: "2021-08-24T23:06:57Z",
          DeliveredCount: 0,
          Email: "carlos.solimoes@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:06:57Z",
          ID: 254745076,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:07:14 GMT",
      "content-type",
      "application/json",
      "content-length",
      "417",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/254745076")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "91afc3c6-18ca-484c-a1a1-9561f44d249a",
    "date",
    "Tue, 24 Aug 2021 23:07:15 GMT",
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
          CreatedAt: "2021-08-24T23:07:07Z",
          DeliveredCount: 0,
          Email: "jake.jill@mailinator.com",
          ExclusionFromCampaignsUpdatedAt: "2021-08-24T23:07:07Z",
          ID: 254745125,
          IsExcludedFromCampaigns: true,
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
      "Tue, 24 Aug 2021 23:07:16 GMT",
      "content-type",
      "application/json",
      "content-length",
      "411",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v4/contacts/254745125")
  .once()
  .reply(200, "", [
    "content-length",
    "0",
    "content-type",
    "application/json; charset=UTF-8",
    "x-mj-request-guid",
    "3e4eb7f5-0979-4e9e-b7c5-6d9cd95519dc",
    "date",
    "Tue, 24 Aug 2021 23:07:17 GMT",
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
          Address: "ekp7wv6k0",
          CreatedAt: "2021-08-24T23:05:00Z",
          ID: 58027,
          IsDeleted: false,
          Name: "List One",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:17 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58027")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 24 Aug 2021 23:07:18 GMT",
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
          Address: "o6i8iq1t8",
          CreatedAt: "2021-08-24T23:05:03Z",
          ID: 58028,
          IsDeleted: false,
          Name: "List Two",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:19 GMT",
      "content-type",
      "application/json",
      "content-length",
      "185",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58028")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 24 Aug 2021 23:07:20 GMT",
    "content-type",
    "application/json",
    "connection",
    "close",
  ]);
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
          Address: "e20mqmryp",
          CreatedAt: "2021-08-24T23:05:19Z",
          ID: 58029,
          IsDeleted: false,
          Name: "List Three",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:21 GMT",
      "content-type",
      "application/json",
      "content-length",
      "187",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58029")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 24 Aug 2021 23:07:22 GMT",
    "content-type",
    "application/json",
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
          Address: "roaibnxis",
          CreatedAt: "2021-08-24T23:05:27Z",
          ID: 58030,
          IsDeleted: false,
          Name: "List Four",
          SubscriberCount: 0,
        },
      ],
      Total: 1,
    },
    [
      "date",
      "Tue, 24 Aug 2021 23:07:22 GMT",
      "content-type",
      "application/json",
      "content-length",
      "186",
      "connection",
      "close",
    ]
  );
nock("https://api.mailjet.com:443", { encodedQueryParams: true })
  .delete("/v3/REST/contactslist/58030")
  .once()
  .reply(204, "", [
    "date",
    "Tue, 24 Aug 2021 23:07:23 GMT",
    "content-type",
    "application/json",
    "connection",
    "close",
  ]);
