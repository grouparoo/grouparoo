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
      expires_in: 2918,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:28 GMT",
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
  .reply(200, { requestId: "1568#178b202751a", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:28 GMT",
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
  .reply(200, { requestId: "156a9#178b20275f4", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:29 GMT",
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
  .reply(200, { requestId: "240c#178b2027753", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:29 GMT",
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
  .reply(200, { requestId: "2263#178b2027885", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:29 GMT",
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
      requestId: "888#178b2027952",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:29 GMT",
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
      requestId: "e11#178b2027a3a",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:30 GMT",
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
  .reply(200, { requestId: "84e4#178b2027aff", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:30 GMT",
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
      expires_in: 2916,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:30 GMT",
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
  .reply(200, { requestId: "10298#178b2027d12", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:30 GMT",
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
      requestId: "48d0#178b2027de7",
      result: [{ id: 4963, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:32 GMT",
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
      requestId: "14b54#178b2028413",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:32Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:32 GMT",
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
    filterValues: "4963",
  })
  .once()
  .reply(
    200,
    {
      requestId: "1523d#178b2028508",
      result: [
        {
          id: 4963,
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
      "Thu, 08 Apr 2021 15:03:32 GMT",
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
  .reply(200, { requestId: "1e82#178b202868c", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:33 GMT",
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
      expires_in: 2913,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:33 GMT",
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
      requestId: "10e89#178b202887f",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:32Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:33 GMT",
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
        id: 4963,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "d49a#178b2028954",
      result: [{ id: 4963, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:34 GMT",
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
      requestId: "7d43#178b2028d3c",
      result: [{ id: 4964, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:35 GMT",
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
    filterValues: "4963",
  })
  .once()
  .reply(
    200,
    {
      requestId: "3bfc#178b202906d",
      result: [
        {
          id: 4963,
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
      "Thu, 08 Apr 2021 15:03:35 GMT",
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
      requestId: "1283f#178b202913f",
      result: [
        {
          id: 4964,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:35Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:36 GMT",
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
    filterValues: "4964",
  })
  .once()
  .reply(
    200,
    {
      requestId: "3f43#178b2029245",
      result: [
        {
          id: 4964,
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
      "Thu, 08 Apr 2021 15:03:36 GMT",
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
      expires_in: 2910,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:36 GMT",
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
      requestId: "c1c8#178b202940a",
      result: [
        {
          id: 4963,
          firstName: "John",
          lastName: "Smith",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:34Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:36 GMT",
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
        id: 4963,
        firstName: "Brian",
        lastName: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "d4d3#178b202951c",
      result: [{ id: 4963, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:37 GMT",
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
    filterValues: "4963",
  })
  .once()
  .reply(
    200,
    {
      requestId: "165b6#178b2029881",
      result: [
        {
          id: 4963,
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
      "Thu, 08 Apr 2021 15:03:37 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
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
      requestId: "f3aa#178b20299b8",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:38 GMT",
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
      expires_in: 2908,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:38 GMT",
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
      requestId: "36b3#178b2029b3b",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:38 GMT",
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
    input: [{ email: "brian@bleonard.com", id: 4963, firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "ddce#178b2029ce0",
      result: [{ id: 4963, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:39 GMT",
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
      requestId: "310f#178b202a1ac",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:40 GMT",
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
      requestId: "b9fc#178b202a280",
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
      "Thu, 08 Apr 2021 15:03:40 GMT",
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
      requestId: "11bf6#178b202a34b",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab10.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:40 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1112/leads.json", { input: [{ id: 4963 }] })
  .once()
  .reply(
    200,
    {
      requestId: "10515#178b202a43d",
      result: [{ id: 4963, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:41 GMT",
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
      requestId: "e913#178b202a6b6",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:41 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1112/leads.json", "listId=1112&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "14112#178b202a77a",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:41 GMT",
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
      requestId: "1128d#178b202b22f",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:44 GMT",
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
      expires_in: 2902,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:44 GMT",
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
      requestId: "1716a#178b202b3cb",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
        {
          id: 4964,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:35Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:44 GMT",
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
      { email: "brian@bleonard.com", id: 4963, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 4964, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "72c1#178b202b498",
      result: [
        { id: 4963, status: "updated" },
        { id: 4964, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:45 GMT",
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
      requestId: "baa6#178b202b8fa",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab10.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1112/leads.json", {
    input: [{ id: 4963 }, { id: 4964 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "495b#178b202bb91",
      result: [
        { id: 4963, status: "added" },
        { id: 4964, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:47 GMT",
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
      requestId: "e40a#178b202bdf8",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:47 GMT",
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
      requestId: "15c56#178b202beb8",
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
      "Thu, 08 Apr 2021 15:03:47 GMT",
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
      requestId: "177b7#178b202bf80",
      warnings: [],
      result: [
        {
          id: 1113,
          name: "(test) Churned",
          createdAt: "2021-04-08T15:03:47Z+0000",
          updatedAt: "2021-04-08T15:03:47Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1113A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:47 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1113/leads.json", { input: [{ id: 4963 }] })
  .once()
  .reply(
    200,
    {
      requestId: "1046b#178b202c0b3",
      result: [{ id: 4963, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:48 GMT",
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
      requestId: "1161e#178b202c344",
      warnings: [],
      result: [
        {
          id: 1113,
          name: "(test) Churned",
          createdAt: "2021-04-08T15:03:47Z+0000",
          updatedAt: "2021-04-08T15:03:47Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab38.marketo.com/#ST1113A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:48 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1112/leads.json", "listId=1112&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "3d10#178b202c488",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
        {
          id: 4964,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:45Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1113/leads.json", "listId=1113&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "ff78#178b202c572",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:49 GMT",
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
    filterValues: "4964",
  })
  .once()
  .reply(
    200,
    {
      requestId: "bca3#178b202c640",
      result: [
        {
          id: 4964,
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
      "Thu, 08 Apr 2021 15:03:49 GMT",
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
      expires_in: 2897,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:49 GMT",
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
      requestId: "869e#178b202c7bc",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
        {
          id: 4964,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:45Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:50 GMT",
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
      { email: "brian@bleonard.com", id: 4963, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 4964, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "886c#178b202ca0a",
      result: [
        { id: 4963, status: "updated" },
        { id: 4964, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:51 GMT",
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
      requestId: "13442#178b202cd68",
      warnings: [],
      result: [
        {
          id: 1113,
          name: "(test) Churned",
          createdAt: "2021-04-08T15:03:47Z+0000",
          updatedAt: "2021-04-08T15:03:47Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab38.marketo.com/#ST1113A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:51 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1113/leads.json")
  .query({ id: ["4963", "4964"] })
  .once()
  .reply(
    200,
    {
      requestId: "6360#178b202ce3e",
      result: [
        { id: 4963, status: "removed" },
        {
          id: 4964,
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
      "Thu, 08 Apr 2021 15:03:51 GMT",
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
      requestId: "ca9f#178b202d072",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:52 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1112/leads.json", {
    input: [{ id: 4963 }, { id: 4964 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10fb9#178b202d146",
      result: [
        { id: 4963, status: "added" },
        { id: 4964, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:52 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "117",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1112/leads.json", "listId=1112&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "3944#178b202d459",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
        {
          id: 4964,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:45Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:53 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1113/leads.json", "listId=1113&_method=GET")
  .once()
  .reply(200, { requestId: "13910#178b202d529", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:53 GMT",
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
      expires_in: 2893,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:53 GMT",
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
      requestId: "d3a8#178b202d6b3",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:03:37Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:53 GMT",
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
      requestId: "190f#178b202d76e",
      result: [
        {
          id: 4964,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:45Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:54 GMT",
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
        id: 4963,
        firstName: "Brian",
        lastName: "Test",
      },
      { email: "brian2@bleonard.com", id: 4964, firstName: "Evan" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "9a74#178b202d88d",
      result: [
        { id: 4963, status: "updated" },
        { id: 4964, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:55 GMT",
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
      requestId: "13d7c#178b202ded5",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab21.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:55 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1112/leads.json")
  .query({ id: "4964" })
  .once()
  .reply(
    200,
    {
      requestId: "433e#178b202dfa0",
      result: [{ id: 4964, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:56 GMT",
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
      requestId: "2ffd#178b202e302",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab38.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1112/leads.json", { input: [{ id: 4963 }] })
  .once()
  .reply(
    200,
    {
      requestId: "105b2#178b202e3c6",
      result: [{ id: 4963, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:57 GMT",
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
      requestId: "11283#178b202e5e2",
      warnings: [],
      result: [
        {
          id: 1113,
          name: "(test) Churned",
          createdAt: "2021-04-08T15:03:47Z+0000",
          updatedAt: "2021-04-08T15:03:47Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab43.marketo.com/#ST1113A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:57 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1113/leads.json", { input: [{ id: 4963 }] })
  .once()
  .reply(
    200,
    {
      requestId: "1721d#178b202e6a7",
      result: [{ id: 4963, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:03:58 GMT",
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
    filterValues: "4963",
  })
  .once()
  .reply(
    200,
    {
      requestId: "491#178b202ea6f",
      result: [
        {
          id: 4963,
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
      "Thu, 08 Apr 2021 15:03:58 GMT",
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
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "ff01#178b202eb5d", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:03:59 GMT",
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
    filterValues: "4964",
  })
  .once()
  .reply(
    200,
    {
      requestId: "11998#178b202ec59",
      result: [
        {
          id: 4964,
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
      "Thu, 08 Apr 2021 15:03:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "323",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1112/leads.json", "listId=1112&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "b983#178b202f126",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-08T15:03:54Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:00 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1113/leads.json", "listId=1113&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "11e1a#178b202f2a0",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-08T15:03:54Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:01 GMT",
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
      expires_in: 2886,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:01 GMT",
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
      requestId: "34dd#178b202f4ec",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2021-04-08T15:03:54Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:01 GMT",
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
      requestId: "51bc#178b202f613",
      result: [
        {
          id: 4964,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:03:54Z",
          createdAt: "2021-04-08T15:03:35Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:01 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "205",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", { input: [{ id: 4964 }] })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "d69c#178b202f70e",
      result: [{ id: 4964, status: "deleted" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:03 GMT",
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
        id: 4963,
        firstName: "Brian",
        lastName: "Test",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "730b#178b202feda",
      result: [{ id: 4963, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:04 GMT",
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
      requestId: "a41d#178b20301aa",
      warnings: [],
      result: [
        {
          id: 1113,
          name: "(test) Churned",
          createdAt: "2021-04-08T15:03:47Z+0000",
          updatedAt: "2021-04-08T15:03:47Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1113A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:04 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1113/leads.json")
  .query({ id: "4963" })
  .once()
  .reply(
    200,
    {
      requestId: "ab8d#178b20302ac",
      result: [{ id: 4963, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:05 GMT",
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
      requestId: "14a63#178b20303b3",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab04.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:05 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1112/leads.json", { input: [{ id: 4963 }] })
  .once()
  .reply(
    200,
    {
      requestId: "11bb6#178b203047a",
      result: [{ id: 4963, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:05 GMT",
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
    filterValues: "4963",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b441#178b2030737",
      result: [
        {
          id: 4963,
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
      "Thu, 08 Apr 2021 15:04:06 GMT",
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
  .reply(200, { requestId: "1556b#178b203081b", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:06 GMT",
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
  .reply(200, { requestId: "14fe3#178b2030998", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:06 GMT",
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
    filterValues: "4964",
  })
  .once()
  .reply(200, { requestId: "314a#178b2030ad7", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:07 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1112/leads.json", "listId=1112&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "1575#178b2030ba6",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:04:04Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1113/leads.json", "listId=1113&_method=GET")
  .once()
  .reply(200, { requestId: "16d25#178b2030ca7", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:08 GMT",
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
      expires_in: 2879,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:08 GMT",
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
  .reply(200, { requestId: "6f1d#178b2030ff9", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:08 GMT",
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
      requestId: "156a5#178b20310bd",
      result: [{ id: 4965, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:10 GMT",
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
      requestId: "13497#178b20318c7",
      result: [
        {
          id: 4965,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:10Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:10 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f9c4#178b2031992",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:10 GMT",
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
      expires_in: 2876,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:11 GMT",
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
      requestId: "5c42#178b2031b60",
      result: [
        {
          id: 4965,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:10Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:11 GMT",
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
        id: 4965,
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
      requestId: "140fd#178b2031c37",
      result: [{ id: 4965, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:12 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "16bb5#178b2032012",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:12 GMT",
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
      expires_in: 2874,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:12 GMT",
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
      requestId: "a6a0#178b20321a4",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:12 GMT",
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
        id: 4965,
        firstName: "Maria",
        boolean_field: "other",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10f0c#178b203227b",
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
      "Thu, 08 Apr 2021 15:04:13 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "623e#178b2032414",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:13 GMT",
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
      expires_in: 2873,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:13 GMT",
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
      requestId: "d67e#178b20325b6",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:14 GMT",
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
        id: 4965,
        firstName: "Maria",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "12fa8#178b2032669",
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
      "Thu, 08 Apr 2021 15:04:14 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "14206#178b203279d",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:14 GMT",
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
      expires_in: 2872,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:14 GMT",
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
      requestId: "13b4b#178b2032936",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:14 GMT",
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
        id: 4965,
        firstName: "Maria",
        integer_field: 14.1,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "272b#178b2032a82",
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
      "Thu, 08 Apr 2021 15:04:15 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "978d#178b2032b6e",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:15 GMT",
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
      expires_in: 2871,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:15 GMT",
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
      requestId: "172b2#178b2032cee",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:15 GMT",
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
        id: 4965,
        firstName: "Maria",
        float_field: "14c",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "ed03#178b2032e06",
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
      "Thu, 08 Apr 2021 15:04:16 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "154#178b2032ef8",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:16 GMT",
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
      expires_in: 2870,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:16 GMT",
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
      requestId: "8489#178b20330f4",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:16 GMT",
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
        id: 4965,
        firstName: "Maria",
        datetime_field: "yesterday",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "6843#178b20331c0",
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
      "Thu, 08 Apr 2021 15:04:17 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "ef5a#178b20332d3",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:17 GMT",
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
      expires_in: 2869,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:17 GMT",
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
      requestId: "78aa#178b2033481",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:17 GMT",
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
        id: 4965,
        firstName: "Maria",
        percent_field: "100%",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "12feb#178b203363f",
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
      "Thu, 08 Apr 2021 15:04:18 GMT",
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
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "10afc#178b2033741",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:18 GMT",
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
  .reply(200, { requestId: "10886#178b20338d9", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:18 GMT",
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
      expires_in: 2868,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:19 GMT",
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
      requestId: "f8e4#178b2033ab3",
      result: [
        {
          id: 4963,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:04:04Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:19 GMT",
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
        id: 4963,
        firstName: "Sam",
        lastName: "Test",
      },
      {
        email: "brian2@bleonard.com",
        id: 4965,
        firstName: "William",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10036#178b2033c30",
      result: [
        { id: 4963, status: "updated" },
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
      "Thu, 08 Apr 2021 15:04:20 GMT",
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
      requestId: "7fe9#178b2033fdb",
      result: [{ id: 4966, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:21 GMT",
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
    filterValues: "4963",
  })
  .once()
  .reply(
    200,
    {
      requestId: "13ad9#178b203429c",
      result: [
        {
          id: 4963,
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
      "Thu, 08 Apr 2021 15:04:21 GMT",
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
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field%2Ccurrency_field",
    filterType: "id",
    filterValues: "4965",
  })
  .once()
  .reply(
    200,
    {
      requestId: "106d8#178b203436b",
      result: [
        {
          id: 4965,
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
      "Thu, 08 Apr 2021 15:04:21 GMT",
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
  .reply(
    200,
    {
      requestId: "13b08#178b2034463",
      result: [
        {
          id: 4966,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-04-08T15:04:20Z",
          createdAt: "2021-04-08T15:04:20Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:21 GMT",
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
    filterValues: "4966",
  })
  .once()
  .reply(
    200,
    {
      requestId: "f4c#178b2034555",
      result: [
        {
          id: 4966,
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
      "Thu, 08 Apr 2021 15:04:22 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "337",
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
      requestId: "a22b#178b2034616",
      result: [
        {
          id: 4963,
          firstName: "Sam",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2021-04-08T15:04:19Z",
          createdAt: "2021-04-08T15:03:31Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:22 GMT",
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
      requestId: "d525#178b2034977",
      result: [
        {
          id: 4965,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2021-04-08T15:04:11Z",
          createdAt: "2021-04-08T15:04:10Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:23 GMT",
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
      requestId: "b07f#178b2034ad9",
      result: [
        {
          id: 4966,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2021-04-08T15:04:20Z",
          createdAt: "2021-04-08T15:04:20Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:23 GMT",
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
  .reply(200, { requestId: "d9bb#178b2034ba2", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Thu, 08 Apr 2021 15:04:23 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    input: [{ id: 4963 }, { id: 4965 }, { id: 4966 }],
  })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "11640#178b2034c6d",
      result: [
        { id: 4963, status: "deleted" },
        { id: 4965, status: "deleted" },
        { id: 4966, status: "deleted" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:24 GMT",
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
      requestId: "15fb0#178b2034f3e",
      warnings: [],
      result: [
        {
          id: 1112,
          name: "(test) High Value",
          createdAt: "2021-04-08T15:03:40Z+0000",
          updatedAt: "2021-04-08T15:03:40Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab10.marketo.com/#ST1112A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:24 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1112/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "b3dd#178b2034fff",
      warnings: [],
      result: [{ id: 1112 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:24 GMT",
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
      requestId: "d933#178b203510a",
      warnings: [],
      result: [
        {
          id: 1113,
          name: "(test) Churned",
          createdAt: "2021-04-08T15:03:47Z+0000",
          updatedAt: "2021-04-08T15:03:47Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab43.marketo.com/#ST1113A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:25 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1113/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "1363c#178b20351ce",
      warnings: [],
      result: [{ id: 1113 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Thu, 08 Apr 2021 15:04:25 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
