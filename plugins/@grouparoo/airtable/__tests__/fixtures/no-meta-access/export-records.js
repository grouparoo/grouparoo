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
      "Thu, 30 Dec 2021 01:55:51 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxZge5G5u7Ft3Um; path=/; expires=Fri, 30 Dec 2022 01:55:51 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvUgBteWVXDFnCq; path=/; expires=Fri, 30 Dec 2022 01:55:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUGCecRWZx4NGz2; path=/; expires=Fri, 30 Dec 2022 01:55:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:52 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwivuXvEgzNDJzql; path=/; expires=Fri, 30 Dec 2022 01:55:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwVnKU00EJzUNSPy; path=/; expires=Fri, 30 Dec 2022 01:55:52 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYQXQI4XEberpqw; path=/; expires=Fri, 30 Dec 2022 01:55:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc10920b53955d04315a5e98f680f5455b54916e2d6b1a3b52d5a10ef5e3b7028372e3d7afc797676bc678495a6dab0f46dcf44cdd2207cde3d4d16e62b6f6e55d6656cc8d6026560f6ac80163d9481c2a07f80b3ba706d89c4d2f87a1a2423d446622e142ef1db7ab8413ac2a5b356ab6023a144e9af1e3a548397e7dc5f3b0a42636d67d2f178bbdd461bd2ae03d23aaa74cb0ec1a122048bf5fc2798f4719da14795e36e553457c97c972dbc15b620825949025424512ba0fae6dc6ec8d47195798006f9113a9bb2143d90f0241ec5c968c2973c4e67b374368d38e7ab7ea5b5a6d6493855e21be85509c6deeb5af8defe3bebdf519704262da5eb4224d3612540be8274e15501c5697bed94ff36ee0f171671783ffc02065b1d3c49020000",
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
      "Thu, 30 Dec 2021 01:55:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7o0MKFuzAXcKGW; path=/; expires=Fri, 30 Dec 2022 01:55:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc10920b53955d04315a5e98f680f5455b54916e2d6b1a3b52d5a10ef5e3b7028372e3d7afc797676bc678495a6dab0f46dcf44cdd2207cde3d4d16e62b6f6e55d6656cc8d6026560f6ac80163d9481c2a07f80b3ba706d89c4d2f87a1a2423d446622e142ef1db7ab8413ac2a5b356ab6023a144e9af1e3a548397e7dc5f3b0a42636d67d2f178bbdd461bd2ae03d23aaa74cb0ec1a122048bf5fc2798f4719da14795e36e553457c97c972dbc15b620825949025424512ba0fae6dc6ec8d47195798006f9113a9bb2143d90f0241ec5c968c2973c4e67b374368d38e7ab7ea5b5a6d6493855e21be85509c6deeb5af8defe3bebdf519704262da5eb4224d3612540be8274e15501c5697bed94ff36ee0f171671783ffc02065b1d3c49020000",
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
      "Thu, 30 Dec 2021 01:55:53 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxeojdVRo9SnEf6; path=/; expires=Fri, 30 Dec 2022 01:55:53 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc10920b53955d04315a5e98f680f5455b54916e2d6b1a3b52d5a10ef5e3b7028372e3d7afc797676bc678495a6dab0f46dcf44cdd2207cde3d4d16e62b6f6e55d6656cc8d6026560f6ac80163d9481c2a07f80b3ba706d89c4d2f87a1a2423d446622e142ef1db7ab8413ac2a5b356ab6023a144e9af1e3a548397e7dc5f3b0a42636d67d2f178bbdd461bd2ae03d23aaa74cb0ec1a122048bf5fc2798f4719da14795e36e553457c97c972dbc15b620825949025424512ba0fae6dc6ec8d47195798006f9113a9bb2143d90f0241ec5c968c2973c4e67b374368d38e7ab7ea5b5a6d6493855e21be85509c6deeb5af8defe3bebdf519704262da5eb4224d3612540be8274e15501c5697bed94ff36ee0f171671783ffc02065b1d3c49020000",
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
      "Thu, 30 Dec 2021 01:55:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9684sIRRHwQxtw; path=/; expires=Fri, 30 Dec 2022 01:55:54 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc10920b53955d04315a5e98f680f5455b54916e2d6b1a3b52d5a10ef5e3b7028372e3d7afc797676bc678495a6dab0f46dcf44cdd2207cde3d4d16e62b6f6e55d6656cc8d6026560f6ac80163d9481c2a07f80b3ba706d89c4d2f87a1a2423d446622e142ef1db7ab8413ac2a5b356ab6023a144e9af1e3a548397e7dc5f3b0a42636d67d2f178bbdd461bd2ae03d23aaa74cb0ec1a122048bf5fc2798f4719da14795e36e553457c97c972dbc15b620825949025424512ba0fae6dc6ec8d47195798006f9113a9bb2143d90f0241ec5c968c2973c4e67b374368d38e7ab7ea5b5a6d6493855e21be85509c6deeb5af8defe3bebdf519704262da5eb4224d3612540be8274e15501c5697bed94ff36ee0f171671783ffc02065b1d3c49020000",
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
      "Thu, 30 Dec 2021 01:55:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8khcpGOXPJ3p0H; path=/; expires=Fri, 30 Dec 2022 01:55:54 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:55:54 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwWUixbigFJoWCrD; path=/; expires=Fri, 30 Dec 2022 01:55:54 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591cd6ec23010845f05f90cc10920b53955d04315a5e98f680f5455b54916e2d6b1a3b52d5a10ef5e3b7028372e3d7afc797676bc678495a6dab0f46dcf44cdd2207cde3d4d16e62b6f6e55d6656cc8d6026560f6ac80163d9481c2a07f80b3ba706d89c4d2f87a1a2423d446622e142ef1db7ab8413ac2a5b356ab6023a144e9af1e3a548397e7dc5f3b0a42636d67d2f178bbdd461bd2ae03d23aaa74cb0ec1a122048bf5fc2798f4719da14795e36e553457c97c972dbc15b620825949025424512ba0fae6dc6ec8d47195798006f9113a9bb2143d90f0241ec5c968c2973c4e67b374368d38e7ab7ea5b5a6d6493855e21be85509c6deeb5af8defe3bebdf519704262da5eb4224d3612540be8274e15501c5697bed94ff36ee0f171671783ffc02065b1d3c49020000",
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
      "Thu, 30 Dec 2021 01:55:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwpift87lGlFzcHx; path=/; expires=Fri, 30 Dec 2022 01:55:55 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recjHQ3CskLhDnJpJ",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e4330427903e72aaa0872a4ad387680f5455e5240bb8756ccb0fd182f877bc01a9e550a997deacd9f1ecccec9618a895692cc95eb684372443e0fde66134b51fc5ea5ae63a277db2e02090b325256b2190722601f137e69d2a7d5b8121597c3946c872b91450700933f87481ec75c31c341dbff2ce29894a825520c2f44e83ec3d3d1661ec0d022be7b4cd86c3f57a1d2d8df29a19a5a25ab564870ab501549b7ca148e7d85b732f0bd8cccbd54532d9e4d320052de3285619ce64244049669aab53b93e9187341324f58a03e964cb8c77848426f1204e06233aa37196a6593a8e28a5f32ed24299d60b766c2594d0a1825977ab1a1eaafb6faf3f57fd6af8ecdbb05142788d96ac869a33f1cc84c75f252b8fe99597e17214dff278dd343a0fb33ff6b27bdded01e08a87d55b020000",
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
      "Thu, 30 Dec 2021 01:55:55 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwjsszItOnU0sypP; path=/; expires=Fri, 30 Dec 2022 01:55:55 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c16ec2300cfd15943394b453d1d6d3d4ed54ba6e9a18d298a6c96d0d444ae32a4d5406e2df97140e70e3b2a3fd9e9f9f9f0f4c6345baee58f27560a266c9d09867d52efd9cabf972a3051bb3b540e939075640838e94d1568d9e093df603d650619b12354bc287d8b7d4b99cf9a2136a2331170a17b8336edaf4340c96d618525e564289d221af2daad1c77bee60ab7d636b4cdb25d369dff7c146936d4113051535ece8152a8d60b04e7fbdc860df76fa4de5b85f15dbfb28dd674f4e0a1b105eacd40254209114e8faf15a6eccd4e9b4d49346f98974b565210642c4a3701246933bbee06112c7493c0b38e7abe1a435e9c64ab888c8253220123af342b57059feb7dfcb55b798d624a56dbda5aec54a805c82b47eaa80e29c0059e53ec75d716318c7efe31fdf404a3f5d020000",
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
      "Thu, 30 Dec 2021 01:55:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwgKSAqbQL5U8aBO; path=/; expires=Fri, 30 Dec 2022 01:55:55 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recjHQ3CskLhDnJpJ")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e4330427903e72aa420f5594a60f410f5caa4db2805bc7b6fc102d887faf1d905a0e957ae9cd9a1dcfceccee096b494634366f774f9399792f37b7a2500519921543de1a92ed49051d7a52010203fe0acecaca75356a92c5d7d3001926d61c4b26708e1fd6939d6ac162dbf36b67ad144189438ddc4f1f148ac1e2b9f463a703b0b156996c3cde6eb7d15a4ba7404b1935b22387a0d0680c6af96710e91d3ba31f4589bb65b5b94af25d31f352d8010b62b56620228e52806e6fcee586441cd3e48134288fa4b32d73d613129ac4a338194de89cc6599a66e934a2942efb482ba93bc7e1d48a2fa14739187b2f5be6abfb6faf3f57fd6af8e2dbb0969c3b152c19850d03fe02dc855f1554a7f4d2097f391adee274dd34baf4b33ff672f8025cddeb2a4d020000",
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
      "Thu, 30 Dec 2021 01:55:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTFi4W3X6EoBBgq; path=/; expires=Fri, 30 Dec 2022 01:55:56 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    filterByFormula: "OR%28%7BName%7D%3D%22John%20Doe%22%29",
    maxRecords: "100",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b453d1d6d3d4ed54ba6e9a18d298a6c96d0d444ae32a4d5406e2df97140e70e3b2a3fd9e9f9f9f0f4c6345baee58f27560a266c9d09867d52efd9cabf972a3051bb3b540e939075640838e94d1568d9e093df603d650619b12354bc287d8b7d4b99cf9a2136a2331170a17b8336edaf4340c96d618525e564289d221af2daad1c77bee60ab7d636b4cdb25d369dff7c146936d4113051535ece8152a8d60b04e7fbdc860df76fa4de5b85f15dbfb28dd674f4e0a1b105eacd40254209114e8faf15a6eccd4e9b4d49346f98974b565210642c4a3701246933bbee06112c7493c0b38e7abe1a435e9c64ab888c8253220123af342b57059feb7dfcb55b798d624a56dbda5aec54a805c82b47eaa80e29c0059e53ec75d716318c7efe31fdf404a3f5d020000",
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
      "Thu, 30 Dec 2021 01:55:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwj5Vn7KsX44dM75; path=/; expires=Fri, 30 Dec 2022 01:55:56 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551cb6ec23010fc15e4330427903e72aaa0872a4ad387680f5455e5240bb8756ccb0fd182f877bc01a9e550a997deacd9f1ecccec9618a895692cc95eb684372443e0fde66134b51fc5ea5ae63a277db2e02090b325256b2190722601f137e69d2a7d5b8121597c3946c872b91450700933f87481ec75c31c341dbff2ce29894a825520c2f44e83ec3d3d1661ec0d022be7b4cd86c3f57a1d2d8df29a19a5a25ab564870ab501549b7ca148e7d85b732f0bd8cccbd54532d9e4d320052de3285619ce64244049669aab53b93e9187341324f58a03e964cb8c77848426f1204e06233aa37196a6593a8e28a5f32ed24299d60b766c2594d0a1825977ab1a1eaafb6faf3f57fd6af8ecdbb05142788d96ac869a33f1cc84c75f252b8fe99597e17214dff278dd343a0fb33ff6b27bdded01e08a87d55b020000",
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
      "Thu, 30 Dec 2021 01:55:56 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwnLaiOgq8Cn7ePg; path=/; expires=Fri, 30 Dec 2022 01:55:56 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recjHQ3CskLhDnJpJ",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd4ec33010845fa5f2b94d9db4918a4f28e580a2107e54381421b449b6c4e0d891632ba251df1d3bad043d2071e1b8a36f676776201a4ba5ab8eb0e781f08a302fbc5fdf2fd6dd47565fc9b44dc994ec380acf0c2487061d948244afbf82352ab74d819ab0f062e9a5c21aa3a4870514281c7ddba29c3c3e646ec36a2fd4c6b41d9bcffbbe0fdeb4b22d68a5825235e4e01d4a8d60b04a3ebdc918ca76fa4e66b8dfe6f52a4af6e9da596103dc9b159a830c042a09baba3cb79b12790c9c7868921da1b32b1b3e02118dc25918cd1674434316c72c5e0694d2edd872a77463059c8abb9ea32aa03337aae2ee3bff9df5e7a95f03afbe036b25846d7da4aec59283780261fd560ef9a9bdb2d21046ddf0c7471c5e0e5f07bb70b32f020000",
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
      "Thu, 30 Dec 2021 01:55:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7WfsTX33dTXKmA; path=/; expires=Fri, 30 Dec 2022 01:55:58 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recjHQ3CskLhDnJpJ")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590cd4ec33010845fa5f2b94d9db4918a4f28e580a2107e5438f48236c996181cdb726c45b4eabb63a795a007242e1c77f4edeccc1e086f082306ebf7dbc7c5baff28da1b99eb9c4cc98ea3687ac20ea4840e3d9483c4a0bf82b3aa745d8586b0f86a19a4ca59ab64800554283c7daf514e9e9f0abfe14c105a6b75cfe6f36118a237a39c06a35454ab8e1c83436d102c36d967301943b9de3cc802f7dbb25d25d93e5f7b2bec8007b3ca7090914025c134d7977653224f81b3004d8a13747165c34720a1493c8b93d9826e68ccd294a5cb8852ba1d5bee94e99c807371df735405f4f64e35dc7fe7bfb3fe3cf56be0d57760a384703a44ea35d61cc40b0817b64a28cfed95939630ea873f3ee2f80545d0dd4221020000",
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
      "Thu, 30 Dec 2021 01:55:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtJu4wdwN28SvXP; path=/; expires=Fri, 30 Dec 2022 01:55:58 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590cd4ec33010845fa5f2b94d9db4918a4f28e580a2107e54381421b449b6c4e0d891632ba251df1d3bad043d2071e1b8a36f676776201a4ba5ab8eb0e781f08a302fbc5fdf2fd6dd47565fc9b44dc994ec380acf0c2487061d948244afbf82352ab74d819ab0f062e9a5c21aa3a4870514281c7ddba29c3c3e646ec36a2fd4c6b41d9bcffbbe0fdeb4b22d68a5825235e4e01d4a8d60b04a3ebdc918ca76fa4e66b8dfe6f52a4af6e9da596103dc9b159a830c042a09baba3cb79b12790c9c7868921da1b32b1b3e02118dc25918cd1674434316c72c5e0694d2edd872a77463059c8abb9ea32aa03337aae2ee3bff9df5e7a95f03afbe036b25846d7da4aec59283780261fd560ef9a9bdb2d21046ddf0c7471c5e0e5f07bb70b32f020000",
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
      "Thu, 30 Dec 2021 01:55:58 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw3qfaJcC4yYnBtz; path=/; expires=Fri, 30 Dec 2022 01:55:58 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c16ec2300cfd15943394b453d1d6d3d4ed54ba6e9a18d298a6c96d0d444ae32a4d5406e2df97140e70e3b2a3fd9e9f9f9f0f4c6345baee58f27560a266c9d09867d52efd9cabf972a3051bb3b540e939075640838e94d1568d9e093df603d650619b12354bc287d8b7d4b99cf9a2136a2331170a17b8336edaf4340c96d618525e564289d221af2daad1c77bee60ab7d636b4cdb25d369dff7c146936d4113051535ece8152a8d60b04e7fbdc860df76fa4de5b85f15dbfb28dd674f4e0a1b105eacd40254209114e8faf15a6eccd4e9b4d49346f98974b565210642c4a3701246933bbee06112c7493c0b38e7abe1a435e9c64ab888c8253220123af342b57059feb7dfcb55b798d624a56dbda5aec54a805c82b47eaa80e29c0059e53ec75d716318c7efe31fdf404a3f5d020000",
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
      "Thu, 30 Dec 2021 01:55:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYMhHW6eJXNyoah; path=/; expires=Fri, 30 Dec 2022 01:55:58 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recjHQ3CskLhDnJpJ",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "recoKJcxBYKnKVgri",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd52c96ec23014fc15e4334b0804959c50e05085345d44914a55554ef2206e1d3b726c4141f9f7da0144a952894b2fdcecf1bcf1783c3b2420e6222990fbba432441ae013e6e1f7be3e2334827cccf7dd4444b02d4707628c41968529c62b682a4516df5f93b5692872a8b4020b73bec1b285252726686288e80eaa9fb1c58e3f929d0134a182095322fdc4e67bd5eb75782ab1c0bcedb31cf50691462015842e27d1991ca9c2ac4030b60bb08d31bdbdbfa632d051926462c1204b33605ceb04846e7724dc4f6c63d436a047bd2d92d3352116ccbeeb6ba76ab67cdacaeeb38aed36f5b96b5a85eb9e4225314ff0a40bfb73aa5b890773c213aadfff6fcf3aa3f8d0f4fc605a754e5c65291434c309d63aacc5488c3430a5c31895ccbac0bc2561402c260061b0d220985d4582575b4be4ef9083638cb291c7fecc224cbe6a96a7ceac71bef65caa6f395207555f379ca1a135e5733c740ecb01dd43ab7d13555715057c563403a8febaaa1c055e9dcfe05d53a2453be95dfc29f264dd3040000",
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
      "Thu, 30 Dec 2021 01:55:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPUKy2TJAy5DmwT; path=/; expires=Fri, 30 Dec 2022 01:55:59 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recjHQ3CskLhDnJpJ")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e433842480547c42d04385d2f421da03976a932cc4ad635b7e2814c4bfd70e452d952af5d29b3d3b333b1e1f08ab08251acbd79b87d1c2bc65f5b558aa25e9930d435e19420f2487063da9ac416cb1ea75573f7f016765ee9a0235a1c9741ca0c2592b45107128907bd59d42d17b7accbcc2e900d4d62a4387c3b66da3ad964e8196322a65438ec1a1d40816abf97b30e9c239a3ef4586fb755e5fa5f3fd72e1adb00116cc0acd40441ca5005dcd2eedfa449c82cf03a9979d48175b56ac23a4719a0c9274308a57714227133a1947711cafbb576ea46e1c871f05f8f776530ec6deca8af9b6fe3bf3f755bf069f7e05d79273a74224a3b064c09f81bba0ca21ff6c413a61098dc3d930b1e59831812bdc79905834d6639dd5397a5bcb19eea0511ccf3ff6c7268f1ffb5c4c386a020000",
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
      "Thu, 30 Dec 2021 01:55:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUwSd5QVI0pxt4x; path=/; expires=Fri, 30 Dec 2022 01:55:59 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recoKJcxBYKnKVgri")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394b45bd1c869ea7682ae9b2686342e93db1a8894c6559a0806e2df9714a48dc3a45d76b4dff3f3f3f391c99a0966b0a2f9acda67ef733d5f6e8c6443b696a8ea8e89232ba0414f9ad1560f1e0903f601ce52e19a120d13f1340d2d7d2927a1e8a4de28cca5c605eead9f4efab1d2594b3a882a2851f9fe738b7af0f69a7bd899d0d85adb76623cdeed76d1c6906bc110451535ec14142a8360b1ce3e83486fde75e645e7785815dbbb243bcc1ebc14362083586924e848216930f5fdb5dc90e9f36159200df233e96acb42f6848427f1284e46377cc16391a6229d449cf3557fd29a4ce314fc08c8e7d1230a3afb44b5f449feb7df9fab7e353dfd366d4829d7064b5d8b9504b504e5c25401c5250172daff8df76cb0fe9d4cdc7ae48fc99cbe001eb11a055a020000",
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
      "Thu, 30 Dec 2021 01:55:59 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYc6hxeU4nrogtK; path=/; expires=Fri, 30 Dec 2022 01:55:59 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf30b60189f4890c1f0c99f323e803c698bbedc2aa5dbbf4234308ffdd76481413135f7c6bcf3de7dcd3d33d515848556a429ff68495847ae0f5ea6e34d76f69752916cd82f4c99a21f79c3dc9a046472a2a101b2c7bddd5cd5fc01a99d93a474568341d7b28b7c648e1451c72e44e75d3a0e83ddca74e6195072a631a4d87c3b66d838d92b601256550c89a1cbc43a1100c96c9bb37e9c259ad6e458abb55565dc4c96e3177565803f366b96220028e52802a67e7767d228ec1134feaa547d2d99625eb0871184783281e8cc26518d1c9844ec6411886abee956ba96acbe14701eebddd948336d7b264aeadffcefc7dd5afc1a75fc195e4dc363e926eb060c01f815bafca20fb6c415a61080dfd5933b1e19832814bdc3a9018d4c6619dd5297a5bc9196ea16e389e7eec8f4d1e9e0f1f4565be1378020000",
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
      "Thu, 30 Dec 2021 01:56:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwiNKvdOPX2Wk6Zs; path=/; expires=Fri, 30 Dec 2022 01:56:00 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recjHQ3CskLhDnJpJ")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ec23010fc15e433842480547c42d04385d2f421da03976a932cc4ad635b7e2814c4bfd70e452d952af5d29b3d3b333b1e1f08ab08251acbd79b87d1c2bc65f5b558aa25e9930d435e19420f2487063da9ac416cb1ea75573f7f016765ee9a0235a1c9741ca0c2592b45107128907bd59d42d17b7accbcc2e900d4d62a4387c3b66da3ad964e8196322a65438ec1a1d40816abf97b30e9c239a3ef4586fb755e5fa5f3fd72e1adb00116cc0acd40441ca5005dcd2eedfa449c82cf03a9979d48175b56ac23a4719a0c9274308a57714227133a1947711cafbb576ea46e1c871f05f8f776530ec6deca8af9b6fe3bf3f755bf069f7e05d79273a74224a3b064c09f81bba0ca21ff6c413a61098dc3d930b1e59831812bdc79905834d6639dd5397a5bcb19eea0511ccf3ff6c7268f1ffb5c4c386a020000",
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
      "Thu, 30 Dec 2021 01:56:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6NM5t5HE4a7HAA; path=/; expires=Fri, 30 Dec 2022 01:56:00 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c16ec2300cfd15943394b45bd1c869ea7682ae9b268604d334a5ad8148695ca5896020fe7d49401a1c26edb2a3fd9e9f9f9f0f444385baee087b3f105113161ad349b5cb1653359dafb5207db212203de7400ade80234d70a37a8f081efbe4d660619b123461f138f52d752e47bee8845a4bc8858219ec8c9b4ec258698d41e545252f41bafe730baaf7f69a3bd86adfd818d3766c38dc6eb7d15aa36db9468c2a6cc8d12b541ab8813afbf222c1bcedf48bca61bf2c367749b69f3c382968b8f062a5165c451250715ddf5fcbf5893a1d9679522f3f91aeb6cc4420243489077132b8a1331ab33465e928a2942ec3492bd48d95fc222097474024efcc13d6c225f9df7e2f57fd6a7afc635aa394b6f596ba162ac1e59c4beba70a5e9c1340abdcdf686073e3de49d8ad43fe98ccf1e3f80da5e3c95f68020000",
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
      "Thu, 30 Dec 2021 01:56:00 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9Br881XKWAjDdx; path=/; expires=Fri, 30 Dec 2022 01:56:00 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5515d4fc23014fd2ba4cf30b60189f4890c1f0c99f323e803c698bbedc2aa5dbbf4234308ffdd76481413135f7c6bcf3de7dcd3d33d515848556a429ff68495847ae0f5ea6e34d76f69752916cd82f4c99a21f79c3dc9a046472a2a101b2c7bddd5cd5fc01a99d93a474568341d7b28b7c648e1451c72e44e75d3a0e83ddca74e6195072a631a4d87c3b66d838d92b601256550c89a1cbc43a1100c96c9bb37e9c259ad6e458abb55565dc4c96e3177565803f366b96220028e52802a67e7767d228ec1134feaa547d2d99625eb0871184783281e8cc26518d1c9844ec6411886abee956ba96acbe14701eebddd948336d7b264aeadffcefc7dd5afc1a75fc195e4dc363e926eb060c01f815bafca20fb6c415a61080dfd5933b1e19832814bdc3a9018d4c6619dd5297a5bc9196ea16e389e7eec8f4d1e9e0f1f4565be1378020000",
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
      "Thu, 30 Dec 2021 01:56:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcKz8RQUk4OH4f3; path=/; expires=Fri, 30 Dec 2022 01:56:01 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ "records%5B%5D": ["recjHQ3CskLhDnJpJ", "recoKJcxBYKnKVgri"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2591e81c6cec5d93e192e795e055e4ab53a3855e67b7b255738457ae77987a517652ad5c6d60200ddcb390161000000",
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
      "Thu, 30 Dec 2021 01:56:01 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwAh1AqE98nPYUgS; path=/; expires=Fri, 30 Dec 2022 01:56:01 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recjHQ3CskLhDnJpJ")
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
      "Thu, 30 Dec 2021 01:56:01 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSNDpPXVTusrYm6; path=/; expires=Fri, 30 Dec 2022 01:56:01 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recoKJcxBYKnKVgri")
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
      "Thu, 30 Dec 2021 01:56:02 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwrHXnLoleYffIXt; path=/; expires=Fri, 30 Dec 2022 01:56:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwgEm0VC6LUJPXGu; path=/; expires=Fri, 30 Dec 2022 01:56:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyNbSS5bxDSMqzR; path=/; expires=Fri, 30 Dec 2022 01:56:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:02 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwYl8EgkXcuDBqTw; path=/; expires=Fri, 30 Dec 2022 01:56:02 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44980829f3a566952c5d8d4b256eba82627b910ab8e9dddd8028af8f7d906044c7be8cba4bcf8dce37b8fcfb9d912844263d912f6734b444998073e4eb2d18fa1daac7edf964f0de9908500e9395b32e53538d29dae5474abc1d77e716bf4d4d6392061c968e0a1a282e235d76bc20c5a08884504556c084b699cf53c5472e37ba5344dba49da4d07e488ce447d59992529a3d47d31a5f479cfb3c88dd08ab0de70443d023517d25dabe106d6bc6e24c485ae03b9b6d2082914cc606d1c4544af4aafe6ca43ed89e1ae3c8084c2783fc83d94aef419011479f11c7578e4759cf86303588072edb22cce025069054727c820b98efafdbe7b40d60b23bc5eb5741e858328aa83980f15f01270aeba516ea504335781df3ab684c949f542282ee5a613f108616925c7282473c6decb77dcb1b4fb742c7a4f2a639a965d5dad56ab78a9f5f2cc9bdc1ae36ddc12c973f0e4af0da8e8fbfdc495ff711bb56d386a1d1aec42b6082eb472bcf14dc212d916bfa909bc3d4fab613a7ebbfbe45a1de3c95170154bd08a637973d9ae43d47ec1c69e144df6a48b297fed4646673461fd01a3d96937161a5d9efc6c51dd5e868ae4adf9a24be17cfbdf7acf47bd47346a296de325b50d1482cb47ee3364ee9f9b1e1cd0d6af1b7587779ab17bd9fd0185e09028e3030000",
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
      "Thu, 30 Dec 2021 01:56:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwqJVFwHwqRKxc2W; path=/; expires=Fri, 30 Dec 2022 01:56:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "508",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44980829f3a566952c5d8d4b256eba82627b910ab8e9dddd8028af8f7d906044c7be8cba4bcf8dce37b8fcfb9d912844263d912f6734b444998073e4eb2d18fa1daac7edf964f0de9908500e9395b32e53538d29dae5474abc1d77e716bf4d4d6392061c968e0a1a282e235d76bc20c5a08884504556c084b699cf53c5472e37ba5344dba49da4d07e488ce447d59992529a3d47d31a5f479cfb3c88dd08ab0de70443d023517d25dabe106d6bc6e24c485ae03b9b6d2082914cc606d1c4544af4aafe6ca43ed89e1ae3c8084c2783fc83d94aef419011479f11c7578e4759cf86303588072edb22cce025069054727c820b98efafdbe7b40d60b23bc5eb5741e858328aa83980f15f01270aeba516ea504335781df3ab684c949f542282ee5a613f108616925c7282473c6decb77dcb1b4fb742c7a4f2a639a965d5dad56ab78a9f5f2cc9bdc1ae36ddc12c973f0e4af0da8e8fbfdc495ff711bb56d386a1d1aec42b6082eb472bcf14dc212d916bfa909bc3d4fab613a7ebbfbe45a1de3c95170154bd08a637973d9ae43d47ec1c69e144df6a48b297fed4646673461fd01a3d96937161a5d9efc6c51dd5e868ae4adf9a24be17cfbdf7acf47bd47346a296de325b50d1482cb47ee3364ee9f9b1e1cd0d6af1b7587779ab17bd9fd0185e09028e3030000",
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
      "Thu, 30 Dec 2021 01:56:03 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw6VbDEYVQjCJvoI; path=/; expires=Fri, 30 Dec 2022 01:56:03 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "508",
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
      "1f8b0800000000000003b553d16eda3014fd95c87b85d44980829f3a566952c5d8d4b256eba82627b910ab8e9dddd8028af8f7d906044c7be8cba4bcf8dce37b8fcfb9d912844263d912f6734b444998073e4eb2d18fa1daac7edf964f0de9908500e9395b32e53538d29dae5474abc1d77e716bf4d4d6392061c968e0a1a282e235d76bc20c5a08884504556c084b699cf53c5472e37ba5344dba49da4d07e488ce447d59992529a3d47d31a5f479cfb3c88dd08ab0de70443d023517d25dabe106d6bc6e24c485ae03b9b6d2082914cc606d1c4544af4aafe6ca43ed89e1ae3c8084c2783fc83d94aef419011479f11c7578e4759cf86303588072edb22cce025069054727c820b98efafdbe7b40d60b23bc5eb5741e858328aa83980f15f01270aeba516ea504335781df3ab684c949f542282ee5a613f108616925c7282473c6decb77dcb1b4fb742c7a4f2a639a965d5dad56ab78a9f5f2cc9bdc1ae36ddc12c973f0e4af0da8e8fbfdc495ff711bb56d386a1d1aec42b6082eb472bcf14dc212d916bfa909bc3d4fab613a7ebbfbe45a1de3c95170154bd08a637973d9ae43d47ec1c69e144df6a48b297fed4646673461fd01a3d96937161a5d9efc6c51dd5e868ae4adf9a24be17cfbdf7acf47bd47346a296de325b50d1482cb47ee3364ee9f9b1e1cd0d6af1b7587779ab17bd9fd0185e09028e3030000",
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
      "Thu, 30 Dec 2021 01:56:04 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwO9yqzk4C81PbIM; path=/; expires=Fri, 30 Dec 2022 01:56:04 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "508",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recAL39Y8nywqDdWp",
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
      "1f8b0800000000000003b591514fc2301485ff0ae9338c6e04027b52e489cc690c6a448de9b68b6bd2f5cebb361308ffdd7698080f26bef8d87bbe9e9e7bba67043952d1b0f879cf64c1623fb84c46b3a7a9deb61f8be2b1667db691a03cb367a9a8c0414b2c756f81e0b537610da6b6ca80581cce267e44322f57f0691cfaa23b28b3c6a0f6164a64a09c705383eedddf254eb6e407a53175130f876ddb06ef84b6168418e458b18377c809848162bef5265d54dbd0ad4e60b74ecb6934df2daf9c1554427ab38ca4d08102d4828a8b73bb3ed3c735e61eea2547e8ec9595ec808847e1208c0623bee2613c9ec47c1470ced7dd4a1ba4ca2a715287dbbe539468cc3516d2f5f6df794f9ffa35f4f82734a152b6f6919a1a7229d48350d6df4a45fadd005aed3e8ebbc31fcb38bc1ebe00a696647749020000",
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
      "Thu, 30 Dec 2021 01:56:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwDmMUa8iW4UUesa; path=/; expires=Fri, 30 Dec 2022 01:56:04 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recAL39Y8nywqDdWp")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec24014fc15b26728db1208f4a49513a9d518d4484ccc6bfbb09b6cf7d5ed6e2a10fedddd62221c4cbc78dc37b3f366e61d982859cc3416d7e964f13257bbee63593e376cc8b60265d9b2f8c032a8d1915654a9c192d0636f600d65b6ce51b3385cccfc488ba25ae3a771d457d593726b0c292f212147e980bb06d5e0f12175b0d57e5019d3b4f178dc755df0aec936a08982826a76f40a85463058263b2fd25bb5adbe5729ee3759358f92fdeac649610dc28be55a800a2492025d5e5dca0d993ac5483c69909e48175bd6a227443c0a4761349af0350fe3e92ce6938073bee9236d49d756c2591d2e7d8f4868cd2d95c2f5f6df7ecf57fd6a7afa635a9394b6f196da060b01f209a4f5bf32c8be1b20abdce1b87bfcb18ce317c0a84cae3b020000",
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
      "Thu, 30 Dec 2021 01:56:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwHkEXGGnWYyU4j; path=/; expires=Fri, 30 Dec 2022 01:56:05 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recAL39Y8nywqDdWp")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec24014fc15b26728db1208f4a49513a9d518d4484ccc6bfbb09b6cf7d5ed6e2a10fedddd62221c4cbc78dc37b3f366e61d982859cc3416d7e964f13257bbee63593e376cc8b60265d9b2f8c032a8d1915654a9c192d0636f600d65b6ce51b3385cccfc488ba25ae3a771d457d593726b0c292f212147e980bb06d5e0f12175b0d57e5019d3b4f178dc755df0aec936a08982826a76f40a85463058263b2fd25bb5adbe5729ee3759358f92fdeac649610dc28be55a800a2492025d5e5dca0d993ac5483c69909e48175bd6a227443c0a4761349af0350fe3e92ce6938073bee9236d49d756c2591d2e7d8f4868cd2d95c2f5f6df7ecf57fd6a7afa635a9394b6f196da060b01f209a4f5bf32c8be1b20abdce1b87bfcb18ce317c0a84cae3b020000",
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
      "Thu, 30 Dec 2021 01:56:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzMHdFkcOniAMkb; path=/; expires=Fri, 30 Dec 2022 01:56:05 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:05 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwoBEgg3MsJg7GNF; path=/; expires=Fri, 30 Dec 2022 01:56:05 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwMtLXAjxlfKrNwX; path=/; expires=Fri, 30 Dec 2022 01:56:06 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:06 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwhtJiStu9DQQ5z4; path=/; expires=Fri, 30 Dec 2022 01:56:06 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d9da052f084c28054858050e95084d025b952578e6d2eb6225af5bf63a70c74ebc2784fdfbd7bef0e8cb036d4744cbc1d986c9888c26a5714d63eec68f6d517391bb38d441599032ba1c5002d4063d43fc03b53fab6426222bd9d47a9f2ce191d610515aa403f59d4a3d797226c788ac2d639db89e9b4effbe4938cb740c624b569d9313ad484e0b0c9bfa3c910ca77f4ac0bdcafcbed4d96ef17f7c10a5b90d1ac22093a5168345073776e3766fa14388fd0a838416757967200329ea593349b5cf1254fc5ec5af079c2395f0f2d37865aafe0b778e839a80a3af7681a19bef3df59ff9eba243019a5bc8d913a8bb504b502e5e35609e56f7be3b5638287e1c2471cdf8f3f1ed033fd2f020000",
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
      "Thu, 30 Dec 2021 01:56:06 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwmBC1OEr50EFsTg; path=/; expires=Fri, 30 Dec 2022 01:56:06 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:07 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdfXaYVJdLKqt27; path=/; expires=Fri, 30 Dec 2022 01:56:07 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d9da052f084c28054858050e95084d025b952578e6d2eb6225af5bf63a70c74ebc2784fdfbd7bef0e8cb036d4744cbc1d986c9888c26a5714d63eec68f6d517391bb38d441599032ba1c5002d4063d43fc03b53fab6426222bd9d47a9f2ce191d610515aa403f59d4a3d797226c788ac2d639db89e9b4effbe4938cb740c624b569d9313ad484e0b0c9bfa3c910ca77f4ac0bdcafcbed4d96ef17f7c10a5b90d1ac22093a5168345073776e3766fa14388fd0a838416757967200329ea593349b5cf1254fc5ec5af079c2395f0f2d37865aafe0b778e839a80a3af7681a19bef3df59ff9eba243019a5bc8d913a8bb504b502e5e35609e56f7be3b5638287e1c2471cdf8f3f1ed033fd2f020000",
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
      "Thu, 30 Dec 2021 01:56:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwy6e3MBQWbDaVwX; path=/; expires=Fri, 30 Dec 2022 01:56:07 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recAL39Y8nywqDdWp")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec24014fc15b26728db1208f4a49513a9d518d4484ccc6bfbb09b6cf7d5ed6e2a10fedddd62221c4cbc78dc37b3f366e61d982859cc3416d7e964f13257bbee63593e376cc8b60265d9b2f8c032a8d1915654a9c192d0636f600d65b6ce51b3385cccfc488ba25ae3a771d457d593726b0c292f212147e980bb06d5e0f12175b0d57e5019d3b4f178dc755df0aec936a08982826a76f40a85463058263b2fd25bb5adbe5729ee3759358f92fdeac649610dc28be55a800a2492025d5e5dca0d993ac5483c69909e48175bd6a227443c0a4761349af0350fe3e92ce6938073bee9236d49d756c2591d2e7d8f4868cd2d95c2f5f6df7ecf57fd6a7afa635a9394b6f196da060b01f209a4f5bf32c8be1b20abdce1b87bfcb18ce317c0a84cae3b020000",
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
      "Thu, 30 Dec 2021 01:56:07 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxmFeQoQQTcH4qz; path=/; expires=Fri, 30 Dec 2022 01:56:07 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Thu, 30 Dec 2021 01:56:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwwY9ECxmCJ6bvA; path=/; expires=Fri, 30 Dec 2022 01:56:08 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd525f6bc2301cfc2a9267ad69c57f7dda3a61205d378673cc6d8cb48d6b244d629ad069e9775f5205151cec45187bccef77b9dc5dae0212275ca605f05f2b4052e0dbc175d81bbf8cd8a65c4fd26701da604930b5980a4428c70634e5196b4d38b6bb0fa4158f741e63097c773cb02349926c86bf9481beb106146ba538b31414c5989ac5bdc0acf5f4189ab596769029250abfdb2dcbd2f9945c0b243977129e83da3224122385d36063491aa9ba900f2cc4db45948dbc603bbd31543847c492c59220e650cc1992e9d5295d1bb09d8dc0825ae10e74f2ca8c34000f7a6ec7f53a3d3883aedf1ff8b0e74008178da52597b9a6e8280ee3bed95054a83b9e1293dba5f51e3ff5a3e8fe41b4e4946a612515022704d139a2dade8a50b44f806b663e0e9ac32fc3a8db87eecc576128c4ed4af6d765189ced0e62e77a33fc4f2d199e6d89316e7cfec9860c2fd4903d6ffd5e7f03f08d03b06b040000",
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
      "Thu, 30 Dec 2021 01:56:08 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwglpQtp7ArBoZH0; path=/; expires=Fri, 30 Dec 2022 01:56:08 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "358",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recVjLLppGjr5qwLB", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recAL39Y8nywqDdWp",
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
      "Thu, 30 Dec 2021 01:56:08 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwOqngvKxHTPDNqD; path=/; expires=Fri, 30 Dec 2022 01:56:08 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "recVjLLppGjr5qwLB", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d6a595399727a90fc2a85564ee612272db662e234d629a505ce97f37b79be81e045f7c0b27df3d39e7a6239697da560d61cf1d11156128acf75966cceddecededb2c2563b2155c22d3911c6a1ea025288efa2b78a7735f17dc12162fe62815de39ad1096507019e87bc3d5e8e9310b13dea2b073ce346c3a6ddb367ab3da1bb05a47a5ae498f0ea5e5e078957ea0c910ca37f64165fcb0c97757497a58de042b5e8340b3c20a5091e45a81adaecfedc6441d03a7088db22374f6ca4a0c404293781227930bbaa2319b5d323a8f28a59ba1e556dbda4b38150f3d075542e3ee7425c276fe3bebcfa77e0dbcf80e6cb594de60a4c6f052805c83f43895437e6aafbd7284513cabaf0f0c377fdc4affd27f020d71859a3c020000",
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
      "Thu, 30 Dec 2021 01:56:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwKPAWoukrIodd7w; path=/; expires=Fri, 30 Dec 2022 01:56:08 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recAL39Y8nywqDdWp",
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
      "Thu, 30 Dec 2021 01:56:09 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwDSOJ9m4ZEAl3Z6; path=/; expires=Fri, 30 Dec 2022 01:56:09 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b550416ec23010fc0af219821354447daa52a9878a0654680fa0aada24062cd9dec8b18500f1f77a0352cb8d4b8fbb3b333b3327e66485ae6e99589f98aa99a08599b7e3fab09d1fedcb62f6ccfa6ca3a426cc89156064042dd048b4924edf103c16c194d231913e4e6865afe3888632788f96c81a4aa9237bd648dbfb789f467a70b4d879dfb46238dceff7c9d66168c02126151a762685ca49f0b2ce0f24d2990cad9bdba93cae8add24cb8faf64521a5024563a0536d1d11fb8fae956aecfec25404ea0def402baf9b2541d20e3593a48b3c1882f792a1ec622e509e77cd545dea03341c36f11317777d0d0fa37ac552cecbfedfe7d758f67875a87862cb58dac14e84fd081580514d7023058cf048fc39d5d9cbfce3fbcd1c72c42020000",
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
      "Thu, 30 Dec 2021 01:56:09 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwK0XjuKml1jL73v; path=/; expires=Fri, 30 Dec 2022 01:56:09 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recVjLLppGjr5qwLB")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591c14fc23014c6ff15d2338c6e06919ec83c98903a8d410e5cccdbf68092aead5d9b4508ffbbedc02807132fde9aafdffbfafb5e8f44d484118bd56acfb9310f7b3b79ef784e86642350d62d6147524083c1b40085517f03ef74e19b122d61e96c1aa5d23ba755344b285106f7934135787de161c2db28ec9c332d1b8fbbae4bb6567b0356eba4d20d39c584ca2238acf38f18d243f9d63e2b8e8775b1bbcbf2c3e23e44610322869556804a246a05b69e5fc70d893a03e7d134e067d3d52b4bd11b329aa5a3341bddd0254dd9e496d16942295df72d37da365ec2a578e8d9ab125af7a86b11b6f3dfac3f9ffa1578f60d6cb594de44a4d6602540ae40fa3855407169afbd7284d178565f1f186efeb895d3278162d4d72e020000",
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
      "Thu, 30 Dec 2021 01:56:10 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwV3fqg4cSluXYrZ; path=/; expires=Fri, 30 Dec 2022 01:56:10 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recAL39Y8nywqDdWp")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec24014fc15b26728db1208f4a49513a9d518d4484ccc6bfbb09b6cf7d5ed6e2a10fedddd62221c4cbc78dc37b3f366e61d982859cc3416d7e964f13257bbee63593e376cc8b60265d9b2f8c032a8d1915654a9c192d0636f600d65b6ce51b3385cccfc488ba25ae3a771d457d593726b0c292f212147e980bb06d5e0f12175b0d57e5019d3b4f178dc755df0aec936a08982826a76f40a85463058263b2fd25bb5adbe5729ee3759358f92fdeac649610dc28be55a800a2492025d5e5dca0d993ac5483c69909e48175bd6a227443c0a4761349af0350fe3e92ce6938073bee9236d49d756c2591d2e7d8f4868cd2d95c2f5f6df7ecf57fd6a7afa635a9394b6f196da060b01f209a4f5bf32c8be1b20abdce1b87bfcb18ce317c0a84cae3b020000",
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
      "Thu, 30 Dec 2021 01:56:11 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwp1vgbBgbnIQJ7r; path=/; expires=Fri, 30 Dec 2022 01:56:11 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b550416ec23010fc0af219821354447daa52a9878a0654680fa0aada24062cd9dec8b18500f1f77a0352cb8d4b8fbb3b333b3327e66485ae6e99589f98aa99a08599b7e3fab09d1fedcb62f6ccfa6ca3a426cc89156064042dd048b4924edf103c16c194d231913e4e6865afe3888632788f96c81a4aa9237bd648dbfb789f467a70b4d879dfb46238dceff7c9d66168c02126151a762685ca49f0b2ce0f24d2990cad9bdba93cae8add24cb8faf64521a5024563a0536d1d11fb8fae956aecfec25404ea0def402baf9b2541d20e3593a48b3c1882f792a1ec622e509e77cd545dea03341c36f11317777d0d0fa37ac552cecbfedfe7d758f67875a87862cb58dac14e84fd081580514d7023058cf048fc39d5d9cbfce3fbcd1c72c42020000",
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
      "Thu, 30 Dec 2021 01:56:11 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwm7x9eEV6C275Ry; path=/; expires=Fri, 30 Dec 2022 01:56:11 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd945f6f823014c5bf8ae9b36281f88fa70dcd961886663a97b92d4b85aa98d262a1616af8ee6b51a3662c31cb9618dfa0f770ee3db7bfb0011c7b8cfb31b05e3720f081a50e6e1db3f5d2a4ab74d9f19f235006d30013a5d9001785588aba6c4e4b1d8655ed038984b9229c600e2cbd5557473cf0e643fc9948e91bcd451391248c2a0b822698c8422fc2b4f4f4e8c8b2e0ea609e24516c55ab699a6a33ce448438639ac7429029078f639460df5e29937c5411f33e75f07aecce9b86bdeeb6a5150e51a0cc263c4054239851c4fd9b53bb32a0db18b612959cade8a4cb30c8050634f48a6e544c3884ba55ab5bd0d42084e33cd294f1501074b40e993eaf1014270fcc0fe4defe7bdee3563f0e5d3b0ccd1921225223c511f60244468808f5958bdcdd0698a0f2e2a07c39731959f9c0ce68e1385174bfe0b565ead885ec205ac44de39a286914522283cb9c174948eb3784a867babfc03370697cc725ecc7757f35ebafe9dda0d72ec265c04299a68898e6717ff38af0d161113ebb45c8dc9748d0f1cc7ff98fd9fb66efd917a287a183ad060000",
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
      "Thu, 30 Dec 2021 01:56:12 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwXozStnboIxoMEc; path=/; expires=Fri, 30 Dec 2022 01:56:12 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "416",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "recAL39Y8nywqDdWp",
      "recVjLLppGjr5qwLB",
      "recmPs6dygPznFSOC",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f28e3ec69691167995e5852e29e1054ab53a38558665f9f81414b86715991696fb38e153991b506c9652991e5095e716ecefac541b5b0b00c89f3a9c8b000000",
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
      "Thu, 30 Dec 2021 01:56:12 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwUwPMJeSnSb8izE; path=/; expires=Fri, 30 Dec 2022 01:56:12 GMT; domain=.airtable.com; samesite=none; secure",
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
