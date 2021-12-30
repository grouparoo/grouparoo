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
      "Thu, 30 Dec 2021 01:21:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwgWNUqX4tPUwzY; path=/; expires=Fri, 30 Dec 2022 01:21:35 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwl1epjXdb2Jauxu; path=/; expires=Fri, 30 Dec 2022 01:21:36 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTB8gmbanXWXz1E; path=/; expires=Fri, 30 Dec 2022 01:21:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVX8MCp3l3qaWDb; path=/; expires=Fri, 30 Dec 2022 01:21:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtBAZwtr4qiQaba; path=/; expires=Fri, 30 Dec 2022 01:21:38 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRUD9RqsPYbLORw; path=/; expires=Fri, 30 Dec 2022 01:21:38 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e3311f764c0c484cc690c22608cb9db2ed0a46b97bb36280bffdd76e341de78f1b1a75fcf3df7b4658485a6b261c947cb44c9122fbc2fd754ad6f570f8ff92c366cc8b602a5675a9641850e9a8342af7f81353ab3558ec4927072e3a546a89dc454285ce0b771f01ea987736b8c56de46428ed25d3dd7a8066fafa9bbb6e485bd3175938cc787c321d891b63590d641a12b76f20e0521182ca73fdea48b6b1b7a51291e37d97e124d8ff399b3c20a8437cb49800a246a0554de5fda0d99ea57997a6890f6d0c59485e8808847e1288c46315ff03089c224be0b38e79b6ea5ada6ca4a3857e21ae854098d79d2a570bdfd77d6bfa3ae094c5a4a5bfb484d8d8500b90469fdab0cb2f3f6da2af76ddc1dae2ce2f479fa05f6fa5cba49020000",
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
      "Thu, 30 Dec 2021 01:21:38 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2KUgDfZx3vmrkz; path=/; expires=Fri, 30 Dec 2022 01:21:38 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e3311f764c0c484cc690c22608cb9db2ed0a46b97bb36280bffdd76e341de78f1b1a75fcf3df7b4658485a6b261c947cb44c9122fbc2fd754ad6f570f8ff92c366cc8b602a5675a9641850e9a8342af7f81353ab3558ec4927072e3a546a89dc454285ce0b771f01ea987736b8c56de46428ed25d3dd7a8066fafa9bbb6e485bd3175938cc787c321d891b63590d641a12b76f20e0521182ca73fdea48b6b1b7a51291e37d97e124d8ff399b3c20a8437cb49800a246a0554de5fda0d99ea57997a6890f6d0c59485e8808847e1288c46315ff03089c224be0b38e79b6ea5ada6ca4a3857e21ae854098d79d2a570bdfd77d6bfa3ae094c5a4a5bfb484d8d8500b90469fdab0cb2f3f6da2af76ddc1dae2ce2f479fa05f6fa5cba49020000",
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
      "Thu, 30 Dec 2021 01:21:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZCZ9aQGMKxmRnf; path=/; expires=Fri, 30 Dec 2022 01:21:39 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e3311f764c0c484cc690c22608cb9db2ed0a46b97bb36280bffdd76e341de78f1b1a75fcf3df7b4658485a6b261c947cb44c9122fbc2fd754ad6f570f8ff92c366cc8b602a5675a9641850e9a8342af7f81353ab3558ec4927072e3a546a89dc454285ce0b771f01ea987736b8c56de46428ed25d3dd7a8066fafa9bbb6e485bd3175938cc787c321d891b63590d641a12b76f20e0521182ca73fdea48b6b1b7a51291e37d97e124d8ff399b3c20a8437cb49800a246a0554de5fda0d99ea57997a6890f6d0c59485e8808847e1288c46315ff03089c224be0b38e79b6ea5ada6ca4a3857e21ae854098d79d2a570bdfd77d6bfa3ae094c5a4a5bfb484d8d8500b90469fdab0cb2f3f6da2af76ddc1dae2ce2f479fa05f6fa5cba49020000",
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
      "Thu, 30 Dec 2021 01:21:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7AQqSLpqo2qVcr; path=/; expires=Fri, 30 Dec 2022 01:21:39 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e3311f764c0c484cc690c22608cb9db2ed0a46b97bb36280bffdd76e341de78f1b1a75fcf3df7b4658485a6b261c947cb44c9122fbc2fd754ad6f570f8ff92c366cc8b602a5675a9641850e9a8342af7f81353ab3558ec4927072e3a546a89dc454285ce0b771f01ea987736b8c56de46428ed25d3dd7a8066fafa9bbb6e485bd3175938cc787c321d891b63590d641a12b76f20e0521182ca73fdea48b6b1b7a51291e37d97e124d8ff399b3c20a8437cb49800a246a0554de5fda0d99ea57997a6890f6d0c59485e8808847e1288c46315ff03089c224be0b38e79b6ea5ada6ca4a3857e21ae854098d79d2a570bdfd77d6bfa3ae094c5a4a5bfb484d8d8500b90469fdab0cb2f3f6da2af76ddc1dae2ce2f479fa05f6fa5cba49020000",
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
      "Thu, 30 Dec 2021 01:21:39 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwReUyqPMqzcqgxG; path=/; expires=Fri, 30 Dec 2022 01:21:39 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwySlJcUdJKnShI4; path=/; expires=Fri, 30 Dec 2022 01:21:39 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e3311f764c0c484cc690c22608cb9db2ed0a46b97bb36280bffdd76e341de78f1b1a75fcf3df7b4658485a6b261c947cb44c9122fbc2fd754ad6f570f8ff92c366cc8b602a5675a9641850e9a8342af7f81353ab3558ec4927072e3a546a89dc454285ce0b771f01ea987736b8c56de46428ed25d3dd7a8066fafa9bbb6e485bd3175938cc787c321d891b63590d641a12b76f20e0521182ca73fdea48b6b1b7a51291e37d97e124d8ff399b3c20a8437cb49800a246a0554de5fda0d99ea57997a6890f6d0c59485e8808847e1288c46315ff03089c224be0b38e79b6ea5ada6ca4a3857e21ae854098d79d2a570bdfd77d6bfa3ae094c5a4a5bfb484d8d8500b90469fdab0cb2f3f6da2af76ddc1dae2ce2f479fa05f6fa5cba49020000",
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
      "Thu, 30 Dec 2021 01:21:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZ5jeiI8HTQ4qSF; path=/; expires=Fri, 30 Dec 2022 01:21:40 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recWVYrmY7XDGbC3t",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d16ac24010fc15b9678d9768d1e6a968a120695a8ad56a296593ac7a70b90b973b6c15ffbdb731d0fa50e84bdf8ed9b9d999d92333986b53d42c7e3d3251b09880e56265cad5e8e5f62e9b0e2cebb28d40499c234ba1444f9a8142c2dfc1599dba3243c3e2703c24a8166a2b31110ae7f8613dd95505582c1a7ee6acd58a94246428fdf4a142d5797e4afcd8190276d65675dcefeff7fb606bb4abc0681de4ba642752c80d92dae493441ac7ae368f2ac1c33add8da3c96136f552588220b1cc08508144adc0143797725da6ce692644ea2467d2c596b96808118fc25e18f5067ccec3380ae3c175c0395f379136da944e42db8a2fa14125d4f65e17c257f7df5e7faefacdf030fc366cb494ae224b7585b900b900e9e8570a699b5e3be52fc7e9addaeb5e05233ffb632fa7b7d3172d0f31cb5b020000",
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
      "Thu, 30 Dec 2021 01:21:40 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUL3Zy5tzHPckGi; path=/; expires=Fri, 30 Dec 2022 01:21:40 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c14ec24010fd15b26728dba2067b32c513a9d518f08031664a0758b3dd69a6bba942f877778b07b871f138f3debc79f3e62018d7c4552bd2f7835095484343ed33e0af697dbf9cad261b31141b853a700ea2801a3d694e3b3378240cd827384b85ab4b6491c6d3dbd0327fe55d285a65b61a73657081dfd64fdb8efac1d2594b26c86a28517be4b9413358bee61e761c1a3b6b9b361d8fbbae8bb64cae01268ad6548b6350583382c52afb0922bd7dd7f28bc971bf2a76d324dbcf675e0a6b5041ac640526d24806b87ab8941b0a733a2d0ba4417e225d6c59a89e90c8241ec5c9682217324e9338bd892329e5aa3f69435c3b0d6711f9447a44436b9fa8523ecbfff67bbeea1ad34c5abb26586a1bff7dd06fa05d982aa0f84b809cf19f93beb8328ce3c7f11773afd4e25d020000",
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
      "Thu, 30 Dec 2021 01:21:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZtThY9nI4rCYnv; path=/; expires=Fri, 30 Dec 2022 01:21:40 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recWVYrmY7XDGbC3t")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d16ac23014fd15c9b3d6b475e8f234ea60205d3786d3e9cbb86daf1a489392267453fcf725b5b0f930d8cbdec2b927e79e73ee89f09230a2b158af36bada4cdfee1ff2796cc890ec388ab221ec4432a8d0911620d1e3ef608dca6c95a3262c9c4d3cd470b9179872894bfc308e6ceb120c961d3fb7c628e99504e428dcf4a94639787d49ddd86a0f1c8ca91b361eb76d1becb5b23568a5824255e4ec150a8d5e2df9f4229d63dbe86799e2719b1d6651725ccc9d1456c0bd58ae39c840a092a0cbbb6bb92191973489270dd20be96acb9277848846e1288c46315dd29045218b6f034ae9b68bb453bab202fa565c091d2aa0318faae4aebafff6fa73d56f8627e1b761ad84b0b5b7d4d45870102b10d6ffca20ebd32b2bdde5a87fcbfeba37c1d4cdfed8cbf90b227412e04d020000",
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
      "Thu, 30 Dec 2021 01:21:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJiC2HZsAb6iLg9; path=/; expires=Fri, 30 Dec 2022 01:21:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec24010fd15b26728dba2067b32c513a9d518f08031664a0758b3dd69a6bba942f877778b07b871f138f3debc79f3e62018d7c4552bd2f7835095484343ed33e0af697dbf9cad261b31141b853a700ea2801a3d694e3b3378240cd827384b85ab4b6491c6d3dbd0327fe55d285a65b61a73657081dfd64fdb8efac1d2594b26c86a28517be4b9413358bee61e761c1a3b6b9b361d8fbbae8bb64cae01268ad6548b6350583382c52afb0922bd7dd7f28bc971bf2a76d324dbcf675e0a6b5041ac640526d24806b87ab8941b0a733a2d0ba4417e225d6c59a89e90c8241ec5c9682217324e9338bd892329e5aa3f69435c3b0d6711f9447a44436b9fa8523ecbfff67bbeea1ad34c5abb26586a1bff7dd06fa05d982aa0f84b809cf19f93beb8328ce3c7f11773afd4e25d020000",
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
      "Thu, 30 Dec 2021 01:21:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwbcssJVitiOGM9O; path=/; expires=Fri, 30 Dec 2022 01:21:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551d16ac24010fc15b9678d9768d1e6a968a120695a8ad56a296593ac7a70b90b973b6c15ffbdb731d0fa50e84bdf8ed9b9d999d92333986b53d42c7e3d3251b09880e56265cad5e8e5f62e9b0e2cebb28d40499c234ba1444f9a8142c2dfc1599dba3243c3e2703c24a8166a2b31110ae7f8613dd95505582c1a7ee6acd58a94246428fdf4a142d5797e4afcd8190276d65675dcefeff7fb606bb4abc0681de4ba642752c80d92dae493441ac7ae368f2ac1c33add8da3c96136f552588220b1cc08508144adc0143797725da6ce692644ea2467d2c596b96808118fc25e18f5067ccec3380ae3c175c0395f379136da944e42db8a2fa14125d4f65e17c257f7df5e7faefacdf030fc366cb494ae224b7585b900b900e9e8570a699b5e3be52fc7e9addaeb5e05233ffb632fa7b7d3172d0f31cb5b020000",
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
      "Thu, 30 Dec 2021 01:21:41 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBAwtXdS6qBK11a; path=/; expires=Fri, 30 Dec 2022 01:21:41 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recWVYrmY7XDGbC3t",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590416bc2401085ff8aec59e3260ab57b2a5a28489a9662ad5a4a9924635dd8ec86c92e5225ffbdbb51683d147ae9711edfbc796f8e8cb03054364cbc1e992c9908c2cb724dd5fa6a757b97cf4696f5d956a20acc916550a187e6a031e8efe0acc95c952331114fc641ca9db5460758418ecad30f35eadef353ea371c0561676ddd88e170bfdf471f645c0d644c54988ab5c1a120048be5f4339874a15c438f3ac5c326db4d92e9613ef35658810c663949d09142a381ca9b4bbb3ed3a7c0d300f5d213747165213b20e1493c8893c1882f782c92588cae23cef9a66bb935543905e7e2be67a72a68ecbd29a5ffce7f67fd79eab7c0e3e43b3019a55c1d2235351612d412940b5b1964e7f6c669cb04f7c31f1fd1beb55fb0b15a4d2f020000",
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
      "Thu, 30 Dec 2021 01:21:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1WSd7K46m5uVFj; path=/; expires=Fri, 30 Dec 2022 01:21:42 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recWVYrmY7XDGbC3t")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904f6bc24010c5bf8aec59e36623d4eea9c44241d2b4146bd54b9924635dd83f61b38b54f1bb77370aad87422f3dcee3376fde9b23110de1c462fdb65c5bb5be59dd3f54b3cc9121d90a944d47f89194a0304073d018f577f0ce945e5568094fa7932855de39a3232ca14219e8a716f5e0f5a5081bde4661e75cdbf1f178bfdf271fd6f816ac31496d14394587da22386cf2cf68d287f29d7dd6051e36e56ecaf2c37c16ac508188669515a0138946836deeaeed86449f03e7111a1467e8eaca42f400a32c1da56c94d1054d394b79769b504a377dcbadb1ca4bb8140f3d7b5542e71e4d23c277fe3bebcf53bf059eb0efc0d648e9db18a96bb1162097207ddc2aa1bcb4375e3bc26918fef888d317dd3e078721020000",
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
      "Thu, 30 Dec 2021 01:21:42 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwIq40RmVMGknJhu; path=/; expires=Fri, 30 Dec 2022 01:21:42 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "290",
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
      "1f8b0800000000000003b590416bc2401085ff8aec59e3260ab57b2a5a28489a9662ad5a4a9924635dd8ec86c92e5225ffbdbb51683d147ae9711edfbc796f8e8cb03054364cbc1e992c9908c2cb724dd5fa6a757b97cf4696f5d956a20acc916550a187e6a031e8efe0acc95c952331114fc641ca9db5460758418ecad30f35eadef353ea371c0561676ddd88e170bfdf471f645c0d644c54988ab5c1a120048be5f4339874a15c438f3ac5c326db4d92e9613ef35658810c663949d09142a381ca9b4bbb3ed3a7c0d300f5d213747165213b20e1493c8893c1882f782c92588cae23cef9a66bb935543905e7e2be67a72a68ecbd29a5ffce7f67fd79eab7c0e3e43b3019a55c1d2235351612d412940b5b1964e7f6c669cb04f7c31f1fd1beb55fb0b15a4d2f020000",
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
      "Thu, 30 Dec 2021 01:21:43 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwk81RroGUJDSoNr; path=/; expires=Fri, 30 Dec 2022 01:21:43 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c14ec24010fd15b26728dba2067b32c513a9d518f08031664a0758b3dd69a6bba942f877778b07b871f138f3debc79f3e62018d7c4552bd2f7835095484343ed33e0af697dbf9cad261b31141b853a700ea2801a3d694e3b3378240cd827384b85ab4b6491c6d3dbd0327fe55d285a65b61a73657081dfd64fdb8efac1d2594b26c86a28517be4b9413358bee61e761c1a3b6b9b361d8fbbae8bb64cae01268ad6548b6350583382c52afb0922bd7dd7f28bc971bf2a76d324dbcf675e0a6b5041ac640526d24806b87ab8941b0a733a2d0ba4417e225d6c59a89e90c8241ec5c9682217324e9338bd892329e5aa3f69435c3b0d6711f9447a44436b9fa8523ecbfff67bbeea1ad34c5abb26586a1bff7dd06fa05d982aa0f84b809cf19f93beb8328ce3c7f11773afd4e25d020000",
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
      "Thu, 30 Dec 2021 01:21:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnsfVsClnAbCMfK; path=/; expires=Fri, 30 Dec 2022 01:21:44 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recWVYrmY7XDGbC3t",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recizBarj8m9UCZ3f",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525d4fc23014fd2ba4cf7c6c0314f64480c484e034065130c6dc6d1756d3b54bd70684ecbfdb0e086230fae20b6fede9b9a7a7a7674b244642c639f15fb684c6c4b7c0d37426d3d9f5f3f0261c3415a992054566395b12408a861425c0971857caad397f03ad44a0d31025f1dd4ecb42a1564a703bc4204466a6ee32e495c787b199d0d202895259ee371aabd5aabe9442672085a84722258555882482c2b8ff61454a733a97f77c8c9b799074bcfe663430529802b562a1a4c0eb0c050719f74ee5aa84ef8cf72da932de914e6e99d092e0399e5b73bd5ad39938aeefb97eb35b771c675ebe722164aa197c0bc0bcb73c6590ab5b115393d67f7bfe7ad54fc65beda3712918d399b594671851605360da4e0510ec53109a2be23b769d53be6438a61c27b8362051982b83955207ebab44f4700d69c6f0f0637f4cb2a81eab46377d90ef9db4fb38983717e7aa361209af0cc5b99ab52dc4f7dbabb3ce3d7241556cb9e7aa7808c8e4715935945096ce6ffd5ead4332c56bf109922867d3d3040000",
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
      "Thu, 30 Dec 2021 01:21:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiOmHNYb28WgfvU; path=/; expires=Fri, 30 Dec 2022 01:21:44 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recWVYrmY7XDGbC3t")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf30ba8111fb44c0c4c4cc690ca2f062eeb60b6bd28fa56b3384f0df6d87c48fc4c417dfda73cf39f7f4f44078491831583c2f5746ae2e5fae6ff2f9c8923ed970146543d8816420d1938a0ad416cb5e77f5f3577056674ee668088b27e300e5ce5aad8248408ec2abee6b54bda7c7d42b9c0940656dddb0e1b06ddb686bb4abc1681d155a926370280c82c572f6164cba70ae310f2ac5fd3aab26c96c7f3bf756288107b3dc70509140adc094d3ef767da24ec16781d44b4fa46f5b16bc2324348907713218d1058d5912b3d15544295d77afdc68239d801f05f8f77653018dbdd325f76dfd77e6afab7e0b3ebef80c6eb410ae0e919a1a0b0e6209c2055506d9470bda294b180de786abadc0942b5ce0ce83c462633dd6599da3b7959ee20e642df0fc637f6cf2f80ed6a0ea856a020000",
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
      "Thu, 30 Dec 2021 01:21:44 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7EDrnlFRyq7qcG; path=/; expires=Fri, 30 Dec 2022 01:21:44 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recizBarj8m9UCZ3f")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b4c0c4729aca4ea8eba60976e032b9d440a634aed244dd8af8f72505697098b4cb8ef67b7e7e7e3e325932c10c6e659782f99857f7ebc566b26343b693a8ca868923cba1424f5ad2410f1e0903f60ece52eeaa020d13f17c165afa52de85a2917aaf30931a57f869fd74d28f15ce5ad241544181caf79f6bd483f56be6616742e3606ddd88f1b86ddb686fc8d56088a22d55ec1414b606c162997e0591debc6bcc8bceb0dbe487799276cb8597c20a64102b8c041d29240da67cb8951b327d3e2c0da4417626dd6c59c99e90f0241ec5c968c2573c16492ca671c439dff427edc8544ec155403e8f1e51d0d8272aa54ff2bffd5eaffad5f4ecc7b421a55c1d2c35b5ff3da837502e4ce5905f1220a7fddf78cf06ebdfc9c4d4237f4ce6f40df4dd35e35a020000",
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
      "Thu, 30 Dec 2021 01:21:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlESLm7SOlm4IZy; path=/; expires=Fri, 30 Dec 2022 01:21:45 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551db4ec24014fc15b2cf50da8211fb44c0c4c4d46a0c82608c396d0f7493bd347b4911c2bfbb5b248a89892fbeedce9999333bbb270a0ba94a4d92973da125493cb0982f155f5e3e5fdfe4d381215db2a6c83c674f32e0e8484505628365a7bdbaf91b582333cb7354248946430fe5d61829bc88418ecca9ee6b149da7c7d429acf240654cad937ebf699a60a3a4ad4149191492938377281482c172f2ee4dda7056ab0791e26e9555a378b2bb9d3a2be440bd59ae288880a114a0caf1b95d978863f0892775d223e96ccb8cb684388ca35e14f706e12c8c92384a0657411886abf6956ba9b865f0a300f7de76ca409b3b5952d7d67f67febeeab7e0c38bafe04a32666b1f49d75850607360d6ab32c83e5b9056189284feaca9d8304ca9c0196e1d480c6ae3b0d6ea14bda9e418b7c06b86a71ffb639387d7c3073b3c9f8778020000",
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
      "Thu, 30 Dec 2021 01:21:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtxX9NRKCeWe79e; path=/; expires=Fri, 30 Dec 2022 01:21:45 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "334",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recWVYrmY7XDGbC3t")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf30ba8111fb44c0c4c4cc690ca2f062eeb60b6bd28fa56b3384f0df6d87c48fc4c417dfda73cf39f7f4f44078491831583c2f5746ae2e5fae6ff2f9c8923ed970146543d8816420d1938a0ad416cb5e77f5f3577056674ee668088b27e300e5ce5aad8248408ec2abee6b54bda7c7d42b9c0940656dddb0e1b06ddb686bb4abc1681d155a926370280c82c572f6164cba70ae310f2ac5fd3aab26c96c7f3bf756288107b3dc70509140adc094d3ef767da24ec16781d44b4fa46f5b16bc2324348907713218d1058d5912b3d15544295d77afdc68239d801f05f8f77653018dbdd325f76dfd77e6afab7e0b3ebef80c6eb410ae0e919a1a0b0e6209c2055506d9470bda294b180de786abadc0942b5ce0ce83c462633dd6599da3b7959ee20e642df0fc637f6cf2f80ed6a0ea856a020000",
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
      "Thu, 30 Dec 2021 01:21:45 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwgcTdGQclJXXlor; path=/; expires=Fri, 30 Dec 2022 01:21:45 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b4c0c4729aca4ea8eba60976609a26971ac894c6559a88ad887f5f5290068749bbece8e7e7e7e7e70333b82653364cbc1e982c9908806c53301fd3ea76395b8d36accf361255e01c580e157ad29c76ba774f187aefe02ce5ae2ad030114f2701d2e7f226148dd45b8599d4b8c04feba7936eac70d6920ea20a0a541e7fac51f796cf996f3b13809db5752386c3fd7e1f6d0db91a0c51b4a68a1d83c2da20582cd3af20d299778d79d219b6ab7c374dd2763ef35258810c628591a02385a4c19477d7727da64f87a581d4cb4ea4ab2d0bd911129ec48338198cf882c72289c5388e38e7abeea40d99ca29b808c8e7d1751434f6814ae993fc6fbf97ab7e353df9316d482957074b4ded7f0fea05940b5339e4e704c869ff37deb1c1fa773231f69d3f26737c3b7e039f335cbf68020000",
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
      "Thu, 30 Dec 2021 01:21:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw5SNqzp4Z53zira; path=/; expires=Fri, 30 Dec 2022 01:21:46 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551db4ec24014fc15b2cf50da8211fb44c0c4c4d46a0c82608c396d0f7493bd347b4911c2bfbb5b248a89892fbeedce9999333bbb270a0ba94a4d92973da125493cb0982f155f5e3e5fdfe4d381215db2a6c83c674f32e0e8484505628365a7bdbaf91b582333cb7354248946430fe5d61829bc88418ecca9ee6b149da7c7d429acf240654cad937ebf699a60a3a4ad4149191492938377281482c172f2ee4dda7056ab0791e26e9555a378b2bb9d3a2be440bd59ae288880a114a0caf1b95d978863f0892775d223e96ccb8cb684388ca35e14f706e12c8c92384a0657411886abf6956ba9b865f0a300f7de76ca409b3b5952d7d67f67febeeab7e0c38bafe04a32666b1f49d75850607360d6ab32c83e5b9056189284feaca9d8304ca9c0196e1d480c6ae3b0d6ea14bda9e418b7c06b86a71ffb639387d7c3073b3c9f8778020000",
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
      "Thu, 30 Dec 2021 01:21:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSiqsdSk3Pp0Or8; path=/; expires=Fri, 30 Dec 2022 01:21:46 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "334",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ "records%5B%5D": ["recWVYrmY7XDGbC3t", "recizBarj8m9UCZ3f"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2e1619145b991e6112eee49cec6254ab53a385566563925166559e45a863a4719a729d5c6d60200d27a32d261000000",
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
      "Thu, 30 Dec 2021 01:21:46 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRYo4vdcXkJfQnp; path=/; expires=Fri, 30 Dec 2022 01:21:46 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recWVYrmY7XDGbC3t")
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
      "Thu, 30 Dec 2021 01:21:47 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwK9M4MlUq6skJWV; path=/; expires=Fri, 30 Dec 2022 01:21:47 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recizBarj8m9UCZ3f")
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
      "Thu, 30 Dec 2021 01:21:47 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw5k6jsAR8gfLRCl; path=/; expires=Fri, 30 Dec 2022 01:21:47 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:47 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXfQ7yFpBP9KgZ0; path=/; expires=Fri, 30 Dec 2022 01:21:47 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZOe0BpZtNRea8J; path=/; expires=Fri, 30 Dec 2022 01:21:48 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brweODABtpzGpRaat; path=/; expires=Fri, 30 Dec 2022 01:21:48 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44980523f556cd3a48ad2ad637de8a82627b910ab8e1dddd8028af8f7da0e0898f6d0974979f1b9c7f71e9f73b3230885c6b225ecf78e8892300fdccb1fd3eae9eb269f8db38784f4c85280f49c1d99f11a1ce94e572afaa2c1d7fe706bf4ccd6392061c978e4a1a282e235d71bc20c5a08884504556c094b699c0d3c5472e37ba5344dfa49da4f47e488ce457d59992729a3d47d31a5f4b9e359e4466845d8607c433d023517d25dabe11636bc6e24c485ae03b9b6d2082914cc61631c4544af4aaf17ca43ed89e1aefc040985f17e9047285de91b0228f2e239eaf0c8eb38f1c706b000e5da65599c05a0d20a8e4e9051721d0d8743f7806c104678bd6ae53c0a07515407319f2ae025e042f5a3dc4a0966a102bf756c09d393eaa5505cca6d2fe211c2ca4a8e5148e68cddc977dc89b45d3a16bd2795314dcbaeaed6eb75bcd27a75e64d6e8df136ee88e43978f243032afaf53875e57fdc466d1b8e5a8706fb902d820bad9c6c7d93b044b6c5ef6a0a6fcfb36a9c4edeee3ebb56c77872145cc512b4e258de5eb6eb11d52dd8c493a26947ba98f2d76e64744e1396266c7073da8da54697273f5b54b797a122796bee75299c6fff5beff9a88f88462da56dbca4b6814270f9c47d86ccfd73b38303dafa75a3eef04133f62ffb7750950ac8e3030000",
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
      "Thu, 30 Dec 2021 01:21:48 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqeeSo9UQdqhQft; path=/; expires=Fri, 30 Dec 2022 01:21:48 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44980523f556cd3a48ad2ad637de8a82627b910ab8e1dddd8028af8f7da0e0898f6d0974979f1b9c7f71e9f73b3230885c6b225ecf78e8892300fdccb1fd3eae9eb269f8db38784f4c85280f49c1d99f11a1ce94e572afaa2c1d7fe706bf4ccd6392061c978e4a1a282e235d71bc20c5a08884504556c094b699c0d3c5472e37ba5344dfa49da4f47e488ce457d59992729a3d47d31a5f4b9e359e4466845d8607c433d023517d25dabe11636bc6e24c485ae03b9b6d2082914cc61631c4544af4aaf17ca43ed89e1aefc040985f17e9047285de91b0228f2e239eaf0c8eb38f1c706b000e5da65599c05a0d20a8e4e9051721d0d8743f7806c104678bd6ae53c0a07515407319f2ae025e042f5a3dc4a0966a102bf756c09d393eaa5505cca6d2fe211c2ca4a8e5148e68cddc977dc89b45d3a16bd2795314dcbaeaed6eb75bcd27a75e64d6e8df136ee88e43978f243032afaf53875e57fdc466d1b8e5a8706fb902d820bad9c6c7d93b044b6c5ef6a0a6fcfb36a9c4edeee3ebb56c77872145cc512b4e258de5eb6eb11d52dd8c493a26947ba98f2d76e64744e1396266c7073da8da54697273f5b54b797a122796bee75299c6fff5beff9a88f88462da56dbca4b6814270f9c47d86ccfd73b38303dafa75a3eef04133f62ffb7750950ac8e3030000",
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
      "Thu, 30 Dec 2021 01:21:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLuLIl2mNYTS2QJ; path=/; expires=Fri, 30 Dec 2022 01:21:49 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44980523f556cd3a48ad2ad637de8a82627b910ab8e1dddd8028af8f7da0e0898f6d0974979f1b9c7f71e9f73b3230885c6b225ecf78e8892300fdccb1fd3eae9eb269f8db38784f4c85280f49c1d99f11a1ce94e572afaa2c1d7fe706bf4ccd6392061c978e4a1a282e235d71bc20c5a08884504556c094b699c0d3c5472e37ba5344dfa49da4f47e488ce457d59992729a3d47d31a5f4b9e359e4466845d8607c433d023517d25dabe11636bc6e24c485ae03b9b6d2082914cc61631c4544af4aaf17ca43ed89e1aefc040985f17e9047285de91b0228f2e239eaf0c8eb38f1c706b000e5da65599c05a0d20a8e4e9051721d0d8743f7806c104678bd6ae53c0a07515407319f2ae025e042f5a3dc4a0966a102bf756c09d393eaa5505cca6d2fe211c2ca4a8e5148e68cddc977dc89b45d3a16bd2795314dcbaeaed6eb75bcd27a75e64d6e8df136ee88e43978f243032afaf53875e57fdc466d1b8e5a8706fb902d820bad9c6c7d93b044b6c5ef6a0a6fcfb36a9c4edeee3ebb56c77872145cc512b4e258de5eb6eb11d52dd8c493a26947ba98f2d76e64744e1396266c7073da8da54697273f5b54b797a122796bee75299c6fff5beff9a88f88462da56dbca4b6814270f9c47d86ccfd73b38303dafa75a3eef04133f62ffb7750950ac8e3030000",
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
      "Thu, 30 Dec 2021 01:21:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3Fqg0Q6LkFBZ60; path=/; expires=Fri, 30 Dec 2022 01:21:50 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recMlQLhVExbN83O1",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338c76a8c13d19d41732861ae40135e66ebbb8265defd2b50121fc77db61223c98f8e263eff97a7aeee99e192cc8942d4b5ef64c962c0983997a4cabe5fd36cfc6a3b9607db696a802b36719d4e8a12955ba774718b47770963257e7685822c657616464512d706b3dfaaa3b2877d6920e160a72545e9837a87bcf4fa9979d0983cadaa64d86c3cd66137d18720d18a2a8a09a1d824361102c9693cf60d24575ad79d029ee5659358e27bbe9adb7c21a6430cb8d041d29240da6bc39b7eb337d5c6312a05e7a84ce5e59c80e88792c06221e8cf8828b2416c9c575c4395f752badc9d44ec1491d7efb4e51d0da1995d2f7f6df794f9ffa2df4a5f8096d4829d784486d838504b504e5c2ad0cb2ef06c869ff71dc1ffe58c6e1edf005139ab64949020000",
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
      "Thu, 30 Dec 2021 01:21:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw5Liv6NRucFRLuU; path=/; expires=Fri, 30 Dec 2022 01:21:50 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recMlQLhVExbN83O1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739bda29a092132a70a9d21450e9a142429b644b2c39dec8b195d2aa7fc74e91680f485c387a673c3b337b60b2640933582cd4735aad1f7779369d2c051bb2ad4455b62c39b00c6af4a439557af04018b07770963257e7685822a63761646451ad70673df54df7a4dc594b3a4828c8517960d9a01ebcbea41e76260c2a6b9b36198fbbae8b3e0cb9060c515450cd8e41a1300816cbd96710e9adbad63ce914f79bac9ac6b3fdfcde4b610d3288e546828e14920653de5dca0d993ec59805d2203d912eb6ac644f88792c46221e4df88a8b2416c9d56dc439dff491b6646aa7e0ac0e9fbe4714b47641a5f4bdfdb7dff355bf99be163fa60d29e59a60a96db090a0d6a05cf89541f6dd0039ed0fc7fde38f651cbf007155a1b33b020000",
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
      "Thu, 30 Dec 2021 01:21:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwsHm063wmEWAGFj; path=/; expires=Fri, 30 Dec 2022 01:21:50 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recMlQLhVExbN83O1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739bda29a092132a70a9d21450e9a142429b644b2c39dec8b195d2aa7fc74e91680f485c387a673c3b337b60b2640933582cd4735aad1f7779369d2c051bb2ad4455b62c39b00c6af4a439557af04018b07770963257e7685822a63761646451ad70673df54df7a4dc594b3a4828c8517960d9a01ebcbea41e76260c2a6b9b36198fbbae8b3e0cb9060c515450cd8e41a1300816cbd96710e9adbad63ce914f79bac9ac6b3fdfcde4b610d3288e546828e14920653de5dca0d993ec59805d2203d912eb6ac644f88792c46221e4df88a8b2416c9d56dc439dff491b6646aa7e0ac0e9fbe4714b47641a5f4bdfdb7dff355bf99be163fa60d29e59a60a96db090a0d6a05cf89541f6dd0039ed0fc7fde38f651cbf007155a1b33b020000",
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
      "Thu, 30 Dec 2021 01:21:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0uCyfqb9Zp60Hr; path=/; expires=Fri, 30 Dec 2022 01:21:51 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCJ0hblna9inHXI; path=/; expires=Fri, 30 Dec 2022 01:21:51 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2rzzZbohtGmerl; path=/; expires=Fri, 30 Dec 2022 01:21:51 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:52 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3k3ye4D15thP6k; path=/; expires=Fri, 30 Dec 2022 01:21:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590316fc2301085ff0af20cc1312d204f6dba2148ab8a760055e8921cc5aa634717bba820fe7bedc05036968ef7f4ddbbf7eec8084b4b55cbe4fac854c56414be16221d4f1eefc4f83ba715ebb3ad421d9923cba1c600cdc060d437e09dcd7d5d2031994e27512abc73d6445843813ad0cf0d9adedbeb3c6c788ac2ceb9a695c3e17ebf4f3ec9fa06c8daa4b4353b458792101c56d94f34e942f9965ecc1c0fab7c3715d961f614acb00615cd0a5260128dd600550fd7767d66ce81b308f5e667e8eaca527580e0221da46230e24b9e4a91cafb51c239efda6fb6966aafe1523cf4ec540dad5bd84a85effc77d6bfa76e094c566bdfc4486d83a502fd0edac7ad1cf24b7beb8d639287e1c6479c3e4ebf0c5beb992f020000",
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
      "Thu, 30 Dec 2021 01:21:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw319R1TlvZRwr99; path=/; expires=Fri, 30 Dec 2022 01:21:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:52 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiCLq7hzEcS2dhi; path=/; expires=Fri, 30 Dec 2022 01:21:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590316fc2301085ff0af20cc1312d204f6dba2148ab8a760055e8921cc5aa634717bba820fe7bedc05036968ef7f4ddbbf7eec8084b4b55cbe4fac854c56414be16221d4f1eefc4f83ba715ebb3ad421d9923cba1c600cdc060d437e09dcd7d5d2031994e27512abc73d6445843813ad0cf0d9adedbeb3c6c788ac2ceb9a695c3e17ebf4f3ec9fa06c8daa4b4353b458792101c56d94f34e942f9965ecc1c0fab7c3715d961f614acb00615cd0a5260128dd600550fd7767d66ce81b308f5e667e8eaca527580e0221da46230e24b9e4a91cafb51c239efda6fb6966aafe1523cf4ec540dad5bd84a85effc77d6bfa76e094c566bdfc4486d83a502fd0edac7ad1cf24b7beb8d639287e1c6479c3e4ebf0c5beb992f020000",
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
      "Thu, 30 Dec 2021 01:21:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwzItSxBFK07ymC; path=/; expires=Fri, 30 Dec 2022 01:21:53 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recMlQLhVExbN83O1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739bda29a092132a70a9d21450e9a142429b644b2c39dec8b195d2aa7fc74e91680f485c387a673c3b337b60b2640933582cd4735aad1f7779369d2c051bb2ad4455b62c39b00c6af4a439557af04018b07770963257e7685822a63761646451ad70673df54df7a4dc594b3a4828c8517960d9a01ebcbea41e76260c2a6b9b36198fbbae8b3e0cb9060c515450cd8e41a1300816cbd96710e9adbad63ce914f79bac9ac6b3fdfcde4b610d3288e546828e14920653de5dca0d993ec59805d2203d912eb6ac644f88792c46221e4df88a8b2416c9d56dc439dff491b6646aa7e0ac0e9fbe4714b47641a5f4bdfdb7dff355bf99be163fa60d29e59a60a96db090a0d6a05cf89541f6dd0039ed0fc7fde38f651cbf007155a1b33b020000",
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
      "Thu, 30 Dec 2021 01:21:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVrVjdvgkX4imcu; path=/; expires=Fri, 30 Dec 2022 01:21:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:21:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRL3z0elggJZgTH; path=/; expires=Fri, 30 Dec 2022 01:21:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd525f4fc2301cfc2aa4cf30da8d7fee49515fc8286a9007d4986e2baeb16b97ae1584ecbbd30e0d9060e20b89f1b1bfdff57a77bd0d5034912a2d41f8b4012c05a11b8cf97d94cd6e57311e0413049a60c12877980dc024a71634929968dc48ea76afc468894d1e53054234e8b991624936a52b6da1cfa206c5466b291c052731e5763129a8683c3e44766d941b645a1765d86e2f974bef4d49531025a597c81c548e215194689a0e3f1d492dd594ea4e44743dc7d9c01fae47d7968ae68439b25831223c4ea5202abd3ca66b02b1b33174a046b4031dbd326535c0873e6a21bf15c02944a18fc2ce8507219cd7961652e586938338acfb7ac349a9c7326536b773eb3d7cea27d15db417ad24e7a67092ca82268cf019e1c6ddc2047f25208db01f07ede1976154cd7d77dec73eeaf5af3a7eef03abf9c9ee1071aa37fd7fd4926e70b225d6b8f5f9271b129ca721dfbcd54bb505f629f72d6b040000",
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
      "Thu, 30 Dec 2021 01:21:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBZuKUBztTuZgOu; path=/; expires=Fri, 30 Dec 2022 01:21:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "reckM2167A426vNrZ", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recMlQLhVExbN83O1",
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
      "Thu, 30 Dec 2021 01:21:54 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwz5wIAWP4B0hp91; path=/; expires=Fri, 30 Dec 2022 01:21:54 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "reckM2167A426vNrZ", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f4f023110c5bf0ae919966e913fe949f1466035063d600c99dd1da4b1db6e665b8910bebbed82510e265ebc35afbf797d6f7a608485a5b261f2f9c054c96414de16221d8d6faec4e83da315ebb28d421d9903cba0c200cdc060d4d7e09dcd7c952331994ec651cabd73d64458438e3ad077359acee3c33c4c788ac2d6b9ba91fdfe6eb74b5ec9fa1ac8daa4b0153b468782101c96d38f68d286f20ddd9b39ee57d97622a6fbd96db0c20a5434cb498149345a03545e5fda759939059e46a8333f4117af2c550b082ed25e2a7a03bee4a914a91c0e12ce79db7ebdb154790de7e2a167ab6a68dcc2962a6ce7bfb3fe7cead7c0c3efc064b5f6758cd4d45828d04fa07d9cca203bb7b7de3826793c9baf0f0c377fdccaf1e5f8099b53a0de3c020000",
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
      "Thu, 30 Dec 2021 01:21:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlbUFcA39G6xCnQ; path=/; expires=Fri, 30 Dec 2022 01:21:54 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "302",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recMlQLhVExbN83O1",
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
      "Thu, 30 Dec 2021 01:21:55 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYo03HsT2aABxNL; path=/; expires=Fri, 30 Dec 2022 01:21:55 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b550c14e023110fd15d2332cdd25249b9e14130f061783e801634c77779092b6b376db2010feddce42a2dcb8789c99f7debcf70ecc4185ae6e99783b305533418bfd97de7c9bfb7a339f6d76b7accf560a34610eac900622e8190da0053a7dc8e0b108a604c7449ae7b4b2e771444319bc474b642d4bd0913d6bc0f65ee6d3480f8e166bef9b560c87dbed36f974181ae910930a0d3b9242e5407aa8273b12e94c86d63dd929ec97c53acf26fb87bb2805462a122b9d9236d1d19f74f5cda55c9fd9538009817ad313e8e2cb4275808c67e920cd0623bee0a9c852311e279cf365177985ce042d7f8b88b9bb8396ad7fc45ac5c2fedbeedf57d77876a87568c852db40a5a47e953a10ab90c5b9000cd633c1e3706517c7f7e30f4e1f65bb42020000",
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
      "Thu, 30 Dec 2021 01:21:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjIskg7D1z9If6H; path=/; expires=Fri, 30 Dec 2022 01:21:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/reckM2167A426vNrZ")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591cd4ec33010845fa5f2b94d6d97fec82708b72a0d08150ebd549b644b2d1c3b726c225af5ddb1d322e801890b376b3c3bfe667d24b22282582cdf569ccde677377cf69edb0d19929d4455b5441c490e3506d31234467d0bde99dcd7055a22d8621ea5c23b6774342b285005f743837af0fc9485096fa3b077ae69c578dc755df26a8d6fc01a9394a626a798505a048755fa11437a28dfda479de16193ef173c3d2cef4314d62063586125e844a1d160abdbebb821d167e0349a06d9d974f5ca5af6064e391b313e9ad035658233319d2494d2befd76676ced155c8a879ebdaaa0752b53c9b09dff66fdf9d4afc0d36f606b94f24d446a1b2c25a817503e4ee5905fda1baf1d11349ef5d707869b3f6ee5f409b5bbc56c2e020000",
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
      "Thu, 30 Dec 2021 01:21:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw28uJpitZAYR9pO; path=/; expires=Fri, 30 Dec 2022 01:21:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recMlQLhVExbN83O1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739bda29a092132a70a9d21450e9a142429b644b2c39dec8b195d2aa7fc74e91680f485c387a673c3b337b60b2640933582cd4735aad1f7779369d2c051bb2ad4455b62c39b00c6af4a439557af04018b07770963257e7685822a63761646451ad70673df54df7a4dc594b3a4828c8517960d9a01ebcbea41e76260c2a6b9b36198fbbae8b3e0cb9060c515450cd8e41a1300816cbd96710e9adbad63ce914f79bac9ac6b3fdfcde4b610d3288e546828e14920653de5dca0d993ec59805d2203d912eb6ac644f88792c46221e4df88a8b2416c9d56dc439dff491b6646aa7e0ac0e9fbe4714b47641a5f4bdfdb7dff355bf99be163fa60d29e59a60a96db090a0d6a05cf89541f6dd0039ed0fc7fde38f651cbf007155a1b33b020000",
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
      "Thu, 30 Dec 2021 01:21:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcmd1GzgBMqr0lh; path=/; expires=Fri, 30 Dec 2022 01:21:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550c14e023110fd15d2332cdd25249b9e14130f061783e801634c77779092b6b376db2010feddce42a2dcb8789c99f7debcf70ecc4185ae6e99783b305533418bfd97de7c9bfb7a339f6d76b7accf560a34610eac900622e8190da0053a7dc8e0b108a604c7449ae7b4b2e771444319bc474b642d4bd0913d6bc0f65ee6d3480f8e166bef9b560c87dbed36f974181ae910930a0d3b9242e5407aa8273b12e94c86d63dd929ec97c53acf26fb87bb2805462a122b9d9236d1d19f74f5cda55c9fd9538009817ad313e8e2cb4275808c67e920cd0623bee0a9c852311e279cf365177985ce042d7f8b88b9bb8396ad7fc45ac5c2fedbeedf57d77876a87568c852db40a5a47e953a10ab90c5b9000cd633c1e3706517c7f7e30f4e1f65bb42020000",
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
      "Thu, 30 Dec 2021 01:21:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9PvRHjmKED9mGv; path=/; expires=Fri, 30 Dec 2022 01:21:57 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd925d6f82301486ff8ae9b5221fa28cabe93e2e0ce2e69c176ecb52a00e5c6959a1f32bfcf7b5a811139699254b16ef68cfcb7bce7bfa6c00433e65410aeca70d880260cb8b01be77c2c9cdd2732d63a8813a9845084bcd06b8304642d4a721a95d53246baf9067d4e5b18718b035ab2daf58e48763b4cc84f49914228f671925d202430f6151182688d41e478e2873262fc22c4b52bbd95c2c16ca1ba33c818c52c5a731c8a583cf10cc50d05b499362549eb23be2a0f5d40d2dbdb7ee5f092b14c3489a792c8244c18812c882cb63bb3a20db183d29aa395bd151977154087455d71a9ade30d4b1aad9ba66b72e145555a745a4196531c7b0b40e91bea8609866031a44626f7f3d6fb9d577439bda61684631e6891c294d901f413c8198cbbf5ce8ee364039110fa78ac389cbc8eb0776de07bad6ee745b7afbd365d34a7620a9e2a67346949846252522b8c8f92f09317f4388fc26fb07fc1997fd56cab8ac3ff07c19df06f3d170beea56e1f2406391a68a18abdcdf38277ccc2a7c768b10b9cf87a013a0d9f9e62ff917cefbb1f5ad060000",
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
      "Thu, 30 Dec 2021 01:21:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1H7LkHRZ00VGJ3; path=/; expires=Fri, 30 Dec 2022 01:21:57 GMT; domain=.airtable.com; samesite=none; secure",
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
      "recMlQLhVExbN83O1",
      "reckM2167A426vNrZ",
      "reczqljxmFdjROjyA",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2be39813e1961ae15497e16c6fe864ab53a385566fb1a199a993b9a189995f91545e153595598935591eb969215e49f55e9a8541b5b0b00600f17c98b000000",
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
      "Thu, 30 Dec 2021 01:21:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwbmpiN2OZT9Dgvu; path=/; expires=Fri, 30 Dec 2022 01:21:57 GMT; domain=.airtable.com; samesite=none; secure",
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
