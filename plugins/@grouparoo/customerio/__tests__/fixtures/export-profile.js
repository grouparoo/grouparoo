const nock = require("nock");

nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:56:45 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-new")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:56:45 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-fake")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:56:46 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPDFQPCVA08GD150VG0CV4)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:56:56 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", {})
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:56:56 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { id: "grouparoo" },
        timestamps: { id: 1614193018 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "128",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:07 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", { email: "grouparoo@demo.com" })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:57:07 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { email: "grouparoo@demo.com", id: "grouparoo" },
        timestamps: { email: 1614193027, id: 1614193018 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "176",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:17 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", { created_at: 1614034983 })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:57:17 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: {
          created_at: 1614193037,
          email: 1614193027,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "226",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:28 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: {
          created_at: 1614193037,
          email: 1614193027,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "226",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:28 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", { email: "notgrouparoo@demo.com" })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:57:28 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: {
          created_at: 1614193037,
          email: 1614193048,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "229",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:38 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: {
          created_at: 1614193037,
          email: 1614193048,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "229",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:39 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", { email: null })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:57:39 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { created_at: "1614034983", id: "grouparoo" },
        timestamps: { created_at: 1614193037, id: 1614193018 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "178",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:49 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { created_at: "1614034983", id: "grouparoo" },
        timestamps: { created_at: 1614193037, id: 1614193018 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "178",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:57:49 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", {
    "In High Value": true,
    "In Spanish Speaking": true,
  })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:57:49 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          "In High Value": "true",
          "In Spanish Speaking": "true",
          created_at: "1614034983",
          id: "grouparoo",
        },
        timestamps: {
          "In High Value": 1614193069,
          "In Spanish Speaking": 1614193069,
          created_at: 1614193037,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "290",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:00 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          "In High Value": "true",
          "In Spanish Speaking": "true",
          created_at: "1614034983",
          id: "grouparoo",
        },
        timestamps: {
          "In High Value": 1614193069,
          "In Spanish Speaking": 1614193069,
          created_at: 1614193037,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "290",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:00 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", {
    "In High Value": true,
    "In Spanish Speaking": null,
  })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:00 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          "In High Value": "true",
          created_at: "1614034983",
          id: "grouparoo",
        },
        timestamps: {
          "In High Value": 1614193069,
          created_at: 1614193037,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "228",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:10 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: {
          "In High Value": "true",
          created_at: "1614034983",
          id: "grouparoo",
        },
        timestamps: {
          "In High Value": 1614193069,
          created_at: 1614193037,
          id: 1614193018,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "228",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:11 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-new/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPFRTKH50TG302ARXFRM8M)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:11 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:11 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo-new", { email: "grouparoo@demo.com" })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:11 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPG3792E0M3X1ZR66GAX4E)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:22 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-new/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo-new",
        attributes: { email: "grouparoo@demo.com", id: "grouparoo-new" },
        timestamps: { email: 1614193091, id: 1614193093 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "184",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:22 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-new/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo-new",
        attributes: { email: "grouparoo@demo.com", id: "grouparoo-new" },
        timestamps: { email: 1614193091, id: 1614193093 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "184",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:22 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPG41STZRD3FM8X72R3AWY)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:22 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-new")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:23 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", { email: "notgrouparoo@demo.com" })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:23 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-new/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPGEJRB12KK0ZGNRPNHE1W)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:33 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { email: "notgrouparoo@demo.com", id: "grouparoo" },
        timestamps: { email: 1614193103, id: 1614193104 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "179",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:33 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { email: "notgrouparoo@demo.com", id: "grouparoo" },
        timestamps: { email: 1614193103, id: 1614193104 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "179",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:34 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:34 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPGT573K7CHP1CGV2SG02E)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:45 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-fake/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPGTGMR3AX3AETKXZVXDE6)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:45 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-fake")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:46 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-fake/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPH4XMN1JCP1985VFHK3RP)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:56 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPH551FAFQKH9GNW9R8RDV)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:56 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-fake/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01EZAPH5CRDR168GSDFQ15AN6F)",
          status: "404",
        },
      ],
    },
    [
      "Content-Length",
      "89",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:58:57 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-fake")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:57 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo", { email: "grouparoo@demo.com" })
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:58:57 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo",
        attributes: { email: "grouparoo@demo.com", id: "grouparoo" },
        timestamps: { email: 1614193137, id: 1614193138 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "176",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Wed, 24 Feb 2021 18:59:07 GMT",
      "Connection",
      "close",
      "Strict-Transport-Security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "Referrer-Policy",
      "no-referrer-when-downgrade",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:59:08 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-new")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:59:08 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo-fake")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Wed, 24 Feb 2021 18:59:08 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
