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
    "Tue, 11 May 2021 02:31:02 GMT",
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
    "Tue, 11 May 2021 02:31:02 GMT",
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
    "Tue, 11 May 2021 02:31:03 GMT",
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
          detail: "not found (reference 01F5CM77E5JHK33DZ05GG400WV)",
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
      "Tue, 11 May 2021 02:31:14 GMT",
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
          detail: "not found (reference 01F5CM785X0XFQY9M761280F5M)",
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
      "Tue, 11 May 2021 02:31:14 GMT",
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
          detail: "not found (reference 01F5CM78XB16M40PCYJ3GMKPA1)",
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
      "Tue, 11 May 2021 02:31:15 GMT",
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
    "Tue, 11 May 2021 02:31:16 GMT",
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
        timestamps: { id: 1620700277 },
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
      "Tue, 11 May 2021 02:31:26 GMT",
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
        timestamps: { id: 1620700277 },
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
      "Tue, 11 May 2021 02:31:27 GMT",
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
    "Tue, 11 May 2021 02:31:27 GMT",
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
          age: 1620700287,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:38 GMT",
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
          age: 1620700287,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:39 GMT",
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
    "Tue, 11 May 2021 02:31:39 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:50 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:50 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:51 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:52 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700287,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:31:52 GMT",
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
    "Tue, 11 May 2021 02:31:53 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700313,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:03 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700313,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:04 GMT",
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
          age: 1620700287,
          created_at: 1620700299,
          email: 1620700313,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:04 GMT",
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
    "Tue, 11 May 2021 02:32:05 GMT",
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
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:15 GMT",
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
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:16 GMT",
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
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:17 GMT",
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
    "Tue, 11 May 2021 02:32:17 GMT",
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
          "In High Value": 1620700337,
          "In Spanish Speaking": 1620700337,
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:28 GMT",
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
          "In High Value": 1620700337,
          "In Spanish Speaking": 1620700337,
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:29 GMT",
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
          "In High Value": 1620700337,
          "In Spanish Speaking": 1620700337,
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:29 GMT",
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
    "Tue, 11 May 2021 02:32:30 GMT",
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
          "In High Value": 1620700337,
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:40 GMT",
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
          "In High Value": 1620700337,
          created_at: 1620700299,
          id: 1620700277,
          name: 1620700287,
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
      "Tue, 11 May 2021 02:32:41 GMT",
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
          detail: "not found (reference 01F5CM9XNABZVQ1RN74NA90EBP)",
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
      "Tue, 11 May 2021 02:32:42 GMT",
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
          detail: "not found (reference 01F5CM9Y6VT1JHZV4AZN17GMPZ)",
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
      "Tue, 11 May 2021 02:32:42 GMT",
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
    "Tue, 11 May 2021 02:32:43 GMT",
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
    "Tue, 11 May 2021 02:32:43 GMT",
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
          detail: "not found (reference 01F5CMA9DB86QBMRRQM83254MV)",
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
      "Tue, 11 May 2021 02:32:54 GMT",
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
        timestamps: { email: 1620700363, id: 1620700364 },
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
      "Tue, 11 May 2021 02:32:55 GMT",
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
          detail: "not found (reference 01F5CMAAP39QGF5YJ50R0WG389)",
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
      "Tue, 11 May 2021 02:32:55 GMT",
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
    "Tue, 11 May 2021 02:32:56 GMT",
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
        timestamps: { email: 1620700363, id: 1620700364 },
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
      "Tue, 11 May 2021 02:33:06 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:07 GMT",
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
        timestamps: { email: 1620700363, id: 1620700364 },
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
      "Tue, 11 May 2021 02:33:08 GMT",
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
          detail: "not found (reference 01F5CMAQD58GZG34DC0NV8MYG7)",
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
      "Tue, 11 May 2021 02:33:08 GMT",
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
          detail: "not found (reference 01F5CMAQYQ85S8EQRX5K29G26H)",
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
      "Tue, 11 May 2021 02:33:09 GMT",
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
    "Tue, 11 May 2021 02:33:09 GMT",
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
    "Tue, 11 May 2021 02:33:10 GMT",
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
          detail: "not found (reference 01F5CMB3B22TDJDP5Y2P8SA8YC)",
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
      "Tue, 11 May 2021 02:33:20 GMT",
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
        timestamps: { email: 1620700390, id: 1620700391 },
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
      "Tue, 11 May 2021 02:33:21 GMT",
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
        timestamps: { email: 1620700390, id: 1620700391 },
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
      "Tue, 11 May 2021 02:33:22 GMT",
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
        timestamps: { email: 1620700390, id: 1620700391 },
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
      "Tue, 11 May 2021 02:33:23 GMT",
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
        timestamps: { email: 1620700390, id: 1620700391 },
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
      "Tue, 11 May 2021 02:33:23 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:24 GMT",
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
        timestamps: { email: 1620700390, id: 1620700391 },
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
      "Tue, 11 May 2021 02:33:25 GMT",
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
        timestamps: { email: 1620700390, id: 1620700391 },
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
      "Tue, 11 May 2021 02:33:25 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:26 GMT",
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
    "Tue, 11 May 2021 02:33:26 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:37 GMT",
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
          detail: "not found (reference 01F5CMBM8DEE0HXZ8M9FF74E8S)",
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
      "Tue, 11 May 2021 02:33:38 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:39 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:39 GMT",
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
          "In High Value": 1620700376,
          "In Spanish Speaking": 1620700376,
          email: 1620700376,
          id: 1620700377,
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
      "Tue, 11 May 2021 02:33:40 GMT",
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
  .delete("/api/v1/customers/grouparoo-another")
  .once()
  .reply(200, {}, [
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Tue, 11 May 2021 02:33:40 GMT",
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
          detail: "not found (reference 01F5CMC0Z1GBCA8PG6BETR41ZD)",
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
      "Tue, 11 May 2021 02:33:51 GMT",
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
          detail: "not found (reference 01F5CMC1GPNCDGM9GC71NTZS0Y)",
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
      "Tue, 11 May 2021 02:33:51 GMT",
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
          detail: "not found (reference 01F5CMC225DJCYTZ8J8H8993EB)",
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
      "Tue, 11 May 2021 02:33:52 GMT",
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
  .get("/v1/api/customers/grouparoo-ultra-fake/attributes")
  .once()
  .reply(
    404,
    {
      errors: [
        {
          detail: "not found (reference 01F5CMC2SFT6991W1CBGWT8XMY)",
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
      "Tue, 11 May 2021 02:33:53 GMT",
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
          detail: "not found (reference 01F5CMCD9Q5FSZYVKAXKCJYZNJ)",
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
      "Tue, 11 May 2021 02:34:03 GMT",
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
          detail: "not found (reference 01F5CMCDVDYSWR6HAGCE4BHRBQ)",
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
      "Tue, 11 May 2021 02:34:04 GMT",
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
          detail: "not found (reference 01F5CMCEJSHYPYWRMXZ5A831FA)",
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
      "Tue, 11 May 2021 02:34:05 GMT",
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
          detail: "not found (reference 01F5CMCFABRDSFF3RXG2VTMF57)",
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
      "Tue, 11 May 2021 02:34:06 GMT",
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
    "Tue, 11 May 2021 02:34:06 GMT",
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
    "Tue, 11 May 2021 02:34:06 GMT",
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
        timestamps: { email: 1620700446, id: 1620700447 },
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
      "Tue, 11 May 2021 02:34:17 GMT",
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
        attributes: { email: "grouparoo@demo.com", id: "grouparoo" },
        timestamps: { email: 1620700446, id: 1620700447 },
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
      "Tue, 11 May 2021 02:34:18 GMT",
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
          detail: "not found (reference 01F5CMCVSRF3ZDJM6XX9QJV34W)",
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
      "Tue, 11 May 2021 02:34:18 GMT",
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
          detail: "not found (reference 01F5CMCWB9G4CCR3ZEMX7XBD1C)",
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
      "Tue, 11 May 2021 02:34:19 GMT",
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
        attributes: { email: "grouparoo@demo.com", id: "grouparoo" },
        timestamps: { email: 1620700446, id: 1620700447 },
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
      "Tue, 11 May 2021 02:34:19 GMT",
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
    "Tue, 11 May 2021 02:34:20 GMT",
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
          detail: "not found (reference 01F5CMD7THEXD417Z6Y8H5QY8V)",
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
      "Tue, 11 May 2021 02:34:31 GMT",
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
          detail: "not found (reference 01F5CMD8CJMSNZJ2E7A674KWX0)",
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
      "Tue, 11 May 2021 02:34:31 GMT",
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
    "Tue, 11 May 2021 02:34:32 GMT",
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
    "Tue, 11 May 2021 02:34:32 GMT",
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
    "Tue, 11 May 2021 02:34:32 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
