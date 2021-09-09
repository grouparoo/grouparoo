const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
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
      instance: "67ee5d18-29de-49a4-91a5-7e52824a2086",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "67ee5d18-29de-49a4-91a5-7e52824a2086",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:14 GMT",
      "Connection",
      "close",
    ]
  );
nock(" https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/tags", {
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
      instance: "8195af75-c935-4177-a925-2a9a2a3ae42a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "8195af75-c935-4177-a925-2a9a2a3ae42a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/tags", {
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
    "91ca9d15-585e-46f1-9178-8284e00fd7b1",
    "Date",
    "Fri, 23 Apr 2021 14:07:15 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "22da7bfd-8728-44c3-afac-0e952a0dabe0",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "22da7bfd-8728-44c3-afac-0e952a0dabe0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 14:07:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/tags", {
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
      instance: "2dfc08e3-b4a7-4160-bc4e-36304815ddf5",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "2dfc08e3-b4a7-4160-bc4e-36304815ddf5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/tags", {
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
    "9edf48a1-f2cc-47e0-a0e4-5a3a63058fb4",
    "Date",
    "Fri, 23 Apr 2021 14:07:16 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "9d37688c-eefe-4344-9681-801a928d041c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "9d37688c-eefe-4344-9681-801a928d041c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 14:07:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c/tags", {
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
      instance: "a70c7bf2-209f-431f-ae17-2a1befb93459",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "a70c7bf2-209f-431f-ae17-2a1befb93459",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "3fe2d58a-e9b2-43d8-aef4-f3d46b1d282c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "3fe2d58a-e9b2-43d8-aef4-f3d46b1d282c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "e0bc236e-e396-4c3c-8e7f-1a6fda96bc32",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e0bc236e-e396-4c3c-8e7f-1a6fda96bc32",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "2e0203a5-f776-4d3b-bdf1-c8d51e63da41",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "2e0203a5-f776-4d3b-bdf1-c8d51e63da41",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c48e06de-d99f-425b-aadd-05a7cdfafdea",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c48e06de-d99f-425b-aadd-05a7cdfafdea",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:18+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3168",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1383f734-2906-46ef-a1ad-546ef06a36e2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "bdfeecec-05cb-40eb-aade-6e043f1f10f6",
    "Date",
    "Fri, 23 Apr 2021 14:07:18 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:18+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3168",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "cc67b116-41e6-4ebd-b448-6a62a1e2458b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:18+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3168",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bdfdde5c-6d7f-4848-935f-52e4d144a352",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: {
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      FNAME: "Caio",
      LNAME: "Silveira",
      PHONE: "+5583999999999",
    },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:19+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3190",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "508a802a-9300-4635-a91e-5944295a94f1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "1093d8fe-958c-49b6-864b-d121184e08e4",
    "Date",
    "Fri, 23 Apr 2021 14:07:19 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:19+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3190",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "c6aa51f9-206f-4106-9281-0e30caa814e7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    status: "unsubscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:20+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3243",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "cb134207-f95c-49c1-b41f-57450cb52f7b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:20+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3243",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "147b2f47-3a73-4451-8d32-d9cf3b315d4c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:20+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3243",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b74e69d0-5b92-4491-a597-c88d1069f3c7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: {
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      FNAME: "Samba",
    },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:21+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3244",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "7e3c061e-80b7-47dd-85d2-fdc96e99bd5f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "a9b0143f-c03c-4cfe-a529-352c4b72e570",
    "Date",
    "Fri, 23 Apr 2021 14:07:21 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "unsubscribed",
      unsubscribe_reason: "N/A (Unsubscribed by admin)",
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:21+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3244",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "82958f5d-914b-4908-83d2-b98724bb6a5a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3191",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a0d58f44-bac9-4a0f-bf8c-c515cc02c166",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3191",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "148807fa-77d8-46b9-9281-0c82b037fbb1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Samba",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999999",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3191",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "8ff491bc-9994-4260-be5b-b616fb782ac1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: {
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "+5583999999998",
      LTV: 15.5,
    },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3192",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9adc1df7-9744-463f-8b5f-6ca0fb7a1690",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9730f98f-52c2-4952-923f-007e7fa11402",
    "Date",
    "Fri, 23 Apr 2021 14:07:23 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3192",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "42adc4fa-9def-43d2-b51a-a231acfc85d6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3192",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ef39a6d7-c743-4619-b5bc-507086c1d1a3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: {
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "000",
      LTV: "AAAAA",
    },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Your merge fields were invalid.",
      instance: "ebb652d6-4c1f-4856-a2e2-577f7b4bb4f2",
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
      "ebb652d6-4c1f-4856-a2e2-577f7b4bb4f2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "Silveira",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: 15.5,
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:22+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3192",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "3d2de27b-cc50-4d5b-bc98-27a42e416645",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: {
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      FNAME: "",
      LNAME: "",
      PHONE: "",
      LTV: "",
    },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:24+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3164",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1de4ed18-d45f-4368-91cc-d94c04c0999c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "292d42d2-935c-47d3-b09a-c8c88b920d8a",
    "Date",
    "Fri, 23 Apr 2021 14:07:24 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:24+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3164",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2db468ba-79c3-4bcd-ad79-04dbe24c48c4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:24+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3164",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0562b2c0-7b6b-411f-b1c8-ff24e372e1c2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: { email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com" },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:24+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3164",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d1e7f03d-44e9-4a5b-9eed-8b4ec2b29b31",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
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
    "f21d1c7b-498f-4228-a15e-b324c0a2d57f",
    "Date",
    "Fri, 23 Apr 2021 14:07:25 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:25+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419517, name: "list two" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3229",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5075b637-955b-4b4a-af95-b49e080d70b0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:25+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419517, name: "list two" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3229",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fea24dba-e47e-4260-b426-a4fb55f443fe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: { email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com" },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:25+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419517, name: "list two" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3229",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b9703ca6-5da0-4223-b545-61956af1b7e3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [{ name: "list two", status: "inactive" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "8a6628a7-856b-464e-b88b-98abed33cefd",
    "Date",
    "Fri, 23 Apr 2021 14:07:26 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:26+00:00",
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
      tags: [{ id: 4419513, name: "list one" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3196",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "260baf88-48c1-4252-b0ad-cfbbda65a8db",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:26+00:00",
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
      tags: [{ id: 4419513, name: "list one" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3196",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2b403299-1028-45dd-940f-e9b6c099af6d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: { email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com" },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:26+00:00",
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
      tags: [{ id: 4419513, name: "list one" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3196",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b37588ee-c317-4dae-ac4c-c6deac316ebb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
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
    "10a859f0-50e4-4b43-9b49-638e66db969d",
    "Date",
    "Fri, 23 Apr 2021 14:07:27 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:27+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3264",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "8c70190f-a820-4b6c-b6b3-c28fc218d8ab",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:27+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3264",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bd64693b-5a66-4bb1-a02c-2dd2dcd8a804",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    merge_fields: { email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com" },
    email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:27+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3264",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "6d4eedef-1bfa-4dfe-9c5e-9975edb69c00",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "240167a6-1f7f-4488-8881-d0f4b760abf8",
    "Date",
    "Fri, 23 Apr 2021 14:07:28 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:27+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3264",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9f008f4b-d46a-4f3b-b3c6-6c32335df450",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    200,
    {
      id: "073b8a408bd043694571390b60d281e8",
      email_address: "kqpedag5p3f79l3hxw9nv@grouparoo.com",
      unique_email_id: "c6c1ab0a00",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:27+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/actions/delete-permanent",
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
      "3264",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0d626639-240c-4e04-8791-2c1bca15dc4f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c34f20a4-f10c-4b2f-b6f5-cbb57e9bc926",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c34f20a4-f10c-4b2f-b6f5-cbb57e9bc926",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {
    email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "2e9aa6ac69ee2157d3c63fd3d50e2edb",
      email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
      unique_email_id: "5fdc25d750",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:29+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/actions/delete-permanent",
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
      "3265",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2aedaf29-68ad-4975-993b-61afe445f588",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {})
  .once()
  .reply(
    200,
    {
      id: "2e9aa6ac69ee2157d3c63fd3d50e2edb",
      email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
      unique_email_id: "5fdc25d750",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:29+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/actions/delete-permanent",
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
      "3265",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d77255c7-ef17-43dd-bd02-91feb6ccef32",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {
    merge_fields: { email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com" },
    email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "2e9aa6ac69ee2157d3c63fd3d50e2edb",
      email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
      unique_email_id: "5fdc25d750",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:29+00:00",
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
        { id: 4419517, name: "list two" },
        { id: 4419521, name: "list three" },
        { id: 4419513, name: "list one" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/actions/delete-permanent",
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
      "3265",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9999cece-88fb-44fb-9beb-3b0810a6d496",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/tags", {
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
    "9fce11f6-eacd-4ddb-8724-4526e06ffdec",
    "Date",
    "Fri, 23 Apr 2021 14:07:30 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {})
  .once()
  .reply(
    200,
    {
      id: "2e9aa6ac69ee2157d3c63fd3d50e2edb",
      email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
      unique_email_id: "5fdc25d750",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:30+00:00",
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
      tags: [{ id: 4419513, name: "list one" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/actions/delete-permanent",
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
      "3197",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "555e6207-00a3-4f73-9fcb-bcb772537723",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {})
  .once()
  .reply(
    200,
    {
      id: "2e9aa6ac69ee2157d3c63fd3d50e2edb",
      email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
      unique_email_id: "5fdc25d750",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:30+00:00",
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
      tags: [{ id: 4419513, name: "list one" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/actions/delete-permanent",
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
      "3197",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a8d43daa-66da-4d74-b667-e53e5dd7b07e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "86fae1c1-699f-441e-b748-7751a1f25fa4",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "86fae1c1-699f-441e-b748-7751a1f25fa4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {})
  .once()
  .reply(
    200,
    {
      id: "2e9aa6ac69ee2157d3c63fd3d50e2edb",
      email_address: "wgtkcqvl2vler20t39t13j@grouparoo.com",
      unique_email_id: "5fdc25d750",
      web_id: 387991233,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:18+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:30+00:00",
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
      tags: [{ id: 4419513, name: "list one" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/actions/delete-permanent",
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
      "3197",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "af5c17af-290a-455f-886b-8b77d985e89b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991233>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:33+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:15+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3180",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0b0be693-7edd-4eb1-9728-c8b40455c1f9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {
    email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail:
        "The resource submitted could not be validated. For field-specific details, see the 'errors' array.",
      instance: "e534b8ca-c438-4ddb-acbb-fb0d87c6da7c",
      errors: [
        {
          field: "email address",
          message:
            '"tejw6v6lp29nn5k2xo8ww@grouparoo.com" is already in this list with a status of "subscribed".',
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "411",
      "X-Request-Id",
      "e534b8ca-c438-4ddb-acbb-fb0d87c6da7c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/tags", {
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
    "278769f3-2efa-4cf4-8efa-843d4abacf25",
    "Date",
    "Fri, 23 Apr 2021 14:07:32 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:33+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:15+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3180",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d82e3ec4-4980-4651-847d-1e3437e75b9e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      FNAME: "Evan",
      PHONE: "+5583999999998",
    },
    email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:32+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3182",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e7481bc9-8213-4878-876e-51bd8f8b34af",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/tags", {
    tags: [
      { name: "list one", status: "active" },
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
    "92499677-9954-4ba2-b107-e16bb6546a44",
    "Date",
    "Fri, 23 Apr 2021 14:07:33 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:33+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3316",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "6f90a955-9411-4912-8e55-fb6d2b856488",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:33 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:33+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3316",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5fc85c9a-d41e-4ad4-a7c8-35ea87562579",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:33 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "a19f7248-a1ba-4c98-a0ce-42b5381ff0c7",
    "Date",
    "Fri, 23 Apr 2021 14:07:34 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:34+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3314",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ebe9a2bf-9c4d-4651-9820-8749145cb083",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Evan",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:34+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3314",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e2ffc15a-c84a-4e9d-834b-7f510732f56c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:34+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:34+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3316",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2ce90025-7ab3-40d5-9902-e1ec6b288621",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/tags", {
    tags: [{ name: "list three", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "aca836b5-caf3-4e54-bda2-d09f459a6ec1",
    "Date",
    "Fri, 23 Apr 2021 14:07:35 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:34+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:35+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3316",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9d25c4e2-41d0-4178-a62a-b0bf0ef8b075",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:35 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "ef13818a-dff6-4445-88a4-57cfe0a3b83a",
    "Date",
    "Fri, 23 Apr 2021 14:07:35 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:34+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:35+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3314",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a6c04a73-3d1a-40eb-b48f-e4b21e154d1a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:34+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:35+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3314",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "77210fb7-2426-471d-89e8-95239086189f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "05b07f2f-fdbc-4793-8990-018fcf8a3208",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "05b07f2f-fdbc-4793-8990-018fcf8a3208",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 14:07:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    200,
    {
      id: "b8f9e9c51160ff205370948d92c9d191",
      email_address: "tejw6v6lp29nn5k2xo8ww@grouparoo.com",
      unique_email_id: "9cf34b551a",
      web_id: 387991197,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Caio",
        LNAME: "",
        ADDRESS: "",
        PHONE: "+5583999999998",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:34+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:35+00:00",
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
        { id: 4419513, name: "list one" },
        { id: 4419521, name: "list three" },
        { id: 4419517, name: "list two" },
        { id: 4419525, name: "list four" },
      ],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/actions/delete-permanent",
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
      "3314",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f66dcf66-6884-4e20-b92c-27fa6cab3d51",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991197>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "6ee5f656-5c7c-429e-aa57-315acdc10acd",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "6ee5f656-5c7c-429e-aa57-315acdc10acd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "bc39af73-3946-4458-818a-3abd32e1fdbf",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "bc39af73-3946-4458-818a-3abd32e1fdbf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "ugz7cdsekiqq4fzawrclnk@grouparoo.com",
      FNAME: "Carlos",
    },
    email_address: "ugz7cdsekiqq4fzawrclnk@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "47717a22aefa4c68ce93f8bf922c9a61",
      email_address: "ugz7cdsekiqq4fzawrclnk@grouparoo.com",
      unique_email_id: "a83592cb25",
      web_id: 387991237,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carlos",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:37+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:37+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/actions/delete-permanent",
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
      "3171",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "7ea00f14-6006-439d-bad4-64e8c4982d18",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991237>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/tags", {
    tags: [{ name: "list four", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "16a25de3-520c-41b6-b7d2-a7217234e8b8",
    "Date",
    "Fri, 23 Apr 2021 14:07:38 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61", {})
  .once()
  .reply(
    200,
    {
      id: "47717a22aefa4c68ce93f8bf922c9a61",
      email_address: "ugz7cdsekiqq4fzawrclnk@grouparoo.com",
      unique_email_id: "a83592cb25",
      web_id: 387991237,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carlos",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:37+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:37+00:00",
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
      tags: [{ id: 4419525, name: "list four" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/actions/delete-permanent",
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
      "3204",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "09670c11-12a9-422e-b7ef-eac654a29ebb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991237>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:44+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:16+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3167",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b7eb0a9e-08c1-4a41-bc3d-32d56e103e18",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "54a0d557-93e1-49f8-964d-98a9970e7c4e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "54a0d557-93e1-49f8-964d-98a9970e7c4e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "ce2bf6e6-4436-463d-a898-cd722fc39873",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "ce2bf6e6-4436-463d-a898-cd722fc39873",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:44+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:16+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3167",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1ca86016-4261-4b96-b85f-604f2a12a9e2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:44+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:16+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3167",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ef58c57e-86cc-4d83-8d9d-e9d2fc07acf9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "073d7fc5-4909-4003-a2d8-d247ef37ccd1",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "073d7fc5-4909-4003-a2d8-d247ef37ccd1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:44+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:16+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3167",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "cb5513e9-f17d-4b33-861d-78b8c678ba39",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "e1fb2646-4ce1-4d46-ac97-28e755f7248d",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e1fb2646-4ce1-4d46-ac97-28e755f7248d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "575408b6-82d1-44dd-b1eb-686ab03415da",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "575408b6-82d1-44dd-b1eb-686ab03415da",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:00:44+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:16+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3167",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a640a98a-a3ff-4ceb-a5a1-1cb0d28f95a2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {
    email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bb64c8b0-937c-459e-9f3a-92b93185789f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0f5c5ce2-c316-4ab7-b28b-7e74186f2f78",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {
    merge_fields: {
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      FNAME: "Jake",
    },
    email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "aaeae0a6-ee4c-47d7-8cec-ee799f26295f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d7088643-1f13-4be6-8a9a-07995da40338",
    "Date",
    "Fri, 23 Apr 2021 14:07:42 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ed2f576b-805b-49fc-84e4-1ca0c980cca6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "03618a27-7305-4d0e-80b6-520af3298b4e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "03618a27-7305-4d0e-80b6-520af3298b4e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "28d1bee9-ecaa-4c7c-adb9-9d90568725ea",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "41d3981a-e6ee-451a-bf79-131c0ca5f1aa",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "41d3981a-e6ee-451a-bf79-131c0ca5f1aa",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "bd3a097b-3525-490e-8673-56a4c50cac22",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "bd3a097b-3525-490e-8673-56a4c50cac22",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bd51091e-901b-4be9-a368-b25e61d42337",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {
    email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "dbf91de7-9d28-4237-bd5a-ec1a78d4906c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "dbf91de7-9d28-4237-bd5a-ec1a78d4906c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Jake",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:41+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d319dd93-d30a-4ec4-a06e-b92b04fd38c5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {
    merge_fields: {
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      FNAME: "Carl",
    },
    email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:44+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "78b9427a-b056-4b80-b39d-713a60661b58",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "8271d3b7-e0b4-44fa-ab47-bd015be458b3",
    "Date",
    "Fri, 23 Apr 2021 14:07:44 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:44+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "94bbb9ea-5c70-4802-9518-0c4e6eae57c6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1d95dcd2-351b-4610-89c2-21e6077593ee",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1d95dcd2-351b-4610-89c2-21e6077593ee",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:44+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1e6429d5-951c-48c1-8677-b8a5a834fd55",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "72151950-17b2-476d-b761-7f3ddea697af",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "72151950-17b2-476d-b761-7f3ddea697af",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "8f0390de-a865-40b5-8714-e4f0ff90a39c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "8f0390de-a865-40b5-8714-e4f0ff90a39c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:44+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3169",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b7dea437-aba3-446d-b60c-25bb1e3bc60d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {
    email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "8e70fc5e-c8ca-463d-a7e5-1505daeffdfe",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "8e70fc5e-c8ca-463d-a7e5-1505daeffdfe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "41e7e405-5ab7-4c1d-8544-08e5c72f3ccd",
    "Date",
    "Fri, 23 Apr 2021 14:07:47 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    200,
    {
      id: "712ccca18ece61364dbf84e5bda16729",
      email_address: "elb9gx0zrr8rrwmm2ffh4j@grouparoo.com",
      unique_email_id: "63727de888",
      web_id: 387991201,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Carl",
        LNAME: "",
        ADDRESS: "",
        PHONE: "",
        USERID: "",
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.20",
      timestamp_opt: "2021-04-23T14:07:41+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T14:07:47+00:00",
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
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "update",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/actions/delete-permanent",
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
      "3167",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "98cb0a6c-6638-4f21-9533-bff49ad846e5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387991201>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 14:07:47 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "66092011-ddcd-4a87-a3fe-51e5ea2dbaff",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "66092011-ddcd-4a87-a3fe-51e5ea2dbaff",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:48 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/594f803b380a41396ed63dca39503542", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b649ce0b-bed5-485c-988f-ac282147644b",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b649ce0b-bed5-485c-988f-ac282147644b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:48 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
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
      instance: "d7ef27a8-f1ce-4a5e-94ee-f6e5aea9a785",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "d7ef27a8-f1ce-4a5e-94ee-f6e5aea9a785",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:48 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/b48def645758b95537d4424c84d1a9ff", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "4e82aa24-e621-4963-9976-f659f2d5ba33",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "4e82aa24-e621-4963-9976-f659f2d5ba33",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
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
      instance: "4508ae93-51a1-4c26-b319-ae897aef1827",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "240",
      "X-Request-Id",
      "4508ae93-51a1-4c26-b319-ae897aef1827",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073b8a408bd043694571390b60d281e8/tags", {
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
      instance: "f01591df-0a6c-4780-a2c7-3587d45f5584",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "f01591df-0a6c-4780-a2c7-3587d45f5584",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb/tags", {
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
    "c5fb21fb-3efc-4aa4-bff6-24f1057b3c95",
    "Date",
    "Fri, 23 Apr 2021 14:07:49 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/2e9aa6ac69ee2157d3c63fd3d50e2edb", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "166c587d-768a-4bf1-8e06-728d6009a37d",
    "Date",
    "Fri, 23 Apr 2021 14:07:50 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191/tags", {
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
    "19eb9a92-c59a-4e14-b2f8-ae3f256a7cf0",
    "Date",
    "Fri, 23 Apr 2021 14:07:50 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/b8f9e9c51160ff205370948d92c9d191", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "104dfbda-e7b8-4fd7-8421-298786053dc6",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "104dfbda-e7b8-4fd7-8421-298786053dc6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 14:07:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61/tags", {
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
    "a05d757f-4b42-4ffd-9672-1d20a1e95509",
    "Date",
    "Fri, 23 Apr 2021 14:07:51 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/47717a22aefa4c68ce93f8bf922c9a61", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d7df6c30-abd7-468e-bc50-efb37c190f4c",
    "Date",
    "Fri, 23 Apr 2021 14:07:51 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729/tags", {
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
    "d2b18bb2-4745-4199-8418-132def4e6eab",
    "Date",
    "Fri, 23 Apr 2021 14:07:51 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/712ccca18ece61364dbf84e5bda16729", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "f3d47d46-87d0-4995-8599-a9f97aea1b65",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "f3d47d46-87d0-4995-8599-a9f97aea1b65",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 14:07:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/38dec4ce7270d9fc7db1e03008f4b57c/tags", {
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
      instance: "b8515425-3e4c-4ee4-b1cb-db5c6f060dc6",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b8515425-3e4c-4ee4-b1cb-db5c6f060dc6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 14:07:52 GMT",
      "Connection",
      "close",
    ]
  );
