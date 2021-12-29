const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd946f4fc23010c6bf0ae96bc0ad80b0bd52c44411e73f44418de9b6ea9674bda56b3381f0dd6de71224cc84989810df35d7a777cf5d7fb9251234001166c87d5aa23844ae098c1ecf3bd1f4067cb89f0c3354476f316546b3441e49a8160d09a726fe4a94044f253e15c8751c13f19594c08d96119f322dbe4a29afdddf8ef403254c209232cddc83833ccf9bef02544a0440338004ad4c8640502269d89f9b24852795896b3ea28b9917f5707f313cd1a968426293cc1731e14d468113111e6da6ab23fee5b76f44b5d19768a3ca382e04d8c276c3c60dec8c2decda3dd76a372dcb9a154dbe8148142365df8e530419c9e42584b19ecd5f5bfd5eea47bf876bbf021853a9b194a53488099b10a6cc2b8f7865f3a0b844ae65cebcfc3e5bdfec3894557d0d8b37bb1a2c8ef336efcef03caf82e50e12ddcd362fb6b551bff59fe8e956d1530e42f7bd9704757f43d00ed074b7a1119d0e3fc5b2d53feb3c4c2f2a370c44bc36808a2dd32b0cc64134a61fda017ae6e83f916357ee9d721a4e6f2fc9c17f444e398bd5cbea138b8a3b1ba9060000",
    ],
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1705",
      "content-encoding",
      "gzip",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 02:19:23 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwV2neooTO6S3XWV; path=/; expires=Thu, 29 Dec 2022 02:19:23 GMT; domain=.airtable.com; samesite=none; secure",
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
      "recLXI5hYQoboUVJs",
      "recNZODzAw4n7Z2yw",
      "recr55nE2t3BH5WYK",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f23e119ea6199181f949f9a1615ec54ab53a3855fa45f9bb5439969be49947195596e35359646a9ae76a5462ece4611a1ee9ad541b5b0b00365e11808b000000",
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
      "Wed, 29 Dec 2021 02:19:23 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQeioHD19lKlsiQ; path=/; expires=Thu, 29 Dec 2022 02:19:23 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:23 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtOubMpLEYoPVCH; path=/; expires=Thu, 29 Dec 2022 02:19:23 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwy0thKLSQ3S2Rzv; path=/; expires=Thu, 29 Dec 2022 02:19:24 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZ7asABwxIeXUq6; path=/; expires=Thu, 29 Dec 2022 02:19:24 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw4rgQkC3ARoz0E6; path=/; expires=Thu, 29 Dec 2022 02:19:24 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwfRtBqGjUXbEA7L; path=/; expires=Thu, 29 Dec 2022 02:19:25 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d1d0f4033a122969206844a258a10ba24d7c6c2b1a38bad8656fdefd84907ba7561f4f3e777ef9e8f8cb03054b62cf9383259b22408dde3fabb7ae2efb76bdd2d3b36665b892a304796418d1e5a80c6a07f81b32673758ec49298c7416aa5de294ca5c61576d6c315d200e7ce5aa3838d821c95bf7a6e508fde5e537fed280895b54d9b4ca7fbfd3eda91710d903151616a760a0e0521582ce73fc1a48feb5a7ad1291e36597527e687c583b7c21a6430cb49828e141a0d54de5fda8d991e56990768940ed0c59495ec01c1453c89c544cc565c24f12c113711e77cd3afb435543b05e74a7c03bdaaa0b54b534adfdb7f67fd3bea9ac06494724d88d4365848506b502ebcca203b6f6f9cf6dfc6fde1ca224e9fa75f0b22514149020000",
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
      "Wed, 29 Dec 2021 02:19:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZJfzEyn667E4iQ; path=/; expires=Thu, 29 Dec 2022 02:19:25 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
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
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d1d0f4033a122969206844a258a10ba24d7c6c2b1a38bad8656fdefd84907ba7561f4f3e777ef9e8f8cb03054b62cf9383259b22408dde3fabb7ae2efb76bdd2d3b36665b892a304796418d1e5a80c6a07f81b32673758ec49298c7416aa5de294ca5c61576d6c315d200e7ce5aa3838d821c95bf7a6e508fde5e537fed280895b54d9b4ca7fbfd3eda91710d903151616a760a0e0521582ce73fc1a48feb5a7ad1291e36597527e687c583b7c21a6430cb49828e141a0d54de5fda8d991e56990768940ed0c59495ec01c1453c89c544cc565c24f12c113711e77cd3afb435543b05e74a7c03bdaaa0b54b534adfdb7f67fd3bea9ac06494724d88d4365848506b502ebcca203b6f6f9cf6dfc6fde1ca224e9fa75f0b22514149020000",
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
      "Wed, 29 Dec 2021 02:19:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwr6OxAjeNA1vQZL; path=/; expires=Thu, 29 Dec 2022 02:19:25 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
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
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d1d0f4033a122969206844a258a10ba24d7c6c2b1a38bad8656fdefd84907ba7561f4f3e777ef9e8f8cb03054b62cf9383259b22408dde3fabb7ae2efb76bdd2d3b36665b892a304796418d1e5a80c6a07f81b32673758ec49298c7416aa5de294ca5c61576d6c315d200e7ce5aa3838d821c95bf7a6e508fde5e537fed280895b54d9b4ca7fbfd3eda91710d903151616a760a0e0521582ce73fc1a48feb5a7ad1291e36597527e687c583b7c21a6430cb49828e141a0d54de5fda8d991e56990768940ed0c59495ec01c1453c89c544cc565c24f12c113711e77cd3afb435543b05e74a7c03bdaaa0b54b534adfdb7f67fd3bea9ac06494724d88d4365848506b502ebcca203b6f6f9cf6dfc6fde1ca224e9fa75f0b22514149020000",
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
      "Wed, 29 Dec 2021 02:19:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwM6FUeDdmfjQJSr; path=/; expires=Thu, 29 Dec 2022 02:19:26 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
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
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d1d0f4033a122969206844a258a10ba24d7c6c2b1a38bad8656fdefd84907ba7561f4f3e777ef9e8f8cb03054b62cf9383259b22408dde3fabb7ae2efb76bdd2d3b36665b892a304796418d1e5a80c6a07f81b32673758ec49298c7416aa5de294ca5c61576d6c315d200e7ce5aa3838d821c95bf7a6e508fde5e537fed280895b54d9b4ca7fbfd3eda91710d903151616a760a0e0521582ce73fc1a48feb5a7ad1291e36597527e687c583b7c21a6430cb49828e141a0d54de5fda8d991e56990768940ed0c59495ec01c1453c89c544cc565c24f12c113711e77cd3afb435543b05e74a7c03bdaaa0b54b534adfdb7f67fd3bea9ac06494724d88d4365848506b502ebcca203b6f6f9cf6dfc6fde1ca224e9fa75f0b22514149020000",
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
      "Wed, 29 Dec 2021 02:19:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHl8gXiXXXAh83e; path=/; expires=Thu, 29 Dec 2022 02:19:26 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
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
      "Wed, 29 Dec 2021 02:19:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwf0jWdXvgOfJupP; path=/; expires=Thu, 29 Dec 2022 02:19:26 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591314fc3301085ff4ae5b94d1d0f4033a122969206844a258a10ba24d7c6c2b1a38bad8656fdefd84907ba7561f4f3e777ef9e8f8cb03054b62cf9383259b22408dde3fabb7ae2efb76bdd2d3b36665b892a304796418d1e5a80c6a07f81b32673758ec49298c7416aa5de294ca5c61576d6c315d200e7ce5aa3838d821c95bf7a6e508fde5e537fed280895b54d9b4ca7fbfd3eda91710d903151616a760a0e0521582ce73fc1a48feb5a7ad1291e36597527e687c583b7c21a6430cb49828e141a0d54de5fda8d991e56990768940ed0c59495ec01c1453c89c544cc565c24f12c113711e77cd3afb435543b05e74a7c03bdaaa0b54b534adfdb7f67fd3bea9ac06494724d88d4365848506b502ebcca203b6f6f9cf6dfc6fde1ca224e9fa75f0b22514149020000",
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
      "Wed, 29 Dec 2021 02:19:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTlmZj6sOx23r79; path=/; expires=Thu, 29 Dec 2022 02:19:27 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "308",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recxEVkhK0Y7VnxMx",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ec23014fd15d267185d1305f66430bee098c620891863eeb60b3476edd2b56142f8777b0789f260e28b6fcdb9a7e79e73ee81592c8c2d1b96bc1e982c5942407bb7fcd8def397d152b7f396f5d95aa222ce8165506120cd4023e1efe09dc97c95a36549cc63821aa9370a53a97181ad0b645f97e0b0ecf8b977ce68525290a30ad3871a75eff9290d636f09d83a5737c970b8dbeda28d35be066b4c54988a1d49a1b0486ad34f12e91cfbc63eea14f7ab6c3b16d3fdec3648610592c4722b41470a8d065bde5ccaf5993ea59912a9979e48175b16b223082ee2412c0662b2e022892789b88e38e7ab2ed2dad8ca2b38b7124ae850058d9b9b5286eafedbebcf55bf1a1e7f1bb646295f93a5a6c642825a82f2f42b83ec9cde781d2ec7e9adcfd7bd8a4661f6c75e8e6fc72f262d2db35b020000",
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
      "Wed, 29 Dec 2021 02:19:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwWowh7IX5ckeEDv; path=/; expires=Thu, 29 Dec 2022 02:19:27 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551b16ec23010fd95c83304c7431532b5d009a569852803555539c901962ebec8b19b16c4bfd70e0cb0b174bc7befdebd7b7764062a3275c7b28f235335cb42638e369d3e2dd7dfd888a26523b65580817364856cc09316b4d7d13341c0bea4b354b8a604c3b2848bd0d297f221149dd23b845c6958c18ff5d3b6a761b074d6920eb2284b408fbcb6a0a3f765ee616742636f6ddb659349dff7f1ce906ba5218a2b6ad829285406a4857af61b4406fbae336f3a87c3a6d8a7627658ccbd14345205b1d228a96304d2d2d48fb77223a6cfa7cd0229cacfa49b2d2b35100417c9381163315d719125d34ca431e77c339cb425d338945711f944060465675fa8563ecbfff67bbdea1ed386105d1b2c752d544ae25aa20b53852c2e0990d3fe73dc17778671fa3cfd015d2459e65d020000",
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
      "Wed, 29 Dec 2021 02:19:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtkoLex2lIEG3N3; path=/; expires=Thu, 29 Dec 2022 02:19:27 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recxEVkhK0Y7VnxMx")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a96a06d4e28884b490342a112bda04db26d2c1c3b726c25b4eadfb1d348d00312176ed6ec787666f644784922a2b1e81fb61fd5237d5b6c65bfe9c994ec398ab225d189a450a323ad41a2c7dfc11a95da3a474da290861e6ab93c084cb8c40c7be3c8b629c16039f0736b8c925e49408ec24d9f1a9493d797c48dadf640654cd346f379d775c1412bdb80562a28544dce5ea1d0e8d5e24f2f3238b6ad7e96091e7769b564f1717defa4b006eec572cd41060295045dde5dcb4d89bca4893d69925c48575b323e101865e12c6433b6ca288bc255c46e034ae96e88b457bab602c6565c09032aa0351b557257dd7f7bfdb9ea57c3cb6fc35a09611b6fa96db0e020b620acff95423aa65756bacb51ff96e3756f82859bfdb197f31777471e0a4d020000",
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
      "Wed, 29 Dec 2021 02:19:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0zmrvN1Usyc47K; path=/; expires=Thu, 29 Dec 2022 02:19:28 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551b16ec23010fd95c83304c7431532b5d009a569852803555539c901962ebec8b19b16c4bfd70e0cb0b174bc7befdebd7b7764062a3275c7b28f235335cb42638e369d3e2dd7dfd888a26523b65580817364856cc09316b4d7d13341c0bea4b354b8a604c3b2848bd0d297f221149dd23b845c6958c18ff5d3b6a761b074d6920eb2284b408fbcb6a0a3f765ee616742636f6ddb659349dff7f1ce906ba5218a2b6ad829285406a4857af61b4406fbae336f3a87c3a6d8a7627658ccbd14345205b1d228a96304d2d2d48fb77223a6cfa7cd0229cacfa49b2d2b35100417c9381163315d719125d34ca431e77c339cb425d338945711f944060465675fa8563ecbfff67bbdea1ed386105d1b2c752d544ae25aa20b53852c2e0990d3fe73dc17778671fa3cfd015d2459e65d020000",
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
      "Wed, 29 Dec 2021 02:19:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnJmBXReI4CFLFq; path=/; expires=Thu, 29 Dec 2022 02:19:28 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d14ec23014fd15d267185d1305f66430bee098c620891863eeb60b3476edd2b56142f8777b0789f260e28b6fcdb9a7e79e73ee81592c8c2d1b96bc1e982c5942407bb7fcd8def397d152b7f396f5d95aa222ce8165506120cd4023e1efe09dc97c95a36549cc63821aa9370a53a97181ad0b645f97e0b0ecf8b977ce68525290a30ad3871a75eff9290d636f09d83a5737c970b8dbeda28d35be066b4c54988a1d49a1b0486ad34f12e91cfbc63eea14f7ab6c3b16d3fdec3648610592c4722b41470a8d065bde5ccaf5993ea59912a9979e48175b16b223082ee2412c0662b2e022892789b88e38e7ab2ed2dad8ca2b38b7124ae850058d9b9b5286eafedbebcf55bf1a1e7f1bb646295f93a5a6c642825a82f2f42b83ec9cde781d2ec7e9adcfd7bd8a4661f6c75e8e6fc72f262d2db35b020000",
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
      "Wed, 29 Dec 2021 02:19:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQtNgSpSnVI075S; path=/; expires=Thu, 29 Dec 2022 02:19:28 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recxEVkhK0Y7VnxMx",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590c14ec33010447fa5f2b94d1d1f80f8848ab894342054225184d026d9120bc78e1c5b29adf2efd86925e801890bc71dbd9d9dd90331586a537584bf1c88a8080fc2ee36ffa8efe8f365ae76ab1d9992ad40199803c9a0410f2d4161d0dfc0599db9a64043784ce32015ce5aad022ca140e9e9fb16d5e4e931f51bce04a1b6b6edf87cdef77df46eb46bc1681d95ba214370280d82c56af1194cc650ae330f2ac5fd26abafd862bfbcf156d88008668511a022895a81a9aecfeda6441d032f0234498fd0d995b5180146593c8bd98c256bca789c707611514a3763cbad368d93702aee7b8eaa84ceae7425fc77fe3bebcf53bf064ebe031b2da56b43a4aec55280cc41bab09541766aaf9db284533ffcf111c3ebf005d4152f762f020000",
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
      "Wed, 29 Dec 2021 02:19:29 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPzUXTlBtmuiX3F; path=/; expires=Thu, 29 Dec 2022 02:19:29 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recxEVkhK0Y7VnxMx")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d1d0f403ca120969206844a24baa04b7225168e1d39b6125af5bf63a795a003120be33d7df7eebd3b1051134e0c56e37df1d13cd0d7eb428deb91ccc94ea0ac7bc20f2487163db40285417f036775eeda120de1318d83543a6bb50ab08412a5a71f3b54b397e7cc6f381384c6daaee7cbe5300cd1bbd1ae03a37554e9961c834365102cd6e967309942b9de3ca90cf7dbbcb961e97e75e7adb00511cc4a23404512b50253df5edacd893a054e0334cb4ed0c5958d98004659bc88d982251bca789c707615514ab753cb9d36ad93702eee7b4eaa84deae752dfc77fe3bebcf53bf064ebe031b2da5eb42a4bec34a802c40bab095437e6eaf9db284533ffcf111c72f88650e0221020000",
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
      "Wed, 29 Dec 2021 02:19:29 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOBippdIFLHHMJV; path=/; expires=Thu, 29 Dec 2022 02:19:29 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "288",
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
      "1f8b0800000000000003b590c14ec33010447fa5f2b94d1d1f80f8848ab894342054225184d026d9120bc78e1c5b29adf2efd86925e801890bc71dbd9d9dd90331586a537584bf1c88a8080fc2ee36ffa8efe8f365ae76ab1d9992ad40199803c9a0410f2d4161d0dfc0599db9a64043784ce32015ce5aad022ca140e9e9fb16d5e4e931f51bce04a1b6b6edf87cdef77df46eb46bc1681d95ba214370280d82c56af1194cc650ae330f2ac5fd26abafd862bfbcf156d88008668511a022895a81a9aecfeda6441d032f0234498fd0d995b5180146593c8bd98c256bca789c707611514a3763cbad368d93702aee7b8eaa84ceae7425fc77fe3bebcf53bf064ebe031b2da56b43a4aec55280cc41bab09541766aaf9db284533ffcf111c3ebf005d4152f762f020000",
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
      "Wed, 29 Dec 2021 02:19:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcAzT7k6JqEg1RY; path=/; expires=Thu, 29 Dec 2022 02:19:30 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551b16ec23010fd95c83304c7431532b5d009a569852803555539c901962ebec8b19b16c4bfd70e0cb0b174bc7befdebd7b7764062a3275c7b28f235335cb42638e369d3e2dd7dfd888a26523b65580817364856cc09316b4d7d13341c0bea4b354b8a604c3b2848bd0d297f221149dd23b845c6958c18ff5d3b6a761b074d6920eb2284b408fbcb6a0a3f765ee616742636f6ddb659349dff7f1ce906ba5218a2b6ad829285406a4857af61b4406fbae336f3a87c3a6d8a7627658ccbd14345205b1d228a96304d2d2d48fb77223a6cfa7cd0229cacfa49b2d2b35100417c9381163315d719125d34ca431e77c339cb425d338945711f944060465675fa8563ecbfff67bbdea1ed386105d1b2c752d544ae25aa20b53852c2e0990d3fe73dc17778671fa3cfd015d2459e65d020000",
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
      "Wed, 29 Dec 2021 02:19:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwb0LhyUm1pbE5gF; path=/; expires=Thu, 29 Dec 2022 02:19:30 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recxEVkhK0Y7VnxMx",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recClt89ARVvlm2Np",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525f4fc2301cfc2a4b9ff9b35583b027047dc1310dc125628ce9b61facb16b97ae9509e1bbdb0e086230e1c517dedaebfdaed7ebad918444c8b444feeb1ad114f916a8eea38fecc17db9897835ae5003cd2930cb59a390e460484946f80252a7de9af377a29508751e8344bee77a168ab55282db2146626066eab100ee3c4f0233a1a50532a58ad26fb797cb656b21852e8814a295881c6dac4222812848075f56a436a74bf9c40358cdc2ac8b07abd1d048414ea8158b2525bcc5407022d3feb15c03f1adf1812539c1967474cb94d604ec62afe9e126ee4d5dec7b3d1f775aaeebceea57ce85cc3523bf0230efad4f1929d558a4d4a4f5df9e7f5ef597f12bef605c0ac674612d95052494b088306da74212ee52109a2be4bb765d52be6010500e53a80c881494ca60b5d4defa32137da8485e30d8ffd899496e1a87aa0d99eaf66e27d127cb71589caada4864dcb913a76a862dc477dbce49e7185d5215bba7aab80fc8e471593594a42e9d7f7d46b576c96cde36df9a1fce5bd3040000",
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
      "Wed, 29 Dec 2021 02:19:31 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwFoF44p9pyWXLoE; path=/; expires=Thu, 29 Dec 2022 02:19:31 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "394",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recxEVkhK0Y7VnxMx")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736758204d4a72a880ba401a152895ed026d936168e1df9a18456fd77ec940a8a84c4859b3d3b333b1eef09af08231acbfe76f556dfd397ab95ec173d19930d475119c2f62487063da9ac416eb11a0d573f7f056755ee9a023561318d0354386b950c2201050aaf7a68518e9e9f32af703a00b5b5ad61d369d775d1562bd782562a2a55430ec1a1d40816abf43d980ce19cd18f32c3dd3aafaf93747777e3adb0011ecc0acd41460295045dcdcfedc6441e83a78134ca8ea4b32d4b3e10129ac493389924b3254d583c63c96544295d0fafdc28dd38013f0af0ef1da6028c5da88afbb6fe3bf3f755bf05bf88bf826b25846b4324d362c941ac40b8a0ca21ff6c41396909a3e16cb8dc0accb8c425f61e24168df5d860758aded56a8e3d34adc0d38ffdb1c9c307dc7461586a020000",
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
      "Wed, 29 Dec 2021 02:19:31 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwji4Uxo7UTPP836; path=/; expires=Thu, 29 Dec 2022 02:19:31 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recClt89ARVvlm2Np")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394349b26c869839d50d74d8871e082dcd6402437a9d2646c20fe7d49411a1c26edb2a3fd9e9f9f9f8f4c554c328be594dc68fc345f7e502df286f5d94621552d934796438d8134333bdd7b3618b1357867725f1768994cb9882d7d291f62d12abd25cc94c6057eba302dbab1c23b67741425289042ffb541dd7b9f6701f6363676ce35ad1c0ef7fb7db2b5c637608d494a53b35354282d82c36af215453af3beb56f3ac3c32adf8dc4e4309b0629ac4145b1c22ad009a1d160abc75bb93ed3e7c32691d4cbcea49b2d0bd5110417e9201503315e7021d3b114a38473beea4eda185b7b82ab80421e1d42d0ba1753a990e47ffbbd5ef59be9bbf4c7b43544be8996da064b05b404f2712a87fc9280f13afc8d776c70e19d4cde07e48fc99cbe0182268e855a020000",
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
      "Wed, 29 Dec 2021 02:19:31 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwsMaoSfosoNt0cj; path=/; expires=Thu, 29 Dec 2022 02:19:31 GMT; domain=.airtable.com; samesite=none; secure",
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
    filterByFormula: "OR%28%7BName%7D%3D%22changed%20Name%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4bc33014fd2b23cf5b974650d7a731f145bb2a32074e446edbbb359826251fb46eecbf9b740e9d20f8e25b72ee39e79e9cec88c642e9d290e479477849920074d7cbb7ea963e5d2c6537efc890ac398ac0d9910c6af4a4a202b9c172d05ffdfc159c5599ab73d42489691ca0dc59ab641009c85178d55d8372f0f8907a85d301a8ac6d4c321eb76d1b6db4720d68a5a242d5641f1c0a8d60b19cbd07933e9c33fa5ea6b85d65d5259b6d6faebc15d6c08359ae39c848a092a0cbe9a9dd90c843f059200dd203e964cb82f70446593c8ad9884d169425f12461e711a574d5bf72ad74ed04fc28c0bfb79f0a3076ae4aeedbfaefccdf57fd16fc2cfe0aae9510ae09914c830507b104e1822a83ecb305e5a425090d67c3e54660ca252eb0f320b168acc77aab63f4b65253eca06e041e7fec8f4dee5ff61ff71fcefc78020000",
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
      "Wed, 29 Dec 2021 02:19:32 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwADixDh2i9BbagZ; path=/; expires=Thu, 29 Dec 2022 02:19:32 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recxEVkhK0Y7VnxMx")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb4ec33010fc95cae736758204d4a72a880ba401a152895ed026d936168e1df9a18456fd77ec940a8a84c4859b3d3b333b1eef09af08231acbfe76f556dfd397ab95ec173d19930d475119c2f62487063da9ac416eb11a0d573f7f056755ee9a023561318d0354386b950c2201050aaf7a68518e9e9f32af703a00b5b5ad61d369d775d1562bd782562a2a55430ec1a1d40816abf43d980ce19cd18f32c3dd3aafaf93747777e3adb0011ecc0acd41460295045dcdcfedc6441e83a78134ca8ea4b32d4b3e10129ac493389924b3254d583c63c96544295d0fafdc28dd38013f0af0ef1da6028c5da88afbb6fe3bf3f755bf05bf88bf826b25846b4324d362c941ac40b8a0ca21ff6c41396909a3e16cb8dc0accb8c425f61e24168df5d860758aded56a8e3d34adc0d38ffdb1c9c307dc7461586a020000",
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
      "Wed, 29 Dec 2021 02:19:32 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwFN3XT8HPHHVfk; path=/; expires=Thu, 29 Dec 2022 02:19:32 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c14e023110fd15d2332cdd6a0cf4a4e089acab21c84163ccecee004dba9d4db71585f0efb60b897030f1e271e6bd79f3e6cd9e592cc9562d93af7ba62a266363aadd687c375f7ee85ae40debb395421d397b96438d8134a38de9dd1346ec1dbca3dcd7055a26532e62cb9cca9b58b4caac3566cae0023f5d9816dd58e19d2313453514a843ffb141d37b9e6701f6363636ce35ad1c0eb7db6db2b6e41bb0444949353b4485d22238ac265f51a433ef5bfb6432dcbde49b9198ec66d3208535a82856580526d148066c757b29d767e678d824927ad99174b165a13a82e0221da46220c60b2e643a96629470ce5fba9356646bafe12ca09047876868dd03552a24f9df7ecf57fd66fa2afd316d496bdf444b6d83a502bd04ede3540ef92901f226fc8d776c70e19d4c5e07e48fc91cde0edfc0a056ec68020000",
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
      "Wed, 29 Dec 2021 02:19:32 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNKx9BuwHMbSUi4; path=/; expires=Thu, 29 Dec 2022 02:19:32 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5515d4bc33014fd2b23cf5b974650d7a731f145bb2a32074e446edbbb359826251fb46eecbf9b740e9d20f8e25b72ee39e79e9cec88c642e9d290e479477849920074d7cbb7ea963e5d2c6537efc890ac398ac0d9910c6af4a4a202b9c172d05ffdfc159c5599ab73d42489691ca0dc59ab641009c85178d55d8372f0f8907a85d301a8ac6d4c321eb76d1b6db4720d68a5a242d5641f1c0a8d60b19cbd07933e9c33fa5ea6b85d65d5259b6d6faebc15d6c08359ae39c848a092a0cbe9a9dd90c843f059200dd203e964cb82f70446593c8ad9884d169425f12461e711a574d5bf72ad74ed04fc28c0bfb79f0a3076ae4aeedbfaefccdf57fd16fc2cfe0aae9510ae09914c830507b104e1822a83ecb305e5a425090d67c3e54660ca252eb0f320b168acc77aab63f4b65253eca06e041e7fec8f4dee5ff61ff71fcefc78020000",
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
      "Wed, 29 Dec 2021 02:19:33 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwU4sgIsjE7w3VRU; path=/; expires=Thu, 29 Dec 2022 02:19:32 GMT; domain=.airtable.com; samesite=none; secure",
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
  .delete("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ "records%5B%5D": ["recxEVkhK0Y7VnxMx", "recClt89ARVvlm2Np"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f215ae61d919de0691e6617915be154ab53a38553ae79458583a068595e5e41af91528d5c6d602000047dc9d61000000",
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
      "Wed, 29 Dec 2021 02:19:33 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTlAbqD8MalGwC1; path=/; expires=Thu, 29 Dec 2022 02:19:33 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recxEVkhK0Y7VnxMx")
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
      "Wed, 29 Dec 2021 02:19:33 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRpUQGdCr888Chx; path=/; expires=Thu, 29 Dec 2022 02:19:33 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recClt89ARVvlm2Np")
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
      "Wed, 29 Dec 2021 02:19:33 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwuxFXqczvCwDIB5; path=/; expires=Thu, 29 Dec 2022 02:19:33 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkHFB5bLEKoN1FB; path=/; expires=Thu, 29 Dec 2022 02:19:34 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwIvPwxFpmOBHuGu; path=/; expires=Thu, 29 Dec 2022 02:19:34 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6Wbg6iCWEOj8z6; path=/; expires=Thu, 29 Dec 2022 02:19:34 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5535d6fda3014fd2b91f70aa993400b7eea58a749156355c7f6d0524d4e7221168e1dddd8e24bfcf7d90604547be8cba4bcf8dce37b8fcfb9d911844263d912f6ba23a224cc034f0fdbfaeb70a09a65f9796a4987cc0548cfd99109afc1911e75a5a2070dbef6875ba327b6ce01094b68e6a1a2826299eb3561062d04c422822a3684a534ce7a1e2ab9f1bd529a26dd24eda6b7e4844e457d5d992629a3d47d31a5f4e5c0b3c88dd08ab0de60483d023517d25dabe11ed6bc6e24c485ae03b9b6d20829144c616d1c45444ba55733e5a1f6cc70577e8284c2783fc83394aef40d011479f31c757ce45d9cf86303588072edb22c0eaf6e2aade0e404b94deea27ebfef1e90f5c208af572d9c47e1208aea28e65305bc049ca96e945b29c1cc54e0b78e2d617c563d178a4bb9e9443c425858c9310ac95cb00ff21d7724ed211d8bde93ca98a6653737abd52a5e68bdb8f026b7c6781b7744f21c3cf947032afaf53c76e57fdc466d1b8e5a8706fb902d820bad1c6d7c93b044b6c5273586edcba41aa4a3ede317d7ea144f8e82ab5882561ccbfbeb761da20e0b36f2a4687c205d4d79bf1bc3294d59326459ffbc1b738d2e4f7eb1a86e2f4345f2d67cd7a570befd6fbd97a33e221ab594b6f192da060ac1e56fee3364ee9f9b1c1dd0d6af1b75870f9ab17fdbff05ead7a529e3030000",
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
      "Wed, 29 Dec 2021 02:19:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlBKHhtfquZLnaA; path=/; expires=Thu, 29 Dec 2022 02:19:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6fda3014fd2b91f70aa993400b7eea58a749156355c7f6d0524d4e7221168e1dddd8e24bfcf7d90604547be8cba4bcf8dce37b8fcfb9d911844263d912f6ba23a224cc034f0fdbfaeb70a09a65f9796a4987cc0548cfd99109afc1911e75a5a2070dbef6875ba327b6ce01094b68e6a1a2826299eb3561062d04c422822a3684a534ce7a1e2ab9f1bd529a26dd24eda6b7e4844e457d5d992629a3d47d31a5f4e5c0b3c88dd08ab0de60483d023517d25dabe11ed6bc6e24c485ae03b9b6d20829144c616d1c45444ba55733e5a1f6cc70577e8284c2783fc83394aef40d011479f31c757ce45d9cf86303588072edb22c0eaf6e2aade0e404b94deea27ebfef1e90f5c208af572d9c47e1208aea28e65305bc049ca96e945b29c1cc54e0b78e2d617c563d178a4bb9e9443c425858c9310ac95cb00ff21d7724ed211d8bde93ca98a6653737abd52a5e68bdb8f026b7c6781b7744f21c3cf947032afaf53c76e57fdc466d1b8e5a8706fb902d820bad1c6d7c93b044b6c5273586edcba41aa4a3ede317d7ea144f8e82ab5882561ccbfbeb761da20e0b36f2a4687c205d4d79bf1bc3294d59326459ffbc1b738d2e4f7eb1a86e2f4345f2d67cd7a570befd6fbd97a33e221ab594b6f192da060ac1e56fee3364ee9f9b1c1dd0d6af1b75870f9ab17fdbff05ead7a529e3030000",
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
      "Wed, 29 Dec 2021 02:19:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwR3KoEH6IbXQIQX; path=/; expires=Thu, 29 Dec 2022 02:19:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5535d6fda3014fd2b91f70aa993400b7eea58a749156355c7f6d0524d4e7221168e1dddd8e24bfcf7d90604547be8cba4bcf8dce37b8fcfb9d911844263d912f6ba23a224cc034f0fdbfaeb70a09a65f9796a4987cc0548cfd99109afc1911e75a5a2070dbef6875ba327b6ce01094b68e6a1a2826299eb3561062d04c422822a3684a534ce7a1e2ab9f1bd529a26dd24eda6b7e4844e457d5d992629a3d47d31a5f4e5c0b3c88dd08ab0de60483d023517d25dabe11ed6bc6e24c485ae03b9b6d20829144c616d1c45444ba55733e5a1f6cc70577e8284c2783fc83394aef40d011479f31c757ce45d9cf86303588072edb22c0eaf6e2aade0e404b94deea27ebfef1e90f5c208af572d9c47e1208aea28e65305bc049ca96e945b29c1cc54e0b78e2d617c563d178a4bb9e9443c425858c9310ac95cb00ff21d7724ed211d8bde93ca98a6653737abd52a5e68bdb8f026b7c6781b7744f21c3cf947032afaf53c76e57fdc466d1b8e5a8706fb902d820bad1c6d7c93b044b6c5273586edcba41aa4a3ede317d7ea144f8e82ab5882561ccbfbeb761da20e0b36f2a4687c205d4d79bf1bc3294d59326459ffbc1b738d2e4f7eb1a86e2f4345f2d67cd7a570befd6fbd97a33e221ab594b6f192da060ac1e56fee3364ee9f9b1c1dd0d6af1b75870f9ab17fdbff05ead7a529e3030000",
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
      "Wed, 29 Dec 2021 02:19:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwj9nNgNLhi3mxlg; path=/; expires=Thu, 29 Dec 2022 02:19:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recPDzmE98npkdATu",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e44037b52c417829398e903684cb75d5c63d7bbdcb541b7f0df6d8789f060e28b8fbde7ebe9b9a71d23c8918a86c5db8ec982c57eb05eb4d5ed6caaebf7e23ab56cc8761294673a96880a1cb4c4520f16085e7b15d66062ab0c88c5219ff811c9bc4ce1c338f459f750668d41ed2d94c84039e1be063d787c5839d9921f94c6d44d3c1eeff7fbe08dd0d68210831c2b76f00e39813050cc3fbd491fd536b4d62b683749398de6edf2c6594125a437cb480a1d28402da8b83ab71b327d5c63eea1c1ea089dbd92ca1e8878148ec26814cd521ec5e12c9e5c049cf34dbfd20ea9b24a9cd4e1b6ef15251a73878574bdfd77ded3a77e0d7df9139a50295bfb484d0db914ea4928eb6f2522f96e00ad761fc7dde18f651c5e0e5f22bf7b2749020000",
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
      "Wed, 29 Dec 2021 02:19:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNyHVNvjwZqeVzc; path=/; expires=Thu, 29 Dec 2022 02:19:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recPDzmE98npkdATu")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aa9406d4e10caa50aa1428143858436c9965838dec8b11568d5bf63a795680f485c387a673c3b33bb67a26231d358ae97bbe67e3157ed47759b5b36665b81b2ea58bc671934e8482baad56849e8b137b08632db14a8591cf2991f6951d6397e1a477d5503a9b0c690f212120a940e786c518d9e9f52075bed07b5316d174fa77ddf07ef9a6c0b9a2828a96107af506a048355f2e54506abb6d36b95e26e93d5f328d9adee9c143620bc58a105a8402229d0d5cda5dc98a9638cc49346e99174b125170321e2513809a349b4c87914878b78761570ce3743a42de9c64a38abc3a51f10099d79a04ab8defedbeff9aa5f4d5fff98d624a56dbda5aec552807c0169fdaf0cb2530364953b1c778f3f9671f806d4a5202c3b020000",
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
      "Wed, 29 Dec 2021 02:19:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6DnrlGgZLPsqoR; path=/; expires=Thu, 29 Dec 2022 02:19:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recPDzmE98npkdATu")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aa9406d4e10caa50aa1428143858436c9965838dec8b11568d5bf63a795680f485c387a673c3b33bb67a26231d358ae97bbe67e3157ed47759b5b36665b81b2ea58bc671934e8482baad56849e8b137b08632db14a8591cf2991f6951d6397e1a477d5503a9b0c690f212120a940e786c518d9e9f52075bed07b5316d174fa77ddf07ef9a6c0b9a2828a96107af506a048355f2e54506abb6d36b95e26e93d5f328d9adee9c143620bc58a105a8402229d0d5cda5dc98a9638cc49346e99174b125170321e2513809a349b4c87914878b78761570ce3743a42de9c64a38abc3a51f10099d79a04ab8defedbeff9aa5f4d5fff98d624a56dbda5aec552807c0169fdaf0cb2530364953b1c778f3f9671f806d4a5202c3b020000",
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
      "Wed, 29 Dec 2021 02:19:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6PbUeIZjprImGD; path=/; expires=Thu, 29 Dec 2022 02:19:36 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwD00DQGZe6Lgxaz; path=/; expires=Thu, 29 Dec 2022 02:19:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwbbONHtru1cDanP; path=/; expires=Thu, 29 Dec 2022 02:19:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:37 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwA6b1fAA8Leo2o8; path=/; expires=Thu, 29 Dec 2022 02:19:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590c14ec33010447fa5f2b94d9d9443eb134a41d02a240805848a10da241b6ac9b123c75644a3fe3b76da03bdf5c271476f676776201a4ba5ab8eb08f81f08a302fac370f591dbfdfdd2f36f96346a6a4e6283c3390141a74d016247afd0bac51a96d0ad48485f4c64b853546490f0b2850383a6b514e5e5f12b761b517f6c6b41d9bcffbbe0fbeb5b22d68a5825235e4e81d4a8d60b08a7fbcc918ca76fa592678d8a5fb65141fb66b67850d706f56680e3210a824e8eaf6d26e4ae42970eca14972822eaee47c04221a85b3309a45ab9c462c5cb1c532a094eec696b5d28d15702eee7a8eaa80ce3ca98abbeffc77d6bfa7ae09ac9510b6f591ba164b0ee20d84f55b29a4e7f6ca4a431875c3958f387e1e7f018ce853c22f020000",
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
      "Wed, 29 Dec 2021 02:19:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzSR80eNFqeVnQW; path=/; expires=Thu, 29 Dec 2022 02:19:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:38 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLj8j3DF9GRFccV; path=/; expires=Thu, 29 Dec 2022 02:19:38 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590c14ec33010447fa5f2b94d9d9443eb134a41d02a240805848a10da241b6ac9b123c75644a3fe3b76da03bdf5c271476f676776201a4ba5ab8eb08f81f08a302fac370f591dbfdfdd2f36f96346a6a4e6283c3390141a74d016247afd0bac51a96d0ad48485f4c64b853546490f0b2850383a6b514e5e5f12b761b517f6c6b41d9bcffbbe0fbeb5b22d68a5825235e4e81d4a8d60b08a7fbcc918ca76fa592678d8a5fb65141fb66b67850d706f56680e3210a824e8eaf6d26e4ae42970eca14972822eaee47c04221a85b3309a45ab9c462c5cb1c532a094eec696b5d28d15702eee7a8eaa80ce3ca98abbeffc77d6bfa7ae09ac9510b6f591ba164b0ee20d84f55b29a4e7f6ca4a431875c3958f387e1e7f018ce853c22f020000",
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
      "Wed, 29 Dec 2021 02:19:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqpNcfcZ8R10t6D; path=/; expires=Thu, 29 Dec 2022 02:19:38 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recPDzmE98npkdATu")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aa9406d4e10caa50aa1428143858436c9965838dec8b11568d5bf63a795680f485c387a673c3b33bb67a26231d358ae97bbe67e3157ed47759b5b36665b81b2ea58bc671934e8482baad56849e8b137b08632db14a8591cf2991f6951d6397e1a477d5503a9b0c690f212120a940e786c518d9e9f52075bed07b5316d174fa77ddf07ef9a6c0b9a2828a96107af506a048355f2e54506abb6d36b95e26e93d5f328d9adee9c143620bc58a105a8402229d0d5cda5dc98a9638cc49346e99174b125170321e2513809a349b4c87914878b78761570ce3743a42de9c64a38abc3a51f10099d79a04ab8defedbeff9aa5f4d5fff98d624a56dbda5aec552807c0169fdaf0cb2530364953b1c778f3f9671f806d4a5202c3b020000",
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
      "Wed, 29 Dec 2021 02:19:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwGNEHaW8CGEXFZq; path=/; expires=Thu, 29 Dec 2022 02:19:38 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 02:19:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwC9nJnsfomJKUjf; path=/; expires=Thu, 29 Dec 2022 02:19:39 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd52514fc23018fc2ba4cf30baa106f6a403a2101c844c635063baadb8c6aedfd2b54121fbefb6638992f0c00b89f1b197fbae7797db214913906989fce71d6229f22d309cdcced7c1d368dc9b447773d4466b46b9e5ec5048726a485322a8c5df885610ea3ca612f92ebeb050ac950261c99cc4941bf6bca0a2f5b09c990b2d2d902955947eb7bbd96c9c7709ba2012c049204795554824258aa6c19715a94de9522ec48c6e5761d6f782ed7468a4684e98158b2523c2e1140491e9f5a15c1b89bde1c0925ab33de9e09788d5040f7b6ec7f53ade20c29eef0efc5edfc118afea946b90b9e6a4096e72d62827a5ba87949976ceedf5f757a71896c0b92eaca5b2a00923fc91706daf421236e9410b857c6c1e271651b57f16b2186df3f1a02f8a8ff426d247170299688de0d84a7ab543966411fd3416d08b40ff6937974777d3d461d2ffc9ed5c9d693b4d19d56bf50d5eb927416b040000",
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
      "Wed, 29 Dec 2021 02:19:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw69KtBdPycwcaFM; path=/; expires=Thu, 29 Dec 2022 02:19:39 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recCIGOfBXDE3ITHO", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recPDzmE98npkdATu",
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
      "Wed, 29 Dec 2021 02:19:39 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1jZgS8rZylGsbz; path=/; expires=Thu, 29 Dec 2022 02:19:39 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "recCIGOfBXDE3ITHO", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6ef0007d3243a3101cc620311863eeb68b34e9daa56b4384f0dfed1d18e5c1c417df9ad3ef9e9e737b60160b63cb86899703932513244ca6b78b4dfa7c7d33982eef16accb3612153107964185019a8146d2dfc03b93f92a47cb44cc8724e5de39a3095690a30af4a246dd797a9c87096f49d83a5737a2dfdfed76d1bb35be066b4c54988a1dc9a1b0080ecbf4834cda50beb10f7a8efb75b61d25e97e360956588124b3dc4ad09142a3c1965797765da64f8153823af31374f1ca52b640c293b81727bd64bce48988c762308a38e7ebb6e5c6d8ca2b38170f3d5b5541e3ee4d29c376fe3bebcfa77e0b3ce4df81ad51cad714a9a9b190a056a03c4d65909ddb1baf1d139ccefaeb03c3cd1fb7727c3d7e02f2c769e63c020000",
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
      "Wed, 29 Dec 2021 02:19:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQFofSWS1ulwTll; path=/; expires=Thu, 29 Dec 2022 02:19:40 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recPDzmE98npkdATu",
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
      "Wed, 29 Dec 2021 02:19:40 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1ngiTIYUuitqUs; path=/; expires=Thu, 29 Dec 2022 02:19:40 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5505d4fc24010fc2be49ea15cab24724f06134308d62f340663ccb65de492eb6d73bd0b0ae1bf7b5b48d4375e7cdcdd99d999d9098725b9aa15ea75277425142fa62f5b90b3d1e76aba0cd7f7a22f561a0d637622871a23e8916a248b7c7a87e0290f75814ea8548e78658fe3190f45f09e2c930d146822fbb641db7b7a98477a70bc587bdfb46a38dc6c36c987a3d080234a4aaac59e154a87e0b19a7cb1486732b4eecece71bbccd717d9643bbb8a52588366b1c269b08989fec055977fe5fac21e024c18d49b1f407fbe2c7407c864960ed26c908d173253e9589da7899472d9455e91ab83819f2262eeee60a0f53754e958d87fdbfdfdea14cf8e8c090d5b6a1b2c35986730815939e4c70228582f948cc3895decdff6dfc1c9d06b42020000",
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
      "Wed, 29 Dec 2021 02:19:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPmrloVDkWc95Z1; path=/; expires=Thu, 29 Dec 2022 02:19:40 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "300",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recCIGOfBXDE3ITHO")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6ef0007d3243a390b9193389e1c5dc6d77d2a46b97aecd2284ff6e3b30ca83892fbe35a7e79e7ee7f648784518d158aed6f7591dbfdedecdd6f94346c6a4e628aa8eb02349a14167da8044afbf81352ab54d819ab090cebd54586394f46601050ae7ce5a94a397e7c44d58ed85bd316dc7a6d3beef8377ad6c0b5aa9a0540d39f984522318ace20f1f3240d94e3fc9040fbb74bf88e2c366e5a2b001eec30acd41060295045ddd5cc78d893c03c7de344acea6ab57723e18221a8593309a44cb9c462c5cb2d922a094ee8696b5d28d157029ee7a0eaa80ce3caa8abbedfc37ebcfa77e039ed36f60ad84b0ad47ea5a2c39882d08eba752482fed95958630eacff2eb03ddcd1fb772fa046e45633b2e020000",
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
      "Wed, 29 Dec 2021 02:19:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwShoGZ6gFsxwy39; path=/; expires=Thu, 29 Dec 2022 02:19:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recPDzmE98npkdATu")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aa9406d4e10caa50aa1428143858436c9965838dec8b11568d5bf63a795680f485c387a673c3b33bb67a26231d358ae97bbe67e3157ed47759b5b36665b81b2ea58bc671934e8482baad56849e8b137b08632db14a8591cf2991f6951d6397e1a477d5503a9b0c690f212120a940e786c518d9e9f52075bed07b5316d174fa77ddf07ef9a6c0b9a2828a96107af506a048355f2e54506abb6d36b95e26e93d5f328d9adee9c143620bc58a105a8402229d0d5cda5dc98a9638cc49346e99174b125170321e2513809a349b4c87914878b78761570ce3743a42de9c64a38abc3a51f10099d79a04ab8defedbeff9aa5f4d5fff98d624a56dbda5aec552807c0169fdaf0cb2530364953b1c778f3f9671f806d4a5202c3b020000",
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
      "Wed, 29 Dec 2021 02:19:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw95wHAYZwhPzHOf; path=/; expires=Thu, 29 Dec 2022 02:19:41 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5505d4fc24010fc2be49ea15cab24724f06134308d62f340663ccb65de492eb6d73bd0b0ae1bf7b5b48d4375e7cdcdd99d999d9098725b9aa15ea75277425142fa62f5b90b3d1e76aba0cd7f7a22f561a0d637622871a23e8916a248b7c7a87e0290f75814ea8548e78658fe3190f45f09e2c930d146822fbb641db7b7a98477a70bc587bdfb46a38dc6c36c987a3d080234a4aaac59e154a87e0b19a7cb1486732b4eecece71bbccd717d9643bbb8a52588366b1c269b08989fec055977fe5fac21e024c18d49b1f407fbe2c7407c864960ed26c908d173253e9589da7899472d9455e91ab83819f2262eeee60a0f53754e958d87fdbfdfdea14cf8e8c090d5b6a1b2c35986730815939e4c70228582f948cc3895decdff6dfc1c9d06b42020000",
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
      "Wed, 29 Dec 2021 02:19:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVQ3FfgjhL5VnOF; path=/; expires=Thu, 29 Dec 2022 02:19:41 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "300",
      "Connection",
      "Close",
    ]
  );
