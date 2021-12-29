const nock = require("nock");

nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 22:23:20 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwcBZ5LFQd66Miqp; path=/; expires=Thu, 29 Dec 2022 22:23:19 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/appA1Qak1T4cGoiP7/tables")
  .once()
  .reply(404, { error: { type: "NOT_FOUND" } }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 29 Dec 2021 22:23:20 GMT",
    "ETag",
    'W/"1e-3T2XZ8YB2JlzFYjAqmnw+s2G3pA"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwpbOQdynb0lMieM; path=/; expires=Thu, 29 Dec 2022 22:23:20 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "30",
    "Connection",
    "Close",
  ]);
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    401,
    {
      error: {
        type: "AUTHENTICATION_REQUIRED",
        message: "Authentication required",
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
      "Wed, 29 Dec 2021 22:23:20 GMT",
      "ETag",
      'W/"50-8xYAvLBWleFLl/buYhG+M42uVZo"',
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brw2bCS4Yebm9C6Zv; path=/; expires=Thu, 29 Dec 2022 22:23:20 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "80",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases")
  .once()
  .reply(
    200,
    {
      bases: [
        {
          id: "appA1Qak1T4cGoiP7",
          name: "[CI Test] Marketing Campaign Tracking",
          permissionLevel: "create",
        },
      ],
    },
    [
      "access-control-allow-headers",
      "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
      "access-control-allow-methods",
      "DELETE,GET,OPTIONS,PATCH,POST,PUT",
      "access-control-allow-origin",
      "*",
      "airtable-uncompressed-content-length",
      "1015",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 29 Dec 2021 22:23:21 GMT",
      "Server",
      "Tengine",
      "Set-Cookie",
      "brw=brwxPa8w6obsyrHLp; path=/; expires=Thu, 29 Dec 2022 22:23:21 GMT; domain=.airtable.com; samesite=none; secure",
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
      "Vary",
      "Accept-Encoding",
      "X-Content-Type-Options",
      "nosniff",
      "X-Frame-Options",
      "DENY",
      "Content-Length",
      "1015",
      "Connection",
      "Close",
    ]
  );
nock("https://api.airtable.com:443", { encodedQueryParams: true })
  .get("/v0/meta/bases/junk/tables")
  .once()
  .reply(404, { error: "NOT_FOUND" }, [
    "access-control-allow-headers",
    "authorization,content-length,content-type,user-agent,x-airtable-application-id,x-airtable-user-agent,x-api-version,x-requested-with",
    "access-control-allow-methods",
    "DELETE,GET,OPTIONS,PATCH,POST,PUT",
    "access-control-allow-origin",
    "*",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 29 Dec 2021 22:23:21 GMT",
    "ETag",
    'W/"15-tcRCab2ZDkTZ4I9Oh2TI8Kt8AAg"',
    "Server",
    "Tengine",
    "Set-Cookie",
    "brw=brwaykS8of6lir6xY; path=/; expires=Thu, 29 Dec 2022 22:23:21 GMT; domain=.airtable.com; samesite=none; secure",
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
    "Vary",
    "Accept-Encoding",
    "X-Content-Type-Options",
    "nosniff",
    "X-Frame-Options",
    "DENY",
    "Content-Length",
    "21",
    "Connection",
    "Close",
  ]);
