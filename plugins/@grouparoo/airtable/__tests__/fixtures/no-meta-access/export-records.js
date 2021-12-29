const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEG3zvqw6kqPswJ; path=/; expires=Thu, 29 Dec 2022 22:22:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCvFw5jTsC0hSqP; path=/; expires=Thu, 29 Dec 2022 22:22:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
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
      "Wed, 29 Dec 2021 22:22:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJTMim44WCdzF6s; path=/; expires=Thu, 29 Dec 2022 22:22:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwC7RYdQ3kklvJrb; path=/; expires=Thu, 29 Dec 2022 22:22:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzCoO9P0QoY9thR; path=/; expires=Thu, 29 Dec 2022 22:22:37 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
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
      "Wed, 29 Dec 2021 22:22:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqSfxE5dl2kM8AJ; path=/; expires=Thu, 29 Dec 2022 22:22:37 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Jane", f_singleLineText: "here" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23014fc15e41942e2aa2a64aad28da6a16a43075055bd240f62c9b1d3175b9420febd7660281b4b252fbe77be77773e32c25253d5b1787364a262b10796c9f3fb61a5ee45ff5d5a6263b615283de7c83268d09116a0d0e35f608dce6c5320b1387a987ba8136a2731150a73fc318e5c239dc98535462b2f23a140e946cb16d568f596bab1250fd4c6b45d3c9deef7fb6047dab6405a07a56ed8c92b948460b04a0e5e64b06b3b7a5529f6ebac9ef1a45f3c39296c4078b18204a840a25640d5e3b5dc98a97394c49346e99974b525170381873c9a447cc2e739e7b13b77b3200cc3f51069aba9b1122e95b806065442675e74255c6fffedf5efaa5b0c9396d2b6de52d76229407e80b4fe5506d925bdb6ca7d5be82e371671fa3cfd029a8fc80549020000",
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
      "Wed, 29 Dec 2021 22:22:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLXvueTI2KgGOtA; path=/; expires=Thu, 29 Dec 2022 22:22:37 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "307",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23014fc15e41942e2aa2a64aad28da6a16a43075055bd240f62c9b1d3175b9420febd7660281b4b252fbe77be77773e32c25253d5b1787364a262b10796c9f3fb61a5ee45ff5d5a6263b615283de7c83268d09116a0d0e35f608dce6c5320b1387a987ba8136a2731150a73fc318e5c239dc98535462b2f23a140e946cb16d568f596bab1250fd4c6b45d3c9deef7fb6047dab6405a07a56ed8c92b948460b04a0e5e64b06b3b7a5529f6ebac9ef1a45f3c39296c4078b18204a840a25640d5e3b5dc98a97394c49346e99974b525170381873c9a447cc2e739e7b13b77b3200cc3f51069aba9b1122e95b806065442675e74255c6fffedf5efaa5b0c9396d2b6de52d76229407e80b4fe5506d925bdb6ca7d5be82e371671fa3cfd029a8fc80549020000",
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
      "Wed, 29 Dec 2021 22:22:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHG0r1AkImvO8fa; path=/; expires=Thu, 29 Dec 2022 22:22:38 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "307",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23014fc15e41942e2aa2a64aad28da6a16a43075055bd240f62c9b1d3175b9420febd7660281b4b252fbe77be77773e32c25253d5b1787364a262b10796c9f3fb61a5ee45ff5d5a6263b615283de7c83268d09116a0d0e35f608dce6c5320b1387a987ba8136a2731150a73fc318e5c239dc98535462b2f23a140e946cb16d568f596bab1250fd4c6b45d3c9deef7fb6047dab6405a07a56ed8c92b948460b04a0e5e64b06b3b7a5529f6ebac9ef1a45f3c39296c4078b18204a840a25640d5e3b5dc98a97394c49346e99974b525170381873c9a447cc2e739e7b13b77b3200cc3f51069aba9b1122e95b806065442675e74255c6fffedf5efaa5b0c9396d2b6de52d76229407e80b4fe5506d925bdb6ca7d5be82e371671fa3cfd029a8fc80549020000",
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
      "Wed, 29 Dec 2021 22:22:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyQHSq9DNjamTj6; path=/; expires=Thu, 29 Dec 2022 22:22:38 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "307",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23014fc15e41942e2aa2a64aad28da6a16a43075055bd240f62c9b1d3175b9420febd7660281b4b252fbe77be77773e32c25253d5b1787364a262b10796c9f3fb61a5ee45ff5d5a6263b615283de7c83268d09116a0d0e35f608dce6c5320b1387a987ba8136a2731150a73fc318e5c239dc98535462b2f23a140e946cb16d568f596bab1250fd4c6b45d3c9deef7fb6047dab6405a07a56ed8c92b948460b04a0e5e64b06b3b7a5529f6ebac9ef1a45f3c39296c4078b18204a840a25640d5e3b5dc98a97394c49346e99974b525170381873c9a447cc2e739e7b13b77b3200cc3f51069aba9b1122e95b806065442675e74255c6fffedf5efaa5b0c9396d2b6de52d76229407e80b4fe5506d925bdb6ca7d5be82e371671fa3cfd029a8fc80549020000",
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
      "Wed, 29 Dec 2021 22:22:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwV45602o726Bup8; path=/; expires=Thu, 29 Dec 2022 22:22:39 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "307",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtWkP57IbjWnpAg; path=/; expires=Thu, 29 Dec 2022 22:22:39 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23014fc15e41942e2aa2a64aad28da6a16a43075055bd240f62c9b1d3175b9420febd7660281b4b252fbe77be77773e32c25253d5b1787364a262b10796c9f3fb61a5ee45ff5d5a6263b615283de7c83268d09116a0d0e35f608dce6c5320b1387a987ba8136a2731150a73fc318e5c239dc98535462b2f23a140e946cb16d568f596bab1250fd4c6b45d3c9deef7fb6047dab6405a07a56ed8c92b948460b04a0e5e64b06b3b7a5529f6ebac9ef1a45f3c39296c4078b18204a840a25640d5e3b5dc98a97394c49346e99974b525170381873c9a447cc2e739e7b13b77b3200cc3f51069aba9b1122e95b806065442675e74255c6fffedf5efaa5b0c9396d2b6de52d76229407e80b4fe5506d925bdb6ca7d5be82e371671fa3cfd029a8fc80549020000",
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
      "Wed, 29 Dec 2021 22:22:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzRKoGctdiXUSiw; path=/; expires=Thu, 29 Dec 2022 22:22:39 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "307",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recOBKSyUn5izqcur",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394920d013d4ddd8d7565daca0e4cd3e4b60622a54997266250f1ef8b0b12e3306997493958cf2fcfcfcf2d33586853362c7a6b99285944c0227e78d92fd5581c3e0b67589fad054ae2b42c850a3d690e0a09ff006775eaaa1c0d8b469319418d501b89895098e197f564579760b1ecf8b9b3562b529290a3f4dd458daab77c4e7cdb1902b6d6d64d341cee76bb6063b4abc1681d14ba624752280c925abc2791ceb16bcc934af0b04ab7531e1fe6f75e0a2b1024961b012a90a81598f2ee5aaecfd4699b9848bde444ba9a92898ec0433e1a8cf880cf32ce23ff6ea6411886ab6ea5b5369593704ec587d0a1121afba84be1a3fb6faf3f47fd66f836bc18365a4a5793a5a6c642807c05e9e8570ae9797bed94bf5c48b53a5f771c4c7cef8fb91cdf8fdfc2574a645b020000",
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
      "Wed, 29 Dec 2021 22:22:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwW6WAngSlIa22Xz; path=/; expires=Thu, 29 Dec 2022 22:22:40 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { fields: { Name: "John Doe", f_singleLineText: "two", f_number: 6 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7364d2c04252714901051080f851e8a1072926d63c9f1468ead40abfe3bdeb487f6d60b922fbb333b3b3bde3103159aba67f1e78ec99ac5d4e0c5dbe251e9b4b9e99af4894dd95a8222ce8ee5a2054f4ab1d1930704c2be85b398bbb604c3e26811524b1fcb6b2a7aa9370a32a9a1801feba7ed80e360e9ac454db24a94a03cf2d2819e7cbc671e76861a8db55d1fcfe7c330041b83ae130631a8b0657b52a80c080b75f24b22a37dd79b579dc17695370b9e6cd37b2f05ad9024561a2974a000b530f5ddb9dc94e9c369099126d98174b6a5902381873c9a457cc66f0bce63ffaea2200cc3d578d21a4deb943889c82732224af4f6196be9b3fc6fbfa7ab2e316d5029d791a5be834a0ab514cad1542ef26302e8b4ffb9d0171786b1ffdaff01d68970d25d020000",
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
      "Wed, 29 Dec 2021 22:22:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3NvmojJ1nxTqdd; path=/; expires=Thu, 29 Dec 2022 22:22:40 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recOBKSyUn5izqcur")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23010fd15e41982e3160199aa74a369a8dad081a5ba24075872ecd4b19512c4bfd70e912843a52e953c9cde3dbf7bf7ee44784922a2b158c74f6fc78d9cf1eeb3b09a8cc98ea3281b129d480a153ad20a247afc03ac51a9ad72d4240ae74b0f355cee05265c62865fc6916d5d82c1b2e7e7d61825bd92801c85ebae6b94a3cd6be2da567be0604cdd44d369dbb6c15e2b5b83562a285445ce5ea1d0e8d5e2a317e91ddb46bfc804bb6d7a58b0b85b3d3a29ac807bb15c739081402541970fb77263222fdbc49e344a2ea49b2919ef098cb27012b2095b668c45eedd2d024ae9b65f69a77465050ca9b8107a5440639e55c95d74ffedf5e7a8df0cdfd3ab61ad84b0b5b7d4d4587010ef20acff95423a6cafac7497a3be96c37567c1dcf5fe98cbf91b665434124d020000",
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
      "Wed, 29 Dec 2021 22:22:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwsBYTRJkHjLggxE; path=/; expires=Thu, 29 Dec 2022 22:22:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7364d2c04252714901051080f851e8a1072926d63c9f1468ead40abfe3bdeb487f6d60b922fbb333b3b3bde3103159aba67f1e78ec99ac5d4e0c5dbe251e9b4b9e99af4894dd95a8222ce8ee5a2054f4ab1d1930704c2be85b398bbb604c3e26811524b1fcb6b2a7aa9370a32a9a1801feba7ed80e360e9ac454db24a94a03cf2d2819e7cbc671e76861a8db55d1fcfe7c330041b83ae130631a8b0657b52a80c080b75f24b22a37dd79b579dc17695370b9e6cd37b2f05ad9024561a2974a000b530f5ddb9dc94e9c369099126d98174b6a5902381873c9a457cc66f0bce63ffaea2200cc3d578d21a4deb943889c82732224af4f6196be9b3fc6fbfa7ab2e316d5029d791a5be834a0ab514cad1542ef26302e8b4ffb9d0171786b1ffdaff01d68970d25d020000",
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
      "Wed, 29 Dec 2021 22:22:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brww2QPVZBekX8NhT; path=/; expires=Thu, 29 Dec 2022 22:22:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394920d013d4ddd8d7565daca0e4cd3e4b60622a54997266250f1ef8b0b12e3306997493958cf2fcfcfcf2d33586853362c7a6b99285944c0227e78d92fd5581c3e0b67589fad054ae2b42c850a3d690e0a09ff006775eaaa1c0d8b469319418d501b89895098e197f564579760b1ecf8b9b3562b529290a3f4dd458daab77c4e7cdb1902b6d6d64d341cee76bb6063b4abc1681d14ba624752280c925abc2791ceb16bcc934af0b04ab7531e1fe6f75e0a2b1024961b012a90a81598f2ee5aaecfd4699b9848bde444ba9a92898ec0433e1a8cf880cf32ce23ff6ea6411886ab6ea5b5369593704ec587d0a1121afba84be1a3fb6faf3f47fd66f836bc18365a4a5793a5a6c642807c05e9e8570ae9797bed94bf5c48b53a5f771c4c7cef8fb91cdf8fdfc2574a645b020000",
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
      "Wed, 29 Dec 2021 22:22:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQxy5AvVcB8Legh; path=/; expires=Thu, 29 Dec 2022 22:22:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recOBKSyUn5izqcur",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590c14ec33010447fa5f2b94d5303a2cd09855b092982964311429b644b2d3976d8d88a9a28ff8e9d56a23d207141f2c5a3b7b333db31c25c5351b3e8ad63a260911756f1c3cb61a36e44fb955b6263b613283dd3b1144a74d012147afd03acd1a92d332416cd6e175ecaac315a79584286d2d1ab0ad568f39cb8094b5ed81b53d5d174da344df049da56405a07b92e59ef1d72423058c4076f3284b2353da904db6dba9ff3b85dde3b2b2c4178b38c04a840a25640c5dda5dd98a963e0d843a3e4085d6c598b01e0219f4d667cc2176bce23f7aee6411886dba1e54e5369259c8abb9e832aa1368fba10ee3aff9df57cd56f81aff94f60d252daca47aa2bcc05c85790d64fa5909eda6bab0c8b42f7f9e321faf7fe1bbb06c75a2f020000",
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
      "Wed, 29 Dec 2021 22:22:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSpvGdCc9eEwpAY; path=/; expires=Thu, 29 Dec 2022 22:22:42 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "297",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recOBKSyUn5izqcur")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d1303a2f584c256428aa065e8822ec9955a72ec70b1153555ff3b765a8976406241f2e2a777efbe7707262b261861b94c9fdef66b7d27fbafd2111bb3ad4455b54c1c580e357ad3023406fd039c35b9ab0b242692fb79900a67add1c1aca040e5ddcb06f568fd9af9094741d859dbb4623aedba2efa24e31a2063a2d2d4ec18124a42b058a5fb103240b9965e7486fd26dfcd78da2f1e7d14d6204358411274a4d068a0eae13a6eccf409380da65176325d6d59c9c1c0639e4c123ee1f315e7c2bf9b5914c7f16668b935543b05e7e2bee7a02a68edb3a9a4bfce7fb35eaefa0df896ff009351ca3501a96db094a0de41b93095437e6e6f9cb64cc4fef3c7431cbf01263464e121020000",
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
      "Wed, 29 Dec 2021 22:22:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brweVv69pMRiBIGUY; path=/; expires=Thu, 29 Dec 2022 22:22:42 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590c14ec33010447fa5f2b94d5303a2cd09855b092982964311429b644b2d3976d8d88a9a28ff8e9d56a23d207141f2c5a3b7b333db31c25c5351b3e8ad63a260911756f1c3cb61a36e44fb955b6263b613283dd3b1144a74d012147afd03acd1a92d332416cd6e175ecaac315a79584286d2d1ab0ad568f39cb8094b5ed81b53d5d174da344df049da56405a07b92e59ef1d72423058c4076f3284b2353da904db6dba9ff3b85dde3b2b2c4178b38c04a840a25640c5dda5dd98a963e0d843a3e4085d6c598b01e0219f4d667cc2176bce23f7aee6411886dba1e54e5369259c8abb9e832aa1368fba10ee3aff9df57cd56f81aff94f60d252daca47aa2bcc05c85790d64fa5909eda6bab0c8b42f7f9e321faf7fe1bbb06c75a2f020000",
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
      "Wed, 29 Dec 2021 22:22:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHZkrnl5gR285om; path=/; expires=Thu, 29 Dec 2022 22:22:42 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "297",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7364d2c04252714901051080f851e8a1072926d63c9f1468ead40abfe3bdeb487f6d60b922fbb333b3b3bde3103159aba67f1e78ec99ac5d4e0c5dbe251e9b4b9e99af4894dd95a8222ce8ee5a2054f4ab1d1930704c2be85b398bbb604c3e26811524b1fcb6b2a7aa9370a32a9a1801feba7ed80e360e9ac454db24a94a03cf2d2819e7cbc671e76861a8db55d1fcfe7c330041b83ae130631a8b0657b52a80c080b75f24b22a37dd79b579dc17695370b9e6cd37b2f05ad9024561a2974a000b530f5ddb9dc94e9c369099126d98174b6a5902381873c9a457cc66f0bce63ffaea2200cc3d578d21a4deb943889c82732224af4f6196be9b3fc6fbfa7ab2e316d5029d791a5be834a0ab514cad1542ef26302e8b4ffb9d0171786b1ffdaff01d68970d25d020000",
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
      "Wed, 29 Dec 2021 22:22:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwmzIhT5DwIPApeW; path=/; expires=Thu, 29 Dec 2022 22:22:43 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recOBKSyUn5izqcur",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "rec2TQ8GlnJh7phJI",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525b4fc23018fd2b4b9fb96c0505f644d0c48838bc0c1f30c694ed8335e9dad9b5e196fd77dbc182188cbef842b287f6f47ca7a767678b244442c639f25fb788c6c8b7c07870f7bc9ef00bbaf988b4443534a7c02c678b029282214509e10b889d726bcedf895622d0e90c24f2bd4ecf4233ad94e076889119303335ce803b93a79199d0d202895259ee379bcbe5b2b1904267440ad188448a0aab1049200ae2c1da8a94e6742e1ff80836d320e9e2c1667865a42025d48acd2425bcc1407022e3feb15c0df19df1812539a31de9e896909604ec62afeee13aee8518fbe66b751baeeb4ecb57ce854c3523df0230ef2d4f19c9d5bd88a949ebbf3d7fbdea27e3edd6c1b8148ce9cc5aca338828612f84693b1590609f82d05c21dfb5eb9cf2058311e510c2ca804841ae0c564a55d69789e8c38aa41983ea8ffd31c9a276a81a0e1fbb378c0f934e960c6f4f556d2812ee5c8b1335eb9666f97e7b79d239466754c5b677aa8a5540268ff3aaa12465e9fcf6efd5aa9229de8a4f5fb4f151d3040000",
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
      "Wed, 29 Dec 2021 22:22:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLMN78Ldm1GROZf; path=/; expires=Thu, 29 Dec 2022 22:22:43 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "397",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recOBKSyUn5izqcur")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7364d5c106d4e55b8414811b41c7a419b649b5872ece087d287faefd8692b28121217241fecd9d9d9d9f181b092c44461b1481e5f772b71cbf61f85556448360c79a9497c201934e848450da2c272d03f5dfd1dac91996d7254248eee661ecaad3152f8260e3972d7b568510c562fa9ebb0ca03b531ad8ec7e3aeeb824a49db8292322864438e5ea1500806cb64e7457a7356ab6791e27e9dd5539aec1fee9d1436c0bc58ae188880a314a0caf9b5dc908893f1c49306e989743565c97a020d69348ae888ce9694c6ee4ca6411886eb7ecb8d548de5f02300b76f5fe5a0cd932c994bebbf3d7f1ff59bf19bc997712539b7adb7a45b2c18f037e0d67765909d539056181287feae99a838a64ce012b70e2406b571582f75b1ded5728e5b685a8e971ffb6392c74fcbe6db206a020000",
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
      "Wed, 29 Dec 2021 22:22:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLwia8y2RPoRMxO; path=/; expires=Thu, 29 Dec 2022 22:22:43 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "324",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec2TQ8GlnJh7phJI")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7364d4c05212714901051080f050ebda04db26d2c39dec8b15568d57fc74e2bd11e90b820f9e29dd9d9d9d91d130d4b98c69a972ff1bd54597bd5b7d9039bb29540d90c2cd9b1023a74a48c5a35b923f4d807584385ed2ad42c89e2d097d4f17be93f83506b89b95058e2a771dd7c6cabac31a4bca8840aa5ab3ff5a8266fafb983adf685d6987e48e6f3cd6613ac35d91e34515053c7f65ea1d608069bf4cb8b8ce6eda09f558edb65d1c63cdd66b74e0a3b105eacd20254209114e8e6e65c6ecad461b1d49326f9817436a5142381873c9a457cc6af4bce13f716511086e1725c6945bab3124e0272798c8884c13c52235c92ffedf774d4afa62f7e4c6b92d2f6ded2d0632d40be83b4beab80e2980059e5ee365e568371e764c9c2217f4c66ff0d2a94a2815a020000",
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
      "Wed, 29 Dec 2021 22:22:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVBZpFd6pRblxcI; path=/; expires=Thu, 29 Dec 2022 22:22:44 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22changed%20Name%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf3046d1087b22f34de7300a3e608cb9db2eac49d7ce7e6430c27fb71d10c5c4c417933eb4e79e7beeb9a77ba23097aad0247add135690c803f3f8fe79b714d7acfdc8ad227db266c83d674f52a8d091f212c4068b5ef774f577b046a6b6ca5091687433f550668d91c23771c890bbae798da2b77c4a5c87551e288da975341c364d136c94b4352829835c56e4e015728560b088775ea43367b57a1409b6abb49cd0b8bdbb75525801f362996220028e52802a6697727d228ec6634fea2547d2c59405eb0834a4a3c1880ee8744169e4ce78128461b8eab65c4b55590e3f0270fb76550eda3cc882b9b4fedbf3f751bf19bf1a7f195792735b7b4bbac69c017f016e7d570ae9290569852151e8ef9a890dc784095ce0d681c4a0360eeba4ced69b52ce700b55cdf1fc637f4cf2f076f804b3114ce778020000",
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
      "Wed, 29 Dec 2021 22:22:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLJB3d04pwaSMEF; path=/; expires=Thu, 29 Dec 2022 22:22:44 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recOBKSyUn5izqcur")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae7364d5c106d4e55b8414811b41c7a419b649b5872ece087d287faefd8692b28121217241fecd9d9d9d9f181b092c44461b1481e5f772b71cbf61f85556448360c79a9497c201934e848450da2c272d03f5dfd1dac91996d7254248eee661ecaad3152f8260e3972d7b568510c562fa9ebb0ca03b531ad8ec7e3aeeb824a49db8292322864438e5ea1500806cb64e7457a7356ab6791e27e9dd5539aec1fee9d1436c0bc58ae188880a314a0caf9b5dc908893f1c49306e989743565c97a020d69348ae888ce9694c6ee4ca6411886eb7ecb8d548de5f02300b76f5fe5a0cd932c994bebbf3d7f1ff59bf19bc997712539b7adb7a45b2c18f037e0d67765909d539056181287feae99a838a64ce012b70e2406b571582f75b1ded5728e5b685a8e971ffb6392c74fcbe6db206a020000",
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
      "Wed, 29 Dec 2021 22:22:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwsf8v4GdwxYQfcC; path=/; expires=Thu, 29 Dec 2022 22:22:44 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "324",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5514d4bc34010fd2b65cf6d9aac456b4e520531c4f841f450119924d36661b31336bb445bfadfdd4d0bb607c18bb0979df7e6cd9b375ba6b1245d752c7edb3251b1d81778fe34bf952aa92fda3ab96363b612283d67cb3268d09112aad5e886d0631f600d65b62950b3389a87bea40edf73ffe9845a4b4c85c21c3f8debe6435b618d21e5452514285dfda145357a794e1d6cb52fd4c6b45d3c9df67d1fac35d91634515052c3765ea1d40806abc5971719ccdb4e3faa1437cbac9ef3c526b97652d880f0628516a00289a4405757a77263a6f68b2d3c6994ee49275372311078c8a349c427fc32e73c766f160561182e879556a41b2be1282097c78048e8cc3d55c225f9df7e8f47fd6afaecc7b426296deb2d752d9602e42b48ebbb32c80e099055ee6ec3653518774e16cf1cf2c76476efbb6fad40e7af68020000",
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
      "Wed, 29 Dec 2021 22:22:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw4qLxgKV3SrSiE7; path=/; expires=Thu, 29 Dec 2022 22:22:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22changed%20Name%22%2C%7BName%7D%3D%22something%20else%20altogether%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf3046d1087b22f34de7300a3e608cb9db2eac49d7ce7e6430c27fb71d10c5c4c417933eb4e79e7beeb9a77ba23097aad0247add135690c803f3f8fe79b714d7acfdc8ad227db266c83d674f52a8d091f212c4068b5ef774f577b046a6b6ca5091687433f550668d91c23771c890bbae798da2b77c4a5c87551e288da975341c364d136c94b4352829835c56e4e015728560b088775ea43367b57a1409b6abb49cd0b8bdbb75525801f362996220028e52802a6697727d228ec6634fea2547d2c59405eb0834a4a3c1880ee8744169e4ce78128461b8eab65c4b55590e3f0270fb76550eda3cc882b9b4fedbf3f751bf19bf1a7f195792735b7b4bbac69c017f016e7d570ae9290569852151e8ef9a890dc784095ce0d681c4a0360eeba4ced69b52ce700b55cdf1fc637f4cf2f076f804b3114ce778020000",
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
      "Wed, 29 Dec 2021 22:22:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1W0sug5WvWmOU1; path=/; expires=Thu, 29 Dec 2022 22:22:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .delete("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ "records%5B%5D": ["recOBKSyUn5izqcur", "rec2TQ8GlnJh7phJI"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2fe4edec195a179a6995585c9a5454ab53a38551a85045ab8e7e4796598176478792ad5c6d6020009df489a61000000",
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
      "Wed, 29 Dec 2021 22:22:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUQ3KCDRDsFtqL2; path=/; expires=Thu, 29 Dec 2022 22:22:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recOBKSyUn5izqcur")
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
      "Wed, 29 Dec 2021 22:22:46 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJWxJuNzLAcCWya; path=/; expires=Thu, 29 Dec 2022 22:22:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec2TQ8GlnJh7phJI")
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
      "Wed, 29 Dec 2021 22:22:46 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwol9Xkrdtgpj3G2; path=/; expires=Thu, 29 Dec 2022 22:22:46 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8y6TGmKWhVLWKE; path=/; expires=Thu, 29 Dec 2022 22:22:46 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTAt4mlv9I0J4NE; path=/; expires=Thu, 29 Dec 2022 22:22:46 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
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
      "Wed, 29 Dec 2021 22:22:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwORA4ipShHWpSLd; path=/; expires=Thu, 29 Dec 2022 22:22:47 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
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
      "1f8b0800000000000003b5535d6f1a3110fc2b27f7152ef74542ee2922915a45945629ad949428f2dd2d9c1b9f7ddab30b04f1dfbb3620a0ea435e2af9c5b3e3f57866bd6108a5c6aa63f9cf0d1315cb1df058dcc69fb2bb817884dfbf32d6637301d271366cc21b20d2bdae5570a7c1d55eb8357a629b0290e5f13076505943f95ae815cb0d5af088450455ae599e44619a39a8e2c6f54aa224eec7493fb96407742a9af3ca344ef228a2154651f4b4e359e44668c5f26c781d39041a2e241d6be00656bc692584a56e3cb9b1d20829144c616588228257a59733e5a0eec8a023df4042699c1fec012a2a7d4400c59e1d47ed1f7915fa47b68025286a97a661ea815a2b3838c12ee3ab603018d00352efe18bd3ab16e491df88b2de8bf95003af0067aa1f14564a3033e5f91db1258c8faae7427129d7bd8007080b2b39063e9913f64e3e7147d2eed2b1e83ca98d69bbfce262b95c860bad1727de14d61867e386495e80237f694105df1fc654fec769d4b6e5a8b56fb0f5d9225068d568ed9af821b21d7e5563787b9ad4c364f4767f4bad0ef11428b80a2568c5b1ba396fd7636a376023470ac63bd2d92d7fcfc6f53449725ad9f0381b738d94273f19549a4b5f91bc339f7525c8b7ffadf7f4aaf788462da56d9da4ae855270f983bb0c73fa7393bd03daba718b68f34e33b6cfdb3fc075d847e3030000",
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
      "Wed, 29 Dec 2021 22:22:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2H4jjwcVAyB4dt; path=/; expires=Thu, 29 Dec 2022 22:22:47 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "506",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6f1a3110fc2b27f7152ef74542ee2922915a45945629ad949428f2dd2d9c1b9f7ddab30b04f1dfbb3620a0ea435e2af9c5b3e3f57866bd6108a5c6aa63f9cf0d1315cb1df058dcc69fb2bb817884dfbf32d6637301d271366cc21b20d2bdae5570a7c1d55eb8357a629b0290e5f13076505943f95ae815cb0d5af088450455ae599e44619a39a8e2c6f54aa224eec7493fb96407742a9af3ca344ef228a2154651f4b4e359e44668c5f26c781d39041a2e241d6be00656bc692584a56e3cb9b1d20829144c616588228257a59733e5a0eec8a023df4042699c1fec012a2a7d4400c59e1d47ed1f7915fa47b68025286a97a661ea815a2b3838c12ee3ab603018d00352efe18bd3ab16e491df88b2de8bf95003af0067aa1f14564a3033e5f91db1258c8faae7427129d7bd8007080b2b39063e9913f64e3e7147d2eed2b1e83ca98d69bbfce262b95c860bad1727de14d61867e386495e80237f694105df1fc654fec769d4b6e5a8b56fb0f5d9225068d568ed9af821b21d7e5563787b9ad4c364f4767f4bad0ef11428b80a2568c5b1ba396fd7636a376023470ac63bd2d92d7fcfc6f53449725ad9f0381b738d94273f19549a4b5f91bc339f7525c8b7ffadf7f4aaf788462da56d9da4ae855270f983bb0c73fa7393bd03daba718b68f34e33b6cfdb3fc075d847e3030000",
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
      "Wed, 29 Dec 2021 22:22:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwKg8kEaG7z014fk; path=/; expires=Thu, 29 Dec 2022 22:22:47 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "506",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6f1a3110fc2b27f7152ef74542ee2922915a45945629ad949428f2dd2d9c1b9f7ddab30b04f1dfbb3620a0ea435e2af9c5b3e3f57866bd6108a5c6aa63f9cf0d1315cb1df058dcc69fb2bb817884dfbf32d6637301d271366cc21b20d2bdae5570a7c1d55eb8357a629b0290e5f13076505943f95ae815cb0d5af088450455ae599e44619a39a8e2c6f54aa224eec7493fb96407742a9af3ca344ef228a2154651f4b4e359e44668c5f26c781d39041a2e241d6be00656bc692584a56e3cb9b1d20829144c616588228257a59733e5a0eec8a023df4042699c1fec012a2a7d4400c59e1d47ed1f7915fa47b68025286a97a661ea815a2b3838c12ee3ab603018d00352efe18bd3ab16e491df88b2de8bf95003af0067aa1f14564a3033e5f91db1258c8faae7427129d7bd8007080b2b39063e9913f64e3e7147d2eed2b1e83ca98d69bbfce262b95c860bad1727de14d61867e386495e80237f694105df1fc654fec769d4b6e5a8b56fb0f5d9225068d568ed9af821b21d7e5563787b9ad4c364f4767f4bad0ef11428b80a2568c5b1ba396fd7636a376023470ac63bd2d92d7fcfc6f53449725ad9f0381b738d94273f19549a4b5f91bc339f7525c8b7ffadf7f4aaf788462da56d9da4ae855270f983bb0c73fa7393bd03daba718b68f34e33b6cfdb3fc075d847e3030000",
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
      "Wed, 29 Dec 2021 22:22:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUZbSQTwWCWI20Z; path=/; expires=Thu, 29 Dec 2022 22:22:48 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "506",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recYbC1H4D5iYevj4",
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
      "1f8b0800000000000003b551d14ac33014fd9591e7ad6bc384ad4fd2ed4146ad2253d854246def6c24cd2db789d58dfdbb4927b83d08be0879c93d27e79e73b267040552d9b2f871cf64c9623f58e7f3e86ab2b8906b787f9bb021db4a509eb36799a8c1919658e9c102c1632fc21acc6c9d03b1389a467e44b2a856f0611cf549f7a4dc1a83da4b28918372c04d037a707f973ad8921f54c6346d3c1e775d17bc12da4610625060cd0e5ea1201006cae4d38bf4566d4bb73a85dd26aba63cd92de74e0a6a21bd584e52e840016a41e5e5b9dc90e9638cc49306e99174b665257b020f79348af888cf569cc7ee4ca64118869b3ed216a9b64a9cd4e1d2f78812adb9c652badefedbefe9aa5f4dcf7e4c132a651b6fa96da090423d0865fdab4c64df0da0d5eee34277f9631987e7c3174ef4d42b49020000",
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
      "Wed, 29 Dec 2021 22:22:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVG1Ps796HjS04Y; path=/; expires=Thu, 29 Dec 2022 22:22:48 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "312",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recYbC1H4D5iYevj4")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad6b4385ad4fd2ed4146ad2253d810e4b6bdb39134b7a489d58dfdbb4927b83d08be0879c93d27e79e737260a26209d3586e8a4574132fafc406dfdf6236663b81b2ea5872603934e8482baad56849e8b117b08672db14a85912cd223fd2a2acd7f8611cf5590da4c21a43ca4b4828503ae0ae45357a7cc81c6cb51fd4c6b45d329df67d1fbc6ab22d68a2a0a4861dbd42a9110c56e9a71719acda4edfab0cf7dbbc9ef174bf5a38296c4078b1420b50814452a0abeb4bb93153a718a9278db213e962cb5a0c041ef26812f1099faf394fdc8967411886db21d28e7463259cd5e1d20f8884cedc52255c6fffedf77cd5afa6e73fa63549695b6fa96bb114209f405aff2a87fcbb01b2ca7d5ce82e7f2ce3f805421f42103b020000",
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
      "Wed, 29 Dec 2021 22:22:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRGciQ7mvsJcG4E; path=/; expires=Thu, 29 Dec 2022 22:22:49 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recYbC1H4D5iYevj4")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad6b4385ad4fd2ed4146ad2253d810e4b6bdb39134b7a489d58dfdbb4927b83d08be0879c93d27e79e737260a26209d3586e8a4574132fafc406dfdf6236663b81b2ea5872603934e8482baad56849e8b117b08672db14a85912cd223fd2a2acd7f8611cf5590da4c21a43ca4b4828503ae0ae45357a7cc81c6cb51fd4c6b45d329df67d1fbc6ab22d68a2a0a4861dbd42a9110c56e9a71719acda4edfab0cf7dbbc9ef174bf5a38296c4078b1420b50814452a0abeb4bb93153a718a9278db213e962cb5a0c041ef26812f1099faf394fdc8967411886db21d28e7463259cd5e1d20f8884cedc52255c6fffedf77cd5afa6e73fa63549695b6fa96bb114209f405aff2a87fcbb01b2ca7d5ce82e7f2ce3f805421f42103b020000",
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
      "Wed, 29 Dec 2021 22:22:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkwtBFWOp3IGNbQ; path=/; expires=Thu, 29 Dec 2022 22:22:50 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwccNY6QYqnW0zvx; path=/; expires=Thu, 29 Dec 2022 22:22:50 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
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
      "Wed, 29 Dec 2021 22:22:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwKezMDcjQ39Z9nQ; path=/; expires=Thu, 29 Dec 2022 22:22:50 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
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
      "Wed, 29 Dec 2021 22:22:51 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwX2R5cvp0taOYIw; path=/; expires=Thu, 29 Dec 2022 22:22:51 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Jane" } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904b6bc3301084ff4ad03971644121d1a9b8a706d72d212d34a584b5bd6944f5307a609ae0ff5ec9c9a1b9e552d045c3b7b3337b22161b635b47f8c7898896f02428fa5814ef6bf70d75592ec994ec05cac49c48050a23b4028d49df41f0a60aaa464b78be6049aa83f7462758428d32d2cf1deac9ebba8c13c126e1e07de7f87cdef77df6654de8c01a9335469121393416c1635bfc2493315470f6459778dc5687052b8eab8768850a4432abad009d49341a6c7b7f6d3725fa1cb848d0a43c43575b3662041865f92c6733b6dc30c6e3bb6319a5743bb6dc1bab82844bf1d873542538ff645a11aff3df59ffaeba25b03552862e45721d3602e41bc890a62aa82eed4dd09e701a3f371e62f81c7e0167e2b0d22f020000",
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
      "Wed, 29 Dec 2021 22:22:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwO88fEUntGLKRn0; path=/; expires=Thu, 29 Dec 2022 22:22:51 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "291",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
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
      "Wed, 29 Dec 2021 22:22:52 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUG1LiTuIUObBD4; path=/; expires=Thu, 29 Dec 2022 22:22:51 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904b6bc3301084ff4ad03971644121d1a9b8a706d72d212d34a584b5bd6944f5307a609ae0ff5ec9c9a1b9e552d045c3b7b3337b22161b635b47f8c7898896f02428fa5814ef6bf70d75592ec994ec05cac49c48050a23b4028d49df41f0a60aaa464b78be6049aa83f7462758428d32d2cf1deac9ebba8c13c126e1e07de7f87cdef77df6654de8c01a9335469121393416c1635bfc2493315470f6459778dc5687052b8eab8768850a4432abad009d49341a6c7b7f6d3725fa1cb848d0a43c43575b3662041865f92c6733b6dc30c6e3bb6319a5743bb6dc1bab82844bf1d873542538ff645a11aff3df59ffaeba25b03552862e45721d3602e41bc890a62aa82eed4dd09e701a3f371e62f81c7e0167e2b0d22f020000",
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
      "Wed, 29 Dec 2021 22:22:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOwVl79J4OBVuDC; path=/; expires=Thu, 29 Dec 2022 22:22:52 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "291",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recYbC1H4D5iYevj4")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad6b4385ad4fd2ed4146ad2253d810e4b6bdb39134b7a489d58dfdbb4927b83d08be0879c93d27e79e737260a26209d3586e8a4574132fafc406dfdf6236663b81b2ea5872603934e8482baad56849e8b117b08672db14a85912cd223fd2a2acd7f8611cf5590da4c21a43ca4b4828503ae0ae45357a7cc81c6cb51fd4c6b45d329df67d1fbc6ab22d68a2a0a4861dbd42a9110c56e9a71719acda4edfab0cf7dbbc9ef174bf5a38296c4078b1420b50814452a0abeb4bb93153a718a9278db213e962cb5a0c041ef26812f1099faf394fdc8967411886db21d28e7463259cd5e1d20f8884cedc52255c6fffedf77cd5afa6e73fa63549695b6fa96bb114209f405aff2a87fcbb01b2ca7d5ce82e7f2ce3f805421f42103b020000",
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
      "Wed, 29 Dec 2021 22:22:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwGuPYrfUsBqdKWO; path=/; expires=Thu, 29 Dec 2022 22:22:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Wed, 29 Dec 2021 22:22:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6odoFvWfg3FP29; path=/; expires=Thu, 29 Dec 2022 22:22:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula:
      "OR%28%7BName%7D%3D%22Jane%22%2C%7BName%7D%3D%22John%20Doe%22%2C%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525d4bc33014fd2b23cffb68c3065b9fa4db838e5a654c615391dbf6ce46d3a4a4895347ffbb49a76c83093e28889097dc7b72ee3937674314a6526515096e3684652470854532f64ffb93015be0f3639fb4c98a2177980d89a1400b9aca5cb426125def1e8c96b129125424f087be2b2996e6737cd1167a2b1a5062b496c251704890dbc64589a275358b6cdb2857c8b52eaba0d75bafd7dd07254d094aca6e2a0b523b86542168ccc25747d2483595ba1411be2de37c48c3b7e9d8526101cc91258a81e872940254767248d726626b2374a056b4051d4c99b306403dea777cdaa1a339a5813dfd61d7f3bc65636925556138ecadc3ba6f3a1c2a7d2e3366f7f6db7af7477d297ab413ad24e7a67492aa125306fc1ab871af62883f36208db01fe7d9cb379751b777d929bcb3305cccaa2748a26874343b208ee586fea3940ce8d19458e3d6e75f4cc8bee09f4cc8276f7d57bf03081b80f26b040000",
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
      "Wed, 29 Dec 2021 22:22:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwj8x9BDZHmabVLl; path=/; expires=Thu, 29 Dec 2022 22:22:53 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "360",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recm0IBBYRskabLL9", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recYbC1H4D5iYevj4",
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
      "Wed, 29 Dec 2021 22:22:53 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwY7Zy4FO4ow3XCK; path=/; expires=Thu, 29 Dec 2022 22:22:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recm0IBBYRskabLL9", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f4bc34010c5bf4ad9739b268b429b93c49325462955b0223249a67671ff84cd2ec1867c7777d28af6207811f6b0bcfdcd9b37b33db358195bb72c7dee99a8594a828a6fb2ec69ddbe4399e74b36653b8192989e15a030402bd048fa2b78670aaf4ab42c4d169ca4d23b6734c1124a9481be6b504f1ed679a8f09684bd734d9bcee75dd7456fd6f806ac315165141bc8a1b2080eebec834cc650beb5f73ac7c3b6d82f7876585d072b5420c8acb4027424d168b0f5d5b9dd94e963e08ca0497e84ceba6cc408f09827b384cff872c3791ace258fe238de8e53ee8c555ec269f030e7a84a68ddada945d8ce7f67fdd9ead7c017df81ad91d23714a96db012201f417aaa2aa0384d6fbc762c8de9aebf3e30bcfc712bc3cbf009277d11673c020000",
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
      "Wed, 29 Dec 2021 22:22:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiZCgtFq2Ozut7n; path=/; expires=Thu, 29 Dec 2022 22:22:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recYbC1H4D5iYevj4",
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
      "Wed, 29 Dec 2021 22:22:54 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwW2lahQiJ9xaOs6; path=/; expires=Thu, 29 Dec 2022 22:22:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .post("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [{ fields: { Name: "Someone", f_number: 3 } }],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550c16ac24010fd15d9b3c6648b60732a7a93344a6b0bb5943249c6b8b0d9099b5d44c57fef4e145a6f5e0a739999f7debc792761b1245b7522fd3c09558994071f079cafe27ab1a4c4d77331145b859a312791438301f44a0d92415e7d837794fba6402bd264fac023736dfba6f0ce9161b2860275602f5b3483b7972cd0bde5c1ceb9b64bc7e3fd7e1fd5967c0b96282aa9116756282d82c36a766091dea4efecca6478dce4bba99c1d176c121b502c56580526d2c11fd8eae9566e28cce581198306d905747365ad7a808c65324ae4483eaea54c434d26511cc79bfee52dd9c66bf80d22fcdd2f3474ee992a1502fb6fbb7f4fdde3d992d6be654b5d8ba502fd0eda332b87fc1a0079e3441a87e6ce2cce5fe71f8aee96fd42020000",
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
      "Wed, 29 Dec 2021 22:22:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzJ3Gy4YvlhGR6k; path=/; expires=Thu, 29 Dec 2022 22:22:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "296",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recm0IBBYRskabLL9")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ac33010fc95a073e2c8a28544a7e29c125cb784b4d05ccadade34a27a183d304dc8bf577252da1c0abd14f62046b3b333bb47225ac289c546d16551bcacdd3bd465392763b213285b47f89154a0309256a031e1af10bca982aad1129ecf5882eae0bdd1892ca14619d90f1dead1d3ba8c1dc12660ef7de7f874daf77df6664de8c01a933546915352682c82c7b6f8482283a9e0eca32ef1b0adf633561c568b28850a4412abad009d49341a6c7b772d3726fa6cb848a45179265d4dd98881c028cb27399bb0f986311eeb966594d2ed907267ac0a122ec163ce0195e0fcbd6945dcce7f7bfd39ea57c337df86ad913274c992ebb011209f4186d4554175496f82f684d3f4d65f078c3f7fdccae9135423a29b2e020000",
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
      "Wed, 29 Dec 2021 22:22:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwb9CMtoOi3o9bvW; path=/; expires=Thu, 29 Dec 2022 22:22:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recYbC1H4D5iYevj4")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ac33014fd9591e7ad6b4385ad4fd2ed4146ad2253d810e4b6bdb39134b7a489d58dfdbb4927b83d08be0879c93d27e79e737260a26209d3586e8a4574132fafc406dfdf6236663b81b2ea5872603934e8482baad56849e8b117b08672db14a85912cd223fd2a2acd7f8611cf5590da4c21a43ca4b4828503ae0ae45357a7cc81c6cb51fd4c6b45d329df67d1fbc6ab22d68a2a0a4861dbd42a9110c56e9a71719acda4edfab0cf7dbbc9ef174bf5a38296c4078b1420b50814452a0abeb4bb93153a718a9278db213e962cb5a0c041ef26812f1099faf394fdc8967411886db21d28e7463259cd5e1d20f8884cedc52255c6fffedf77cd5afa6e73fa63549695b6fa96bb114209f405aff2a87fcbb01b2ca7d5ce82e7f2ce3f805421f42103b020000",
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
      "Wed, 29 Dec 2021 22:22:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaYMxQRE9R9AWvL; path=/; expires=Thu, 29 Dec 2022 22:22:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550c16ac24010fd15d9b3c6648b60732a7a93344a6b0bb5943249c6b8b0d9099b5d44c57fef4e145a6f5e0a739999f7debc792761b1245b7522fd3c09558994071f079cafe27ab1a4c4d77331145b859a312791438301f44a0d92415e7d837794fba6402bd264fac023736dfba6f0ce9161b2860275602f5b3483b7972cd0bde5c1ceb9b64bc7e3fd7e1fd5967c0b96282aa9116756282d82c36a766091dea4efecca6478dce4bba99c1d176c121b502c56580526d2c11fd8eae9566e28cce581198306d905747365ad7a808c65324ae4483eaea54c434d26511cc79bfee52dd9c66bf80d22fcdd2f3474ee992a1502fb6fbb7f4fdde3d992d6be654b5d8ba502fd0eda332b87fc1a0079e3441a87e6ce2cce5fe71f8aee96fd42020000",
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
      "Wed, 29 Dec 2021 22:22:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3H3SNW8k25S0G1; path=/; expires=Thu, 29 Dec 2022 22:22:55 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "296",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd945d6bc2301486ff8ae4da8f3656d05e8dd68b4dba2ace0d741b236da3cd9626256de654fadf9754c72a7420630311729373debe39e7f4497640e0908b2803f6e30e9008d83a300f5cf3da1af6c81cbfbf5aa009960453add9011f255889463c668d21c73af78264ce7d99045800dbec9b3a244818cff047aea44fac140532cf39d316140598aac438c5ac713ff5545a0a1d88f33ccdec4e67bd5eb75782cb1409cedb214f40a11d4281518e2367a34dca52652626ccc3db851ff7a1b31db9ca0a278868b34010c4da1473864474756cd7046cdf86a3450d6f2f3a3a65464a0134a0d932610b0e6610da6a59fdb661188bb2a5251789a4a8320ed57d99a128cb6f7944d4dcfebbdeea513f163df82e5a704a65aa4bca521c12441f1095fa2b1ff9870970c9d48f33d4e6c46114cd0a3b1bec4e8cd568cc4db972ebd8b9e3896aa00e9dae0eb1c3b67b41d4f47a75d41c06a1fa3e4768aa35ff25345fbe556812e3c671e6d3ec0d059e37a87d70502d31f0922081b54f0bd284c0b324c4fa0d21d53b6e9e80cb612ac573f10997af3077ad060000",
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
      "Wed, 29 Dec 2021 22:22:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlpDrKsqAql6rMA; path=/; expires=Thu, 29 Dec 2022 22:22:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .delete("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "recYbC1H4D5iYevj4",
      "recYyeCP0gJOo1ugC",
      "recm0IBBYRskabLL9",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f29149ce861e262ea69991a96559264ab53ab85556a63a0718a47bf9e71b96a63be353996be0e9e41419549c9d98e4e363a9541b5b0b00ef4e4ff08b000000",
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
      "Wed, 29 Dec 2021 22:22:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwd5je4r05voZBd6; path=/; expires=Thu, 29 Dec 2022 22:22:56 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "106",
      "Connection",
      "Close",
    ]
  );
