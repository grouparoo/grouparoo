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
      "Sat, 08 Jan 2022 00:09:16 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvbQqoJSd40d8FE; path=/; expires=Sun, 08 Jan 2023 00:09:16 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:16 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtJzchC6QnH8FIB; path=/; expires=Sun, 08 Jan 2023 00:09:16 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:17 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwz08dIxPnh6agwB; path=/; expires=Sun, 08 Jan 2023 00:09:17 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:18 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwL6UZEKzVJW3bZE; path=/; expires=Sun, 08 Jan 2023 00:09:18 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:18 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwm0hu6GV4sDo25E; path=/; expires=Sun, 08 Jan 2023 00:09:18 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:18 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwH5A4j54ZyHL2rQ; path=/; expires=Sun, 08 Jan 2023 00:09:18 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b591316f83301085ff4ae4392186a5095345874a1185aaa51d5255d1019760c9d8e8b0952688ff5e9b6468b62c1dfdfcf9ddbbe78111569aea9ec55f0313358bbd70c2faf490f373c8f3e2f99dcdd95ea0f4ccc03268d1411b50e8f51d58a333db96482c8ec2b5977aa10e1253a1b0c01fe3e006e90297d618adbc8d8412a5bbca3b54b38fb7d45d5bf242634cd7c7cbe5f1780c0ea46d07a47550e9968ddea12204837572f226535cdbd3ab4af1bccd9a55949c374fce0a5b10deac24012a90a81550fd786b3767eab24ae2a1597a816ea6146202221e450b1e2ef8aae03ce6eb385c079cf3edb4d25e536b255c2b710d4caa84debce85ab8defe3bebdf51f704262da5ed7ca4bec34a80fc0469fdab0cb2ebf6da2af76ddc1dee2c62fc1e7f01fc1d8a0f49020000",
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
      "Sat, 08 Jan 2022 00:09:19 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwdFkmETpVNCyRHf; path=/; expires=Sun, 08 Jan 2023 00:09:19 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591316f83301085ff4ae4392186a5095345874a1185aaa51d5255d1019760c9d8e8b0952688ff5e9b6468b62c1dfdfcf9ddbbe78111569aea9ec55f0313358bbd70c2faf490f373c8f3e2f99dcdd95ea0f4ccc03268d1411b50e8f51d58a333db96482c8ec2b5977aa10e1253a1b0c01fe3e006e90297d618adbc8d8412a5bbca3b54b38fb7d45d5bf242634cd7c7cbe5f1780c0ea46d07a47550e9968ddea12204837572f226535cdbd3ab4af1bccd9a55949c374fce0a5b10deac24012a90a81550fd786b3767eab24ae2a1597a816ea6146202221e450b1e2ef8aae03ce6eb385c079cf3edb4d25e536b255c2b710d4caa84debce85ab8defe3bebdf51f704262da5ed7ca4bec34a80fc0469fdab0cb2ebf6da2af76ddc1dee2c62fc1e7f01fc1d8a0f49020000",
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
      "Sat, 08 Jan 2022 00:09:19 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwKE7Z6fcaNZIG52; path=/; expires=Sun, 08 Jan 2023 00:09:19 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591316f83301085ff4ae4392186a5095345874a1185aaa51d5255d1019760c9d8e8b0952688ff5e9b6468b62c1dfdfcf9ddbbe78111569aea9ec55f0313358bbd70c2faf490f373c8f3e2f99dcdd95ea0f4ccc03268d1411b50e8f51d58a333db96482c8ec2b5977aa10e1253a1b0c01fe3e006e90297d618adbc8d8412a5bbca3b54b38fb7d45d5bf242634cd7c7cbe5f1780c0ea46d07a47550e9968ddea12204837572f226535cdbd3ab4af1bccd9a55949c374fce0a5b10deac24012a90a81550fd786b3767eab24ae2a1597a816ea6146202221e450b1e2ef8aae03ce6eb385c079cf3edb4d25e536b255c2b710d4caa84debce85ab8defe3bebdf51f704262da5ed7ca4bec34a80fc0469fdab0cb2ebf6da2af76ddc1dee2c62fc1e7f01fc1d8a0f49020000",
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
      "Sat, 08 Jan 2022 00:09:19 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9VJfwKKZLASkVm; path=/; expires=Sun, 08 Jan 2023 00:09:19 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591316f83301085ff4ae4392186a5095345874a1185aaa51d5255d1019760c9d8e8b0952688ff5e9b6468b62c1dfdfcf9ddbbe78111569aea9ec55f0313358bbd70c2faf490f373c8f3e2f99dcdd95ea0f4ccc03268d1411b50e8f51d58a333db96482c8ec2b5977aa10e1253a1b0c01fe3e006e90297d618adbc8d8412a5bbca3b54b38fb7d45d5bf242634cd7c7cbe5f1780c0ea46d07a47550e9968ddea12204837572f226535cdbd3ab4af1bccd9a55949c374fce0a5b10deac24012a90a81550fd786b3767eab24ae2a1597a816ea6146202221e450b1e2ef8aae03ce6eb385c079cf3edb4d25e536b255c2b710d4caa84debce85ab8defe3bebdf51f704262da5ed7ca4bec34a80fc0469fdab0cb2ebf6da2af76ddc1dee2c62fc1e7f01fc1d8a0f49020000",
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
      "Sat, 08 Jan 2022 00:09:20 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLZurELJ3ArlKDd; path=/; expires=Sun, 08 Jan 2023 00:09:19 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:20 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwpz7gyxKYewQXry; path=/; expires=Sun, 08 Jan 2023 00:09:20 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591316f83301085ff4ae4392186a5095345874a1185aaa51d5255d1019760c9d8e8b0952688ff5e9b6468b62c1dfdfcf9ddbbe78111569aea9ec55f0313358bbd70c2faf490f373c8f3e2f99dcdd95ea0f4ccc03268d1411b50e8f51d58a333db96482c8ec2b5977aa10e1253a1b0c01fe3e006e90297d618adbc8d8412a5bbca3b54b38fb7d45d5bf242634cd7c7cbe5f1780c0ea46d07a47550e9968ddea12204837572f226535cdbd3ab4af1bccd9a55949c374fce0a5b10deac24012a90a81550fd786b3767eab24ae2a1597a816ea6146202221e450b1e2ef8aae03ce6eb385c079cf3edb4d25e536b255c2b710d4caa84debce85ab8defe3bebdf51f704262da5ed7ca4bec34a80fc0469fdab0cb2ebf6da2af76ddc1dee2c62fc1e7f01fc1d8a0f49020000",
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
      "Sat, 08 Jan 2022 00:09:20 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwAp8m9ToxJ6RHBm; path=/; expires=Sun, 08 Jan 2023 00:09:20 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:20 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwSNOYWSbn2lAAdQ; path=/; expires=Sun, 08 Jan 2023 00:09:20 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recyedy7O0z10OTGS",
        fields: { Name: "Jane", f_singleLineText: "updated", f_number: 5.7 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551416ac33010fc4ad03971644349e253490f85e0daa5757b4829656d6d12812c1959224d4cfe5ead13687328f4d29b981dcdceccf6cc626dace858fad63329584ac001c56156f063cc8bf2fe998dd946a2224ecf7268309056a091f00ff0cee4bea9d0b23489170475526f15665263899f2e907d2bc0a118f89577ce68525250a10ad3a2453d7a79cac2d85b0276ceb55d3a9deef7fb686b8d6fc11a13d5a6612752a82d92daf240228363dfd9479de1719defe6c9f2b8ba0b52d88024b1ca4ad09142a3c18adb6bb931d3e7344b228db233e96a4b290742c29364c2e3099f979ca77c91c68b8873be1e226d8c6dbc824b2ba1840155d0b9072364a8eebfbdfe5cf59be124fe366c8d52be254b5d8bb504f50acad3af1cf24b7ae375b81ca7b7be5cf7269a85d91f7b39bd9fbe00ce4bafed5b020000",
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
      "Sat, 08 Jan 2022 00:09:21 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw73DuCDVDhNBbqc; path=/; expires=Sun, 08 Jan 2023 00:09:21 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b551c14ec3300cfd9529e7ad4b8340a32754384da54cd3e0308490db7a5b501a97345161d5fe9da4db61bbedc2d17ecfcfcfcf3d335892a95a96bcf74c562c098df8f6fbe66b63752e977261d9986d24aac0e9590e357ad29c767af44418b04f7096725717685822040f2d7d2aef42d14abd5598498d2bfcb17eda76340c16ce5ad241564181ca232f0dead1eb32f3b033a1b1b3b66993e9b4ebba686bc8356088a2926a76080aa541b058a5bf4164b0ef5ab3d019eed7f96e26d2fdfcd14b610d32881546828e149206533d5cca8d993e9e9606d2283b922eb6ace440105c88098f277cb6e23ce1f7898823cef97a386943a6760ace22f2890c8882d63e53257d96ffedf77cd535a60d29e59a60a96db094a0de40b93095437e4a809cf69fe3beb8328cc3c7e10f4dc3163d5d020000",
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
      "Sat, 08 Jan 2022 00:09:21 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwvLSWm5RY83GHgo; path=/; expires=Sun, 08 Jan 2023 00:09:21 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recyedy7O0z10OTGS")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551b16ac33014fc95a03971644349eca9b84321b87669dd0e59cab3f5920864c9c812ae1df2ef951c439ba1d0a59bb877ba7777ef4c382309d1580fc8864d41c79016e5e32b59920347c13a929c490e0d3ad20e247afc03ac51b96d2ad42489c2d8431d974781199758e2a77164db3230c8267e658d51d22b09a850b869d1a25cbcbd646e6cb5074ec6b45db25ef77d1f1cb5b22d68a5825a35e4e2156a8d5e2d1dbcc8e4d876fa596638eef3d3364ac7dd8393c206b817ab34071908541234bbbf955b12794d937ad222bb926eb6947c2244348a56345cd16d496942e3248c034ae97e8a7450bab102e6565c09132aa0334f8a7157dd7f7bfdb9ea37c351f86d582b216ceb2d752dd61cc43b08eb7fe590cfe99595ee72d4bfe57cddbb60e3667fece5f205cc3b92264d020000",
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
      "Sat, 08 Jan 2022 00:09:21 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwZDlKfiIZxGf3KU; path=/; expires=Sun, 08 Jan 2023 00:09:21 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec3300cfd9529e7ad4b8340a32754384da54cd3e0308490db7a5b501a97345161d5fe9da4db61bbedc2d17ecfcfcfcf3d335892a95a96bcf74c562c098df8f6fbe66b63752e977261d9986d24aac0e9590e357ad29c767af44418b04f7096725717685822040f2d7d2aef42d14abd5598498d2bfcb17eda76340c16ce5ad241564181ca232f0dead1eb32f3b033a1b1b3b66993e9b4ebba686bc8356088a2926a76080aa541b058a5bf4164b0ef5ab3d019eed7f96e26d2fdfcd14b610d32881546828e149206533d5cca8d993e9e9606d2283b922eb6ace440105c88098f277cb6e23ce1f7898823cef97a386943a6760ace22f2890c8882d63e53257d96ffedf77cd535a60d29e59a60a96db094a0de40b93095437e4a809cf69fe3beb8328cc3c7e10f4dc3163d5d020000",
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
      "Sat, 08 Jan 2022 00:09:22 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwML2RYlQNvmNcLg; path=/; expires=Sun, 08 Jan 2023 00:09:22 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551416ac33010fc4ad03971644349e253490f85e0daa5757b4829656d6d12812c1959224d4cfe5ead13687328f4d29b981dcdceccf6cc626dace858fad63329584ac001c56156f063cc8bf2fe998dd946a2224ecf7268309056a091f00ff0cee4bea9d0b23489170475526f15665263899f2e907d2bc0a118f89577ce68525250a10ad3a2453d7a79cac2d85b0276ceb55d3a9deef7fb686b8d6fc11a13d5a6612752a82d92daf240228363dfd9479de1719defe6c9f2b8ba0b52d88024b1ca4ad09142a3c18adb6bb931d3e7344b228db233e96a4b290742c29364c2e3099f979ca77c91c68b8873be1e226d8c6dbc824b2ba1840155d0b9072364a8eebfbdfe5cf59be124fe366c8d52be254b5d8bb504f50acad3af1cf24b7ae375b81ca7b7be5cf7269a85d91f7b39bd9fbe00ce4bafed5b020000",
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
      "Sat, 08 Jan 2022 00:09:22 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJSVPDpWKnlZMEr; path=/; expires=Sun, 08 Jan 2023 00:09:22 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recyedy7O0z10OTGS",
        fields: { Name: "Jane", f_singleLineText: null, f_number: null },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d9d30d078426140aa428220301455e8925ca925c78e1c5b5512e5bf63a795a003120be33d7df7eebd1b89c64ae9ba23ec7d24bc26cc0b3dd6fd6d4e8790e6c5c30b59920347e1999164d0a083b620d1eb1f608dca6c53a2262c0a632f95d618253d2ca044e1e8bc45b9787d4edd86d55e381ad3766cbd3e9d4ec1a756b605ad5450a9864cdea1d20806eba4f7267328dbe92799e2b0cb8e9b2819b6f7ce0a1be0deacd41c64205049d0f5ddb5dd92c873e0c4438bf40c5d5d29f80c44348a56345cd14d4129a3310be38052ba9b5b1e946eac804b71d773560574e651d5dc7de7bfb3fe3cf55be0e8e63bb05642d8d647ea5aac38883710d66f65905dda2b2b0d61d40d7f7cc4b49fbe00d33ef2f82f020000",
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
      "Sat, 08 Jan 2022 00:09:22 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwC1elozfV12YjVP; path=/; expires=Sun, 08 Jan 2023 00:09:22 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recyedy7O0z10OTGS")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d9d30d078426140aa42822030744197f84a2d3976e4d88a92aaff1d3bad041d90ba30ded377efdebb23119c3062b019918ff7259d625a564f6f6449f60225ef093b92025af4d0161406fd139cd5856b6b348425711aa4da59ab558025d4283d5d76a816efafb9df702608076bbb9eadd7c330445f46bb0e8cd651a35b720a0e8d41b0c8b33198cca15c6f5e548ed3ae386c926cda3e7a2b6c4104b3da08509144adc0f0876bbb2551e7c0598016f919baba528919486892ac68bca29b8a52465316a711a57437b7dc6bd33a0997e2bee7ac4ae8edb3e6c27fe7bfb3fe3ef557e0e4ee27b0d152ba2e44ea3b6c04c80f902e6c15505cda6ba72c61d40f373ee2f40d95219cc021020000",
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
      "Sat, 08 Jan 2022 00:09:23 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwAiEbck4xtUQw9u; path=/; expires=Sun, 08 Jan 2023 00:09:22 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d9d30d078426140aa428220301455e8925ca925c78e1c5b5512e5bf63a795a003120be33d7df7eebd1b89c64ae9ba23ec7d24bc26cc0b3dd6fd6d4e8790e6c5c30b59920347e1999164d0a083b620d1eb1f608dca6c53a2262c0a632f95d618253d2ca044e1e8bc45b9787d4edd86d55e381ad3766cbd3e9d4ec1a756b605ad5450a9864cdea1d20806eba4f7267328dbe92799e2b0cb8e9b2819b6f7ce0a1be0deacd41c64205049d0f5ddb5dd92c873e0c4438bf40c5d5d29f80c44348a56345cd14d4129a3310be38052ba9b5b1e946eac804b71d773560574e651d5dc7de7bfb3fe3cf55be0e8e63bb05642d8d647ea5aac38883710d66f65905dda2b2b0d61d40d7f7cc4b49fbe00d33ef2f82f020000",
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
      "Sat, 08 Jan 2022 00:09:23 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwMsfpPsn5aPUTKo; path=/; expires=Sun, 08 Jan 2023 00:09:23 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwwoXYiyeifTnhae; path=/; expires=Sun, 08 Jan 2023 00:09:24 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14ec3300cfd9529e7ad4b8340a32754384da54cd3e0308490db7a5b501a97345161d5fe9da4db61bbedc2d17ecfcfcfcf3d335892a95a96bcf74c562c098df8f6fbe66b63752e977261d9986d24aac0e9590e357ad29c767af44418b04f7096725717685822040f2d7d2aef42d14abd5598498d2bfcb17eda76340c16ce5ad241564181ca232f0dead1eb32f3b033a1b1b3b66993e9b4ebba686bc8356088a2926a76080aa541b058a5bf4164b0ef5ab3d019eed7f96e26d2fdfcd14b610d32881546828e149206533d5cca8d993e9e9606d2283b922eb6ace440105c88098f277cb6e23ce1f7898823cef97a386943a6760ace22f2890c8882d63e53257d96ffedf77cd535a60d29e59a60a96db094a0de40b93095437e4a809cf69fe3beb8328cc3c7e10f4dc3163d5d020000",
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
      "Sat, 08 Jan 2022 00:09:24 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1RB9yqNT55ef0o; path=/; expires=Sun, 08 Jan 2023 00:09:24 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recyedy7O0z10OTGS",
        fields: {
          Name: "changed Name",
          f_singleLineText: "testing",
          f_email: "who@example.com",
        },
      },
      {
        id: "rec15q3jftnNiRiPt",
        fields: { Name: "John Doe", f_singleLineText: "2", f_rating: 4 },
      },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003dd525b4fc23018fd2ba4cf5cba2a2a7b22686242e620883e608ce9b60f56d3b5b36b332ed97fb71d10c460f4c517dedad3f39d9e9e9e0d52104b9514c87fd9209620df012b4856d723bcf6f0687aff889a68ce803bce068534034b8a532a169034eaad3d7fa346cbd0641128e413afe7a0c8682d851be234026ea7463988c6d324b013463920d53a2ffc4ea72ccbf64249935325653b9619aa9c42ac806a48062b27529b33851a8b00d6b330bd2183f5f0d64a414699138b14a3a2cd410aaa92feb15c1389adf1812335822de9e89629ab090413d2c25e0bdf4c31f671cff77a6d8cf1ac7ee55caacc70fa2d00fbdefa94d3423fc884d9b4fedbf3d7ab7e324eba07e34a726e7267a9c82166943f536edc5448c35d0ad2088d7cecd605130b0e01133085a5059186425bac96da5b2f53d98725cd720efb1ffb639255f35035affb71f13ed722641336d6a7aa3694a968dcc9133523b559b1db5e9d744ed019559178a7aab80fc8e6715e3554b42e9d7ff97bb5f6c954afd5274159397cd3040000",
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
      "Sat, 08 Jan 2022 00:09:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwe26B6dwS1pUZa3; path=/; expires=Sun, 08 Jan 2023 00:09:25 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recyedy7O0z10OTGS")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ac33010fc95a073e2c886d244a7901e0ac5754aebf6904b595b9b58204b460f9c07f9f74a4e439b42a197dea4d999d9d1e84804278c18acf7c8f7b72b7a48e9aabc7f2163b21128b925ec480a683190ea06d416f968b886f93b78a70bdf566808cbd279842aef9c565124a1421954ab0ed5e8f5390f0a6f22d038d759369df67d9f6c8df61d18ad935ab7e4141d6a83e0902ff7d16408e7ad7952391ed64533cb968787bb60852d88685619012a91a81518beb8b61b13750ebe8ca4517e265d6d29c540c868964d683aa1b3925246e72c9d2794d2f5f0ca8d36ad97f0a380f0de612ac1ba47cd4568ebbf337f5ff55bf0ece62bb8d152fa2e46b21dd602e41b481f5505149f2d68af1c61349ead505b89b95058e22e80c4a175011bac2ed1fb462f70076d27f1f2637f6cf2f401ea7ec8cc6a020000",
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
      "Sat, 08 Jan 2022 00:09:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRPmwKLHaQpELZH; path=/; expires=Sun, 08 Jan 2023 00:09:25 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec15q3jftnNiRiPt")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c16ec2300cfd15943394341b13cb69623ba1ae4388edc065725b0399d2b84b13b181f8f7250509384cda6547fb3d3f3f3fef99aa986416cb74f479f3b1722657733573accf560a75d532b96739d4184853da98de1361c4dec13bca7d5da06552081e5be654dec5a25566ad31530617f8e5c2b4e8c60aef1c9928aaa1401dfa2f0d9adeeb3c0bb0b7b1b171ae69e570b8dd6e93b525df80254a4aaad9212a9416c16135f98e229d79dfda99c970b7cc376331d94d1f8314d6a0a258611598442319b0d5c3b55c9f99e3619348ea6547d2d59685ea08820b31e0e9808f179c4b7e2f459a70ce97dd492bb2b5d7701150c8a34334b4ee992a1592fc6fbf97ab7e353d3a9bb6a4b56fa2a5b6c152817e03ede3540ef92901f226fcadfbac0517dec9e46d40fe98cce1076a0da3e05a020000",
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
      "Sat, 08 Jan 2022 00:09:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9t7ormVgG2z5ms; path=/; expires=Sun, 08 Jan 2023 00:09:25 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "316",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({
    filterByFormula: "%7BName%7D%3D%22changed%20Name%22",
    maxRecords: "1",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4bc33014fd2b23cf5b9716c42d4fa33e08523bd1eac344e4b6b95b036952d284ee83fd7793cea113045f7c4bce3de7dc939303315869c33bc25e0f4470c202b043bebb5ed27d4c97c5ed131993b5401938079243839e54d5a036c847c3d5cfdfc1599dbba644435812cf03543a6bb50a2209254aaf5ab6a846cf8f9957381380dadab663d369dff7d1c668d782d13aaa74438ec1a132081679ba0b264338d7990795e17e95d7b324dddfdd782b6c4004b3d208509144adc0f0c5a5dd98a853f0349046d98974b1a5100321a14932a1f184ce0a4a199db3781e514a57c32bd7da344ec28f02fc7b87a984cede6b2e7c5bff9df9fbaadf8227575fc18d96d2b52152d7622540be8074419543fed98276ca1246c3b9136a2331130a0bdc7a9058ecacc706ab73f4bed60bdc42d34a3cffd81f9b3cbe1d3f0035f3079578020000",
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
      "Sat, 08 Jan 2022 00:09:25 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwHkx73VueHhkqAj; path=/; expires=Sun, 08 Jan 2023 00:09:25 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recyedy7O0z10OTGS")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551cb6ac33010fc95a073e2c886d244a7901e0ac5754aebf6904b595b9b58204b460f9c07f9f74a4e439b42a197dea4d999d9d1e84804278c18acf7c8f7b72b7a48e9aabc7f2163b21128b925ec480a683190ea06d416f968b886f93b78a70bdf566808cbd279842aef9c565124a1421954ab0ed5e8f5390f0a6f22d038d759369df67d9f6c8df61d18ad935ab7e4141d6a83e0902ff7d16408e7ad7952391ed64533cb968787bb60852d88685619012a91a81518beb8b61b13750ebe8ca4517e265d6d29c540c868964d683aa1b3925246e72c9d2794d2f5f0ca8d36ad97f0a380f0de612ac1ba47cd4568ebbf337f5ff55bf0ece62bb8d152fa2e46b21dd602e41b481f5505149f2d68af1c61349ead505b89b95058e22e80c4a175011bac2ed1fb462f70076d27f1f2637f6cf2f401ea7ec8cc6a020000",
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
      "Sat, 08 Jan 2022 00:09:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw8ibKbxEODvsBHm; path=/; expires=Sun, 08 Jan 2023 00:09:26 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551c14e023110fd15d2332ca58ac19e0c7a22eb4a087a801833bb3b404db7b376dba010fedd7621110e265e3cce9b376fdebcd9338b05d9b26172b967aa64320283e1c7d5fbca994ccdd4d4b12e5b29d491b3671954184813da98ce0361ecbd817794f92a47cba4103c42e654dec4a25166ad315506e7f8e9c2b468c772ef1c9928aa21471df0a71a4de7799686b6b711d8385737b2dfdf6eb7c9da92afc112250555ec10150a8be0b01c7f4591d6bc6fecd4a4b85b649b9118ef26f7410a2b50512cb70a4ca2910cd8f2ee52aecbccf1b0712475d223e962cb5cb504c185e8f1418f8fe69c4b7e2bc520e19c2fda9356642bafe12ca09047dbd1d0b8472a5548f2bffd9eaffad5f4f0c7b425ad7d1d2d3535160af40b681fa732c84e099037e16fed672db8f04e26af43e78fc91c5e0fdf49454dd668020000",
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
      "Sat, 08 Jan 2022 00:09:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPfrxj9262XuVTJ; path=/; expires=Sun, 08 Jan 2023 00:09:26 GMT; domain=.airtable.com; samesite=none; secure",
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
    filterByFormula: "%7BName%7D%3D%22changed%20Name%22",
    maxRecords: "1",
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5515d4bc33014fd2b23cf5b9716c42d4fa33e08523bd1eac344e4b6b95b036952d284ee83fd7793cea113045f7c4bce3de7dc939303315869c33bc25e0f4470c202b043bebb5ed27d4c97c5ed131993b5401938079243839e54d5a036c847c3d5cfdfc1599dbba644435812cf03543a6bb50a2209254aaf5ab6a846cf8f9957381380dadab663d369dff7d1c668d782d13aaa74438ec1a132081679ba0b264338d7990795e17e95d7b324dddfdd782b6c4004b3d208509144adc0f0c5a5dd98a853f0349046d98974b1a5100321a14932a1f184ce0a4a199db3781e514a57c32bd7da344ec28f02fc7b87a984cede6b2e7c5bff9df9fbaadf8227575fc18d96d2b52152d7622540be8074419543fed98276ca1246c3b9136a2331130a0bdc7a9058ecacc706ab73f4bed60bdc42d34a3cffd81f9b3cbe1d3f0035f3079578020000",
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
      "Sat, 08 Jan 2022 00:09:26 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwNYY5urxgVq1uHp; path=/; expires=Sun, 08 Jan 2023 00:09:26 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
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
      "Sat, 08 Jan 2022 00:09:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwTXOnCWW7L7fdn4; path=/; expires=Sun, 08 Jan 2023 00:09:27 GMT; domain=.airtable.com; samesite=none; secure",
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
  .delete("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ "records%5B%5D": ["recyedy7O0z10OTGS", "rec15q3jftnNiRiPt"] })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f295a92995e6fe06558606fe21eec14ab53a38551a9a161a67a595e4f9650665069428d5c6d60200f05023a261000000",
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
      "Sat, 08 Jan 2022 00:09:27 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwRmagP6AdC9avQC; path=/; expires=Sun, 08 Jan 2023 00:09:27 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recyedy7O0z10OTGS")
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
      "Sat, 08 Jan 2022 00:09:27 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwyXlpDXI8HlbZM4; path=/; expires=Sun, 08 Jan 2023 00:09:27 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/rec15q3jftnNiRiPt")
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
      "Sat, 08 Jan 2022 00:09:28 GMT",
      "ETag",
      'W/"44-2V6AV8mZz6yUabAGB1g1H6M7URY"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwPxQb9SF5d5jR2k; path=/; expires=Sun, 08 Jan 2023 00:09:27 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwstLqyEqrYZi74w; path=/; expires=Sun, 08 Jan 2023 00:09:28 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1N27mGhbZPDGIi; path=/; expires=Sun, 08 Jan 2023 00:09:28 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:28 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxBApRGxFDB6y8v; path=/; expires=Sun, 08 Jan 2023 00:09:28 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b5935f6fda3014c5bf4ae4bd42ea24d0429e3a3a6952c5d8d4b155655493935c12ab8e9dddd8e29ff8eeb31d1020eda12f9378c9b93f5f5f9f7bd813845c61d192f4d79ef082a44e58bc347f18ec260fcfe560f491f4c88a8370cc9ecc580d167a54950c3e2970b5dfcc683533750648d2388e9c945790bf656a43528d06bc621041e65b8bd0301938a960daf58a691cf5a3b81fdf92933ae7f575651ec529a5f617524a171d679069ae244907a331750ad48c0b7bac867bd8b0ba1110e6aaf6706d84e6824b98c3465b84076f52ad97d249ed99b047be83805c3b3fc81314b6f419012479758c3c3ef22ef48f6c007390b65d928489172a25e1e404b98dee82e170681f900cfc156e5e5992d41f469e57c7613e54c00ac0a5ec07991102f4527abeb5b480e979ea15974c886d2f6001426904c3c06fe682eec6b7ec44986e3b069d2795d64d9bdedcacd7ebb054aabcf026335a3b1bf744b00c1cfcb50119fc789adaf23f4ea3320d43a57c8383df2d825d5a31d9ba263e44a6c56f720abbc5ac1ac593dde3836d755a4f869cc95080920c8bfbeb763d22bb804d1c144c3be8ea967336e23e8dfa743477c118a7f1f89c8d9542bb4f7611549b4b5f11acd55f54c1ad6fff7bdecbabde33342a214ce3466a1bc839133f99db616aff73b3a303cab8b851fbf14e330eaf87bf9c79688de3030000",
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
      "Sat, 08 Jan 2022 00:09:29 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwtVoyU4fHKy6ZyM; path=/; expires=Sun, 08 Jan 2023 00:09:29 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "510",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5935f6fda3014c5bf4ae4bd42ea24d0429e3a3a6952c5d8d4b155655493935c12ab8e9dddd8e29ff8eeb31d1020eda12f9378c9b93f5f5f9f7bd813845c61d192f4d79ef082a44e58bc347f18ec260fcfe560f491f4c88a8370cc9ecc580d167a54950c3e2970b5dfcc683533750648d2388e9c945790bf656a43528d06bc621041e65b8bd0301938a960daf58a691cf5a3b81fdf92933ae7f575651ec529a5f617524a171d679069ae244907a331750ad48c0b7bac867bd8b0ba1110e6aaf6706d84e6824b98c3465b84076f52ad97d249ed99b047be83805c3b3fc81314b6f419012479758c3c3ef22ef48f6c007390b65d928489172a25e1e404b98dee82e170681f900cfc156e5e5992d41f469e57c7613e54c00ac0a5ec07991102f4527abeb5b480e979ea15974c886d2f6001426904c3c06fe682eec6b7ec44986e3b069d2795d64d9bdedcacd7ebb054aabcf026335a3b1bf744b00c1cfcb50119fc789adaf23f4ea3320d43a57c8383df2d825d5a31d9ba263e44a6c56f720abbc5ac1ac593dde3836d755a4f869cc95080920c8bfbeb763d22bb804d1c144c3be8ea967336e23e8dfa743477c118a7f1f89c8d9542bb4f7611549b4b5f11acd55f54c1ad6fff7bdecbabde33342a214ce3466a1bc839133f99db616aff73b3a303cab8b851fbf14e330eaf87bf9c79688de3030000",
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
      "Sat, 08 Jan 2022 00:09:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw35mRmx9g7IGxcb; path=/; expires=Sun, 08 Jan 2023 00:09:30 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "510",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5935f6fda3014c5bf4ae4bd42ea24d0429e3a3a6952c5d8d4b155655493935c12ab8e9dddd8e29ff8eeb31d1020eda12f9378c9b93f5f5f9f7bd813845c61d192f4d79ef082a44e58bc347f18ec260fcfe560f491f4c88a8370cc9ecc580d167a54950c3e2970b5dfcc683533750648d2388e9c945790bf656a43528d06bc621041e65b8bd0301938a960daf58a691cf5a3b81fdf92933ae7f575651ec529a5f617524a171d679069ae244907a331750ad48c0b7bac867bd8b0ba1110e6aaf6706d84e6824b98c3465b84076f52ad97d249ed99b047be83805c3b3fc81314b6f419012479758c3c3ef22ef48f6c007390b65d928489172a25e1e404b98dee82e170681f900cfc156e5e5992d41f469e57c7613e54c00ac0a5ec07991102f4527abeb5b480e979ea15974c886d2f6001426904c3c06fe682eec6b7ec44986e3b069d2795d64d9bdedcacd7ebb054aabcf026335a3b1bf744b00c1cfcb50119fc789adaf23f4ea3320d43a57c8383df2d825d5a31d9ba263e44a6c56f720abbc5ac1ac593dde3836d755a4f869cc95080920c8bfbeb763d22bb804d1c144c3be8ea967336e23e8dfa743477c118a7f1f89c8d9542bb4f7611549b4b5f11acd55f54c1ad6fff7bdecbabde33342a214ce3466a1bc839133f99db616aff73b3a303cab8b851fbf14e330eaf87bf9c79688de3030000",
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
      "Sat, 08 Jan 2022 00:09:30 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwFzujPhxzwvRDyJ; path=/; expires=Sun, 08 Jan 2023 00:09:30 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "510",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      {
        id: "recZYpqaezBCWg48A",
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
      "1f8b0800000000000003b591c14ec33010447fa5f2b94d5dc3a1cd09524e5508081510058436c9b6b1e4788363abd02aff8e9d22d11e90b870f4cef37876bc67060b3265cbe2e73d93258bc360f5d4bc03ee92f9e3e67c7ac9866c2d510566cf32a8d1430baaf4e08a30686fe02c65aeced1b0588849181959544bfcb01e7dd13d943b6b49070b05392a2fdc34a807f777a9979d0983cadaa68dc7e3ed761b6d0cb9060c515450cdbae05018048b65f2194cfaa8ae35b73ac5dd2aaba622d92de6de0a6b90c12c371274a4903498f2e2d46ec8f4618d244083f4009dbcb2943d20b810233e19f1e992f398cf62318b38e7ab7ea53599da2938aac36fdf2b0a5a7b4da5f4bdfd77dee3a77e0b7d36f9096d4829d784486d838504f500ca855b1964df0d90d3fee3b83ffcb18ceeb5fb0267f588a249020000",
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
      "Sat, 08 Jan 2022 00:09:31 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwkzy91fWhvlRtFv; path=/; expires=Sun, 08 Jan 2023 00:09:31 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recZYpqaezBCWg48A")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a86439a13a49caa12100a202a24b449b68d25c71b1c5b8556fd3b768a447b40e2c2d13be3d999d93d93354b99c16af5d2bd03eeb2f9f3e632b96663b696a8ea9ea57b96438b9eb4a0468f6e0803f606ce52eeda120d4b8588c3c8c8aa29f0c37aeaab1e48a5b39674905050a2f2c05d877af4f8b0f4b03361d058dbf5e974badd6ea38d21d781218a2a6ad921285406c1629d7d0691c1aaebcdbd5ee26e953789c8768bb997c21664102b8d041d29240da6be3a971b337d8c9105d26879249d6d29e440105c88098f273c29384ff92c15b38873be1a22adc9b44ec1491d3efd8028e8ed2dd5d2f7f6df7e4f57fd66fa22fe316d4829d7054b7d879504f504ca855f39e4df0d90d3fe70dc3ffe58c6e10b9e79155f3b020000",
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
      "Sat, 08 Jan 2022 00:09:31 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw7hsoL5ETXRu5F3; path=/; expires=Sun, 08 Jan 2023 00:09:31 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recZYpqaezBCWg48A")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a86439a13a49caa12100a202a24b449b68d25c71b1c5b8556fd3b768a447b40e2c2d13be3d999d93d93354b99c16af5d2bd03eeb2f9f3e632b96663b696a8ea9ea57b96438b9eb4a0468f6e0803f606ce52eeda120d4b8588c3c8c8aa29f0c37aeaab1e48a5b39674905050a2f2c05d877af4f8b0f4b03361d058dbf5e974badd6ea38d21d781218a2a6ad921285406c1629d7d0691c1aaebcdbd5ee26e953789c8768bb997c21664102b8d041d29240da6be3a971b337d8c9105d26879249d6d29e440105c88098f273c29384ff92c15b38873be1a22adc9b44ec1491d3efd8028e8ed2dd5d2f7f6df7e4f57fd66fa22fe316d4829d7054b7d879504f504ca855f39e4df0d90d3fe70dc3ffe58c6e10b9e79155f3b020000",
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
      "Sat, 08 Jan 2022 00:09:31 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw9y8Uhv32LW4B2O; path=/; expires=Sun, 08 Jan 2023 00:09:31 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Sat, 08 Jan 2022 00:09:32 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwrWHd8wL8B4q1Mx; path=/; expires=Sun, 08 Jan 2023 00:09:31 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:32 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwJzdwxItRFs8bjx; path=/; expires=Sun, 08 Jan 2023 00:09:32 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:32 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw1ZlS4FlAkUjH3S; path=/; expires=Sun, 08 Jan 2023 00:09:32 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:32 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwaENEL1375U2bx7; path=/; expires=Sun, 08 Jan 2023 00:09:32 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d8db3044f285511aa424028301455e8925ca925c70e8ead40a3fc77ecb403ddba30ded377efdebb8118acb4a93bc2df07226ac283b08a93afe2befb16fd9a3eacc99cec05cac00c2487063db4018541ff006775ee9a120de18cb12095ce5aad022ca144e9e9a716d5ecf525f31bce04e1606ddbf1e5b2effbe8d368d782d13aaa7443c6e05019048b75fa134ca650ae33cf2ac3e3363f242c3d6e56de0a1b10c1ac34025424512b30f5dda5dd9ca853e03440b3ec045d5c29c40430cad882de2c685250cae92d8fe38852ba9d5aeeb5699c847371df73522574f651d7c27fe7bfb3fe3d754d60a3a5746d88d4b55809906f205dd8ca213fb7d74e59c2a91fae7cc4b81b7f01bd4bb90a2f020000",
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
      "Sat, 08 Jan 2022 00:09:33 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwP5qHg1KMX9GWrJ; path=/; expires=Sun, 08 Jan 2023 00:09:33 GMT; domain=.airtable.com; samesite=none; secure",
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
      "Sat, 08 Jan 2022 00:09:33 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwmuLlPvKQRp2xqV; path=/; expires=Sun, 08 Jan 2023 00:09:33 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d8db3044f285511aa424028301455e8925ca925c70e8ead40a3fc77ecb403ddba30ded377efdebb8118acb4a93bc2df07226ac283b08a93afe2befb16fd9a3eacc99cec05cac00c2487063db4018541ff006775ee9a120de18cb12095ce5aad022ca144e9e9a716d5ecf525f31bce04e1606ddbf1e5b2effbe8d368d782d13aaa7443c6e05019048b75fa134ca650ae33cf2ac3e3363f242c3d6e56de0a1b10c1ac34025424512b30f5dda5dd9ca853e03440b3ec045d5c29c40430cad882de2c685250cae92d8fe38852ba9d5aeeb5699c847371df73522574f651d7c27fe7bfb3fe3d754d60a3a5746d88d4b55809906f205dd8ca213fb7d74e59c2a91fae7cc4b81b7f01bd4bb90a2f020000",
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
      "Sat, 08 Jan 2022 00:09:33 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwq3qXN1tcdwakPh; path=/; expires=Sun, 08 Jan 2023 00:09:33 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recZYpqaezBCWg48A")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a86439a13a49caa12100a202a24b449b68d25c71b1c5b8556fd3b768a447b40e2c2d13be3d999d93d93354b99c16af5d2bd03eeb2f9f3e632b96663b696a8ea9ea57b96438b9eb4a0468f6e0803f606ce52eeda120d4b8588c3c8c8aa29f0c37aeaab1e48a5b39674905050a2f2c05d877af4f8b0f4b03361d058dbf5e974badd6ea38d21d781218a2a6ad921285406c1629d7d0691c1aaebcdbd5ee26e953789c8768bb997c21664102b8d041d29240da6be3a971b337d8c9105d26879249d6d29e440105c88098f273c29384ff92c15b38873be1a22adc9b44ec1491d3efd8028e8ed2dd5d2f7f6df7e4f57fd66fa22fe316d4829d7054b7d879504f504ca855f39e4df0d90d3fe70dc3ffe58c6e10b9e79155f3b020000",
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
      "Sat, 08 Jan 2022 00:09:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw887akvMdGHoz6k; path=/; expires=Sun, 08 Jan 2023 00:09:34 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
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
      "Sat, 08 Jan 2022 00:09:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brweCcPp9BZnJvwdt; path=/; expires=Sun, 08 Jan 2023 00:09:34 GMT; domain=.airtable.com; samesite=none; secure",
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
  .query({ filterByFormula: "%7BName%7D%3D%22Jane%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b590314fc3301085ff4ae5b94d8db3044f285511aa424028301455e8925ca925c70e8ead40a3fc77ecb403ddba30ded377efdebb8118acb4a93bc2df07226ac283b08a93afe2befb16fd9a3eacc99cec05cac00c2487063db4018541ff006775ee9a120de18cb12095ce5aad022ca144e9e9a716d5ecf525f31bce04e1606ddbf1e5b2effbe8d368d782d13aaa7443c6e05019048b75fa134ca650ae33cf2ac3e3363f242c3d6e56de0a1b10c1ac34025424512b30f5dda5dd9ca853e03440b3ec045d5c29c40430cad882de2c685250cae92d8fe38852ba9d5aeeb5699c847371df73522574f651d7c27fe7bfb3fe3d754d60a3a5746d88d4b55809906f205dd8ca213fb7d74e59c2a91fae7cc4b81b7f01bd4bb90a2f020000",
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
      "Sat, 08 Jan 2022 00:09:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwk7nlw05EwliUsv; path=/; expires=Sun, 08 Jan 2023 00:09:34 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
  .query({ filterByFormula: "%7BName%7D%3D%22John%20Doe%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591c14ec33010447fa5f2b94d5dc3a1cd09524e5508081510058436c9b6b1e4788363abd02aff8e9d22d11e90b870f4cef37876bc67060b3265cbe2e73d93258bc360f5d4bc03ee92f9e3e67c7ac9866c2d510566cf32a8d1430baaf4e08a30686fe02c65aeced1b0588849181959544bfcb01e7dd13d943b6b49070b05392a2fdc34a807f777a9979d0983cadaa68dc7e3ed761b6d0cb9060c515450cdbae05018048b65f2194cfaa8ae35b73ac5dd2aaba622d92de6de0a6b90c12c371274a4903498f2e2d46ec8f4618d244083f4009dbcb2943d20b810233e19f1e992f398cf62318b38e7ab7ea53599da2938aac36fdf2b0a5a7b4da5f4bdfd77dee3a77e0b7d36f9096d4829d784486d838504f500ca855b1964df0d90d3fee3b83ffcb18ceeb5fb0267f588a249020000",
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
      "Sat, 08 Jan 2022 00:09:34 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwFRXE17BMuja75U; path=/; expires=Sun, 08 Jan 2023 00:09:34 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/Empty")
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
      "Sat, 08 Jan 2022 00:09:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwbEF040afErxJ9x; path=/; expires=Sun, 08 Jan 2023 00:09:35 GMT; domain=.airtable.com; samesite=none; secure",
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
  .patch("/v0/appA1Qak1T4cGoiP7/Empty/", {
    records: [
      { id: "recC38qTFsxiwE0HE", fields: { Name: "Jane", f_number: 1 } },
      {
        id: "recZYpqaezBCWg48A",
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
      "Sat, 08 Jan 2022 00:09:35 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwf2MQ1k0e1wSiKJ; path=/; expires=Sun, 08 Jan 2023 00:09:35 GMT; domain=.airtable.com; samesite=none; secure",
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
      { id: "recC38qTFsxiwE0HE", fields: { Name: "Jane", f_number: 1 } },
    ],
  })
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b591514bc3301485ffcac8f3d66519c8cc93744c64d42a327d9888dcb6772e9026354da86eecbf9bdb0d740f822fbe8593ef9e9c73b3670e4bebaa96c9e73d53159324cca7b3f7d575fba1ba05bf59b021db28d4c4ec590e3546680906497f85e06d1eea021d934208928ae0bd35046b285047faae4133787cc8e24470246cbd6f5a391e775d97bc391b1a70d626a5add9811c4a87e0b14a3fc9a40f155a776f32dcadf3ed4ca4bbe53c5a610d8acc0aa7c0241aad01575d9ddb0d9939064e091a6447e8ec9595ea01c18518f1c988cf569c4b7e29a7d38473beee5b6eacab838653f1d8b35735b4fed6562a6ee7bfb3fe7cead7c017df819dd53a3414a96db054a09f40079aca213fb5b7c17826399dcde90327f1e68f5b39bc1cbe001c9ddcbe3c020000",
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
      "Sat, 08 Jan 2022 00:09:35 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwLFAkRJp8uPtqZa; path=/; expires=Sun, 08 Jan 2023 00:09:35 GMT; domain=.airtable.com; samesite=none; secure",
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
        id: "recZYpqaezBCWg48A",
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
      "Sat, 08 Jan 2022 00:09:36 GMT",
      "ETag",
      'W/"84-KRG5uYiGIYLC2gu/Ct38qaY/8oI"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwMJFrp819LbV3JW; path=/; expires=Sun, 08 Jan 2023 00:09:36 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003b550c14ec24010fd15b267286b490ceec9d48b9a5a8da2078c31d3768025dbdd3add0d11c2bfbb5348941b178f33f3de9bf7de4e10568eea4ea8f79dd0b550bcc0af7a69d7eb5bbcf32de56228161a0d6376a2800623e8c535e82cf2e913827745684a24a1d274c22b7b1cfba10cde3bcb6403259ac87e6cd10e5e9f5939102f56deb79d1a8f379b4db224175a20e792ca3562cf0a152178acb36f16e94d868e9e6c8edb79b19aa6d9f6fe264a61039ac54ad2601313fd01d5d7a77243610f0132060df203e8e4cb4cf78054a6e9485e8ce47426a592576a72994829e77de485a32618f82d22e6ee0f063affe06a1d0bfb6fbb7f5f9de3999c31a1654b5d8b9506f3062630ab80e258800bd60b25e3706617fb8ffd0fe8c2700842020000",
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
      "Sat, 08 Jan 2022 00:09:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwrQrIZ39Ph1JoWW; path=/; expires=Sun, 08 Jan 2023 00:09:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recC38qTFsxiwE0HE")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b5915f4bc33014c5bfcac8f3d6652948cd93744c64d42a327dd88bdcb6772e9026357fa86eecbb9b7405dd83e08b6fe1e4dc93dfb93912d1104e0cd6cb347bdfdcda0fd1afe8dd8a4cc94ea06c2ce14752428bc1b40685517f05ef74e9db0a0de18cb12855de39ada259428532b81f3a5493e7a7224c781385bd739de5f379dff7c99bd1be03a37552eb969c62426d101c36f9670c19a0bc358faac0c3b6dc672c3fac97210a5b1031ac32025422512b30cdcd65dc94a833701e4d93e26cba7865230603a38ccde86246b30da59c5ef3344d28a5dba1e54e9bd64b188b879e832ac1ba7bdd88b09dff66fdf9d4afc057dfc0464be9bb88643bac05c817903e4e95508eedb5578e701acf6afcc045b8f9e3564e5f01b1e0202e020000",
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
      "Sat, 08 Jan 2022 00:09:36 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwWKEAu4x1qwlDOk; path=/; expires=Sun, 08 Jan 2023 00:09:36 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1/recZYpqaezBCWg48A")
  .query({})
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b551414ec33010fc4ae5739b3a86439a13a49caa12100a202a24b449b68d25c71b1c5b8556fd3b768a447b40e2c2d13be3d999d93d93354b99c16af5d2bd03eeb2f9f3e632b96663b696a8ea9ea57b96438b9eb4a0468f6e0803f606ce52eeda120d4b8588c3c8c8aa29f0c37aeaab1e48a5b39674905050a2f2c05d877af4f8b0f4b03361d058dbf5e974badd6ea38d21d781218a2a6ad921285406c1629d7d0691c1aaebcdbd5ee26e953789c8768bb997c21664102b8d041d29240da6be3a971b337d8c9105d26879249d6d29e440105c88098f273c29384ff92c15b38873be1a22adc9b44ec1491d3efd8028e8ed2dd5d2f7f6df7e4f57fd66fa22fe316d4829d7054b7d879504f504ca855f39e4df0d90d3fe70dc3ffe58c6e10b9e79155f3b020000",
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
      "Sat, 08 Jan 2022 00:09:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwBRxyAS4gfwEfg5; path=/; expires=Sun, 08 Jan 2023 00:09:37 GMT; domain=.airtable.com; samesite=none; secure",
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
  .get("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({ filterByFormula: "%7BName%7D%3D%22Someone%22", maxRecords: "1" })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003b550c14ec24010fd15b267286b490ceec9d48b9a5a8da2078c31d3768025dbdd3add0d11c2bfbb5348941b178f33f3de9bf7de4e10568eea4ea8f79dd0b550bcc0af7a69d7eb5bbcf32de56228161a0d6376a2800623e8c535e82cf2e913827745684a24a1d274c22b7b1cfba10cde3bcb6403259ac87e6cd10e5e9f5939102f56deb79d1a8f379b4db224175a20e792ca3562cf0a152178acb36f16e94d868e9e6c8edb79b19aa6d9f6fe264a61039ac54ad2601313fd01d5d7a77243610f0132060df203e8e4cb4cf78054a6e9485e8ce47426a592576a72994829e77de485a32618f82d22e6ee0f063affe06a1d0bfb6fbb7f5f9de3999c31a1654b5d8b9506f3062630ab80e258800bd60b25e3706617fb8ffd0fe8c2700842020000",
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
      "Sat, 08 Jan 2022 00:09:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwzx5t5cMq7Sw12j; path=/; expires=Sun, 08 Jan 2023 00:09:37 GMT; domain=.airtable.com; samesite=none; secure",
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
      "1f8b0800000000000003dd945f4fc23014c5bf0ae9337fca660cec49410c129c4651236a4cd92e50d2b5a36b0342f8eeb66306486624242684b7e5eef4f69cdb5fbb44120221c304796f4b4443e4d942d3ad4d7bd7c99cce5ab8dd424534a4c0ac66897c1281117508075bff245a095f470390c8731cc796065a29c1ad98910130a3be8b81179e1eba668596b630562a4ebc4a65369b954752e8984821ca8188d0ca760824100561e3cb36494de944def32e2cfafeb8e634169da6690511a1b6d94052c2cb0c042732bcd86d57447c6db8614585ee5ab4b34b8fa602073b4e09574bb8d6c3d8c375cf75cb18e37e9a722864a419c9829b9c69959144dd8a909ae9fcb7d7edad7e357cbe312c05633ab6969218024ad83361daaef2899fa5179a2be461fbcdb303ac9a3f7b4e6555dce0d27f8da704168de6cbe8ac76998b8b18f3c295c843a69adaa5c1b80773e307bd7374421039f55c88b27198f4470952f51090fe66e76718dbecc0341cf1c9a40d372a96dd3c761e456402e4a1e36eb3eb9e1035db3779434d360893fb28a139e8f5d9e3c1c9faae3e56df94bc0a22ad060000",
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
      "Sat, 08 Jan 2022 00:09:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwCaWDZ3o5ALW1SW; path=/; expires=Sun, 08 Jan 2023 00:09:37 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "418",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .delete("/v0/appA1Qak1T4cGoiP7/tbln73pmkdKl4Khj1")
  .query({
    "records%5B%5D": [
      "recC38qTFsxiwE0HE",
      "recZYpqaezBCWg48A",
      "receqdgnjjHeItprL",
    ],
  })
  .once()
  .reply(
    200,
    [
      "1f8b0800000000000003ab562a4a4dce2f4a2956b28aae564a49cd492d494d51b22a292a4dd551ca04b240f2cec61685216ec51599e5ae061eae4ab53a38554645161426a656393987a79b5838e253995a98929e9795e591ea595250e4a3541b5b0b0074f784e88b000000",
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
      "Sat, 08 Jan 2022 00:09:37 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwfYV2qLdFzfzxy3; path=/; expires=Sun, 08 Jan 2023 00:09:37 GMT; domain=.airtable.com; samesite=none; secure",
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
