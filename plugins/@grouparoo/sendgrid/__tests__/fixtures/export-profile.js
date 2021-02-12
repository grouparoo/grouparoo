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
      "Fri, 12 Feb 2021 20:04:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "41fdd1e3-c5db-4264-89b9-56ee5a840318",
      "x-amz-apigw-id",
      "apfYpE4WvHcF5kQ=",
      "x-amzn-trace-id",
      "Root=1-6026df6a-68d065ea6ec5466c62122fcb;Sampled=0",
      "x-envoy-upstream-service-time",
      "114",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "2",
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
      "Fri, 12 Feb 2021 20:04:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5eff625c-7142-49fb-848e-230b278943d5",
      "x-amz-apigw-id",
      "apfYvFasvHcFaSA=",
      "x-amzn-trace-id",
      "Root=1-6026df6a-1be1119e334f8404006601a2;Sampled=0",
      "x-envoy-upstream-service-time",
      "136",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "1",
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
      "Fri, 12 Feb 2021 20:04:59 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "19353b96-c04a-4882-86a4-d28fe8260109",
      "x-amz-apigw-id",
      "apfY1H7SvHcFrUQ=",
      "x-amzn-trace-id",
      "Root=1-6026df6b-0dd822e838119a4552d5efb8;Sampled=0",
      "x-envoy-upstream-service-time",
      "171",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "1",
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
      "Fri, 12 Feb 2021 20:05:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5a4f6f81-7bea-4073-8140-06c15875227a",
      "x-amz-apigw-id",
      "apfY8ELNvHcFadQ=",
      "x-amzn-trace-id",
      "Root=1-6026df6c-6a81c3202f106440250a1188;Sampled=0",
      "x-envoy-upstream-service-time",
      "1354",
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
      "Fri, 12 Feb 2021 20:05:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3d19c24e-c4cd-475c-b116-e452f13d9a22",
      "x-amz-apigw-id",
      "apfZPFoBPHcFgVg=",
      "x-amzn-trace-id",
      "Root=1-6026df6e-6234429f776785d50cfd283b;Sampled=0",
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
      "58",
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
      result: [],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:05:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "107",
      "Connection",
      "close",
      "x-amzn-requestid",
      "ec3320fd-c7c6-4bd3-a584-5d0673af9f86",
      "x-amz-apigw-id",
      "apfZVGKOPHcFskw=",
      "x-amzn-trace-id",
      "Root=1-6026df6e-741f71a463acdda500e4ba40;Sampled=0",
      "x-envoy-upstream-service-time",
      "120",
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
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:05:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "107",
      "Connection",
      "close",
      "x-amzn-requestid",
      "21b4e21f-5e4e-4e77-be9a-180648e0d095",
      "x-amz-apigw-id",
      "apfZbF3DvHcFgfQ=",
      "x-amzn-trace-id",
      "Root=1-6026df6f-369d60a4165a92ff4aa29f33;Sampled=0",
      "x-envoy-upstream-service-time",
      "111",
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
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:05:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "107",
      "Connection",
      "close",
      "x-amzn-requestid",
      "72a19a56-eaf2-4940-ac36-3b9854691777",
      "x-amz-apigw-id",
      "apfZhF1SPHcFbwg=",
      "x-amzn-trace-id",
      "Root=1-6026df6f-56abff567407052f18cf02a5;Sampled=0",
      "x-envoy-upstream-service-time",
      "103",
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
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:05:04 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "107",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3001517c-2695-4332-aa51-f147751f86f2",
      "x-amz-apigw-id",
      "apfZmGzzPHcFXhw=",
      "x-amzn-trace-id",
      "Root=1-6026df70-2bfb046d364c0f4b22921136;Sampled=0",
      "x-envoy-upstream-service-time",
      "95",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
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
      "Fri, 12 Feb 2021 20:05:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1a7aad17-efde-412f-9fe6-737af796e07e",
      "x-amz-apigw-id",
      "apfeZEh4PHcFirw=",
      "x-amzn-trace-id",
      "Root=1-6026df8f-2e2f749363a6e0875e9a5c76;Sampled=0",
      "x-envoy-upstream-service-time",
      "118",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "25",
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
      "Fri, 12 Feb 2021 20:05:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "48367956-832e-45a4-a001-a674d127f422",
      "x-amz-apigw-id",
      "apfefG32PHcFtDw=",
      "x-amzn-trace-id",
      "Root=1-6026df8f-37677cdf6c3c09ca63a73a76;Sampled=0",
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
        email: "caio.silveira@mailinator.com",
        first_name: "Caio",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "49931dbe-9ce3-47c1-b6a8-d3ed3816b1f6" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:05:36 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "56152119-54a0-4b65-8b98-e96a9da767ae",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apfelGMbPHcFzXg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026df90-3c04425f1daf34cb7b8ab24a;Sampled=0",
    "x-envoy-upstream-service-time",
    "414",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
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
          first_name: "Caio",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:06:05Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:06:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1ff39c63-8133-443e-a0ca-63044faf3c25",
      "x-amz-apigw-id",
      "apfoHHcAPHcF3xA=",
      "x-amzn-trace-id",
      "Root=1-6026dfcd-0fc6c81b7181d73c1c6301ae;Sampled=0",
      "x-envoy-upstream-service-time",
      "147",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "23",
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
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:06:05Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:06:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "661",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9be8f24f-edfa-4882-936a-129e39fd62f4",
      "x-amz-apigw-id",
      "apfoNHYnPHcF3Kg=",
      "x-amzn-trace-id",
      "Root=1-6026dfce-6ce1bbb20263fbb647289466;Sampled=0",
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
      "22",
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
        city: "Campina Grande",
        phone_number: "+5583999999999",
      },
    ],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "a03ff8c2-999d-4347-bae0-4c609c6d8400" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:06:39 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9a3fbc5d-d180-4f54-b369-0461359cbbaf",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apfoUHYXPHcFy5Q=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026dfce-7a211a057f1e0e484c55588c;Sampled=0",
    "x-envoy-upstream-service-time",
    "436",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "22",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:07:07Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:07:39 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "697",
      "Connection",
      "close",
      "x-amzn-requestid",
      "20b698da-d00a-4458-8437-ee2054248e62",
      "x-amz-apigw-id",
      "apfx2F5RPHcFaLw=",
      "x-amzn-trace-id",
      "Root=1-6026e00b-0a381c63289c8276739a4d50;Sampled=0",
      "x-envoy-upstream-service-time",
      "151",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "21",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Caio",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:07:07Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:07:40 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "697",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7e9a6ce5-d69a-4324-95fe-edde3065d9fa",
      "x-amz-apigw-id",
      "apfx9GEZPHcFlgA=",
      "x-amzn-trace-id",
      "Root=1-6026e00c-32b7321445ddecc2341d9d01;Sampled=0",
      "x-envoy-upstream-service-time",
      "144",
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
      "Fri, 12 Feb 2021 20:07:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b5ed5e08-6951-47e5-955a-990f86f78005",
      "x-amz-apigw-id",
      "apfyDGGKoAMFzFw=",
      "x-amzn-trace-id",
      "Root=1-6026e00d-430598fe11d690146c6e97aa;Sampled=0",
      "x-envoy-upstream-service-time",
      "58",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "19",
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
      "Fri, 12 Feb 2021 20:07:41 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "819f702e-fd8d-499a-819e-5c73e0a3323f",
      "x-amz-apigw-id",
      "apfyIEtOIAMF_rw=",
      "x-amzn-trace-id",
      "Root=1-6026e00d-67376e872ad2698408b7c407;Sampled=0",
      "x-envoy-upstream-service-time",
      "42",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "19",
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
      "Fri, 12 Feb 2021 20:07:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3f3e87d3-2fa9-4649-be9f-b50d64cbaf51",
      "x-amz-apigw-id",
      "apfyNHm8IAMFXdA=",
      "x-amzn-trace-id",
      "Root=1-6026e00e-20393c447b2c8dde71d9e454;Sampled=0",
      "x-envoy-upstream-service-time",
      "98",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "18",
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
      "Fri, 12 Feb 2021 20:07:42 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "70c825ae-9fdb-456e-9c4f-49eca577330c",
      "x-amz-apigw-id",
      "apfyTHRqoAMF0zQ=",
      "x-amzn-trace-id",
      "Root=1-6026e00e-0bc5aee52857349f135a03da;Sampled=0",
      "x-envoy-upstream-service-time",
      "25",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "18",
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
      "Fri, 12 Feb 2021 20:07:43 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "2066",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bb47425f-727d-4517-bdc5-ad5457ca9181",
      "x-amz-apigw-id",
      "apfyZEo-oAMFzkQ=",
      "x-amzn-trace-id",
      "Root=1-6026e00f-5d56c5221fb33aa247a0d9bc;Sampled=0",
      "x-envoy-upstream-service-time",
      "43",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "17",
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
  .reply(202, { job_id: "d3893599-22ed-4d5c-803d-c4ea07bab355" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:07:44 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "5cc29b6f-4c0b-4cfb-8175-7197a278ad50",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apfyeEwcvHcF0IQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e00f-0be9da6c66285ccd6633d629;Sampled=0",
    "x-envoy-upstream-service-time",
    "533",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "17",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:08:12Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:08:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "772",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d294d34e-ef78-42a5-8351-359b5b1e4b47",
      "x-amz-apigw-id",
      "apf8BFTXPHcFyQg=",
      "x-amzn-trace-id",
      "Root=1-6026e04c-4070e897299a112d1fb8df03;Sampled=0",
      "x-envoy-upstream-service-time",
      "141",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "16",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "Evan",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:08:12Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:08:45 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "772",
      "Connection",
      "close",
      "x-amzn-requestid",
      "256786f2-bb4a-44f0-a593-73a84846714c",
      "x-amz-apigw-id",
      "apf8IEBDvHcFdkA=",
      "x-amzn-trace-id",
      "Root=1-6026e04d-48dc3c221acbe92155bb3ee8;Sampled=0",
      "x-envoy-upstream-service-time",
      "181",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "15",
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
  .reply(202, { job_id: "2c4da316-4c69-43fa-8252-db3661837215" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:08:46 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "fbb8a952-0aea-4f3a-9869-27ca245973c7",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apf8OHtsPHcFSfQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e04e-520db1373b3ff4af469e05f9;Sampled=0",
    "x-envoy-upstream-service-time",
    "432",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:09:15Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:09:47 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "754",
      "Connection",
      "close",
      "x-amzn-requestid",
      "758fd5bb-34b6-4b33-912a-c58161024ae1",
      "x-amz-apigw-id",
      "apgFwGrVvHcF4Mg=",
      "x-amzn-trace-id",
      "Root=1-6026e08b-239e237c463ab9621ce133ca;Sampled=0",
      "x-envoy-upstream-service-time",
      "152",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "13",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:09:15Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:09:47 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "754",
      "Connection",
      "close",
      "x-amzn-requestid",
      "83026d21-f802-4b81-acfc-385a3cbe39e0",
      "x-amz-apigw-id",
      "apgF3G2KvHcF8hw=",
      "x-amzn-trace-id",
      "Root=1-6026e08b-4eab81626e3223e6394c67d7;Sampled=0",
      "x-envoy-upstream-service-time",
      "175",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "13",
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
      result: [],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:09:48 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "107",
      "Connection",
      "close",
      "x-amzn-requestid",
      "2784a387-0bf9-4a36-9262-8e8396b7e5b0",
      "x-amz-apigw-id",
      "apgF9GyQPHcFZgA=",
      "x-amzn-trace-id",
      "Root=1-6026e08c-3f525b8925c3e7541c60992c;Sampled=0",
      "x-envoy-upstream-service-time",
      "99",
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
      result: [],
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists?page_size=100&page_token=",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:09:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "107",
      "Connection",
      "close",
      "x-amzn-requestid",
      "c7d05b74-0810-420a-a1e7-bf3c8d225172",
      "x-amz-apigw-id",
      "apgGDFk3vHcF_3Q=",
      "x-amzn-trace-id",
      "Root=1-6026e08c-2ce9c14e15d64e3c42f7461f;Sampled=0",
      "x-envoy-upstream-service-time",
      "113",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "11",
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
      id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:09:49 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "186",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6c3dadb0-51ec-4369-be46-4421b44ef496",
      "x-amz-apigw-id",
      "apgGJE1evHcFp8Q=",
      "x-amzn-trace-id",
      "Root=1-6026e08d-5e5c9df76451b6bc2987e672;Sampled=0",
      "x-envoy-upstream-service-time",
      "108",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "11",
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
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:09:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "292",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8739c6e9-cb49-4fc7-94ff-4ca79d5dd4a3",
      "x-amz-apigw-id",
      "apgGPHHwvHcFyIw=",
      "x-amzn-trace-id",
      "Root=1-6026e08e-7b1e4f070e83fe7609109e47;Sampled=0",
      "x-envoy-upstream-service-time",
      "85",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "10",
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
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:09:50 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "292",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b2ad96ac-b1f8-4558-9d2b-61b9c290a0fe",
      "x-amz-apigw-id",
      "apgGVG99PHcF-vQ=",
      "x-amzn-trace-id",
      "Root=1-6026e08e-162194bf6c5ab0683ee1b349;Sampled=0",
      "x-envoy-upstream-service-time",
      "119",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "10",
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
      id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:09:51 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "186",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d36029d6-aea5-4b7e-b4cb-ee763f24f07a",
      "x-amz-apigw-id",
      "apgGbHudvHcFXOw=",
      "x-amzn-trace-id",
      "Root=1-6026e08f-5bcfde4d074302a84b53385b;Sampled=0",
      "x-envoy-upstream-service-time",
      "139",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "9",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "a1833f7f-3217-4479-88ad-4f024ffe6383",
      "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
    ],
  })
  .once()
  .reply(202, { job_id: "84a7a3c0-0925-414d-9a09-c6b6e6590f3b" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:09:53 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "98019f11-256d-4ec1-8efd-6e8dee0f2ecc",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apgGhG7FPHcFTwA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e08f-69d5a3c47d44d2015c8131c5;Sampled=0",
    "x-envoy-upstream-service-time",
    "1670",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: [
            "a1833f7f-3217-4479-88ad-4f024ffe6383",
            "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:10:21Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:10:54 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "831",
      "Connection",
      "close",
      "x-amzn-requestid",
      "dd2411fa-4613-45e2-84f9-bbe9ab8156cd",
      "x-amz-apigw-id",
      "apgQQFKAPHcF6jg=",
      "x-amzn-trace-id",
      "Root=1-6026e0ce-7e15813e231e65ac1923be56;Sampled=0",
      "x-envoy-upstream-service-time",
      "138",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:10:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "708e3fc1-df16-473b-af3a-606501a9c402",
      "x-amz-apigw-id",
      "apgQWEgfvHcF0aw=",
      "x-amzn-trace-id",
      "Root=1-6026e0ce-04cb42295e24331b6f574e30;Sampled=0",
      "x-envoy-upstream-service-time",
      "111",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:10:55 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8e41503f-b9f3-4a4e-b42f-1324afe047b6",
      "x-amz-apigw-id",
      "apgQcGAovHcFb7A=",
      "x-amzn-trace-id",
      "Root=1-6026e0cf-229e0c9a69e9b7b32dd67814;Sampled=0",
      "x-envoy-upstream-service-time",
      "108",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: [
            "a1833f7f-3217-4479-88ad-4f024ffe6383",
            "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:10:21Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:10:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "831",
      "Connection",
      "close",
      "x-amzn-requestid",
      "99e4d799-fc83-4be8-8935-7c5eca2112c3",
      "x-amz-apigw-id",
      "apgQiGMKvHcFjXQ=",
      "x-amzn-trace-id",
      "Root=1-6026e0d0-711475ce01259901270cd50f;Sampled=0",
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
      "4",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:10:56 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "72dbe8c9-c5d1-4697-b126-865b2d9b9815",
      "x-amz-apigw-id",
      "apgQpF9_PHcFTHg=",
      "x-amzn-trace-id",
      "Root=1-6026e0d0-7e69e2315eafaf764e757c1d;Sampled=0",
      "x-envoy-upstream-service-time",
      "140",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "597",
      "x-ratelimit-reset",
      "4",
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
  .reply(202, { job_id: "7f0f4329-ab73-4864-a20b-ea1a8ab2cc14" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:10:58 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9c16d2d3-3234-4b86-bece-9d8bd4ce0da6",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apgQvF8dvHcFi0g=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e0d1-6fca49e17b2b735d451e2004;Sampled=0",
    "x-envoy-upstream-service-time",
    "626",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "3",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:10:58 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "91454eaa-8af0-4594-8aae-0174411cabae",
      "x-amz-apigw-id",
      "apgQ6EFBvHcFl4g=",
      "x-amzn-trace-id",
      "Root=1-6026e0d2-66dd259212b9f24320a6b21e;Sampled=0",
      "x-envoy-upstream-service-time",
      "111",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "2",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c/contacts")
  .query({ contact_ids: "bacb5577-8034-45f2-ac8d-c00f4ade26b7" })
  .once()
  .reply(202, { job_id: "0b0144bd-aa7e-4766-acd0-2e3ad49b2f40" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:10:59 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "1793fcba-1016-4c61-ac8a-57da717e707c",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apgRAGgZPHcF_0w=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e0d3-334b2d7c2ff8a3283fa32e36;Sampled=0",
    "x-envoy-upstream-service-time",
    "526",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "1",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: ["a1833f7f-3217-4479-88ad-4f024ffe6383"],
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:11:28Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:12:00 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "792",
      "Connection",
      "close",
      "x-amzn-requestid",
      "9b4b2132-78cd-4f88-b184-7560cc6565ea",
      "x-amz-apigw-id",
      "apgakEt9PHcFTJQ=",
      "x-amzn-trace-id",
      "Root=1-6026e110-736f97c24956f82d69fd61ec;Sampled=0",
      "x-envoy-upstream-service-time",
      "158",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: ["a1833f7f-3217-4479-88ad-4f024ffe6383"],
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:11:28Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:12:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "792",
      "Connection",
      "close",
      "x-amzn-requestid",
      "edf789c7-8d76-4686-b7b0-5f650c595813",
      "x-amz-apigw-id",
      "apgaqFdcPHcForw=",
      "x-amzn-trace-id",
      "Root=1-6026e110-551c703f0f5c8f3c7c02e274;Sampled=0",
      "x-envoy-upstream-service-time",
      "126",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "60",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:12:01 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "70441175-c918-4496-8f33-b8f489e734e2",
      "x-amz-apigw-id",
      "apgawE-yPHcFnWg=",
      "x-amzn-trace-id",
      "Root=1-6026e111-01ddcb3f61b0f70502d10d82;Sampled=0",
      "x-envoy-upstream-service-time",
      "119",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "59",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:12:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b8132464-adba-4cb0-98fe-6406140f0b52",
      "x-amz-apigw-id",
      "apga3ECpvHcF8vg=",
      "x-amzn-trace-id",
      "Root=1-6026e112-744f409e46d53a4a4613fdd3;Sampled=0",
      "x-envoy-upstream-service-time",
      "167",
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
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
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
      "Fri, 12 Feb 2021 20:12:02 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "478",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0135879b-7bd9-4a05-9c13-4a5b890b63a5",
      "x-amz-apigw-id",
      "apga9GL_vHcFw_Q=",
      "x-amzn-trace-id",
      "Root=1-6026e112-76a5ed6c6e712e641615fbe9;Sampled=0",
      "x-envoy-upstream-service-time",
      "113",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "598",
      "x-ratelimit-reset",
      "58",
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
      id: "ff66b39b-aa97-4789-a065-5be51c7dcf12",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:12:03 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "188",
      "Connection",
      "close",
      "x-amzn-requestid",
      "758942a2-d49d-4bfc-aa33-0b56e9f80d59",
      "x-amz-apigw-id",
      "apgbDEVAPHcF3gw=",
      "x-amzn-trace-id",
      "Root=1-6026e113-09379ff74c49d9571ce398da;Sampled=0",
      "x-envoy-upstream-service-time",
      "139",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "57",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "caio.silveira@mailinator.com" }],
    list_ids: [
      "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
      "ff66b39b-aa97-4789-a065-5be51c7dcf12",
    ],
  })
  .once()
  .reply(202, { job_id: "71154a81-5058-4a6c-8394-5df45c68b421" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:12:04 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9037c007-32af-4b5e-9f9a-a5304904f3a7",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apgbJFoevHcFs2g=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e114-5b5ca726773a4e4f77c6a8f4;Sampled=0",
    "x-envoy-upstream-service-time",
    "629",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: [
            "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
            "a1833f7f-3217-4479-88ad-4f024ffe6383",
            "ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:12:33Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:13:05 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "870",
      "Connection",
      "close",
      "x-amzn-requestid",
      "00b3ad86-f2fb-48f5-ac6a-a95df8d02be3",
      "x-amz-apigw-id",
      "apgktHJ9PHcFx_w=",
      "x-amzn-trace-id",
      "Root=1-6026e151-5e9a1c1756a8a29b27194331;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "55",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
          },
        },
        {
          name: "List Three",
          id: "ff66b39b-aa97-4789-a065-5be51c7dcf12",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
      "Fri, 12 Feb 2021 20:13:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "666",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a1c54868-a31b-4a71-a44a-4a0dcaf6417e",
      "x-amz-apigw-id",
      "apgk0F3xvHcFQPw=",
      "x-amzn-trace-id",
      "Root=1-6026e151-6ac9a2090680565e6ca9ae59;Sampled=0",
      "x-envoy-upstream-service-time",
      "276",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "55",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: [
            "ff66b39b-aa97-4789-a065-5be51c7dcf12",
            "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
            "a1833f7f-3217-4479-88ad-4f024ffe6383",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:12:33Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:13:06 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "870",
      "Connection",
      "close",
      "x-amzn-requestid",
      "93e65e1d-986b-4f9c-be50-cb56676046ae",
      "x-amz-apigw-id",
      "apgk7FijPHcFuTw=",
      "x-amzn-trace-id",
      "Root=1-6026e152-064cf44f5ee30b9b666eabbb;Sampled=0",
      "x-envoy-upstream-service-time",
      "342",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "54",
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
  .reply(202, { job_id: "5004a51d-a295-4e2b-91fe-ea06717c8b3b" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:13:07 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "6d0bcea8-2edc-439b-a35d-95893d2c982a",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apglEG_SvHcF-GQ=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e153-64bb75fb6aec6a3555405d54;Sampled=0",
    "x-envoy-upstream-service-time",
    "437",
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
  .get("/v3/marketing/lists")
  .once()
  .reply(
    200,
    {
      result: [
        {
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
          },
        },
        {
          name: "List Three",
          id: "ff66b39b-aa97-4789-a065-5be51c7dcf12",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
      "Fri, 12 Feb 2021 20:13:08 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "666",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0ff67a96-8e59-4263-b628-2727b150b0e0",
      "x-amz-apigw-id",
      "apglNE08vHcFlVg=",
      "x-amzn-trace-id",
      "Root=1-6026e154-10e206cb603f81bb53d09371;Sampled=0",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
          },
        },
        {
          name: "List Three",
          id: "ff66b39b-aa97-4789-a065-5be51c7dcf12",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
      "Fri, 12 Feb 2021 20:13:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "666",
      "Connection",
      "close",
      "x-amzn-requestid",
      "13fb0cf6-902e-420b-8c35-2e3e86378e01",
      "x-amz-apigw-id",
      "apglTGuWvHcFmMQ=",
      "x-amzn-trace-id",
      "Root=1-6026e154-76e54e3557a53ef66baf52d2;Sampled=0",
      "x-envoy-upstream-service-time",
      "113",
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
  .post("/v3/marketing/lists", { name: "List Four" })
  .once()
  .reply(
    201,
    {
      name: "List Four",
      id: "f1b107b4-2cda-4d1b-9df7-353de94c2ce3",
      contact_count: 0,
      _metadata: {
        self:
          "https://api.sendgrid.com/v3/marketing/lists/f1b107b4-2cda-4d1b-9df7-353de94c2ce3",
      },
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 12 Feb 2021 20:13:09 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "187",
      "Connection",
      "close",
      "x-amzn-requestid",
      "26a13114-40c8-4722-b209-5422bd60e043",
      "x-amz-apigw-id",
      "apglZFR8vHcFcqw=",
      "x-amzn-trace-id",
      "Root=1-6026e155-21a764920e73f215095d62f8;Sampled=0",
      "x-envoy-upstream-service-time",
      "354",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: [
            "a1833f7f-3217-4479-88ad-4f024ffe6383",
            "ff66b39b-aa97-4789-a065-5be51c7dcf12",
            "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:12:33Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:14:10 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "870",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7f39b7ff-165b-4eaa-a3d8-12bfda3bd7b3",
      "x-amz-apigw-id",
      "apgu6FBaPHcForw=",
      "x-amzn-trace-id",
      "Root=1-6026e192-4e42dc0232573e755257707b;Sampled=0",
      "x-envoy-upstream-service-time",
      "177",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
          },
        },
        {
          name: "List Four",
          id: "f1b107b4-2cda-4d1b-9df7-353de94c2ce3",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/f1b107b4-2cda-4d1b-9df7-353de94c2ce3",
          },
        },
        {
          name: "List Three",
          id: "ff66b39b-aa97-4789-a065-5be51c7dcf12",
          contact_count: 1,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
      "Fri, 12 Feb 2021 20:14:11 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "853",
      "Connection",
      "close",
      "x-amzn-requestid",
      "4275b8fd-c6cb-4b4f-a08b-a082e135db87",
      "x-amz-apigw-id",
      "apgvBFAXPHcF-ZQ=",
      "x-amzn-trace-id",
      "Root=1-6026e193-785177305c754a9242911cd7;Sampled=0",
      "x-envoy-upstream-service-time",
      "272",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "49",
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
      "Fri, 12 Feb 2021 20:14:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0f65aab1-ccd3-440a-9a39-c639b750c6f6",
      "x-amz-apigw-id",
      "apgvIH6VvHcFX2A=",
      "x-amzn-trace-id",
      "Root=1-6026e193-305b67a3280616584f8b8360;Sampled=0",
      "x-envoy-upstream-service-time",
      "110",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "49",
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
          city: "Campina Grande",
          country: "",
          email: "caio.silveira@mailinator.com",
          first_name: "",
          id: "bacb5577-8034-45f2-ac8d-c00f4ade26b7",
          last_name: "Silveira",
          list_ids: [
            "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
            "a1833f7f-3217-4479-88ad-4f024ffe6383",
            "ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
          created_at: "2021-02-12T20:05:36Z",
          updated_at: "2021-02-12T20:12:33Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/bacb5577-8034-45f2-ac8d-c00f4ade26b7",
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
      "Fri, 12 Feb 2021 20:14:12 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "870",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8449425b-f802-43a7-9c8d-df16ed75e641",
      "x-amz-apigw-id",
      "apgvPGFsPHcFnWA=",
      "x-amzn-trace-id",
      "Root=1-6026e194-23beb4796fd797b4599cc97e;Sampled=0",
      "x-envoy-upstream-service-time",
      "116",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "48",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "bacb5577-8034-45f2-ac8d-c00f4ade26b7" })
  .once()
  .reply(202, { job_id: "b2e5341e-c565-4210-8a60-144b85661011" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:14:13 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "b2c6879d-a85d-4d54-be39-6acb0cae93bd",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apgvVFE2PHcFs2g=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e195-684294067ed5cc5c39ebf808;Sampled=0",
    "x-envoy-upstream-service-time",
    "520",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "47",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .put("/v3/marketing/contacts", {
    contacts: [{ custom_fields: {}, email: "lucas.nogueira@mailinator.com" }],
    list_ids: [],
  })
  .once()
  .reply(202, { job_id: "2035d489-8fe5-4c39-9253-ffdaf10cb7a0" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:14:14 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "124d2eb0-b630-4b0f-a71d-e3aa45132a3b",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apgvfGyIvHcFgVg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e196-6b4f77f25682f67f07b86262;Sampled=0",
    "x-envoy-upstream-service-time",
    "493",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "46",
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
          id: "326a2671-d5b8-40d2-b7db-95795b6a761b",
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
          created_at: "2021-02-12T20:14:14Z",
          updated_at: "2021-02-12T20:14:43Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/326a2671-d5b8-40d2-b7db-95795b6a761b",
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
      "Fri, 12 Feb 2021 20:15:15 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "658",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5684dade-7f5c-4a76-aac6-ff9b2df0d292",
      "x-amz-apigw-id",
      "apg5BHjQvHcFlhw=",
      "x-amzn-trace-id",
      "Root=1-6026e1d3-1001d32e66fa043425a4731c;Sampled=0",
      "x-envoy-upstream-service-time",
      "203",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "45",
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
      "Fri, 12 Feb 2021 20:15:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "b3705ddc-feb3-4402-adfa-bfefb90962d8",
      "x-amz-apigw-id",
      "apg5IHrGvHcF4Pw=",
      "x-amzn-trace-id",
      "Root=1-6026e1d3-27b999c53149c84e6474fd0d;Sampled=0",
      "x-envoy-upstream-service-time",
      "154",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "45",
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
      "Fri, 12 Feb 2021 20:15:16 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7016449a-9bd1-4ff3-8ef8-8794acc9efb0",
      "x-amz-apigw-id",
      "apg5PEmbvHcFvyw=",
      "x-amzn-trace-id",
      "Root=1-6026e1d4-51d6c4be6e8ac8a42902cfe3;Sampled=0",
      "x-envoy-upstream-service-time",
      "317",
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
          id: "326a2671-d5b8-40d2-b7db-95795b6a761b",
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
          created_at: "2021-02-12T20:14:14Z",
          updated_at: "2021-02-12T20:14:43Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/326a2671-d5b8-40d2-b7db-95795b6a761b",
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
      "Fri, 12 Feb 2021 20:15:17 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "658",
      "Connection",
      "close",
      "x-amzn-requestid",
      "477a3749-713b-4570-ab4b-93596d0b1adb",
      "x-amz-apigw-id",
      "apg5XHitvHcFi_Q=",
      "x-amzn-trace-id",
      "Root=1-6026e1d5-3235defa2c05d85a2a64248f;Sampled=0",
      "x-envoy-upstream-service-time",
      "183",
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
  .delete("/v3/marketing/contacts")
  .query({ ids: "326a2671-d5b8-40d2-b7db-95795b6a761b" })
  .once()
  .reply(202, { job_id: "071b4644-2ece-4509-9c53-881a2bd457d1" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:15:18 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "a023ddaf-89cd-4358-a401-e768b6ff3ca5",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apg5dEbuvHcFgVg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e1d6-693b37da3752882748d31a19;Sampled=0",
    "x-envoy-upstream-service-time",
    "491",
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
  .reply(202, { job_id: "8e4bafba-d46f-4223-95b6-ac900a5758b0" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:15:19 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "089fb6c1-beb1-44a7-a760-1b8f2c2ea07f",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "apg5nHhoPHcFo6Q=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e1d7-32b9b3207ca0d6b779889137;Sampled=0",
    "x-envoy-upstream-service-time",
    "533",
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
          id: "2e471818-ac01-4731-95b5-934cfc5cdd9a",
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
          created_at: "2021-02-12T20:15:19Z",
          updated_at: "2021-02-12T20:15:48Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/2e471818-ac01-4731-95b5-934cfc5cdd9a",
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
      "Fri, 12 Feb 2021 20:16:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "45534d86-9a4a-43e4-94ad-ec43026d89d3",
      "x-amz-apigw-id",
      "aphDKHPlPHcFgBA=",
      "x-amzn-trace-id",
      "Root=1-6026e214-532466b34e76921958c216fb;Sampled=0",
      "x-envoy-upstream-service-time",
      "193",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "40",
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
      "Fri, 12 Feb 2021 20:16:20 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "3fc17982-c025-447e-af22-abd80d69f5a0",
      "x-amz-apigw-id",
      "aphDQHe0vHcF5dQ=",
      "x-amzn-trace-id",
      "Root=1-6026e214-16cfa1f4676409ad5c30a8b0;Sampled=0",
      "x-envoy-upstream-service-time",
      "179",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
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
          id: "2e471818-ac01-4731-95b5-934cfc5cdd9a",
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
          created_at: "2021-02-12T20:15:19Z",
          updated_at: "2021-02-12T20:15:48Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/2e471818-ac01-4731-95b5-934cfc5cdd9a",
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
      "Fri, 12 Feb 2021 20:16:21 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "676",
      "Connection",
      "close",
      "x-amzn-requestid",
      "c401a45a-f725-4f4c-81a4-c9107a9d267d",
      "x-amz-apigw-id",
      "aphDXE6_vHcFetA=",
      "x-amzn-trace-id",
      "Root=1-6026e215-3fba0b4a39c56e7555f9d0cf;Sampled=0",
      "x-envoy-upstream-service-time",
      "397",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "39",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({ ids: "2e471818-ac01-4731-95b5-934cfc5cdd9a" })
  .once()
  .reply(202, { job_id: "46d2d464-b0f2-4d10-abce-c33f47840b37" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:16:22 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9102ec01-6651-4969-a7fe-1eca6dc16ca5",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphDgGpWvHcF6XA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e216-178fd4b169ed56ae73924a52;Sampled=0",
    "x-envoy-upstream-service-time",
    "436",
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
      "Fri, 12 Feb 2021 20:17:23 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "61b56a82-2c13-47d8-ac08-143ecbdcefe7",
      "x-amz-apigw-id",
      "aphNDF_qvHcFciw=",
      "x-amzn-trace-id",
      "Root=1-6026e253-09bfcabd7fa032e75092b279;Sampled=0",
      "x-envoy-upstream-service-time",
      "117",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "37",
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
      "Fri, 12 Feb 2021 20:17:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "5286cf57-5dc0-4ef1-b3ba-6096d2fb0f76",
      "x-amz-apigw-id",
      "aphNJE7XvHcFztw=",
      "x-amzn-trace-id",
      "Root=1-6026e254-2d3b36dc72924dc178f70b55;Sampled=0",
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
      "36",
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
      "Fri, 12 Feb 2021 20:17:24 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "6f1d3a53-6829-4dfb-ba45-80cc2bd5798c",
      "x-amz-apigw-id",
      "aphNPFQhvHcFQ8g=",
      "x-amzn-trace-id",
      "Root=1-6026e254-2e45a1b4690302ea513761ce;Sampled=0",
      "x-envoy-upstream-service-time",
      "112",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "36",
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
      "Fri, 12 Feb 2021 20:17:25 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "206cfe8d-8b5a-4eb2-ae99-6cdf19e9b248",
      "x-amz-apigw-id",
      "aphNVE_nPHcFQRw=",
      "x-amzn-trace-id",
      "Root=1-6026e255-7791967471653b303a11307b;Sampled=0",
      "x-envoy-upstream-service-time",
      "136",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "35",
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
      "Fri, 12 Feb 2021 20:17:26 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bef907ec-0f5d-423a-8ab1-d29053b1026d",
      "x-amz-apigw-id",
      "aphNcEsVPHcFn3g=",
      "x-amzn-trace-id",
      "Root=1-6026e255-4275de07736bf64a5f70643c;Sampled=0",
      "x-envoy-upstream-service-time",
      "728",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "35",
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
      "Fri, 12 Feb 2021 20:17:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7a57b864-c436-4d56-8321-c4b0aad5c6e2",
      "x-amz-apigw-id",
      "aphNoGP8PHcFUWg=",
      "x-amzn-trace-id",
      "Root=1-6026e257-727ed2d30e5bee0108e1e9b6;Sampled=0",
      "x-envoy-upstream-service-time",
      "160",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "33",
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
          name: "List Two",
          id: "5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c",
          },
        },
        {
          name: "List One",
          id: "a1833f7f-3217-4479-88ad-4f024ffe6383",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383",
          },
        },
        {
          name: "List Four",
          id: "f1b107b4-2cda-4d1b-9df7-353de94c2ce3",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/f1b107b4-2cda-4d1b-9df7-353de94c2ce3",
          },
        },
        {
          name: "List Three",
          id: "ff66b39b-aa97-4789-a065-5be51c7dcf12",
          contact_count: 0,
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12",
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
      "Fri, 12 Feb 2021 20:17:27 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "853",
      "Connection",
      "close",
      "x-amzn-requestid",
      "7253f45a-00d7-40e2-94f1-64b60aee2a97",
      "x-amz-apigw-id",
      "aphNuG8UvHcF7Xw=",
      "x-amzn-trace-id",
      "Root=1-6026e257-1ef0ed0e32627f3709f42a4d;Sampled=0",
      "x-envoy-upstream-service-time",
      "125",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "600",
      "x-ratelimit-remaining",
      "599",
      "x-ratelimit-reset",
      "33",
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
    list_ids: ["f1b107b4-2cda-4d1b-9df7-353de94c2ce3"],
  })
  .once()
  .reply(202, { job_id: "6284a092-6b0d-4cca-b39e-3190f09a936d" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:17:28 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "a61a27d2-46a2-4a08-8322-6f37959c7172",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphN0EqmvHcFyNg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e258-4b9f244f6276e21a2b7614d1;Sampled=0",
    "x-envoy-upstream-service-time",
    "522",
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
          id: "ac35d2d4-de5f-405d-90bb-38d60a7d869e",
          last_name: "",
          list_ids: ["f1b107b4-2cda-4d1b-9df7-353de94c2ce3"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-12T20:17:28Z",
          updated_at: "2021-02-12T20:17:57Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/ac35d2d4-de5f-405d-90bb-38d60a7d869e",
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
      "Fri, 12 Feb 2021 20:18:29 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "703",
      "Connection",
      "close",
      "x-amzn-requestid",
      "bd0320c1-e907-4270-84c9-1a5729ae801d",
      "x-amz-apigw-id",
      "aphXXFkTvHcFvGw=",
      "x-amzn-trace-id",
      "Root=1-6026e295-754533df7c5de1ec1909d9a6;Sampled=0",
      "x-envoy-upstream-service-time",
      "122",
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
      "Fri, 12 Feb 2021 20:18:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "104f3f7f-88a3-43bf-b7a6-636d634b1e0b",
      "x-amz-apigw-id",
      "aphXeEMiPHcFp1A=",
      "x-amzn-trace-id",
      "Root=1-6026e296-44b992cb6d5da08b2c914550;Sampled=0",
      "x-envoy-upstream-service-time",
      "113",
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
      "Fri, 12 Feb 2021 20:18:30 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "249b3973-9907-4be0-9415-b6c4eb1983dd",
      "x-amz-apigw-id",
      "aphXkEDavHcF0CA=",
      "x-amzn-trace-id",
      "Root=1-6026e296-519f4bf43d076a153fb760d2;Sampled=0",
      "x-envoy-upstream-service-time",
      "164",
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
      "Fri, 12 Feb 2021 20:18:31 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "1a38b4ce-407f-4b2e-9aa8-22547ecdad5d",
      "x-amz-apigw-id",
      "aphXqFkwvHcFS2g=",
      "x-amzn-trace-id",
      "Root=1-6026e297-00ebc93f5778773a0aaae35b;Sampled=0",
      "x-envoy-upstream-service-time",
      "131",
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
      "Fri, 12 Feb 2021 20:18:32 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e20291dd-f0dd-4fe8-9a9e-a22a155c15db",
      "x-amz-apigw-id",
      "aphXwF6UPHcFROg=",
      "x-amzn-trace-id",
      "Root=1-6026e297-0472a43e003b7317267e4210;Sampled=0",
      "x-envoy-upstream-service-time",
      "157",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "29",
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
  .reply(202, { job_id: "81989ae7-caf7-4665-986b-a6be348b4f24" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:18:33 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9ee1199b-5aac-4483-845f-4f8b2af5b79d",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphX3HPuvHcFrqA=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e298-267c2225624b183458e67b4b;Sampled=0",
    "x-envoy-upstream-service-time",
    "481",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "28",
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
          id: "82aa86e1-a646-429e-b241-24c71c403b93",
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
          created_at: "2021-02-12T20:18:32Z",
          updated_at: "2021-02-12T20:19:01Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/82aa86e1-a646-429e-b241-24c71c403b93",
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
      "Fri, 12 Feb 2021 20:19:33 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "657",
      "Connection",
      "close",
      "x-amzn-requestid",
      "e42c01c9-c51f-4218-9689-d5ca4fd94409",
      "x-amz-apigw-id",
      "aphhaGCjvHcF8hw=",
      "x-amzn-trace-id",
      "Root=1-6026e2d5-5b8079da1dc4d1885988bf2e;Sampled=0",
      "x-envoy-upstream-service-time",
      "151",
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
      "Fri, 12 Feb 2021 20:19:34 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "8cfad496-d212-4f48-afd5-ee4b4c663ee6",
      "x-amz-apigw-id",
      "aphhgFEIPHcFh7A=",
      "x-amzn-trace-id",
      "Root=1-6026e2d6-214e985c1a6c0e0906024994;Sampled=0",
      "x-envoy-upstream-service-time",
      "140",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "26",
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
      "Fri, 12 Feb 2021 20:19:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "79",
      "Connection",
      "close",
      "x-amzn-requestid",
      "d38359bc-858d-4c4b-9057-60273df6860b",
      "access-control-allow-origin",
      "*",
      "access-control-allow-headers",
      "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
      "x-amz-apigw-id",
      "aphhmGmNPHcFnWA=",
      "access-control-allow-methods",
      "PUT,DELETE,OPTIONS",
      "access-control-expose-headers",
      "Link, Location",
      "x-amzn-trace-id",
      "Root=1-6026e2d6-4c5ef8554f9abee43db59678;Sampled=0",
      "x-envoy-upstream-service-time",
      "95",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "199",
      "x-ratelimit-reset",
      "26",
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
      "Fri, 12 Feb 2021 20:19:35 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "0580285b-5271-4fb1-8dfb-d7f2e1fa5b09",
      "x-amz-apigw-id",
      "aphhsFovPHcFgzg=",
      "x-amzn-trace-id",
      "Root=1-6026e2d7-3133a11b3bc1ea34278c9c81;Sampled=0",
      "x-envoy-upstream-service-time",
      "140",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "198",
      "x-ratelimit-reset",
      "25",
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
      "Fri, 12 Feb 2021 20:19:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "49fd544a-1c22-4480-a8d7-8a9ee1e13c0b",
      "x-amz-apigw-id",
      "aphhyGH4vHcFUHw=",
      "x-amzn-trace-id",
      "Root=1-6026e2d8-74303aeb6a6993517982ab3f;Sampled=0",
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
      "24",
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
      "Fri, 12 Feb 2021 20:19:36 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "109",
      "Connection",
      "close",
      "x-amzn-requestid",
      "af3e4da4-b940-4a64-bb65-8b606e2a6fba",
      "x-amz-apigw-id",
      "aphh5HUEPHcF-hw=",
      "x-amzn-trace-id",
      "Root=1-6026e2d8-6a2157b7790c894f627c950e;Sampled=0",
      "x-envoy-upstream-service-time",
      "218",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "197",
      "x-ratelimit-reset",
      "24",
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
          id: "ac35d2d4-de5f-405d-90bb-38d60a7d869e",
          last_name: "",
          list_ids: ["f1b107b4-2cda-4d1b-9df7-353de94c2ce3"],
          postal_code: "",
          segment_ids: null,
          state_province_region: "",
          phone_number: "",
          whatsapp: "",
          line: "",
          facebook: "",
          unique_name: "",
          custom_fields: {},
          created_at: "2021-02-12T20:17:28Z",
          updated_at: "2021-02-12T20:17:57Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/ac35d2d4-de5f-405d-90bb-38d60a7d869e",
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
      "Fri, 12 Feb 2021 20:19:37 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "703",
      "Connection",
      "close",
      "x-amzn-requestid",
      "a8210ad7-2153-471a-b160-b566d8a71c13",
      "x-amz-apigw-id",
      "aphh_FjAPHcFs2g=",
      "x-amzn-trace-id",
      "Root=1-6026e2d9-79defbe02b1e7b4e725a4b28;Sampled=0",
      "x-envoy-upstream-service-time",
      "146",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-content-type-options",
      "nosniff",
      "x-ratelimit-limit",
      "200",
      "x-ratelimit-remaining",
      "196",
      "x-ratelimit-reset",
      "23",
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
          id: "82aa86e1-a646-429e-b241-24c71c403b93",
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
          created_at: "2021-02-12T20:18:32Z",
          updated_at: "2021-02-12T20:19:01Z",
          _metadata: {
            self:
              "https://api.sendgrid.com/v3/marketing/contacts/82aa86e1-a646-429e-b241-24c71c403b93",
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
      "Fri, 12 Feb 2021 20:19:38 GMT",
      "Content-Type",
      "application/json",
      "Content-Length",
      "657",
      "Connection",
      "close",
      "x-amzn-requestid",
      "867c78fc-e608-4e58-a1a8-be961e0e91c9",
      "x-amz-apigw-id",
      "aphiGE4SPHcFoHA=",
      "x-amzn-trace-id",
      "Root=1-6026e2da-43b26bc42daa63fc76bca95a;Sampled=0",
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
      "22",
      "Powered-By",
      "SGGateway",
    ]
  );
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/contacts")
  .query({
    ids:
      "ac35d2d4-de5f-405d-90bb-38d60a7d869e%2C82aa86e1-a646-429e-b241-24c71c403b93",
  })
  .once()
  .reply(202, { job_id: "c888e971-8905-4a47-9230-a2716188250a" }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:19:39 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "50",
    "Connection",
    "close",
    "x-amzn-requestid",
    "18eca9ed-afec-49eb-b383-b89b0a7013dd",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphiMF5CvHcFyLg=",
    "access-control-allow-methods",
    "PUT,DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e2da-784a8e7c6757b4d97259fb1b;Sampled=0",
    "x-envoy-upstream-service-time",
    "415",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "200",
    "x-ratelimit-remaining",
    "199",
    "x-ratelimit-reset",
    "22",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/a1833f7f-3217-4479-88ad-4f024ffe6383")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:19:40 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "d6d9a2d1-5630-461e-8f25-bb7ed11d5038",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphiVGy3PHcFUoA=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e2db-7af8baa26190bfe20a84d0c7;Sampled=0",
    "x-envoy-upstream-service-time",
    "972",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "21",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/5ea6bb6c-2ba5-4c76-ac4e-b2182373364c")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:19:42 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "7c146259-c569-4612-8e85-50bb569d2e89",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphikFG1PHcFW3A=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e2dd-0a75c5290aeb110e5770f6ff;Sampled=0",
    "x-envoy-upstream-service-time",
    "939",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "599",
    "x-ratelimit-reset",
    "19",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/ff66b39b-aa97-4789-a065-5be51c7dcf12")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:19:43 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "9d276e88-1c73-418e-9f09-2ccd0c2fdc87",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphiyGU-PHcFxFA=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e2de-04795c5d76908bc8788f5696;Sampled=0",
    "x-envoy-upstream-service-time",
    "823",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "598",
    "x-ratelimit-reset",
    "18",
    "Powered-By",
    "SGGateway",
  ]);
nock("https://api.sendgrid.com:443", { encodedQueryParams: true })
  .delete("/v3/marketing/lists/f1b107b4-2cda-4d1b-9df7-353de94c2ce3")
  .once()
  .reply(204, "", [
    "Server",
    "nginx",
    "Date",
    "Fri, 12 Feb 2021 20:19:44 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "0",
    "Connection",
    "close",
    "x-amzn-requestid",
    "c4d1d2e9-58a0-4f16-ad12-959cd62211e5",
    "access-control-allow-origin",
    "*",
    "access-control-allow-headers",
    "AUTHORIZATION, Content-Type, On-behalf-of, x-sg-elas-acl, X-Recaptcha, X-Request-Source",
    "x-amz-apigw-id",
    "aphi_EV3vHcFjTw=",
    "access-control-allow-methods",
    "DELETE,OPTIONS",
    "access-control-expose-headers",
    "Link, Location",
    "x-amzn-trace-id",
    "Root=1-6026e2df-51de0c975c1ec0c90810cee3;Sampled=0",
    "x-envoy-upstream-service-time",
    "842",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-content-type-options",
    "nosniff",
    "x-ratelimit-limit",
    "600",
    "x-ratelimit-remaining",
    "597",
    "x-ratelimit-reset",
    "17",
    "Powered-By",
    "SGGateway",
  ]);
