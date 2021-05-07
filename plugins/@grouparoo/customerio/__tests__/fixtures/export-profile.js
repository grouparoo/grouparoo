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
    "Fri, 07 May 2021 02:13:48 GMT",
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
    "Fri, 07 May 2021 02:13:49 GMT",
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
    "Fri, 07 May 2021 02:13:49 GMT",
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
          detail: "not found (reference 01F529MT19S2A513TRZ0ZVXHNS)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:00 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529MTM63240HEH3KDW65XCB)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:01 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529MVD9AXWJ5JYD3SK1F53N)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:01 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:14:02 GMT",
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
        timestamps: { id: 1620353644 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "128",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:12 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        attributes: { id: "grouparoo" },
        timestamps: { id: 1620353644 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "128",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:13 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:14:14 GMT",
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
          age: 1620353654,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "250",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:24 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1620353654,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "250",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:25 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:14:25 GMT",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "300",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:36 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "300",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:36 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "300",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:37 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "300",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:38 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353654,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "300",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:39 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:14:39 GMT",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353679,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "303",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:50 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353679,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "303",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:50 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          age: 1620353654,
          created_at: 1620353665,
          email: 1620353679,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "303",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:14:51 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:14:52 GMT",
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
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "224",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:02 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "224",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:03 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "224",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:04 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:15:04 GMT",
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
          "In High Value": 1620353704,
          "In Spanish Speaking": 1620353704,
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "336",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:15 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          "In High Value": 1620353704,
          "In Spanish Speaking": 1620353704,
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "336",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:15 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          "In High Value": 1620353704,
          "In Spanish Speaking": 1620353704,
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "336",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:16 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:15:17 GMT",
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
          "In High Value": 1620353704,
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "274",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:27 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          "In High Value": 1620353704,
          created_at: 1620353665,
          id: 1620353644,
          name: 1620353654,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "274",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:28 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529QGSMKHDGW1M2RH1HYXMJ)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:29 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529QHJ830X8B2DWXKEC41G5)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:30 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:15:30 GMT",
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
    "Fri, 07 May 2021 02:15:30 GMT",
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
          detail: "not found (reference 01F529QWPBCQW51PKP16FJATAT)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:41 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353730, id: 1620353732 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "184",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:42 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-another/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01F529QXVFTN145ZTZYTHDR134)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:42 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
    ]
  );
nock("https://track.customer.io:443", { encodedQueryParams: true })
  .put("/api/v1/customers/grouparoo-another", {
    email: "grouparoo@demo.com",
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
    "Fri, 07 May 2021 02:15:43 GMT",
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
    200,
    {
      customer: {
        id: "grouparoo-new",
        attributes: { email: "grouparoo@demo.com", id: "grouparoo-new" },
        timestamps: { email: 1620353730, id: 1620353732 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "184",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:53 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
    ]
  );
nock("https://beta-api.customer.io:443", { encodedQueryParams: true })
  .get("/v1/api/customers/grouparoo-another/attributes")
  .once()
  .reply(
    200,
    {
      customer: {
        id: "grouparoo-another",
        attributes: {
          "In High Value": "true",
          "In Spanish Speaking": "true",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1620353743,
          "In Spanish Speaking": 1620353743,
          email: 1620353743,
          id: 1620353744,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "304",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:54 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353730, id: 1620353732 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "184",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:54 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529RAC5XCRMBM3T2Z9WCWCT)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:55 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529RAYPPXJPA5G1FF3VVXHY)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:15:56 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:15:56 GMT",
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
    "Fri, 07 May 2021 02:15:57 GMT",
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
          detail: "not found (reference 01F529RP879GY1YWCKSTZHBYAZ)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:07 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353757, id: 1620353758 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "179",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:08 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353757, id: 1620353758 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "179",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:09 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353757, id: 1620353758 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "179",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:09 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353757, id: 1620353758 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "179",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:10 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
        timestamps: { email: 1620353757, id: 1620353758 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "179",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:11 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:16:11 GMT",
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
          detail: "not found (reference 01F529S4GVKANNFTZSV7ZVE8F4)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:22 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529S53J1G9QB3CV2RJP2PXH)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:22 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529S5W88WXSZ14ZKD40DVYR)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:23 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:16:24 GMT",
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
          detail: "not found (reference 01F529SGMCM74E46Q5981PNZYN)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:34 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529SH6XC5PMTC1KJ041MWNB)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:35 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529SHSE0HJK08FFMXQ650GK)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:35 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
          detail: "not found (reference 01F529SJJAS7D5MDVCWPS4FNCQ)",
          status: "404",
        },
      ],
    },
    [
      "content-length",
      "89",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:36 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:16:37 GMT",
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
    "Fri, 07 May 2021 02:16:37 GMT",
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
        timestamps: { email: 1620353797, id: 1620353798 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "176",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 07 May 2021 02:16:48 GMT",
      "strict-transport-security",
      "max-age=15768000",
      "x-frame-options",
      "SAMEORIGIN",
      "x-content-type-options",
      "nosniff",
      "x-xss-protection",
      "1; mode=block",
      "referrer-policy",
      "no-referrer-when-downgrade",
      "connection",
      "close",
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
    "Fri, 07 May 2021 02:16:48 GMT",
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
    "Fri, 07 May 2021 02:16:48 GMT",
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
    "Fri, 07 May 2021 02:16:49 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
