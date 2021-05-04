const nock = require("nock");

nock("https://onesignal.com:443", { encodedQueryParams: true })
  .delete("/api/v1/players/null")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(400, { errors: ["No user with this id found"] }, [
    "Date",
    "Tue, 04 May 2021 04:56:08 GMT",
    "Content-Type",
    "application/json; charset=utf-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=d32fa497eba25f59a1fd915a3ab2bd9d01620104168; expires=Thu, 03-Jun-21 04:56:08 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "status",
    "400 Bad Request",
    "cache-control",
    "no-cache",
    "access-control-allow-origin",
    "*",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-xss-protection",
    "1; mode=block",
    "x-request-id",
    "e18d26d7-6552-45a1-ba0f-84dc0785f4c1",
    "access-control-allow-headers",
    "SDK-Version",
    "x-runtime",
    "0.012167",
    "x-frame-options",
    "SAMEORIGIN",
    "x-content-type-options",
    "nosniff",
    "x-powered-by",
    "Phusion Passenger 6.0.4",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d754dacf0000cf966cbac000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f240ae8e8cf96-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .post("/api/v1/players", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    external_user_id: "grouparoo",
    device_type: 11,
    identifier: "grouparoo@demo.com",
  })
  .once()
  .reply(200, { success: true, id: "271f8d1a-2718-4962-a150-55ba6385b9f9" }, [
    "Date",
    "Tue, 04 May 2021 04:56:08 GMT",
    "Content-Type",
    "application/json; charset=utf-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=dd8d4a7735e3cc1d7564ba449d08008a81620104168; expires=Thu, 03-Jun-21 04:56:08 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "status",
    "200 OK",
    "cache-control",
    "max-age=0, private, must-revalidate",
    "access-control-allow-origin",
    "*",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-xss-protection",
    "1; mode=block",
    "x-request-id",
    "4fcbe533-586c-4256-910a-3252acbe42b2",
    "access-control-allow-headers",
    "SDK-Version",
    "etag",
    'W/"902131b8de78bf99f29f1d60e6bc6bd7"',
    "x-frame-options",
    "SAMEORIGIN",
    "x-runtime",
    "0.049134",
    "x-content-type-options",
    "nosniff",
    "x-powered-by",
    "Phusion Passenger 5.3.7",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d754db7f0000cf92b8af6000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f240bfe6bcf92-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put(
    "/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/thisdoesnotexist",
    { app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31", tags: {} }
  )
  .once()
  .reply(404, { errors: ["No users with this external_id found"] }, [
    "Date",
    "Tue, 04 May 2021 04:56:08 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "51",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=df97af91dc1d8a8b357bf297434588da11620104168; expires=Thu, 03-Jun-21 04:56:08 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d754dc530000e080f9bd2000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f240d5c36e080-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: {},
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:56:18 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=da1c8191b47d8be43ba1999ffe170ff361620104178; expires=Thu, 03-Jun-21 04:56:18 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "ea66787d-4cc7-4501-af84-615e874de8a7",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"75105d06fcc968faaae5ac5199232c69"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.015786",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 5.3.7",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d75504050000cf9e43236000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f244cdb64cf9e-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: { first_name: "Joe" },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:56:19 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=daa33bff8091f2a2975ee2a484e06c2e31620104178; expires=Thu, 03-Jun-21 04:56:18 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d75504b80000e0784f914000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f244df99ae078-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: { first_name: "Joe" },
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:56:29 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=d6664ad4c7dda7edee6286ab8892e30181620104189; expires=Thu, 03-Jun-21 04:56:29 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "a9545bbc-be9d-4990-9cee-be79251667d9",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"09e2ed8c8abb8ab364eb17ea58fd04a7"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.009931",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 6.0.4",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d7552ca30000cf9a578e9000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f248ddc28cf9a-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: {
      first_name: "John",
      last_name: "Doe",
      last_active_at: 1614034983,
      play_count: 10,
    },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:56:29 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=da3d94ac4f4ba7b64509c9c2b52a0f8371620104189; expires=Thu, 03-Jun-21 04:56:29 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d7552d4d0000cf8e44042000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f248ee88fcf8e-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: {
        last_name: "Doe",
        first_name: "John",
        play_count: "10",
        last_active_at: "1614034983",
      },
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:56:39 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=dd1f0dd9fff55419a7c806a1303ef076c1620104199; expires=Thu, 03-Jun-21 04:56:39 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "d5f16835-9e84-4f8c-a030-bbabf9f63f27",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"4ff1b6b905451f7390fefa525a63e65d"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.010807",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 6.0.4",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d75555700000e0747d0e8000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f24cf19dae074-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: {
      first_name: "John",
      last_name: null,
      last_active_at: null,
      play_count: null,
    },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:56:39 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=d8a26113c753f1a600cf47815746a6d541620104199; expires=Thu, 03-Jun-21 04:56:39 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d75556160000cf8e2e3c9000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f24d02b7ecf8e-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: { first_name: "John" },
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:56:50 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=d38700a158839928093c134301724d6621620104209; expires=Thu, 03-Jun-21 04:56:49 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "0935347d-eca6-429c-b0a3-9c5669ab2d34",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"7f888bce7a33baf369772a93c3e24952"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.008428",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 5.3.7",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d7557dfd0000cf969c26b000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f250ff925cf96-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: {
      first_name: "John",
      in_high_value: true,
      in_spanish_speakers: true,
    },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:56:50 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=ddbfbb1f9377d94ecfaf60d8f1fd7f9331620104210; expires=Thu, 03-Jun-21 04:56:50 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d7557ea30000e0745b21d000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f25110a98e074-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: {
        first_name: "John",
        in_high_value: "true",
        in_spanish_speakers: "true",
      },
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:57:00 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=d1b56df06ec28a5f315871a3622d9bb091620104220; expires=Thu, 03-Jun-21 04:57:00 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "fbcee5d8-38e6-4141-aa2e-6e5cc7ea04e7",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"ffab45abb464cdb65ea7fc0e5d0230a6"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.010191",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 6.0.4",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d755a6850000cf969c39b000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f2550ded5cf96-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: {
      first_name: "John",
      in_high_value: true,
      in_spanish_speakers: null,
    },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:57:00 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=d65ca21d54067e68ab04115b38cf14d851620104220; expires=Thu, 03-Jun-21 04:57:00 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d755a7360000cf8e82acf000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f2551f9d8cf8e-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: { first_name: "John", in_high_value: "true" },
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:57:10 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=dd5eb9bce91d2a8584e6f8810cc29914b1620104230; expires=Thu, 03-Jun-21 04:57:10 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "15df7556-67b1-43e5-8018-31470d19fa82",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"b194075c39d979420f6c4cf936769d6e"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.008692",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 6.0.4",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d755cf1e0000cf8e82bcf000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f2591cfa3cf8e-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: {
      first_name: "John",
      my_weird_tag_name: "test",
      in_high_value: true,
      in___high_value____: true,
    },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:57:11 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=d630b10889e4bbb9070787c754f7c75a61620104230; expires=Thu, 03-Jun-21 04:57:10 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d755cfcb0000cf9235326000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f2592dc4ecf92-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: {
        first_name: "John",
        in_high_value: "true",
        my_weird_tag_name: "test",
        in___high_value____: "true",
      },
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:57:21 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=da3344d66a929955ddb8a7f8d65c8cae71620104241; expires=Thu, 03-Jun-21 04:57:21 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "6031eb23-ad9d-4561-b855-9382a578160a",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"5427245d552a4fbdd77981c1ed33075f"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.007917",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 6.0.4",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d755f7b90000e0804c28c000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f25d2ca41e080-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .put("/api/v1/apps/c2a9750d-41ef-8cef96b99-127be5aaeb31/users/grouparoo", {
    app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31",
    tags: {
      first_name: null,
      my_weird_tag_name: null,
      some_new_tag: null,
      in_high_value: null,
      in___high_value____: null,
    },
  })
  .once()
  .reply(202, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:57:21 GMT",
    "Content-Type",
    "application/json",
    "Content-Length",
    "16",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=d2d7e70a490fc3df97bca85945ce6ffe01620104241; expires=Thu, 03-Jun-21 04:57:21 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "access-control-allow-origin",
    "*",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d755f8610000e08483971000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f25d3c8eae084-FOR",
  ]);
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .get("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(
    200,
    {
      id: "271f8d1a-2718-4962-a150-55ba6385b9f9",
      identifier: "grouparoo@demo.com",
      session_count: 1,
      language: "en",
      timezone: null,
      game_version: null,
      device_os: null,
      device_type: 11,
      device_model: null,
      ad_id: null,
      tags: {},
      last_active: 1620104168,
      playtime: 0,
      amount_spent: 0,
      created_at: 1620104168,
      invalid_identifier: false,
      badge_count: 0,
      sdk: null,
      test_type: null,
      ip: "191.253.18.59",
      external_user_id: "grouparoo",
    },
    [
      "Date",
      "Tue, 04 May 2021 04:57:31 GMT",
      "Content-Type",
      "application/json; charset=utf-8",
      "Transfer-Encoding",
      "chunked",
      "Connection",
      "close",
      "Set-Cookie",
      "__cfduid=d3c38c3c8bd7642e642f988c7d6f93da71620104251; expires=Thu, 03-Jun-21 04:57:31 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
      "status",
      "200 OK",
      "cache-control",
      "max-age=0, private, must-revalidate",
      "access-control-allow-origin",
      "*",
      "referrer-policy",
      "strict-origin-when-cross-origin",
      "x-xss-protection",
      "1; mode=block",
      "x-request-id",
      "59d8f09a-e1ed-4762-af68-3857ad8fc5fb",
      "access-control-allow-headers",
      "SDK-Version",
      "etag",
      'W/"75105d06fcc968faaae5ac5199232c69"',
      "x-frame-options",
      "SAMEORIGIN",
      "x-runtime",
      "0.009785",
      "x-content-type-options",
      "nosniff",
      "x-powered-by",
      "Phusion Passenger 6.0.4",
      "CF-Cache-Status",
      "DYNAMIC",
      "cf-request-id",
      "09d756208c0000e0802e95d000000001",
      "Expect-CT",
      'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
      "Server",
      "cloudflare",
      "CF-RAY",
      "649f26141822e080-FOR",
    ]
  );
nock("https://onesignal.com:443", { encodedQueryParams: true })
  .delete("/api/v1/players/271f8d1a-2718-4962-a150-55ba6385b9f9")
  .query({ app_id: "c2a9750d-41ef-8cef96b99-127be5aaeb31" })
  .once()
  .reply(200, { success: true }, [
    "Date",
    "Tue, 04 May 2021 04:57:31 GMT",
    "Content-Type",
    "application/json; charset=utf-8",
    "Transfer-Encoding",
    "chunked",
    "Connection",
    "close",
    "Set-Cookie",
    "__cfduid=d3c38c3c8bd7642e642f988c7d6f93da71620104251; expires=Thu, 03-Jun-21 04:57:31 GMT; path=/; domain=.onesignal.com; HttpOnly; SameSite=Lax",
    "status",
    "200 OK",
    "cache-control",
    "max-age=0, private, must-revalidate",
    "access-control-allow-origin",
    "*",
    "referrer-policy",
    "strict-origin-when-cross-origin",
    "x-xss-protection",
    "1; mode=block",
    "x-request-id",
    "fe0d2352-706b-402d-aa88-5e19b75a073a",
    "access-control-allow-headers",
    "SDK-Version",
    "etag",
    'W/"c955e57777ec0d73639dca6748560d00"',
    "x-frame-options",
    "SAMEORIGIN",
    "x-runtime",
    "0.036598",
    "x-content-type-options",
    "nosniff",
    "x-powered-by",
    "Phusion Passenger 5.3.7",
    "CF-Cache-Status",
    "DYNAMIC",
    "cf-request-id",
    "09d756213c0000e080138d0000000001",
    "Expect-CT",
    'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    "Server",
    "cloudflare",
    "CF-RAY",
    "649f261528f0e080-FOR",
  ]);
