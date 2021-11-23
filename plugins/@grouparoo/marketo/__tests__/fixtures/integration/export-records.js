const nock = require("nock");

nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2366,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "2da4#17d4db9cb39", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:01 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "16a64#17d4db9ccd6", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:02 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(200, { requestId: "2ce8#17d4db9ce6d", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:02 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "811a#17d4db9d006", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:02 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "14851#17d4db9d19d",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:03 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "f195#17d4db9d337",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:03 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "e66e#17d4db9d4d8", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:04 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2363,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:04 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "17d03#17d4db9d80a", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:04 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "13605#17d4db9d9a3", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:05 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "408e#17d4db9db4e", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:05 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2361,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:06 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "5117#17d4db9de7b", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:06 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "email",
    action: "createOrUpdate",
    input: [{ email: "brian@bleonard.com", firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "40f5#17d4db9e023",
      result: [{ id: 7145, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "6866#17d4db9e360",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:07Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "d4ca#17d4db9e4fb",
      result: [
        {
          id: 7145,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "340",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2359,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "9521#17d4db9e82b",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:07Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f075#17d4db9e9c3",
      result: [
        {
          id: 7145,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "340",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "a9b2#17d4db9eb5d", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:09 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2357,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    filterType: "email",
    filterValues: "brian%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "6c41#17d4db9ee8e",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:07Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian@bleonard.com",
        id: 7145,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10fcd#17d4db9f034",
      result: [{ id: 7145, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:11 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "90",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "email",
    action: "createOrUpdate",
    input: [{ email: "brian2@bleonard.com", firstName: "Andy" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "15be7#17d4db9f472",
      result: [{ id: 7146, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "90",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "87cb#17d4db9f8f0",
      result: [
        {
          id: 7145,
          email: "brian@bleonard.com",
          firstName: "John",
          lastName: "Smith",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "342",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "16ca6#17d4db9fb02",
      result: [
        {
          id: 7146,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:12Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7146",
  })
  .once()
  .reply(
    200,
    {
      requestId: "178ec#17d4db9fc9d",
      result: [
        {
          id: 7146,
          email: "brian2@bleonard.com",
          firstName: "Andy",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:14 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "341",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2353,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:14 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "121d0#17d4db9ffcd",
      result: [
        {
          id: 7145,
          firstName: "John",
          lastName: "Smith",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:11Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:15 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian@bleonard.com",
        id: 7145,
        firstName: "Brian",
        lastName: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "4b7b#17d4dba0167",
      result: [{ id: 7145, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:16 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "6afe#17d4dba0550",
      result: [
        {
          id: 7145,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:16 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "340",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "240f#17d4dba0769",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2350,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "210c#17d4dba0aa4",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [{ email: "brian@bleonard.com", id: 7145, firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1677f#17d4dba0c45",
      result: [{ id: 7145, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:18 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "90",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "68a0#17d4dba1022",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:19 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/folder/byName.json")
  .query({ name: "Group%20Lists" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "b036#17d4dba11e7",
      warnings: [],
      result: [
        {
          name: "Group Lists",
          description: null,
          createdAt: "2020-08-14T20:43:13Z+0000",
          updatedAt: "2020-08-14T20:43:13Z+0000",
          url: null,
          folderId: { id: 12, type: "Folder" },
          folderType: "List",
          parent: { id: 5, type: "Folder" },
          path: "/Lead Database/Default/Group Lists",
          isArchive: false,
          isSystem: true,
          accessZoneId: 1,
          workspace: "Default",
          id: 12,
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:19 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post(
    "/rest/asset/v1/staticLists.json",
    "name=%28test%29%20High%20Value&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D"
  )
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "4e07#17d4dba138a",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:20 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1157/leads.json", { input: [{ id: 7145 }] })
  .once()
  .reply(
    200,
    {
      requestId: "11726#17d4dba15d7",
      result: [{ id: 7145, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:20 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "88",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "12973#17d4dba179f",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:21 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1157/leads.json", "listId=1157&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "d6de#17d4dba193d",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:21 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "e09a#17d4dba24ba",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:24 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2342,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:24 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    filterType: "email",
    filterValues: "brian%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "58e2#17d4dba2865",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
        {
          id: 7146,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:12Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:25 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "352",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      { email: "brian@bleonard.com", id: 7145, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 7146, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "acd9#17d4dba2aa6",
      result: [
        { id: 7145, status: "updated" },
        { id: 7146, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:26 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "120",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "2ed8#17d4dba2ed0",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:27 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1157/leads.json", {
    input: [{ id: 7145 }, { id: 7146 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "c299#17d4dba3083",
      result: [
        { id: 7145, status: "added" },
        { id: 7146, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:27 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "116",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "16f49#17d4dba323a",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/folder/byName.json")
  .query({ name: "Group%20Lists" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "74cf#17d4dba3422",
      warnings: [],
      result: [
        {
          name: "Group Lists",
          description: null,
          createdAt: "2020-08-14T20:43:13Z+0000",
          updatedAt: "2020-08-14T20:43:13Z+0000",
          url: null,
          folderId: { id: 12, type: "Folder" },
          folderType: "List",
          parent: { id: 5, type: "Folder" },
          path: "/Lead Database/Default/Group Lists",
          isArchive: false,
          isSystem: true,
          accessZoneId: 1,
          workspace: "Default",
          id: 12,
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post(
    "/rest/asset/v1/staticLists.json",
    "name=%28test%29%20Churned&folder=%7B%22type%22%3A%22Folder%22%2C%22id%22%3A12%7D"
  )
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "1142e#17d4dba35eb",
      warnings: [],
      result: [
        {
          id: 1158,
          name: "(test) Churned",
          createdAt: "2021-11-23T16:56:28Z+0000",
          updatedAt: "2021-11-23T16:56:28Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1158A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1158/leads.json", { input: [{ id: 7145 }] })
  .once()
  .reply(
    200,
    {
      requestId: "15416#17d4dba3799",
      result: [{ id: 7145, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:29 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "88",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "8c4f#17d4dba3946",
      warnings: [],
      result: [
        {
          id: 1158,
          name: "(test) Churned",
          createdAt: "2021-11-23T16:56:29Z+0000",
          updatedAt: "2021-11-23T16:56:29Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab44.marketo.com/#ST1158A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:29 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1157/leads.json", "listId=1157&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "ec30#17d4dba3ade",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
        {
          id: 7146,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:26Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:30 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1158/leads.json", "listId=1158&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "ade4#17d4dba3c83",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:30 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7146",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1132f#17d4dba3ef2",
      result: [
        {
          id: 7146,
          email: "brian2@bleonard.com",
          firstName: "Sally",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:31 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "342",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2336,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:31 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    filterType: "email",
    filterValues: "brian%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b6d2#17d4dba4231",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
        {
          id: 7146,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:26Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:32 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      { email: "brian@bleonard.com", id: 7145, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 7146, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "c1a1#17d4dba4561",
      result: [
        { id: 7145, status: "updated" },
        { id: 7146, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:33 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "120",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "3daa#17d4dba49c8",
      warnings: [],
      result: [
        {
          id: 1158,
          name: "(test) Churned",
          createdAt: "2021-11-23T16:56:29Z+0000",
          updatedAt: "2021-11-23T16:56:29Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1158A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1158/leads.json")
  .query({ id: ["7145", "7146"] })
  .once()
  .reply(
    200,
    {
      requestId: "8fc3#17d4dba4b68",
      result: [
        { id: 7145, status: "removed" },
        {
          id: 7146,
          status: "skipped",
          reasons: [{ code: "1015", message: "Lead not in list" }],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "177",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "174cf#17d4dba4d48",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1157/leads.json", {
    input: [{ id: 7145 }, { id: 7146 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "16637#17d4dba4eea",
      result: [
        { id: 7145, status: "added" },
        { id: 7146, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:35 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "117",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1157/leads.json", "listId=1157&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "38a4#17d4dba51b6",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
        {
          id: 7146,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:26Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:36 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1158/leads.json", "listId=1158&_method=GET")
  .once()
  .reply(200, { requestId: "169f4#17d4dba5390", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:36 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2330,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:36 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "e4be#17d4dba56d7",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:15Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:37 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    filterType: "email",
    filterValues: "other%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b644#17d4dba5879",
      result: [
        {
          id: 7146,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:26Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:37 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "other@bleonard.com",
        id: 7145,
        firstName: "Brian",
        lastName: "Test",
      },
      { email: "brian2@bleonard.com", id: 7146, firstName: "Evan" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1494#17d4dba5a15",
      result: [
        { id: 7145, status: "updated" },
        { id: 7146, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:38 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "120",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "7e76#17d4dba5dc8",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab48.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:39 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1157/leads.json")
  .query({ id: "7146" })
  .once()
  .reply(
    200,
    {
      requestId: "14f63#17d4dba6058",
      result: [{ id: 7146, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:39 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "90",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "13ce8#17d4dba621f",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:40 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1157/leads.json", { input: [{ id: 7145 }] })
  .once()
  .reply(
    200,
    {
      requestId: "e249#17d4dba6417",
      result: [{ id: 7145, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:40 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "87",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "b18b#17d4dba65d8",
      warnings: [],
      result: [
        {
          id: 1158,
          name: "(test) Churned",
          createdAt: "2021-11-23T16:56:29Z+0000",
          updatedAt: "2021-11-23T16:56:29Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1158A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:41 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1158/leads.json", { input: [{ id: 7145 }] })
  .once()
  .reply(
    200,
    {
      requestId: "7f86#17d4dba679d",
      result: [{ id: 7145, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:41 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "87",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "8ba6#17d4dba6977",
      result: [
        {
          id: 7145,
          email: "other@bleonard.com",
          firstName: "Brian",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:42 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "342",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "4c3f#17d4dba6b10", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:42 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7146",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5e2e#17d4dba6ca7",
      result: [
        {
          id: 7146,
          email: "brian2@bleonard.com",
          firstName: "Evan",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:42 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "340",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1157/leads.json", "listId=1157&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "14a42#17d4dba6e46",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T16:56:38Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:43 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1158/leads.json", "listId=1158&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "20d3#17d4dba6ff0",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T16:56:38Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:43 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2323,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "3f12#17d4dba7335",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T16:56:38Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "926b#17d4dba74d4",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab05.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:45 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1157/leads.json")
  .query({ id: "7145" })
  .once()
  .reply(
    200,
    {
      requestId: "121b#17d4dba76ba",
      result: [{ id: 7145, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:45 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "cfbf#17d4dba7873",
      warnings: [],
      result: [
        {
          id: 1158,
          name: "(test) Churned",
          createdAt: "2021-11-23T16:56:29Z+0000",
          updatedAt: "2021-11-23T16:56:29Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1158A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1158/leads.json")
  .query({ id: "7145" })
  .once()
  .reply(
    200,
    {
      requestId: "b246#17d4dba7a90",
      result: [{ id: 7145, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "184a3#17d4dba7c6a",
      result: [
        {
          id: 7145,
          email: "other@bleonard.com",
          firstName: "Brian",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "343",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1157/leads.json", "listId=1157&_method=GET")
  .once()
  .reply(200, { requestId: "c7aa#17d4dba7e15", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:47 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1158/leads.json", "listId=1158&_method=GET")
  .once()
  .reply(200, { requestId: "488#17d4dba7fbe", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:47 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "58",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2319,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:48 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "8cc6#17d4dba831e",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T16:56:38Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:48 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    filterType: "email",
    filterValues: "brian%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1512a#17d4dba84c0",
      result: [
        {
          id: 7146,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:38Z",
          createdAt: "2021-11-23T16:56:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", { input: [{ id: 7146 }] })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "3009#17d4dba8654",
      result: [{ id: 7146, status: "deleted" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian@bleonard.com",
        id: 7145,
        firstName: "Brian",
        lastName: "Test",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "44a7#17d4dba898d",
      result: [{ id: 7145, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:50 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "118f5#17d4dba8d4b",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:51 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1157/leads.json", { input: [{ id: 7145 }] })
  .once()
  .reply(
    200,
    {
      requestId: "b0a2#17d4dba8ef0",
      result: [{ id: 7145, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:51 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "87",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "15f6b#17d4dba913b",
      result: [
        {
          id: 7145,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:52 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "343",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "e857#17d4dba92dc", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:52 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "1a#17d4dba948a", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:53 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "57",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7146",
  })
  .once()
  .reply(200, { requestId: "176c4#17d4dba9620", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:53 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1157/leads.json", "listId=1157&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "18037#17d4dba97b9",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:50Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:53 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1158/leads.json", "listId=1158&_method=GET")
  .once()
  .reply(200, { requestId: "fef7#17d4dba995e", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:54 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2312,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:54 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "acd0#17d4dba9cad", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:56:55 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "email",
    action: "createOrUpdate",
    input: [
      {
        email: "brian2@bleonard.com",
        firstName: "Evan",
        textarea_field: "text is here",
        boolean_field: true,
        email_field: "field@grouparoo.com",
        integer_field: 5,
        float_field: 5.4,
        datetime_field: "2020-08-30T05:49:48.000Z",
        date_field: "2020-08-30T05:49:48.000Z",
        score_field: 10,
        percent_field: 99,
        currency_field: 34.66,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "a8f5#17d4dba9e43",
      result: [{ id: 7147, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "11903#17d4dbaa158",
      result: [
        {
          id: 7147,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:55Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "115e8#17d4dbaa36c",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Evan",
          lastName: null,
          textarea_field: "text is here",
          boolean_field: true,
          email_field: "field@grouparoo.com",
          integer_field: 5,
          float_field: 5.4,
          datetime_field: "2020-08-30T05:49:48Z",
          date_field: "2020-08-30",
          score_field: 10,
          percent_field: 99,
          currency_field: 34.66,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "388",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2310,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:57 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "26a9#17d4dbaa6db",
      result: [
        {
          id: 7147,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:55Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:57 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        textarea_field: null,
        boolean_field: null,
        email_field: null,
        integer_field: null,
        float_field: null,
        datetime_field: null,
        score_field: null,
        percent_field: null,
        currency_field: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "3bf5#17d4dbaa877",
      result: [{ id: 7147, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:58 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "17ab9#17d4dbaacd2",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "350",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2308,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:56:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "16d7a#17d4dbab005",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:00 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        boolean_field: "other",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "b593#17d4dbab19e",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message:
                "Invalid value for field 'boolean_field' and value 'other'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:00 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "177",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "16283#17d4dbab37e",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "350",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2306,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "11903#17d4dbab70c",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "11e4e#17d4dbab95e",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message:
                "Invalid value for field 'email_field' and value 'bademail'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:02 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "179",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "726d#17d4dbabb25",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:03 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "349",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2304,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:03 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "122d4#17d4dbabe94",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:03 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        integer_field: 14.1,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "f008#17d4dbac028",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message:
                "Invalid value for field 'integer_field' and value '14.1'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:04 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "176",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1535c#17d4dbac1c3",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:04 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "350",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2302,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "f787#17d4dbac505",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        float_field: "14c",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "e9e7#17d4dbac6aa",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message: "Invalid value for field 'float_field' and value '14c'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:05 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "173",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "917c#17d4dbac843",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:06 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "349",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2301,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:06 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "14b73#17d4dbacb75",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        datetime_field: "yesterday",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "ffab#17d4dbacd0e",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message:
                "Invalid value for field 'datetime_field' and value 'yesterday'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "182",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "11cc0#17d4dbacea6",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "350",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2299,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "44e5#17d4dbad1e3",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "Maria",
        percent_field: "100%",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1980#17d4dbad380",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message:
                "Invalid value for field 'percent_field' and value '100%'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "176",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "13287#17d4dbad548",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "350",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(200, { requestId: "c187#17d4dbad6e1", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:57:10 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/identity/oauth/token")
  .query({
    grant_type: "client_credentials",
    client_id: "98628d43-73e8-7a3d-9725-f1fd7be3755c",
    client_secret: "qZyFW90pDnrdHZTS4whWqTtqeVAjZlsT",
  })
  .once()
  .reply(
    200,
    {
      access_token: "my-access-token",
      token_type: "bearer",
      expires_in: 2297,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Cache-Control",
      "no-store",
      "Pragma",
      "no-cache",
      "X-XSS-Protection",
      "1; mode=block",
      "X-Frame-Options",
      "DENY",
      "X-Content-Type-Options",
      "nosniff",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    filterType: "email",
    filterValues:
      "brian%40bleonard.com%2Cbrian2%40bleonard.com%2Cbrian3%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "2a0d#17d4dbada1e",
      result: [
        {
          id: 7145,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:56:50Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "355",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian@bleonard.com",
        id: 7145,
        firstName: "Sam",
        lastName: "Test",
      },
      {
        email: "brian2@bleonard.com",
        id: 7147,
        firstName: "William",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "107ec#17d4dbadbb6",
      result: [
        { id: 7145, status: "updated" },
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message:
                "Invalid value for field 'email_field' and value 'bademail'",
            },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:11 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "210",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "email",
    action: "createOrUpdate",
    input: [
      {
        email: "brian3@bleonard.com",
        firstName: "Liz",
        email_field: "valid@grouparoo.com",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "2ded#17d4dbadf33",
      result: [{ id: 7148, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "89",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7145",
  })
  .once()
  .reply(
    200,
    {
      requestId: "db1d#17d4dbae2c5",
      result: [
        {
          id: 7145,
          email: "brian@bleonard.com",
          firstName: "Sam",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "340",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7147",
  })
  .once()
  .reply(
    200,
    {
      requestId: "380b#17d4dbae460",
      result: [
        {
          id: 7147,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: "2020-08-30",
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "349",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "e005#17d4dbae5fb",
      result: [
        {
          id: 7148,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-11-23T16:57:12Z",
          createdAt: "2021-11-23T16:57:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "204",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cdate_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "7148",
  })
  .once()
  .reply(
    200,
    {
      requestId: "e1e9#17d4dbae7aa",
      result: [
        {
          id: 7148,
          email: "brian3@bleonard.com",
          firstName: "Liz",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: "valid@grouparoo.com",
          integer_field: null,
          float_field: null,
          datetime_field: null,
          date_field: null,
          score_field: null,
          percent_field: null,
          currency_field: null,
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:14 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "356",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "10acc#17d4dbae944",
      result: [
        {
          id: 7145,
          firstName: "Sam",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T16:57:11Z",
          createdAt: "2021-11-23T16:56:07Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:14 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "144d6#17d4dbaeb00",
      result: [
        {
          id: 7147,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T16:56:58Z",
          createdAt: "2021-11-23T16:56:56Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:15 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "740a#17d4dbaed1c",
      result: [
        {
          id: 7148,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-11-23T16:57:12Z",
          createdAt: "2021-11-23T16:57:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:15 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "204",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "1a9e#17d4dbaeeb6", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 16:57:16 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    input: [{ id: 7145 }, { id: 7147 }, { id: 7148 }],
  })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "16e#17d4dbaf053",
      result: [
        { id: 7145, status: "deleted" },
        { id: 7147, status: "deleted" },
        { id: 7148, status: "deleted" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:16 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "150",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "3bd8#17d4dbaf207",
      warnings: [],
      result: [
        {
          id: 1157,
          name: "(test) High Value",
          createdAt: "2021-11-23T16:56:20Z+0000",
          updatedAt: "2021-11-23T16:56:20Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1157A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1157/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "720f#17d4dbaf3c5",
      warnings: [],
      result: [{ id: 1157 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/asset/v1/staticList/byName.json")
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "8a7d#17d4dbaf58d",
      warnings: [],
      result: [
        {
          id: 1158,
          name: "(test) Churned",
          createdAt: "2021-11-23T16:56:29Z+0000",
          updatedAt: "2021-11-23T16:56:29Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1158A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1158/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "16aab#17d4dbaf72d",
      warnings: [],
      result: [{ id: 1158 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 16:57:18 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
