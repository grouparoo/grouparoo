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
      expires_in: 2762,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:07 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "15bf7#178b7180435", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:07 GMT",
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
  .reply(200, { requestId: "4bd3#178b7180550", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:08 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(200, { requestId: "1bce#178b7180659", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:08 GMT",
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
  .reply(200, { requestId: "fe69#178b7180807", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:08 GMT",
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
      requestId: "96b1#178b718090a",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:09 GMT",
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
      requestId: "dfaf#178b71809d9",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:09 GMT",
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
  .reply(200, { requestId: "bad3#178b7180aa8", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:09 GMT",
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
      expires_in: 2760,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:09 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "12a5e#178b7180c68", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:09 GMT",
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
  .reply(200, { requestId: "e6ff#178b7180dc8", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:10 GMT",
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
  .reply(200, { requestId: "b3cd#178b7181015", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:11 GMT",
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
      expires_in: 2758,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:11 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "1294d#178b71812f4", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:11 GMT",
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
    input: [{ email: "brian@bleonard.com", firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "11b7b#178b71813e3",
      result: [{ id: 4983, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:12 GMT",
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
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "8757#178b71817d2",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:12Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:12 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "7768#178b718193e",
      result: [
        {
          id: 4983,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "322",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "be91#178b7181a64", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:13 GMT",
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
      expires_in: 2756,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:13 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "32a9#178b7181c50",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:12Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:14 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "113de#178b7181e71",
      result: [
        {
          id: 4983,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:14 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "12c4b#178b7181fc2", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:14 GMT",
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
      expires_in: 2754,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:15 GMT",
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
      requestId: "182d4#178b71821bb",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:12Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:15 GMT",
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
        id: 4983,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "9260#178b71822c3",
      result: [{ id: 4983, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:16 GMT",
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
      requestId: "b883#178b7182729",
      result: [{ id: 4984, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:17 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "48bf#178b7182a60",
      result: [
        {
          id: 4983,
          email: "brian@bleonard.com",
          firstName: "John",
          lastName: "Smith",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
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
      requestId: "570c#178b7182b54",
      result: [
        {
          id: 4984,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:16Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:18 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4984",
  })
  .once()
  .reply(
    200,
    {
      requestId: "faf7#178b7182de2",
      result: [
        {
          id: 4984,
          email: "brian2@bleonard.com",
          firstName: "Andy",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:18 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "322",
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
      expires_in: 2751,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:18 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "9ba7#178b7182fe7",
      result: [
        {
          id: 4983,
          firstName: "John",
          lastName: "Smith",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:15Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:19 GMT",
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
        id: 4983,
        firstName: "Brian",
        lastName: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "e566#178b7183108",
      result: [{ id: 4983, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:20 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f71f#178b7183556",
      result: [
        {
          id: 4983,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:20 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "322",
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
      requestId: "26e2#178b718361a",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:20 GMT",
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
      expires_in: 2749,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:20 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "1812d#178b7183839",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:21 GMT",
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
    input: [{ email: "brian@bleonard.com", id: 4983, firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "623f#178b7183945",
      result: [{ id: 4983, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:22 GMT",
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
      requestId: "17216#178b7183d12",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:22 GMT",
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
      requestId: "7bfa#178b7183dee",
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
        {
          name: "Group Lists",
          description: null,
          createdAt: "2020-08-28T19:52:20Z+0000",
          updatedAt: "2020-08-28T19:52:20Z+0000",
          url: null,
          folderId: { id: 68, type: "Folder" },
          folderType: "List",
          parent: { id: 67, type: "Folder" },
          path: "/Lead Database/Default/Group Lists/Test/Inner/Group Lists",
          isArchive: false,
          isSystem: false,
          accessZoneId: 1,
          workspace: "Default",
          id: 68,
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:22 GMT",
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
      requestId: "ff3e#178b7184a75",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:25 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1122/leads.json", { input: [{ id: 4983 }] })
  .once()
  .reply(
    200,
    {
      requestId: "eb41#178b7184b94",
      result: [{ id: 4983, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:26 GMT",
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
      requestId: "16e9b#178b7184c95",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:26 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1122/leads.json", "listId=1122&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "14420#178b7184e10",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:27 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "206",
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
      requestId: "12523#178b71859ed",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:29 GMT",
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
      expires_in: 2739,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:29 GMT",
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
      requestId: "12738#178b7185b7f",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
        {
          id: 4984,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:16Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:30 GMT",
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
      { email: "brian@bleonard.com", id: 4983, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 4984, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "c5ad#178b7185c53",
      result: [
        { id: 4983, status: "updated" },
        { id: 4984, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:31 GMT",
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
      requestId: "5f68#178b71861dd",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:31 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1122/leads.json", {
    input: [{ id: 4983 }, { id: 4984 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "12ae0#178b71862d3",
      result: [
        { id: 4983, status: "added" },
        { id: 4984, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:32 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "117",
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
      requestId: "1025f#178b71863ef",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:32 GMT",
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
      requestId: "10da3#178b71864b6",
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
        {
          name: "Group Lists",
          description: null,
          createdAt: "2020-08-28T19:52:20Z+0000",
          updatedAt: "2020-08-28T19:52:20Z+0000",
          url: null,
          folderId: { id: 68, type: "Folder" },
          folderType: "List",
          parent: { id: 67, type: "Folder" },
          path: "/Lead Database/Default/Group Lists/Test/Inner/Group Lists",
          isArchive: false,
          isSystem: false,
          accessZoneId: 1,
          workspace: "Default",
          id: 68,
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:32 GMT",
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
      requestId: "23b4#178b7186588",
      warnings: [],
      result: [
        {
          id: 1123,
          name: "(test) Churned",
          createdAt: "2021-04-09T14:45:32Z+0000",
          updatedAt: "2021-04-09T14:45:32Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1123A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:32 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1123/leads.json", { input: [{ id: 4983 }] })
  .once()
  .reply(
    200,
    {
      requestId: "e0d7#178b7186676",
      result: [{ id: 4983, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:32 GMT",
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
      requestId: "42e5#178b7186773",
      warnings: [],
      result: [
        {
          id: 1123,
          name: "(test) Churned",
          createdAt: "2021-04-09T14:45:32Z+0000",
          updatedAt: "2021-04-09T14:45:32Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1123A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:33 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1122/leads.json", "listId=1122&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "6c5#178b718688d",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
        {
          id: 4984,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:30Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:33 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "352",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1123/leads.json", "listId=1123&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "14340#178b7186bae",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:34 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4984",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5a27#178b7187970",
      result: [
        {
          id: 4984,
          email: "brian2@bleonard.com",
          firstName: "Sally",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:37 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      expires_in: 2731,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:38 GMT",
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
      requestId: "c381#178b7187b95",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
        {
          id: 4984,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:30Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:38 GMT",
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
      { email: "brian@bleonard.com", id: 4983, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 4984, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "39e1#178b7187dba",
      result: [
        { id: 4983, status: "updated" },
        { id: 4984, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:39 GMT",
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
      requestId: "e630#178b71881ac",
      warnings: [],
      result: [
        {
          id: 1123,
          name: "(test) Churned",
          createdAt: "2021-04-09T14:45:32Z+0000",
          updatedAt: "2021-04-09T14:45:32Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1123A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:39 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1123/leads.json")
  .query({ id: ["4983", "4984"] })
  .once()
  .reply(
    200,
    {
      requestId: "68aa#178b7188279",
      result: [
        { id: 4983, status: "removed" },
        {
          id: 4984,
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
      "Fri, 09 Apr 2021 14:45:40 GMT",
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
      requestId: "10f9#178b7188962",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:41 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1122/leads.json", {
    input: [{ id: 4983 }, { id: 4984 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "5270#178b7188a43",
      result: [
        { id: 4983, status: "added" },
        { id: 4984, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:42 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "116",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1122/leads.json", "listId=1122&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "12fac#178b7188ca5",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
        {
          id: 4984,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:30Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:42 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "354",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1123/leads.json", "listId=1123&_method=GET")
  .once()
  .reply(200, { requestId: "1ca8#178b7189057", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:43 GMT",
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
      expires_in: 2725,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:43 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "87d8#178b71892be",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:19Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:44 GMT",
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
      requestId: "16628#178b7189596",
      result: [
        {
          id: 4984,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:30Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:45 GMT",
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
        id: 4983,
        firstName: "Brian",
        lastName: "Test",
      },
      { email: "brian2@bleonard.com", id: 4984, firstName: "Evan" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "ddd4#178b718973c",
      result: [
        { id: 4983, status: "updated" },
        { id: 4984, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:45 GMT",
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
      requestId: "f932#178b7189a3c",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1122/leads.json")
  .query({ id: "4984" })
  .once()
  .reply(
    200,
    {
      requestId: "a8b2#178b7189b22",
      result: [{ id: 4984, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:46 GMT",
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
      requestId: "9f7d#178b7189cb4",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1122/leads.json", { input: [{ id: 4983 }] })
  .once()
  .reply(
    200,
    {
      requestId: "5da#178b7189e36",
      result: [{ id: 4983, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:47 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "86",
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
      requestId: "28f5#178b718a0c3",
      warnings: [],
      result: [
        {
          id: 1123,
          name: "(test) Churned",
          createdAt: "2021-04-09T14:45:32Z+0000",
          updatedAt: "2021-04-09T14:45:32Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1123A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:47 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1123/leads.json", { input: [{ id: 4983 }] })
  .once()
  .reply(
    200,
    {
      requestId: "6593#178b718a1a0",
      result: [{ id: 4983, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:48 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "3dc1#178b718a3fc",
      result: [
        {
          id: 4983,
          email: "other@bleonard.com",
          firstName: "Brian",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:48 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "386a#178b718a5e1", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:49 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4984",
  })
  .once()
  .reply(
    200,
    {
      requestId: "71f4#178b718a72a",
      result: [
        {
          id: 4984,
          email: "brian2@bleonard.com",
          firstName: "Evan",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "322",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1122/leads.json", "listId=1122&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "104b1#178b718a82e",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T14:45:45Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:50 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1123/leads.json", "listId=1123&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "109aa#178b718aacc",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T14:45:45Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:50 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
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
      expires_in: 2719,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:50 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "9b9a#178b718ac90",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T14:45:45Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:50 GMT",
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
      requestId: "167cf#178b718ad52",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:51 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1122/leads.json")
  .query({ id: "4983" })
  .once()
  .reply(
    200,
    {
      requestId: "15fc1#178b718ae1a",
      result: [{ id: 4983, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:51 GMT",
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
  .query({ name: "%28test%29%20Churned" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "32be#178b718afe3",
      warnings: [],
      result: [
        {
          id: 1123,
          name: "(test) Churned",
          createdAt: "2021-04-09T14:45:32Z+0000",
          updatedAt: "2021-04-09T14:45:32Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1123A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:51 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1123/leads.json")
  .query({ id: "4983" })
  .once()
  .reply(
    200,
    {
      requestId: "17807#178b718b2aa",
      result: [{ id: 4983, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:53 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "299f#178b718b6ac",
      result: [
        {
          id: 4983,
          email: "other@bleonard.com",
          firstName: "Brian",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:53 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1122/leads.json", "listId=1122&_method=GET")
  .once()
  .reply(200, { requestId: "1409f#178b718b792", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:53 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1123/leads.json", "listId=1123&_method=GET")
  .once()
  .reply(200, { requestId: "172cb#178b718b887", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:45:53 GMT",
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
      expires_in: 2715,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:54 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "4560#178b718baa7",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T14:45:45Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:54 GMT",
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
      requestId: "a86b#178b718bbe7",
      result: [
        {
          id: 4984,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:45:45Z",
          createdAt: "2021-04-09T14:45:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:54 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", { input: [{ id: 4984 }] })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "11ab1#178b718bced",
      result: [{ id: 4984, status: "deleted" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:57 GMT",
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
    lookupField: "id",
    action: "updateOnly",
    input: [
      {
        email: "brian@bleonard.com",
        id: 4983,
        firstName: "Brian",
        lastName: "Test",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "7740#178b718c65c",
      result: [{ id: 4983, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:58 GMT",
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
      requestId: "15e6#178b718c9c6",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:58 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1122/leads.json", { input: [{ id: 4983 }] })
  .once()
  .reply(
    200,
    {
      requestId: "5b6#178b718cb68",
      result: [{ id: 4983, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:45:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "86",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "9cd6#178b718ceb8",
      result: [
        {
          id: 4983,
          email: "brian@bleonard.com",
          firstName: "Brian",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:45:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "65db#178b718d099", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:00 GMT",
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
  .reply(200, { requestId: "11082#178b718d3f2", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:01 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4984",
  })
  .once()
  .reply(200, { requestId: "121bd#178b718d591", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:01 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "60",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1122/leads.json", "listId=1122&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "17c29#178b718d681",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:57Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1123/leads.json", "listId=1123&_method=GET")
  .once()
  .reply(200, { requestId: "14ce1#178b718d917", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:02 GMT",
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
      expires_in: 2707,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:02 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "12442#178b718dc7d", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:03 GMT",
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
      requestId: "135cc#178b718dd4b",
      result: [{ id: 4985, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:04 GMT",
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
      requestId: "11580#178b718e0c3",
      result: [
        {
          id: 4985,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:03Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:04 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "931f#178b718e1e3",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Evan",
          lastName: null,
          textarea_field: "text is here",
          boolean_field: true,
          email_field: "field@grouparoo.com",
          integer_field: 5,
          float_field: 5.4,
          datetime_field: "2020-08-30T05:49:48Z",
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
      "Fri, 09 Apr 2021 14:46:04 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "361",
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
      expires_in: 2705,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:04 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "47f6#178b718e388",
      result: [
        {
          id: 4985,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:03Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:04 GMT",
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
        id: 4985,
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
      requestId: "6562#178b718e46b",
      result: [{ id: 4985, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:07 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "10ba7#178b718ef26",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
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
      expires_in: 2701,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:08 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "58a8#178b718f16e",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:08 GMT",
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
        id: 4985,
        firstName: "Maria",
        boolean_field: "other",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "612f#178b718f260",
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
      "Fri, 09 Apr 2021 14:46:09 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "864b#178b718f4e5",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      expires_in: 2700,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:09 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "13af4#178b718f7f3",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:10 GMT",
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
        id: 4985,
        firstName: "Maria",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "16118#178b719096a",
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
      "Fri, 09 Apr 2021 14:46:14 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b294#178b7190b8b",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:15 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      expires_in: 2693,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:16 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "f4cd#178b7191149",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:16 GMT",
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
        id: 4985,
        firstName: "Maria",
        integer_field: 14.1,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "a4c6#178b7191383",
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
      "Fri, 09 Apr 2021 14:46:17 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5754#178b7191b80",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:19 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      expires_in: 2690,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:19 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "12dd8#178b71929c1",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:23 GMT",
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
        id: 4985,
        firstName: "Maria",
        float_field: "14c",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "218c#178b7192d99",
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
      "Fri, 09 Apr 2021 14:46:23 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "151ea#178b719327b",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:26 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
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
      expires_in: 2682,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:27 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "5dae#178b7193ee3",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:28 GMT",
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
        id: 4985,
        firstName: "Maria",
        datetime_field: "yesterday",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10589#178b7194015",
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
      "Fri, 09 Apr 2021 14:46:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "183",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "abef#178b7194159",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:30 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      expires_in: 2679,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:30 GMT",
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
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(
    200,
    {
      requestId: "17495#178b719486d",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:32 GMT",
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
        id: 4985,
        firstName: "Maria",
        percent_field: "100%",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1384b#178b7194fdf",
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
      "Fri, 09 Apr 2021 14:46:32 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1bd3#178b719527b",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(200, { requestId: "11612#178b719596a", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:35 GMT",
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
      expires_in: 2674,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:35 GMT",
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
      requestId: "3bd9#178b7195b31",
      result: [
        {
          id: 4983,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:45:57Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:35 GMT",
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
        id: 4983,
        firstName: "Sam",
        lastName: "Test",
      },
      {
        email: "brian2@bleonard.com",
        id: 4985,
        firstName: "William",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "2661#178b7195dcd",
      result: [
        { id: 4983, status: "updated" },
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
      "Fri, 09 Apr 2021 14:46:37 GMT",
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
      requestId: "14dab#178b7196329",
      result: [{ id: 4986, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:38 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4983",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f53b#178b71967e6",
      result: [
        {
          id: 4983,
          email: "brian@bleonard.com",
          firstName: "Sam",
          lastName: "Test",
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:38 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "322",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4985",
  })
  .once()
  .reply(
    200,
    {
      requestId: "af9b#178b71968f4",
      result: [
        {
          id: 4985,
          email: "brian2@bleonard.com",
          firstName: "Maria",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: null,
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:40 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      requestId: "873f#178b7197162",
      result: [
        {
          id: 4986,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-04-09T14:46:38Z",
          createdAt: "2021-04-09T14:46:37Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:41 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4986",
  })
  .once()
  .reply(
    200,
    {
      requestId: "185ba#178b719725b",
      result: [
        {
          id: 4986,
          email: "brian3@bleonard.com",
          firstName: "Liz",
          lastName: null,
          textarea_field: null,
          boolean_field: false,
          email_field: "valid@grouparoo.com",
          integer_field: null,
          float_field: null,
          datetime_field: null,
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
      "Fri, 09 Apr 2021 14:46:41 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "339",
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
      requestId: "9fe6#178b71974ee",
      result: [
        {
          id: 4983,
          firstName: "Sam",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T14:46:36Z",
          createdAt: "2021-04-09T14:45:12Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:42 GMT",
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
      requestId: "14eeb#178b719760c",
      result: [
        {
          id: 4985,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T14:46:06Z",
          createdAt: "2021-04-09T14:46:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:42 GMT",
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
      requestId: "b3de#178b7197a8c",
      result: [
        {
          id: 4986,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-04-09T14:46:38Z",
          createdAt: "2021-04-09T14:46:37Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:43 GMT",
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
  .reply(200, { requestId: "873e#178b7197b89", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 14:46:43 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    input: [{ id: 4983 }, { id: 4985 }, { id: 4986 }],
  })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "15e65#178b7197c73",
      result: [
        { id: 4983, status: "deleted" },
        { id: 4985, status: "deleted" },
        { id: 4986, status: "deleted" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "152",
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
      requestId: "a6a0#178b7197d84",
      warnings: [],
      result: [
        {
          id: 1122,
          name: "(test) High Value",
          createdAt: "2021-04-09T14:45:25Z+0000",
          updatedAt: "2021-04-09T14:45:25Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1122A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1122/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "127f8#178b7197e88",
      warnings: [],
      result: [{ id: 1122 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:44 GMT",
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
      requestId: "6b2f#178b7197fa6",
      warnings: [],
      result: [
        {
          id: 1123,
          name: "(test) Churned",
          createdAt: "2021-04-09T14:45:32Z+0000",
          updatedAt: "2021-04-09T14:45:32Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1123A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1123/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "dd90#178b7198082",
      warnings: [],
      result: [{ id: 1123 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 14:46:45 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
