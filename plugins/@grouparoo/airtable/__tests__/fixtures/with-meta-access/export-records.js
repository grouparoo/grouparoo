const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1qWVDYz7LQ2SMH; path=/; expires=Fri, 30 Dec 2022 01:12:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9pwuvpIyVXNJT0; path=/; expires=Fri, 30 Dec 2022 01:12:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcSp4IqH97gS2RD; path=/; expires=Fri, 30 Dec 2022 01:12:04 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTIvoWDmySZROLv; path=/; expires=Fri, 30 Dec 2022 01:12:04 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLcNQbglVpQtSUN; path=/; expires=Fri, 30 Dec 2022 01:12:05 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwDnH0XvkinsUZFA; path=/; expires=Fri, 30 Dec 2022 01:12:05 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Jane", f_singleLineText: "here" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d9d44aa50261460a94240283014217449ae8d856347175b8146f9efd86907ba7561f4f3e777ef9e47465869aa7b96bc8f4cd42cf1425d491ec69bd47c3ddc73624bb617283d33b21c5a74d016147afd13acd1b96d4b24968471eca55ea883c44c282cf0db38b8413ac1a535462b6f23a144e9ae9e3a548bd797cc5d5bf242634cd727ebf5300cc181b4ed80b40e2addb2c93b548460b04e7fbcc91cd7f6f4ac323ceef2e6264a8fdb3b67852d086f5692001548d40aa8bebdb45b32755a25f5d0223b4117530a3103118fc25518ad625ef03009a3846f02cef96e5e69afa9b512ce95b8066655426f1e752d5c6fff9df5efa86b029396d2763e52df612540be81b4fe550ef9797b6d95fb36ee0e5716317d4cbf64a4babe49020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwl6zOqGizRBSMt8; path=/; expires=Fri, 30 Dec 2022 01:12:05 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "306",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d9d44aa50261460a94240283014217449ae8d856347175b8146f9efd86907ba7561f4f3e777ef9e47465869aa7b96bc8f4cd42cf1425d491ec69bd47c3ddc73624bb617283d33b21c5a74d016147afd13acd1b96d4b24968471eca55ea883c44c282cf0db38b8413ac1a535462b6f23a144e9ae9e3a548bd797cc5d5bf242634cd727ebf5300cc181b4ed80b40e2addb2c93b548460b04e7fbcc91cd7f6f4ac323ceef2e6264a8fdb3b67852d086f5692001548d40aa8bebdb45b32755a25f5d0223b4117530a3103118fc25518ad625ef03009a3846f02cef96e5e69afa9b512ce95b8066655426f1e752d5c6fff9df5efa86b029396d2763e52df612540be81b4fe550ef9797b6d95fb36ee0e5716317d4cbf64a4babe49020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "585",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBnoVhTnf2usoAV; path=/; expires=Fri, 30 Dec 2022 01:12:06 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "306",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d9d44aa50261460a94240283014217449ae8d856347175b8146f9efd86907ba7561f4f3e777ef9e47465869aa7b96bc8f4cd42cf1425d491ec69bd47c3ddc73624bb617283d33b21c5a74d016147afd13acd1b96d4b24968471eca55ea883c44c282cf0db38b8413ac1a535462b6f23a144e9ae9e3a548bd797cc5d5bf242634cd727ebf5300cc181b4ed80b40e2addb2c93b548460b04e7fbcc91cd7f6f4ac323ceef2e6264a8fdb3b67852d086f5692001548d40aa8bebdb45b32755a25f5d0223b4117530a3103118fc25518ad625ef03009a3846f02cef96e5e69afa9b512ce95b8066655426f1e752d5c6fff9df5efa86b029396d2763e52df612540be81b4fe550ef9797b6d95fb36ee0e5716317d4cbf64a4babe49020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "585",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw4zMRRfMBxa6nrV; path=/; expires=Fri, 30 Dec 2022 01:12:06 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "306",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d9d44aa50261460a94240283014217449ae8d856347175b8146f9efd86907ba7561f4f3e777ef9e47465869aa7b96bc8f4cd42cf1425d491ec69bd47c3ddc73624bb617283d33b21c5a74d016147afd13acd1b96d4b24968471eca55ea883c44c282cf0db38b8413ac1a535462b6f23a144e9ae9e3a548bd797cc5d5bf242634cd727ebf5300cc181b4ed80b40e2addb2c93b548460b04e7fbcc91cd7f6f4ac323ceef2e6264a8fdb3b67852d086f5692001548d40aa8bebdb45b32755a25f5d0223b4117530a3103118fc25518ad625ef03009a3846f02cef96e5e69afa9b512ce95b8066655426f1e752d5c6fff9df5efa86b029396d2763e52df612540be81b4fe550ef9797b6d95fb36ee0e5716317d4cbf64a4babe49020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "585",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw06qEduYfjvNTQi; path=/; expires=Fri, 30 Dec 2022 01:12:07 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "306",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwupMW5AUEotKTi8; path=/; expires=Fri, 30 Dec 2022 01:12:07 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d9d44aa50261460a94240283014217449ae8d856347175b8146f9efd86907ba7561f4f3e777ef9e47465869aa7b96bc8f4cd42cf1425d491ec69bd47c3ddc73624bb617283d33b21c5a74d016147afd13acd1b96d4b24968471eca55ea883c44c282cf0db38b8413ac1a535462b6f23a144e9ae9e3a548bd797cc5d5bf242634cd727ebf5300cc181b4ed80b40e2addb2c93b548460b04e7fbcc91cd7f6f4ac323ceef2e6264a8fdb3b67852d086f5692001548d40aa8bebdb45b32755a25f5d0223b4117530a3103118fc25518ad625ef03009a3846f02cef96e5e69afa9b512ce95b8066655426f1e752d5c6fff9df5efa86b029396d2763e52df612540be81b4fe550ef9797b6d95fb36ee0e5716317d4cbf64a4babe49020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "585",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJITmhUZPxqfNA0; path=/; expires=Fri, 30 Dec 2022 01:12:08 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "306",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recdcl0136BtkED0r",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a892890130a70a94240a870284268136f5b0bc78e1c5b8556f93bdeb412f480c4859b353b9e9d99dd338bb5b1a263d9cb9e49c1320244ad789cce72f77e7bc32d1bb39544459c3d2ba1c1409a8346c2dfc03b53faa642cbb2384d09eaa45e2b2ca4c6057eb840f6ad008762e057de39a3494941852a4cef5bd4a3a7c7228cbd2560e35cdb65d3e976bb8dd6d6f816ac31516d1ad693426d91d4f24f12191cfbce3ee80277cb727391e4bbf97590c20624895556828e141a0d565c9dca8d993ea4c989342a0ea4932d0b3910129ec4933899a47cc1e32c4e323e8b38e7cb21d2cad8c62b38b6124a1850059dbb334286eafedbebcf55bf1abefc366c8d52be254b5d8bb504f50ccad3af12ca637ae375b81ca7b73e5ef72c3a0fb33ff6d2bff65f1884698f5b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwGMNO2Mqm2KPoTK; path=/; expires=Fri, 30 Dec 2022 01:12:08 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "319",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      { fields: { Name: "John Doe", f_singleLineText: "two", f_number: 6 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec2400cfc15b467089b50d192534539a1905688726855559bc4c0569b75b40fa580f8f7ae0307b871e9d19ef1783c3e3203259acab2f4f3c864c5526a2cd67effa89656fe8c2733c9fa6c234111e7c872514320cd71a77b3304c2be857798fbba00c3d278f4402d7d29c75458a9b70a32a96105bf2e4cbb16bbc1c23b879a6495284005e4b501dd7b5f6601f6861a3be71a9b0e876ddb465b83be1106312ab1662752280d0807d5744f229d7d6fcd9bcee0f091ef9e92e961fe12a4a01692c40a23858e14a016a67abe95eb337d3e6d4aa45e7626dd6c59c98e90f0241ec4c960c4573c4ee324e5938873fed19db441537b25ae220a89748812d62db09221cbfff67bbdea1ed30695f20d59b20d9452a8b5509ea672915f1240afc3e77828ee0ce3f475fa0314aa564f5d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzoi11LYezUKx80; path=/; expires=Fri, 30 Dec 2022 01:12:09 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "315",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recdcl0136BtkED0r")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736751251c02714e052858050e1d00bdac4dbd6c2b1233f1468d57fc74e23410f485cb859b3e3d999d903119c3062b0e18da469be28dcfbfd1d35644a360225b7841d48052d06d2121446fc0dbcd3956f6b3484a5791e212bd456622914aef0c305b2ef3838e403bff6ce69159524d428c3f4b1433579792ec3d89b08ec9ceb2c9bcffbbe4fb646fb0e8cd649a35b728c0a8dc1a8567c4691c1b1b7e64995b85f57bbabacd82f6f8314b620a2586d04a844a25660f8cdb9dc94a8539a229226e58974b66525064246b3749666b39cae68cad28cd14542295d0f9136dab45ec2d84a2861402558f7a0b908d5fdb7d79fab7e357cfd6dd868297d172dd90e1b01f215a48fbf2aa8c6f4daab70391adf6abcee457219667fece5f805991c3ef54d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "589",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6f9PAwXRRdxXbD; path=/; expires=Fri, 30 Dec 2022 01:12:09 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "311",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec2400cfc15b467089b50d192534539a1905688726855559bc4c0569b75b40fa580f8f7ae0307b871e9d19ef1783c3e3203259acab2f4f3c864c5526a2cd67effa89656fe8c2733c9fa6c234111e7c872514320cd71a77b3304c2be857798fbba00c3d278f4402d7d29c75458a9b70a32a96105bf2e4cbb16bbc1c23b879a6495284005e4b501dd7b5f6601f6861a3be71a9b0e876ddb465b83be1106312ab1662752280d0807d5744f229d7d6fcd9bcee0f091ef9e92e961fe12a4a01692c40a23858e14a016a67abe95eb337d3e6d4aa45e7626dd6c59c98e90f0241ec4c960c4573c4ee324e5938873fed19db441537b25ae220a89748812d62db09221cbfff67bbdea1ed30695f20d59b20d9452a8b5509ea672915f1240afc3e77828ee0ce3f475fa0314aa564f5d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "605",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBgPKMlWtnuED7I; path=/; expires=Fri, 30 Dec 2022 01:12:09 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "315",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a892890130a70a94240a870284268136f5b0bc78e1c5b8556f93bdeb412f480c4859b353b9e9d99dd338bb5b1a263d9cb9e49c1320244ad789cce72f77e7bc32d1bb39544459c3d2ba1c1409a8346c2dfc03b53faa642cbb2384d09eaa45e2b2ca4c6057eb840f6ad008762e057de39a3494941852a4cef5bd4a3a7c7228cbd2560e35cdb65d3e976bb8dd6d6f816ac31516d1ad693426d91d4f24f12191cfbce3ee80277cb727391e4bbf97590c20624895556828e141a0d565c9dca8d993ea4c989342a0ea4932d0b3910129ec4933899a47cc1e32c4e323e8b38e7cb21d2cad8c62b38b6124a1850059dbb334286eafedbebcf55bf1abefc366c8d52be254b5d8bb504f50ccad3af12ca637ae375b81ca7b73e5ef72c3a0fb33ff6d2bff65f1884698f5b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "603",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwM12kicspgn1qBS; path=/; expires=Fri, 30 Dec 2022 01:12:10 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "319",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recdcl0136BtkED0r",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590414bc3401085ff4ad9739bee2650644f12f5526a14a91e2a5226c9d42e6e76c364976243febbbb69417b10bc789cc7376fde9b9e115696ea8ec9d79ea99ac928d495e6225be4eee3ee96139bb29d421d999e15d06080966030ea5bf0ce16be299198145916a5d23b674d843594a803fdd0a2993c3fadc286a728ec9d6b3b399f1f0e87e49dac6f81ac4d2adbb0213a5484e0b0ce3fa3c918ca77f4685678dc14fbab343f2e6f821536a0a259490a4ca2d11aa0fafad26ecacc29701ea1c9ea045d5c59ab1148792a66229d657ccd8514a9e48b8473be195bee2c355ec3b978e839aa1a3a776f6b15bef3df597f9efa2db010df81c96aeddb18a96bb152a05f40fbb85540716e6fbd714cf230fcf111c3dbf0059b5ae6902f020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlHkvwuBMQ906d3; path=/; expires=Fri, 30 Dec 2022 01:12:10 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "295",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recdcl0136BtkED0r")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94ded44aa90271460a94240a830744197f84a2d1c3bbad8aa68d5ff8e9d56820e485d18efe9bb77efdd8169c524236c556bb82816a5ff7cb8e7c4a66ca3d1a881c903aba1c3082dc162d2df21785787ae4162521445929ae0bdb30936d0a089f4538f76f2fa52c58d4049d87adf0f723edfed76d907b9d0033997b5ae63c7e4d0128247557e2593315418e8d956b85fd7db9bbcdc2fefa21576a09359431a6c66d05920757b693765f614b84cd0a43a411757567a04729e8b99c867055f7121452ef922e39cafc7961b475d30702e1e7b8eaa81c13f3aa5e377fe3bebef537f0516e227303963429f220d3db61acc1b9890b66aa8cfed5db09e491e872b1f71fc06e6750c1b21020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "545",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:11 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9SoxFrWO8fqALQ; path=/; expires=Fri, 30 Dec 2022 01:12:11 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "287",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590414bc3401085ff4ad9739bee2650644f12f5526a14a91e2a5226c9d42e6e76c364976243febbbb69417b10bc789cc7376fde9b9e115696ea8ec9d79ea99ac928d495e6225be4eee3ee96139bb29d421d999e15d06080966030ea5bf0ce16be299198145916a5d23b674d843594a803fdd0a2993c3fadc286a728ec9d6b3b399f1f0e87e49dac6f81ac4d2adbb0213a5484e0b0ce3fa3c918ca77f4685678dc14fbab343f2e6f821536a0a259490a4ca2d11aa0fafad26ecacc29701ea1c9ea045d5c59ab1148792a66229d657ccd8514a9e48b8473be195bee2c355ec3b978e839aa1a3a776f6b15bef3df597f9efa2db010df81c96aeddb18a96bb152a05f40fbb85540716e6fbd714cf230fcf111c3dbf0059b5ae6902f020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "559",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:11 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwgR9aaSN0Ay9mio; path=/; expires=Fri, 30 Dec 2022 01:12:11 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "295",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec2400cfc15b467089b50d192534539a1905688726855559bc4c0569b75b40fa580f8f7ae0307b871e9d19ef1783c3e3203259acab2f4f3c864c5526a2cd67effa89656fe8c2733c9fa6c234111e7c872514320cd71a77b3304c2be857798fbba00c3d278f4402d7d29c75458a9b70a32a96105bf2e4cbb16bbc1c23b879a6495284005e4b501dd7b5f6601f6861a3be71a9b0e876ddb465b83be1106312ab1662752280d0807d5744f229d7d6fcd9bcee0f091ef9e92e961fe12a4a01692c40a23858e14a016a67abe95eb337d3e6d4aa45e7626dd6c59c98e90f0241ec4c960c4573c4ee324e5938873fed19db441537b25ae220a89748812d62db09221cbfff67bbdea1ed30695f20d59b20d9452a8b5509ea672915f1240afc3e77828ee0ce3f475fa0314aa564f5d020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "605",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:11 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSCyqZhVPVGdtw8; path=/; expires=Fri, 30 Dec 2022 01:12:11 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "315",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recdcl0136BtkED0r",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recMVuy7lRsij69Di",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd52bd6ec230187c95c8330427a0b4cd84285d50482b4419a8aaca493e885bc78e1c5be147bc7bed00a2545462e9c2669fef3b9fcfb745125221b30a856f5b4433145a204b19f6bac1407d3d0db1442db4a0c02c678b62528021a539e14bc89c666bce3f885622d6450212855eb76ba1442b25b81d62240166a69e4be0ceeb2432135a5a2057aaacc24ea7ae6b7729852e8914c24d45817656219540146483b51569cce94abef00836f338bff7079bd1a3918282502b96484ab8cb407022b3feb95c0bf1bdf1812539d19e7476cb9436041ffb5edbf3db5d3cc55ee8f9210e5c8cf1bc79e542c84233f22b00f3dee694914a8d45464d5affedf9e7557f19f7fc93712918d3a5b554959052c26684693b1593f89082d05ca110db7545f9924144394c616540a4a052066ba48ed6eb5cf461458a92c1f1c7ae4c72d73a556d3cd3eb3b36a9e867f030a497aa3612397786e252cd7a16e2876d70d1b98f6ea98a0f97aa780cc8e4715b3594a4295dd8bba25a876476efbb6ffdfe1edcd3040000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:12 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw988fwAjUbuDsVE; path=/; expires=Fri, 30 Dec 2022 01:12:11 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "393",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recdcl0136BtkED0r")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736b513a9423e55012e2804840a875ed026d936168e1df9a19456fd77ec940a8a84c4859b3d3b333b1e1f8868082706eba69694658bdcbdddde5043a66423503696f00329a1c340aa5b505b6c26e335cc5fc13b5dfaae424338cbb20855de39ada248428532a81e7a5493e7a72228bc8940eb5c6ff97c3e0c43b235daf760b44e6add916374a80d82c3267f8f2663386fcda32a70bf2edbab34dfdf5d072bec4044b3ca08508944adc034cb4bbb2951a7e079244d8a13e962cb4a8c8494a66cc6d259465794719672ba4828a5ebf1951b6d3a2fe14701e1bde3548275f7ba11a1adffcefc7dd56fc159fa15dc68297d1f23d91e6b01f205a48faa12cacf16b4578e701acf56a8adc442285ce12e80c4a175011badced187562f71075d2ff1fc637f6cf2f801a0dfcb786a020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "618",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:12 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwR0AdBnAZt2P8mI; path=/; expires=Fri, 30 Dec 2022 01:12:12 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "322",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recMVuy7lRsij69Di")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e43304c7205a7caa282714d20a510e5caa4db2802bc78efc1005c4bfd70e48c0a1522f3deeceecececec89888a7062b09caffce1492eacf81a8da78274c946a0ac2ce12792438d8134d33bd5996a8cd82778a7735f1768084f07c3d852d772140b2bd4566226142ef1db8569d68e15de39ada2a8840265e8bf35a83a1f8b2cc0dec4c6ceb9c6f27e7fbfdf275ba37d0346eba4d435394785d22038ac268728d29af7d6bcab0c8feb7cf7cc26c7d96b90c21a44142b8c009548d40a4cf5f228d725ea72d824923ad985f4b065295a02a32ceda5ac37a04b9af294713a4e28a5ebf6a48d36b597701750c8a345245837d7950849feb7dffb55bf994ed9cdb4d152fa265ab20d9602e40aa48f5339e4d704b457e16fb465830bef247c18903f2673fe01104175f75a020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "602",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:12 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwr4sBH6j61bOPu2; path=/; expires=Fri, 30 Dec 2022 01:12:12 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "317",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22changed%20Name%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad4b5b1892a751f5456a15993e4c446e9bbb369826254de8dcd8bf9b740e9d20f8e25b72ee39e79e9cec89c14a1bde13f6bc27821316005e491aa78bccbe5d5f5143a664235006ce9e14d0a227550da81af964bcfaf92b38ab0bd79668088bd33440a5b356ab209250a2f4aabb0ed5e4f121f70a6702d058dbf56c3e1f8621aa8d761d18ada34ab7e4101c2a83609167efc1640ce77a73af72dcad8be622c9763797de0a5b10c1ac34025424512b307c796e3725ea183c0ba4497e249d6d59899190d0249ec5c92ca52b1ab338617411514ad7e32b37dab44ec28f02fc7bc7a984dede6a2e7c5bff9df9fbaadf82c7c95770a3a5745d88d4775809904f205d5015507cb6a09db284d170ee85aa25e642e10ab71e24167bebb1d1ea147d68f412b7d076124f3ff6c7260f2f870fc773403e78020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "632",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:13 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjsuUkOY7ibOVvy; path=/; expires=Fri, 30 Dec 2022 01:12:13 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "330",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recdcl0136BtkED0r")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736b513a9423e55012e2804840a875ed026d936168e1df9a19456fd77ec940a8a84c4859b3d3b333b1e1f8868082706eba69694658bdcbdddde5043a66423503696f00329a1c340aa5b505b6c26e335cc5fc13b5dfaae424338cbb20855de39ada248428532a81e7a5493e7a72228bc8940eb5c6ff97c3e0c43b235daf760b44e6add916374a80d82c3267f8f2663386fcda32a70bf2edbab34dfdf5d072bec4044b3ca08508944adc034cb4bbb2951a7e079244d8a13e962cb4a8c8494a66cc6d259465794719672ba4828a5ebf1951b6d3a2fe14701e1bde3548275f7ba11a1adffcefc7dd56fc159fa15dc68297d1f23d91e6b01f205a48faa12cacf16b4578e701acf56a8adc442285ce12e80c4a175011badced187562f71075d2ff1fc637f6cf2f801a0dfcb786a020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "618",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:13 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw58pMRfpQ7G0jud; path=/; expires=Fri, 30 Dec 2022 01:12:13 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "322",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e43304c7205a7caa282714d20a510e5455b5491670e5d8911fa280f8f7da01a9f450a9971e7767767676f6440c96da5496f0d7131115e1b1315ff9c39d5c58f1311a4f05e9928d4019392792438d8134d33bd5996a8cd83b78a7735f1768084f07c3d852d772140b2bd4566226142ef1d38569d68e15de39ada2a8840265e83f35a83a2f8b2cc0dec4c6ceb9c6f27e7fbfdf275ba37d0346eba4d435394785d22038ac268728d29af7d63cab0c8feb7c77cf26c7d96390c21a44142b8c009548d40a4cf5f053ae4bd4e5b0492475b20be9c796a568098cb2b497b2de802e69ca53c6e938a194aedb9336dad45ec24d40218f169160dd5c572224f9df7e6f57fd663a65dfa68d96d237d1926db0142057207d9cca21bf26a0bd0a7fa32d1b5c7827e1c380fc3199f3dbf90b58cef77c68020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "616",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:13 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3VBYgNAcr1wqkb; path=/; expires=Fri, 30 Dec 2022 01:12:13 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "326",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22something%20else%20altogether%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad4b5b1892a751f5456a15993e4c446e9bbb369826254de8dcd8bf9b740e9d20f8e25b72ee39e79e9cec89c14a1bde13f6bc27821316005e491aa78bccbe5d5f5143a664235006ce9e14d0a227550da81af964bcfaf92b38ab0bd79668088bd33440a5b356ab209250a2f4aabb0ed5e4f121f70a6702d058dbf56c3e1f8621aa8d761d18ada34ab7e4101c2a83609167efc1640ce77a73af72dcad8be622c9763797de0a5b10c1ac34025424512b307c796e3725ea183c0ba4497e249d6d59899190d0249ec5c92ca52b1ab338617411514ad7e32b37dab44ec28f02fc7bc7a984dede6a2e7c5bff9df9fbaadf82c7c95770a3a5745d88d4775809904f205d5015507cb6a09db284d170ee85aa25e642e10ab71e24167bebb1d1ea147d68f412b7d076124f3ff6c7260f2f870fc773403e78020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "632",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:14 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwI88BQ2sScorW3X; path=/; expires=Fri, 30 Dec 2022 01:12:14 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "330",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/app21Qak1T4cGoiP7/Empty")
  .query({ "records%5B%5D": ["recdcl0136BtkED0r", "recMVuy7lRsij69Di"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f229c9390686c6664e25d9ae2e06454ab53a3855fa8695569ae7041567669959ba642ad5c6d60200e08381c861000000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:15 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw4dP4IjvND7BPEJ; path=/; expires=Fri, 30 Dec 2022 01:12:14 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "91",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recdcl0136BtkED0r")
  .query({})
  .once()
  .reply(
    404,
    { error: { type: "MODEL_ID_NOT_FOUND", message: "Record not found" } },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:15 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwILYqmFySI8i1hk; path=/; expires=Fri, 30 Dec 2022 01:12:15 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "68",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recMVuy7lRsij69Di")
  .query({})
  .once()
  .reply(
    404,
    { error: { type: "MODEL_ID_NOT_FOUND", message: "Record not found" } },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:15 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYVVIdu8Pa516ro; path=/; expires=Fri, 30 Dec 2022 01:12:15 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "68",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:15 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwAXc5Xi2pBX1LpY; path=/; expires=Fri, 30 Dec 2022 01:12:15 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:16 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaeGlbAmxPR779s; path=/; expires=Fri, 30 Dec 2022 01:12:16 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:16 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwngNChpIh0AeTYs; path=/; expires=Fri, 30 Dec 2022 01:12:16 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      {
        fields: {
          Name: "John Doe",
          f_checkbox: true,
          f_currency: 20.34,
          f_date: "2021-12-26",
          f_dateTime: 1640520000000,
          f_duration: 4890,
          f_email: "me@example.com",
          f_multilineText: "i know\nlines",
          f_multipleSelects: ["Red", "Green"],
          f_number: 7.1,
          f_percent: 33.3,
          f_phoneNumber: "617 555-1234",
          f_rating: 1,
          f_richText: "#header\n* bullet",
          f_singleLineText: "finally, a regular field",
          f_singleSelect: "Blue",
          f_url: "https://www.google.com",
        },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553d16eda3014fd95c87b85d449a0b03c75306952c5d8d4a6d344a92627b910ab8e1dddd8028af8f7d90e08a8f6d0974979f1b9c7f71e9f7bb2270885c2b225e9f39ef092a40ef8f27b3e9e664ff5621625d382f4c88a83709c3d99b31a2ce95e5532f8aac0d5fe30a3d5dcd4392049a364e8a0a282e235575b926a34e0118308b2d89134a661327050c9b4eb15d338ea47713fbe252734e3f575258be29452fb8594d245c733c8345792a483f167ea10a81917f65a0d77b0657523202c54edc9b5119a0b2e2183adb6141ebc4ab5594a07b56786bdf208020aedfc200f50dad2370490e4c571e4f191a33072c706b00069db25499878a052124e4e90db68140c8743fb8064e04738bd726d3df2075e5447319f2a6025e052f683dc08017a293dbfb56c01b3b3ea15974c885d2f6001c2da088681dfcc05bb936fb91361baed18749e545a376d7a73b3d96cc2b552eb0b6f72a3b5b3714f04cbc1917f342083a787992dffe3362ad33054ca3738f8dd22d8a595939d6be243645afc2967f0b69857e378f2763fb5ad4eebc99133190a5092617977ddae476417b0892305b38e7435e55d36129ad128b5f18846e76cac14da7db28ba0da5cfa8a60adfeae4a6e7dfbdf7a2f477d44342a214ce324b50d149c895fcced30b5ffdcfce880322e6ed41e3e68c6e1e5f0177de8e543e3030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:17 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCD2Noxk6xFgI6r; path=/; expires=Fri, 30 Dec 2022 01:12:16 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "507",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553d16eda3014fd95c87b85d449a0b03c75306952c5d8d4a6d344a92627b910ab8e1dddd8028af8f7d90e08a8f6d0974979f1b9c7f71e9f7bb2270885c2b225e9f39ef092a40ef8f27b3e9e664ff5621625d382f4c88a83709c3d99b31a2ce95e5532f8aac0d5fe30a3d5dcd4392049a364e8a0a282e235575b926a34e0118308b2d89134a661327050c9b4eb15d338ea47713fbe252734e3f575258be29452fb8594d245c733c8345792a483f167ea10a81917f65a0d77b0657523202c54edc9b5119a0b2e2183adb6141ebc4ab5594a07b56786bdf208020aedfc200f50dad2370490e4c571e4f191a33072c706b00069db25499878a052124e4e90db68140c8743fb8064e04738bd726d3df2075e5447319f2a6025e052f683dc08017a293dbfb56c01b3b3ea15974c885d2f6001c2da088681dfcc05bb936fb91361baed18749e545a376d7a73b3d96cc2b552eb0b6f72a3b5b3714f04cbc1917f342083a787992dffe3362ad33054ca3738f8dd22d8a595939d6be243645afc2967f0b69857e378f2763fb5ad4eebc99133190a5092617977ddae476417b0892305b38e7435e55d36129ad128b5f18846e76cac14da7db28ba0da5cfa8a60adfeae4a6e7dfbdf7a2f477d44342a214ce324b50d149c895fcced30b5ffdcfce880322e6ed41e3e68c6e1e5f0177de8e543e3030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "995",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:17 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw10bPLTM3CJofZk; path=/; expires=Fri, 30 Dec 2022 01:12:17 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "507",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553d16eda3014fd95c87b85d449a0b03c75306952c5d8d4a6d344a92627b910ab8e1dddd8028af8f7d90e08a8f6d0974979f1b9c7f71e9f7bb2270885c2b225e9f39ef092a40ef8f27b3e9e664ff5621625d382f4c88a83709c3d99b31a2ce95e5532f8aac0d5fe30a3d5dcd4392049a364e8a0a282e235575b926a34e0118308b2d89134a661327050c9b4eb15d338ea47713fbe252734e3f575258be29452fb8594d245c733c8345792a483f167ea10a81917f65a0d77b0657523202c54edc9b5119a0b2e2183adb6141ebc4ab5594a07b56786bdf208020aedfc200f50dad2370490e4c571e4f191a33072c706b00069db25499878a052124e4e90db68140c8743fb8064e04738bd726d3df2075e5447319f2a6025e052f683dc08017a293dbfb56c01b3b3ea15974c885d2f6001c2da088681dfcc05bb936fb91361baed18749e545a376d7a73b3d96cc2b552eb0b6f72a3b5b3714f04cbc1917f342083a787992dffe3362ad33054ca3738f8dd22d8a595939d6be243645afc2967f0b69857e378f2763fb5ad4eebc99133190a5092617977ddae476417b0892305b38e7435e55d36129ad128b5f18846e76cac14da7db28ba0da5cfa8a60adfeae4a6e7dfbdf7a2f477d44342a214ce324b50d149c895fcced30b5ffdcfce880322e6ed41e3e68c6e1e5f0177de8e543e3030000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "995",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:17 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRSvQVQw7Eon8VH; path=/; expires=Fri, 30 Dec 2022 01:12:17 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "507",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recAXN8CTUmZL13Cc",
        fields: {
          Name: "John Doe",
          f_checkbox: null,
          f_currency: null,
          f_date: null,
          f_dateTime: null,
          f_duration: null,
          f_email: null,
          f_multilineText: null,
          f_multipleSelects: null,
          f_number: null,
          f_percent: null,
          f_phoneNumber: null,
          f_rating: null,
          f_richText: null,
          f_singleLineText: null,
          f_singleSelect: null,
          f_url: null,
        },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d6251de2e893ae3e8d5a453a91a948daded9409a5b6e13a61bfbef269de0f620f8e263eef97272eec99e11544875cf92e73d53354bc2e0fa299fa7c5aa5d676296566ccc360a7460f62c972d7868898d19dd2004ed4d3a8bb96b4b209688d9451891aa9a023eac475fcc0095ce5a34c142cb12b417ee3a30a3d543e6654761d058dbf5c974badd6ea37742d749428c2a6cd921385404d242bdf80c264354d7d3bdc960b7ce9b79bcd82d536f05ad54c1ac24254da4018da4faeadc6ecccc718d458046d9113a7ba5500310f3584c443c99f1828b44c489b88c38e7eb61a50d52ebb43ca9c36f3f285af6f6166be57bfbefbca74ffd1a7afe139a506bd785487d079592fa516a176ee532ff6e009df11fc7fde18f651c5e0f5f1b03e03949020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:17 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZPyfav8TUcej3z; path=/; expires=Fri, 30 Dec 2022 01:12:17 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "311",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recAXN8CTUmZL13Cc")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad4b3ac4d1276d7d1ab58a74224390dbf6ce06d2dc92264c37f6ef269de0f620f8e263ee3939f79c730f4c362c6106ebdb97629995eb6e938b4556b329db4a54cdc092032ba0434f5a51ab277784017b0367a9705d8586256271154646d66d891fd6535ff548aa9cb5a48384820a95071e7ad493f553ee6167c2a0b5b61f92f97cb7db45ef865c0f8628aaa963c7a0501b048b4dfa194446ab6e308f3ac7fda6689771ba5f655e0a3b9041ac321274a4903498e6e6526ecaf429461a4893fc44bad852ca9110f358cc443c5bf0928b44c489b88e38e79b31d2964ce7149cd5e1d38f8882c1de53237d6fffedf77cd5afa6973fa60d29e5fa6069e8b196a09e41b9f0ab80e2bb0172da1f8efbc71fcb387e015581c2dd3b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "571",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:18 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLZQpTESnQy0Cnx; path=/; expires=Fri, 30 Dec 2022 01:12:18 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recAXN8CTUmZL13Cc")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad4b3ac4d1276d7d1ab58a74224390dbf6ce06d2dc92264c37f6ef269de0f620f8e263ee3939f79c730f4c362c6106ebdb97629995eb6e938b4556b329db4a54cdc092032ba0434f5a51ab277784017b0367a9705d8586256271154646d66d891fd6535ff548aa9cb5a48384820a95071e7ad493f553ee6167c2a0b5b61f92f97cb7db45ef865c0f8628aaa963c7a0501b048b4dfa194446ab6e308f3ac7fda6689771ba5f655e0a3b9041ac321274a4903498e6e6526ecaf429461a4893fc44bad852ca9110f358cc443c5bf0928b44c489b88e38e79b31d2964ce7149cd5e1d38f8882c1de53237d6fffedf77cd5afa6973fa60d29e5fa6069e8b196a09e41b9f0ab80e2bb0172da1f8efbc71fcb387e015581c2dd3b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "571",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:18 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwN4BclhVGg61NzX; path=/; expires=Fri, 30 Dec 2022 01:12:18 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:19 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwOhCcqK3DBVVCX; path=/; expires=Fri, 30 Dec 2022 01:12:19 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:19 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwsBGY2Sxo0AOF0X; path=/; expires=Fri, 30 Dec 2022 01:12:19 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      { fields: { Name: "Jane" } },
      { fields: { Name: "Someone", f_autoNumber: 40 } },
    ],
  })
  .query({})
  .once()
  .reply(
    422,
    {
      error: {
        type: "INVALID_VALUE_FOR_COLUMN",
        message:
          'Field "f_autoNumber" cannot accept a value because the field is computed',
      },
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:20 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwczBlQPXL1vPlJn; path=/; expires=Fri, 30 Dec 2022 01:12:19 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "132",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Jane" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd4ec33010845fa5f2b94d9d1421e4130a1c50140282d2432b8436c9965a726ccb3f8a689477c74e7ba0b75e38eee8dbd9991d88c14699d612b61b086f098b827cda3c768d7ebf71745b5832277b8e223203a9a0c300152031ea5fe09daa7c57a3212c5ddd46a9f6ce29196101358a40bf6894b38fb7326c7813858373dab2e5b2effbe4db28afc1289534aa236374680c82c336ff892653286fcdab2cf1b8ad0e77597e2c1e821576c0a3596d38c844a09260dafb4bbb3991a7c0798466e509bab8b2e61390d12c5da4d96245d7346569c6329a504ab753cbbd329d17702e1e7a4eaa00eb9e55cbc377fe3bebdf53d704364a08af6324abb1e12036207cdcaaa03ab7575e3ac26818ae7cc4f839fe02a90e03762f020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:20 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVmFHfhXHfk8T6n; path=/; expires=Fri, 30 Dec 2022 01:12:20 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "292",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Someone", f_autoNumber: 40 } }],
  })
  .query({})
  .once()
  .reply(
    422,
    {
      error: {
        type: "INVALID_VALUE_FOR_COLUMN",
        message:
          'Field "f_autoNumber" cannot accept a value because the field is computed',
      },
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:20 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwasdVOPgZxaeGSB; path=/; expires=Fri, 30 Dec 2022 01:12:20 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "132",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd4ec33010845fa5f2b94d9d1421e4130a1c50140282d2432b8436c9965a726ccb3f8a689477c74e7ba0b75e38eee8dbd9991d88c14699d612b61b086f098b827cda3c768d7ebf71745b5832277b8e223203a9a0c300152031ea5fe09daa7c57a3212c5ddd46a9f6ce29196101358a40bf6894b38fb7326c7813858373dab2e5b2effbe4db28afc1289534aa236374680c82c336ff892653286fcdab2cf1b8ad0e77597e2c1e821576c0a3596d38c844a09260dafb4bbb3991a7c0798466e509bab8b2e61390d12c5da4d96245d7346569c6329a504ab753cbbd329d17702e1e7a4eaa00eb9e55cbc377fe3bebdf53d704364a08af6324abb1e12036207cdcaaa03ab7575e3ac26818ae7cc4f839fe02a90e03762f020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "559",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:21 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYEUG2TiavE4fiJ; path=/; expires=Fri, 30 Dec 2022 01:12:21 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "292",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recAXN8CTUmZL13Cc")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad4b3ac4d1276d7d1ab58a74224390dbf6ce06d2dc92264c37f6ef269de0f620f8e263ee3939f79c730f4c362c6106ebdb97629995eb6e938b4556b329db4a54cdc092032ba0434f5a51ab277784017b0367a9705d8586256271154646d66d891fd6535ff548aa9cb5a48384820a95071e7ad493f553ee6167c2a0b5b61f92f97cb7db45ef865c0f8628aaa963c7a0501b048b4dfa194446ab6e308f3ac7fda6689771ba5f655e0a3b9041ac321274a4903498e6e6526ecaf429461a4893fc44bad852ca9110f358cc443c5bf0928b44c489b88e38e79b31d2964ce7149cd5e1d38f8882c1de53237d6fffedf77cd5afa6973fa60d29e5fa6069e8b196a09e41b9f0ab80e2bb0172da1f8efbc71fcb387e015581c2dd3b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "571",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:22 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNfE67NqYDagTMt; path=/; expires=Fri, 30 Dec 2022 01:12:22 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    ["1f8b0800000000000003ab562a4a4dce2f4a2956b28a8ead0500dad1d38e0e000000"],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "14",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:22 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwGtBQNVr9oZFNCB; path=/; expires=Fri, 30 Dec 2022 01:12:22 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "34",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%2C%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525b4fc23018fd2ba4cf30dae185ec49810743e6343a88991ad375c535e965e9daa090fd77daa101124c7cd0c4f8d8ef3b3d3de7f4ac81a644e9a206d1e31ab002447e70f9900cc7e94c64311a8c09e88205a3dc63d620c1823ad05495b23351d4ef5eb0352ab122a71a446870ea479a9132a56fc6419f640bcaad314a7a0a8e73cadde2a6a2b233bb8bddda6a3f288da9eaa8df5f2e97c1ab56b6c25aa98028011acf4034c58616a3774fd24ab5b5be95315d6549390c47abe9d85151819927cb35c332e05449ac8b8b43ba2e905b1b230feac45bd0c12b296b01210c510f85bd014c218a5018a1f3004298b596164a0bcbf15e1cce7dbbe1b836d7aa602eb7dfd6bbffd497a2873bd15a716e2b2fa9ae286198cf31b7fe5682938f049495eee3a03b7c338ca6bbeb8ebc9a4f04a9ee4f0ccca6f5d1ee6079ac3767ffa825213cda1267dcf9fc8b0dd917fc930df9e46d9e9b0d257d215d6b040000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1131",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:22 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdYs7AgskFgH41V; path=/; expires=Fri, 30 Dec 2022 01:12:22 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "359",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recnHVDmcpS4t0ZJs", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recAXN8CTUmZL13Cc",
        fields: { Name: "John Doe", f_number: 2, f_autoNumber: 40 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    422,
    {
      error: {
        type: "INVALID_VALUE_FOR_COLUMN",
        message:
          'Field "f_autoNumber" cannot accept a value because the field is computed',
      },
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:23 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRMmJi7UuFu688F; path=/; expires=Fri, 30 Dec 2022 01:12:23 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "132",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recnHVDmcpS4t0ZJs", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d6a5ad88e449aa0f526a159d7bd810b96def5c204d4a9a50dcd87f37b79be81e045f7c0b27df3d39e766cf2cd6c6363d13eb3d930d1324e8bbe56d5b77cf178eaff29e4dd946a22266cf4a683140396824fd0dbc33a56f2bb44cc4e925499577ce68821554a802fdd0a19ebc3c1561c25b12b6ce75bd98cf876188deadf11d5863a2dab4ec400eb54570d8641f643286f2bd7dd405ee56e5f62ac976f94db0c21624995556828e141a0db6b93eb79b327d0c9c1134298ed0d92b0b3902094fe2599ccc52bee0b1881391f08873be1a5b6e8c6dbd8253f1d0735415f4eede34326ce7bfb3fe7cead7c0e977606b94f21d45ea3bac25a825284f532594a7f6c66bc704a7b3fefac070f3c7ad1c5e0f9f5906138b3c020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:23 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwX74LnBZtxtRXwK; path=/; expires=Fri, 30 Dec 2022 01:12:23 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "301",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recAXN8CTUmZL13Cc",
        fields: { Name: "John Doe", f_number: 2, f_autoNumber: 40 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    422,
    {
      error: {
        type: "INVALID_VALUE_FOR_COLUMN",
        message:
          'Field "f_autoNumber" cannot accept a value because the field is computed',
      },
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:23 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw48j8UOdpn6mX6L; path=/; expires=Fri, 30 Dec 2022 01:12:23 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "132",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/app21Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Someone", f_number: 3 } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550414ec33010fc4ae5739b3a2908f009851b2a014141a208a14db2a5468e37726c55b4cadff1a695a0b75e38eeeeccecccec84c38a5cdd09f5b613ba168a17f595ed16af6b9d7f9daff4568cc54aa361cc4e14d060043d518364914f1f103c15a129d10995ce2e78650fe38c8732784f96c9064a34917ddfa21d3d3fce233d385eacbd6f3b359d6e369be4d35168c111251535a26785ca2178acf36f16194c86ce3dd8396e97c5fa32cbb7b737510a1bd02c563a0d3631d11fb8fafa586e2cec3e40cea0d17c0f3afab2d0032093593a49b3c94c2e64aad24c656789947239445e916b8281df2262eee160a0f37754eb58d87fdbfdfbea14cf8e8c092d5bea5aac3498173081590514870228582f948cc3895df4effd0fc46fbafe42020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0k6LCLGVA1Y2BP; path=/; expires=Fri, 30 Dec 2022 01:12:24 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "298",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recnHVDmcpS4t0ZJs")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591cd4ec33010845fa5f2b94d1d0721e4130a1c50140282d2432ed526d9524b8e1df94711adfaeed86911f480c4859b359e1d7fb33e10d1114e0cb6ea617ddfb7c3eb95a37561c99c6c05cace127e2015f4184c05288cfa06bcd395ef1b3484a7d975941aef9c56d12ca14119dc4f03aad9db4b1926bc89c2ceb9c1f2e5721cc7e4dd683f80d13a69754f8e31a135080ebbfc23864c50de9a6755e2beae76372cdf1777210a7b1031ac31025422512b30dded65dc9ca813701e4db3f264ba7865252603a32c5da46c91d1154d79ca38a309a5b49e5a6eb5e9bd8473f1d073522558f7a83b11b6f3dfac3f9ffa1538fb06365a4a3f44243b602b40ae41fa385541756eafbd7284d378565f1f186efeb895e3278a3105792e020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "558",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQaDlXUV1WDlARu; path=/; expires=Fri, 30 Dec 2022 01:12:24 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "293",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recAXN8CTUmZL13Cc")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad4b3ac4d1276d7d1ab58a74224390dbf6ce06d2dc92264c37f6ef269de0f620f8e263ee3939f79c730f4c362c6106ebdb97629995eb6e938b4556b329db4a54cdc092032ba0434f5a51ab277784017b0367a9705d8586256271154646d66d891fd6535ff548aa9cb5a48384820a95071e7ad493f553ee6167c2a0b5b61f92f97cb7db45ef865c0f8628aaa963c7a0501b048b4dfa194446ab6e308f3ac7fda6689771ba5f655e0a3b9041ac321274a4903498e6e6526ecaf429461a4893fc44bad852ca9110f358cc443c5bf0928b44c489b88e38e79b31d2964ce7149cd5e1d38f8882c1de53237d6fffedf77cd5afa6973fa60d29e5fa6069e8b196a09e41b9f0ab80e2bb0172da1f8efbc71fcb387e015581c2dd3b020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "571",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyPlmQJeQ6BMBGA; path=/; expires=Fri, 30 Dec 2022 01:12:24 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "303",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550414ec33010fc4ae5739b3a2908f009851b2a014141a208a14db2a5468e37726c55b4cadff1a695a0b75e38eeeeccecccec84c38a5cdd09f5b613ba168a17f595ed16af6b9d7f9daff4568cc54aa361cc4e14d060043d518364914f1f103c15a129d10995ce2e78650fe38c8732784f96c9064a34917ddfa21d3d3fce233d385eacbd6f3b359d6e369be4d35168c111251535a26785ca2178acf36f16194c86ce3dd8396e97c5fa32cbb7b737510a1bd02c563a0d3631d11fb8fafa586e2cec3e40cea0d17c0f3afab2d0032093593a49b3c94c2e64aad24c656789947239445e916b8281df2262eee160a0f37754eb58d87fdbfdfbea14cf8e8c092d5bea5aac3498173081590514870228582f948cc3895df4effd0fc46fbafe42020000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "578",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwB12iK1X6WwkfZG; path=/; expires=Fri, 30 Dec 2022 01:12:25 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "298",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd945f4fc23014c5bf0ae9338c6ee39f7b52e0c1109c460651d4986e2baea66b97ae0d0ae1bbdb0e0c239909319a101e77efd9e9b977bf750d048eb88873e03dad018981670a570f7e6f104cd3f9d8760711a88305c1d468d6c04729d6a2114f586dc8b1e9bd2225b9afd2100be0d96edb94048992007f482d7d668528545272662c280a31d58ddb0cb3daf47eacdb4a98422265967bcde672b9b4de045719129c5b114fc1c63844022389e3fea73129a2aa5cdcb1315ecdfda4e7f457a381b6c22922c62c1404318b62ce90882f0fedea806dc7e81b516dbc151d9c129042e040c76ed84ec38501b43ddbf1ecae05219c17232db8481545a575e8e98b0e45b9bce131d17bfbefbce5a37e0cdddb87169c5295994879862382e80c5165def291bfdb00574c7f38a81f8e5cc6a6be6727be6079f09890fe7b7b415655ec4c78aa07a842a76b4a6cf7e89e11354eab8a9add22f4dca7084d39f35f42f3ed5b86865dcf8669944d5a12ce4779e585832a89e99c1324b0f26a418690ce4912e2fe8690f23f6e1f81cb6e2b9b97cd1792c9271ead060000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1709",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnvF3aKFvMX7DyM; path=/; expires=Fri, 30 Dec 2022 01:12:25 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "415",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "recAXN8CTUmZL13Cc",
      "recd9nsTYhiBj5fiz",
      "recnHVDmcpS4t0ZJs",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f28e117e16ce21a1b9513e86c6cec94ab53a3855a658e615874466643a6599a66556e15399e711e6929b5c106c526210e555ac541b5b0b00e0f0e5338b000000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 30 Dec 2021 01:12:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjqVNP39LDiVw7X; path=/; expires=Fri, 30 Dec 2022 01:12:25 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "107",
      "Connection",
      "Close",
    ]
  );
