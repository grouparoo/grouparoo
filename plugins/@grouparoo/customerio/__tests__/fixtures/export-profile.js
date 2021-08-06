const nock = require("nock");

nock("https://track.customer.io:443", { encodedQueryParams: true })
  .delete("/api/v1/customers/grouparoo")
  .once()
  .reply(200, {}, [
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:00:56 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:00:56 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:00:57 GMT",
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
          detail: "not found (reference 01FCCC6WTYJ24V0W2BX96BW0GT)",
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
      "Fri, 06 Aug 2021 00:01:07 GMT",
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
          detail: "not found (reference 01FCCC6X1PE48ZGV37QJT55X2Z)",
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
      "Fri, 06 Aug 2021 00:01:07 GMT",
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
          detail: "not found (reference 01FCCC6X7QVF3EDAWTRH5AZ0D9)",
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
      "Fri, 06 Aug 2021 00:01:07 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:01:07 GMT",
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
        attributes: { cio_id: "b79e0600840b850b", id: "grouparoo" },
        timestamps: { cio_id: 1628208069, id: 1628208069 },
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
      "Fri, 06 Aug 2021 00:01:18 GMT",
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
        attributes: { cio_id: "b79e0600840b850b", id: "grouparoo" },
        timestamps: { cio_id: 1628208069, id: 1628208069 },
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
      "Fri, 06 Aug 2021 00:01:18 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:01:18 GMT",
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
          cio_id: "b79e0600840b850b",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "298",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:28 GMT",
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
          cio_id: "b79e0600840b850b",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "298",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:28 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:01:28 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "348",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:39 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "348",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:39 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "348",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:39 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "348",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:39 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "grouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208078,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "348",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:40 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:01:40 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208100,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "351",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:50 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208100,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "351",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:50 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          age: 1628208078,
          cio_id: 1628208069,
          created_at: 1628208088,
          email: 1628208100,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "351",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:01:50 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:01:50 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "272",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:01 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "272",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:01 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "272",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:01 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:01 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1628208121,
          "In Spanish Speaking": 1628208121,
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "384",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:12 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1628208121,
          "In Spanish Speaking": 1628208121,
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "384",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:12 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1628208121,
          "In Spanish Speaking": 1628208121,
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "384",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:12 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:12 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1628208121,
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "322",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:22 GMT",
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
          cio_id: "b79e0600840b850b",
          created_at: "1614034983",
          id: "grouparoo",
          name: "Grouparoo Kangaroo",
        },
        timestamps: {
          "In High Value": 1628208121,
          cio_id: 1628208069,
          created_at: 1628208088,
          id: 1628208069,
          name: 1628208078,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "322",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:23 GMT",
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
          detail: "not found (reference 01FCCC9714MB001EZ78TSNP64F)",
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
      "Fri, 06 Aug 2021 00:02:23 GMT",
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
          detail: "not found (reference 01FCCC979EGVZVS9BE1N3AYKFJ)",
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
      "Fri, 06 Aug 2021 00:02:23 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:23 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:23 GMT",
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
          detail: "not found (reference 01FCCC9HEHTFAHF9MPAR3D300P)",
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
      "Fri, 06 Aug 2021 00:02:34 GMT",
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
        attributes: {
          cio_id: "b79e0600850b860b",
          email: "grouparoo@demo.com",
          id: "grouparoo-new",
        },
        timestamps: { cio_id: 1628208144, email: 1628208143, id: 1628208144 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "232",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:34 GMT",
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
          detail: "not found (reference 01FCCC9HSS6Y6ASAJGMBP81J63)",
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
      "Fri, 06 Aug 2021 00:02:34 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:34 GMT",
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
        attributes: {
          cio_id: "b79e0600850b860b",
          email: "grouparoo@demo.com",
          id: "grouparoo-new",
        },
        timestamps: { cio_id: 1628208144, email: 1628208143, id: 1628208144 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "232",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:44 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:44 GMT",
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
        attributes: {
          cio_id: "b79e0600850b860b",
          email: "grouparoo@demo.com",
          id: "grouparoo-new",
        },
        timestamps: { cio_id: 1628208144, email: 1628208143, id: 1628208144 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "232",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:45 GMT",
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
          detail: "not found (reference 01FCCC9WG1JQNXB7YEAZZ7F5NV)",
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
      "Fri, 06 Aug 2021 00:02:45 GMT",
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
          detail: "not found (reference 01FCCC9WQNGMYMG69Q0YBG91MS)",
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
      "Fri, 06 Aug 2021 00:02:45 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:45 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:45 GMT",
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
          detail: "not found (reference 01FCCCA6XCG629WFJRR1D76RC3)",
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
      "Fri, 06 Aug 2021 00:02:56 GMT",
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
          cio_id: "b79e0600870b880b",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208166, email: 1628208165, id: 1628208166 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "227",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:56 GMT",
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
          cio_id: "b79e0600870b880b",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208166, email: 1628208165, id: 1628208166 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "227",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:56 GMT",
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
          cio_id: "b79e0600870b880b",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208166, email: 1628208165, id: 1628208166 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "227",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:56 GMT",
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
          cio_id: "b79e0600870b880b",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208166, email: 1628208165, id: 1628208166 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "227",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:56 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:57 GMT",
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
          cio_id: "b79e0600870b880b",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208166, email: 1628208165, id: 1628208166 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "227",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:57 GMT",
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
          cio_id: "b79e0600870b880b",
          email: "notgrouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208166, email: 1628208165, id: 1628208166 },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "227",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:57 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:02:57 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:02:57 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:03:08 GMT",
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
          detail: "not found (reference 01FCCCAJWPSQPG8JPKB0NCW4NC)",
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
      "Fri, 06 Aug 2021 00:03:08 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:03:08 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:03:08 GMT",
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
          cio_id: "b79e0600860b870b",
          email: "grouparoo@demo.com",
          id: "grouparoo-another",
        },
        timestamps: {
          "In High Value": 1628208154,
          "In Spanish Speaking": 1628208154,
          cio_id: 1628208155,
          email: 1628208154,
          id: 1628208155,
        },
        unsubscribed: false,
        devices: [],
      },
    },
    [
      "content-length",
      "352",
      "content-type",
      "application/json; charset=utf-8",
      "date",
      "Fri, 06 Aug 2021 00:03:09 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:09 GMT",
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
          detail: "not found (reference 01FCCCAXP1RCFXCY3Q4R82FT2N)",
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
      "Fri, 06 Aug 2021 00:03:19 GMT",
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
          detail: "not found (reference 01FCCCAXYKHPCR3EXHG26DW04F)",
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
      "Fri, 06 Aug 2021 00:03:19 GMT",
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
          detail: "not found (reference 01FCCCAY6N3F6DXZKK0FJB0AMK)",
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
      "Fri, 06 Aug 2021 00:03:19 GMT",
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
          detail: "not found (reference 01FCCCAYESRM5PDB2TKAG2WGRY)",
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
      "Fri, 06 Aug 2021 00:03:20 GMT",
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
          detail: "not found (reference 01FCCCB8F6H7J1ZMXCSP660EV1)",
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
      "Fri, 06 Aug 2021 00:03:30 GMT",
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
          detail: "not found (reference 01FCCCB8QN5MA23D296Y24D3D5)",
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
      "Fri, 06 Aug 2021 00:03:30 GMT",
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
          detail: "not found (reference 01FCCCB8ZGNX241TSRJEDHC8V0)",
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
      "Fri, 06 Aug 2021 00:03:30 GMT",
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
          detail: "not found (reference 01FCCCB95DCK1PYT0XDRXD3KA2)",
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
      "Fri, 06 Aug 2021 00:03:31 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:31 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:31 GMT",
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
          cio_id: "b79e0600880b890b",
          email: "grouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208212, email: 1628208211, id: 1628208212 },
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
      "Fri, 06 Aug 2021 00:03:41 GMT",
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
          cio_id: "b79e0600880b890b",
          email: "grouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208212, email: 1628208211, id: 1628208212 },
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
      "Fri, 06 Aug 2021 00:03:41 GMT",
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
          detail: "not found (reference 01FCCCBKTP0R1Z98VW7SRGDAKB)",
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
      "Fri, 06 Aug 2021 00:03:42 GMT",
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
          detail: "not found (reference 01FCCCBM2R8TE7PPKWVGZW7J13)",
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
      "Fri, 06 Aug 2021 00:03:42 GMT",
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
          cio_id: "b79e0600880b890b",
          email: "grouparoo@demo.com",
          id: "grouparoo",
        },
        timestamps: { cio_id: 1628208212, email: 1628208211, id: 1628208212 },
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
      "Fri, 06 Aug 2021 00:03:42 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:42 GMT",
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
          detail: "not found (reference 01FCCCBYDR9PMVTB4JNV5F2ZZC)",
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
      "Fri, 06 Aug 2021 00:03:52 GMT",
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
          detail: "not found (reference 01FCCCBYP1X63W403KJBPDS9R9)",
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
      "Fri, 06 Aug 2021 00:03:53 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:53 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:53 GMT",
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
    "Access-Control-Allow-Origin",
    "*",
    "Cache-Control",
    "no-cache, no-store, must-revalidate, max-age=0",
    "Content-Length",
    "3",
    "Content-Type",
    "application/json; charset=utf-8",
    "Date",
    "Fri, 06 Aug 2021 00:03:53 GMT",
    "Status",
    "200 OK",
    "Via",
    "1.1 google",
    "Alt-Svc",
    "clear",
    "Connection",
    "close",
  ]);
