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
      "Sat, 08 Jan 2022 00:08:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcODKh80yrELjec; path=/; expires=Sun, 08 Jan 2023 00:08:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzmyVAJr8L3TStV; path=/; expires=Sun, 08 Jan 2023 00:08:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brws5FcWBoGkFqgnT; path=/; expires=Sun, 08 Jan 2023 00:08:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwY2pD8Ap199m7UF; path=/; expires=Sun, 08 Jan 2023 00:08:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEJBFnKdI6mbBPk; path=/; expires=Sun, 08 Jan 2023 00:08:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwp9g8UxCRJ6AaF3; path=/; expires=Sun, 08 Jan 2023 00:08:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591c14ec33010447fa5f2b94ddd0022ca0985135508a82a481421b449368d9163476b5b8556f977ecb4077aeb85a3c7cfb3b3e30323ac34d586a5ef07266a9606011a23dbbc85af873784159bb246a00ccc8115d0a18796a030e89fe0ac2e5c5722b174717b152423d456622e14aef1db7ab8453ac2a5b356ab6023a144e9af9e7a54939755eeaf1d05a1b5b637e97cbedbeda22d69d703691d55ba634370a808c1629dfd049331ae33f4ac72dc6f8a3689b3fdf2de5b610722989524404512b502aaefceeda64c1d57c90234c98fd0d994b5188198c7f18c2f663c59739ef224bdb98e38e79b71a54653e7249c2af10d8caa04631f752d7c6fff9df5efa84b029396d2f52192e9b112205f41baf0aa80e2b4bd76ca7f1bf7870b8b183e865f4ec4435749020000",
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
      "Sat, 08 Jan 2022 00:08:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwe30p5Tq1jSnonw; path=/; expires=Sun, 08 Jan 2023 00:08:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591c14ec33010447fa5f2b94ddd0022ca0985135508a82a481421b449368d9163476b5b8556f977ecb4077aeb85a3c7cfb3b3e30323ac34d586a5ef07266a9606011a23dbbc85af873784159bb246a00ccc8115d0a18796a030e89fe0ac2e5c5722b174717b152423d456622e14aef1db7ab8453ac2a5b356ab6023a144e9af9e7a54939755eeaf1d05a1b5b637e97cbedbeda22d69d703691d55ba634370a808c1629dfd049331ae33f4ac72dc6f8a3689b3fdf2de5b610722989524404512b502aaefceeda64c1d57c90234c98fd0d994b5188198c7f18c2f663c59739ef224bdb98e38e79b71a54653e7249c2af10d8caa04631f752d7c6fff9df5efa84b029396d2f52192e9b112205f41baf0aa80e2b4bd76ca7f1bf7870b8b183e865f4ec4435749020000",
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
      "Sat, 08 Jan 2022 00:08:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLZaEL7IoMUDH4G; path=/; expires=Sun, 08 Jan 2023 00:08:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591c14ec33010447fa5f2b94ddd0022ca0985135508a82a481421b449368d9163476b5b8556f977ecb4077aeb85a3c7cfb3b3e30323ac34d586a5ef07266a9606011a23dbbc85af873784159bb246a00ccc8115d0a18796a030e89fe0ac2e5c5722b174717b152423d456622e14aef1db7ab8453ac2a5b356ab6023a144e9af9e7a54939755eeaf1d05a1b5b637e97cbedbeda22d69d703691d55ba634370a808c1629dfd049331ae33f4ac72dc6f8a3689b3fdf2de5b610722989524404512b502aaefceeda64c1d57c90234c98fd0d994b5188198c7f18c2f663c59739ef224bdb98e38e79b71a54653e7249c2af10d8caa04631f752d7c6fff9df5efa84b029396d2f52192e9b112205f41baf0aa80e2b4bd76ca7f1bf7870b8b183e865f4ec4435749020000",
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
      "Sat, 08 Jan 2022 00:08:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEf1SQ5LxG4vCgn; path=/; expires=Sun, 08 Jan 2023 00:08:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591c14ec33010447fa5f2b94ddd0022ca0985135508a82a481421b449368d9163476b5b8556f977ecb4077aeb85a3c7cfb3b3e30323ac34d586a5ef07266a9606011a23dbbc85af873784159bb246a00ccc8115d0a18796a030e89fe0ac2e5c5722b174717b152423d456622e14aef1db7ab8453ac2a5b356ab6023a144e9af9e7a54939755eeaf1d05a1b5b637e97cbedbeda22d69d703691d55ba634370a808c1629dfd049331ae33f4ac72dc6f8a3689b3fdf2de5b610722989524404512b502aaefceeda64c1d57c90234c98fd0d994b5188198c7f18c2f663c59739ef224bdb98e38e79b71a54653e7249c2af10d8caa04631f752d7c6fff9df5efa84b029396d2f52192e9b112205f41baf0aa80e2b4bd76ca7f1bf7870b8b183e865f4ec4435749020000",
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
      "Sat, 08 Jan 2022 00:08:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcKGI0k5gxXTEFn; path=/; expires=Sun, 08 Jan 2023 00:08:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTPHjlzYTpFPTVd; path=/; expires=Sun, 08 Jan 2023 00:08:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591c14ec33010447fa5f2b94ddd0022ca0985135508a82a481421b449368d9163476b5b8556f977ecb4077aeb85a3c7cfb3b3e30323ac34d586a5ef07266a9606011a23dbbc85af873784159bb246a00ccc8115d0a18796a030e89fe0ac2e5c5722b174717b152423d456622e14aef1db7ab8453ac2a5b356ab6023a144e9af9e7a54939755eeaf1d05a1b5b637e97cbedbeda22d69d703691d55ba634370a808c1629dfd049331ae33f4ac72dc6f8a3689b3fdf2de5b610722989524404512b502aaefceeda64c1d57c90234c98fd0d994b5188198c7f18c2f663c59739ef224bdb98e38e79b71a54653e7249c2af10d8caa04631f752d7c6fff9df5efa84b029396d2f52192e9b112205f41baf0aa80e2b4bd76ca7f1bf7870b8b183e865f4ec4435749020000",
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
      "Sat, 08 Jan 2022 00:08:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwssInLv6BJSc2TC; path=/; expires=Sun, 08 Jan 2023 00:08:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:08:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwybnw8OupMJ1XWS; path=/; expires=Sun, 08 Jan 2023 00:08:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recafslhLhajIYeaR",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5514d4fc24014fc2b64cf50962a427a32f524a9d510341163cc6bfb4ad76c779bfd080ae1bfbbaf902807132fde36f366e7cdccdb3383a5369565c9cb9e898a2504406d659335f07efb8cb06443560b94c4d9b31c5a0ca4052824fc0dbcd3b96f0b342c99cc2e08b2426d246642e10a3f5c20fbae028755cf2fbc735a919284026598de77a8068fcb2c8cbd21a071aeb3c978bcdd6ea38dd1be03a37554ea961d48a134486ae92789f48ebd350f2ac3dd3a6fe671ba5bdc04296c4190586104a848a25660aaeb73b92153c734299106d99174b665257a42cce378c427233e5f719ef07932bd8c38e7eb3e52ad4deb259c5a0925f4a804ebee74254275ffedf5e7aa5f0d5f7d1b365a4adf9125db6129403e81f4f42b87fc945e7b152ec7e9ad4ed79d46b330fb632f87d7c317a4ff619a5b020000",
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
      "Sat, 08 Jan 2022 00:08:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw4LYETKg1QYDrOF; path=/; expires=Sun, 08 Jan 2023 00:08:56 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c16ec2300cfd15943394506d50f534b149db50d7210468629aa6b43510298dab3451372afe7d71e100372e3bdaeff9f9f9b96506723445cde2cf96c982c5d450a15b8c3f562f959cbf3ecf589f6d2528e2b42c152578d20cf7baf78440d8b7701653576660583c9adc514b9fcb3115b5d43b0589d4b0841feba76d83dd60e6ac454db24a64a03cf25e81eead1689879da1c6dedaaa8e87c3a669829d4157098318e458b22329e406848562fa4b229d7d579bb94ee0b049f751383dcc1ebd149442925866a4d08102d4c2140fd7727da64fa74d89d44b4ea4ab2d4bd911421e86033e1af068c979cca3f87e1270ce37dd495b34a553e222229f48872851db372ca4cff2bffd5eaebac5b441a55c4596ea0a7229d45a284753a948cf09a0d3fe73dc17378671fc3afe017503c1715d020000",
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
      "Sat, 08 Jan 2022 00:08:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLWh8idsPGqcm22; path=/; expires=Sun, 08 Jan 2023 00:08:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recafslhLhajIYeaR")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7367503a5554e289ca842405540a217b449368d91635b7e28d0aaff8e9d46821e90b870b366c7b333b347c26a92108d153486b7590beff7af085b32250d435e1b921c490e1d7ad2060406fc0d9c95b9eb4ad42459acae026498d873cc98c0023fac273b5583c57ae097ce5a2982128712b99f3e2a1493e76de6c74e07a0b55699643eeffb3eda6be9146829a34a76e414142a8d412dfd0c22836367f493c8f0b0cbdb759c1e36775e0a3b6041acd40c44c4510ad0f5eda5dc9488739a349026d99974b1a5600321a6713ca38b195d179426749d2caf234ae96e88d448dd390e632bbe8401e560ec83ac99afeebfbdfe5cf5abe19b6fc35a72ee54b06414560cf80b70177ee5908fe9a513fe7234bcc578dd65b4f2b33ff672fa02bfbc4eae4d020000",
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
      "Sat, 08 Jan 2022 00:08:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwmNrx5AxfWIhHmP; path=/; expires=Sun, 08 Jan 2023 00:08:57 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394506d50f534b149db50d7210468629aa6b43510298dab3451372afe7d71e100372e3bdaeff9f9f9b96506723445cde2cf96c982c5d450a15b8c3f562f959cbf3ecf589f6d2528e2b42c152578d20cf7baf78440d8b7701653576660583c9adc514b9fcb3115b5d43b0589d4b0841feba76d83dd60e6ac454db24a64a03cf25e81eead1689879da1c6dedaaa8e87c3a669829d4157098318e458b22329e406848562fa4b229d7d579bb94ee0b049f751383dcc1ebd149442925866a4d08102d4c2140fd7727da64fa74d89d44b4ea4ab2d4bd911421e86033e1af068c979cca3f87e1270ce37dd495b34a553e222229f48872851db372ca4cff2bffd5eaebac5b441a55c4596ea0a7229d45a284753a948cf09a0d3fe73dc17378671fc3afe017503c1715d020000",
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
      "Sat, 08 Jan 2022 00:08:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwr9OpTCz2VwmPcj; path=/; expires=Sun, 08 Jan 2023 00:08:57 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5514d4fc24014fc2b64cf50962a427a32f524a9d510341163cc6bfb4ad76c779bfd080ae1bfbbaf902807132fde36f366e7cdccdb3383a5369565c9cb9e898a2504406d659335f07efb8cb06443560b94c4d9b31c5a0ca4052824fc0dbcd3b96f0b342c99cc2e08b2426d246642e10a3f5c20fbae028755cf2fbc735a919284026598de77a8068fcb2c8cbd21a071aeb3c978bcdd6ea38dd1be03a37554ea961d48a134486ae92789f48ebd350f2ac3dd3a6fe671ba5bdc04296c4190586104a848a25660aaeb73b92153c734299106d99174b665257a42cce378c427233e5f719ef07932bd8c38e7eb3e52ad4deb259c5a0925f4a804ebee74254275ffedf5e7aa5f0d5f7d1b365a4adf9125db6129403e81f4f42b87fc945e7b152ec7e9ad4ed79d46b330fb632f87d7c317a4ff619a5b020000",
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
      "Sat, 08 Jan 2022 00:08:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwW80bqJFgXy7xtw; path=/; expires=Sun, 08 Jan 2023 00:08:57 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recafslhLhajIYeaR",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6ea362d893c49325462955b04564924cccca6637ec1f820df9eeeea605ed41f0e2711ebf79f3de0c4463a9746508db0f84578405016a239aac818fbb17840d99939aa308cc407268d1436b9018f4377056e5ae2d5013b6babe0852e1ac5532c0020a149e7ee850ce9e3699df703a088db59d61cb65dff7d1bb56ae03ad5454aa968cc1a1d40816abf433984ca19cd18f32c3c32e6f92383dac6fbd15b6c08359a139c848a092a0ab9b73bb3991c7c0698066d9113abbb2e51310d3385ed0d582265b4a194dd8d5654429dd4d2d6ba55b27e054dcf79c5401c6deab8afbeffc77d69fa77e0d9c7c07d64a08d78548a6c392837806e1c2560ef9a9bd72d21246fdf0c7478cafe317ee4543012f020000",
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
      "Sat, 08 Jan 2022 00:08:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOw5uCuk6ScDiAw; path=/; expires=Sun, 08 Jan 2023 00:08:58 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "294",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recafslhLhajIYeaR")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6ea362d893c49325462955b0973249266665b313f60fc5967e7777d382f62078f1388fdfbc796f0e4c364c308335b4567545071f0f6f082b3665ad44d558260eac841e03b4048d51df827754fabe42c3c4e2f62a4a95778e74841554a802fd34a09ebcac8ab0e14d143ae7062be6f3dd6e97bc1bf20318a2a4a69e1da3436d101c36f967341943796b9e7581fb4dd96569be5fde072bec4146b3ca48d08942d2609abb4bbb29d3a7c0798426c509bab8b2962390f2349df1c58c676bce05cfc4cd75c239df8c2d5b32bd57702e1e7a8eaa02eb1ea991e13bff9df5e7a95f0367df810d29e58718c90e584b50afa07cdc2aa13cb727af1d133c0c7f7cc4f10bd890f30921020000",
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
      "Sat, 08 Jan 2022 00:08:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZeoxNUWlmA9TmN; path=/; expires=Sun, 08 Jan 2023 00:08:58 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "286",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6ea362d893c49325462955b04564924cccca6637ec1f820df9eeeea605ed41f0e2711ebf79f3de0c4463a9746508db0f84578405016a239aac818fbb17840d99939aa308cc407268d1436b9018f4377056e5ae2d5013b6babe0852e1ac5532c0020a149e7ee850ce9e3699df703a088db59d61cb65dff7d1bb56ae03ad5454aa968cc1a1d40816abf433984ca19cd18f32c3c32e6f92383dac6fbd15b6c08359a139c848a092a0ab9b73bb3991c7c0698066d9113abbb2e51310d3385ed0d582265b4a194dd8d5654429dd4d2d6ba55b27e054dcf79c5401c6deab8afbeffc77d69fa77e0d9c7c07d64a08d78548a6c392837806e1c2560ef9a9bd72d21246fdf0c7478cafe317ee4543012f020000",
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
      "Sat, 08 Jan 2022 00:08:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQDH18ijKaa7ZpX; path=/; expires=Sun, 08 Jan 2023 00:08:59 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "294",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "%7BName%7D%3D%22changed%20Name%22",
    maxRecords: "1",
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
      "Sat, 08 Jan 2022 00:09:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwW6vHyFsLIw1scS; path=/; expires=Sun, 08 Jan 2023 00:09:00 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394506d50f534b149db50d7210468629aa6b43510298dab3451372afe7d71e100372e3bdaeff9f9f9b96506723445cde2cf96c982c5d450a15b8c3f562f959cbf3ecf589f6d2528e2b42c152578d20cf7baf78440d8b7701653576660583c9adc514b9fcb3115b5d43b0589d4b0841feba76d83dd60e6ac454db24a64a03cf25e81eead1689879da1c6dedaaa8e87c3a669829d4157098318e458b22329e406848562fa4b229d7d579bb94ee0b049f751383dcc1ebd149442925866a4d08102d4c2140fd7727da64fa74d89d44b4ea4ab2d4bd911421e86033e1af068c979cca3f87e1270ce37dd495b34a553e222229f48872851db372ca4cff2bffd5eaebac5b441a55c4596ea0a7229d45a284753a948cf09a0d3fe73dc17378671fc3afe017503c1715d020000",
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
      "Sat, 08 Jan 2022 00:09:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTe6yfD9rqiyz2B; path=/; expires=Sun, 08 Jan 2023 00:09:00 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recafslhLhajIYeaR",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recl2uR6XUHpiPIGJ",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd524d4f023114fc2ba4673eca8a823d113451c8ba1a024631c63c761f6c4db7dd74dba012febbed0241cc1eb878f1d64ee74da7d359138db1d24941d8cb9af084300fc0a2106998c2fbf019614cea64c15178ce9a4490a123c529c82526b572ebcedfc01a15d96c8e9ab076f7cc43736b8c927e48c01c859bbacf51d6a6e3d04d58ed81d498bc60add66ab56a2eb5b23968a59ab1cac8c62bc41ac16032f8f422a5395be80719e2d72c4a7bc1e06b74e5a43003eec5e69a836c0a541274d23f96ab13b9353ef0a45ab8251ddd32e12521a041d0a0ed06ed4d2865b4c7ce3b4d4ae9ac7ce542e9cc0af815807b6f792aa030772ae12eadbff6fcf3aa6ae3978cb60fc6b512c2e6de529163cc413c82b07e2a82689782b2d21046fdbae0722930e41227f8e14062b0300e2ba5f6d657a9eae30764b9c0fd8f9d98e4a67ea89a08ecf8e2697a9bf387e1cda8aa6a2395cadab5aaaa59c74372b7bda8741e90ff54c56e5515f701b93cfe570d3594a5639d13aab54b66f3baf906a46a6da0d3040000",
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
      "Sat, 08 Jan 2022 00:09:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8fgQTBCVbd38Jq; path=/; expires=Sun, 08 Jan 2023 00:09:00 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "395",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recafslhLhajIYeaR")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736750388e253554ea010505590e8056d926d63b4b1233f94d2aaff8e9d52f110072edcecd999d9f178cf64c5043358c2da529dd5f07af38cb06043b69648956562cf72683090ca1ad406ab417f0df317f04ee7be29d03031b93c8b50e19dd32a8a080aa4a0ba6f510d1e175950781381dab9d68af1b8ebba6463b46fc1689d94ba6187e8501a0487d5fc2d9af4e1bc350f2ac3dd2aafa7e97c777b1dacb00119cd0a234125845a81a966dfed864c1d83cf2369901d49dfb62c654f48799a8ef864c4a74bce059f8a8bf38473beea5fb9d6a6f1043f0a08efeda704d6dde94a86b6fe3bf3d755bf07bf127cf219dc6822dfc648b6c552023d01f9a8ca21ff68417be598e0f16ca5da106652e112b701640ead0b586f758aded57a865b685ac2d38ffdb1c9c33b55eadc4b6a020000",
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
      "Sat, 08 Jan 2022 00:09:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8hedmvnOh5TIS2; path=/; expires=Sun, 08 Jan 2023 00:09:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "323",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recl2uR6XUHpiPIGJ")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394503160394d6cd236d47508c1347199dcd6d048695ca589d840fcfb9282349076d86547fb3d3f3f3f1f982c9860067315bbc5e87df554cbf9f3e38c75d946a22a1a260e2c850a3d6946a5ee3c1006ec039ca5d455191a2606e36168e973390a4523f5566122352ef1d3fae9b81dcb9cb5a483a8820c95efbfd6a83bab45e2616742a3b4b66e44bfbfdbeda2ad215783218a72aad83128e406c16231fd0a22ad79d798b94e70bf4ecb493cddcfeebd14562083586624e848216930c5ddb55c97e9d361d340ea2427d2d596a56c09318fe31e1ff4f864c9b9e01371338e38e7ebf6a40d99ca29b808c8e7d1220a1afb4285f449feb7dfcb55bf9bbe157cf063da9052ae0e969a1a7309ea0d940b5329a4e704c869ff37deb2c1fa773231f4c81f93397e0300c77a165a020000",
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
      "Sat, 08 Jan 2022 00:09:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwW9WhuLz01ItR15; path=/; expires=Sun, 08 Jan 2023 00:09:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "321",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "%7BName%7D%3D%22changed%20Name%22",
    maxRecords: "1",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736750288e253554ea010505590284268936c1323c78efc504aabfe3b76da0a8a3870e166cfcecc8ec75ba2b150ba3484bd6c092f090b00ac8ca8d31ade6f9e11e66448561c45e06c49060d7a525183acb01cf4573f7f036755e69a1c3561f1e559807267ad9241242047e155f72dcac1e33cf50aa703505bdb1a361e775d17555ab916b45251a11ab20b0e8546b058ce3e82491fce19fd2053dc2cb37a92cc36b7d7de0a1be0c12cd71c64245049d0e5f4d46e48e43ef82c9006e99e74b265c17b4242936444e3119d2c286574c22ece234ae9b27fe54ae9c609f851807f6f3f1560ec9d2ab96febbf337f5ff57bf02b46e3afe05a09e1da10c9b45870104f205c5065901d5a504e5ac268381b2e2b812997b8c0b5078945633dd65b1da377b59ae21a9a56e0f1c7fed8e4ee75f7090b91380178020000",
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
      "Sat, 08 Jan 2022 00:09:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyLgWjhruaqNxkf; path=/; expires=Sun, 08 Jan 2023 00:09:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "332",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recafslhLhajIYeaR")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736750388e253554ea010505590e8056d926d63b4b1233f94d2aaff8e9d52f110072edcecd999d9f178cf64c5043358c2da529dd5f07af38cb06043b69648956562cf72683090ca1ad406ab417f0df317f04ee7be29d03031b93c8b50e19dd32a8a080aa4a0ba6f510d1e175950781381dab9d68af1b8ebba6463b46fc1689d94ba6187e8501a0487d5fc2d9af4e1bc350f2ac3dd2aafa7e97c777b1dacb00119cd0a234125845a81a966dfed864c1d83cf2369901d49dfb62c654f48799a8ef864c4a74bce059f8a8bf38473beea5fb9d6a6f1043f0a08efeda704d6dde94a86b6fe3bf3d755bf07bf127cf219dc6822dfc648b6c552023d01f9a8ca21ff68417be598e0f16ca5da106652e112b701640ead0b586f758aded57a865b685ac2d38ffdb1c9c33b55eadc4b6a020000",
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
      "Sat, 08 Jan 2022 00:09:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwf02VigHmB9zlX7; path=/; expires=Sun, 08 Jan 2023 00:09:01 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "323",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14e023110fd15d2332c6583803d193451c9ba1202c6608c99dd1da049b7b3e9b64121fcbbed4222241ebc789c796fdebc79b36706733245cdc4db9ec98289d050b19b0d5e170f959c3ede4f589bad24aac0d9b3144af4a4096d74eb8e30601fe02ca5aeccd030d11bf6434b9fca41286aa9d70a13a9718e9fd64fc7cd58e6ac251d441564a87cffb942dd5acc120f3b131a1b6bab5a74bbdbed365a1b721518a228a7921d82426e102c16e3af20d29877b599ea0477cb74338ac7bbc9ad97c2126410cb8c041d29240da6b8b9946b337d3c6c1c48ade448bad832970d21e671dce1bd0e1fcd39177c24ae8611e77cd99cb422533a056701f93c1a44416d9fa8903ec9fff67bbeea77d3d782f77e4c1b52ca55c1525d612e41bd8072612a85f4940039edffc61b3658ff4e26fa1ef9633287f7c337131bee3268020000",
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
      "Sat, 08 Jan 2022 00:09:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwIcxy1DzCx6Go9o; path=/; expires=Sun, 08 Jan 2023 00:09:02 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "329",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "%7BName%7D%3D%22changed%20Name%22",
    maxRecords: "1",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736750288e253554ea010505590284268936c1323c78efc504aabfe3b76da0a8a3870e166cfcecc8ec75ba2b150ba3484bd6c092f090b00ac8ca8d31ade6f9e11e66448561c45e06c49060d7a525183acb01cf4573f7f036755e69a1c3561f1e559807267ad9241242047e155f72dcac1e33cf50aa703505bdb1a361e775d17555ab916b45251a11ab20b0e8546b058ce3e82491fce19fd2053dc2cb37a92cc36b7d7de0a1be0c12cd71c64245049d0e5f4d46e48e43ef82c9006e99e74b265c17b4242936444e3119d2c286574c22ece234ae9b27fe54ae9c609f851807f6f3f1560ec9d2ab96febbf337f5ff57bf02b46e3afe05a09e1da10c9b45870104f205c5065901d5a504e5ac268381b2e2b812997b8c0b5078945633dd65b1da377b59ae21a9a56e0f1c7fed8e4ee75f7090b91380178020000",
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
      "Sat, 08 Jan 2022 00:09:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdIQI8p1xK1Bpuc; path=/; expires=Sun, 08 Jan 2023 00:09:02 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "332",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    filterByFormula: "%7BName%7D%3D%22something%20else%20altogether%22",
    maxRecords: "1",
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
      "Sat, 08 Jan 2022 00:09:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJVgSanndbQBYys; path=/; expires=Sun, 08 Jan 2023 00:09:02 GMT; domain=.airtable.com; samesite=none; secure",
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
  .delete("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ "records%5B%5D": ["recafslhLhajIYeaR", "recl2uR6XUHpiPIGJ"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f28969c539193e1989599e91a989414ab53a3855e61895069945847a14640678ba7b29d5c6d602000b61a23561000000",
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
      "Sat, 08 Jan 2022 00:09:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw09FFaif2ra19z9; path=/; expires=Sun, 08 Jan 2023 00:09:03 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recafslhLhajIYeaR")
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
      "Sat, 08 Jan 2022 00:09:03 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJ0Z6JtSxxYTENJ; path=/; expires=Sun, 08 Jan 2023 00:09:03 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recl2uR6XUHpiPIGJ")
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
      "Sat, 08 Jan 2022 00:09:03 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwo5skcecKmUEYa8; path=/; expires=Sun, 08 Jan 2023 00:09:03 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwDM920JJbWhRZHA; path=/; expires=Sun, 08 Jan 2023 00:09:04 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSXoCRn7zcTBKSB; path=/; expires=Sun, 08 Jan 2023 00:09:04 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1mtxpt3Vwur6iI; path=/; expires=Sun, 08 Jan 2023 00:09:04 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b553c16ee23010fd95c87b85d40909d09c5aba5257154bab2edd43976ae52403b1ead891632f50c4bfafc70101d21e7a592917bf799e797ef3b2231a0aa5cb9664bf7684972443e0e55bfa38bcbdbbbd4ffe3c2511e9912507819c1d99b11a1ce9415532f8aa006bbf99356a66eb1c34c9a2518a505141f19eab0dc98cb6e011ab35c8624bb298868304a19219ec15d338ea47713f1e92233ae7f565651ec519a5ee0b29a5af1dcf6a66b892244bc6d71411a81917ee5a0d37b0617523202c54edc9b515860b2e610e1be3283c78976abd9008b52786bbf203041406fd20cf50bad2bd0690e40d39f2f0c85118e1b1015d8074ed068370e0814a49383a4186d12848d3d43d6090f811a857ae9c47fec08bea20e64b05ac04bd90fd20b742805948cf6f1d5bc0f4a47ac9251362db0b58a0616505d381dfcc19bb93efb81361bbed588d9e54c6346d7675b55eafc39552ab336f726b0cdab82382e580e4c70664f0f23c75e57fdcd6ca364c2be51becfd6e35b8a595932d36f121b2ad7e9253f8789d55e378f2f170e75a1dd7936bce64284049a6cb9bcb763d22bb804d90144c3bd2c5945336e23e8dfa743cc7605c67343d6563a9b4db273b0baacba5af08d69aefaae4ceb7ffadf77cd467446b25846d5052db40c199f8c9708799fbe766070794c5b85177f8a419fbb7fd5f8ab85fffe3030000",
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
      "Sat, 08 Jan 2022 00:09:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTcomJl1f2puOqD; path=/; expires=Sun, 08 Jan 2023 00:09:04 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "511",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553c16ee23010fd95c87b85d40909d09c5aba5257154bab2edd43976ae52403b1ead891632f50c4bfafc70101d21e7a592917bf799e797ef3b2231a0aa5cb9664bf7684972443e0e55bfa38bcbdbbbd4ffe3c2511e9912507819c1d99b11a1ce9415532f8aa006bbf99356a66eb1c34c9a2518a505141f19eab0dc98cb6e011ab35c8624bb298868304a19219ec15d338ea47713f1e92233ae7f565651ec519a5ee0b29a5af1dcf6a66b892244bc6d71411a81917ee5a0d37b0617523202c54edc9b515860b2e610e1be3283c78976abd9008b52786bbf203041406fd20cf50bad2bd0690e40d39f2f0c85118e1b1015d8074ed068370e0814a49383a4186d12848d3d43d6090f811a857ae9c47fec08bea20e64b05ac04bd90fd20b742805948cf6f1d5bc0f4a47ac9251362db0b58a0616505d381dfcc19bb93efb81361bbed588d9e54c6346d7675b55eafc39552ab336f726b0cdab82382e580e4c70664f0f23c75e57fdcd6ca364c2be51becfd6e35b8a595932d36f121b2ad7e9253f8789d55e378f2f170e75a1dd7936bce64284049a6cb9bcb763d22bb804d90144c3bd2c5945336e23e8dfa743cc7605c67343d6563a9b4db273b0baacba5af08d69aefaae4ceb7ffadf77cd467446b25846d5052db40c199f8c9708799fbe766070794c5b85177f8a419fbb7fd5f8ab85fffe3030000",
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
      "Sat, 08 Jan 2022 00:09:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwy0TrDLcn8BGC0y; path=/; expires=Sun, 08 Jan 2023 00:09:06 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "511",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553c16ee23010fd95c87b85d40909d09c5aba5257154bab2edd43976ae52403b1ead891632f50c4bfafc70101d21e7a592917bf799e797ef3b2231a0aa5cb9664bf7684972443e0e55bfa38bcbdbbbd4ffe3c2511e9912507819c1d99b11a1ce9415532f8aa006bbf99356a66eb1c34c9a2518a505141f19eab0dc98cb6e011ab35c8624bb298868304a19219ec15d338ea47713f1e92233ae7f565651ec519a5ee0b29a5af1dcf6a66b892244bc6d71411a81917ee5a0d37b0617523202c54edc9b515860b2e610e1be3283c78976abd9008b52786bbf203041406fd20cf50bad2bd0690e40d39f2f0c85118e1b1015d8074ed068370e0814a49383a4186d12848d3d43d6090f811a857ae9c47fec08bea20e64b05ac04bd90fd20b742805948cf6f1d5bc0f4a47ac9251362db0b58a0616505d381dfcc19bb93efb81361bbed588d9e54c6346d7675b55eafc39552ab336f726b0cdab82382e580e4c70664f0f23c75e57fdcd6ca364c2be51becfd6e35b8a595932d36f121b2ad7e9253f8789d55e378f2f170e75a1dd7936bce64284049a6cb9bcb763d22bb804d90144c3bd2c5945336e23e8dfa743cc7605c67343d6563a9b4db273b0baacba5af08d69aefaae4ceb7ffadf77cd467446b25846d5052db40c199f8c9708799fbe766070794c5b85177f8a419fbb7fd5f8ab85fffe3030000",
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
      "Sat, 08 Jan 2022 00:09:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwDEE8MZrvL5LVHK; path=/; expires=Sun, 08 Jan 2023 00:09:06 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "511",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recUH5O6ACAG4vP41",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e01c13d099868080e62c007d498bbede29a74bd4bd78a42f8efb4c3447830f1c5c7def3f5f4dcd33dd39891ce6b163fef99c859ec07abfbfefc6a3419ddf53e16bd90b5d946a0f4cc9e2550a283a654a8d62da1d7dec01a4a6c99a2667138e8fb911659b1c44fe3d017d540a9358694b79090a274c2bc42d55a3dce9c6cb51f14c65475dced6eb7dbe05d93ad4013051995ece01d328d60301f7f799326aaadf542cd70b74e8a6134de4d27ce0a4b10de2cd50254209114e8fce6d2aecdd4698db1875ab31374f1ca523440c4a3a8c3c30e1f2e398ff975ccfb01e77cddacb4215d5a096775b8ed1b45426d1e2817aeb7ffce7bfed4afa1073fa13549692b1fa9ae3013209f405a7f2b81e4bb01b2ca7d1c77873f9671783d1c0130f6c91349020000",
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
      "Sat, 08 Jan 2022 00:09:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwrdfzFb3WcImFlZ; path=/; expires=Sun, 08 Jan 2023 00:09:06 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "314",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recUH5O6ACAG4vP41")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551416ec23010fc0af219821341a13915a8d40aa50155d003aa546d92a5b1e47823c72e2d88bfd70e488543a55e7af4ce787666f6c044c162a6315f3f0e173793d9e461f0b11c84accbb60265d1b0f8c052a8d091e654aace3da1c7dec01a4a6d95a16671381afa911679b9c24fe3a8afaa2565d618525e424286d2018b1a5567fd9c38d86a3f288da99bb8dfdfed76c1bb265b83260a72aad8d12be41ac16031fdf222ad55dbe8a54a70bf49cb7134ddcf674e0a2b105e2cd30254209114e8e2ee5aaecbd429c6d4933ac98974b565255a42c4a3a8c7c31e1faf388ff96dcc8701e77cd346da92aeac848b3a5cfa1691d098272a84ebedbffd5eaefad5f4e8c7b426296ded2d3535e602e40b48eb7fa5909e1b20abdce1b87bfcb18ce337fa03c36a3b020000",
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
      "Sat, 08 Jan 2022 00:09:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwbCE4y8PV6evlsS; path=/; expires=Sun, 08 Jan 2023 00:09:07 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "305",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recUH5O6ACAG4vP41")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551416ec23010fc0af219821341a13915a8d40aa50155d003aa546d92a5b1e47823c72e2d88bfd70e488543a55e7af4ce787666f6c044c162a6315f3f0e173793d9e461f0b11c84accbb60265d1b0f8c052a8d091e654aace3da1c7dec01a4a6d95a16671381afa911679b9c24fe3a8afaa2565d618525e424286d2018b1a5567fd9c38d86a3f288da99bb8dfdfed76c1bb265b83260a72aad8d12be41ac16031fdf222ad55dbe8a54a70bf49cb7134ddcf674e0a2b105e2cd30254209114e8e2ee5aaecbd429c6d4933ac98974b565255a42c4a3a8c7c31e1faf388ff96dcc8701e77cd346da92aeac848b3a5cfa1691d098272a84ebedbffd5eaefad5f4e8c7b426296ded2d3535e602e40b48eb7fa5909e1b20abdce1b87bfcb18ce337fa03c36a3b020000",
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
      "Sat, 08 Jan 2022 00:09:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXu6XAlfLXGg67A; path=/; expires=Sun, 08 Jan 2023 00:09:07 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "305",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22Someone%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXe5SNCQ3h28tgB; path=/; expires=Sun, 08 Jan 2023 00:09:07 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUYz1YUZj6ZmO36; path=/; expires=Sun, 08 Jan 2023 00:09:08 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Someone%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSl5zGKYy37ZLr0; path=/; expires=Sun, 08 Jan 2023 00:09:08 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:08 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtevh7kvOv1TvGH; path=/; expires=Sun, 08 Jan 2023 00:09:08 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590314fc3301085ff4ae5b94ddd0cb47842412c21180405a122842ec9951a1c3b726c456994ff8e9d7668b72e485efcf4ddbbf7ae27060b6dca86b08f9e8892b020c8eeeefe4539fefedba53f4b32255b8132303de150a187525018f42f70567357e568085b2caf82943b6bb50ab0841ca5a71f6b5493d7e7cc4f3813849db575c3e6f3b66da36fa35d0d46eba8d01519824361102c9649174cc650ae314f2ac3fd86ef5671b24f6fbd15562082596e04a848a25660ca9b73bb295187c0498026d9013adbb2162310d3389ed1c58caed694327aed5f4429dd8c2db7da544ec2b1b8ef39aa121afba04be1aff3df594f575d12d868295d1d2235351602e41b4817a638f0637bed94258cfacf8587183e873f3f43a5a52f020000",
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
      "Sat, 08 Jan 2022 00:09:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwls4RYliM9xBKcT; path=/; expires=Sun, 08 Jan 2023 00:09:08 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:09 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUnzG1EyCGREU3c; path=/; expires=Sun, 08 Jan 2023 00:09:09 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94ddd0cb47842412c21180405a122842ec9951a1c3b726c456994ff8e9d7668b72e485efcf4ddbbf7ae27060b6dca86b08f9e8892b020c8eeeefe4539fefedba53f4b32255b8132303de150a187525018f42f70567357e568085b2caf82943b6bb50ab0841ca5a71f6b5493d7e7cc4f3813849db575c3e6f3b66da36fa35d0d46eba8d01519824361102c9649174cc650ae314f2ac3fd86ef5671b24f6fbd15562082596e04a848a25660ca9b73bb295187c0498026d9013adbb2162310d3389ed1c58caed694327aed5f4429dd8c2db7da544ec2b1b8ef39aa121afba04be1aff3df594f575d12d868295d1d2235351602e41b4817a638f0637bed94258cfacf8587183e873f3f43a5a52f020000",
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
      "Sat, 08 Jan 2022 00:09:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9lHI9sp9jyylk0; path=/; expires=Sun, 08 Jan 2023 00:09:09 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recUH5O6ACAG4vP41")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551416ec23010fc0af219821341a13915a8d40aa50155d003aa546d92a5b1e47823c72e2d88bfd70e488543a55e7af4ce787666f6c044c162a6315f3f0e173793d9e461f0b11c84accbb60265d1b0f8c052a8d091e654aace3da1c7dec01a4a6d95a16671381afa911679b9c24fe3a8afaa2565d618525e424286d2018b1a5567fd9c38d86a3f288da99bb8dfdfed76c1bb265b83260a72aad8d12be41ac16031fdf222ad55dbe8a54a70bf49cb7134ddcf674e0a2b105e2cd30254209114e8e2ee5aaecbd429c6d4933ac98974b565255a42c4a3a8c7c31e1faf388ff96dcc8701e77cd346da92aeac848b3a5cfa1691d098272a84ebedbffd5eaefad5f4e8c7b426296ded2d3535e602e40b48eb7fa5909e1b20abdce1b87bfcb18ce337fa03c36a3b020000",
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
      "Sat, 08 Jan 2022 00:09:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6ei3s4L1k8XsR8; path=/; expires=Sun, 08 Jan 2023 00:09:09 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "305",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22Someone%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwxdIfIuaFunj8m; path=/; expires=Sun, 08 Jan 2023 00:09:10 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94ddd0cb47842412c21180405a122842ec9951a1c3b726c456994ff8e9d7668b72e485efcf4ddbbf7ae27060b6dca86b08f9e8892b020c8eeeefe4539fefedba53f4b32255b8132303de150a187525018f42f70567357e568085b2caf82943b6bb50ab0841ca5a71f6b5493d7e7cc4f3813849db575c3e6f3b66da36fa35d0d46eba8d01519824361102c9649174cc650ae314f2ac3fd86ef5671b24f6fbd15562082596e04a848a25660ca9b73bb295187c0498026d9013adbb2162310d3389ed1c58caed694327aed5f4429dd8c2db7da544ec2b1b8ef39aa121afba04be1aff3df594f575d12d868295d1d2235351602e41b4817a638f0637bed94258cfacf8587183e873f3f43a5a52f020000",
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
      "Sat, 08 Jan 2022 00:09:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwk88Tmog7VZ2rMZ; path=/; expires=Sun, 08 Jan 2023 00:09:10 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e01c13d099868080e62c007d498bbede29a74bd4bd78a42f8efb4c3447830f1c5c7def3f5f4dcd33dd39891ce6b163fef99c859ec07abfbfefc6a3419ddf53e16bd90b5d946a0f4cc9e2550a283a654a8d62da1d7dec01a4a6c99a2667138e8fb911659b1c44fe3d017d540a9358694b79090a274c2bc42d55a3dce9c6cb51f14c65475dced6eb7dbe05d93ad4013051995ece01d328d60301f7f799326aaadf542cd70b74e8a6134de4d27ce0a4b10de2cd50254209114e8fce6d2aecdd4698db1875ab31374f1ca523440c4a3a8c3c30e1f2e398ff975ccfb01e77cddacb4215d5a096775b8ed1b45426d1e2817aeb7ffce7bfed4afa1073fa13549692b1fa9ae3013209f405a7f2b81e4bb01b2ca7d1c77873f9671783d1c0130f6c91349020000",
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
      "Sat, 08 Jan 2022 00:09:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOaSZS2PZcjsJV9; path=/; expires=Sun, 08 Jan 2023 00:09:10 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "314",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22Someone%22", maxRecords: "1" })
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
      "Sat, 08 Jan 2022 00:09:11 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPP611eyUV6dvxa; path=/; expires=Sun, 08 Jan 2023 00:09:11 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      { id: "reclyEKSnuNXkyJj7", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recUH5O6ACAG4vP41",
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
      "Sat, 08 Jan 2022 00:09:12 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlx7BHLipIBXNES; path=/; expires=Sun, 08 Jan 2023 00:09:12 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "reclyEKSnuNXkyJj7", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591d14bc33010c6ff9591e7ad4b2bb8d927a9f8526b159d2213916b7b73d134296942d946ff7773dd44f720f822e4217cf9dd77df5d76cc60a94dd5b2f879c744c56212e4e6f2ea5eb9fce96393becfd898ad044a62762c871a3d948242d25fc1599dbbba40c3e270764a52e1acd58a6009054a4fdf34a8460f7799af708684b5b54d1b4fa75dd7056f46bb068cd641a96bd6934369102c56c9864c8650ae35b72ac3ed325fcfa3649b5e782bac4190596104a840a25660aaf363bb3153fbc00941a36c0f1d755988018878144d7838e1f305e7313ff327e09c2f872957dad44ec261703fe7a04a68edb5ae84dfce7f67fdd9eab7c0e1c97760a3a5740d456a1b2c05c847908eaa72c80fd36ba72c8b39ddd5d707fa973f6ea57fe93f01c02c5ab73c020000",
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
      "Sat, 08 Jan 2022 00:09:12 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzWs74nNwU5cIv2; path=/; expires=Sun, 08 Jan 2023 00:09:12 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "304",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/", {
    records: [
      {
        id: "recUH5O6ACAG4vP41",
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
      "Sat, 08 Jan 2022 00:09:12 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3ROW7GYeR8ow0s; path=/; expires=Sun, 08 Jan 2023 00:09:12 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b550414ec33010fc4ae5739b3ae9a1c52714240ea80404a587a20a6d922db5647b23c7562055ff8e9d5682de7ae1b8bb33b3337360162bb275cbc4fb81c99a89b898add6faabb8377d99b529b231db495411736005680ca057d24866387d807754785da265229dcfe3ca9cc7591c4aef1c99485650a20aeca706cde8ed6519e8dec6c5deb9a615d369d775c9a725df80254a2ad2ec18152a8be0b0cebfa3c860d2b7f6d92cb1df14fb4596f70f77410a35c828565a092651c11fd8faf6526ecccc29401e41a3e50974f165250740c6b36cc2d3095fac3817fc46a4b38473be1922efc86aafe0b788907b382868dd23d53214f6df76ffbebac6b325a57c132db50d5612d41a948fac028a7301e48d638287e1ca2e8edbe30f0a94db2842020000",
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
      "Sat, 08 Jan 2022 00:09:13 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjS3USAtsKlDBlx; path=/; expires=Sun, 08 Jan 2023 00:09:13 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/reclyEKSnuNXkyJj7")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a41a2c527948a4b08064141a817b449b6d4e0d891632b4aabfe1d3b2d821e90b854da83359e9d9dd9dd115111460c96b2bfb97d528ebf7ef6d9c78c8cc95aa0ac5ac27684438d9e9481c280bf81b39abbba4043583cbb0c50e1acd52a902514283dfbbe41357a7ecc7d873301d858dbb46c3aedba2e7a37da3560b48e4a5d937d50280d82c52aed83c860cab5e641e5b85df1cd3c49b7d9c24b610d22881546808a246a05a6ba3e951b1375309c06d2283f904ea62cc5404868924c683ca1f325a58c5ef98a28a5ab21e55a9bda493806f7390754426bef7425fc76ceedf5f7a8bf0cc7173f868d96d235c152db602940be8074a18b033fa6d74e59c26878abef03fa9f7f6e65ff05ee54e8682e020000",
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
      "Sat, 08 Jan 2022 00:09:13 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwi1OpPkclajwpmS; path=/; expires=Sun, 08 Jan 2023 00:09:13 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1/recUH5O6ACAG4vP41")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551416ec23010fc0af219821341a13915a8d40aa50155d003aa546d92a5b1e47823c72e2d88bfd70e488543a55e7af4ce787666f6c044c162a6315f3f0e173793d9e461f0b11c84accbb60265d1b0f8c052a8d091e654aace3da1c7dec01a4a6d95a16671381afa911679b9c24fe3a8afaa2565d618525e424286d2018b1a5567fd9c38d86a3f288da99bb8dfdfed76c1bb265b83260a72aad8d12be41ac16031fdf222ad55dbe8a54a70bf49cb7134ddcf674e0a2b105e2cd30254209114e8e2ee5aaecbd429c6d4933ac98974b565255a42c4a3a8c7c31e1faf388ff96dcc8701e77cd346da92aeac848b3a5cfa1691d098272a84ebedbffd5eaefad5f4e8c7b426296ded2d3535e602e40b48eb7fa5909e1b20abdce1b87bfcb18ce337fa03c36a3b020000",
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
      "Sat, 08 Jan 2022 00:09:13 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwg6qIWwf4LonJtj; path=/; expires=Sun, 08 Jan 2023 00:09:13 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "305",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22Someone%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550414ec33010fc4ae5739b3ae9a1c52714240ea80404a587a20a6d922db5647b23c7562055ff8e9d5682de7ae1b8bb33b3337360162bb275cbc4fb81c99a89b898add6faabb8377d99b529b231db495411736005680ca057d24866387d807754785da265229dcfe3ca9cc7591c4aef1c99485650a20aeca706cde8ed6519e8dec6c5deb9a615d369d775c9a725df80254a2ad2ec18152a8be0b0cebfa3c860d2b7f6d92cb1df14fb4596f70f77410a35c828565a092651c11fd8faf6526ecccc29401e41a3e50974f165250740c6b36cc2d3095fac3817fc46a4b38473be1922efc86aafe0b788907b382868dd23d53214f6df76ffbebac6b325a57c132db50d5612d41a948fac028a7301e48d638287e1ca2e8edbe30f0a94db2842020000",
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
      "Sat, 08 Jan 2022 00:09:14 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxghoJ8JalKFP03; path=/; expires=Sun, 08 Jan 2023 00:09:14 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd955d6bc2301486ff8ae45a6b5abf7b35755f38576556196e63a46d5cbba549499bf945fffb92aaa8d00b1908e2654ece3979cfcbc3c91a70ec32eec5c07c5b83c003a60a54ec49b8b0eee9ca31621d8322980598a89c35b0508865d2888598d1ecea1389845922743007a6de68a810dd1e2beae0882461541513e46022ab0711a685f14b5f960bae027e9244b1592ecfe773ed8b331121ce98e6b210a4aa83cb314ab0d759aa26994811f321ede3d5d4f29b4667d5ebca563844816ae6f000518d487d887b37c7ed8a806e06e8a8a4427f9374f48a1d640906348c12d44bb0694368c296a9573408e1341b79c6782808da1b21e7ce2e088a9367e605d2b073cb3d7cea14cd9c11222225298eb01b20324144a82a0b595b0398a00930a13c9ce8455adc43337eac0deaed6efba1fa3bacea79d0f4984f0bb72c8f9a5aa630707d1b2fa404f04ec115a1036b79e8ecec90d35f223bb0711e7676661cb24396774f232aacd79f65efbb91cb0ecadd36f56ba2a4954b0952dba57e8984fc6fbb1cfe0ffa09b86c5d493fd23faa949e69ad060000",
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
      "Sat, 08 Jan 2022 00:09:14 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0TS7MMqeEOLAgi; path=/; expires=Sun, 08 Jan 2023 00:09:14 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "413",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/app21Qak1T4cGoiP7/tbl273pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "rec3TVmxNFnzb2s1e",
      "recUH5O6ACAG4vP41",
      "reclyEKSnuNXkyJj7",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2c62161b9157e6e79554946c586a94ab53a3855867a98fa9b393a3bba9b94059818e2539953e9ea1d9c57ea17915de99565ae541b5b0b00e20b05ef8b000000",
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
      "Sat, 08 Jan 2022 00:09:14 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNMQP8UkivWuhW6; path=/; expires=Sun, 08 Jan 2023 00:09:14 GMT; domain=.airtable.com; samesite=none; secure",
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
