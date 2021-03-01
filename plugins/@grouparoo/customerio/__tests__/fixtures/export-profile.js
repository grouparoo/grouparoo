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
    "Thu, 25 Feb 2021 13:28:31 GMT",
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
    "Thu, 25 Feb 2021 13:28:31 GMT",
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
    "Thu, 25 Feb 2021 13:28:31 GMT",
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
          detail: "not found (reference 01EZCP16FBQAHQ5QM1VNFSCZBD)",
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
      "Thu, 25 Feb 2021 13:28:42 GMT",
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
    "Thu, 25 Feb 2021 13:28:43 GMT",
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
        timestamps: { id: 1614259724 },
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
      "Thu, 25 Feb 2021 13:28:53 GMT",
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
    email: "grouparoo@demo.com",
    name: "Grouparoo Kangaroo",
    age: 30,
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
    "Thu, 25 Feb 2021 13:28:53 GMT",
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
          age: "30",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1614259733,
          email: 1614259733,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "250",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:04 GMT",
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
    "Thu, 25 Feb 2021 13:29:04 GMT",
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
          age: "30",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1614259733,
          created_at: 1614259744,
          email: 1614259733,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "300",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:14 GMT",
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
          age: "30",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1614259733,
          created_at: 1614259744,
          email: 1614259733,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "300",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:14 GMT",
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
    email: "notgrouparoo@demo.com",
    name: "Grouparoo Kangaroo",
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
    "Thu, 25 Feb 2021 13:29:15 GMT",
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
          age: "30",
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1614259733,
          created_at: 1614259744,
          email: 1614259755,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "303",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:25 GMT",
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
          age: "30",
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1614259733,
          created_at: 1614259744,
          email: 1614259755,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "303",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:25 GMT",
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
    name: "Grouparoo Kangaroo",
    email: null,
    age: null,
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
    "Thu, 25 Feb 2021 13:29:25 GMT",
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
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          created_at: 1614259744,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "224",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:36 GMT",
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
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          created_at: 1614259744,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "224",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:36 GMT",
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
    "Thu, 25 Feb 2021 13:29:36 GMT",
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
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1614259776,
          "In Spanish Speaking": 1614259776,
          created_at: 1614259744,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "336",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:46 GMT",
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
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1614259776,
          "In Spanish Speaking": 1614259776,
          created_at: 1614259744,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "336",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:47 GMT",
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
    "Thu, 25 Feb 2021 13:29:47 GMT",
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
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1614259776,
          created_at: 1614259744,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "274",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:57 GMT",
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
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1614259776,
          created_at: 1614259744,
          id: 1614259724,
          name: 1614259733,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "Content-Length",
      "274",
      "Content-Type",
      "application/json; charset=utf-8",
      "Date",
      "Thu, 25 Feb 2021 13:29:57 GMT",
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
          detail: "not found (reference 01EZCP3FYGKPWJNRJADT14RJNF)",
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
      "Thu, 25 Feb 2021 13:29:57 GMT",
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
    "Thu, 25 Feb 2021 13:29:58 GMT",
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
    "Thu, 25 Feb 2021 13:29:58 GMT",
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
          detail: "not found (reference 01EZCP3TQMP5GERGYB4RRXMAJK)",
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
      "Thu, 25 Feb 2021 13:30:09 GMT",
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
        timestamps: { email: 1614259798, id: 1614259800 },
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
      "Thu, 25 Feb 2021 13:30:09 GMT",
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
        timestamps: { email: 1614259798, id: 1614259800 },
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
      "Thu, 25 Feb 2021 13:30:09 GMT",
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
          detail: "not found (reference 01EZCP3VPHV5TBCQTQR738E8W9)",
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
      "Thu, 25 Feb 2021 13:30:10 GMT",
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
    "Thu, 25 Feb 2021 13:30:10 GMT",
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
    "Thu, 25 Feb 2021 13:30:10 GMT",
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
          detail: "not found (reference 01EZCP462JK7E5SQKH4ND3Q8ZC)",
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
      "Thu, 25 Feb 2021 13:30:20 GMT",
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
        timestamps: { email: 1614259810, id: 1614259812 },
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
      "Thu, 25 Feb 2021 13:30:20 GMT",
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
        timestamps: { email: 1614259810, id: 1614259812 },
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
      "Thu, 25 Feb 2021 13:30:21 GMT",
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
    "Thu, 25 Feb 2021 13:30:21 GMT",
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
          detail: "not found (reference 01EZCP4GW87R5Q6F5CXEPQJQZ8)",
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
      "Thu, 25 Feb 2021 13:30:31 GMT",
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
          detail: "not found (reference 01EZCP4H674MWMWFZS4W7G6033)",
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
      "Thu, 25 Feb 2021 13:30:32 GMT",
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
    "Thu, 25 Feb 2021 13:30:32 GMT",
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
          detail: "not found (reference 01EZCP4VBD1WSF4H0ZAAFQH3AJ)",
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
      "Thu, 25 Feb 2021 13:30:42 GMT",
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
          detail: "not found (reference 01EZCP4VJP2JMGNE7BB0DEH4XQ)",
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
      "Thu, 25 Feb 2021 13:30:42 GMT",
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
          detail: "not found (reference 01EZCP4VTFSVHDJYWY1SRCV2HV)",
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
      "Thu, 25 Feb 2021 13:30:42 GMT",
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
    "Thu, 25 Feb 2021 13:30:43 GMT",
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
    "Thu, 25 Feb 2021 13:30:43 GMT",
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
        timestamps: { email: 1614259843, id: 1614259845 },
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
      "Thu, 25 Feb 2021 13:30:53 GMT",
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
    "Thu, 25 Feb 2021 13:30:53 GMT",
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
    "Thu, 25 Feb 2021 13:30:53 GMT",
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
    "Thu, 25 Feb 2021 13:30:54 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
