const nock = require("nock");

nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2d866abe-aaac-4c31-ba30-23820fd60265",
      "x-amz-apigw-id",
      "fItz_GWQvHcFh1g=",
      "x-amzn-trace-id",
      "Root=1-6099c34c-548049601746abef60bfd17b;Sampled=0",
      "x-envoy-upstream-service-time",
      "135",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "20",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2d4bd64a-9277-448f-b0cf-8dc59301e7dd",
      "x-amz-apigw-id",
      "fIt0GG-UvHcF-ow=",
      "x-amzn-trace-id",
      "Root=1-6099c34d-24ef28f40fe11d751665009c;Sampled=0",
      "x-envoy-upstream-service-time",
      "141",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "19",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a87f6be9-2c02-4e9b-8921-f641c6a37923",
      "x-amz-apigw-id",
      "fIt0MEuOvHcF_Iw=",
      "x-amzn-trace-id",
      "Root=1-6099c34d-236aff9240c4e5383ee109c6;Sampled=0",
      "x-envoy-upstream-service-time",
      "184",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "19",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "eb6a5d0d-96e0-4b5b-ab5d-730f39593482",
      "x-amz-apigw-id",
      "fIt0SFmlvHcFwqw=",
      "x-amzn-trace-id",
      "Root=1-6099c34e-28e1f34d6a0bd9de6629978b;Sampled=0",
      "x-envoy-upstream-service-time",
      "169",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "18",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2a408941-2422-4451-a350-ca75ab89e014",
      "x-amz-apigw-id",
      "fIt0YHQzvHcFfog=",
      "x-amzn-trace-id",
      "Root=1-6099c34f-7303cf34141059e01aca291e;Sampled=0",
      "x-envoy-upstream-service-time",
      "247",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "17",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1340",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2ff2e55d-ac72-427c-a2f3-87e4c998e03d",
      "x-amz-apigw-id",
      "fIt0fFLfvHcFqGA=",
      "x-amzn-trace-id",
      "Root=1-6099c34f-6a35e90911df5d731b0dbd6f;Sampled=0",
      "x-envoy-upstream-service-time",
      "149",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "17",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1340",
      "Connection",
      "close",
      "x-amzn-requestid",
      "f8f870b3-fe64-4937-b14a-4092152ba99a",
      "x-amz-apigw-id",
      "fIt0lFmOvHcFzFA=",
      "x-amzn-trace-id",
      "Root=1-6099c350-6c6a8b3f32703df008cf3316;Sampled=0",
      "x-envoy-upstream-service-time",
      "107",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "16",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1340",
      "Connection",
      "close",
      "x-amzn-requestid",
      "277e5558-b3aa-47e3-9bd9-5f643d89244c",
      "x-amz-apigw-id",
      "fIt0rFeEvHcFg4g=",
      "x-amzn-trace-id",
      "Root=1-6099c351-6edea9395afde361776f5262;Sampled=0",
      "x-envoy-upstream-service-time",
      "148",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:35:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1340",
      "Connection",
      "close",
      "x-amzn-requestid",
      "06395a79-1297-401a-8232-ab86f52f2140",
      "x-amz-apigw-id",
      "fIt0xH7hPHcFmiQ=",
      "x-amzn-trace-id",
      "Root=1-6099c351-65925b3323efe65e63cb5dbd;Sampled=0",
      "x-envoy-upstream-service-time",
      "121",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "09564b69-34ac-4bdd-8ebc-0ffeaaf3d1db",
      "x-amz-apigw-id",
      "fIt5kEgwPHcFd-g=",
      "x-amzn-trace-id",
      "Root=1-6099c370-03a31a3b0dd38c0f70e219b8;Sampled=0",
      "x-envoy-upstream-service-time",
      "211",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "44",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "fe375a76-2e99-4f0e-aa7f-0f17e79f90ef",
      "x-amz-apigw-id",
      "fIt5rHx3vHcF1OA=",
      "x-amzn-trace-id",
      "Root=1-6099c371-22f5f94451c0df666748549a;Sampled=0",
      "x-envoy-upstream-service-time",
      "331",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "43",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "46877e6c-033e-4dc6-86ba-fe30fa934520",
      "x-amz-apigw-id",
      "fIt5zG6XPHcFhuA=",
      "x-amzn-trace-id",
      "Root=1-6099c371-033030f8356ccc1e097a79a1;Sampled=0",
      "x-envoy-upstream-service-time",
      "248",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "43",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b2c5c9f0-5244-4a20-93b0-edbb7d14b5e9",
      "x-amz-apigw-id",
      "fIt55EKNPHcF8ew=",
      "x-amzn-trace-id",
      "Root=1-6099c372-17fa29994c47c7ab70baa6b2;Sampled=0",
      "x-envoy-upstream-service-time",
      "152",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "42",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1921db16-82e3-423f-be4b-94e1c81067a0",
      "x-amz-apigw-id",
      "fIt5_EzAvHcFz5A=",
      "x-amzn-trace-id",
      "Root=1-6099c372-40d65eaf5968965533a3d11f;Sampled=0",
      "x-envoy-upstream-service-time",
      "138",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "42",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "caio.silveira@mailinator.com",
        first_name: "Caio",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "d32c6eab-107c-4d26-8428-c8084d9544d3" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:36:19 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "96a55e53-0efa-4529-b3fd-153b8627ca6e",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIt6EHVJvHcF28A=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c373-039075706b58d3fb06fb9c68;Sampled=0",
    "x-envoy-upstream-service-time",
    "362",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "41",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:36:49Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4142c66b-696a-4c76-aff9-d70fbc7e4c68",
      "x-amz-apigw-id",
      "fIt-4H5-PHcF0sQ=",
      "x-amzn-trace-id",
      "Root=1-6099c392-32be5f8a2c1aa696496941e7;Sampled=0",
      "x-envoy-upstream-service-time",
      "154",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "194",
      "x-ratelimit-reset",
      "10",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:36:49Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:36:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "35385eff-c5e6-4cba-9fe0-d4e6e90006fd",
      "x-amz-apigw-id",
      "fIt-9HoNvHcFksA=",
      "x-amzn-trace-id",
      "Root=1-6099c392-3694a3464c6a0f7304e67fbe;Sampled=0",
      "x-envoy-upstream-service-time",
      "271",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "193",
      "x-ratelimit-reset",
      "10",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "caio.silveira@mailinator.com",
        first_name: "Caio",
        last_name: "Silveira",
        phone_number: "+5583999999999",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "4a2aafe1-1a83-4ea7-8713-7e8e25d07c6d" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:36:52 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "2dcdd149-a643-4d63-93fc-4c7128c091ae",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIt_EFByPHcFkpQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c393-5bbcd7be79f40fdf724e090f;Sampled=0",
    "x-envoy-upstream-service-time",
    "607",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "198",
    "x-ratelimit-reset",
    "9",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999999",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:37:21Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "683",
      "Connection",
      "close",
      "x-amzn-requestid",
      "860f653d-dbac-49a3-a77d-3bc114c6a4d3",
      "x-amz-apigw-id",
      "fIuD7G_zvHcFQ9g=",
      "x-amzn-trace-id",
      "Root=1-6099c3b2-1ef4e2223d4917865997ca9e;Sampled=0",
      "x-envoy-upstream-service-time",
      "155",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "38",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999999",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:37:21Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "683",
      "Connection",
      "close",
      "x-amzn-requestid",
      "229d0d75-6924-4fcf-b690-e97b033a7149",
      "x-amz-apigw-id",
      "fIuEAHjdPHcF-AQ=",
      "x-amzn-trace-id",
      "Root=1-6099c3b3-1ab13c202ab356ed3be7224b;Sampled=0",
      "x-envoy-upstream-service-time",
      "345",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "37",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e179545a-2cd5-40fa-9312-56ef8bbdf83c",
      "x-amz-apigw-id",
      "fIuEHFI7oAMFzNQ=",
      "x-amzn-trace-id",
      "Root=1-6099c3b3-46f2e30a79ba6c714da0b6bf;Sampled=0",
      "x-envoy-upstream-service-time",
      "77",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "37",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "cb528cd4-c1f6-4f6f-a65f-485cd64264cc",
      "x-amz-apigw-id",
      "fIuEMF02oAMFZ5A=",
      "x-amzn-trace-id",
      "Root=1-6099c3b4-2a5c4cc64c693e1a0904ea1a;Sampled=0",
      "x-envoy-upstream-service-time",
      "30",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "36",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ddcc7b3b-9530-4e9d-a4df-35d1cf57fe22",
      "x-amz-apigw-id",
      "fIuERH9gIAMF8Gw=",
      "x-amzn-trace-id",
      "Root=1-6099c3b4-2b6a13c27f6eb3dc1c96b420;Sampled=0",
      "x-envoy-upstream-service-time",
      "118",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "36",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0cccd829-c30c-4e79-9881-eeacedd97091",
      "x-amz-apigw-id",
      "fIuEWFowIAMFw_A=",
      "x-amzn-trace-id",
      "Root=1-6099c3b5-4502f43d3d5e30e952fbc8ba;Sampled=0",
      "x-envoy-upstream-service-time",
      "82",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "35",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "db6866f3-de22-4289-a369-d25ca97e33b7",
      "x-amz-apigw-id",
      "fIuEbFzooAMF6-g=",
      "x-amzn-trace-id",
      "Root=1-6099c3b5-610ba478533915100a06deb9;Sampled=0",
      "x-envoy-upstream-service-time",
      "28",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "595",
      "x-ratelimit-reset",
      "35",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999999",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:37:21Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:26 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "683",
      "Connection",
      "close",
      "x-amzn-requestid",
      "05a91e11-ee84-44d6-9175-8721c37ee8f0",
      "x-amz-apigw-id",
      "fIuEfEiLPHcF7tw=",
      "x-amzn-trace-id",
      "Root=1-6099c3b6-38b4b5a00e816ea431a65edb;Sampled=0",
      "x-envoy-upstream-service-time",
      "298",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "34",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999999",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:37:21Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "683",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4a7fcf5e-80ed-4555-97af-a687d6cb4090",
      "x-amz-apigw-id",
      "fIuEmHWSPHcF07g=",
      "x-amzn-trace-id",
      "Root=1-6099c3b6-6738175c26e105be66721554;Sampled=0",
      "x-envoy-upstream-service-time",
      "323",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "34",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "991800e6-4c91-4246-a17e-defacd9a002a",
      "x-amz-apigw-id",
      "fIuEtHRQIAMF9kw=",
      "x-amzn-trace-id",
      "Root=1-6099c3b7-0956c92b62c8319f109b2c22;Sampled=0",
      "x-envoy-upstream-service-time",
      "33",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "594",
      "x-ratelimit-reset",
      "33",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0744ca9d-07ac-4ac5-9ca4-4d57fd6f634f",
      "x-amz-apigw-id",
      "fIuEyEAZIAMF7DA=",
      "x-amzn-trace-id",
      "Root=1-6099c3b8-424ac9351abe4bed0a0f9424;Sampled=0",
      "x-envoy-upstream-service-time",
      "26",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "593",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "91ffbd2c-cc1a-4a4b-877b-046d1907daea",
      "x-amz-apigw-id",
      "fIuE2GNZoAMF-3w=",
      "x-amzn-trace-id",
      "Root=1-6099c3b8-1c7c604e11db1d8a1d20e4ad;Sampled=0",
      "x-envoy-upstream-service-time",
      "30",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "592",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2a2e75a0-624c-44c1-9614-1ad0d02e9795",
      "x-amz-apigw-id",
      "fIuE6F1nIAMFrAg=",
      "x-amzn-trace-id",
      "Root=1-6099c3b8-45cc25ad661b3a0f2555e4e3;Sampled=0",
      "x-envoy-upstream-service-time",
      "26",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "591",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:37:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "cc4d78e5-f1b4-4887-b64b-adea80b52ca3",
      "x-amz-apigw-id",
      "fIuE_HJ8oAMFi3A=",
      "x-amzn-trace-id",
      "Root=1-6099c3b9-74c67ee122c1b868573f3c77;Sampled=0",
      "x-envoy-upstream-service-time",
      "33",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "590",
      "x-ratelimit-reset",
      "31",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {
          e2_T: "text",
          e3_N: 15.5,
          e4_D: "2021-02-11T23:03:03.000Z",
        },
        email: "caio.silveira@mailinator.com",
        first_name: "Evan",
        phone_number: "+5583999999998",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "2a16f00d-d67a-41c1-8f38-1995a62f6883" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:37:30 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "e01914c5-32fd-48f2-a5ac-2ff377ad6efb",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuFDHKgPHcFxzQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c3b9-0e721ff959ba755679890217;Sampled=0",
    "x-envoy-upstream-service-time",
    "332",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "31",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:38:00Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "dca34e63-fec0-4ef8-adbe-d5a15b5679d0",
      "x-amz-apigw-id",
      "fIuJ7Hw4PHcF6KQ=",
      "x-amzn-trace-id",
      "Root=1-6099c3d8-0c8658693b4bed027b255454;Sampled=0",
      "x-envoy-upstream-service-time",
      "305",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "60",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:38:00Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "02cdd330-8ff1-4e02-aa14-ddac42f75adc",
      "x-amz-apigw-id",
      "fIuKDHRHvHcFWsA=",
      "x-amzn-trace-id",
      "Root=1-6099c3d9-096ba81e51cf84385bfc54c6;Sampled=0",
      "x-envoy-upstream-service-time",
      "273",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "59",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "794b6b9a-4276-4f1a-ab91-b9e3c3cd0a27",
      "x-amz-apigw-id",
      "fIuKKGJtoAMFr8Q=",
      "x-amzn-trace-id",
      "Root=1-6099c3da-4a7f0b4f11c994af261d38c1;Sampled=0",
      "x-envoy-upstream-service-time",
      "52",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "58",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e42e7624-696d-4936-9c0f-bf1ae9a802b3",
      "x-amz-apigw-id",
      "fIuKPFFAIAMF4ZQ=",
      "x-amzn-trace-id",
      "Root=1-6099c3db-1447c7e83af98ef41698a5b5;Sampled=0",
      "x-envoy-upstream-service-time",
      "31",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "57",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/field_definitions")
  .once()
  .reply(
    200,
    {
      custom_fields: [
        {
          id: "e2_T",
          name: "text_field",
          field_type: "Text",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e2_T",
          },
        },
        {
          id: "e3_N",
          name: "number_field",
          field_type: "Number",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e3_N",
          },
        },
        {
          id: "e4_D",
          name: "date_field",
          field_type: "Date",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/field_definitions/e4_D",
          },
        },
      ],
      reserved_fields: [
        { id: "_rf0_T", name: "first_name", field_type: "Text" },
        { id: "_rf1_T", name: "last_name", field_type: "Text" },
        { id: "_rf2_T", name: "email", field_type: "Text" },
        { id: "_rf3_T", name: "alternate_emails", field_type: "Text" },
        { id: "_rf4_T", name: "address_line_1", field_type: "Text" },
        { id: "_rf5_T", name: "address_line_2", field_type: "Text" },
        { id: "_rf6_T", name: "city", field_type: "Text" },
        { id: "_rf7_T", name: "state_province_region", field_type: "Text" },
        { id: "_rf8_T", name: "postal_code", field_type: "Text" },
        { id: "_rf9_T", name: "country", field_type: "Text" },
        { id: "_rf10_T", name: "phone_number", field_type: "Text" },
        { id: "_rf11_T", name: "whatsapp", field_type: "Text" },
        { id: "_rf12_T", name: "line", field_type: "Text" },
        { id: "_rf13_T", name: "facebook", field_type: "Text" },
        { id: "_rf14_T", name: "unique_name", field_type: "Text" },
        {
          id: "_rf15_T",
          name: "email_domains",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf16_D",
          name: "last_clicked",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf17_D",
          name: "last_opened",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf18_D",
          name: "last_emailed",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf19_T",
          name: "singlesend_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf20_T",
          name: "automation_id",
          field_type: "Text",
          read_only: true,
        },
        {
          id: "_rf21_D",
          name: "created_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf22_D",
          name: "updated_at",
          field_type: "Date",
          read_only: true,
        },
        {
          id: "_rf23_T",
          name: "contact_id",
          field_type: "Text",
          read_only: true,
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/field_definitions",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "08873fd8-afb3-45fa-9371-6acac75e1841",
      "x-amz-apigw-id",
      "fIuKTHfYIAMFRTw=",
      "x-amzn-trace-id",
      "Root=1-6099c3db-215905f62689e6397dcd7593;Sampled=0",
      "x-envoy-upstream-service-time",
      "35",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "57",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: { e2_T: "text", e3_N: 15.5, e4_D: "AAAAA" },
        email: "caio.silveira@mailinator.com",
        first_name: "Evan",
        phone_number: "000",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "ab056a7d-08a4-4393-b0ae-6baca01b0fbd" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:38:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "ace371ff-3045-44a3-9294-d015b1f9fb1a",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuKZE9FvHcFVBw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c3db-525b2275570909d64f5e87b0;Sampled=0",
    "x-envoy-upstream-service-time",
    "435",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "57",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:38:00Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7961ef1f-014a-4204-9908-f5cad167ab1c",
      "x-amz-apigw-id",
      "fIuPOFfmPHcFVPQ=",
      "x-amzn-trace-id",
      "Root=1-6099c3fa-12bc06f350c5d8f459347b00;Sampled=0",
      "x-envoy-upstream-service-time",
      "170",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "26",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999998",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:38:00Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:38:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "758",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9b337583-149f-4222-bfba-ebcb84d9b21b",
      "x-amz-apigw-id",
      "fIuPUHW-vHcFTmg=",
      "x-amzn-trace-id",
      "Root=1-6099c3fb-508516a317aa53b442beb8c0;Sampled=0",
      "x-envoy-upstream-service-time",
      "141",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "25",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        first_name: "",
        phone_number: "",
        email: "caio.silveira@mailinator.com",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "e260121a-e699-43c4-9591-60b3f01bd8ef" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:38:36 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "92431c94-0a4c-4de2-951e-630e64ae84d4",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuPaH_LvHcFtjg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c3fc-262372c92d55da3a35b3a1c9;Sampled=0",
    "x-envoy-upstream-service-time",
    "571",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "198",
    "x-ratelimit-reset",
    "24",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:39:06Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "740",
      "Connection",
      "close",
      "x-amzn-requestid",
      "309d56e4-dd17-40e6-b397-89573288ce07",
      "x-amz-apigw-id",
      "fIuUaGV8PHcFgUg=",
      "x-amzn-trace-id",
      "Root=1-6099c41c-11e361b90672e5c21bdb71fe;Sampled=0",
      "x-envoy-upstream-service-time",
      "319",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "52",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:39:06Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "740",
      "Connection",
      "close",
      "x-amzn-requestid",
      "dcc6541a-a0fa-4273-9b52-0d0ce4d34958",
      "x-amz-apigw-id",
      "fIuUiFYnvHcFTRA=",
      "x-amzn-trace-id",
      "Root=1-6099c41c-5205921d248ab1de3bf8e519;Sampled=0",
      "x-envoy-upstream-service-time",
      "138",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "52",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1340",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0090a4b7-222c-4b51-8427-40c83c437cd7",
      "x-amz-apigw-id",
      "fIuUpEhZvHcFzzw=",
      "x-amzn-trace-id",
      "Root=1-6099c41d-72567bb10971e9dd3efe8ba6;Sampled=0",
      "x-envoy-upstream-service-time",
      "103",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "51",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1340",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3fb289fe-9990-4e1e-80c4-420527f0dcb3",
      "x-amz-apigw-id",
      "fIuUvHDPPHcFyag=",
      "x-amzn-trace-id",
      "Root=1-6099c41e-462431ea1c9d8adb657dbd9a;Sampled=0",
      "x-envoy-upstream-service-time",
      "110",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List One" })
  .once()
  .reply(
    201,
    {
      name: "List One",
      id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "186",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1ae9c6f1-5877-49f8-ac1f-9d2ad70ce630",
      "x-amz-apigw-id",
      "fIuU0HRSPHcFc-w=",
      "x-amzn-trace-id",
      "Root=1-6099c41e-554838102373cca746055bac;Sampled=0",
      "x-envoy-upstream-service-time",
      "114",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1526",
      "Connection",
      "close",
      "x-amzn-requestid",
      "279d131f-4a60-448a-abdb-18ef8bb3e5ca",
      "x-amz-apigw-id",
      "fIuU5GuzPHcFVOA=",
      "x-amzn-trace-id",
      "Root=1-6099c41f-51d2b96c03e4a89e26f1c4db;Sampled=0",
      "x-envoy-upstream-service-time",
      "120",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "49",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1526",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7ebefad7-8185-4e3a-9bca-71b8e0cb1087",
      "x-amz-apigw-id",
      "fIuU_F6kvHcFb3A=",
      "x-amzn-trace-id",
      "Root=1-6099c41f-4618b7b51a2f781b54566e88;Sampled=0",
      "x-envoy-upstream-service-time",
      "113",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "49",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List Two" })
  .once()
  .reply(
    201,
    {
      name: "List Two",
      id: "632f6427-3d80-4319-99d3-f90766888351",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "186",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6be927ea-8c9f-4548-bdc5-bb91256dec2c",
      "x-amz-apigw-id",
      "fIuVEHgxPHcFsFw=",
      "x-amzn-trace-id",
      "Root=1-6099c420-6f834711726b592111296813;Sampled=0",
      "x-envoy-upstream-service-time",
      "124",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "48",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
      "632f6427-3d80-4319-99d3-f90766888351",
    ],
  })
  .once()
  .reply(202, { job_id: "53c92856-1c27-4bd4-a73d-ed7bd9b3f2dc" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:39:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "c4081134-98d8-4a45-b92d-7eb63eb0e1cc",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuVKEmKvHcFmPQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c420-516c83fc03c12b4213df5f8a;Sampled=0",
    "x-envoy-upstream-service-time",
    "633",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "48",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:39:43Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "817",
      "Connection",
      "close",
      "x-amzn-requestid",
      "be6e7b2f-08b6-48de-8dbd-184adece6a8b",
      "x-amz-apigw-id",
      "fIuaAFiePHcFkJQ=",
      "x-amzn-trace-id",
      "Root=1-6099c43f-4ac4352d74f7e35c589589a3;Sampled=0",
      "x-envoy-upstream-service-time",
      "282",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "17",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "20bab12b-ee53-41ae-8839-8fc67e49716c",
      "x-amz-apigw-id",
      "fIuaHFnPPHcF56A=",
      "x-amzn-trace-id",
      "Root=1-6099c440-31db3b057a0b770f3d2a8851;Sampled=0",
      "x-envoy-upstream-service-time",
      "107",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "595",
      "x-ratelimit-reset",
      "16",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "c50e941f-7fc1-4a28-b5d0-d6027e359f94",
      "x-amz-apigw-id",
      "fIuaNH--PHcF0Fg=",
      "x-amzn-trace-id",
      "Root=1-6099c441-0cdccea047b3eb551b269f94;Sampled=0",
      "x-envoy-upstream-service-time",
      "106",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "594",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:39:43Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "817",
      "Connection",
      "close",
      "x-amzn-requestid",
      "14b0c326-4b61-4f30-ad31-6b6da0657341",
      "x-amz-apigw-id",
      "fIuaSHOKvHcFbWw=",
      "x-amzn-trace-id",
      "Root=1-6099c441-5b415e5f1cba966b6fa00d41;Sampled=0",
      "x-envoy-upstream-service-time",
      "141",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:46 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e1ad01a4-7e4e-4fad-a8ab-8890435a5ea1",
      "x-amz-apigw-id",
      "fIuaYEUCvHcFj2A=",
      "x-amzn-trace-id",
      "Root=1-6099c442-4c9e8d8506d561c870ab547c;Sampled=0",
      "x-envoy-upstream-service-time",
      "103",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "593",
      "x-ratelimit-reset",
      "14",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "bdeff2d1-11b8-406e-ad5d-f241d9b04de9" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:39:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "87918f30-80f1-48ac-ac67-cd53b3865d51",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuaeGzaPHcFwpA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c442-110b47df038f90b36bf3738c;Sampled=0",
    "x-envoy-upstream-service-time",
    "543",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "198",
    "x-ratelimit-reset",
    "14",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:39:47 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "51a61c23-65a5-4619-975b-10656c719db5",
      "x-amz-apigw-id",
      "fIuanGUivHcFW8w=",
      "x-amzn-trace-id",
      "Root=1-6099c443-0eaf00d376a97b73689ec501;Sampled=0",
      "x-envoy-upstream-service-time",
      "138",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "592",
      "x-ratelimit-reset",
      "13",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351/contacts")
  .query({ contact_ids: "fed1e586-b11c-42c9-9ecf-e1f823b71a62" })
  .once()
  .reply(202, { job_id: "a267831e-b2aa-42f5-825e-7305d973a1bc" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:39:48 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "7d1901d1-8127-43a8-bf39-14cfacd7f96b",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuatGknPHcF5Yg=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c444-2b97dd966391950712e31956;Sampled=0",
    "x-envoy-upstream-service-time",
    "424",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "12",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: ["d3749cad-9066-43ba-bd8b-f6b3eb8289ed"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:40:18Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "778",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a235e46b-0503-4dbf-ba01-b629097b9f48",
      "x-amz-apigw-id",
      "fIufjFWdPHcFlkw=",
      "x-amzn-trace-id",
      "Root=1-6099c463-328874f043ab51b00db0f4fd;Sampled=0",
      "x-envoy-upstream-service-time",
      "165",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "41",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: ["d3749cad-9066-43ba-bd8b-f6b3eb8289ed"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:40:18Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "778",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3a6c520a-7812-4be2-94b5-e6c215e94a03",
      "x-amz-apigw-id",
      "fIufqHJePHcFrdw=",
      "x-amzn-trace-id",
      "Root=1-6099c464-6f4a5d2b6397197421d7508f;Sampled=0",
      "x-envoy-upstream-service-time",
      "153",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "40",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "de1e32a2-329b-4982-aabc-8eca2d138914",
      "x-amz-apigw-id",
      "fIufwHsKvHcF88w=",
      "x-amzn-trace-id",
      "Root=1-6099c464-500001535becb0d95a0c049d;Sampled=0",
      "x-envoy-upstream-service-time",
      "132",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "40",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:21 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "50e82c9b-f03a-48c4-bab3-76c96e6e5cb3",
      "x-amz-apigw-id",
      "fIuf1HQzPHcF4UA=",
      "x-amzn-trace-id",
      "Root=1-6099c465-61fd00f258355ddc4ebdf64b;Sampled=0",
      "x-envoy-upstream-service-time",
      "124",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "39",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:21 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1712",
      "Connection",
      "close",
      "x-amzn-requestid",
      "86e14277-0075-410a-b10a-69d83e593ab4",
      "x-amz-apigw-id",
      "fIuf7FrovHcFuAA=",
      "x-amzn-trace-id",
      "Root=1-6099c465-7b09af2e48adb3a943cc039b;Sampled=0",
      "x-envoy-upstream-service-time",
      "111",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "39",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List Three" })
  .once()
  .reply(
    201,
    {
      name: "List Three",
      id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:22 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "188",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2105bdb6-5959-4d4e-911e-bb2a6042a7c5",
      "x-amz-apigw-id",
      "fIugBF0jvHcFkbg=",
      "x-amzn-trace-id",
      "Root=1-6099c466-5e8e451c258af882698e5ad7;Sampled=0",
      "x-envoy-upstream-service-time",
      "137",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "38",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "632f6427-3d80-4319-99d3-f90766888351",
      "42e0783e-54ae-4548-9fe6-943d2e6fa835",
    ],
  })
  .once()
  .reply(202, { job_id: "cef07c4d-2815-4151-9700-642595492d8c" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:40:23 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "26fea9f4-1884-433e-b6c5-4fb16e904140",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIugGHXQvHcFZiA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c466-23b24c4e6b1dbdb65f52c667;Sampled=0",
    "x-envoy-upstream-service-time",
    "541",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "38",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [
            "42e0783e-54ae-4548-9fe6-943d2e6fa835",
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:40:53Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a1259a95-3f84-4eb0-b68d-56b9f5fc7a18",
      "x-amz-apigw-id",
      "fIuk_GUovHcFXCw=",
      "x-amzn-trace-id",
      "Root=1-6099c486-612565fc741a1877391579e1;Sampled=0",
      "x-envoy-upstream-service-time",
      "204",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "6",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1900",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6281a341-1bf3-4972-bbd5-21d4c7006f64",
      "x-amz-apigw-id",
      "fIulHFxsvHcFqsg=",
      "x-amzn-trace-id",
      "Root=1-6099c487-39b8c048415aa1485c3f06f4;Sampled=0",
      "x-envoy-upstream-service-time",
      "120",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "5",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
            "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:40:53Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4f7067b9-3641-4073-bd79-31af1b0429a7",
      "x-amz-apigw-id",
      "fIulNGrgPHcF7bg=",
      "x-amzn-trace-id",
      "Root=1-6099c487-008b873c57e89de046bdb794;Sampled=0",
      "x-envoy-upstream-service-time",
      "178",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "5",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "067fa0f8-500d-4217-9d3d-48ba48c6518e" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:40:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "d0db52b3-e247-4a51-9b76-ef630fd89869",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIulTFV_PHcFm1w=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c488-37b1ea672e86ad7c10a70c16;Sampled=0",
    "x-envoy-upstream-service-time",
    "454",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "198",
    "x-ratelimit-reset",
    "4",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:57 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1900",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2b915383-08fe-4ba8-bb4c-7028a83fb0e6",
      "x-amz-apigw-id",
      "fIulbEoTPHcFiuQ=",
      "x-amzn-trace-id",
      "Root=1-6099c489-1698ee8e286f5d4c2862cc42;Sampled=0",
      "x-envoy-upstream-service-time",
      "119",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "595",
      "x-ratelimit-reset",
      "3",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:57 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "1900",
      "Connection",
      "close",
      "x-amzn-requestid",
      "871bba05-7086-4d6a-a232-3e5f3657500a",
      "x-amz-apigw-id",
      "fIulgGElvHcFv0A=",
      "x-amzn-trace-id",
      "Root=1-6099c489-3fbe02985dc42f6a0687b396;Sampled=0",
      "x-envoy-upstream-service-time",
      "101",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "594",
      "x-ratelimit-reset",
      "3",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/lists", { name: "List Four" })
  .once()
  .reply(
    201,
    {
      name: "List Four",
      id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:40:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "187",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b795bfc7-5fed-4461-87f6-546ff6e58424",
      "x-amz-apigw-id",
      "fIulmHs6PHcFbKA=",
      "x-amzn-trace-id",
      "Root=1-6099c48a-62fb30de136199261ac894a8;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "2",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
            "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:40:53Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:41:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b87557cb-cc38-4769-a4b8-5eba2ee3e3f6",
      "x-amz-apigw-id",
      "fIuqYECfvHcFzJQ=",
      "x-amzn-trace-id",
      "Root=1-6099c4a8-6bf01b6a591420ed2e5fad68;Sampled=0",
      "x-envoy-upstream-service-time",
      "239",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:41:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7cbee37e-44d8-428d-96f8-d150cc134971",
      "x-amz-apigw-id",
      "fIuqfFJyPHcFuYg=",
      "x-amzn-trace-id",
      "Root=1-6099c4a9-0e433d9848f5becf6174f6cd;Sampled=0",
      "x-envoy-upstream-service-time",
      "105",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "31",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:41:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3efd0a85-7600-4a03-ba82-95c6ff5bdaa1",
      "x-amz-apigw-id",
      "fIuqlHpfPHcFUdg=",
      "x-amzn-trace-id",
      "Root=1-6099c4aa-1da89d9d39dd54936f9e8b21;Sampled=0",
      "x-envoy-upstream-service-time",
      "146",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "30",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          last_name: "Silveira",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
            "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {
            date_field: "2021-02-11T23:03:03Z",
            number_field: 15.5,
            text_field: "text",
          },
          created_at: "2021-05-10T23:36:19Z",
          updated_at: "2021-05-10T23:40:53Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/fed1e586-b11c-42c9-9ecf-e1f823b71a62",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:41:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "856",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0aa50c2f-6573-4ead-bf2a-9cc68a16cf06",
      "x-amz-apigw-id",
      "fIuqrEgNvHcF_Rw=",
      "x-amzn-trace-id",
      "Root=1-6099c4aa-7aa2561b15472ccb1313e761;Sampled=0",
      "x-envoy-upstream-service-time",
      "156",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "30",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "fed1e586-b11c-42c9-9ecf-e1f823b71a62" })
  .once()
  .reply(202, { job_id: "1c2b6dbb-19d4-45d9-9364-8d215cf4b7f6" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:41:31 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "e85b1757-1fea-4e3e-8d1d-e41e68458b43",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuqxES1PHcF7fA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4ab-608c171b5b262c1f080fc49b;Sampled=0",
    "x-envoy-upstream-service-time",
    "727",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "29",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:41:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a98d35a5-9f7e-4945-934f-066da7cd28d1",
      "x-amz-apigw-id",
      "fIuq8E7pvHcFX6w=",
      "x-amzn-trace-id",
      "Root=1-6099c4ac-0b8e618209e9220b5fc31bdd;Sampled=0",
      "x-envoy-upstream-service-time",
      "122",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "28",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:41:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ef36d1ab-046c-4096-93d3-3707e5a40d2f",
      "x-amz-apigw-id",
      "fIurBFsDPHcFneQ=",
      "x-amzn-trace-id",
      "Root=1-6099c4ac-4c9538cf37c87c783918a322;Sampled=0",
      "x-envoy-upstream-service-time",
      "132",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "28",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "lucas.nogueira@mailinator.com" }],
    list_ids: [
      "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
      "632f6427-3d80-4319-99d3-f90766888351",
    ],
  })
  .once()
  .reply(202, { job_id: "54ebedb3-0554-4653-a72e-c676d3f2b9fa" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:41:33 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "64ac41ca-32c4-41ec-91ac-a3ab2b9b2474",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIurHGR6PHcFoKg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4ad-61facdc66dec8ca8778071f9;Sampled=0",
    "x-envoy-upstream-service-time",
    "552",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "27",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "lucas.nogueira@mailinator.com",
          first_name: "",
          id: "745843ab-7ed3-486d-8ff5-79bfae418772",
          last_name: "",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:41:33Z",
          updated_at: "2021-05-10T23:42:03Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/745843ab-7ed3-486d-8ff5-79bfae418772",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "735",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2bc9f1ca-6d4b-4043-be96-b4ce7e9c725c",
      "x-amz-apigw-id",
      "fIuv9E6YvHcFx2Q=",
      "x-amzn-trace-id",
      "Root=1-6099c4cc-2bd57c4c4b30cc905f401005;Sampled=0",
      "x-envoy-upstream-service-time",
      "162",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "56",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "f819c87d-bf27-407f-a059-e19f1c06d88f",
      "x-amz-apigw-id",
      "fIuwCHc1PHcFScg=",
      "x-amzn-trace-id",
      "Root=1-6099c4cc-6c84848d74ce4f8022d75d4f;Sampled=0",
      "x-envoy-upstream-service-time",
      "161",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "56",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "88221365-76cf-4d58-9346-393d09778974",
      "x-amz-apigw-id",
      "fIuwIFdivHcFe_g=",
      "x-amzn-trace-id",
      "Root=1-6099c4cd-4e3572b0631fd48718226263;Sampled=0",
      "x-envoy-upstream-service-time",
      "286",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "55",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "lucas.nogueira@mailinator.com",
          first_name: "",
          id: "745843ab-7ed3-486d-8ff5-79bfae418772",
          last_name: "",
          list_ids: [
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:41:33Z",
          updated_at: "2021-05-10T23:42:03Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/745843ab-7ed3-486d-8ff5-79bfae418772",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "735",
      "Connection",
      "close",
      "x-amzn-requestid",
      "be63c4e7-2dd7-4fd5-89ba-2514cf03b3e3",
      "x-amz-apigw-id",
      "fIuwPGXtvHcF8RQ=",
      "x-amzn-trace-id",
      "Root=1-6099c4ce-06819d2c75d2b9bc07fabfac;Sampled=0",
      "x-envoy-upstream-service-time",
      "153",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "54",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "c8c82cac-19c2-4c91-ac35-29e114c6edfb",
      "x-amz-apigw-id",
      "fIuwVHUQvHcFj2g=",
      "x-amzn-trace-id",
      "Root=1-6099c4ce-27595e5a240cb0173de74a62;Sampled=0",
      "x-envoy-upstream-service-time",
      "149",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "54",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed/contacts")
  .query({ contact_ids: "745843ab-7ed3-486d-8ff5-79bfae418772" })
  .once()
  .reply(202, { job_id: "fb4de9da-30a8-4a55-8406-9bde5b5af814" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:42:07 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "b32ab570-ba5f-447d-a133-91042a7c4da0",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuwbE2QPHcFecg=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4cf-4d72f83004684a032c226ee3;Sampled=0",
    "x-envoy-upstream-service-time",
    "555",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "53",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "f81eead6-fa7f-4fa2-a99c-6c331c0752a6",
      "x-amz-apigw-id",
      "fIuwkGcePHcFWsA=",
      "x-amzn-trace-id",
      "Root=1-6099c4d0-5c709d17244654f336879cfd;Sampled=0",
      "x-envoy-upstream-service-time",
      "122",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "52",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351/contacts")
  .query({ contact_ids: "745843ab-7ed3-486d-8ff5-79bfae418772" })
  .once()
  .reply(202, { job_id: "8710359c-3604-43a3-b7b4-1dc9a7362832" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:42:09 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "5cecf526-58dc-43ab-8de6-67159d9278b7",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuwqHH1vHcFsoA=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4d0-7ebdf14079a6ac77287a608e;Sampled=0",
    "x-envoy-upstream-service-time",
    "779",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "52",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "488b1018-9ba8-4e66-a348-c75c2ff372fb",
      "x-amz-apigw-id",
      "fIuw2HIMPHcFoJQ=",
      "x-amzn-trace-id",
      "Root=1-6099c4d2-3530832312652a1440813779;Sampled=0",
      "x-envoy-upstream-service-time",
      "160",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "cf9f5f82-155e-494c-835b-2b91d2036d90",
      "x-amz-apigw-id",
      "fIuw7E7CvHcFdGA=",
      "x-amzn-trace-id",
      "Root=1-6099c4d2-3693119107b51738349fce45;Sampled=0",
      "x-envoy-upstream-service-time",
      "122",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "596",
      "x-ratelimit-reset",
      "50",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d1e0e045-d7c4-4c7b-a81b-1cfa90ae351a",
      "x-amz-apigw-id",
      "fIuxBGBsPHcFmDg=",
      "x-amzn-trace-id",
      "Root=1-6099c4d3-2ace32044caab6a8214ba656;Sampled=0",
      "x-envoy-upstream-service-time",
      "124",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "595",
      "x-ratelimit-reset",
      "49",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4964c05e-09e1-411d-b0a0-59f42ac47584",
      "x-amz-apigw-id",
      "fIuxGFz1vHcFTDw=",
      "x-amzn-trace-id",
      "Root=1-6099c4d3-7b2c1f0679e09c651ed7f154;Sampled=0",
      "x-envoy-upstream-service-time",
      "112",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "594",
      "x-ratelimit-reset",
      "49",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
      "632f6427-3d80-4319-99d3-f90766888351",
      "42e0783e-54ae-4548-9fe6-943d2e6fa835",
    ],
  })
  .once()
  .reply(202, { job_id: "ce3d93a5-ba77-4df7-9e0e-ec7451073577" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:42:12 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "efb53594-cdc8-41da-937c-20af977a3942",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIuxMHhbvHcFmKg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4d4-016edc8c24c4188968096b9b;Sampled=0",
    "x-envoy-upstream-service-time",
    "697",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "48",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "lucas.nogueira@mailinator.com",
          first_name: "",
          id: "745843ab-7ed3-486d-8ff5-79bfae418772",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:41:33Z",
          updated_at: "2021-05-10T23:42:39Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/745843ab-7ed3-486d-8ff5-79bfae418772",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "658",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3f2c70af-9e53-4f43-826a-ad3d7390c474",
      "x-amz-apigw-id",
      "fIu2FFeWPHcFozg=",
      "x-amzn-trace-id",
      "Root=1-6099c4f3-1c43ae671b975a701a4076a8;Sampled=0",
      "x-envoy-upstream-service-time",
      "348",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "17",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "9d8ea1ae-8a57-4f91-86c1-1b2ed22b23e7",
          last_name: "",
          list_ids: [
            "42e0783e-54ae-4548-9fe6-943d2e6fa835",
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:42:12Z",
          updated_at: "2021-05-10T23:42:42Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/9d8ea1ae-8a57-4f91-86c1-1b2ed22b23e7",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:44 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "773",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ae978edd-276a-4371-ba09-c834c7868856",
      "x-amz-apigw-id",
      "fIu2OGfuPHcFv6g=",
      "x-amzn-trace-id",
      "Root=1-6099c4f4-2a4a3b5d41d1f53c3678d44a;Sampled=0",
      "x-envoy-upstream-service-time",
      "141",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "194",
      "x-ratelimit-reset",
      "16",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bfdd3a54-88e8-44f9-ad2e-965d7a923319",
      "x-amz-apigw-id",
      "fIu2TFg1vHcF0Lg=",
      "x-amzn-trace-id",
      "Root=1-6099c4f5-08393ab26306c7bf730c0b62;Sampled=0",
      "x-envoy-upstream-service-time",
      "159",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "193",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "lucas.nogueira@mailinator.com",
          first_name: "",
          id: "745843ab-7ed3-486d-8ff5-79bfae418772",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:41:33Z",
          updated_at: "2021-05-10T23:42:39Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/745843ab-7ed3-486d-8ff5-79bfae418772",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:42:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "658",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e18f156d-40e3-4d62-8152-1aadf2a0b624",
      "x-amz-apigw-id",
      "fIu2ZG5IPHcFfmg=",
      "x-amzn-trace-id",
      "Root=1-6099c4f5-19578a7578f9d5004efaeb1d;Sampled=0",
      "x-envoy-upstream-service-time",
      "154",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "192",
      "x-ratelimit-reset",
      "15",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "745843ab-7ed3-486d-8ff5-79bfae418772" })
  .once()
  .reply(202, { job_id: "cf57203d-032c-445d-94a1-2cafaefbf639" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:42:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "5ad7dc43-6612-44ee-979d-94d08a365ace",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIu2fFM0vHcFYxw=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4f6-4c88e5e513d0593537814ffd;Sampled=0",
    "x-envoy-upstream-service-time",
    "519",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "14",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "sandro.arturo@mailinator.com",
        first_name: "Lucas",
        phone_number: "+5583999999997",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "4e773814-20f6-4a40-9443-6fd142cc5b56" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:42:47 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "8bc9f538-44bc-490d-ace3-bce78f574341",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIu2pHe0vHcFjmg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c4f7-078082e01ca5ef43593d2b90;Sampled=0",
    "x-envoy-upstream-service-time",
    "490",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "198",
    "x-ratelimit-reset",
    "13",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "sandro.arturo@mailinator.com",
          first_name: "Lucas",
          id: "91121cae-3d76-4fee-9c5a-4021860f9a20",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999997",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:42:47Z",
          updated_at: "2021-05-10T23:43:17Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/91121cae-3d76-4fee-9c5a-4021860f9a20",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4e32d49d-39d0-417b-aba5-14423909cae5",
      "x-amz-apigw-id",
      "fIu7eFECPHcF1sg=",
      "x-amzn-trace-id",
      "Root=1-6099c516-5e944f2105044e16301fd335;Sampled=0",
      "x-envoy-upstream-service-time",
      "168",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "42",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:18 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9bdbdaa7-d334-466a-a840-ac53c00c9d33",
      "x-amz-apigw-id",
      "fIu7lHlvvHcFh1g=",
      "x-amzn-trace-id",
      "Root=1-6099c516-16dbde551203a3f85ced4254;Sampled=0",
      "x-envoy-upstream-service-time",
      "180",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "42",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "sandro.arturo@mailinator.com",
          first_name: "Lucas",
          id: "91121cae-3d76-4fee-9c5a-4021860f9a20",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999997",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:42:47Z",
          updated_at: "2021-05-10T23:43:17Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/91121cae-3d76-4fee-9c5a-4021860f9a20",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:19 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ad84bf6d-2ef0-40ae-91ca-854acd2d50c5",
      "x-amz-apigw-id",
      "fIu7sHxmPHcFzzw=",
      "x-amzn-trace-id",
      "Root=1-6099c517-7ef24bfd06194ad50e01ef85;Sampled=0",
      "x-envoy-upstream-service-time",
      "325",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "41",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "sandro.arturo@mailinator.com",
          first_name: "Lucas",
          id: "91121cae-3d76-4fee-9c5a-4021860f9a20",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999997",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:42:47Z",
          updated_at: "2021-05-10T23:43:17Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/91121cae-3d76-4fee-9c5a-4021860f9a20",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d3b4cc75-582f-4996-9703-cbbb24f2e069",
      "x-amz-apigw-id",
      "fIu7yHq6vHcFh1g=",
      "x-amzn-trace-id",
      "Root=1-6099c518-60c4f61b4dd5dd3d392b813c;Sampled=0",
      "x-envoy-upstream-service-time",
      "145",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "40",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "sandro.arturo@mailinator.com",
          first_name: "Lucas",
          id: "91121cae-3d76-4fee-9c5a-4021860f9a20",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "+5583999999997",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:42:47Z",
          updated_at: "2021-05-10T23:43:17Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/91121cae-3d76-4fee-9c5a-4021860f9a20",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "310ff65b-cd51-4ffd-b4b8-b80a6ebeb11d",
      "x-amz-apigw-id",
      "fIu74GZ0vHcFzRQ=",
      "x-amzn-trace-id",
      "Root=1-6099c518-01f508e40bc86e810fd0002a;Sampled=0",
      "x-envoy-upstream-service-time",
      "144",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "40",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "91121cae-3d76-4fee-9c5a-4021860f9a20" })
  .once()
  .reply(202, { job_id: "298798a3-c25a-4890-83c3-48848ad234c2" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:43:21 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "19651e06-5742-41bd-8b30-62bd40afda2b",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIu79E7TvHcFhDA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c519-0f5efec936dd66ae5a4d9c65;Sampled=0",
    "x-envoy-upstream-service-time",
    "442",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "39",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "89a5de3a-d431-436d-af20-62c8b2cc0fa9",
      "x-amz-apigw-id",
      "fIvAyEofPHcFkIw=",
      "x-amzn-trace-id",
      "Root=1-6099c538-0dd2476d05c6f41118b8cc48;Sampled=0",
      "x-envoy-upstream-service-time",
      "180",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "194",
      "x-ratelimit-reset",
      "8",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:52 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8044f9a3-4361-47d0-8a52-10fe27ffe057",
      "x-amz-apigw-id",
      "fIvA4ERHPHcFTPg=",
      "x-amzn-trace-id",
      "Root=1-6099c538-5a357b6d56481d9b1c0a521b;Sampled=0",
      "x-envoy-upstream-service-time",
      "169",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "193",
      "x-ratelimit-reset",
      "8",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:53 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "99e65955-5347-4124-8eac-4030bccb9971",
      "x-amz-apigw-id",
      "fIvA-GrQPHcFV7A=",
      "x-amzn-trace-id",
      "Root=1-6099c539-31413f61492e85fc201eadcd;Sampled=0",
      "x-envoy-upstream-service-time",
      "213",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "192",
      "x-ratelimit-reset",
      "7",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d01cb815-f2a1-4a59-8b3f-701ec873a974",
      "x-amz-apigw-id",
      "fIvBEECuPHcF7ug=",
      "x-amzn-trace-id",
      "Root=1-6099c539-1500c34d4c2d0bb12c071afc;Sampled=0",
      "x-envoy-upstream-service-time",
      "145",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "191",
      "x-ratelimit-reset",
      "7",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6d40ff4e-141a-4aa6-b63f-a56c25ccffca",
      "x-amz-apigw-id",
      "fIvBKELGvHcFdAg=",
      "x-amzn-trace-id",
      "Root=1-6099c53a-4cf64fb7161a341d3270d915;Sampled=0",
      "x-envoy-upstream-service-time",
      "390",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "190",
      "x-ratelimit-reset",
      "6",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9a2c8c27-605f-4838-b29f-0df083c66cb2",
      "x-amz-apigw-id",
      "fIvBSEbAvHcFWpw=",
      "x-amzn-trace-id",
      "Root=1-6099c53b-6e18a6ee2d9cb7e45d59d7ea;Sampled=0",
      "x-envoy-upstream-service-time",
      "129",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "189",
      "x-ratelimit-reset",
      "5",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "Recent Automotive Shoppers",
          id: "01c956e2-58f5-4957-885b-62624cf157c7",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/01c956e2-58f5-4957-885b-62624cf157c7",
          },
        },
        {
          name: "462cde61-94d7-4ee0-9bc2-ce02ed7855ee",
          id: "3f641067-6b50-4353-8c87-0825fbb85228",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/3f641067-6b50-4353-8c87-0825fbb85228",
          },
        },
        {
          name: "List Three",
          id: "42e0783e-54ae-4548-9fe6-943d2e6fa835",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835",
          },
        },
        {
          name: "Spanish Speakers",
          id: "58764d52-ce54-410e-aa41-31062ba5e732",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/58764d52-ce54-410e-aa41-31062ba5e732",
          },
        },
        {
          name: "List Two",
          id: "632f6427-3d80-4319-99d3-f90766888351",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351",
          },
        },
        {
          name: "High Value with Recent Automotive Purchase",
          id: "844c12a9-a1f1-406f-8707-f42c3b4563d6",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/844c12a9-a1f1-406f-8707-f42c3b4563d6",
          },
        },
        {
          name: "14dc7033-1bb3-4ef7-83d7-4e9c2c865412",
          id: "a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a4779a3e-5676-4e4d-a31b-2ac34849e4e4",
          },
        },
        {
          name: "List Four",
          id: "a735b597-51c5-4420-b58d-ab8c02d5d693",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693",
          },
        },
        {
          name: "List One",
          id: "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          },
        },
        {
          name: "High Value",
          id: "faf2f326-ff23-44f1-bd34-554932b0723b",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/faf2f326-ff23-44f1-bd34-554932b0723b",
          },
        },
      ],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:43:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2087",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3d146fcb-c8c4-4bcd-af23-2da70b25d06a",
      "x-amz-apigw-id",
      "fIvBYH73vHcFf8A=",
      "x-amzn-trace-id",
      "Root=1-6099c53b-2d13c5fd092ad6e86be9237f;Sampled=0",
      "x-envoy-upstream-service-time",
      "116",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "5",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "carlos.solimoes@mailinator.com",
        first_name: "Carlos",
      },
    ],
    list_ids: ["a735b597-51c5-4420-b58d-ab8c02d5d693"],
  })
  .once()
  .reply(202, { job_id: "40c7bbbc-2d80-4122-8e36-3e523f0398a6" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:43:56 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "4a493309-152d-409e-b4bd-58af71810148",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvBeFBMPHcF8RQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c53c-0bbc4eb36548cce66e415542;Sampled=0",
    "x-envoy-upstream-service-time",
    "471",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "4",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "carlos.solimoes@mailinator.com",
          first_name: "Carlos",
          id: "c42cc844-ecee-440f-8272-137feb259f46",
          last_name: "",
          list_ids: ["a735b597-51c5-4420-b58d-ab8c02d5d693"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:43:56Z",
          updated_at: "2021-05-10T23:44:26Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/c42cc844-ecee-440f-8272-137feb259f46",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:44:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "703",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9ed5a7a2-07fc-4f71-8f78-c410cdb6922d",
      "x-amz-apigw-id",
      "fIvGVEWyPHcFfrw=",
      "x-amzn-trace-id",
      "Root=1-6099c55b-3234fc2d5449c47a37e178b5;Sampled=0",
      "x-envoy-upstream-service-time",
      "160",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "33",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:44:28 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "27dfd203-4006-42f2-a771-bbdd58049307",
      "x-amz-apigw-id",
      "fIvGcG7PvHcF39g=",
      "x-amzn-trace-id",
      "Root=1-6099c55c-358e38766b6eaafc22cab48e;Sampled=0",
      "x-envoy-upstream-service-time",
      "259",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'pilo.paz@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:44:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b3c98da7-ef4d-4735-aff3-701127003ea6",
      "x-amz-apigw-id",
      "fIvGjEVtPHcFuYg=",
      "x-amzn-trace-id",
      "Root=1-6099c55c-2c120abb78308e2d47f863c8;Sampled=0",
      "x-envoy-upstream-service-time",
      "150",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "32",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:44:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "757bca77-92a6-4b1d-8dd5-ac12b5beb0bf",
      "x-amz-apigw-id",
      "fIvGoHn8PHcFynQ=",
      "x-amzn-trace-id",
      "Root=1-6099c55d-6008f41c5cade52239ac5d06;Sampled=0",
      "x-envoy-upstream-service-time",
      "200",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "31",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'pilo.paz@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:44:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5406e439-40ef-4c23-a240-a681d53bca34",
      "x-amz-apigw-id",
      "fIvGvFUMPHcFz3g=",
      "x-amzn-trace-id",
      "Root=1-6099c55e-56e0fd154e64e6704a614451;Sampled=0",
      "x-envoy-upstream-service-time",
      "154",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "30",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [
      {
        custom_fields: {},
        email: "jake.jill@mailinator.com",
        first_name: "Jake",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "cc209537-d6dd-4cf3-93ab-95f06c0b5019" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:44:31 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "aada82ef-60d5-49a3-b81f-9d0808edb726",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvG0F1cPHcFpww=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c55e-34a62655231af0a00014e094;Sampled=0",
    "x-envoy-upstream-service-time",
    "524",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "30",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "jake.jill@mailinator.com",
          first_name: "Jake",
          id: "1af00abd-733e-483a-96be-7bf1f685cdb7",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:44:30Z",
          updated_at: "2021-05-10T23:45:00Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/1af00abd-733e-483a-96be-7bf1f685cdb7",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "657",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9dbc54fe-d6f0-4470-8a95-c77b4e904279",
      "x-amz-apigw-id",
      "fIvLwEJdPHcFz1A=",
      "x-amzn-trace-id",
      "Root=1-6099c57e-0810154f572526101ddb5832;Sampled=0",
      "x-envoy-upstream-service-time",
      "671",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "58",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", { query: "email = '000'" })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ca8662e1-2584-48b9-b674-458314ff3642",
      "x-amz-apigw-id",
      "fIvL5Hm8vHcF_ug=",
      "x-amzn-trace-id",
      "Root=1-6099c57f-17579bfe23559289053feb6b;Sampled=0",
      "x-envoy-upstream-service-time",
      "211",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "57",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "000" }],
    list_ids: [],
  })
  .once()
  .reply(
    400,
    {
      errors: [
        { field: "contacts[0].email", message: "email '000' is not valid" },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "79",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bd853f10-aadd-4fa6-9d66-7dede33c122a",
      "access-control-allow-origin",
      "*",
      "access-control-allow-headers",
      "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
      "x-amz-apigw-id",
      "fIvL_ELlPHcFbyg=",
      "access-control-allow-methods",
      "PUT,DELETE,OPTIONS",
      "access-control-expose-headers",
      "Link, Location",
      "x-amzn-trace-id",
      "Root=1-6099c57f-267a78f71ead8906396b870f;Sampled=0",
      "x-envoy-upstream-service-time",
      "127",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "57",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'caio.silveira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "9d8ea1ae-8a57-4f91-86c1-1b2ed22b23e7",
          last_name: "",
          list_ids: [
            "42e0783e-54ae-4548-9fe6-943d2e6fa835",
            "632f6427-3d80-4319-99d3-f90766888351",
            "d3749cad-9066-43ba-bd8b-f6b3eb8289ed",
          ],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:42:12Z",
          updated_at: "2021-05-10T23:42:42Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/9d8ea1ae-8a57-4f91-86c1-1b2ed22b23e7",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "773",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0e79b7a3-22b6-4514-ac00-28c5aba2421d",
      "x-amz-apigw-id",
      "fIvMFECxvHcFvNg=",
      "x-amzn-trace-id",
      "Root=1-6099c580-41507c874e384d39205af0c4;Sampled=0",
      "x-envoy-upstream-service-time",
      "217",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "56",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'lucas.nogueira@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bc58db68-57b1-48ff-8499-37d84aeb3d48",
      "x-amz-apigw-id",
      "fIvMLF7-PHcFiww=",
      "x-amzn-trace-id",
      "Root=1-6099c580-4bcf5bbd24ecc841181e0825;Sampled=0",
      "x-envoy-upstream-service-time",
      "129",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "56",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'sandro.arturo@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 0,
      result: [],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "16195eb2-d286-4807-818c-212dd0447c71",
      "x-amz-apigw-id",
      "fIvMQGYzvHcF2Og=",
      "x-amzn-trace-id",
      "Root=1-6099c581-6918fd7f491c78967df9eb47;Sampled=0",
      "x-envoy-upstream-service-time",
      "143",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "195",
      "x-ratelimit-reset",
      "55",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'carlos.solimoes@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "carlos.solimoes@mailinator.com",
          first_name: "Carlos",
          id: "c42cc844-ecee-440f-8272-137feb259f46",
          last_name: "",
          list_ids: ["a735b597-51c5-4420-b58d-ab8c02d5d693"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:43:56Z",
          updated_at: "2021-05-10T23:44:26Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/c42cc844-ecee-440f-8272-137feb259f46",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "703",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7676aac2-75cf-4e24-afab-b4c48eb61def",
      "x-amz-apigw-id",
      "fIvMWFUcvHcFp2Q=",
      "x-amzn-trace-id",
      "Root=1-6099c582-2f79b0c70651ba597dccde81;Sampled=0",
      "x-envoy-upstream-service-time",
      "169",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "194",
      "x-ratelimit-reset",
      "54",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .post("/v3/marketing/contacts/search", {
    query: "email = 'jake.jill@mailinator.com'",
  })
  .once()
  .reply(
    200,
    {
      contact_count: 1,
      result: [
        {
          address_line_1: "",
          address_line_2: "",
          alternate_emails: [],
          city: "",
          country: "",
          email: "jake.jill@mailinator.com",
          first_name: "Jake",
          id: "1af00abd-733e-483a-96be-7bf1f685cdb7",
          last_name: "",
          list_ids: [],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-05-10T23:44:30Z",
          updated_at: "2021-05-10T23:45:00Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/1af00abd-733e-483a-96be-7bf1f685cdb7",
          },
        },
      ],
      _metadata: {
        self: "https://api.sendgrid.com/v3/marketing/contacts/search",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Mon, 10 May 2021 23:45:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "657",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5053bdb2-6165-4cb8-b9f2-d90ccc3c94f9",
      "x-amz-apigw-id",
      "fIvMcGVlvHcFVqw=",
      "x-amzn-trace-id",
      "Root=1-6099c582-7ce4c6917f4649951ac47fef;Sampled=0",
      "x-envoy-upstream-service-time",
      "163",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "193",
      "x-ratelimit-reset",
      "54",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({
    ids:
      "9d8ea1ae-8a57-4f91-86c1-1b2ed22b23e7%2Cc42cc844-ecee-440f-8272-137feb259f46%2C1af00abd-733e-483a-96be-7bf1f685cdb7",
  })
  .once()
  .reply(202, { job_id: "eb97cb9d-323e-4f07-acfe-f2e9b2e43211" }, [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:45:07 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "091cbada-6a2e-42b0-8825-e551ad8acaff",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvMiHn3PHcFzFA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c583-07c961253fd7132b4b9ab389;Sampled=0",
    "x-envoy-upstream-service-time",
    "402",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "53",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/d3749cad-9066-43ba-bd8b-f6b3eb8289ed")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:45:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "3241d344-9e4e-4fd8-8d29-df35d1a773d9",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvM0FZGvHcFpAg=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c585-6cfdf6f765d152c825374a81;Sampled=0",
    "x-envoy-upstream-service-time",
    "2257",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "51",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/632f6427-3d80-4319-99d3-f90766888351")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:45:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "e96e3625-e576-483e-9c6d-12c4e53c3fc1",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvNQHLlPHcFg_g=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c587-13d48d8e1db951930b27878b;Sampled=0",
    "x-envoy-upstream-service-time",
    "1330",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "598",
    "x-ratelimit-reset",
    "49",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/42e0783e-54ae-4548-9fe6-943d2e6fa835")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:45:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "f01fae3b-4276-475b-83e7-1656c9ff6ac1",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvNjHaovHcFp_A=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c589-76378d162c407cfe73f8f2ee;Sampled=0",
    "x-envoy-upstream-service-time",
    "903",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "597",
    "x-ratelimit-reset",
    "47",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/a735b597-51c5-4420-b58d-ab8c02d5d693")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Mon, 10 May 2021 23:45:16 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "3f38d8b8-64a4-4910-b144-2222c635f44c",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "fIvNwGubPHcFq8g=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6099c58b-3d4f45ea45fd3a9a5d58a28e;Sampled=0",
    "x-envoy-upstream-service-time",
    "879",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "596",
    "x-ratelimit-reset",
    "45",
    "Powered-By",
    "SGGateway",
  ]);
