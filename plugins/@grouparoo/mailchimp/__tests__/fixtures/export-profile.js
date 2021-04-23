const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
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
    "97716585-635d-413b-8b91-bc2bd4569772",
    "Date",
    "Fri, 23 Apr 2021 02:54:54 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "b132035c-acaf-45cd-9775-9c569ea69eff",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "b132035c-acaf-45cd-9775-9c569ea69eff",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:54:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/tags", {
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
      instance: "fcd74e35-2ae6-4b8b-86dc-3902c0e8b1fa",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "fcd74e35-2ae6-4b8b-86dc-3902c0e8b1fa",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:54:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/tags", {
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
    "43e052b4-ed9f-4b28-bc96-4c793a3e666c",
    "Date",
    "Fri, 23 Apr 2021 02:54:55 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "46a2c1e7-9190-46e6-9ed3-5ca5f0bdd633",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "46a2c1e7-9190-46e6-9ed3-5ca5f0bdd633",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:54:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/tags", {
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
    "c4b08205-cce7-45b3-898e-bf901d232fac",
    "Date",
    "Fri, 23 Apr 2021 02:54:55 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "d9c8573b-e396-40e9-8a5f-47493538f5ac",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "d9c8573b-e396-40e9-8a5f-47493538f5ac",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:54:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/tags", {
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
    "dcc534a4-21a5-40f6-af38-7ba25aaf5f35",
    "Date",
    "Fri, 23 Apr 2021 02:54:56 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "84831a40-08a4-4f76-aa1d-a4cfcc37eb87",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "84831a40-08a4-4f76-aa1d-a4cfcc37eb87",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:54:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24/tags", {
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
      instance: "169fff3f-b072-4d33-ac4d-1bdf28bbf35b",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "169fff3f-b072-4d33-ac4d-1bdf28bbf35b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:54:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:51:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:54+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "eba4d8e3-fba8-4c2d-8fd6-9803a3c73ba7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:51:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:54+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "92254b9c-1187-45f5-b51d-01495dbb84d7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:51:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:54+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "5401aabb-778a-49cc-addb-9446c6b96b92",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:51:20+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:54+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "f513d75e-7a75-4d0e-8b33-3f05e56aa798",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:58+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "21fed995-3c50-43fb-aeb0-9049535e74c1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "c0ed7e0a-657a-4956-b114-253b8b601a20",
    "Date",
    "Fri, 23 Apr 2021 02:54:58 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:58+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "ff1c5967-a422-4255-a8f4-9002c6dde1ed",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:58+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "1b9af641-d75b-41e9-a1af-73f566c5943a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: {
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      FNAME: "Caio",
      LNAME: "Silveira",
      PHONE: "+5583999999999",
    },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:59+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3189",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5de24463-41be-4f0a-a13a-355e1f7ab449",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "b4aa6778-db38-4a5f-9e74-e1426f81238b",
    "Date",
    "Fri, 23 Apr 2021 02:54:59 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:59+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3189",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ab824c3d-69fd-44e0-b915-702798a7d41d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    status: "unsubscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:59+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3242",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ed839870-0692-4833-9abf-0b0ca58ea951",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:54:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:59+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3242",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d72902de-1aa9-49f6-bb9d-66e5b9bec61b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:59+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3242",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d02e670c-cc6f-472b-b39a-b0cf1d3d6f8d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: {
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      FNAME: "Samba",
    },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:00+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "909ea1c5-98b7-4ce3-ae98-c0984da7f968",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "774b0b6f-ee5c-4010-8be7-aaca311ea370",
    "Date",
    "Fri, 23 Apr 2021 02:55:00 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:00+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3f110449-eb4f-4abc-b8e1-7f35853ca595",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "0565276b-1f7e-460e-88c4-50b9043615ed",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "a713ba55-c488-467b-a368-21bd3ffa21b5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "00499d65-2ef3-4113-904f-1ea9d94d2de6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: {
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "+5583999999998",
      LTV: 15.5,
    },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "231b23e3-bd7b-46f3-8f10-9aaed586bde0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "99067902-2bb2-4a14-a450-af3b0aef40de",
    "Date",
    "Fri, 23 Apr 2021 02:55:01 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "a2b58e46-ddd6-442f-b386-ed3a1bd1750d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3d76b786-1634-460d-92e6-2630937fb826",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: {
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "000",
      LTV: "AAAAA",
    },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Your merge fields were invalid.",
      instance: "fd8b8248-12e9-4ec4-b929-c686711ac988",
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
      "fd8b8248-12e9-4ec4-b929-c686711ac988",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:01+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "4778455c-1102-4c5e-97d1-84e04e8c9701",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: {
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      FNAME: "",
      LNAME: "",
      PHONE: "",
      LTV: "",
    },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:03+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3622573a-8a7f-4ab3-af3e-f233277f2b7b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "7b522b39-9e1a-4132-a122-83c711041e74",
    "Date",
    "Fri, 23 Apr 2021 02:55:03 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:03+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "2e5b162c-f769-4f7b-a336-5dda2c222abb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:03+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "d1db7db0-c29b-4af3-8fb0-ff5f7273174f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: { email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com" },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:03+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "e00a9c98-1b72-447b-a7d3-1aecd42096cd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
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
    "308edfb1-0be6-437f-a0e2-c5a9a614fe77",
    "Date",
    "Fri, 23 Apr 2021 02:55:04 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:04+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3228",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9ae2c695-c750-4eb3-9125-f69f6a8c8260",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:04+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3228",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "aced70d9-c7dc-439a-8fef-6ddf53d01206",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: { email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com" },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:04+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3228",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1c6444fb-73e3-4fd8-aa11-7339acd0e49d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [{ name: "list two", status: "inactive" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "ee097815-d8e8-4dd2-8f37-f697790e9408",
    "Date",
    "Fri, 23 Apr 2021 02:55:05 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:05+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "54682b9a-3169-40fa-9154-485d22315c3c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:05+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "af7c5839-1db4-487e-befc-75badc208b64",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: { email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com" },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:05+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "611ecee4-c8a9-4b4b-9fb1-414817120579",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
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
    "cf91f2c1-688d-47b9-b722-f320176af959",
    "Date",
    "Fri, 23 Apr 2021 02:55:06 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:06+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3263",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d4fda7b1-590a-4cff-8e41-3dbdf21eade9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:06+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3263",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "23584293-449a-4bdc-89bf-ef2067833721",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    merge_fields: { email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com" },
    email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:06+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3263",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "4a06ee07-8587-4e32-893f-c689214535e8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "454e32c3-26cb-48f5-8317-82b3577fdf04",
    "Date",
    "Fri, 23 Apr 2021 02:55:07 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:06+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3263",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "07bf63ff-8c01-4e96-ba37-a54a2adeba50",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    200,
    {
      id: "7109f3c0fa950686127bc6ae4f5e835c",
      email_address: "gq9h5ncoyys3jqc56w68e@grouparoo.com",
      unique_email_id: "f73fc44f43",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:06+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/actions/delete-permanent",
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
      "3263",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "04ac7a75-01c4-4b7d-91e2-c0938335c07a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7a6416bd-28d7-43e5-832a-fa870c9ae471",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7a6416bd-28d7-43e5-832a-fa870c9ae471",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {
    email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "da6ec301f3ddb7a8ff4f27d074e67606",
      email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
      unique_email_id: "e0be8392b8",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:08+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/actions/delete-permanent",
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
      "3a19a728-3e8a-4c26-af43-ad850926bea7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {})
  .once()
  .reply(
    200,
    {
      id: "da6ec301f3ddb7a8ff4f27d074e67606",
      email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
      unique_email_id: "e0be8392b8",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:08+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/actions/delete-permanent",
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
      "beb27f0c-2271-40b3-9f12-2f631d3ec330",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {
    merge_fields: { email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com" },
    email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "da6ec301f3ddb7a8ff4f27d074e67606",
      email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
      unique_email_id: "e0be8392b8",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:08+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/actions/delete-permanent",
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
      "6afc753c-7594-49fa-a802-ecf323c072a7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/tags", {
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
    "4807c88f-e0b2-4122-ae64-7b4cf71e90a0",
    "Date",
    "Fri, 23 Apr 2021 02:55:09 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {})
  .once()
  .reply(
    200,
    {
      id: "da6ec301f3ddb7a8ff4f27d074e67606",
      email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
      unique_email_id: "e0be8392b8",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:09+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/actions/delete-permanent",
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
      "d2c2cb35-3d4e-4bb9-a0ee-72b1b686bf40",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {})
  .once()
  .reply(
    200,
    {
      id: "da6ec301f3ddb7a8ff4f27d074e67606",
      email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
      unique_email_id: "e0be8392b8",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:09+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/actions/delete-permanent",
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
      "f7fee75b-386b-4e00-9ec3-c4d6ea279203",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "6b2499ce-1662-45a4-93be-e39514741ed3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "6b2499ce-1662-45a4-93be-e39514741ed3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {})
  .once()
  .reply(
    200,
    {
      id: "da6ec301f3ddb7a8ff4f27d074e67606",
      email_address: "29tfir0jd6pewwyz1ppr8t@grouparoo.com",
      unique_email_id: "e0be8392b8",
      web_id: 387987637,
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
      timestamp_opt: "2021-04-23T02:54:58+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:09+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/actions/delete-permanent",
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
      "b4f024f0-d972-4608-a316-c78cf8a083fa",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987637>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:51:36+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:55+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "846e58cb-6b26-4dad-8370-1066b71175b3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {
    email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com" },
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
      instance: "1c63418e-ac0e-41e8-9078-7eb5305b525b",
      errors: [
        {
          field: "email address",
          message:
            '"pxbztxqesui269r6m1y5wu@grouparoo.com" is already in this list with a status of "subscribed".',
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "412",
      "X-Request-Id",
      "1c63418e-ac0e-41e8-9078-7eb5305b525b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/tags", {
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
    "760f07bf-07b8-4328-9fb3-c0517ee719d0",
    "Date",
    "Fri, 23 Apr 2021 02:55:11 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:51:36+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:55+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "8c1aeca3-a4af-497c-87f0-e157309f6cda",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      FNAME: "Evan",
      PHONE: "+5583999999998",
    },
    email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:11+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:11+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "b99cac19-802d-4653-82de-3430efe698c3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/tags", {
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
    "198d7ba7-5c4d-4747-9dac-f090a12309e3",
    "Date",
    "Fri, 23 Apr 2021 02:55:11 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:11+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:11+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "d513977b-2738-406c-a1be-71845e485ca3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:11+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:11+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "0743ed44-f159-4f08-a7e3-674c8d0ea9c8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "aa4cb4f0-ad18-4fab-9dcc-577e67879ec2",
    "Date",
    "Fri, 23 Apr 2021 02:55:12 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:11+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:12+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "53e25592-966a-4ca0-8534-6d00c3d414be",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:11+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:12+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "0e3a8bd1-b798-4227-9138-a6bef6a95cd4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:13+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:13+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "8fa36b24-b433-42e7-b73f-c562ed09f6bf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/tags", {
    tags: [{ name: "list three", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "b2774a14-d769-4dff-b85d-fc3e5aacac2c",
    "Date",
    "Fri, 23 Apr 2021 02:55:13 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:13+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:13+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "052567b2-49ff-4bf1-8d36-d609e867e10b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "436436cb-664e-40d3-96e1-37ca20330a70",
    "Date",
    "Fri, 23 Apr 2021 02:55:14 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:13+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:14+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "c2bcb7c4-502c-40d9-aff5-a9cf6a212575",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:13+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:14+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "5b9cf4da-61fe-450d-8c44-9d6b6ed16af5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "713e67ec-ec5b-4f75-b7d9-5ff372965080",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "713e67ec-ec5b-4f75-b7d9-5ff372965080",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    200,
    {
      id: "0ccc49bbe1ab894ae9adde11a25a3976",
      email_address: "pxbztxqesui269r6m1y5wu@grouparoo.com",
      unique_email_id: "df2ee41e24",
      web_id: 387987641,
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
      timestamp_opt: "2021-04-23T02:55:13+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:14+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/actions/delete-permanent",
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
      "4e83de8d-8837-4e3e-9d65-44453f74709f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987641>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5", {})
  .once()
  .reply(
    200,
    {
      id: "f444cae8b0ae1c6e4af29c7d25304fe5",
      email_address: "vaessfdiduzynl2j70vi@grouparoo.com",
      unique_email_id: "956c832815",
      web_id: 387987645,
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
      timestamp_opt: "2021-04-23T02:51:39+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:55+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/actions/delete-permanent",
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
      "0a7ac936-e0b8-4a42-92e6-86e4ac80cfae",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987645>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5", {})
  .once()
  .reply(
    200,
    {
      id: "f444cae8b0ae1c6e4af29c7d25304fe5",
      email_address: "vaessfdiduzynl2j70vi@grouparoo.com",
      unique_email_id: "956c832815",
      web_id: 387987645,
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
      timestamp_opt: "2021-04-23T02:51:39+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:55+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/actions/delete-permanent",
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
      "1f6d1dc8-57a0-4af3-b13c-084b92f89156",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987645>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    merge_fields: {
      email_address: "vaessfdiduzynl2j70vi@grouparoo.com",
      FNAME: "Carlos",
    },
    email_address: "vaessfdiduzynl2j70vi@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "f444cae8b0ae1c6e4af29c7d25304fe5",
      email_address: "vaessfdiduzynl2j70vi@grouparoo.com",
      unique_email_id: "956c832815",
      web_id: 387987645,
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
      timestamp_opt: "2021-04-23T02:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:16+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/actions/delete-permanent",
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
      "a65dd13b-e92d-4ad8-827a-01d4e931d7bd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987645>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/tags", {
    tags: [{ name: "list four", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "828f6dff-a10b-48ec-8784-8ad470b7d3d7",
    "Date",
    "Fri, 23 Apr 2021 02:55:16 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5", {})
  .once()
  .reply(
    200,
    {
      id: "f444cae8b0ae1c6e4af29c7d25304fe5",
      email_address: "vaessfdiduzynl2j70vi@grouparoo.com",
      unique_email_id: "956c832815",
      web_id: 387987645,
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
      timestamp_opt: "2021-04-23T02:55:16+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:16+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/actions/delete-permanent",
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
      "3201",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "aa078151-f665-4bba-8375-759aad55b26b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987645>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:51:42+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:56+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "4c9cfcc0-1463-41d0-8db4-372752200031",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "258d41f6-4e69-4922-afa4-638e3005d720",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "258d41f6-4e69-4922-afa4-638e3005d720",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1564cae8-7bc6-422d-b55b-51a187682dd4",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1564cae8-7bc6-422d-b55b-51a187682dd4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:51:42+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:56+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "337a733a-ad9b-4d2b-948d-3952cef77f59",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:51:42+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:56+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "33e1c46f-9d8e-4ffa-bfd0-dd738c15e628",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1f918503-af94-40c9-a164-d330f3ffc2cd",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1f918503-af94-40c9-a164-d330f3ffc2cd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:51:42+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:56+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "a344cd31-9e9a-4292-b7a5-be84bc5c1729",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "63e61f1a-e026-4915-a4e4-4c54ef341cca",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "63e61f1a-e026-4915-a4e4-4c54ef341cca",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "6cde63cf-1fb7-4a07-a506-e552e94e23c1",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "6cde63cf-1fb7-4a07-a506-e552e94e23c1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:51:42+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:54:56+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "cb5c992e-ab5f-4fe1-a70e-01d144ef1d35",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {
    email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "394c9b6f-4bf6-44d2-8447-f3cc2a504314",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "99ac3c02-f321-4680-abaf-a6ca7858f6de",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {
    merge_fields: {
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      FNAME: "Jake",
    },
    email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "ab10885b-b89e-4416-8523-1eee54d190e1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "485f0f98-e7fc-4844-8f3a-ac26c7c37088",
    "Date",
    "Fri, 23 Apr 2021 02:55:19 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "d2e62ce7-1e25-4758-9045-a3d2c49a5250",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "ed850cbe-d93a-4381-b83a-40c71edce95f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "ed850cbe-d93a-4381-b83a-40c71edce95f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "f8a77cab-7ace-4db1-b8a8-b764a9aeda96",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "bf61849f-416a-433e-9718-acd609b5023c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "bf61849f-416a-433e-9718-acd609b5023c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7bde8970-fcb8-42d0-84cf-c34a2ce31a7c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7bde8970-fcb8-42d0-84cf-c34a2ce31a7c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "9ab44498-cb75-4d98-909b-b2b472ce6cb2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {
    email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "5xl3m34pj9aekdqn4zg3kw@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "900518cc-9d6b-4b0a-b675-85b13a118de6",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "900518cc-9d6b-4b0a-b675-85b13a118de6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:19+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "273daccf-194f-4158-a7e6-3eb51e19a20e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {
    merge_fields: {
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      FNAME: "Carl",
    },
    email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:21+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "0d384f02-3b8f-488e-89a0-d7be04e40d26",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "f4e209cd-c188-4c92-a9ec-f92916817700",
    "Date",
    "Fri, 23 Apr 2021 02:55:22 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:21+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "7eede2c5-4892-4363-ad1e-2e4a45de776f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "f9d8b73f-3159-4aaf-b0df-4bfe7ac7ed6a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "f9d8b73f-3159-4aaf-b0df-4bfe7ac7ed6a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:21+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "1d3d3ac3-ac32-49c2-9d66-b4627a31495e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "3859d57a-d1db-4c48-8b8e-944799f7adba",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "3859d57a-d1db-4c48-8b8e-944799f7adba",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "4549a717-2e18-4d60-93c0-85fc74590891",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "4549a717-2e18-4d60-93c0-85fc74590891",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:21+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "f45a5473-b382-4cdc-b8c4-9d7a8287897c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {
    email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "5xl3m34pj9aekdqn4zg3kw@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "42d426f1-aa3e-47a4-90e0-678bbecdbaae",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "42d426f1-aa3e-47a4-90e0-678bbecdbaae",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "2fccf0ad-783c-4009-b557-b99d810e329a",
    "Date",
    "Fri, 23 Apr 2021 02:55:23 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    200,
    {
      id: "526a1f0eea18c564a20e09186382cf05",
      email_address: "5xl3m34pj9aekdqn4zg3kw@grouparoo.com",
      unique_email_id: "de518832b8",
      web_id: 387987649,
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
      timestamp_opt: "2021-04-23T02:55:19+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T02:55:23+00:00",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/actions/delete-permanent",
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
      "236f2dd2-f638-4b4f-9c2a-d2ca050da13e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=387987649>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 02:55:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "38a4bf6b-5c61-4528-b5dd-db1913921a54",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "38a4bf6b-5c61-4528-b5dd-db1913921a54",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:24 GMT",
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
      instance: "97b84d07-665c-4ce4-8a25-686fe9ba82c3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "97b84d07-665c-4ce4-8a25-686fe9ba82c3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:24 GMT",
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
      instance: "e7cb7720-5443-4abd-a530-3168731436d9",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "e7cb7720-5443-4abd-a530-3168731436d9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:24 GMT",
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
      instance: "c67d8193-28e1-471d-9f89-4c18bb4950b9",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c67d8193-28e1-471d-9f89-4c18bb4950b9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:24 GMT",
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
      instance: "2c817a51-36bd-419f-9912-9f42f01f69cc",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "240",
      "X-Request-Id",
      "2c817a51-36bd-419f-9912-9f42f01f69cc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/7109f3c0fa950686127bc6ae4f5e835c/tags", {
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
      instance: "02f4cf37-3507-4d04-af87-bc01b1266c00",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "02f4cf37-3507-4d04-af87-bc01b1266c00",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606/tags", {
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
    "4c5bd9df-9a51-438b-ab29-d6ff8b6b74b8",
    "Date",
    "Fri, 23 Apr 2021 02:55:25 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/da6ec301f3ddb7a8ff4f27d074e67606", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "05567e19-2b36-4c6d-ac9d-c03d59cd1096",
    "Date",
    "Fri, 23 Apr 2021 02:55:26 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976/tags", {
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
    "8b18c064-8815-4642-aef4-9bcdb204e000",
    "Date",
    "Fri, 23 Apr 2021 02:55:26 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/0ccc49bbe1ab894ae9adde11a25a3976", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "0474de31-9c07-4ad4-b326-6aa6810fb200",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "0474de31-9c07-4ad4-b326-6aa6810fb200",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:55:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5/tags", {
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
    "342e2632-9656-4246-8a8c-8867ef8b6121",
    "Date",
    "Fri, 23 Apr 2021 02:55:26 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/f444cae8b0ae1c6e4af29c7d25304fe5", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "b444b822-af3c-4f24-b0e6-b2eccf5b2ad8",
    "Date",
    "Fri, 23 Apr 2021 02:55:27 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05/tags", {
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
    "af2a22f3-169d-4721-a716-16167429dd76",
    "Date",
    "Fri, 23 Apr 2021 02:55:27 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/526a1f0eea18c564a20e09186382cf05", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "d239bd61-31fe-47c0-9f12-6a10534599bf",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "d239bd61-31fe-47c0-9f12-6a10534599bf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 02:55:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f45f965b88ee86f33ef517ce6d7b4d24/tags", {
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
      instance: "2aced807-5a79-4415-83dc-7b63cefcb85f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "2aced807-5a79-4415-83dc-7b63cefcb85f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 02:55:28 GMT",
      "Connection",
      "close",
    ]
  );
