const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1aed3e52-cc16-4ffd-181b-4a93f2f970ed",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1aed3e52-cc16-4ffd-181b-4a93f2f970ed",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "28da64a3-393f-7874-4c1e-f66c3fdb1bb4",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "28da64a3-393f-7874-4c1e-f66c3fdb1bb4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "e149c2cc-2353-ae22-3fbc-bfd8e365e69a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e149c2cc-2353-ae22-3fbc-bfd8e365e69a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "89d898c3-091f-a2be-9eae-f7bfa9d88fb7",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "89d898c3-091f-a2be-9eae-f7bfa9d88fb7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "43c36c5e-cd24-c6bf-59a6-427f3722bfcc",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "43c36c5e-cd24-c6bf-59a6-427f3722bfcc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "4a6225c3-0e28-a5f4-0127-9d97d3776805",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "4a6225c3-0e28-a5f4-0127-9d97d3776805",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1606b5fa-f21f-a52f-f112-badbf1591014",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1606b5fa-f21f-a52f-f112-badbf1591014",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b36b8e7c-1210-9fae-c976-234590cc30d9",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b36b8e7c-1210-9fae-c976-234590cc30d9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "128db998-afd9-a23b-7b22-392065ee65a3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "128db998-afd9-a23b-7b22-392065ee65a3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "5033dbbb-abb6-2bae-bbda-3fea4b2f5103",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "5033dbbb-abb6-2bae-bbda-3fea4b2f5103",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: {
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:43+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3301",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "377fc327-3cf3-ac6a-018f-9d04c35671fe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "6a2596a5-5ae6-02a1-150d-e823cb7beef9",
    "Date",
    "Tue, 23 Nov 2021 14:54:44 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:43+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3301",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "32267ef2-8589-ab04-bda5-ef656f073dfb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:43+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3301",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "8616a6bb-21df-5267-6be3-95c6b15941a1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: {
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      FNAME: "Caio",
      LNAME: "Silveira",
      PHONE: "+5583999999999",
    },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:45+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3332",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bcf28a58-b08d-9a2a-0177-2831f797c391",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "7ffc7894-5ceb-8716-d939-2b200def1874",
    "Date",
    "Tue, 23 Nov 2021 14:54:46 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:45+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3332",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "c6bdabb8-88eb-3f56-c24f-6245a4f8e117",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    status: "unsubscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:46+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3385",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ff62d912-0ddc-b2f4-23cf-b3838ec53cfd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:47 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:46+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3385",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "af04fa1e-63cf-527e-cb68-811c584ee16c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:47 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:46+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3385",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "24d3b67f-d672-02da-5118-cea176d1d216",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:47 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: {
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      FNAME: "Samba",
    },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Samba Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:48+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3387",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9b3e3ed5-4aa2-e868-305c-deae4dba8ce2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:48 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "df4918a8-77f8-9740-911e-e9fbcf01bd3d",
    "Date",
    "Tue, 23 Nov 2021 14:54:48 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Samba Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:48+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3387",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b6113be2-ad14-cbe5-1276-4dc480d1d07c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Samba Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:49+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3334",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "77b03ceb-c8d7-7a33-f729-e8063da37c25",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Samba Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:49+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3334",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f24c2f1d-4eb5-3718-3ad0-b7a74a0bee83",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Samba Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:49+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3334",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1c0a213d-3653-bb95-d7c0-232ba1505dbd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: {
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "+5583999999998",
      LTV: 15.5,
      JOINED_AT: "1980-12-21T00:00:00.000Z",
    },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:50+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3344",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1a450f8a-2f9a-b654-2f99-3d2956f34f34",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:51 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d1b2212c-e1cc-cc73-f266-bfba3f7a4e09",
    "Date",
    "Tue, 23 Nov 2021 14:54:51 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:50+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3344",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ebc2967b-9788-7cd1-5c79-f7de94e800dd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:51 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:50+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3344",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "7be6d86b-478a-d6ae-cb22-37e2515abbef",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: {
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "000",
      LTV: "AAAAA",
    },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Your merge fields were invalid.",
      instance: "e2534a5b-bd16-2a86-0c85-88fbd0517c21",
      errors: [{ field: "LTV", message: "Please enter a number" }],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "259",
      "X-Request-Id",
      "e2534a5b-bd16-2a86-0c85-88fbd0517c21",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:54:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan Silveira",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:50+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3344",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "59c35d35-7154-f9de-2997-eedd958cef68",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: {
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      FNAME: "",
      LNAME: "",
      PHONE: "",
      LTV: "",
    },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:53+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3303",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "86ce28d1-206d-d1ec-375e-140e76775947",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "b922dc7b-c22f-4012-00b6-817c63279f88",
    "Date",
    "Tue, 23 Nov 2021 14:54:54 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:53+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3303",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d0608f79-6498-9fbc-31f1-b13349b9ed1c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:53+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3303",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "249bdd3f-2687-a582-3939-fb6f5d24b297",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: { email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com" },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:53+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3303",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "20631705-3887-9232-3977-97efdf68e13d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [
      { name: "list one", status: "active" },
      { name: "list two", status: "active" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d5154685-3b64-43f6-dc70-d5cf9aa025d0",
    "Date",
    "Tue, 23 Nov 2021 14:54:55 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:55+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 2,
      tags: [
        { id: 4788452, name: "list one" },
        { id: 4788456, name: "list two" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3368",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d4b31f4d-d95f-4651-1416-3ddf347f0e6e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:55+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 2,
      tags: [
        { id: 4788452, name: "list one" },
        { id: 4788456, name: "list two" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3368",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d5cd0662-1072-1800-a17c-f30273764f08",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: { email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com" },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:55+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 2,
      tags: [
        { id: 4788452, name: "list one" },
        { id: 4788456, name: "list two" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3368",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0532f8ff-95ec-7667-b88b-a8914025aae1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [{ name: "list two", status: "inactive" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "7e5b27e4-7b04-bd76-4a55-44de91a261f3",
    "Date",
    "Tue, 23 Nov 2021 14:54:57 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:57+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3335",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "882c7b58-12cb-9b73-94aa-2d1e3a2c317f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:57+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3335",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d3916a10-e58d-f056-22c6-f0b30de43f02",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: { email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com" },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:57+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3335",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "952c10d7-e4a6-fed8-f8b7-ed561cbbc054",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [
      { name: "list two", status: "active" },
      { name: "list three", status: "active" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "aa707fb4-285a-33af-1791-1132c55d9a08",
    "Date",
    "Tue, 23 Nov 2021 14:54:59 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:59+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3403",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "86c8f9ba-aa47-4f9c-567c-1222a7c5c657",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:54:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:59+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3403",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b071b6d6-a33e-8bb1-bbe9-4226ba0d7876",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    merge_fields: { email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com" },
    email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:59+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3403",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d68b8c83-163a-d01f-9997-35354b078ca1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "c5fa9a0b-da1f-1db2-1c47-b3d741fa54f7",
    "Date",
    "Tue, 23 Nov 2021 14:55:00 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:59+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3403",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ac51c2dd-e7a7-2e07-6a2d-dc1342535eac",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    200,
    {
      id: "d0b75ad6a5aa9f579412236a3ede2df6",
      email_address: "cbo5dxn52fh6ykgt8vdt@grouparoo.com",
      unique_email_id: "ecded3f91e",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:54:59+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3403",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2ca481d6-706b-c2e1-891d-fd48bfdf28ee",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "07fb48f8-ad3a-a05b-ae10-5615c07993d3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "07fb48f8-ad3a-a05b-ae10-5615c07993d3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {
    email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "d00b21fea0a638031fba5330fa9f0991",
      email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
      unique_email_id: "42777d0211",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:02+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3405",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "be0b098e-a037-eacd-a921-ede9f7698217",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {})
  .once()
  .reply(
    200,
    {
      id: "d00b21fea0a638031fba5330fa9f0991",
      email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
      unique_email_id: "42777d0211",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:02+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3405",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ff4fd0ef-5706-3d15-9451-a0faae8966d2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {
    merge_fields: { email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com" },
    email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "d00b21fea0a638031fba5330fa9f0991",
      email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
      unique_email_id: "42777d0211",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:02+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 3,
      tags: [
        { id: 4788456, name: "list two" },
        { id: 4788460, name: "list three" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3405",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ebc7aaa4-b70f-cc15-cfdb-f94d977923eb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/tags", {
    tags: [
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "1096a22b-36c4-196e-f3fb-13a8ebe96a11",
    "Date",
    "Tue, 23 Nov 2021 14:55:03 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {})
  .once()
  .reply(
    200,
    {
      id: "d00b21fea0a638031fba5330fa9f0991",
      email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
      unique_email_id: "42777d0211",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:03+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3337",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "af1b1da7-bc2f-0a51-1502-b0f25ac9b088",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {})
  .once()
  .reply(
    200,
    {
      id: "d00b21fea0a638031fba5330fa9f0991",
      email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
      unique_email_id: "42777d0211",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:03+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3337",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "68baf17e-c1e4-3985-ee7c-302c4406cb28",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "a0a68102-173c-5762-a0ef-173e4722b613",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "a0a68102-173c-5762-a0ef-173e4722b613",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {})
  .once()
  .reply(
    200,
    {
      id: "d00b21fea0a638031fba5330fa9f0991",
      email_address: "vsjsl05tf0o6ah8lb42s3g@grouparoo.com",
      unique_email_id: "42777d0211",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:03+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3337",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f35a77f9-5fa5-60d7-452e-c9abc5ca097b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "86a83087-66b3-bfd9-4356-acf1b4df0c68",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "86a83087-66b3-bfd9-4356-acf1b4df0c68",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991", {
    email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "baew6v32a8n990lp7bpjb@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:05+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3336",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d6e60fe5-b23f-73ce-d22e-ca659f5c9cb0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:05+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3336",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "4746c628-099e-c6f7-0b4c-718fa52f950a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {
    merge_fields: {
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      FNAME: "Evan",
      PHONE: "+5583999999998",
    },
    email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:05+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788452, name: "list one" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3358",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "749f20ac-4ca2-6dc7-e90b-93272feb1c40",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/tags", {
    tags: [
      { name: "list two", status: "active" },
      { name: "list three", status: "active" },
      { name: "list four", status: "active" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "a8174d37-9992-fe31-21c1-bfe06a41e219",
    "Date",
    "Tue, 23 Nov 2021 14:55:06 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:06+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3460",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "17088f0f-a537-fcd6-2d86-cdc01a9bb70f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:06+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3460",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fa24b23f-b6aa-db58-10b5-9d780ddddee8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "4dbee086-0882-bbfb-2639-96e8ced33e0d",
    "Date",
    "Tue, 23 Nov 2021 14:55:07 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan",
      web_id: 400743356,
      email_type: "html",
      status: "archived",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:07+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3458",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "55dacef1-d5ee-d860-adcd-58137b3752b0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Evan",
      web_id: 400743356,
      email_type: "html",
      status: "archived",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:54:43+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:07+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3458",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a4ef020e-9dc4-3710-82d5-8d4ab14327f1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: {
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:08+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:08+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3460",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1869489f-44e9-d7b0-fef1-6b1e00c4481f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/tags", {
    tags: [{ name: "list three", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9a051018-408c-8b71-4fd7-a7ed37dc269c",
    "Date",
    "Tue, 23 Nov 2021 14:55:09 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:08+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:08+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3460",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "62f7bbe2-3b5c-d9f3-0f4c-147c05497a11",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "7e75af92-52b5-a42f-5118-0350a368576d",
    "Date",
    "Tue, 23 Nov 2021 14:55:10 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "archived",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:08+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:09+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3458",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "8c02861f-e478-600d-0b6f-897f329c2ccf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "archived",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:08+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:09+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3458",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "3c1510bd-f0db-8c18-a404-c5215b624418",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail:
        "This list member cannot be removed. Can not archive a contact that is bounced, pending or archived",
      instance: "867f6266-d4ca-f167-0859-6b3f4c50fec0",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "267",
      "X-Request-Id",
      "867f6266-d4ca-f167-0859-6b3f4c50fec0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Tue, 23 Nov 2021 14:55:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    200,
    {
      id: "ed590d29af986e94e490d9f2fecdb9c3",
      email_address: "baew6v32a8n990lp7bpjb@grouparoo.com",
      unique_email_id: "b5d381d510",
      contact_id: "6ad156c2c724752c21797ddd648b4762",
      full_name: "Caio",
      web_id: 400743356,
      email_type: "html",
      status: "archived",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "1980-12-21",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:08+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:09+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 4,
      tags: [
        { id: 4788460, name: "list three" },
        { id: 4788456, name: "list two" },
        { id: 4788464, name: "list four" },
        { id: 4788452, name: "list one" },
      ],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3458",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "28e7d017-bc00-1f76-cdef-c589b71e04fe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743356>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7675447e-68ee-69cf-83ba-cdc4399098a3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7675447e-68ee-69cf-83ba-cdc4399098a3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "88355317-afb6-88d9-1694-d5e72fe8e06a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "88355317-afb6-88d9-1694-d5e72fe8e06a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: {
      email_address: "03gtuz0de83x9ck5xuxn9rr@grouparoo.com",
      FNAME: "Carlos",
    },
    email_address: "03gtuz0de83x9ck5xuxn9rr@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "29ff494903ecf90696a458681b035f7c",
      email_address: "03gtuz0de83x9ck5xuxn9rr@grouparoo.com",
      unique_email_id: "df1e4bdb05",
      contact_id: "0a945217b10779c0611e95e76c8ac176",
      full_name: "Carlos",
      web_id: 400743364,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carlos",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:12+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:12+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3308",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ba177e16-d42b-2ed8-b9ab-0c5ac1ba9490",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743364>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/tags", {
    tags: [{ name: "list four", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "da3ff9b6-2650-ff02-ecde-4787c0e30ff7",
    "Date",
    "Tue, 23 Nov 2021 14:55:12 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c", {})
  .once()
  .reply(
    200,
    {
      id: "29ff494903ecf90696a458681b035f7c",
      email_address: "03gtuz0de83x9ck5xuxn9rr@grouparoo.com",
      unique_email_id: "df1e4bdb05",
      contact_id: "0a945217b10779c0611e95e76c8ac176",
      full_name: "Carlos",
      web_id: 400743364,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carlos",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:12+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:12+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 1,
      tags: [{ id: 4788464, name: "list four" }],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3341",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "495bad3b-cb1a-2b53-86a8-51cb2035785f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743364>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "900d1781-f470-823e-8ad9-42f947ad7c99",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "900d1781-f470-823e-8ad9-42f947ad7c99",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "8f88b7b8-5e57-c824-e199-d0de67fd92e0",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "8f88b7b8-5e57-c824-e199-d0de67fd92e0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "2e942074-0b5f-be5e-cc11-fa26914667e9",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "2e942074-0b5f-be5e-cc11-fa26914667e9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "dabbb415-8f8b-2e7f-b681-a50b99378289",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "dabbb415-8f8b-2e7f-b681-a50b99378289",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b36f2142-fcc8-e9c3-d083-06bcbb3886ae",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b36f2142-fcc8-e9c3-d083-06bcbb3886ae",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "fc36fd9b-f888-bb51-c90f-d368f8e9ee9e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "fc36fd9b-f888-bb51-c90f-d368f8e9ee9e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b7d12bec-5deb-a8bf-7905-6f5f75e302f3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b7d12bec-5deb-a8bf-7905-6f5f75e302f3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "71ca87b4-faa2-d5dd-81ed-329192811500",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "71ca87b4-faa2-d5dd-81ed-329192811500",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "6736b2fe-b226-9280-bd8b-026750245575",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "6736b2fe-b226-9280-bd8b-026750245575",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "e7cfa865-8c26-ccfd-d674-76d1567b083d",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e7cfa865-8c26-ccfd-d674-76d1567b083d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {
    email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "de1b127h5j2e7y8offgx8@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:16+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3294",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0c6003c5-0048-8431-42c9-4f58ff7a9eb1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:16+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3294",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d1aee416-45ed-53c6-6acd-a7293ed623d9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {
    merge_fields: {
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      FNAME: "Jake",
    },
    email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Jake",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:17+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "6b8fcdcb-8a00-9e77-3a26-5195e9badd60",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "ad1c8e5a-1eb7-69c6-f2ef-90b571fb108b",
    "Date",
    "Tue, 23 Nov 2021 14:55:17 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Jake",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:17+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "3d5e3ba7-fd50-6273-f607-23e3a8bb9fe2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "3a0501a7-045e-2a4a-1e26-a2764602271e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "3a0501a7-045e-2a4a-1e26-a2764602271e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Jake",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:17+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e579bf1e-43db-84b4-507c-4d86211c0e5f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "a04769bd-5130-9cac-7139-b7d55d5c0c3c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "a04769bd-5130-9cac-7139-b7d55d5c0c3c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "511582aa-8030-2c81-f341-d8d08e42d015",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "511582aa-8030-2c81-f341-d8d08e42d015",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Jake",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:17+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e5efb5e9-6d6d-6c19-7bf5-248e639a5b3c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {
    email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "de1b127h5j2e7y8offgx8@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "de1b127h5j2e7y8offgx8@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "8b957be7-f35d-8000-bbfc-6d362b716cb5",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "203",
      "X-Request-Id",
      "8b957be7-f35d-8000-bbfc-6d362b716cb5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Jake",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:17+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5d95139f-b3bc-1c57-e2b5-aa2a285d7d40",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {
    merge_fields: {
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      FNAME: "Carl",
    },
    email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Carl",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:20+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2ac07520-2443-1969-ab05-ce2b04c728a8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "e99ad47a-64f9-2fd1-26ae-9cf5e6d8cefa",
    "Date",
    "Tue, 23 Nov 2021 14:55:21 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Carl",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:20+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "4108284e-49f5-9599-ae16-9d2af631695d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c80225a4-5f04-e569-0427-55f70ca2e860",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c80225a4-5f04-e569-0427-55f70ca2e860",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Carl",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:20+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "23e9bec9-b5a0-2a58-e378-28864b354b0c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b1edec38-9f62-2f4c-f206-cf0881002ac7",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b1edec38-9f62-2f4c-f206-cf0881002ac7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "623fb485-c73d-0983-bb6d-64c6e14760ec",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "623fb485-c73d-0983-bb6d-64c6e14760ec",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Carl",
      web_id: 400743368,
      email_type: "html",
      status: "subscribed",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:20+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3302",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f85eeb2e-89bc-6c34-9a1a-b404fb405ecb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {
    email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "de1b127h5j2e7y8offgx8@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "de1b127h5j2e7y8offgx8@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "b14ec9f3-b51a-b4b3-e2c4-5c93c1263c5d",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "203",
      "X-Request-Id",
      "b14ec9f3-b51a-b4b3-e2c4-5c93c1263c5d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "088c1292-a5c4-4834-9a7f-276e1a898721",
    "Date",
    "Tue, 23 Nov 2021 14:55:24 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    200,
    {
      id: "234b8b5f1acc342b1b72915390b02f49",
      email_address: "de1b127h5j2e7y8offgx8@grouparoo.com",
      unique_email_id: "7b7bbef393",
      contact_id: "1aa03697d10506b02c92f1897b705b2a",
      full_name: "Carl",
      web_id: 400743368,
      email_type: "html",
      status: "archived",
      consents_to_one_to_one_messaging: true,
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
        TICKET: "",
        JOINED_AT: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "45.228.145.87",
      timestamp_opt: "2021-11-23T14:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T14:55:23+00:00",
      language: "",
      vip: false,
      email_client: "",
      location: {
        latitude: 0,
        longitude: 0,
        gmtoff: 0,
        dstoff: 0,
        country_code: "",
        timezone: "",
      },
      source: "API - Generic",
      tags_count: 0,
      tags: [],
      list_id: "a36b032126",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3300",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e603c44b-3c31-8d79-0694-a5ef89eae6ff",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400743368>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 14:55:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "d424923d-388c-d321-7b4e-3eb9244ab66e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "d424923d-388c-d321-7b4e-3eb9244ab66e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/594f803b380a41396ed63dca39503542", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "57373f3e-7846-bfaf-bf0a-229cba63a776",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "57373f3e-7846-bfaf-bf0a-229cba63a776",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: { email_address: "AAAAA" },
    email_address: "AAAAA",
    status: "subscribed",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Please provide a valid email address.",
      instance: "dbe21da3-9231-c9e2-f590-fe33b9a6fd06",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "dbe21da3-9231-c9e2-f590-fe33b9a6fd06",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/b48def645758b95537d4424c84d1a9ff", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "90e61d7f-81ca-7528-89d9-896d9531795f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "90e61d7f-81ca-7528-89d9-896d9531795f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: { email_address: "foo@example.com" },
    email_address: "foo@example.com",
    status: "subscribed",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail:
        "foo@example.com looks fake or invalid, please enter a real email address.",
      instance: "83cfc000-5266-1711-7d39-b0747544c39e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "240",
      "X-Request-Id",
      "83cfc000-5266-1711-7d39-b0747544c39e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d0b75ad6a5aa9f579412236a3ede2df6/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7b8fd02b-7eee-8520-f50c-b961215b5b4f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7b8fd02b-7eee-8520-f50c-b961215b5b4f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/d00b21fea0a638031fba5330fa9f0991/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "e0855a78-0f1f-c4ae-f0a7-10e5c37ee5a9",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e0855a78-0f1f-c4ae-f0a7-10e5c37ee5a9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "cba87bb1-388e-e3f6-1adf-5d0c22fc2eec",
    "Date",
    "Tue, 23 Nov 2021 14:55:27 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/ed590d29af986e94e490d9f2fecdb9c3", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail:
        "This list member cannot be removed. Can not archive a contact that is bounced, pending or archived",
      instance: "e3f64ec6-a8a0-8864-3f53-e19f473a2c9a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "267",
      "X-Request-Id",
      "e3f64ec6-a8a0-8864-3f53-e19f473a2c9a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Tue, 23 Nov 2021 14:55:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9032ed60-7d4f-32c9-bbec-9b3f5986c12b",
    "Date",
    "Tue, 23 Nov 2021 14:55:28 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/29ff494903ecf90696a458681b035f7c", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "94bd7d5d-3d09-b12c-faa0-c6bd937e7c54",
    "Date",
    "Tue, 23 Nov 2021 14:55:28 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "1ca51431-914c-15a9-a9bc-0da53cbe314f",
    "Date",
    "Tue, 23 Nov 2021 14:55:29 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/234b8b5f1acc342b1b72915390b02f49", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail:
        "This list member cannot be removed. Can not archive a contact that is bounced, pending or archived",
      instance: "a91c52ed-c431-d07c-09af-90ce376cd75c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "267",
      "X-Request-Id",
      "a91c52ed-c431-d07c-09af-90ce376cd75c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Tue, 23 Nov 2021 14:55:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/0ab16de9ebf15654f5003991d9b61135/tags", {
    tags: [
      { name: "list one", status: "inactive" },
      { name: "list two", status: "inactive" },
      { name: "list three", status: "inactive" },
      { name: "list four", status: "inactive" },
    ],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "bf17d608-f2e2-c0c6-7a40-725b758dff3b",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "bf17d608-f2e2-c0c6-7a40-725b758dff3b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 14:55:29 GMT",
      "Connection",
      "close",
    ]
  );
