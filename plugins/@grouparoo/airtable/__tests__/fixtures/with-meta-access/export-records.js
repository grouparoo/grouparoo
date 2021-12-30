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
      "Thu, 30 Dec 2021 01:55:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqwxDowtI1TnYiT; path=/; expires=Fri, 30 Dec 2022 01:55:26 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnNDGHCSl9CK4l6; path=/; expires=Fri, 30 Dec 2022 01:55:26 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwM7WkA22aZbUdnM; path=/; expires=Fri, 30 Dec 2022 01:55:27 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwC0EeduDfrdT8Q4; path=/; expires=Fri, 30 Dec 2022 01:55:27 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXgET3DG0TLeobN; path=/; expires=Fri, 30 Dec 2022 01:55:27 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdKsnjBrX6fR9fZ; path=/; expires=Fri, 30 Dec 2022 01:55:28 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [{ fields: { Name: "Jane", f_singleLineText: "here" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591cd6ec23010845f05f90cc1098a4a73aad29e509afe28541555556d9225b1e4d8d1c6162d8877af1d38941b971e3dfe3c3b3b3e30c24a533db0e4e3c044cd122fbc3f2c5f9ad8d0cdb658ef399bb2ad40e99903cba14307ad40a1d7bfc01a9ddbae446249182fbc3408d548cc84c202bf8d835ba4135c5a63b4f236124a94eeeaa9473559bf66eeda92175a63fa2199cf77bb5dd090b63d90d641a53b76f40e152118acd31f6f32c6b5033dab0cf79bbc5d46e97e75efacb003e1cd4a12a002895a01d577977653a64eaba41e9a6427e8624a214620e251380ba3d982173c4ce238896e03cef9665c69aba9b312ce95b8064655c2601e752d5c6fff9df5efa86b029396d2f63ed2d0632540be81b4fe550ef9797b6d95fb36ee0e571671fc3cfe029f5f2a6c49020000",
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
      "Thu, 30 Dec 2021 01:55:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brweBFgHGUVjGf0Xo; path=/; expires=Fri, 30 Dec 2022 01:55:28 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "309",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc1098a4a73aad29e509afe28541555556d9225b1e4d8d1c6162d8877af1d38941b971e3dfe3c3b3b3e30c24a533db0e4e3c044cd122fbc3f2c5f9ad8d0cdb658ef399bb2ad40e99903cba14307ad40a1d7bfc01a9ddbae446249182fbc3408d548cc84c202bf8d835ba4135c5a63b4f236124a94eeeaa9473559bf66eeda92175a63fa2199cf77bb5dd090b63d90d641a53b76f40e152118acd31f6f32c6b5033dab0cf79bbc5d46e97e75efacb003e1cd4a12a002895a01d577977653a64eaba41e9a6427e8624a214620e251380ba3d982173c4ce238896e03cef9665c69aba9b312ce95b8064655c2601e752d5c6fff9df5efa86b029396d2f63ed2d0632540be81b4fe550ef9797b6d95fb36ee0e571671fc3cfe029f5f2a6c49020000",
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
      "Thu, 30 Dec 2021 01:55:29 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPMVeI6deHA9afk; path=/; expires=Fri, 30 Dec 2022 01:55:29 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "309",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc1098a4a73aad29e509afe28541555556d9225b1e4d8d1c6162d8877af1d38941b971e3dfe3c3b3b3e30c24a533db0e4e3c044cd122fbc3f2c5f9ad8d0cdb658ef399bb2ad40e99903cba14307ad40a1d7bfc01a9ddbae446249182fbc3408d548cc84c202bf8d835ba4135c5a63b4f236124a94eeeaa9473559bf66eeda92175a63fa2199cf77bb5dd090b63d90d641a53b76f40e152118acd31f6f32c6b5033dab0cf79bbc5d46e97e75efacb003e1cd4a12a002895a01d577977653a64eaba41e9a6427e8624a214620e251380ba3d982173c4ce238896e03cef9665c69aba9b312ce95b8064655c2601e752d5c6fff9df5efa86b029396d2f63ed2d0632540be81b4fe550ef9797b6d95fb36ee0e571671fc3cfe029f5f2a6c49020000",
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
      "Thu, 30 Dec 2021 01:55:29 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvs0u3DAbXk99YV; path=/; expires=Fri, 30 Dec 2022 01:55:29 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "309",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc1098a4a73aad29e509afe28541555556d9225b1e4d8d1c6162d8877af1d38941b971e3dfe3c3b3b3e30c24a533db0e4e3c044cd122fbc3f2c5f9ad8d0cdb658ef399bb2ad40e99903cba14307ad40a1d7bfc01a9ddbae446249182fbc3408d548cc84c202bf8d835ba4135c5a63b4f236124a94eeeaa9473559bf66eeda92175a63fa2199cf77bb5dd090b63d90d641a53b76f40e152118acd31f6f32c6b5033dab0cf79bbc5d46e97e75efacb003e1cd4a12a002895a01d577977653a64eaba41e9a6427e8624a214620e251380ba3d982173c4ce238896e03cef9665c69aba9b312ce95b8064655c2601e752d5c6fff9df5efa86b029396d2f63ed2d0632540be81b4fe550ef9797b6d95fb36ee0e571671fc3cfe029f5f2a6c49020000",
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
      "Thu, 30 Dec 2021 01:55:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwpSbn0GAwyu9G0Z; path=/; expires=Fri, 30 Dec 2022 01:55:30 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "309",
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
      "Thu, 30 Dec 2021 01:55:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwgYxEozaG5R7Xm9; path=/; expires=Fri, 30 Dec 2022 01:55:30 GMT; domain=.airtable.com; samesite=none; secure",
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
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591cd6ec23010845f05f90cc1098a4a73aad29e509afe28541555556d9225b1e4d8d1c6162d8877af1d38941b971e3dfe3c3b3b3e30c24a533db0e4e3c044cd122fbc3f2c5f9ad8d0cdb658ef399bb2ad40e99903cba14307ad40a1d7bfc01a9ddbae446249182fbc3408d548cc84c202bf8d835ba4135c5a63b4f236124a94eeeaa9473559bf66eeda92175a63fa2199cf77bb5dd090b63d90d641a53b76f40e152118acd31f6f32c6b5033dab0cf79bbc5d46e97e75efacb003e1cd4a12a002895a01d577977653a64eaba41e9a6427e8624a214620e251380ba3d982173c4ce238896e03cef9665c69aba9b312ce95b8064655c2601e752d5c6fff9df5efa86b029396d2f63ed2d0632540be81b4fe550ef9797b6d95fb36ee0e571671fc3cfe029f5f2a6c49020000",
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
      "Thu, 30 Dec 2021 01:55:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZfHQwNlOxdHMJP; path=/; expires=Fri, 30 Dec 2022 01:55:30 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "309",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recXD8Qg5tr7fTUz0",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ac33010fc95a073e2c83626a94f25ed29b8ee03a7949452d6f62611c8929125d226e4dfab750c6d0e855e7a13b3a3d999d92333586953772c7d3d3251b3948097dbf9e336b166b6295607cec66c235012e7c87268d09396a090f0777056e7ae29d1b0344c62823aa1b61233a1b0c00febc9aeadc162ddf34b67ad56a424a144e9a7f72daad1ea29f3636708d859db76e974badfef83add1ae05a37550e9869d48a132486a8b4f12e91dbbce3ca80c0feb7c378f1687e58d97c20604899546800a246a05a6bebe941b33754eb320d2283b932eb614a227443c0a2761348979c1c33449d2e82ae09caffb481b6d1a276168c597d0a3123a7ba76be1abfb6faf3f57fd66388ebf0d1b2da56bc952d76225403e8374f42b877c48af9df297e3f456c3759360e6677fece5f476fa02399604935b020000",
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
      "Thu, 30 Dec 2021 01:55:33 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiOcBSSOUv9mE62; path=/; expires=Fri, 30 Dec 2022 01:55:33 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      { fields: { Name: "John Doe", f_singleLineText: "two", f_number: 6 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b4c0847a9aba1d26d475d304d3c4344d69eb42a634aed2441d20fe7d71e100372e3bdaeff9f9f9f9c00c1468ca96c59f07264b1653639f277afab3abe64f1f325db121ab2428e21c58266af0a4056ef5e01181b06fe12c66aecec1b0389c4da9a5cfe51d15add41b05a9d4b0845feba76d87fd60eeac454db24ae4a03cf2d2801eacde520f3b438dadb54d1b8fc75dd7051b83ae11063128b0664752280c080b65b22391debe6bcdab4e61bfceb6f328d92f1ebc14d44292586ea4d08102d4c294f7d77243a64fa725441aa427d2d596a5ec09118fc251188d267cc9c378368b27d38073beee4faad0d44e898b887c223da2446b9fb1943ecbfff67bb9ea16d30695720d596a1b28a450ef42399aca44764e009df69fe3beb8318ce3d7f10ff7bfc5925d020000",
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
      "Thu, 30 Dec 2021 01:55:33 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBlA7fucAEXp4k4; path=/; expires=Fri, 30 Dec 2022 01:55:33 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recXD8Qg5tr7fTUz0")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6e833010fc95c8e78418104acaa9a23d45943e44aa2a976a818558323632b66889f2efb509529b43a55e7ab366c7b333b327c22a121385e5dbfdf6b989b4dad4f97ea464496a86bcea497c2219b468493b10e8f077305a66a62d5091d88f4207f54c341c532630c70f6dc9a6ab406335f10ba3b5144e894381dc4e1f3b148bfd4b6ac74639e0a875d7c7ebf5300c5ea3a4e94049e995b22567a7502a746ac9a713991c9b5e3d8914c74376dc06c9b8bbb352d80273628562203c8e5280aa6eafe596445cd2248eb4482fa4ab2d399b08010dfc951fac429a533f8ea238b8f128a58729522d556b38ccadd812269443af1f64c56c75ffedf5e7aadf0c87e1b7612539379db3d4775832e0afc08dfb954136a79746d8cb51f716f375236f63677fece5fc05d84b0c5d4d020000",
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
      "Thu, 30 Dec 2021 01:55:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwhmRwzArPNBXLnc; path=/; expires=Fri, 30 Dec 2022 01:55:33 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "313",
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
      "1f8b0800000000000003b551c16ec2300cfd15943394b4c0847a9aba1d26d475d304d3c4344d69eb42a634aed2441d20fe7d71e100372e3bdaeff9f9f9f9c00c1468ca96c59f07264b1653639f277afab3abe64f1f325db121ab2428e21c58266af0a4056ef5e01181b06fe12c66aecec1b0389c4da9a5cfe51d15add41b05a9d4b0845feba76d87fd60eeac454db24ae4a03cf2d2801eacde520f3b438dadb54d1b8fc75dd7051b83ae11063128b0664752280c080b65b22391debe6bcdab4e61bfceb6f328d92f1ebc14d44292586ea4d08102d4c294f7d77243a64fa725441aa427d2d596a5ec09118fc251188d267cc9c378368b27d38073beee4faad0d44e898b887c223da2446b9fb1943ecbfff67bb9ea16d30695720d596a1b28a450ef42399aca44764e009df69fe3beb8318ce3d7f10ff7bfc5925d020000",
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
      "Thu, 30 Dec 2021 01:55:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjQiEtd1Bug6BW6; path=/; expires=Fri, 30 Dec 2022 01:55:34 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ac33010fc95a073e2c83626a94f25ed29b8ee03a7949452d6f62611c8929125d226e4dfab750c6d0e855e7a13b3a3d999d92333586953772c7d3d3251b3948097dbf9e336b166b6295607cec66c235012e7c87268d09396a090f0777056e7ae29d1b0344c62823aa1b61233a1b0c00febc9aeadc162ddf34b67ad56a424a144e9a7f72daad1ea29f3636708d859db76e974badfef83add1ae05a37550e9869d48a132486a8b4f12e91dbbce3ca80c0feb7c378f1687e58d97c20604899546800a246a05a6bebe941b33754eb320d2283b932eb614a227443c0a2761348979c1c33449d2e82ae09caffb481b6d1a276168c597d0a3123a7ba76be1abfb6faf3f57fd66388ebf0d1b2da56bc952d76225403e8374f42b877c48af9df297e3f456c3759360e6677fece5f476fa02399604935b020000",
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
      "Thu, 30 Dec 2021 01:55:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwuPf2jsvuXbEb7w; path=/; expires=Fri, 30 Dec 2022 01:55:34 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recXD8Qg5tr7fTUz0",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd6ac33010845f25e89c38b28d69aa53717b0aa9fb43524a4a296b7b9d0864c9ac254213f2ee959c409b43a1971e77f87676660f8cb03254f74cbc1d98ac9908c2ebddec699359ba6a96ab3d6763d648548139b0025af4d01c3406fd039c35856b4b2426e22c0d52e9ac353ac00a4a549e7ee8508f56cf0bbfe128085b6bbb5e4ca7bbdd2eda90711d903151655a760c0e152158acf3cf603284723d3dea05eed7c57696e4fbf9adb7c21664302b49828e141a0d54df5cda8d993e05ce03345a9ca08b2b4b3900094fe2499c4c52bee4b1c832915c479cf3f5d0b231d43a05e7e2bee7a02ae8edbda9a5ffce7f67fd79eab7c069f61d988c52ae0b91fa0e2b09ea05940b5b0514e7f6c669cb04f7c31f1f717c3f7e016fddf4962f020000",
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
      "Thu, 30 Dec 2021 01:55:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvcdqH4z5YVup01; path=/; expires=Fri, 30 Dec 2022 01:55:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recXD8Qg5tr7fTUz0")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd6ac33010845f25e89c38b28d69aa53717b0aaefb43524a2e656daf13812c99b5446842debd9213687328f4d2e30edfceceec91c986094658bf3f2c5eb699a59b76b53e703665ad44d50c4c1c59091d7a68091a83fe01ce9ad275151213719606a972d61a1d6005152a4f3ff5a827ebd7c26f380ac2ceda7e10f3f97ebf8fb6645c0f644c549b8e9d82434d08169bfc33988ca1dc40cfbac0c3a6dc2d92fcb0bcf756d8810c661549d09142a3819abb6bbb29d3e7c0798026c519babab2922390f0249ec5c92ce52b1e8b2c13c96dc439df8c2d5b439d537029ee7b8eaa82c13e9a46faeffc77d69fa77e0b9c66df81c928e5fa1069e8b196a0de40b9b0554279696f9cb64c703ffcf111a72f805d23f821020000",
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
      "Thu, 30 Dec 2021 01:55:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwun6CFIJaRO6Oqv; path=/; expires=Fri, 30 Dec 2022 01:55:35 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "289",
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
      "1f8b0800000000000003b590cd6ac33010845f25e89c38b28d69aa53717b0aa9fb43524a4a296b7b9d0864c9ac254213f2ee959c409b43a1971e77f87676660f8cb03254f74cbc1d98ac9908c2ebddec699359ba6a96ab3d6763d648548139b0025af4d01c3406fd039c35856b4b2426e22c0d52e9ac353ac00a4a549e7ee8508f56cf0bbfe128085b6bbb5e4ca7bbdd2eda90711d903151655a760c0e152158acf3cf603284723d3dea05eed7c57696e4fbf9adb7c21664302b49828e141a0d54df5cda8d993e05ce03345a9ca08b2b4b3900094fe2499c4c52bee4b1c832915c479cf3f5d0b231d43a05e7e2bee7a02ae8edbda9a5ffce7f67fd79eab7c069f61d988c52ae0b91fa0e2b09ea05940b5b0514e7f6c669cb04f7c31f1f717c3f7e016fddf4962f020000",
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
      "Thu, 30 Dec 2021 01:55:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwMcDI8wp7N27ig6; path=/; expires=Fri, 30 Dec 2022 01:55:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b4c0847a9aba1d26d475d304d3c4344d69eb42a634aed2441d20fe7d71e100372e3bdaeff9f9f9f9c00c1468ca96c59f07264b1653639f277afab3abe64f1f325db121ab2428e21c58266af0a4056ef5e01181b06fe12c66aecec1b0389c4da9a5cfe51d15add41b05a9d4b0845feba76d87fd60eeac454db24ae4a03cf2d2801eacde520f3b438dadb54d1b8fc75dd7051b83ae11063128b0664752280c080b65b22391debe6bcdab4e61bfceb6f328d92f1ebc14d44292586ea4d08102d4c294f7d77243a64fa725441aa427d2d596a5ec09118fc251188d267cc9c378368b27d38073beee4faad0d44e898b887c223da2446b9fb1943ecbfff67bb9ea16d30695720d596a1b28a450ef42399aca44764e009df69fe3beb8318ce3d7f10ff7bfc5925d020000",
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
      "Thu, 30 Dec 2021 01:55:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjQsxX7WJRB6hx3; path=/; expires=Fri, 30 Dec 2022 01:55:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recXD8Qg5tr7fTUz0",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "reczbBn4jyf8HXiLU",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525b4fc23018fd2ba4cf5cc606887b22930743e6bc040cc118d36ddfb69aae5dba36c311febbed802006a32fbef0d69e9eeff4f4f46c9080888bb844eecb069118b906584ec78fe9508aab64bea82dd44609016a381b14e01c3429ca304b216e355b7dfe8695e481ca4310c8ed0f1d03854a4acecc10c521503d755f006b2d9e7c3da1840132298bd2edf5aaaaeaa682ab020bcebb11cfd1d6284402b084d8fb30228d39558a07e643bd0ab2b1edd5b31b2d053926462c1404b32e05ceb08827a7726dc476c63d436af93bd2c92d73d2106ccbee77fa76c7b1e656df1d0e5dfbba6b59d6aa7965c245ae28fe16807e6f734a7129ef784c745affedf9eb553f19774647e38253aa0a63a92c2022983e63aacc5480837d0a5c31895ccbac4bc2520a3e613087b5069184526aac913a58af323e8135ce0b0a871ffb6392dbf6b16a75e8b1c1fb4732be5d127f71ae6a339eb1d6949fabd9c0406cbf1d9d756ea30baaa2333857c543403a8fcbaaa1c04de9dcc1efd53a24b37ddd7e020cd755edd3040000",
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
      "Thu, 30 Dec 2021 01:55:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjxC2ego8szLsuw; path=/; expires=Fri, 30 Dec 2022 01:55:36 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "398",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recXD8Qg5tr7fTUz0")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7367552054a4e55e18442782845552f68936c134b8e1df9a19456fd77ec940a8a84c4859b3d3b333b1e1f08ab48421496ebbbf9731d1b75bdcd577b4ac664cb90579a240792418b8e5436206aac46c3d5cddfc01a99d9b6404592309e79a8b0c648e1451c0ae44ef5d8a118ad5e52a7b0ca038d319d4ea6d3beef835a49db81923228654b8edea1540806abe5bb3719c259ad9e448afb4dd6cca3e5fefed659610bcc9b158a8108384a01aa5a5cda8d8938055f7ad2283d912eb6e46c2044340a27613499d19c86491c27d14d4029dd0cafdc4ad55a0e3f0a70ef1da61cb4799015736dfd77e6efab7e0b3ebbfa0aae24e7b6f39174872503fe0adc7a5506d9670bd20a4312eacf9a899a63ca04e6b8732031a88dc306ab73f4be910bdc41db713cffd81f9b3c7e007e031e316a020000",
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
      "Thu, 30 Dec 2021 01:55:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHdDcEDO1rBEpjI; path=/; expires=Fri, 30 Dec 2022 01:55:36 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "325",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/reczbBn4jyf8HXiLU")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b4b408e534753b4ca8eba609a689cbe4b62e644a932a4dd401e2df9714a4c161d22e3bdaeff9f9f9f948784518d1581e8a54c69ffb7af1f8ceb33519939aa3a83ac28e2487061d69a97672f4a0d0631f608dca6d53a0262c4c62df929772ee8b8ecbadc08c4b5ce19771d3d13056586394f4a2020a14aeffdca21cad5f33075bed1b3b63da8e4da77ddf075bad6c0b5aa9a0540d397985522318acd2bd1719ccdb4ebfc80c0f9b7cb788d2c3f2de496103dc8b159a830c042a09bababb951b13793e2cf5a4517626dd6c59f18110d1289c84d1644657346449c266714029dd0c27d54a3756c055402e8f0111d09927557197e47ffbbd5ef5abe9f98f69ad84b0adb7d4b55872106f20ac9fca21bf24a0ac747fa3031b8c7b2761b143fe98cce91b1311fda45a020000",
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
      "Thu, 30 Dec 2021 01:55:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwviJiPgTwkaNsm; path=/; expires=Fri, 30 Dec 2022 01:55:37 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22changed%20Name%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4bc33014fd2b23cfb34b3baab34f63fa24b57ed0894c446edbbb369026251f746eecbf9b740e9d20f8e25b72ee39e79e9cec88c252aa4a93e465475845120f3c5fcf1eead8a88b75bedc5232266b86dc73762483161da96c40d4588d86ab9bbf813532b36d818a24613cf550618d91c28b3814c89deaae43315a3ea64e6195071a633a9d4c267ddf07b592b603256550ca96ecbd43a9100c568b776f3284b35add8b14b7abac99458bedcd95b3c21698372b14031170940254353fb51b137108bef0a4517a209d6cc9d9408868149e85d1d994e6344ce238892e034ae96a78e55aaad672f851807bef30e5a0cdadac986bebbf337f5ff55bf0e9f957702539b79d8fa43b2c19f027e0d6ab32c83e5b90561892507fd64cd41c532630c78d0389416d1c36581da3f78d9ce306da8ee3f1c7fed8e4fe75ff017c4c9eae78020000",
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
      "Thu, 30 Dec 2021 01:55:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw21chmKRmteVI7N; path=/; expires=Fri, 30 Dec 2022 01:55:38 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "333",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recXD8Qg5tr7fTUz0")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7367552054a4e55e18442782845552f68936c134b8e1df9a19456fd77ec940a8a84c4859b3d3b333b1e1f08ab48421496ebbbf9731d1b75bdcd577b4ac664cb90579a240792418b8e5436206aac46c3d5cddfc01a99d9b6404592309e79a8b0c648e1451c0ae44ef5d8a118ad5e52a7b0ca038d319d4ea6d3beef835a49db81923228654b8edea1540806abe5bb3719c259ad9e448afb4dd6cca3e5fefed659610bcc9b158a8108384a01aa5a5cda8d8938055f7ad2283d912eb6e46c2044340a27613499d19c86491c27d14d4029dd0cafdc4ad55a0e3f0a70ef1da61cb4799015736dfd77e6efab7e0b3ebbfa0aae24e7b6f39174872503fe0adc7a5506d9670bd20a4312eacf9a899a63ca04e6b8732031a88dc306ab73f4be910bdc41db713cffd81f9b3c7e007e031e316a020000",
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
      "Thu, 30 Dec 2021 01:55:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlo5wmSzAKFsymr; path=/; expires=Fri, 30 Dec 2022 01:55:38 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "325",
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
      "1f8b0800000000000003b551c16ac24010fd15d9b3c64d8c223995b48722695a8a96622965928cba65b31336bb5815ffbdbb51a81e0abdf438f3debc79f3e6c03496a4ab96256f07262a96f8c6be4855fcb95b4def5f45b6607db612283de7c072a8d19166b451bd3b428f7d803594dbba40cd92701cfb963a97135fb442ad256642e11cbf8c9b8ebab1c21a43ca8b4a2850bafe6383aab778ce1c6cb56f6c8c69da6438dc6eb7c15a936d40130525d5ece8154a8d60b04a775ea4336f5bfda432dc2ff3cd344af7b35b278535082f5668012a90480a7475732dd767ea7458ea49bdec44bada32171d21e2513808a3c188cf79988cc7c9280e38e7cbeea415e9da4ab808c8e5d121125af340957049feb7dfcb55bf9a9efc98d624a56dbca5b6c152807c0169fd540ef93901b2cafd8d776c30ee9d2c891df2c7648eefc76fe79fb13c68020000",
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
      "Thu, 30 Dec 2021 01:55:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzcAmtX9vd3J5co; path=/; expires=Fri, 30 Dec 2022 01:55:38 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "327",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22something%20else%20altogether%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4bc33014fd2b23cfb34b3baab34f63fa24b57ed0894c446edbbb369026251f746eecbf9b740e9d20f8e25b72ee39e79e9cec88c252aa4a93e465475845120f3c5fcf1eead8a88b75bedc5232266b86dc73762483161da96c40d4588d86ab9bbf813532b36d818a24613cf550618d91c28b3814c89deaae43315a3ea64e6195071a633a9d4c267ddf07b592b603256550ca96ecbd43a9100c568b776f3284b35add8b14b7abac99458bedcd95b3c21698372b14031170940254353fb51b137108bef0a4517a209d6cc9d9408868149e85d1d994e6344ce238892e034ae96a78e55aaad672f851807bef30e5a0cdadac986bebbf337f5ff55bf0e9f957702539b79d8fa43b2c19f027e0d6ab32c83e5b90561892507fd64cd41c532630c78d0389416d1c36581da3f78d9ce306da8ee3f1c7fed8e4fe75ff017c4c9eae78020000",
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
      "Thu, 30 Dec 2021 01:55:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwE2Gy89hvs9dcrU; path=/; expires=Fri, 30 Dec 2022 01:55:39 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "333",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ "records%5B%5D": ["recXD8Qg5tr7fTUz0", "reczbBn4jyf8HXiLU"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2112e1681e9a62545e66921a155064ab53a3855562539e5996455a659784464fa842ad5c6d6020013bec39a61000000",
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
      "Thu, 30 Dec 2021 01:55:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvmMcUOTgRLDAvE; path=/; expires=Fri, 30 Dec 2022 01:55:39 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recXD8Qg5tr7fTUz0")
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
      "Thu, 30 Dec 2021 01:55:39 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwr1bJKO5BJuVI8H; path=/; expires=Fri, 30 Dec 2022 01:55:39 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/reczbBn4jyf8HXiLU")
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
      "Thu, 30 Dec 2021 01:55:40 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPmqKlUNkphEXuT; path=/; expires=Fri, 30 Dec 2022 01:55:40 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJyz9HEbBbQEj8E; path=/; expires=Fri, 30 Dec 2022 01:55:40 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6J8Ih1bkuXpZuB; path=/; expires=Fri, 30 Dec 2022 01:55:40 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQtEx8oDBGYrNKu; path=/; expires=Fri, 30 Dec 2022 01:55:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44948dbf9a9ca9026558c4d1ddb434b3539c98558387674630b28e2df671b1050eda12f93f2e2738fef3d3ee76647102a8d754fd8cb8e889a300f14c578b19eadfab129ca0990015908909eb32353de82233dea4645631d6a7fb8357a6adb1290b024cf3d543550ad4abd21cca08580584450d596b094c6d9c8433537be574ad36498a4c3f4969cd09968af2bb3246594ba2fa6943e1f7816b9115a1136baff4c3d022d17d25d6be10136bced24c4956e03b9b5d2082914cc60631c45442ba5d773e5a1fecc70577e8284ca783fc813d4aef415011479f51c757ce45d9cf86307588172edb22cce02d068052727c86d7217e579ee1e908dc208af572d9d47e120aae628e65303bc069cab61545a29c1cc55e0f78e2d617256bd108a4bb91d443c42585ac9310ac95cb00ff21db790f6908e45ef49634cd7b39b9bf57a1d2fb55e5e78535a63bc8d3b2279099efcbd0315fd7a9ab8f23f6ea3b61d47ad43837dc816c18556175bdf242c91edf1879ac0dbf3b4b94f8bb7c72faed5299e120557b104ad38d60fd7ed06441d16acf0a46872205d4d79b71b199dd184e5391b25e7dd58687479f28b45757b192a92f7e69bae85f3ed7febbd1cf511d1a8a5b49d97d47750092e7f739f2173ffdcf4e880b67edda83b7cd08cfdebfe2fa1ba8444e3030000",
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
      "Thu, 30 Dec 2021 01:55:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdM3SwYRTrPhf9q; path=/; expires=Fri, 30 Dec 2022 01:55:41 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "505",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44948dbf9a9ca9026558c4d1ddb434b3539c98558387674630b28e2df671b1050eda12f93f2e2738fef3d3ee76647102a8d754fd8cb8e889a300f14c578b19eadfab129ca0990015908909eb32353de82233dea4645631d6a7fb8357a6adb1290b024cf3d543550ad4abd21cca08580584450d596b094c6d9c8433537be574ad36498a4c3f4969cd09968af2bb3246594ba2fa6943e1f7816b9115a1136baff4c3d022d17d25d6be10136bced24c4956e03b9b5d2082914cc60631c45442ba5d773e5a1fecc70577e8284ca783fc813d4aef415011479f51c757ce45d9cf86307588172edb22cce02d068052727c86d7217e579ee1e908dc208af572d9d47e120aae628e65303bc069cab61545a29c1cc55e0f78e2d617256bd108a4bb91d443c42585ac9310ac95cb00ff21db790f6908e45ef49634cd7b39b9bf57a1d2fb55e5e78535a63bc8d3b2279099efcbd0315fd7a9ab8f23f6ea3b61d47ad43837dc816c18556175bdf242c91edf1879ac0dbf3b4b94f8bb7c72faed5299e120557b104ad38d60fd7ed06441d16acf0a46872205d4d79b71b199dd184e5391b25e7dd58687479f28b45757b192a92f7e69bae85f3ed7febbd1cf511d1a8a5b49d97d47750092e7f739f2173ffdcf4e880b67edda83b7cd08cfdebfe2fa1ba8444e3030000",
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
      "Thu, 30 Dec 2021 01:55:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHNIbmiNpB6xUye; path=/; expires=Fri, 30 Dec 2022 01:55:41 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "505",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44948dbf9a9ca9026558c4d1ddb434b3539c98558387674630b28e2df671b1050eda12f93f2e2738fef3d3ee76647102a8d754fd8cb8e889a300f14c578b19eadfab129ca0990015908909eb32353de82233dea4645631d6a7fb8357a6adb1290b024cf3d543550ad4abd21cca08580584450d596b094c6d9c8433537be574ad36498a4c3f4969cd09968af2bb3246594ba2fa6943e1f7816b9115a1136baff4c3d022d17d25d6be10136bced24c4956e03b9b5d2082914cc60631c45442ba5d773e5a1fecc70577e8284ca783fc813d4aef415011479f51c757ce45d9cf86307588172edb22cce02d068052727c86d7217e579ee1e908dc208af572d9d47e120aae628e65303bc069cab61545a29c1cc55e0f78e2d617256bd108a4bb91d443c42585ac9310ac95cb00ff21db790f6908e45ef49634cd7b39b9bf57a1d2fb55e5e78535a63bc8d3b2279099efcbd0315fd7a9ab8f23f6ea3b61d47ad43837dc816c18556175bdf242c91edf1879ac0dbf3b4b94f8bb7c72faed5299e120557b104ad38d60fd7ed06441d16acf0a46872205d4d79b71b199dd184e5391b25e7dd58687479f28b45757b192a92f7e69bae85f3ed7febbd1cf511d1a8a5b49d97d47750092e7f739f2173ffdcf4e880b67edda83b7cd08cfdebfe2fa1ba8444e3030000",
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
      "Thu, 30 Dec 2021 01:55:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwATOLCgyxxYuBXM; path=/; expires=Fri, 30 Dec 2022 01:55:42 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "505",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recBBDfwTksDtBbLe",
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
      "1f8b0800000000000003b591c14ec33010447fa5f2b94d9d402494130a395521201438142ae4245b62e178a38dad40abfe3b768a447b40e2c2d13bcfe3d9f19e11d448cdc092e73d930d4bfc204db3ed58be0f9949ab1cd89c6d2528cfec59213a70d00a5b3dcb70d25e853558d8ae02624918c77e44b26e4bf8300e7dd113545963507b0b252a504eb8eb41cf1e1f72275bf283d6987e4896cb711c833742db0b420c6aecd8c13bd404c240937e7a9329aa1de85ee7b05b17ed5594ee5637ce0a3a21bd594552e840016a41cdf5b9dd9ce9e31aa98766f9113a7ba5941310f1285c84d1e282973c4ce238b90c03cef97a5a698bd459254eea70db4f8a1283b9c546badefe3befe953bf868e7e42132a657b1f69e8a196423d0965fdad4214df0da0d5eee3b83bfcb18cc3e6f005c2b2902449020000",
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
      "Thu, 30 Dec 2021 01:55:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEpAhq53YHWXUMO; path=/; expires=Fri, 30 Dec 2022 01:55:42 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "310",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recBBDfwTksDtBbLe")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a814828271472aa42402870a890d026d9100bc71b39b602adfa77ec1489f650890b47ef8c676766f74c342c611aeb34cddaa9fc1833935639b2256b05ca6664c99e15d0a3236da8538b8c66ec0daca1c2f6156a968471ec475ad45d899fc6515fd54caaac31a4bc84840aa5031e06548be7a7dcc156fb4167cc3026ebf5344dc1bb263b80260a6aead9c12bd41ac160937e7991d9aa1df5a3ca71b72dba9b28dd6dee9c14f620bc58a505a8402229d0cdedb9dc92a9638cd49316f99174b6a5143321e251b80aa3d5152f7998c471721d069cf3ed1ca925dd5b092775b8f433226134f7d408d7db7ffb3d5d75d174f46b5a939476f096c6016b01f205a4f5bf0a287e1a20abdce1b87bfcb18cc3372e25d7ab3b020000",
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
      "Thu, 30 Dec 2021 01:55:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnXP9a6HpYmh6uE; path=/; expires=Fri, 30 Dec 2022 01:55:42 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recBBDfwTksDtBbLe")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a814828271472aa42402870a890d026d9100bc71b39b602adfa77ec1489f650890b47ef8c676766f74c342c611aeb34cddaa9fc1833935639b2256b05ca6664c99e15d0a3236da8538b8c66ec0daca1c2f6156a968471ec475ad45d899fc6515fd54caaac31a4bc84840aa5031e06548be7a7dcc156fb4167cc3026ebf5344dc1bb263b80260a6aead9c12bd41ac160937e7991d9aa1df5a3ca71b72dba9b28dd6dee9c14f620bc58a505a8402229d0cdedb9dc92a9638cd49316f99174b6a5143321e251b80aa3d5152f7998c471721d069cf3ed1ca925dd5b092775b8f433226134f7d408d7db7ffb3d5d75d174f46b5a939476f096c6016b01f205a4f5bf0a287e1a20abdce1b87bfcb18cc3372e25d7ab3b020000",
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
      "Thu, 30 Dec 2021 01:55:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwa4E1k8VDGu1spL; path=/; expires=Fri, 30 Dec 2022 01:55:43 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUoVzgmdJrt5hS1; path=/; expires=Fri, 30 Dec 2022 01:55:43 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZnJ36e3v80jQVA; path=/; expires=Fri, 30 Dec 2022 01:55:43 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
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
      "Thu, 30 Dec 2021 01:55:45 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQln8qpQlWCEGKK; path=/; expires=Fri, 30 Dec 2022 01:55:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [{ fields: { Name: "Jane" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6e5223b2274911a1c428527b6811992453bbb27fc266976842bfbbbb690ff6d68bc779fce6cd7b3310839536754bd86e20bc262c08ebe557fe6de5e2e131ede5864cc99ea308cc400a90e8a115280cfa0738ab0b274b3484c5e96d904a67ad56011650a2f0f473836af2f69afb0d678270b0b669d97cde755df469b46bc0681d555a926370a80c82c53afb09266328d79a179563bf2d0e7749d6af96de0a25f060561a0e2a12a81598fafed26e4ad4297016a0497e822eaeacf9082434896771325bd0358d599ab29b34a2946ec7967b6da413702eee7b8eaa80d63ee99afbeffc77d6bfa7ae096cb410ae0991da062b0e6203c285ad028a737bed94258cfae1ca471cdf8fbfb553456c2f020000",
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
      "Thu, 30 Dec 2021 01:55:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7iuY8FVZQtLrMj; path=/; expires=Fri, 30 Dec 2022 01:55:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
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
      "Thu, 30 Dec 2021 01:55:45 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNOWp6P1mn3GHPK; path=/; expires=Fri, 30 Dec 2022 01:55:45 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6e5223b2274911a1c428527b6811992453bbb27fc266976842bfbbbb690ff6d68bc779fce6cd7b3310839536754bd86e20bc262c08ebe557fe6de5e2e131ede5864cc99ea308cc400a90e8a115280cfa0738ab0b274b3484c5e96d904a67ad56011650a2f0f473836af2f69afb0d678270b0b669d97cde755df469b46bc0681d555a926370a80c82c53afb09266328d79a179563bf2d0e7749d6af96de0a25f060561a0e2a12a81598fafed26e4ad4297016a0497e822eaeacf9082434896771325bd0358d599ab29b34a2946ec7967b6da413702eee7b8eaa80d63ee99afbeffc77d6bfa7ae096cb410ae0991da062b0e6203c285ad028a737bed94258cfae1ca471cdf8fbfb553456c2f020000",
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
      "Thu, 30 Dec 2021 01:55:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiKX2mKhftyon1j; path=/; expires=Fri, 30 Dec 2022 01:55:46 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recBBDfwTksDtBbLe")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a814828271472aa42402870a890d026d9100bc71b39b602adfa77ec1489f650890b47ef8c676766f74c342c611aeb34cddaa9fc1833935639b2256b05ca6664c99e15d0a3236da8538b8c66ec0daca1c2f6156a968471ec475ad45d899fc6515fd54caaac31a4bc84840aa5031e06548be7a7dcc156fb4167cc3026ebf5344dc1bb263b80260a6aead9c12bd41ac160937e7991d9aa1df5a3ca71b72dba9b28dd6dee9c14f620bc58a505a8402229d0cdedb9dc92a9638cd49316f99174b6a5143321e251b80aa3d5152f7998c471721d069cf3ed1ca925dd5b092775b8f433226134f7d408d7db7ffb3d5d75d174f46b5a939476f096c6016b01f205a4f5bf0a287e1a20abdce1b87bfcb18cc3372e25d7ab3b020000",
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
      "Thu, 30 Dec 2021 01:55:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwR9GSNpjHw91C8U; path=/; expires=Fri, 30 Dec 2022 01:55:46 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwK3LX0ZCv4vrGeT; path=/; expires=Fri, 30 Dec 2022 01:55:46 GMT; domain=.airtable.com; samesite=none; secure",
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
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%2C%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525f4bc3301cfc2a23cf5b977646a44fd24d8451ab48ddc354246d331bcd9f92267476f4bb9b74836d30c19781f898dfef72b9bbdc0628924b55d4207cde005a80d00da268b66ad2cf7aa6a32c26600856943087d9800473624173598ac14cf6bb376cb44c0ccf8802a18f901b299a9729596b0b7d113d28335a4be12818ce08b38bfb8a88c1d3636cd746b941a9755587e371d334debb92a6c24a4a2f971c748e2157046b52445f8ea4976a6af52062d22e93f22a88daf9d452118ea923cb14c5c263440aac8aeb63ba21105b1b91030de22de8e89594f6800006fec80f461398423f4428bcf03d08e1b2b7b4928a1b860fe2b0eefb0dc3b5be9305b5b99d5befe1533f8a0ef6a29564cc544e525d919c62b6c0ccb85b094e76094823ecc7417bf86518dd70df9d74fa11af359fdcdca2962f4e76078b53bdb9fc4f2d41275b628d5b9f7fb221e84c0dd9f176afdd37f06021606b040000",
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
      "Thu, 30 Dec 2021 01:55:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0z0CTmKclKLsZn; path=/; expires=Fri, 30 Dec 2022 01:55:46 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "355",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      { id: "recTCjLxtm3EG5zmV", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recBBDfwTksDtBbLe",
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
      "Thu, 30 Dec 2021 01:55:47 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxiMTOQSuVNGhBn; path=/; expires=Fri, 30 Dec 2022 01:55:47 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      { id: "recTCjLxtm3EG5zmV", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5915f4bc33014c5bfcac8f3d6a59d959127e91061d42a32f73011b96d3317c99f92264c5bf6ddcded26ba07c117dfc2c9ef9e9c73d313cb2b63eb96b0a79e889a3014568bb7fcdda9d9f54ddaa9351993ade012999e14a0788096a039ea2fe09d29bc2ab9252c4e2f512abd7346232ca1e432d0770dd7a3c7873c4c788bc2ceb9a665d3e97ebf8f5eadf10d5863a2ca28724087ca7270bcce3ed06408e55b7baf73de6d8add3cc9bae52258710502cd4a2b4047921b0db6be3ab71b137d0c9c2134ca8fd0d92b2b3100094de2499c4c6674456396a6ec228d28a59ba1e5d658e5259c8a879e832aa175b7a616613bff9df5e753bf069e7f07b6464adf60a4b6e19500b906e971aa80e2d4de78ed08a378d65f1f186efeb895c3f3e113b77e6c5e3c020000",
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
      "Thu, 30 Dec 2021 01:55:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQsHDWk9rGLisLW; path=/; expires=Fri, 30 Dec 2022 01:55:47 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recBBDfwTksDtBbLe",
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
      "Thu, 30 Dec 2021 01:55:47 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwi1YcZKy86QJEbI; path=/; expires=Fri, 30 Dec 2022 01:55:47 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [{ fields: { Name: "Someone", f_number: 3 } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550414ec33010fc4ae5739b3a2911954f2870426d4050381421b449b6d492ed8d1c5b8156fd3b765a097aeb85e3eececccecc9e59acc9361d136f7b261b26e242bbcd52d7845f5de1b33b36661b892a62f6ac048d01f44c1ac9603c7d8077547a5da16522cdafe3ca9cc6591c2aef1c99485650a10aec8716cde8e56911e8dec6c5d6b9b613d369dff7c9a725df82254a6ad2ec10156a8be0b029bea3c860d277f6d12c70b72eb7f3acd8dddf0629d420a35865259844057f609b9b73b93133c70045048d1647d0d997951c0019cfd2499a4d667cc55391e7e26a9e70ced743e40d59ed15fc1611720f07059d5b52234361ff6df7efab4b3c5b52cab7d152d7622d41bd82f2915542792a80bc714cf0305cd8c5e1fdf003c3be6e8342020000",
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
      "Thu, 30 Dec 2021 01:55:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwR0Hz68nMkbWPWt; path=/; expires=Fri, 30 Dec 2022 01:55:48 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recTCjLxtm3EG5zmV")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5915f4bc33014c5bfcac8f3d6a59d959127e91061d42a52f7b017b96def5c247f4a9a50edd87737e926ba07c117dfc2c9b927bf737320bc218c18accbd55bfe6ee5e2f62e1de4864cc98ea3683ac20ea40089deb40685417f016775e1648586b038bd0e52e5acd52a98055428bcfba14535797ecafd843341d85bdb766c3eeffb3e7a35dab560b48e6a2dc93124d406c162937d849011ca75e651e5386c8bfd32c986f5ca47a1041ec22ac3414502b502d3dc5cc64d893a0167c134c94fa68b574a3e1a129ac4b338992d68496396a6ec2a8d28a5dbb1e54e1be9049c8bfb9ea32aa0b3f7bae17e3bffcdfaf3a95f8197dfc0460be1da80d4b55873101b102e4c15509cdb6ba72c61349cd5d707fa9b3f6ee5f809597d8c9a2e020000",
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
      "Thu, 30 Dec 2021 01:55:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSd3xGcEHqaM66S; path=/; expires=Fri, 30 Dec 2022 01:55:48 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recBBDfwTksDtBbLe")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a814828271472aa42402870a890d026d9100bc71b39b602adfa77ec1489f650890b47ef8c676766f74c342c611aeb34cddaa9fc1833935639b2256b05ca6664c99e15d0a3236da8538b8c66ec0daca1c2f6156a968471ec475ad45d899fc6515fd54caaac31a4bc84840aa5031e06548be7a7dcc156fb4167cc3026ebf5344dc1bb263b80260a6aead9c12bd41ac160937e7991d9aa1df5a3ca71b72dba9b28dd6dee9c14f620bc58a505a8402229d0cdedb9dc92a9638cd49316f99174b6a5143321e251b80aa3d5152f7998c471721d069cf3ed1ca925dd5b092775b8f433226134f7d408d7db7ffb3d5d75d174f46b5a939476f096c6016b01f205a4f5bf0a287e1a20abdce1b87bfcb18cc3372e25d7ab3b020000",
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
      "Thu, 30 Dec 2021 01:55:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPGNx0keJkC3cW5; path=/; expires=Fri, 30 Dec 2022 01:55:48 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550414ec33010fc4ae5739b3a2911954f2870426d4050381421b449b6d492ed8d1c5b8156fd3b765a097aeb85e3eececccecc9e59acc9361d136f7b261b26e242bbcd52d7845f5de1b33b36661b892a62f6ac048d01f44c1ac9603c7d8077547a5da16522cdafe3ca9cc6591c2aef1c99485650a10aec8716cde8e56911e8dec6c5d6b9b613d369dff7c9a725df82254a6ad2ec10156a8be0b029bea3c860d277f6d12c70b72eb7f3acd8dddf0629d420a35865259844057f609b9b73b93133c70045048d1647d0d997951c0019cfd2499a4d667cc55391e7e26a9e70ced743e40d59ed15fc1611720f07059d5b52234361ff6df7efab4b3c5b52cab7d152d7622d41bd82f2915542792a80bc714cf0305cd8c5e1fdf003c3be6e8342020000",
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
      "Thu, 30 Dec 2021 01:55:49 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjet4Oz74vMgfEx; path=/; expires=Fri, 30 Dec 2022 01:55:49 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd925f4f833014c5bfcad2e78d01135d78320c63b230348a7b981a53a008da3fa4b4616ee1bbdbb2996d1193c5c4c4ec8df61ecebde7f6b7061c258ca715701fd7a04881ab2f3ccfcfeae8bdf285170708f4415620ac356b1042829468ca72daf3595b7b8152b050921871e05a8ea3af7891e4115a0a257da2ad28964230aa2d308c1156859b12d1dec35da0ca92eb8b5c88b27287c3baae8d57ce6409396346c20868b443c2111428f53eb4493baaacf82d0dd06a11e663db5b4d27ca0a115868b39817901a18310a797a7968d7077413c3d3a25eb0111d74898a56609bb635b0ecc1c88c4ccb751cf7cc324cd35cb49132c689c4706f1d2a7d5bc1b0123396166a6f7f3def7eab1f87b677437386b12cf54855899202e239c452ff15c270bb0126a97a38531d8e5c46d3dfb1134dde82a520a3ab6b6745e69dec40dac5cdf92951e27452a282ab9cff9290f16f08d1dff4eb018fc0c5f98e0b11d98c240c2d2b4fda7e172ef78ca8345dc45cecf71f9d123ee32e7cb68b50b94f87a023a0d9fa36cfcd2722b33afaad060000",
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
      "Thu, 30 Dec 2021 01:55:49 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtf1E5EwKgh7BeW; path=/; expires=Fri, 30 Dec 2022 01:55:49 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "407",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "recBBDfwTksDtBbLe",
      "recTCjLxtm3EG5zmV",
      "recmtfMmcoexsBu2D",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f24e4e2e69e521d9c52e254e493ea94ab53a3855863867f95494e41abbba9b56e586e153995b92e69b9b9c9f5a51ec546ae4a2541b5b0b00680a8e008b000000",
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
      "Thu, 30 Dec 2021 01:55:49 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRs5vyx3gekiRjb; path=/; expires=Fri, 30 Dec 2022 01:55:49 GMT; domain=.airtable.com; samesite=none; secure",
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
