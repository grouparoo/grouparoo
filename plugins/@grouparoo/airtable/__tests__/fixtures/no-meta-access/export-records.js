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
      "Wed, 29 Dec 2021 22:00:49 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEI2RDNPJqkKMEf; path=/; expires=Thu, 29 Dec 2022 22:00:49 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:00:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQIcP9TxX3OfJn0; path=/; expires=Thu, 29 Dec 2022 22:00:50 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:00:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwQshu6gMxSaIwqL; path=/; expires=Thu, 29 Dec 2022 22:00:50 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:00:50 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxz0qR3yHIQinUW; path=/; expires=Thu, 29 Dec 2022 22:00:50 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:00:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzDKVbbxXXJF41K; path=/; expires=Thu, 29 Dec 2022 22:00:51 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:00:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLCjlY5V1mHdIXT; path=/; expires=Thu, 29 Dec 2022 22:00:51 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5914f4f023110c5bf0ae919965231ca9e0cc683645d8d5935628c99dd1da0a17f36b36d5008dfdd76e120372e1efbfaeb9b37af3b465859aa5b967eec98ac591a059ce842df97ebbbf7f1fae28df5d942a28acc8ee5a03140333018f52ff0cee65e97482c1d5d8da3d44ab354984983057ebb00af900e70e99db326da28285185abc7064defe5390bd79ea2b072ae69d3e170b3d9244bb2be01b236a9ac66fbe8501182c37afa134dbab8bea52793e1769eafaec5743bbb0d56a84146b392249844a13540f5cda95d9f99c32ad308f5b2037432a5901d20b8180d46622026851029e7e9a54838e7f36ea58525ed151c2b090d74aa82d63dd85a86defe3bebdf51e70426ab946f62a4b6c14a827a05e5e3ab1cf2e3f6d69bf06d3c1cce2c62ffb9ff0527c1feac49020000",
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
      "Wed, 29 Dec 2021 22:00:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwFffA61yjIEMAdf; path=/; expires=Thu, 29 Dec 2022 22:00:51 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f4f023110c5bf0ae919965231ca9e0cc683645d8d5935628c99dd1da0a17f36b36d5008dfdd76e120372e1efbfaeb9b37af3b465859aa5b967eec98ac591a059ce842df97ebbbf7f1fae28df5d942a28acc8ee5a03140333018f52ff0cee65e97482c1d5d8da3d44ab354984983057ebb00af900e70e99db326da28285185abc7064defe5390bd79ea2b072ae69d3e170b3d9244bb2be01b236a9ac66fbe8501182c37afa134dbab8bea52793e1769eafaec5743bbb0d56a84146b392249844a13540f5cda95d9f99c32ad308f5b2037432a5901d20b8180d46622026851029e7e9a54838e7f36ea58525ed151c2b090d74aa82d63dd85a86defe3bebdf51e70426ab946f62a4b6c14a827a05e5e3ab1cf2e3f6d69bf06d3c1cce2c62ffb9ff0527c1feac49020000",
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
      "Wed, 29 Dec 2021 22:00:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzqX384VILU7rVt; path=/; expires=Thu, 29 Dec 2022 22:00:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f4f023110c5bf0ae919965231ca9e0cc683645d8d5935628c99dd1da0a17f36b36d5008dfdd76e120372e1efbfaeb9b37af3b465859aa5b967eec98ac591a059ce842df97ebbbf7f1fae28df5d942a28acc8ee5a03140333018f52ff0cee65e97482c1d5d8da3d44ab354984983057ebb00af900e70e99db326da28285185abc7064defe5390bd79ea2b072ae69d3e170b3d9244bb2be01b236a9ac66fbe8501182c37afa134dbab8bea52793e1769eafaec5743bbb0d56a84146b392249844a13540f5cda95d9f99c32ad308f5b2037432a5901d20b8180d46622026851029e7e9a54838e7f36ea58525ed151c2b090d74aa82d63dd85a86defe3bebdf51e70426ab946f62a4b6c14a827a05e5e3ab1cf2e3f6d69bf06d3c1cce2c62ffb9ff0527c1feac49020000",
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
      "Wed, 29 Dec 2021 22:00:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHGQhkXVD5fG21g; path=/; expires=Thu, 29 Dec 2022 22:00:52 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Jane%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5914f4f023110c5bf0ae919965231ca9e0cc683645d8d5935628c99dd1da0a17f36b36d5008dfdd76e120372e1efbfaeb9b37af3b465859aa5b967eec98ac591a059ce842df97ebbbf7f1fae28df5d942a28acc8ee5a03140333018f52ff0cee65e97482c1d5d8da3d44ab354984983057ebb00af900e70e99db326da28285185abc7064defe5390bd79ea2b072ae69d3e170b3d9244bb2be01b236a9ac66fbe8501182c37afa134dbab8bea52793e1769eafaec5743bbb0d56a84146b392249844a13540f5cda95d9f99c32ad308f5b2037432a5901d20b8180d46622026851029e7e9a54838e7f36ea58525ed151c2b090d74aa82d63dd85a86defe3bebdf51e70426ab946f62a4b6c14a827a05e5e3ab1cf2e3f6d69bf06d3c1cce2c62ffb9ff0527c1feac49020000",
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
      "Wed, 29 Dec 2021 22:00:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwW6sli7ND3XGAO4; path=/; expires=Thu, 29 Dec 2022 22:00:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:00:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6ZwG6FHBqlQcNv; path=/; expires=Thu, 29 Dec 2022 22:00:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5914f4f023110c5bf0ae919965231ca9e0cc683645d8d5935628c99dd1da0a17f36b36d5008dfdd76e120372e1efbfaeb9b37af3b465859aa5b967eec98ac591a059ce842df97ebbbf7f1fae28df5d942a28acc8ee5a03140333018f52ff0cee65e97482c1d5d8da3d44ab354984983057ebb00af900e70e99db326da28285185abc7064defe5390bd79ea2b072ae69d3e170b3d9244bb2be01b236a9ac66fbe8501182c37afa134dbab8bea52793e1769eafaec5743bbb0d56a84146b392249844a13540f5cda95d9f99c32ad308f5b2037432a5901d20b8180d46622026851029e7e9a54838e7f36ea58525ed151c2b090d74aa82d63dd85a86defe3bebdf51e70426ab946f62a4b6c14a827a05e5e3ab1cf2e3f6d69bf06d3c1cce2c62ffb9ff0527c1feac49020000",
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
      "Wed, 29 Dec 2021 22:00:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8sNIAOFQHOgMJW; path=/; expires=Thu, 29 Dec 2022 22:00:54 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rece9mTmIbkEY4k3W",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5514d4fc24014fc2b64cf50ca0a417a32180f925a8da91231c6bcb60fd8b01fcd76372884ffeebe42a21c4cbc78dbcc9b9d37336fcf2c96c6560d4b5ef74c542c2100272a57b7c5e6e665b8b998b32e5b0a94c4d9b30c1406d20c3412fe0ede99ccab022d4b06e321418dd02b89a9d098e3870b645f57e0b06af98577ce68529250a00cd3fb1a75e7e9310d636f09583b573749bfbfdd6ea39535be066b4c541ac50ea4505a24b5e92789b48e7d631f748abb45b6bee4d3ddec3a48a10241628515a023894683adaecee5ba4c1fd34c89d4498fa4b32db968093ce683de80f7f824e73c89e364c4a3388e176da4a5b1ca4b38b5124a6851098dbb339508d5fdb7d79fab7e353cfa366c8d94be264b4d8da500f90cd2d3af0cb2537ae375b85c4c6f7dbaee281a87d91f7b39bc1dbe00ec71bddd5b020000",
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
      "Wed, 29 Dec 2021 22:00:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOltpge4A3VSGyQ; path=/; expires=Thu, 29 Dec 2022 22:00:54 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551cb6e833010fc15e473421c57e98353457369444855d11e525595810db8325e646cd106e5df6b931c925b2e3deeceecececec403414a8cb8e441f031125897c63553ddfac6b196faa65557d9309d909909e33909437e0482bac55b044f0d817b70653dbe4a04934bf5bf8963a95b7bee884aa24244241063fc64d9b1ec7c1dc1a83cacb4a9e8374c8a60515bcbd260eb6da376a63da2e9acdfabe0f2b8db6e51a312cb02107af5068e006caf8d78b8cf66da75f5402fb6d5adfb378bf7a7252d070e1c5722db80a25a0e2ba7cbc949b10753c2df6a42039922eb664622430cae6d3399bb2878cb188d268b10829a5dbf1a41deac64a7e16914b644424efcc1a4be1b2fc6fbfe7abae31ad514adb7a4b5d0b85e0f29d4beba7529e9e1240abdce7a82bae0ce3f079f8032e44cae85d020000",
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
      "Wed, 29 Dec 2021 22:00:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwlSI5PWWNPIrTYj; path=/; expires=Thu, 29 Dec 2022 22:00:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rece9mTmIbkEY4k3W")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5514d4fc24014fc2b64cf50969506e9c9d47890d46a4c95c8c5bcb60fd8b01fcd76375508ffdddd42a21c4cbc78dbcc9b9d3733ef40784d1262b0c2b92ce47db9bb7b9beeae966448d61c45dd92e4407290e8490b5018f0777056e74e96684832994d03d472b511987185057e584f764d0d16eb9e5f3a6bb50a4a024a147efad8a01abc3c677eec4c00b6d6366d321e775d176d8c760d18ada34a4b720c0a95c1a0967e0691deb16bcd93ca70bfcab7d72cdd2f6ebd144ae041ac341c5424502b30f5cda5dc90a8539a349006d98974b1a5e03d815136194dd888cd0bc6124a93984594d2551f69ad8d7402ceadf8127a54406b1f74cd7d75ffedf5e7aa5f0dc7df868d16c235c152db60c541bc8270e1570ef939bd76ca5f8e86b73a5f378e667ef6c75e8e5f28b57f844d020000",
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
      "Wed, 29 Dec 2021 22:00:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYO2YfJqlhfu3Ry; path=/; expires=Thu, 29 Dec 2022 22:00:55 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551cb6e833010fc15e473421c57e98353457369444855d11e525595810db8325e646cd106e5df6b931c925b2e3deeceecececec403414a8cb8e441f031125897c63553ddfac6b196faa65557d9309d909909e33909437e0482bac55b044f0d817b70653dbe4a04934bf5bf8963a95b7bee884aa24244241063fc64d9b1ec7c1dc1a83cacb4a9e8374c8a60515bcbd260eb6da376a63da2e9acdfabe0f2b8db6e51a312cb02107af5068e006caf8d78b8cf66da75f5402fb6d5adfb378bf7a7252d070e1c5722db80a25a0e2ba7cbc949b10753c2df6a42039922eb664622430cae6d3399bb2878cb188d268b10829a5dbf1a41deac64a7e16914b644424efcc1a4be1b2fc6fbfe7abae31ad514adb7a4b5d0b85e0f29d4beba7529e9e1240abdce7a82bae0ce3f079f8032e44cae85d020000",
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
      "Wed, 29 Dec 2021 22:00:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1s3ewIwfKJqGVe; path=/; expires=Thu, 29 Dec 2022 22:00:55 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5514d4fc24014fc2b64cf50ca0a417a32180f925a8da91231c6bcb60fd8b01fcd76372884ffeebe42a21c4cbc78dbcc9b9d37336fcf2c96c6560d4b5ef74c542c2100272a57b7c5e6e665b8b998b32e5b0a94c4d9b30c1406d20c3412fe0ede99ccab022d4b06e321418dd02b89a9d098e3870b645f57e0b06af98577ce68529250a00cd3fb1a75e7e9310d636f09583b573749bfbfdd6ea39535be066b4c541ac50ea4505a24b5e92789b48e7d631f748abb45b6bee4d3ddec3a48a10241628515a023894683adaecee5ba4c1fd34c89d4498fa4b32db968093ce683de80f7f824e73c89e364c4a3388e176da4a5b1ca4b38b5124a6851098dbb339508d5fdb7d79fab7e353cfa366c8d94be264b4d8da500f90cd2d3af0cb2537ae375b85c4c6f7dbaee281a87d91f7b39bc1dbe00ec71bddd5b020000",
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
      "Wed, 29 Dec 2021 22:00:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJhl5QwC7jRbOqk; path=/; expires=Thu, 29 Dec 2022 22:00:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rece9mTmIbkEY4k3W",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6ed74aed9e24e2c112a34854ac884c92a95dba7fc26697624bbebbbb69417b10bc789cc76fdebc377b62b132b66e097fdd1351131e059cab42dd949beb97e9e6ec990cc94aa08ccc9ee4a030400bd018f577f0cee45e9568099fcca6512abd73464758428932d0770deac1e3431636bc8dc2dab9a6e5e3f176bb4d3eacf10d586392ca28d24587ca2238acd3cf68d287f2adbdd719ee96f9fa82a5bbc555b04205229a9556804e241a0db6be3cb51b127d089c4668901da0932b85e80146d964346123362f18e394f27396504a977dcb95b1ca4b38160f3d7b5542eb6e4d2dc277fe3bebcf53bf069e7d07b6464adfc4486d839500f904d2c7ad1cf2637be3b5239c86e18f8fe8deba2f9bb1cd2b2f020000",
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
      "Wed, 29 Dec 2021 22:00:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNfUAtaq1Z4IoKd; path=/; expires=Thu, 29 Dec 2022 22:00:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rece9mTmIbkEY4k3W")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd4ec33010845fa5f2b94d1d5354ea130ae24015024201442f68936ca955ff448ead88567d77ecb412f480c485e38ebe9d9dd93d110de1c4628d0b55aabb6a7bfb36db5ebc9231590b944d47f89e14a030404bd018f577f0ce145e5568094fe7b32855de39a3232ca14219e88716f5e8f9290f1bde4661e35cdbf1e9b4effbe4c31adf823526a98d2287e8505b04874df6194d8650beb38f3ac7ddaad85cb16cb7bc0956a84044b3ca0ad08944a3c136d7e77663a28f81b3088df2237476a51403c0284b27299bb045c918a7945fb28452ba1a5aae8d555ec2a978e839a8123a776f1a11bef3df597f9efa35f0fc3bb03552fa3646ea5aac05c817903e6e15509cda1baf1de1340c7f7cc4e10b93738ad821020000",
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
      "Wed, 29 Dec 2021 22:00:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwze0uueQHJ5YYVD; path=/; expires=Thu, 29 Dec 2022 22:00:56 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5904f4bc34010c5bf4ad9739b6ed74aed9e24e2c112a34854ac884c92a95dba7fc26697624bbebbbb69417b10bc789cc76fdebc377b62b132b66e097fdd1351131e059cab42dd949beb97e9e6ec990cc94aa08ccc9ee4a030400bd018f577f0cee45e9568099fcca6512abd73464758428932d0770deac1e3431636bc8dc2dab9a6e5e3f176bb4d3eacf10d586392ca28d24587ca2238acd3cf68d287f2adbdd719ee96f9fa82a5bbc555b04205229a9556804e241a0db6be3cb51b127d089c4668901da0932b85e80146d964346123362f18e394f27396504a977dcb95b1ca4b38160f3d7b5542eb6e4d2dc277fe3bebcf53bf069e7d07b6464adfc4486d839500f904d2c7ad1cf2637be3b5239c86e18f8fe8deba2f9bb1cd2b2f020000",
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
      "Wed, 29 Dec 2021 22:00:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwoPcdbcwcUWmN6B; path=/; expires=Thu, 29 Dec 2022 22:00:57 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551cb6e833010fc15e473421c57e98353457369444855d11e525595810db8325e646cd106e5df6b931c925b2e3deeceecececec403414a8cb8e441f031125897c63553ddfac6b196faa65557d9309d909909e33909437e0482bac55b044f0d817b70653dbe4a04934bf5bf8963a95b7bee884aa24244241063fc64d9b1ec7c1dc1a83cacb4a9e8374c8a60515bcbd260eb6da376a63da2e9acdfabe0f2b8db6e51a312cb02107af5068e006caf8d78b8cf66da75f5402fb6d5adfb378bf7a7252d070e1c5722db80a25a0e2ba7cbc949b10753c2df6a42039922eb664622430cae6d3399bb2878cb188d268b10829a5dbf1a41deac64a7e16914b644424efcc1a4be1b2fc6fbfe7abae31ad514adb7a4b5d0b85e0f29d4beba7529e9e1240abdce7a82bae0ce3f079f8032e44cae85d020000",
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
      "Wed, 29 Dec 2021 22:00:57 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwV4L7Axnixr9jGI; path=/; expires=Thu, 29 Dec 2022 22:00:57 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "rece9mTmIbkEY4k3W",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recJgI3MhlBOgDggj",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd52414fc23018fd2ba46718a380c24e64e20102c318d48831a6db3eb64ad72e5d1b10c27fb71d10c460c2c50bb7f6f57dafafaf6f83244442c605f2de3688c6c8b30074b369360817f7afad45f30555d19c02b39c0d0a48068614a584271057caad39ff205a8940672148e4356e5b160ab55282db21464260666a9203af3c3d8ecc8496164895ca0baf5e5f2e974e2285ce8914c2894486b65621924014c4fe971529cde9423ef011ac6741dac1fe7a7867a42023d48a859212ee30109cc8b8772a57457c67dcb7a4ca68473ab9654a4b027671a3d6c035dc9d62ecb9aed7c68eebbab3f295732133cdc8af00cc7bcb53460a3516313569fdb7e79f57fd69bc73342e05633ab7968a1c224ad83361da4e0524d8a7203457c873edbaa03c6130a21ca6b0322052502883955207ebcb54f46045b29cc1e1c72e4c725b3d566d980c9ae394f993a49f249fe7aa361429aff4c5b99ab52dc4f7db9bb3ce31baa62ab6cf55f11090c9e3ba6a2849593aaf7541b5f6c96cdfb7df949d91e7d3040000",
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
      "Wed, 29 Dec 2021 22:00:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzbjzud3G9MSYgp; path=/; expires=Thu, 29 Dec 2022 22:00:57 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rece9mTmIbkEY4k3W")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf3046c5087d22181f34731a3325f262eeb60b6be8c7d2b51942f8efb643a29898f8e25b7bee39e79e9eee092f0923060b9cca4cdee69b9bd7f1e66241fa64c551940d617b9282444f2a2a506b2c7bddd5cfdfc0599d3a99a3216c74350e50eeacd52a8804e428bceaa146d57b7e4abcc2990054d6d60d1b0edbb68dd646bb1a8cd651a125390487c220582ce7efc1a40be71af3a812dc2dd36a42e7bbbb6b6f85127830cb0d071509d40a4c393bb7eb13750c3e0fa45e72249d6dc97847a0311d0d467440a719a52c8ed9258de2385e76af5c69239d801f05f8f77653018dbdd725f76dfd77e6efab7e0d3ef90a6eb410ae0e919a1a0b0ee205840baa14d2cf16b45396b0389c1baed60213ae30c3ad0789c5c67aacb33a456f2b3dc32dc85ae0e9c7fed8e4e103a4630de16a020000",
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
      "Wed, 29 Dec 2021 22:00:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0WDZICVYa5HEOY; path=/; expires=Thu, 29 Dec 2022 22:00:58 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recJgI3MhlBOgDggj")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ec23010fd15e41982e396967aaa5296a210aa8a32b05497e4485c3976e4d8a205f1efb5035261a8d4a5e3dd7bf7eeddbb031125e1c46031af9e6f16b54c96d5acaa3ec8906c05cab223fc403268d093e6ba568399c680bd83b33a734d8e86f0f87e125aea5cde85a213aa92980a852bfcb47e9af563b9b356ab202a2147e9fbcb16d5e0ed35f5b033a1515bdb767c3cdeed765165b46bc1681d15ba21c7a05018048b65f215447af3ae332f2ac5fd26aba72cd9cf9fbc14362082586e04a848a25660cac76bb92151a7c392401aa427d2d59695e8098cb27814b3117b5831c629e593494429ddf4276db5699c848b807c1e3d22a1b30b5d0a9fe47ffbbd5cf5abe9e98f69a3a5746db0d4b55808906b902e4c65909d13d04ef9bfd19e0dd6bf93f05b8ffc3199e337a1c029235a020000",
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
      "Wed, 29 Dec 2021 22:00:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8csjis19zu0s4x; path=/; expires=Thu, 29 Dec 2022 22:00:58 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "318",
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
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf3046c5087d32181f34731a3335628cb9db2eaca11f4bd76608e1bfdb0e896262e28b6fedb9e79c7b7aba25060b6dca86b0972de1256101c0a9cce455beba7c1eaf4e9e489f2c388ac0d99214247a5251815a62d9ebae7efe06ceead4c91c0d61a3b371807267ad5641242047e155b735aadec37de215ce04a0b2b66ed870d8b66db434dad560b48e0a2dc92e381406c162397b0f265d38d7983b95e0669e56133adb5c5f782b94c083596e38a848a05660caf363bb3e51fbe0b340ea257bd2d1968c77041ad3d1604407749a51cae2989dd2288ee379f7ca8536d209f851807f6f3715d0d81b5d72dfd67f67febeead7e093afe0460be1ea10a9a9b1e0201e41b8a04a21fd6c413b65098bc3b9e16a2930e10a335c7b90586cacc73aab43f4b6d2e7b806590b3cfcd81f9bdcbdee3e00a2d0fb9878020000",
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
      "Wed, 29 Dec 2021 22:00:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSauIIcnwndMnBL; path=/; expires=Thu, 29 Dec 2022 22:00:58 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rece9mTmIbkEY4k3W")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf3046c5087d22181f34731a3325f262eeb60b6be8c7d2b51942f8efb643a29898f8e25b7bee39e79e9eee092f0923060b9cca4cdee69b9bd7f1e66241fa64c551940d617b9282444f2a2a506b2c7bddd5cfdfc0599d3a99a3216c74350e50eeacd52a8804e428bceaa146d57b7e4abcc2990054d6d60d1b0edbb68dd646bb1a8cd651a125390487c220582ce7efc1a40be71af3a812dc2dd36a42e7bbbb6b6f85127830cb0d071509d40a4c393bb7eb13750c3e0fa45e72249d6dc97847a0311d0d467440a719a52c8ed9258de2385e76af5c69239d801f05f8f77653018dbdd725f76dfd77e6efab7e0d3ef90a6eb410ae0e919a1a0b0ee205840baa14d2cf16b45396b0389c1baed60213ae30c3ad0789c5c67aacb33a456f2b3dc32dc85ae0e9c7fed8e4e103a4630de16a020000",
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
      "Wed, 29 Dec 2021 22:00:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTYLdWACLlTpXuz; path=/; expires=Thu, 29 Dec 2022 22:00:59 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c14e023110fd15d2332ca58a624f66e5225916639003c698d9dd61b7a6db6eba6d5008ff6ebb900807132f1e67de9b376fdeec89c15c9ba225fc754f44417868cccac7ab7925e345392dcb0fd2271b813270f624851a3d69a62bd59b6a0cd83b38ab53576768081fdd8e434b9dca9b50b442951213a170899fd64fb36e2c73d66a15442564287d7fd1a0eabd3c271e7626342a6b9b960f87dbed362a8d760d18ada35cd7e41014728360b188bf824867deb5e64925b85ba7d584c5bbd98397c21a4410cb8c001549d40a4c717f29d727ea78581c48bde448bad8b2141d8151361a8cd880dd2d19e394f2f138a294aebb9336dad44ec259403e8f0e91d0dab92e844ff2bffd9eaffad5f4e4c7b4d152ba26586a1bcc05c8154817a652484f0968a7fcdf68c706ebdf49f8b547fe98cce1edf00d4b36961b68020000",
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
      "Wed, 29 Dec 2021 22:00:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaCvzHpZ7Uj0Myw; path=/; expires=Thu, 29 Dec 2022 22:00:59 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf3046c5087d32181f34731a3335628cb9db2eaca11f4bd76608e1bfdb0e896262e28b6fedb9e79c7b7aba25060b6dca86b0972de1256101c0a9cce455beba7c1eaf4e9e489f2c388ac0d99214247a5251815a62d9ebae7efe06ceead4c91c0d61a3b371807267ad5641242047e155b735aadec37de215ce04a0b2b66ed870d8b66db434dad560b48e0a2dc92e381406c162397b0f265d38d7983b95e0669e56133adb5c5f782b94c083596e38a848a05660caf363bb3e51fbe0b340ea257bd2d1968c77041ad3d1604407749a51cae2989dd2288ee379f7ca8536d209f851807f6f3715d0d81b5d72dfd67f67febeead7e093afe0460be1ea10a9a9b1e0201e41b8a04a21fd6c413b65098bc3b9e16a2930e10a335c7b90586cacc73aab43f4b6d2e7b806590b3cfcd81f9bdcbdee3e00a2d0fb9878020000",
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
      "Wed, 29 Dec 2021 22:00:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqC2wpWitIJQLXQ; path=/; expires=Thu, 29 Dec 2022 22:00:59 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ "records%5B%5D": ["rece9mTmIbkEY4k3W", "recJgI3MhlBOgDggj"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2a996b921b99e49d9ae9126d9c6e14ab53a38557aa57b1afb66e438f9a7bba4a76729d5c6d602005bd464ee61000000",
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
      "Wed, 29 Dec 2021 22:01:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwfWHDrvxF9WC79c; path=/; expires=Thu, 29 Dec 2022 22:01:00 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rece9mTmIbkEY4k3W")
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
      "Wed, 29 Dec 2021 22:01:00 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXqV2jUQXBZWIu7; path=/; expires=Thu, 29 Dec 2022 22:01:00 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recJgI3MhlBOgDggj")
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
      "Wed, 29 Dec 2021 22:01:00 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw0oeHqbsHF32rKk; path=/; expires=Thu, 29 Dec 2022 22:01:00 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2v3zlh6DjQIcNq; path=/; expires=Thu, 29 Dec 2022 22:01:01 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnv50qAoA6iIpW9; path=/; expires=Thu, 29 Dec 2022 22:01:01 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEuQA3Vurx80Wjz; path=/; expires=Thu, 29 Dec 2022 22:01:01 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b553cb6edb3010fc1581bdda0a25f991e814b8050a04b6d3266a0fa9838292d616118a145624fc82ffbd2465c37690432e0574e1ec7077383bda13844261d992f4cf9ef092a40ea0334c1e87e35df6b34dd88cf4c89283709c3d99b31a2ce9415532f8a6c0d5fe32a3d5dcd4392049a3f1c8414505c55bae3624d568c023061164b125694cc364e0a09269d72ba671d48fe27e3c222734e3f575258be29452fb8594d2978e679069ae244907b777d42150332eecb51aee61c3ea464058a8da936b2334175c42061b6d293c78936abd900e6acf0c7be5190414daf9419ea0b4a5ef0820c9abe3c8e323c761e48e0d6001d2b64b9230f140a5249c9c20a3681c0c8743fb8064e04738bd72653df2075e5447315f2a6025e042f683dc08017a213dbfb56c01d3b3ea25974c886d2f6001c2ca088681dfcc05bb936fb91361baed18749e545a376d7a73b35eafc39552ab0b6f72a3b5b3714f04cbc1911f1b90c1afa7a92d7f701b9569182ae51b1cfc6e11ecd2cac9d635f121322dfe9053d8bdccabdb78b27bf86a5b9dd69323673214a024c3f2feba5d8fc82e6013470aa61de96acafb6cdc65b1cd4694d2f89c8da542bb4f7611549b4b5f11acd5335572ebdbffd67b39ea33a25109611a27a96da0e04cfc666e87a9fde7e64707947171a3f6f049330eaf877fd1d5b123e3030000",
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
      "Wed, 29 Dec 2021 22:01:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7lOoblvAZChKmJ; path=/; expires=Thu, 29 Dec 2022 22:01:02 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553cb6edb3010fc1581bdda0a25f991e814b8050a04b6d3266a0fa9838292d616118a145624fc82ffbd2465c37690432e0574e1ec7077383bda13844261d992f4cf9ef092a40ea0334c1e87e35df6b34dd88cf4c89283709c3d99b31a2ce9415532f8a6c0d5fe32a3d5dcd4392049a3f1c8414505c55bae3624d568c023061164b125694cc364e0a09269d72ba671d48fe27e3c222734e3f575258be29452fb8594d2978e679069ae244907b777d42150332eecb51aee61c3ea464058a8da936b2334175c42061b6d293c78936abd900e6acf0c7be5190414daf9419ea0b4a5ef0820c9abe3c8e323c761e48e0d6001d2b64b9230f140a5249c9c20a3681c0c8743fb8064e04738bd72653df2075e5447315f2a6025e042f683dc08017a213dbfb56c01d3b3ea25974c886d2f6001c2ca088681dfcc05bb936fb91361baed18749e545a376d7a73b35eafc39552ab0b6f72a3b5b3714f04cbc1911f1b90c1afa7a92d7f701b9569182ae51b1cfc6e11ecd2cac9d635f121322dfe9053d8bdccabdb78b27bf86a5b9dd69323673214a024c3f2feba5d8fc82e6013470aa61de96acafb6cdc65b1cd4694d2f89c8da542bb4f7611549b4b5f11acd5335572ebdbffd67b39ea33a25109611a27a96da0e04cfc666e87a9fde7e64707947171a3f6f049330eaf877fd1d5b123e3030000",
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
      "Wed, 29 Dec 2021 22:01:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6ritGynLHf637Y; path=/; expires=Thu, 29 Dec 2022 22:01:02 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b553cb6edb3010fc1581bdda0a25f991e814b8050a04b6d3266a0fa9838292d616118a145624fc82ffbd2465c37690432e0574e1ec7077383bda13844261d992f4cf9ef092a40ea0334c1e87e35df6b34dd88cf4c89283709c3d99b31a2ce9415532f8a6c0d5fe32a3d5dcd4392049a3f1c8414505c55bae3624d568c023061164b125694cc364e0a09269d72ba671d48fe27e3c222734e3f575258be29452fb8594d2978e679069ae244907b777d42150332eecb51aee61c3ea464058a8da936b2334175c42061b6d293c78936abd900e6acf0c7be5190414daf9419ea0b4a5ef0820c9abe3c8e323c761e48e0d6001d2b64b9230f140a5249c9c20a3681c0c8743fb8064e04738bd72653df2075e5447315f2a6025e042f683dc08017a213dbfb56c01d3b3ea25974c886d2f6001c2ca088681dfcc05bb936fb91361baed18749e545a376d7a73b35eafc39552ab0b6f72a3b5b3714f04cbc1911f1b90c1afa7a92d7f701b9569182ae51b1cfc6e11ecd2cac9d635f121322dfe9053d8bdccabdb78b27bf86a5b9dd69323673214a024c3f2feba5d8fc82e6013470aa61de96acafb6cdc65b1cd4694d2f89c8da542bb4f7611549b4b5f11acd5335572ebdbffd67b39ea33a25109611a27a96da0e04cfc666e87a9fde7e64707947171a3f6f049330eaf877fd1d5b123e3030000",
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
      "Wed, 29 Dec 2021 22:01:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwHxSgmdYPiYRRP; path=/; expires=Thu, 29 Dec 2022 22:01:02 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rec0Mr3O57zTQs3aM",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338cae8ba27b32e81381a166fa801ad36d17d7a4eb5deedaa010febbed30011e4c7cf1b1f77c3d3df774c7084aa4aa63e9cb8ea98aa561c017942c2f26dbfca14be4820dd95a810ecc8e65b2010fcdb036833b84a0bd4b6731734d01c4d278721946a4ca3a874febd157d34385b3164db0d0b200ed85650b66f0f438f7b2a330a8ad6dbb743cde6c36d107a16b25214625366c1f1c4a0269a19a7e05933eaaebe8decc61bbcaea2b31ddce6ebd15345205b382943491063492aa9b73bb21338735a6011acc0fd0d92bb9ea01c1453c8ac5485ce742a43c4eb98838e7ab7ea53552e3b43ca9c36fdf2b5a76768195f2bdfd77ded3a77e0d9d1c43136aedda10a96ba154523f4bedc2ad4c663f0da033fee3b83ffcb18cfddbfe1b1df0f75c49020000",
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
      "Wed, 29 Dec 2021 22:01:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwIIy6yV0IEhnLOb; path=/; expires=Thu, 29 Dec 2022 22:01:03 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec0Mr3O57zTQs3aM")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aaea090132a9caa24051438544868936c8925c78e36b60aadfa77ec14a9ed01890b47ef8c676766f74cd62c618415cf68b6ba9aef8aa77e06191bb38d4455f72cd9b31c5af4a4a569f4e8c160c0dec15993bbb64462493cbf0e23925553e0a7f5d4373d904a67add141424189ca03ab0ef5e8e539f5b0a33068acedfa643add6eb7d10719d701191355a66587a0501182c57af1154406abaea7479de26e9d373762b15bde7b296c4106b19224e848a1d140f5dda5dc98e9638c45208dd223e9624b210782e0229ec462226e0b21121e275c449cf3f5106963a8750aceeaf0e90744416f33534bdfdb7ffb3d5ff5abe9d9c93419a55c172cf51d5612d42b28177ee590ff34609cf687e3fef1c7320edfb1b824903b020000",
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
      "Wed, 29 Dec 2021 22:01:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2mOkJemfnL0g7s; path=/; expires=Thu, 29 Dec 2022 22:01:04 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec0Mr3O57zTQs3aM")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aaea090132a9caa24051438544868936c8925c78e36b60aadfa77ec14a9ed01890b47ef8c676766f74cd62c618415cf68b6ba9aef8aa77e06191bb38d4455f72cd9b31c5af4a4a569f4e8c160c0dec15993bbb64462493cbf0e23925553e0a7f5d4373d904a67add141424189ca03ab0ef5e8e539f5b0a33068acedfa643add6eb7d10719d701191355a66587a0501182c57af1154406abaea7479de26e9d373762b15bde7b296c4106b19224e848a1d140f5dda5dc98e9638c45208dd223e9624b210782e0229ec462226e0b21121e275c449cf3f5106963a8750aceeaf0e90744416f33534bdfdb7ffb3d5ff5abe9d9c93419a55c172cf51d5612d42b28177ee590ff34609cf687e3fef1c7320edfb1b824903b020000",
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
      "Wed, 29 Dec 2021 22:01:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwhvLg0m7dxscOuW; path=/; expires=Thu, 29 Dec 2022 22:01:04 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZAkzrboDAjgJ4U; path=/; expires=Thu, 29 Dec 2022 22:01:04 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLYmhynhz4Mp99I; path=/; expires=Thu, 29 Dec 2022 22:01:05 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:05 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8tNJDynkKlDSAO; path=/; expires=Thu, 29 Dec 2022 22:01:05 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590316fc2301085ff0af25c82e3015a4f15dd104d11820e545575498e62d5f145175b0810ffbd7660281b4bc77bfaeedd7b77128c1571dd09fd7112a6163a09b9c37a313e543fbca4dd5a3c88ad419b989328a0c108cdc061d2bf20782a4253220b9d4f26492a83f7e4126ca1441be9b716dd60bd9cc78dc049d879df767a34daeff7d93753688189b28a1a714e0e152378aca78764d2870a1d2fdc1c8f9b62f7a8a6c7d94bb4c2064c322bd980cb2c9203ae9f6fed1e84bb049e266830bf40375756a6079454f9305743f5b4524acb5ccb7126a5dcf42db7c44db0702d1e7bf6aa85cebf526de277fe3bebdf53f70466b236b42952d76265c0be830d69ab80e2da9e82f342cb38dcf988f3e7f9174fb3f7dd2f020000",
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
      "Wed, 29 Dec 2021 22:01:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwEiPgjJmh4wmzgC; path=/; expires=Thu, 29 Dec 2022 22:01:05 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:06 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3T0XTA0KRM3Lco; path=/; expires=Thu, 29 Dec 2022 22:01:06 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590316fc2301085ff0af25c82e3015a4f15dd104d11820e545575498e62d5f145175b0810ffbd7660281b4bc77bfaeedd7b77128c1571dd09fd7112a6163a09b9c37a313e543fbca4dd5a3c88ad419b989328a0c108cdc061d2bf20782a4253220b9d4f26492a83f7e4126ca1441be9b716dd60bd9cc78dc049d879df767a34daeff7d93753688189b28a1a714e0e152378aca78764d2870a1d2fdc1c8f9b62f7a8a6c7d94bb4c2064c322bd980cb2c9203ae9f6fed1e84bb049e266830bf40375756a6079454f9305743f5b4524acb5ccb7126a5dcf42db7c44db0702d1e7bf6aa85cebf526de277fe3bebdf53f70466b236b42952d76265c0be830d69ab80e2da9e82f342cb38dcf988f3e7f9174fb3f7dd2f020000",
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
      "Wed, 29 Dec 2021 22:01:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVjTmAg8b51zjii; path=/; expires=Thu, 29 Dec 2022 22:01:06 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec0Mr3O57zTQs3aM")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aaea090132a9caa24051438544868936c8925c78e36b60aadfa77ec14a9ed01890b47ef8c676766f74cd62c618415cf68b6ba9aef8aa77e06191bb38d4455f72cd9b31c5af4a4a569f4e8c160c0dec15993bbb64462493cbf0e23925553e0a7f5d4373d904a67add141424189ca03ab0ef5e8e539f5b0a33068acedfa643add6eb7d10719d701191355a66587a0501182c57af1154406abaea7479de26e9d373762b15bde7b296c4106b19224e848a1d140f5dda5dc98e9638c45208dd223e9624b210782e0229ec462226e0b21121e275c449cf3f5106963a8750aceeaf0e90744416f33534bdfdb7ffb3d5ff5abe9d9c93419a55c172cf51d5612d42b28177ee590ff34609cf687e3fef1c7320edfb1b824903b020000",
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
      "Wed, 29 Dec 2021 22:01:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcDpzqrmvbdbla9; path=/; expires=Thu, 29 Dec 2022 22:01:06 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Wed, 29 Dec 2021 22:01:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9TxRwJPE2mS52S; path=/; expires=Thu, 29 Dec 2022 22:01:07 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd52416bc23018fd2b92b3d634b2baf534dc4ea2d549ddc16d8cb48d6b589a94af094e4bfffb922aa8e0601761ec98ef7b7979efe5d50858aa20ab50f852239ea1d00df01406b39be12e7eaa06748aba68cd9970981a45b460163456b9ec3c2ae676efd4681599226180427f18b811f0348fd997b6d057d98212a3b5928e42d08409bb98954c76968b895d1b70835cebb20afbfdcd66e37d80322505a5bc5415a8710c2930aa5936da3a9256aaa9602e276cb78af25b32da8d1f2c152b28776409702a3dc194a490dd9fd37591dcdb18395067b2079dbd12f3164030f17b3ee991bb989010fb21261ec678d55a5a2b288ca0277158f7ed46d04a4f55c66d6ed7d67bfad48fa20747d1a08430a59354952ce5543c5361dcad884687049491f6e3b03dfc328ca67bec8e2f59360fb6e9272c54bebcd81d2a2ff566f89f5a125c6c89356e7dfec98604576ac881b7796bbe01e108d9e06b040000",
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
      "Wed, 29 Dec 2021 22:01:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXUiL9Iiwtp1phK; path=/; expires=Thu, 29 Dec 2022 22:01:07 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "rec1nedP6yckrRohU", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "rec0Mr3O57zTQs3aM",
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
      "Wed, 29 Dec 2021 22:01:07 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiIBSaawQiIBhEa; path=/; expires=Thu, 29 Dec 2022 22:01:07 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "rec1nedP6yckrRohU", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591316fc2301085ff0af20cc1f100d4534537445384a00355555d92a3b1ead8d1c5560488ff5e3b50b50c95ba74b39ebf7b7eef7c628485a5b265f2e5c454c964145283e56a72283e686dab2d1bb2bd421d9913cba0c6002dc060d4dfc03b9bf93a4762329d4ea3947be7ac89b0861c75a09f1a3483ed7a19263c45a172ae69e578dc755df24ed63740d62685add9393a1484e0b09c1fa2491fcab7b4324b3ceeb26a26e6c7c543b0c21a5434cb498149345a0354dedfda0d99b9049e4768b0bc4037af6c540f082ed2512a46e26e2384e4a9e4938473beeb5bee2dd55ec3b578e8d9ab1a5af7684b15b6f3df597f3ef56be0d97760b25afb26466a1b2c14e867d03e4e65905ddb5b6f1c933c9ecdd707869b3f6ee5fc7afe04011132aa3c020000",
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
      "Wed, 29 Dec 2021 22:01:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7gqGpqHl4e8sSa; path=/; expires=Thu, 29 Dec 2022 22:01:08 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "rec0Mr3O57zTQs3aM",
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
      "Wed, 29 Dec 2021 22:01:08 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvwtNalmva8eVEj; path=/; expires=Thu, 29 Dec 2022 22:01:08 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b550416ec23010fc0af21982e31e0a3e55b4975634a0023d80aa6a936c8a25c71b39b6a282f87bed80d472e3d2e3eececccecc91592cc8962d93bb2353259371d12c9f374f55b79aae0e8bac62435629d411736419d418402baa910cc6d327784799af73b44ca6f793b83297f12e0eb9778e4c246bc85107f6a24133d8bccd03dddbb8d83bd7b4723ceeba2ef9b2e41bb0444941353b4585c222382c67df51a437e95bbb34733c6cb3fd44cc0e2f8f410a6b50512cb70a4ca2833fb0e5c3b5dc9099738059040de667d0d597b5ea01828b74948a9198ae85903c957c9a70ceb77de48a6ced35fc161172f7070dad7ba55285c2fedbeedf57b778b6a4b56fa2a5b6c142817e07ed232b83ec520079e398e461b8b18bd3c7e90799acd96142020000",
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
      "Wed, 29 Dec 2021 22:01:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwomJ2eaJFGjz8dd; path=/; expires=Thu, 29 Dec 2022 22:01:08 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "299",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec1nedP6yckrRohU")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591316fc2301085ff0af20cc1f100d453956e284d11820e2cd525391aab8e1d5d6c2140fcf7da81aa65a8d4a59bf5fceef97be7335335938cb04a0dd6abd9b1faa0b56db66cccf60a75dd33796605b4184c4b3018f537f0ce16be2d91984ce7f32895de396ba25943893ab85f3a34a3ed3a0f139ea2d038d7f5723a3d1c0ec93b59df01599b54b6659798501182c33a3bc69001caf7b432399e7645b310d969f914a2b00515c34a5260128dd600d58ff7716366aec059348df2abe9ee958d1a0c828b74928a8978d80821792af92ce19cef86967b4badd7702b1e7a0eaa86de3ddb5a85edfc37ebcfa77e055e7c0393d5da7711a9efb052a05f41fb385540716b6fbd714cf278365f1f186efeb895cb274287a2252e020000",
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
      "Wed, 29 Dec 2021 22:01:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRYKOwyu7XVeyNA; path=/; expires=Thu, 29 Dec 2022 22:01:09 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec0Mr3O57zTQs3aM")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3aaea090132a9caa24051438544868936c8925c78e36b60aadfa77ec14a9ed01890b47ef8c676766f74cd62c618415cf68b6ba9aef8aa77e06191bb38d4455f72cd9b31c5af4a4a569f4e8c160c0dec15993bbb64462493cbf0e23925553e0a7f5d4373d904a67add141424189ca03ab0ef5e8e539f5b0a33068acedfa643add6eb7d10719d701191355a66587a0501182c57af1154406abaea7479de26e9d373762b15bde7b296c4106b19224e848a1d140f5dda5dc98e9638c45208dd223e9624b210782e0229ec462226e0b21121e275c449cf3f5106963a8750aceeaf0e90744416f33534bdfdb7ffb3d5ff5abe9d9c93419a55c172cf51d5612d42b28177ee590ff34609cf687e3fef1c7320edfb1b824903b020000",
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
      "Wed, 29 Dec 2021 22:01:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVaaUpazOTqaayj; path=/; expires=Thu, 29 Dec 2022 22:01:09 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22Someone%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550416ec23010fc0af21982e31e0a3e55b4975634a0023d80aa6a936c8a25c71b39b6a282f87bed80d472e3d2e3eececccecc91592cc8962d93bb2353259371d12c9f374f55b79aae0e8bac62435629d411736419d418402baa910cc6d327784799af73b44ca6f793b83297f12e0eb9778e4c246bc85107f6a24133d8bccd03dddbb8d83bd7b4723ceeba2ef9b2e41bb0444941353b4585c222382c67df51a437e95bbb34733c6cb3fd44cc0e2f8f410a6b50512cb70a4ca2833fb0e5c3b5dc9099738059040de667d0d597b5ea01828b74948a9198ae85903c957c9a70ceb77de48a6ced35fc161172f7070dad7ba55285c2fedbeedf57b778b6a4b56fa2a5b6c142817e07ed232b83ec520079e398e461b8b18bd3c7e90799acd96142020000",
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
      "Wed, 29 Dec 2021 22:01:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLfXMj4g4NfE0Ub; path=/; expires=Thu, 29 Dec 2022 22:01:09 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "299",
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
      "1f8b0800000000000003dd945f6f823014c5bf8ae9b3227f32149e16e7cb8ca253dc83dbb21428a3596949a16162fcee6bd145cd5862969818dfa0f770ee3db7bfb0011c858c4739705f360047c05507fa845bd3bb5ee53fe5169c80368831224ab3011e4c91148d58425b438654ed1d8a8279220d1007aed1b3d511c761e2a3af424a5f692d0a445130aa2c080c1091856986686b391fcbb2e0ea20298a2c77bbddb22cb50fce440639635ac852b0550e2147b040d160ad4cea5145ce67748caa9597f4cd41357a905628855899051c43aa11c428e4d1fda95d1bd05d8c8112b5c63bd149171fd70253378d8e61764cc7374d57375cddd4745d5fd59162c65341e0d13a64faba42605e4c5884e5de2e3def71ab3f87b60e43734688c8d4487986420cc93324427de5416fbf0126a8bc385dbe9cb98c6dfbc08e415134b3d7e1279fb364d9c80ea44ddcf46e8912bb9112195ce6bc4a42faff21443dd39f0b3c0317fb372ed9ec71398ccb85b3a8a65edc84cb82a5324d1331fde3fed62de1e334e1b35f84cc7d95043917fac7ec7db76fdb6fc4251fb1ad060000",
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
      "Wed, 29 Dec 2021 22:01:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw35QkZv7qdezuFA; path=/; expires=Thu, 29 Dec 2022 22:01:10 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "411",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "rec0Mr3O57zTQs3aM",
      "rec1nedP6yckrRohU",
      "recpPIUDfwS9SzONf",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f206be45c6fea6e6552181c5c689be4ab53a38551ae6a5a604985526671705e56784e2535910e019ea92561e6c195ce5ef97a6541b5b0b00f11626668b000000",
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
      "Wed, 29 Dec 2021 22:01:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwl0TKpNeGJzosgN; path=/; expires=Thu, 29 Dec 2022 22:01:10 GMT; domain=.airtable.com; samesite=none; secure",
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
