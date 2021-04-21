const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
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
      instance: "007f3d7f-aae1-4a1c-8653-c95f82de92c3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "007f3d7f-aae1-4a1c-8653-c95f82de92c3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:29:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags", {
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
    "b4eb9862-1419-47f0-a36c-a021fa0d9d60",
    "Date",
    "Wed, 21 Apr 2021 20:29:49 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "ab38f6c9-d37c-4357-b5be-7b775484f8cc",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "ab38f6c9-d37c-4357-b5be-7b775484f8cc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:29:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags", {
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
    "f07344ec-e08c-499a-bfa8-41106e6631f2",
    "Date",
    "Wed, 21 Apr 2021 20:29:50 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "d5c6bb8f-345a-4a6e-9661-6b3b7ac614e8",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "d5c6bb8f-345a-4a6e-9661-6b3b7ac614e8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:29:51 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/tags", {
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
    "c1f56442-7fd7-4db7-9e26-d6b244f993a4",
    "Date",
    "Wed, 21 Apr 2021 20:29:52 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "ac128c6c-7883-4a54-b163-1bc35c4d6c7e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "ac128c6c-7883-4a54-b163-1bc35c4d6c7e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:29:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags", {
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
    "fb3ce9d2-c4b9-491c-9a69-99f2df74c15f",
    "Date",
    "Wed, 21 Apr 2021 20:29:53 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "2f1c86e5-0cbe-487b-b202-acebcdd46410",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "2f1c86e5-0cbe-487b-b202-acebcdd46410",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:29:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01/tags", {
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
      instance: "00c080d7-72f5-4a50-a2e6-04785bd52091",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "00c080d7-72f5-4a50-a2e6-04785bd52091",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:29:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "ed632b71-30b3-46a8-8f9e-835819ee0446",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "ed632b71-30b3-46a8-8f9e-835819ee0446",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:29:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c644ac73-bce2-4bd0-b0ac-830a82f5887c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c644ac73-bce2-4bd0-b0ac-830a82f5887c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:29:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c8b6120f-a4b4-4ae1-bf14-dafcdd914733",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c8b6120f-a4b4-4ae1-bf14-dafcdd914733",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:29:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7a9c9f73-97b5-438b-b6e2-f6b50276f049",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7a9c9f73-97b5-438b-b6e2-f6b50276f049",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:29:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: {
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:56+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "d37b097d-9751-4edd-b374-a3bea44865f8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:29:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "0d8c22ad-518e-4da6-b6a6-a8cf783c66cd",
    "Date",
    "Wed, 21 Apr 2021 20:29:57 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:56+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "918592a8-6463-42cc-9d81-d3d4ad41a4c5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:29:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:56+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "687432c0-75e8-4208-8646-853ca25b6524",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:29:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: {
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      FNAME: "Caio",
      LNAME: "Silveira",
      PHONE: "+5583999999999",
    },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:58+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "d0d93578-adeb-454c-8c16-057964a61925",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:29:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "22b3b207-67cb-4432-b0de-765c9c7cb9d5",
    "Date",
    "Wed, 21 Apr 2021 20:29:58 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:58+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "dd803829-bbab-4698-8d27-955ec8b7d23f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:29:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:58+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "e685dcc1-b9e6-40c2-bea7-e5986247a130",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:29:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: {
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "+5583999999998",
      LTV: 15.5,
    },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:00+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "3f574d30-5311-4595-b2c3-5a886d1e0e17",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "a77b4d21-7123-4156-89eb-87f02924c2c9",
    "Date",
    "Wed, 21 Apr 2021 20:30:00 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:00+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "c971aeb7-a7e1-4a3d-8cae-a64b9954bcd1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:00+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "3b98b695-1d2e-43da-af48-67e0ea0b722e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: {
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "000",
      LTV: "AAAAA",
    },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Your merge fields were invalid.",
      instance: "0e44a6fd-47ee-45e5-93c0-bd267275ea6b",
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
      "0e44a6fd-47ee-45e5-93c0-bd267275ea6b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:00+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "71f88d2c-670a-4672-94af-0bfb6e3f08f7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: {
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      FNAME: "",
      LNAME: "",
      PHONE: "",
      LTV: "",
    },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:02+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "41c04bc9-b24c-460d-b7a4-6b4dfb56297b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d431c904-82c5-4d63-a216-eaadcdab587d",
    "Date",
    "Wed, 21 Apr 2021 20:30:03 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:02+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "2707bab8-69a7-4238-a3a2-282bf20805d7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:02+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "0a88bc11-5eb3-4833-bb8c-94d8d14a5626",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: { email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com" },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:02+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "e879a683-4555-45e5-99d8-30359a5b3a5b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
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
    "98023481-42bf-493b-a2b1-2e52eaadb552",
    "Date",
    "Wed, 21 Apr 2021 20:30:05 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:05+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "a66a0462-19fe-4adc-b350-d414b31c1d81",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:05+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "5d06b590-c224-4f2d-a63a-dc2334bb1135",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: { email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com" },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:05+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "53b07423-3ddb-4ac8-a543-5c9f772a728c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [{ name: "list two", status: "inactive" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "b6fc33f9-c0dd-4229-b50e-a3629e14580d",
    "Date",
    "Wed, 21 Apr 2021 20:30:07 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:07+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "eeeba304-f1b2-40a2-9df1-c3bc6caf3567",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:07+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "a4934ef0-a15b-4299-831a-fa6dc47e3bfe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: { email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com" },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:07+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "311531d5-026c-400c-916c-9d8d86ed78c5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
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
    "22f517af-a3a0-4d00-a7d0-eb75736ba77c",
    "Date",
    "Wed, 21 Apr 2021 20:30:10 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:10+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "658af9fc-9be9-4ab8-b0fb-7403e87fe9df",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:10+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "4d92611c-38eb-4b63-875e-0ca4fa24ba7b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    status: "subscribed",
    merge_fields: { email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com" },
    email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:10+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "388bf632-c4da-4424-a0b3-51f8f5e0afaf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "c7d733f8-d0d4-48d4-8199-637edd8a2c4d",
    "Date",
    "Wed, 21 Apr 2021 20:30:12 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:10+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "d2471f91-c2b6-43cb-9496-07844e165ef8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:10+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "f07ae8e4-acae-4cf1-b1e0-78876b50655f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(
    200,
    {
      id: "19a77e3c109a659eab8fad2efc0a4f68",
      email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
      unique_email_id: "ab63b60f17",
      web_id: 387859817,
      email_type: "html",
      status: "archived",
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:09+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:49+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent",
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
      "3161",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "55840fe4-e452-41a3-934a-ac81715fc8e7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {
    email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com" },
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
      instance: "d3b89cb6-7f52-4c69-b8dc-207d3489ec2b",
      errors: [
        {
          field: "email address",
          message:
            '"z7zmvk2c9lekgf6rfnd3h@grouparoo.com" is already in this list with a status of "subscribed".',
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
      "d3b89cb6-7f52-4c69-b8dc-207d3489ec2b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
    tags: [
      { name: "list one", status: "inactive" },
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
    "5670ada2-9b36-4325-a076-1e21163c2cfd",
    "Date",
    "Wed, 21 Apr 2021 20:30:15 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(
    200,
    {
      id: "19a77e3c109a659eab8fad2efc0a4f68",
      email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
      unique_email_id: "ab63b60f17",
      web_id: 387859817,
      email_type: "html",
      status: "archived",
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:09+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:49+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent",
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
      "3161",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "2285394e-be26-4766-b017-a1ff24cd86bb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: { email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com" },
    email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "19a77e3c109a659eab8fad2efc0a4f68",
      email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
      unique_email_id: "ab63b60f17",
      web_id: 387859817,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:16+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:16+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent",
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
      "3163",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "09ad736d-0057-4471-8a81-eaa337442843",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags", {
    tags: [{ name: "list one", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "f98306e2-78ea-4395-99ac-6ffaa007c325",
    "Date",
    "Wed, 21 Apr 2021 20:30:16 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(
    200,
    {
      id: "19a77e3c109a659eab8fad2efc0a4f68",
      email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
      unique_email_id: "ab63b60f17",
      web_id: 387859817,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:16+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:16+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent",
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
      "3195",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "52642aa4-811d-4c26-844f-061831b7a265",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(
    200,
    {
      id: "19a77e3c109a659eab8fad2efc0a4f68",
      email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
      unique_email_id: "ab63b60f17",
      web_id: 387859817,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:16+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:16+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent",
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
      "3195",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ff483093-8dee-42f5-83b6-c9e932390bac",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(
    200,
    {
      id: "6225b145d0e5011d9a87a59b1f2ec6e1",
      email_address: "3jc60kpoe6jz5pf6otne6d@grouparoo.com",
      unique_email_id: "219120b7f2",
      web_id: 387973585,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:29:56+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:14+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/actions/delete-permanent",
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
      "0cc749e8-53a1-44e7-aacb-8280130f2a32",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387973585>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(
    200,
    {
      id: "19a77e3c109a659eab8fad2efc0a4f68",
      email_address: "z7zmvk2c9lekgf6rfnd3h@grouparoo.com",
      unique_email_id: "ab63b60f17",
      web_id: 387859817,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:16+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:16+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/actions/delete-permanent",
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
      "3195",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0f24e925-5261-4b98-b3b4-5e0a83fc8e93",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859817>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:50+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3179",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a56f18b3-8854-4379-a8c0-c486f30e6d18",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {
    email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com" },
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
      instance: "3134e27e-6cab-4bf3-aa37-2049c7add60d",
      errors: [
        {
          field: "email address",
          message:
            '"ht212f3lhrsn0uf7f3095@grouparoo.com" is already in this list with a status of "subscribed".',
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
      "3134e27e-6cab-4bf3-aa37-2049c7add60d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags", {
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
    "cdb5cd8d-0199-41d4-abf4-d5ca54e1a6e4",
    "Date",
    "Wed, 21 Apr 2021 20:30:19 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:32+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:50+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3179",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "37ab8a64-a141-4072-b377-7d2f9ee3daa7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: {
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      FNAME: "Evan",
      PHONE: "+5583999999998",
    },
    email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:20+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3181",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "caf72db6-0e72-4844-a594-7df0f9ebbf50",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags", {
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
    "d09ec751-c7c0-401b-af54-bba138ca1305",
    "Date",
    "Wed, 21 Apr 2021 20:30:21 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:21+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3315",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "276d46d5-ce74-4f8a-b881-42a20f4e9bf3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:21+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3315",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f2907454-a4ab-4e6f-aeba-9eb04526c1da",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d16bb862-b625-49c4-be6a-78edf7846ab5",
    "Date",
    "Wed, 21 Apr 2021 20:30:23 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:23+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3313",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "870f4218-f546-4a67-b19d-4e236cf100dc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:23+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3313",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5393edc9-cb64-4a4b-a162-c0c0d53e8937",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: {
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:24+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3315",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "759a87bb-c05b-4bca-b311-a7c37b295986",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags", {
    tags: [{ name: "list three", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "ca7cc915-70d0-45b2-b6dd-70abe789ab54",
    "Date",
    "Wed, 21 Apr 2021 20:30:25 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:24+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3315",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d45a6dca-e116-499c-aa11-f7f44e8a3944",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "2bfe79aa-5cea-4eb8-83f9-a00178578666",
    "Date",
    "Wed, 21 Apr 2021 20:30:26 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:26+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3313",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f4fe9da1-cbdb-4fdb-a0e0-353645dc29bf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:26+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3313",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bea7b5f0-8b2a-4f94-97f2-a66c844244a1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "02d429cb-36f6-4e8d-a833-bffdd4cf9e19",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "02d429cb-36f6-4e8d-a833-bffdd4cf9e19",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:30:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    200,
    {
      id: "0caf983dbca23fe383749a7601887b60",
      email_address: "ht212f3lhrsn0uf7f3095@grouparoo.com",
      unique_email_id: "5c1010653a",
      web_id: 387859821,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:26+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/actions/delete-permanent",
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
      "3313",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ffb0c336-aff9-408e-9f3a-59cff8c966b0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859821>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111", {})
  .once()
  .reply(
    200,
    {
      id: "4e7253e1ee5fa421b8de76f14c6e9111",
      email_address: "1mkikwtoeyfqyyn3nwq2fg@grouparoo.com",
      unique_email_id: "e625a61d3c",
      web_id: 387859825,
      email_type: "html",
      status: "archived",
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:37+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:52+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/actions/delete-permanent",
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
      "5b860fec-7485-45ed-99a3-fec0e9e458b4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859825>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111", {})
  .once()
  .reply(
    200,
    {
      id: "4e7253e1ee5fa421b8de76f14c6e9111",
      email_address: "1mkikwtoeyfqyyn3nwq2fg@grouparoo.com",
      unique_email_id: "e625a61d3c",
      web_id: 387859825,
      email_type: "html",
      status: "archived",
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:37+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:52+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/actions/delete-permanent",
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
      "b8ed61a4-8d6b-4f78-9a4b-2efd0c87226c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859825>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: {
      email_address: "1mkikwtoeyfqyyn3nwq2fg@grouparoo.com",
      FNAME: "Carlos",
    },
    email_address: "1mkikwtoeyfqyyn3nwq2fg@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "4e7253e1ee5fa421b8de76f14c6e9111",
      email_address: "1mkikwtoeyfqyyn3nwq2fg@grouparoo.com",
      unique_email_id: "e625a61d3c",
      web_id: 387859825,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:29+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:29+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/actions/delete-permanent",
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
      "3170",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "7ddb6a39-7dad-44af-82f8-9ce0fa5c44a3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859825>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/tags", {
    tags: [{ name: "list four", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "45a62857-b5fa-4e7d-a2ac-71038336700f",
    "Date",
    "Wed, 21 Apr 2021 20:30:30 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111", {})
  .once()
  .reply(
    200,
    {
      id: "4e7253e1ee5fa421b8de76f14c6e9111",
      email_address: "1mkikwtoeyfqyyn3nwq2fg@grouparoo.com",
      unique_email_id: "e625a61d3c",
      web_id: 387859825,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:29+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:30+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/actions/delete-permanent",
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
      "3203",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "cf9307d4-a3cc-4032-8416-50bf400baabd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859825>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:43+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:53+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "3166",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "72f08715-9cfa-4bdf-b685-887e2b451bd0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c685c370-a602-415c-8d36-14025cc67e61",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c685c370-a602-415c-8d36-14025cc67e61",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "4e272e27-3bbb-4aea-9f9f-2cb732dbe39a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "4e272e27-3bbb-4aea-9f9f-2cb732dbe39a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:43+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:53+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "3166",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "7e04bff3-391f-4649-9579-63e6252b32e7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:43+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:53+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "3166",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0dd8e307-47b0-4827-9d85-6ab5d953dbc8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "94cec77d-4c2b-4545-89f1-b44c7d061a1d",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "94cec77d-4c2b-4545-89f1-b44c7d061a1d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:33 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:43+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:53+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "3166",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fc553026-9d4e-4f8f-b71d-66b7f32db538",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:33 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "70f3f674-a35c-41df-907d-0472d0c3e094",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "70f3f674-a35c-41df-907d-0472d0c3e094",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "3f44e404-9fda-4cf6-9803-23eee0814b14",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "3f44e404-9fda-4cf6-9803-23eee0814b14",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:28:43+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:29:53+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "3166",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "225396fb-bc5c-4888-87b8-c44679465b1b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {
    email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:35+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "145a5f21-0f07-446d-b2ab-0f11f648e444",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:35 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:35+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "0383d1e4-6363-48c2-9139-4d9c3b51acee",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:35 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {
    status: "subscribed",
    merge_fields: {
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      FNAME: "Jake",
    },
    email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:36+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "cec61839-b132-4e86-9334-cd0659ebca15",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "ff398052-0e45-4188-a2ba-27b07d13f58d",
    "Date",
    "Wed, 21 Apr 2021 20:30:36 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:36+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "6a340318-0adf-4f4b-8174-1de3ae83fa5c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b84f95bf-dd9a-45d2-8f80-74496bf47db9",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b84f95bf-dd9a-45d2-8f80-74496bf47db9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:36+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "ee7f4402-49c6-4af9-85b9-4c942df7a1f2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "9e64279c-8141-4ef2-8a3c-be8f7c3af033",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "9e64279c-8141-4ef2-8a3c-be8f7c3af033",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "45f2b4ff-88b6-4b4c-82d1-e2ad796da250",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "45f2b4ff-88b6-4b4c-82d1-e2ad796da250",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:36+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "c336d90b-385d-4da3-8709-e1995316eb37",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {
    email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "a6107a4b-a003-4a3c-abbb-9a9f8b72cb4f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "a6107a4b-a003-4a3c-abbb-9a9f8b72cb4f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:36+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "d52074b5-87dd-4cda-ab1d-0e00fab4c43d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {
    status: "subscribed",
    merge_fields: {
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      FNAME: "Carl",
    },
    email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:40+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "e7fc90b6-e29b-4cfc-a02d-5ed61bee8b8d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "47f8da17-4cd4-43c5-b546-24a23e00b04e",
    "Date",
    "Wed, 21 Apr 2021 20:30:40 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:40+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "ca23b6aa-b740-4727-b31d-b34c54c69cd0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b59dcaa8-9457-446e-87ba-443414277bbe",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b59dcaa8-9457-446e-87ba-443414277bbe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:40+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "52c710eb-3575-4db8-aa5d-ed961b99fe01",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "84cffc99-a7fc-4bf4-a226-13c983c276a1",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "84cffc99-a7fc-4bf4-a226-13c983c276a1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "a1197f77-b007-4b68-871a-a90b7bb7f36a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "a1197f77-b007-4b68-871a-a90b7bb7f36a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:40+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "dd10276e-d19e-4990-985f-eafed3e6afa1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {
    email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "01d37952-bbc2-4e04-96b2-be15855c25d7",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "01d37952-bbc2-4e04-96b2-be15855c25d7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:43 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "fa4db01e-3ad1-4d64-86b1-79e9df5c83e7",
    "Date",
    "Wed, 21 Apr 2021 20:30:44 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    200,
    {
      id: "7535ca27b0737c189f9b048eb36cf33f",
      email_address: "a8y8ax6kp3d9rm5azn5ak4@grouparoo.com",
      unique_email_id: "9fa2ab11f4",
      web_id: 387859829,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-21T20:30:35+00:00",
      member_rating: 2,
      last_changed: "2021-04-21T20:30:44+00:00",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
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
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/actions/delete-permanent",
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
      "3166",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "c21fa893-d57e-46a0-beb7-150e84e0e93b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387859829>; rel="dashboard"',
      "Date",
      "Wed, 21 Apr 2021 20:30:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "de2a745b-0123-4bae-9acf-8f4be27722a3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "de2a745b-0123-4bae-9acf-8f4be27722a3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:45 GMT",
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
      instance: "54f9b558-8560-48f1-b6a0-890939c88184",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "54f9b558-8560-48f1-b6a0-890939c88184",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: { email_address: "AAAAA" },
    email_address: "AAAAA",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Please provide a valid email address.",
      instance: "2cf647ab-82de-4fa2-9714-06b05b0f12cf",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "2cf647ab-82de-4fa2-9714-06b05b0f12cf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:46 GMT",
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
      instance: "b116eeb9-9c59-42de-8550-34f290645a80",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b116eeb9-9c59-42de-8550-34f290645a80",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: { email_address: "foo@example.com" },
    email_address: "foo@example.com",
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
      instance: "270d99fd-b7a1-44d4-96d4-25d6202bb8fd",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "240",
      "X-Request-Id",
      "270d99fd-b7a1-44d4-96d4-25d6202bb8fd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:47 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1/tags", {
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
    "ac059aaf-e850-4564-9d22-2673a62ec412",
    "Date",
    "Wed, 21 Apr 2021 20:30:47 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/6225b145d0e5011d9a87a59b1f2ec6e1", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "a705b990-21eb-4c6a-bf20-cfae2a370d97",
    "Date",
    "Wed, 21 Apr 2021 20:30:48 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68/tags", {
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
    "0946a3b4-2abb-41b9-b678-0b555a2b0e20",
    "Date",
    "Wed, 21 Apr 2021 20:30:48 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/19a77e3c109a659eab8fad2efc0a4f68", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "f8afb289-75fd-49fc-a7ed-c86437be5d78",
    "Date",
    "Wed, 21 Apr 2021 20:30:49 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60/tags", {
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
    "52b0c473-2361-4e9a-879e-9df069c460c6",
    "Date",
    "Wed, 21 Apr 2021 20:30:49 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0caf983dbca23fe383749a7601887b60", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "e0da4101-2425-4b6a-bb5d-26b01b6871dc",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "e0da4101-2425-4b6a-bb5d-26b01b6871dc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:30:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111/tags", {
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
    "0ffeb355-e1fb-4764-8e9b-913f52d98b22",
    "Date",
    "Wed, 21 Apr 2021 20:30:50 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/4e7253e1ee5fa421b8de76f14c6e9111", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "0403a380-885d-495e-abb1-06462c7b80a1",
    "Date",
    "Wed, 21 Apr 2021 20:30:51 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f/tags", {
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
    "f1a75bf4-c842-4c79-898b-a3d1011aff5b",
    "Date",
    "Wed, 21 Apr 2021 20:30:51 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/7535ca27b0737c189f9b048eb36cf33f", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "799c9d41-2b6f-47c2-b977-f69d847e7773",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "799c9d41-2b6f-47c2-b977-f69d847e7773",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Wed, 21 Apr 2021 20:30:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/39077bbab1e0942b59e53b8569376b01/tags", {
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
      instance: "4791b24f-aaf4-42bc-823f-d5e38404d178",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "4791b24f-aaf4-42bc-823f-d5e38404d178",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Wed, 21 Apr 2021 20:30:53 GMT",
      "Connection",
      "close",
    ]
  );
