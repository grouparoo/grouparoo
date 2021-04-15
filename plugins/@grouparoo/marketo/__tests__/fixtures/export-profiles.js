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
      expires_in: 518,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:31 GMT",
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
  .reply(200, { requestId: "1397c#178b73a416d", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:31 GMT",
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
  .reply(200, { requestId: "148df#178b73a4320", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:32 GMT",
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
  .reply(200, { requestId: "363#178b73a44eb", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:32 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "58",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "72e1#178b73a46f9", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:33 GMT",
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
      requestId: "a517#178b73a487f",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:33 GMT",
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
      requestId: "c324#178b73a49a9",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:33 GMT",
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
  .reply(200, { requestId: "fccf#178b73a4bd9", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:34 GMT",
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
      expires_in: 514,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:35 GMT",
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
  .reply(200, { requestId: "150dd#178b73a5308", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:36 GMT",
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
  .reply(200, { requestId: "16e91#178b73a55e0", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:36 GMT",
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
  .reply(200, { requestId: "d61d#178b73a58ee", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:39 GMT",
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
      expires_in: 509,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:39 GMT",
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
  .reply(200, { requestId: "13f01#178b73a62fe", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:40 GMT",
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
      requestId: "2e2f#178b73a64bf",
      result: [{ id: 4999, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:42 GMT",
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
      requestId: "b156#178b73a6d7c",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:42Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:43 GMT",
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
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "e99f#178b73a7051",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:22:43 GMT",
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
      expires_in: 505,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:43 GMT",
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
      requestId: "a964#178b73a7247",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:42Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:44 GMT",
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
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5820#178b73a73c1",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:22:44 GMT",
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
  .reply(200, { requestId: "9a83#178b73a7571", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:22:45 GMT",
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
      expires_in: 504,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:45 GMT",
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
      requestId: "eeaa#178b73a78ae",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:42Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:45 GMT",
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
        id: 4999,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "40ef#178b73a7afb",
      result: [{ id: 4999, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:49 GMT",
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
      requestId: "afd4#178b73a86cf",
      result: [{ id: 5000, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:52 GMT",
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
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "15b5e#178b73a9468",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:22:53 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "325",
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
      requestId: "2936#178b73a96a5",
      result: [
        {
          id: 5000,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:22:52Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:53 GMT",
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
    filterValues: "5000",
  })
  .once()
  .reply(
    200,
    {
      requestId: "160bf#178b73a97c0",
      result: [
        {
          id: 5000,
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
      "Fri, 09 Apr 2021 15:22:53 GMT",
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
      expires_in: 495,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:54 GMT",
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
      requestId: "a6f9#178b73a9a7b",
      result: [
        {
          id: 4999,
          firstName: "John",
          lastName: "Smith",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:48Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:54 GMT",
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
        id: 4999,
        firstName: "Brian",
        lastName: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10968#178b73a9c6e",
      result: [{ id: 4999, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:57 GMT",
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
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "3e42#178b73aa6cc",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:22:57 GMT",
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
      requestId: "a1e9#178b73aa7fb",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:57 GMT",
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
      expires_in: 491,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:58 GMT",
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
      requestId: "17e9#178b73aa9b6",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:58 GMT",
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
    input: [{ email: "brian@bleonard.com", id: 4999, firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "14c0f#178b73aaba6",
      result: [{ id: 4999, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:59 GMT",
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
      requestId: "5d5f#178b73aafc0",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:22:59 GMT",
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
      requestId: "ca8d#178b73ab116",
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
      "Fri, 09 Apr 2021 15:23:00 GMT",
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
      requestId: "3832#178b73ab1f0",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:00 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1130/leads.json", { input: [{ id: 4999 }] })
  .once()
  .reply(
    200,
    {
      requestId: "3538#178b73ab368",
      result: [{ id: 4999, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:01 GMT",
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
      requestId: "d7ef#178b73ab576",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1130/leads.json", "listId=1130&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "737e#178b73ab700",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:01 GMT",
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
      requestId: "333d#178b73ac220",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:04 GMT",
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
      expires_in: 485,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:04 GMT",
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
      requestId: "be75#178b73ac438",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
        {
          id: 5000,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:22:52Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:05 GMT",
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
      { email: "brian@bleonard.com", id: 4999, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 5000, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "324a#178b73ac599",
      result: [
        { id: 4999, status: "updated" },
        { id: 5000, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:06 GMT",
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
      requestId: "9c0a#178b73acb81",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1130/leads.json", {
    input: [{ id: 4999 }, { id: 5000 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "f658#178b73acd07",
      result: [
        { id: 4999, status: "added" },
        { id: 5000, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:07 GMT",
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
      requestId: "e44b#178b73ad060",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:08 GMT",
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
      requestId: "9aad#178b73ad1f0",
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
      "Fri, 09 Apr 2021 15:23:08 GMT",
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
      requestId: "10eee#178b73ad2bb",
      warnings: [],
      result: [
        {
          id: 1131,
          name: "(test) Churned",
          createdAt: "2021-04-09T15:23:08Z+0000",
          updatedAt: "2021-04-09T15:23:08Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1131A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1131/leads.json", { input: [{ id: 4999 }] })
  .once()
  .reply(
    200,
    {
      requestId: "11d30#178b73ad3b5",
      result: [{ id: 4999, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:09 GMT",
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
      requestId: "333#178b73ad5e5",
      warnings: [],
      result: [
        {
          id: 1131,
          name: "(test) Churned",
          createdAt: "2021-04-09T15:23:08Z+0000",
          updatedAt: "2021-04-09T15:23:08Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1131A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1130/leads.json", "listId=1130&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "26a2#178b73ad6df",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
        {
          id: 5000,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:05Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1131/leads.json", "listId=1131&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "8c6d#178b73ad94c",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:10 GMT",
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
    filterValues: "5000",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b15c#178b73adba9",
      result: [
        {
          id: 5000,
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
      "Fri, 09 Apr 2021 15:23:11 GMT",
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
      expires_in: 478,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:11 GMT",
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
      requestId: "13876#178b73add6d",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
        {
          id: 5000,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:05Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:11 GMT",
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
      { email: "brian@bleonard.com", id: 4999, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 5000, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "bf2e#178b73ade7e",
      result: [
        { id: 4999, status: "updated" },
        { id: 5000, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:13 GMT",
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
      requestId: "f3f8#178b73ae3a8",
      warnings: [],
      result: [
        {
          id: 1131,
          name: "(test) Churned",
          createdAt: "2021-04-09T15:23:08Z+0000",
          updatedAt: "2021-04-09T15:23:08Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1131A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:13 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1131/leads.json")
  .query({ id: ["4999", "5000"] })
  .once()
  .reply(
    200,
    {
      requestId: "2154#178b73ae4e9",
      result: [
        { id: 4999, status: "removed" },
        {
          id: 5000,
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
      "Fri, 09 Apr 2021 15:23:14 GMT",
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
      requestId: "10543#178b73ae86e",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:14 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1130/leads.json", {
    input: [{ id: 4999 }, { id: 5000 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "c85c#178b73af56f",
      result: [
        { id: 4999, status: "added" },
        { id: 5000, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "116",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1130/leads.json", "listId=1130&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "19f3#178b73af7bd",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
        {
          id: 5000,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:05Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:18 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1131/leads.json", "listId=1131&_method=GET")
  .once()
  .reply(200, { requestId: "2f61#178b73af8ef", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:18 GMT",
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
      expires_in: 470,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:19 GMT",
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
      requestId: "16f74#178b73afc3b",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:22:56Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:19 GMT",
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
    filterType: "email",
    filterValues: "other%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "515a#178b73afdfc",
      result: [
        {
          id: 5000,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:05Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:19 GMT",
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
        id: 4999,
        firstName: "Brian",
        lastName: "Test",
      },
      { email: "brian2@bleonard.com", id: 5000, firstName: "Evan" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1713d#178b73aff31",
      result: [
        { id: 4999, status: "updated" },
        { id: 5000, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:21 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "121",
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
      requestId: "243b#178b73b0412",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:21 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1130/leads.json")
  .query({ id: "5000" })
  .once()
  .reply(
    200,
    {
      requestId: "754b#178b73b04e4",
      result: [{ id: 5000, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:22 GMT",
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
      requestId: "c74#178b73b08b0",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:22 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1130/leads.json", { input: [{ id: 4999 }] })
  .once()
  .reply(
    200,
    {
      requestId: "1797#178b73b0ac3",
      result: [{ id: 4999, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:23 GMT",
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
      requestId: "1236c#178b73b0cac",
      warnings: [],
      result: [
        {
          id: 1131,
          name: "(test) Churned",
          createdAt: "2021-04-09T15:23:08Z+0000",
          updatedAt: "2021-04-09T15:23:08Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1131A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:23 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1131/leads.json", { input: [{ id: 4999 }] })
  .once()
  .reply(
    200,
    {
      requestId: "185df#178b73b0de5",
      result: [{ id: 4999, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:24 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "c7a0#178b73b10b8",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:23:24 GMT",
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
  .reply(200, { requestId: "ae3b#178b73b127e", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:25 GMT",
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
    filterValues: "5000",
  })
  .once()
  .reply(
    200,
    {
      requestId: "11d8#178b73b13f9",
      result: [
        {
          id: 5000,
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
      "Fri, 09 Apr 2021 15:23:25 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "322",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1130/leads.json", "listId=1130&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "f315#178b73b14d5",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T15:23:20Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:26 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1131/leads.json", "listId=1131&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "b550#178b73b16d0",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T15:23:20Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:26 GMT",
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
      expires_in: 463,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:26 GMT",
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
      requestId: "f8d#178b73b18a7",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T15:23:20Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:26 GMT",
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
  .query({ name: "%28test%29%20High%20Value" })
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "16c25#178b73b196d",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:26 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1130/leads.json")
  .query({ id: "4999" })
  .once()
  .reply(
    200,
    {
      requestId: "ad#178b73b1a68",
      result: [{ id: 4999, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:27 GMT",
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
      requestId: "11a08#178b73b1dee",
      warnings: [],
      result: [
        {
          id: 1131,
          name: "(test) Churned",
          createdAt: "2021-04-09T15:23:08Z+0000",
          updatedAt: "2021-04-09T15:23:08Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1131A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1131/leads.json")
  .query({ id: "4999" })
  .once()
  .reply(
    200,
    {
      requestId: "154c9#178b73b1ec3",
      result: [{ id: 4999, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:28 GMT",
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
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "74d3#178b73b20d5",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:23:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "324",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1130/leads.json", "listId=1130&_method=GET")
  .once()
  .reply(200, { requestId: "89f3#178b73b21eb", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:29 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1131/leads.json", "listId=1131&_method=GET")
  .once()
  .reply(200, { requestId: "127bc#178b73b23d7", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:29 GMT",
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
      expires_in: 459,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:29 GMT",
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
      requestId: "e406#178b73b25dc",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-09T15:23:20Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:30 GMT",
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
      requestId: "7c8f#178b73b26ff",
      result: [
        {
          id: 5000,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:20Z",
          createdAt: "2021-04-09T15:22:51Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:30 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", { input: [{ id: 5000 }] })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "f1ae#178b73b27db",
      result: [{ id: 5000, status: "deleted" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:33 GMT",
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
        id: 4999,
        firstName: "Brian",
        lastName: "Test",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "17811#178b73b320b",
      result: [{ id: 4999, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:34 GMT",
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
      requestId: "18020#178b73b3674",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab36.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:34 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1130/leads.json", { input: [{ id: 4999 }] })
  .once()
  .reply(
    200,
    {
      requestId: "119ff#178b73b3921",
      result: [{ id: 4999, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:35 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "10564#178b73b3ac4",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:23:35 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "325",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "17c50#178b73b3cc1", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:36 GMT",
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
  .reply(200, { requestId: "a748#178b73b3dde", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:36 GMT",
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
    filterValues: "5000",
  })
  .once()
  .reply(200, { requestId: "25fd#178b73b3edc", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:36 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1130/leads.json", "listId=1130&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "ee1e#178b73b41d3",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:23:33Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:37 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1131/leads.json", "listId=1131&_method=GET")
  .once()
  .reply(200, { requestId: "ef92#178b73b4314", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:37 GMT",
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
      expires_in: 451,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:38 GMT",
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
  .reply(200, { requestId: "6f00#178b73b46b1", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:38 GMT",
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
      requestId: "9348#178b73b47b7",
      result: [{ id: 5001, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:43 GMT",
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
      requestId: "185f4#178b73b5b0a",
      result: [
        {
          id: 5001,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:42Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:43 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "10fb8#178b73b5bf3",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "362",
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
      expires_in: 445,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:44 GMT",
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
      requestId: "ef8e#178b73b5deb",
      result: [
        {
          id: 5001,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:42Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:44 GMT",
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
        id: 5001,
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
      requestId: "1b09#178b73b5f2d",
      result: [{ id: 5001, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:46 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "14ba4#178b73b66b6",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:46 GMT",
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
      expires_in: 442,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:46 GMT",
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
      requestId: "12dff#178b73b6a57",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:47 GMT",
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
        id: 5001,
        firstName: "Maria",
        boolean_field: "other",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "153#178b73b6b97",
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
      "Fri, 09 Apr 2021 15:23:48 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "e168#178b73b6e04",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:48 GMT",
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
      expires_in: 440,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:48 GMT",
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
      requestId: "f741#178b73b701e",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:49 GMT",
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
        id: 5001,
        firstName: "Maria",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "fbbe#178b73b735c",
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
      "Fri, 09 Apr 2021 15:23:49 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "de06#178b73b74ca",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:50 GMT",
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
      expires_in: 439,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:50 GMT",
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
      requestId: "4eb7#178b73b778d",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:51 GMT",
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
        id: 5001,
        firstName: "Maria",
        integer_field: 14.1,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "171b0#178b73b7a92",
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
      "Fri, 09 Apr 2021 15:23:52 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "edb#178b73b7cdb",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:52 GMT",
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
      expires_in: 437,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:52 GMT",
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
      requestId: "c032#178b73b7f18",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:53 GMT",
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
        id: 5001,
        firstName: "Maria",
        float_field: "14c",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "eb6a#178b73b80bb",
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
      "Fri, 09 Apr 2021 15:23:53 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "fef8#178b73b81aa",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:53 GMT",
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
      expires_in: 435,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:53 GMT",
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
      requestId: "b61c#178b73b834d",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:54 GMT",
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
        id: 5001,
        firstName: "Maria",
        datetime_field: "yesterday",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "208d#178b73b8650",
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
      "Fri, 09 Apr 2021 15:23:55 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1075b#178b73b882f",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:55 GMT",
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
      expires_in: 434,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:55 GMT",
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
      requestId: "3315#178b73b89bd",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:55 GMT",
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
        id: 5001,
        firstName: "Maria",
        percent_field: "100%",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "57ea#178b73b8c23",
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
      "Fri, 09 Apr 2021 15:23:56 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "122fb#178b73b8d18",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:23:56 GMT",
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
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(200, { requestId: "8f79#178b73b8f29", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:23:57 GMT",
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
      expires_in: 432,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:57 GMT",
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
      requestId: "b1ec#178b73b9146",
      result: [
        {
          id: 4999,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:23:33Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:23:57 GMT",
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
        id: 4999,
        firstName: "Sam",
        lastName: "Test",
      },
      {
        email: "brian2@bleonard.com",
        id: 5001,
        firstName: "William",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "129ab#178b73b92c4",
      result: [
        { id: 4999, status: "updated" },
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
      "Fri, 09 Apr 2021 15:23:59 GMT",
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
      requestId: "11eb5#178b73b9b96",
      result: [{ id: 5002, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:02 GMT",
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
    filterValues: "4999",
  })
  .once()
  .reply(
    200,
    {
      requestId: "8389#178b73ba4c1",
      result: [
        {
          id: 4999,
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
      "Fri, 09 Apr 2021 15:24:02 GMT",
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
    filterValues: "5001",
  })
  .once()
  .reply(
    200,
    {
      requestId: "944e#178b73ba5ae",
      result: [
        {
          id: 5001,
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
      "Fri, 09 Apr 2021 15:24:02 GMT",
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
      requestId: "bf00#178b73ba6f9",
      result: [
        {
          id: 5002,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-04-09T15:24:02Z",
          createdAt: "2021-04-09T15:24:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:03 GMT",
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
    filterValues: "5002",
  })
  .once()
  .reply(
    200,
    {
      requestId: "fad4#178b73ba7da",
      result: [
        {
          id: 5002,
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
      "Fri, 09 Apr 2021 15:24:05 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "338",
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
      requestId: "998a#178b73bb123",
      result: [
        {
          id: 4999,
          firstName: "Sam",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-09T15:23:58Z",
          createdAt: "2021-04-09T15:22:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:06 GMT",
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
      requestId: "9c34#178b73bb37e",
      result: [
        {
          id: 5001,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-09T15:23:45Z",
          createdAt: "2021-04-09T15:23:42Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:07 GMT",
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
      requestId: "c66e#178b73bb942",
      result: [
        {
          id: 5002,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-04-09T15:24:02Z",
          createdAt: "2021-04-09T15:24:01Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:08 GMT",
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
  .reply(200, { requestId: "aaaa#178b73bbb4c", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Fri, 09 Apr 2021 15:24:08 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    input: [{ id: 4999 }, { id: 5001 }, { id: 5002 }],
  })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "bc51#178b73bbc3c",
      result: [
        { id: 4999, status: "deleted" },
        { id: 5001, status: "deleted" },
        { id: 5002, status: "deleted" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:11 GMT",
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
      requestId: "11999#178b73bca12",
      warnings: [],
      result: [
        {
          id: 1130,
          name: "(test) High Value",
          createdAt: "2021-04-09T15:23:00Z+0000",
          updatedAt: "2021-04-09T15:23:00Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1130A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1130/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "152c8#178b73bcaf3",
      warnings: [],
      result: [{ id: 1130 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:12 GMT",
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
      requestId: "c77f#178b73bcbed",
      warnings: [],
      result: [
        {
          id: 1131,
          name: "(test) Churned",
          createdAt: "2021-04-09T15:23:08Z+0000",
          updatedAt: "2021-04-09T15:23:08Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1131A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1131/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "6cf3#178b73bccba",
      warnings: [],
      result: [{ id: 1131 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Fri, 09 Apr 2021 15:24:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
