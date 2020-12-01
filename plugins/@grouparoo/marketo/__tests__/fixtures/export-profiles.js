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
      expires_in: 3431,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:19 GMT",
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
  .reply(200, { requestId: "1230c#1761f71c9d8", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:19 GMT",
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
  .reply(200, { requestId: "5387#1761f71caef", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:20 GMT",
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
  .reply(200, { requestId: "15685#1761f71ccc0", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:20 GMT",
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
  .reply(200, { requestId: "12f63#1761f71cdc7", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:20 GMT",
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
      requestId: "13699#1761f71cf89",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:21 GMT",
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
      requestId: "b892#1761f71d120",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:21 GMT",
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
  .reply(200, { requestId: "e70b#1761f71d24b", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:21 GMT",
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
      expires_in: 3428,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:22 GMT",
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
  .reply(200, { requestId: "3c9f#1761f71d46d", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:22 GMT",
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
      requestId: "f7c9#1761f71d65d",
      result: [{ id: 3517, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:24 GMT",
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
      requestId: "17f6b#1761f71dc61",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:23Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:24 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3517",
  })
  .once()
  .reply(
    200,
    {
      requestId: "13412#1761f71de62",
      result: [
        {
          id: 3517,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:24 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian2%40bleonard.com" })
  .once()
  .reply(200, { requestId: "18150#1761f71dff8", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:25 GMT",
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
      expires_in: 3425,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:25 GMT",
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
      requestId: "125d4#1761f71e284",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:23Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:25 GMT",
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
        id: 3517,
        firstName: "John",
        lastName: "Smith",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "3ad6#1761f71e38f",
      result: [{ id: 3517, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:27 GMT",
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
      requestId: "e40e#1761f71e855",
      result: [{ id: 3518, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:28 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3517",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5cf0#1761f71ecbe",
      result: [
        {
          id: 3517,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:28 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "302",
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
      requestId: "e950#1761f71edf5",
      result: [
        {
          id: 3518,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:27Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:28 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3518",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b3ef#1761f71ef2c",
      result: [
        {
          id: 3518,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:29 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "300",
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
      expires_in: 3421,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:29 GMT",
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
      requestId: "fa77#1761f71f19b",
      result: [
        {
          id: 3517,
          firstName: "John",
          lastName: "Smith",
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:26Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:29 GMT",
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
        id: 3517,
        firstName: "Brian",
        lastName: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "36dd#1761f71f29a",
      result: [{ id: 3517, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:31 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3517",
  })
  .once()
  .reply(
    200,
    {
      requestId: "bc2d#1761f71fa4a",
      result: [
        {
          id: 3517,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:32 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "300",
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
      requestId: "62bf#1761f71fb6e",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:32 GMT",
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
      expires_in: 3418,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:32 GMT",
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
      requestId: "fb8e#1761f71fd7d",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:32 GMT",
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
    input: [{ email: "brian@bleonard.com", id: 3517, firstName: "Brian" }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "a083#1761f71febd",
      result: [{ id: 3517, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:34 GMT",
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
      requestId: "c8da#1761f720723",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:35 GMT",
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
      requestId: "15ce8#1761f720856",
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
      "Tue, 01 Dec 2020 17:55:35 GMT",
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
      requestId: "7c98#1761f72097d",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:35Z+0000",
          updatedAt: "2020-12-01T17:55:35Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:36 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1094/leads.json", { input: [{ id: 3517 }] })
  .once()
  .reply(
    200,
    {
      requestId: "8adb#1761f720b0d",
      result: [{ id: 3517, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:36 GMT",
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
      requestId: "17326#1761f720d85",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:36 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1094/leads.json", "listId=1094&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "a74b#1761f720e8e",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:37 GMT",
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
      requestId: "5afa#1761f721963",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:40 GMT",
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
      expires_in: 3410,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:40 GMT",
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
      requestId: "bb7a#1761f721b9d",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3518,
          firstName: "Andy",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:27Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:40 GMT",
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
      { email: "brian@bleonard.com", id: 3517, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 3518, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "10fbc#1761f721ca0",
      result: [
        { id: 3517, status: "updated" },
        { id: 3518, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:42 GMT",
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
      requestId: "f2b9#1761f7222cc",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:42 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1094/leads.json", {
    input: [{ id: 3517 }, { id: 3518 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "184c2#1761f7223d8",
      result: [
        { id: 3517, status: "added" },
        { id: 3518, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:43 GMT",
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
      requestId: "2078#1761f7226b7",
      warnings: ["No assets found for the given search criteria."],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:43 GMT",
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
      requestId: "17bdb#1761f7227c2",
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
      "Tue, 01 Dec 2020 17:55:43 GMT",
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
      requestId: "a1d6#1761f7228ff",
      warnings: [],
      result: [
        {
          id: 1095,
          name: "(test) Churned",
          createdAt: "2020-12-01T17:55:44Z+0000",
          updatedAt: "2020-12-01T17:55:44Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1095A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:44 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1095/leads.json", { input: [{ id: 3517 }] })
  .once()
  .reply(
    200,
    {
      requestId: "10d5d#1761f722a4c",
      result: [{ id: 3517, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:45 GMT",
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
      requestId: "115b3#1761f722e16",
      warnings: [],
      result: [
        {
          id: 1095,
          name: "(test) Churned",
          createdAt: "2020-12-01T17:55:44Z+0000",
          updatedAt: "2020-12-01T17:55:44Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1095A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:45 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1094/leads.json", "listId=1094&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "7753#1761f722f1f",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3518,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:40Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:45 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1095/leads.json", "listId=1095&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "1bbe#1761f723055",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:45 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3518",
  })
  .once()
  .reply(
    200,
    {
      requestId: "b4ee#1761f7231a2",
      result: [
        {
          id: 3518,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:46 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
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
      expires_in: 3404,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:46 GMT",
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
      requestId: "11c4#1761f7233d8",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3518,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:40Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:46 GMT",
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
      { email: "brian@bleonard.com", id: 3517, firstName: "Brian" },
      { email: "brian2@bleonard.com", id: 3518, firstName: "Sally" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "e473#1761f7234ed",
      result: [
        { id: 3517, status: "updated" },
        { id: 3518, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:47 GMT",
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
      requestId: "14b0f#1761f723921",
      warnings: [],
      result: [
        {
          id: 1095,
          name: "(test) Churned",
          createdAt: "2020-12-01T17:55:44Z+0000",
          updatedAt: "2020-12-01T17:55:44Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab29.marketo.com/#ST1095A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:48 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1095/leads.json")
  .query({ id: ["3517", "3518"] })
  .once()
  .reply(
    200,
    {
      requestId: "af24#1761f723a32",
      result: [
        { id: 3517, status: "removed" },
        {
          id: 3518,
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
      "Tue, 01 Dec 2020 17:55:48 GMT",
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
      requestId: "10933#1761f723cd3",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1094/leads.json", {
    input: [{ id: 3517 }, { id: 3518 }],
  })
  .once()
  .reply(
    200,
    {
      requestId: "e294#1761f723e09",
      result: [
        { id: 3517, status: "added" },
        { id: 3518, status: "added" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:49 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "116",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1094/leads.json", "listId=1094&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "ef20#1761f7240bd",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3518,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:40Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:50 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "353",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1095/leads.json", "listId=1095&_method=GET")
  .once()
  .reply(200, { requestId: "8779#1761f7241cd", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:50 GMT",
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
      expires_in: 3400,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:50 GMT",
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
      "other%40bleonard.com%2Cbrian%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "564f#1761f7243dd",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: null,
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:30Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3518,
          firstName: "Sally",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:40Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:50 GMT",
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
      {
        email: "other@bleonard.com",
        id: 3517,
        firstName: "Brian",
        lastName: "Test",
      },
      { email: "brian2@bleonard.com", id: 3518, firstName: "Evan" },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1580f#1761f724533",
      result: [
        { id: 3517, status: "updated" },
        { id: 3518, status: "updated" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:51 GMT",
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
      requestId: "3ea0#1761f7248fd",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:52 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1094/leads.json")
  .query({ id: "3518" })
  .once()
  .reply(
    200,
    {
      requestId: "ebfc#1761f724a20",
      result: [{ id: 3518, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:53 GMT",
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
      requestId: "d385#1761f724df3",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:53 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1094/leads.json", { input: [{ id: 3517 }] })
  .once()
  .reply(
    200,
    {
      requestId: "170ec#1761f724f02",
      result: [{ id: 3517, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:54 GMT",
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
      requestId: "13772#1761f7251c9",
      warnings: [],
      result: [
        {
          id: 1095,
          name: "(test) Churned",
          createdAt: "2020-12-01T17:55:44Z+0000",
          updatedAt: "2020-12-01T17:55:44Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1095A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:54 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1095/leads.json", { input: [{ id: 3517 }] })
  .once()
  .reply(
    200,
    {
      requestId: "868a#1761f7252e9",
      result: [{ id: 3517, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:55 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3517",
  })
  .once()
  .reply(
    200,
    {
      requestId: "89de#1761f7256e5",
      result: [
        {
          id: 3517,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:55 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "302",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian%40bleonard.com" })
  .once()
  .reply(200, { requestId: "5de1#1761f7257eb", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:55:56 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3518",
  })
  .once()
  .reply(
    200,
    {
      requestId: "137c7#1761f7258f6",
      result: [
        {
          id: 3518,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1094/leads.json", "listId=1094&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "4d2e#1761f725a00",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2020-12-01T17:55:51Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:56 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "207",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1095/leads.json", "listId=1095&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "448c#1761f725b18",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2020-12-01T17:55:51Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:56 GMT",
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
      expires_in: 3393,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:57 GMT",
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
      "brian%40bleonard.com%2Cother%40bleonard.com%2Cbrian2%40bleonard.com",
  })
  .once()
  .reply(
    200,
    {
      requestId: "e312#1761f725d30",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: "Test",
          email: "other@bleonard.com",
          updatedAt: "2020-12-01T17:55:51Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3518,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:55:51Z",
          createdAt: "2020-12-01T17:55:28Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:57 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "354",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", { input: [{ id: 3518 }] })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "ae7f#1761f725e6b",
      result: [{ id: 3518, status: "deleted" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:57 GMT",
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
        id: 3517,
        firstName: "Brian",
        lastName: "Test",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "8af#1761f726000",
      result: [{ id: 3517, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:58 GMT",
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
      requestId: "11fe9#1761f726389",
      warnings: [],
      result: [
        {
          id: 1095,
          name: "(test) Churned",
          createdAt: "2020-12-01T17:55:44Z+0000",
          updatedAt: "2020-12-01T17:55:44Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab15.marketo.com/#ST1095A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:55:59 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .delete("/rest/v1/lists/1095/leads.json")
  .query({ id: "3517" })
  .once()
  .reply(
    200,
    {
      requestId: "c33e#1761f7264a3",
      result: [{ id: 3517, status: "removed" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:00 GMT",
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
      requestId: "5956#1761f7268d5",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab38.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:00 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/lists/1094/leads.json", { input: [{ id: 3517 }] })
  .once()
  .reply(
    200,
    {
      requestId: "1361#1761f7269db",
      result: [{ id: 3517, status: "added" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:00 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3517",
  })
  .once()
  .reply(
    200,
    {
      requestId: "14873#1761f726b0f",
      result: [
        {
          id: 3517,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:00 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "303",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "other%40bleonard.com" })
  .once()
  .reply(200, { requestId: "c732#1761f726c13", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:01 GMT",
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
  .reply(200, { requestId: "14a08#1761f726d33", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:01 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3518",
  })
  .once()
  .reply(200, { requestId: "4c5#1761f726e32", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:01 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "58",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1094/leads.json", "listId=1094&_method=GET")
  .once()
  .reply(
    200,
    {
      requestId: "13a0e#1761f726f33",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:58Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:02 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "208",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/list/1095/leads.json", "listId=1095&_method=GET")
  .once()
  .reply(200, { requestId: "7904#1761f72704f", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:02 GMT",
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
      expires_in: 3388,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:02 GMT",
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
  .reply(200, { requestId: "2b37#1761f727259", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:02 GMT",
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
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "41ea#1761f72735f",
      result: [{ id: 3519, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:03 GMT",
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
      requestId: "16e8e#1761f7277c5",
      result: [
        {
          id: 3519,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:03Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:04 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "5a77#1761f7278d6",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:04 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "338",
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
      expires_in: 3386,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:04 GMT",
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
      requestId: "bf01#1761f727ae6",
      result: [
        {
          id: 3519,
          firstName: "Evan",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:03Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:04 GMT",
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
        id: 3519,
        firstName: "Maria",
        textarea_field: null,
        boolean_field: null,
        email_field: null,
        integer_field: null,
        float_field: null,
        datetime_field: null,
        score_field: null,
        percent_field: null,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "a69d#1761f727be9",
      result: [{ id: 3519, status: "updated" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:06 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "940c#1761f728129",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:06 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
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
      expires_in: 3384,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:06 GMT",
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
      requestId: "e088#1761f728334",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:07 GMT",
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
        id: 3519,
        firstName: "Maria",
        boolean_field: "other",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "c47a#1761f728446",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message: "Invalid value for field 'boolean_field'",
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
      "Tue, 01 Dec 2020 17:56:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "159",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "8494#1761f728549",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:07 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
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
      expires_in: 3382,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:07 GMT",
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
      requestId: "4c23#1761f728753",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:08 GMT",
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
        id: 3519,
        firstName: "Maria",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "6ae8#1761f728864",
      result: [
        {
          status: "skipped",
          reasons: [
            { code: "1003", message: "Invalid value for field 'email_field'" },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "157",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "12598#1761f728967",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:08 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "302",
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
      expires_in: 3381,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:08 GMT",
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
      requestId: "48c7#1761f728b74",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:09 GMT",
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
        id: 3519,
        firstName: "Maria",
        integer_field: 14.1,
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "1758e#1761f728c77",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message: "Invalid value for field 'integer_field'",
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
      "Tue, 01 Dec 2020 17:56:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "160",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "138d7#1761f728d8b",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:09 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "302",
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
      expires_in: 3380,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:10 GMT",
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
      requestId: "92ed#1761f728f9f",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:10 GMT",
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
        id: 3519,
        firstName: "Maria",
        float_field: "14c",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "4fe6#1761f7290a3",
      result: [
        {
          status: "skipped",
          reasons: [
            { code: "1003", message: "Invalid value for field 'float_field'" },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "157",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "13135#1761f7291ab",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:10 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "302",
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
      expires_in: 3379,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:11 GMT",
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
      requestId: "d564#1761f7293b8",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:11 GMT",
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
        id: 3519,
        firstName: "Maria",
        datetime_field: "yesterday",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "5c92#1761f7294c0",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message: "Invalid value for field 'datetime_field'",
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
      "Tue, 01 Dec 2020 17:56:11 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "160",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "17a23#1761f7295ca",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:11 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "302",
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
      expires_in: 3378,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:12 GMT",
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
      requestId: "7e4f#1761f7297cd",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:12 GMT",
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
        id: 3519,
        firstName: "Maria",
        percent_field: "100%",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "21b5#1761f7298dc",
      result: [
        {
          status: "skipped",
          reasons: [
            {
              code: "1003",
              message: "Invalid value for field 'percent_field'",
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
      "Tue, 01 Dec 2020 17:56:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "159",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "3b12#1761f7299ec",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:12 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({ filterType: "email", filterValues: "brian3%40bleonard.com" })
  .once()
  .reply(200, { requestId: "d243#1761f729afa", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:13 GMT",
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
      expires_in: 3377,
      scope: "my-user@grouparoo.com",
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:13 GMT",
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
      requestId: "4359#1761f729d03",
      result: [
        {
          id: 3517,
          firstName: "Brian",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:55:58Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:13 GMT",
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
        id: 3517,
        firstName: "Sam",
        lastName: "Test",
      },
      {
        email: "brian2@bleonard.com",
        id: 3519,
        firstName: "William",
        email_field: "bademail",
      },
    ],
  })
  .once()
  .reply(
    200,
    {
      requestId: "d16f#1761f729e11",
      result: [
        { id: 3517, status: "updated" },
        {
          status: "skipped",
          reasons: [
            { code: "1003", message: "Invalid value for field 'email_field'" },
          ],
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:15 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "188",
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
      requestId: "f215#1761f72a565",
      result: [{ id: 3520, status: "created" }],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:16 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3517",
  })
  .once()
  .reply(
    200,
    {
      requestId: "10a4e#1761f72a801",
      result: [
        {
          id: 3517,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:16 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .get("/rest/v1/leads.json")
  .query({
    fields:
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3519",
  })
  .once()
  .reply(
    200,
    {
      requestId: "47f2#1761f72a909",
      result: [
        {
          id: 3519,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:16 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "301",
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
      requestId: "b974#1761f72aa06",
      result: [
        {
          id: 3520,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2020-12-01T17:56:16Z",
          createdAt: "2020-12-01T17:56:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:17 GMT",
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
      "email%2CfirstName%2ClastName%2Cid%2Ctextarea_field%2Cboolean_field%2Cemail_field%2Cinteger_field%2Cfloat_field%2Cdatetime_field%2Cscore_field%2Cpercent_field",
    filterType: "id",
    filterValues: "3520",
  })
  .once()
  .reply(
    200,
    {
      requestId: "ccbe#1761f72abfe",
      result: [
        {
          id: 3520,
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
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:17 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Content-Length",
      "316",
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
      requestId: "b9c5#1761f72ad14",
      result: [
        {
          id: 3517,
          firstName: "Sam",
          lastName: "Test",
          email: "brian@bleonard.com",
          updatedAt: "2020-12-01T17:56:13Z",
          createdAt: "2020-12-01T17:55:23Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:17 GMT",
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
      requestId: "8909#1761f72ae71",
      result: [
        {
          id: 3519,
          firstName: "Maria",
          lastName: null,
          email: "brian2@bleonard.com",
          updatedAt: "2020-12-01T17:56:05Z",
          createdAt: "2020-12-01T17:56:03Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:18 GMT",
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
      requestId: "4e0f#1761f72af77",
      result: [
        {
          id: 3520,
          firstName: "Liz",
          lastName: null,
          email: "brian3@bleonard.com",
          updatedAt: "2020-12-01T17:56:16Z",
          createdAt: "2020-12-01T17:56:16Z",
        },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:18 GMT",
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
  .reply(200, { requestId: "8e53#1761f72b07f", result: [], success: true }, [
    "Server",
    "nginx",
    "Date",
    "Tue, 01 Dec 2020 17:56:18 GMT",
    "Content-Type",
    "application/json;charset=UTF-8",
    "Content-Length",
    "59",
    "Connection",
    "close",
  ]);
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/v1/leads.json", {
    input: [{ id: 3517 }, { id: 3519 }, { id: 3520 }],
  })
  .query({ _method: "DELETE" })
  .once()
  .reply(
    200,
    {
      requestId: "1246f#1761f72b19d",
      result: [
        { id: 3517, status: "deleted" },
        { id: 3519, status: "deleted" },
        { id: 3520, status: "deleted" },
      ],
      success: true,
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:19 GMT",
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
      requestId: "7c7d#1761f72b34c",
      warnings: [],
      result: [
        {
          id: 1094,
          name: "(test) High Value",
          createdAt: "2020-12-01T17:55:36Z+0000",
          updatedAt: "2020-12-01T17:55:36Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab28.marketo.com/#ST1094A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:19 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1094/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "17760#1761f72b460",
      warnings: [],
      result: [{ id: 1094 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:19 GMT",
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
      requestId: "10769#1761f72b606",
      warnings: [],
      result: [
        {
          id: 1095,
          name: "(test) Churned",
          createdAt: "2020-12-01T17:55:44Z+0000",
          updatedAt: "2020-12-01T17:55:44Z+0000",
          folder: { id: 12, type: "Folder" },
          computedUrl: "https://app-ab38.marketo.com/#ST1095A1",
          workspace: "Default",
        },
      ],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:20 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
nock("https://123-abc-456.mktorest.com:443", { encodedQueryParams: true })
  .post("/rest/asset/v1/staticList/1095/delete.json")
  .once()
  .reply(
    200,
    {
      success: true,
      errors: [],
      requestId: "a1c3#1761f72b711",
      warnings: [],
      result: [{ id: 1095 }],
    },
    [
      "Server",
      "nginx",
      "Date",
      "Tue, 01 Dec 2020 17:56:20 GMT",
      "Content-Type",
      "application/json;charset=UTF-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
    ]
  );
