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
      expires_in: 3599,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:56:59 GMT",
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
  .reply(200, { requestId: "6227#17d4f044661", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:00 GMT",
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
  .reply(200, { requestId: "110dc#17d4f044970", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:00 GMT",
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
  .reply(200, { requestId: "1239e#17d4f044c20", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:01 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "15152#17d4f044e74", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:02 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
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
      requestId: "11d72#17d4f0450c4",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:02 GMT",
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
      requestId: "17f5c#17d4f045408",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:03 GMT",
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
  .reply(200, { requestId: "9875#17d4f0455c0", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:03 GMT",
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
      expires_in: 3594,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:04 GMT",
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
  .reply(200, { requestId: "f73a#17d4f0458eb", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:04 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "edd5#17d4f045a8e", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:05 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "11953#17d4f045d21", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:05 GMT",
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
      expires_in: 3593,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:06 GMT",
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
  .reply(200, { requestId: "48a8#17d4f0460fb", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:07 GMT",
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
      requestId: "262e#17d4f046342",
      result: [{ id: 7149, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:08 GMT",
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
      requestId: "45c1#17d4f0469b3",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:08Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:09 GMT",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "7905#17d4f046c1a",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:09 GMT",
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
      expires_in: 3589,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:10 GMT",
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
      requestId: "1298d#17d4f046fb4",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:08Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:10 GMT",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f774#17d4f04714d",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:11 GMT",
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
  .reply(200, { requestId: "16c31#17d4f047437", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:11 GMT",
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
      expires_in: 3587,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:12 GMT",
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
      requestId: "13aae#17d4f047758",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:08Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:12 GMT",
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
        email: "brian@bleonard.com",
        id: 7149,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "f484#17d4f047995",
      result: [{ id: 7149, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:14 GMT",
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
    lookupField: "email",
    action: "createOrUpdate",
    input: [{ email: "brian2@bleonard.com", firstName: "Andy" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "c425#17d4f0480bf",
      result: [{ id: 7150, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:15 GMT",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "64a9#17d4f0485d2",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:16 GMT",
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
      requestId: "12966#17d4f048847",
      result: [
        {
          id: 7150,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:15Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:16 GMT",
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
    filterValues: "7150",
  })
  .once()
  .reply(
    200,
    {
      requestId: "7c6f#17d4f0489e0",
      result: [
        {
          id: 7150,
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
      "Tue, 23 Nov 2021 22:57:17 GMT",
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
      expires_in: 3581,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:17 GMT",
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
      requestId: "7ff9#17d4f048cf2",
      result: [
        {
          id: 7149,
          firstName: "John",
          lastName: "Smith",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:13Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:18 GMT",
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
        email: "brian@bleonard.com",
        id: 7149,
        firstName: "Brian",
        lastName: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "4603#17d4f048e87",
      result: [{ id: 7149, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:19 GMT",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "4bca#17d4f049471",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:20 GMT",
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
      requestId: "5762#17d4f049617",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:20 GMT",
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
      expires_in: 3578,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:20 GMT",
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
      requestId: "17554#17d4f049959",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:21 GMT",
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
    input: [{ email: "brian@bleonard.com", id: 7149, firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "d1b#17d4f049ae5",
      result: [{ id: 7149, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:22 GMT",
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
      requestId: "6d0f#17d4f04a09f",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:23 GMT",
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
      requestId: "70cd#17d4f04a2ac",
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
      "Tue, 23 Nov 2021 22:57:23 GMT",
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
      requestId: "eb08#17d4f04a44c",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:24 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1159/leads.json", { input: [{ id: 7149 }] })
  .once()
  .reply(
    200,
    {
      requestId: "7cc0#17d4f04a638",
      result: [{ id: 7149, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:24 GMT",
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
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "c9f1#17d4f04a7ef",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:25 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1159/leads.json", "listId=1159&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "38cd#17d4f04a99f",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:25 GMT",
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
      requestId: "154e4#17d4f04b51e",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:28 GMT",
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
      expires_in: 3570,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:28 GMT",
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
      requestId: "8367#17d4f04b83a",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
        {
          id: 7150,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:15Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:29 GMT",
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
      { email: "brian@bleonard.com", id: 7149, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 7150, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "14e9#17d4f04b9d9",
      result: [
        { id: 7149, status: "updated" },
        { id: 7150, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:30 GMT",
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
      requestId: "10262#17d4f04c063",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab43.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:31 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1159/leads.json", {
    input: [{ id: 7149 }, { id: 7150 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "87be#17d4f04c223",
      result: [
        { id: 7149, status: "added" },
        { id: 7150, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:31 GMT",
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
      requestId: "b1d7#17d4f04c3e6",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:32 GMT",
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
      requestId: "16941#17d4f04c5c1",
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
      "Tue, 23 Nov 2021 22:57:32 GMT",
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
      requestId: "ef#17d4f04c760",
      warnings: [],
      result: [
        {
          id: 1160,
          name: "(test) Churned",
          createdAt: "2021-11-23T22:57:33Z+0000",
          updatedAt: "2021-11-23T22:57:33Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab29.marketo.com/#ST1160A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:33 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1160/leads.json", { input: [{ id: 7149 }] })
  .once()
  .reply(
    200,
    {
      requestId: "e582#17d4f04c932",
      result: [{ id: 7149, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:33 GMT",
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
      requestId: "a19f#17d4f04cc99",
      warnings: [],
      result: [
        {
          id: 1160,
          name: "(test) Churned",
          createdAt: "2021-11-23T22:57:33Z+0000",
          updatedAt: "2021-11-23T22:57:33Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1160A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1159/leads.json", "listId=1159&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "f89e#17d4f04ce2d",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
        {
          id: 7150,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:29Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1160/leads.json", "listId=1160&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "72ed#17d4f04cfc7",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:35 GMT",
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
    filterValues: "7150",
  })
  .once()
  .reply(
    200,
    {
      requestId: "13318#17d4f04d164",
      result: [
        {
          id: 7150,
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
      "Tue, 23 Nov 2021 22:57:35 GMT",
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
      expires_in: 3563,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:35 GMT",
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
      requestId: "154ae#17d4f04d48c",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
        {
          id: 7150,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:29Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:36 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "354",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    lookupField: "id",
    action: "updateOnly",
    input: [
      { email: "brian@bleonard.com", id: 7149, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 7150, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "dfcf#17d4f04d61c",
      result: [
        { id: 7149, status: "updated" },
        { id: 7150, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:37 GMT",
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
      requestId: "8b78#17d4f04d938",
      warnings: [],
      result: [
        {
          id: 1160,
          name: "(test) Churned",
          createdAt: "2021-11-23T22:57:33Z+0000",
          updatedAt: "2021-11-23T22:57:33Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1160A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:37 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1160/leads.json")
  .query({ id: ["7149", "7150"] })
  .once()
  .reply(
    200,
    {
      requestId: "11623#17d4f04db4c",
      result: [
        { id: 7149, status: "removed" },
        {
          id: 7150,
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
      "Tue, 23 Nov 2021 22:57:38 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "178",
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
      requestId: "11193#17d4f04de66",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab29.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:38 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1159/leads.json", {
    input: [{ id: 7149 }, { id: 7150 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1153d#17d4f04dff2",
      result: [
        { id: 7149, status: "added" },
        { id: 7150, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:39 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "117",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1159/leads.json", "listId=1159&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "226b#17d4f04e2fa",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
        {
          id: 7150,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:29Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:40 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1160/leads.json", "listId=1160&_method=GET")
  .once()
  .reply(200, { requestId: "516#17d4f04e49b", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:40 GMT",
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
      expires_in: 3558,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:40 GMT",
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
      requestId: "89a9#17d4f04e7d0",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:18Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:41 GMT",
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
      requestId: "15ffb#17d4f04e960",
      result: [
        {
          id: 7150,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:29Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:41 GMT",
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
        email: "other@bleonard.com",
        id: 7149,
        firstName: "Brian",
        lastName: "Test",
      },
      { email: "brian2@bleonard.com", id: 7150, firstName: "Evan" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "ae50#17d4f04eaf1",
      result: [
        { id: 7149, status: "updated" },
        { id: 7150, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:43 GMT",
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
      requestId: "16d6e#17d4f04f1da",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab48.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1159/leads.json")
  .query({ id: "7150" })
  .once()
  .reply(
    200,
    {
      requestId: "98f7#17d4f04f407",
      result: [{ id: 7150, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:44 GMT",
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
      requestId: "3b63#17d4f04f5c1",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab05.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1159/leads.json", { input: [{ id: 7149 }] })
  .once()
  .reply(
    200,
    {
      requestId: "16798#17d4f04f797",
      result: [{ id: 7149, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:45 GMT",
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
      requestId: "326c#17d4f04f94b",
      warnings: [],
      result: [
        {
          id: 1160,
          name: "(test) Churned",
          createdAt: "2021-11-23T22:57:33Z+0000",
          updatedAt: "2021-11-23T22:57:33Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab34.marketo.com/#ST1160A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:45 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1160/leads.json", { input: [{ id: 7149 }] })
  .once()
  .reply(
    200,
    {
      requestId: "13108#17d4f04fade",
      result: [{ id: 7149, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "88",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f46a#17d4f04fcae",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:46 GMT",
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
  .reply(200, { requestId: "5995#17d4f04fe41", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:47 GMT",
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
    filterValues: "7150",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5755#17d4f04ffd6",
      result: [
        {
          id: 7150,
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
      "Tue, 23 Nov 2021 22:57:47 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "340",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1159/leads.json", "listId=1159&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "ad9f#17d4f05016e",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T22:57:42Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:47 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1160/leads.json", "listId=1160&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "25a5#17d4f05038c",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T22:57:42Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:48 GMT",
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
      expires_in: 3550,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:48 GMT",
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
      requestId: "5461#17d4f0506af",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T22:57:42Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:49 GMT",
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
      requestId: "1106e#17d4f050899",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab48.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1159/leads.json")
  .query({ id: "7149" })
  .once()
  .reply(
    200,
    {
      requestId: "d456#17d4f050a56",
      result: [{ id: 7149, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:50 GMT",
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
      requestId: "463a#17d4f050c0c",
      warnings: [],
      result: [
        {
          id: 1160,
          name: "(test) Churned",
          createdAt: "2021-11-23T22:57:33Z+0000",
          updatedAt: "2021-11-23T22:57:33Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab05.marketo.com/#ST1160A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:50 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1160/leads.json")
  .query({ id: "7149" })
  .once()
  .reply(
    200,
    {
      requestId: "17e4a#17d4f050da4",
      result: [{ id: 7149, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:51 GMT",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1d97#17d4f050f53",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:51 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "342",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1159/leads.json", "listId=1159&_method=GET")
  .once()
  .reply(200, { requestId: "9edd#17d4f0510e7", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:51 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1160/leads.json", "listId=1160&_method=GET")
  .once()
  .reply(200, { requestId: "a1b6#17d4f051276", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:52 GMT",
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
      expires_in: 3546,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:52 GMT",
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
      requestId: "5eb7#17d4f05159f",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-11-23T22:57:42Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:53 GMT",
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
      requestId: "afbd#17d4f051745",
      result: [
        {
          id: 7150,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:57:42Z",
          createdAt: "2021-11-23T22:57:15Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:53 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", { input: [{ id: 7150 }] })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "fe9a#17d4f0518d1",
      result: [{ id: 7150, status: "deleted" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:54 GMT",
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
        id: 7149,
        firstName: "Brian",
        lastName: "Test",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "fa16#17d4f051d31",
      result: [{ id: 7149, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:55 GMT",
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
      requestId: "109e3#17d4f0522a3",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1159/leads.json", { input: [{ id: 7149 }] })
  .once()
  .reply(
    200,
    {
      requestId: "13c4f#17d4f05246b",
      result: [{ id: 7149, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:57 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "88",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "14101#17d4f052742",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:57:57 GMT",
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
  .reply(200, { requestId: "1704b#17d4f0528ce", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:57 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "e134#17d4f052a5c", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:58 GMT",
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
    filterValues: "7150",
  })
  .once()
  .reply(200, { requestId: "20a#17d4f052be5", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:58 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "58",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1159/leads.json", "listId=1159&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "20d#17d4f052d71",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:55Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1160/leads.json", "listId=1160&_method=GET")
  .once()
  .reply(200, { requestId: "10823#17d4f052f14", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:57:59 GMT",
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
      expires_in: 3539,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:57:59 GMT",
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
  .reply(200, { requestId: "11c6e#17d4f05323f", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:58:00 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
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
        date_field: "2020-08-30",
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
      requestId: "13aaf#17d4f0533d2",
      result: [{ id: 7151, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:01 GMT",
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
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "6ca1#17d4f05371a",
      result: [
        {
          id: 7151,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:00Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:01 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "be4b#17d4f0538a8",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:02 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "387",
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
      expires_in: 3536,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:02 GMT",
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
      requestId: "7e09#17d4f053bd5",
      result: [
        {
          id: 7151,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:00Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:02 GMT",
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
        id: 7151,
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
      requestId: "d0ad#17d4f053d6a",
      result: [{ id: 7151, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:04 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "14fd0#17d4f054211",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:04 GMT",
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
      expires_in: 3534,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:04 GMT",
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
      requestId: "e388#17d4f05452b",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:05 GMT",
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
        id: 7151,
        firstName: "Maria",
        boolean_field: "other",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "7078#17d4f0546b6",
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
      "Tue, 23 Nov 2021 22:58:05 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "72ab#17d4f05487e",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:06 GMT",
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
      expires_in: 3532,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:06 GMT",
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
      requestId: "13430#17d4f054b9f",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:06 GMT",
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
        id: 7151,
        firstName: "Maria",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "193e#17d4f054daa",
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
      "Tue, 23 Nov 2021 22:58:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "178",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "6c37#17d4f054f39",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:07 GMT",
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
      expires_in: 3531,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:08 GMT",
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
      requestId: "b588#17d4f055250",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:08 GMT",
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
        id: 7151,
        firstName: "Maria",
        integer_field: 14.1,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "b425#17d4f0553dc",
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
      "Tue, 23 Nov 2021 22:58:09 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "169dc#17d4f055574",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:09 GMT",
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
      expires_in: 3529,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:09 GMT",
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
      requestId: "139dc#17d4f055891",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:10 GMT",
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
        id: 7151,
        firstName: "Maria",
        float_field: "14c",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "b841#17d4f055a25",
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
      "Tue, 23 Nov 2021 22:58:10 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "6ef1#17d4f055bb5",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:11 GMT",
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
      expires_in: 3527,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:11 GMT",
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
      requestId: "66f9#17d4f055ede",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:11 GMT",
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
        id: 7151,
        firstName: "Maria",
        datetime_field: "yesterday",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1c19#17d4f056079",
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
      "Tue, 23 Nov 2021 22:58:12 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1815a#17d4f05620e",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:12 GMT",
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
      expires_in: 3526,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:13 GMT",
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
      requestId: "16151#17d4f0565b8",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:13 GMT",
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
        id: 7151,
        firstName: "Maria",
        percent_field: "100%",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "31d6#17d4f056742",
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
      "Tue, 23 Nov 2021 22:58:13 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "39a6#17d4f0568d1",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:14 GMT",
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
  .reply(200, { requestId: "ec5#17d4f056a60", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:58:14 GMT",
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
      expires_in: 3524,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:15 GMT",
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
      requestId: "8a11#17d4f056d80",
      result: [
        {
          id: 7149,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:57:55Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:15 GMT",
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
        id: 7149,
        firstName: "Sam",
        lastName: "Test",
      },
      {
        email: "brian2@bleonard.com",
        id: 7151,
        firstName: "William",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "f869#17d4f056f14",
      result: [
        { id: 7149, status: "updated" },
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
      "Tue, 23 Nov 2021 22:58:16 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "209",
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
      requestId: "143eb#17d4f057466",
      result: [{ id: 7152, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:18 GMT",
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
    filterValues: "7149",
  })
  .once()
  .reply(
    200,
    {
      requestId: "df94#17d4f057916",
      result: [
        {
          id: 7149,
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
      "Tue, 23 Nov 2021 22:58:18 GMT",
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
    filterValues: "7151",
  })
  .once()
  .reply(
    200,
    {
      requestId: "34cc#17d4f057aa6",
      result: [
        {
          id: 7151,
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
      "Tue, 23 Nov 2021 22:58:18 GMT",
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
      requestId: "118fb#17d4f057c43",
      result: [
        {
          id: 7152,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-11-23T22:58:17Z",
          createdAt: "2021-11-23T22:58:18Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:19 GMT",
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
    filterValues: "7152",
  })
  .once()
  .reply(
    200,
    {
      requestId: "135d6#17d4f057dd3",
      result: [
        {
          id: 7152,
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
      "Tue, 23 Nov 2021 22:58:19 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "357",
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
      requestId: "b6e1#17d4f057f5d",
      result: [
        {
          id: 7149,
          firstName: "Sam",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-11-23T22:58:15Z",
          createdAt: "2021-11-23T22:57:08Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:20 GMT",
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
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "2026#17d4f0580ea",
      result: [
        {
          id: 7151,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-11-23T22:58:03Z",
          createdAt: "2021-11-23T22:58:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:20 GMT",
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
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "c2c8#17d4f0582ed",
      result: [
        {
          id: 7152,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-11-23T22:58:17Z",
          createdAt: "2021-11-23T22:58:18Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:21 GMT",
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
  .reply(200, { requestId: "1755a#17d4f058485", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 23 Nov 2021 22:58:21 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    input: [{ id: 7149 }, { id: 7151 }, { id: 7152 }],
  })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "90b2#17d4f05861b",
      result: [
        { id: 7149, status: "deleted" },
        { id: 7151, status: "deleted" },
        { id: 7152, status: "deleted" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:22 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "151",
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
      requestId: "14ba9#17d4f0588ba",
      warnings: [],
      result: [
        {
          id: 1159,
          name: "(test) High Value",
          createdAt: "2021-11-23T22:57:24Z+0000",
          updatedAt: "2021-11-23T22:57:24Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1159A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:22 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1159/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "17f0e#17d4f058a75",
      warnings: [],
      result: [{ id: 1159 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:23 GMT",
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
      requestId: "1440#17d4f058d1a",
      warnings: [],
      result: [
        {
          id: 1160,
          name: "(test) Churned",
          createdAt: "2021-11-23T22:57:33Z+0000",
          updatedAt: "2021-11-23T22:57:33Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab39.marketo.com/#ST1160A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:23 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1160/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "80d0#17d4f058ed7",
      warnings: [],
      result: [{ id: 1160 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 23 Nov 2021 22:58:24 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
