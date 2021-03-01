const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "8e7bad7e-f2b5-4083-95d4-c217a860ebce",
    "Date",
    "Mon, 01 Mar 2021 18:32:20 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "8e5e58e2-4782-47fd-8c82-652ad24ddc2a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "8e5e58e2-4782-47fd-8c82-652ad24ddc2a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Mon, 01 Mar 2021 18:32:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d3b8b60c-129e-4a6d-96af-13fd3d180d3e",
    "Date",
    "Mon, 01 Mar 2021 18:32:22 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "617f7dcb-9f5d-4df5-bc24-e6c1c936ba03",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "617f7dcb-9f5d-4df5-bc24-e6c1c936ba03",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Mon, 01 Mar 2021 18:32:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/tags", {
    tags: [],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1ae7fdcd-8615-4fb0-8852-81da672e7bef",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1ae7fdcd-8615-4fb0-8852-81da672e7bef",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/tags", {
    tags: [],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "fbc5fbe0-c848-4363-b53e-310b16e84b9c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "fbc5fbe0-c848-4363-b53e-310b16e84b9c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/tags", {
    tags: [],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b6b6f52c-723d-4463-9426-5b4b37c191e8",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b6b6f52c-723d-4463-9426-5b4b37c191e8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/cbeb584bff750fe06eccd20110375c0b/tags", {
    tags: [],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "cca59a67-af5f-4b7d-85b1-aad090ee8b77",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "cca59a67-af5f-4b7d-85b1-aad090ee8b77",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
      email_type: "html",
      status: "archived",
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:31:32+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "417384d9-a47f-4bc6-9b3f-aeb0d63559be",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
      email_type: "html",
      status: "archived",
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:31:32+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "fd9519a9-af9b-4d50-8378-2882200eb104",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: {
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:26+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "43829a15-6ed4-4d71-91c2-d31955f32129",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "b3b56e0d-161a-4a46-b61c-136d96109489",
    "Date",
    "Mon, 01 Mar 2021 18:32:27 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:26+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "3376831c-791f-4d89-9dd1-ddb9dca8c14d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:26+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "38db55cf-b7c4-41bd-b56f-8fa9d950e8a0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: {
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      FNAME: "Caio",
      LNAME: "Silveira",
      PHONE: "+5583999999999",
    },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "259ee91b-857b-40ac-8221-760ec5965d5a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "42fbcb18-6b26-4db8-99db-a5e8a4216751",
    "Date",
    "Mon, 01 Mar 2021 18:32:29 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "1e6bc80e-9360-4342-b2a5-da175345b951",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "9a2e5274-be25-4fbd-9f8e-4d32b2919681",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: {
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "+5583999999998",
      LTV: 15.5,
    },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:30+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3193",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "29be7eee-2f4d-49e3-a641-08dfa199ad74",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "63bf4195-5b3b-4719-a599-a6b1a34cedb1",
    "Date",
    "Mon, 01 Mar 2021 18:32:31 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:30+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3193",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e563e6a9-dfb1-4b02-9049-34fbd5c22b8e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:30+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3193",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "3f527300-8424-4045-970d-742b55807f70",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: {
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "000",
      LTV: "AAAAA",
    },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Your merge fields were invalid.",
      instance: "201598fe-f791-41ee-82de-f2b49ff17a7e",
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
      "201598fe-f791-41ee-82de-f2b49ff17a7e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:30+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3193",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "34dc1584-eb6d-4538-88e8-939b49f27740",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: {
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      FNAME: "",
      LNAME: "",
      PHONE: "",
      LTV: "",
    },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:33+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3165",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fe108bc2-8038-49b9-97b2-1f32a8116f0f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:33 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "0fbe0bec-0e9d-4742-a4da-5672458cc37b",
    "Date",
    "Mon, 01 Mar 2021 18:32:33 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:33+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3165",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ce8f3053-a5bc-421a-ae62-337debe85e16",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:33+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3165",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "cb1417fb-e2f2-426e-bd09-41b0d32c01e4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: { email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com" },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:33+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3165",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "26c34896-96a1-47d3-8f77-00e76a2c850e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:35 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
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
    "0762855b-64dd-4829-a4d5-cbca37d1f5ee",
    "Date",
    "Mon, 01 Mar 2021 18:32:35 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:35+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3230",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d88d4752-e361-4c6a-9f08-140a95b5d8a6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:35+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3230",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "93ef1991-d277-4d22-9352-3602eac4a2e4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: { email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com" },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:35+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3230",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "6947f201-cfd3-4824-89e7-007fbf9de23e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [{ name: "list two", status: "inactive" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "71cbbda6-b2b7-4e34-8e65-45581b75369f",
    "Date",
    "Mon, 01 Mar 2021 18:32:37 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:37+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "8bc92f43-6e98-4d5b-9698-4b1db4bd07f3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:37+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "2a04e676-4c24-46b2-afc6-b1c87821ec97",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: { email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com" },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:37+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "064a7475-6bdd-456d-bd53-ac7e46fa63d1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:39 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
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
    "a7d6985c-78ee-4618-831e-f782deae3121",
    "Date",
    "Mon, 01 Mar 2021 18:32:39 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:39+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "57386f22-04f6-412a-8772-b362bb6b87a1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:39+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "b7fb4630-5370-4b55-93ad-96774c3df7c5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    status: "subscribed",
    merge_fields: { email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com" },
    email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:39+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "d638bd52-35e4-4a7e-b35f-3ed8098b47b4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:41 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "6778aa27-a61c-472d-b5d3-215d0bc90f26",
    "Date",
    "Mon, 01 Mar 2021 18:32:41 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:39+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "5b9444d4-2fd6-49f0-b014-8c7c7e283e87",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {
    email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "02da8btyih2r5prj0b00q27@grouparoo.com" },
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
      instance: "a83b9f5c-a5e2-41f4-8191-a5eea9cf00c6",
      errors: [
        {
          field: "email address",
          message:
            '"02da8btyih2r5prj0b00q27@grouparoo.com" is already in this list with a status of "subscribed".',
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "413",
      "X-Request-Id",
      "a83b9f5c-a5e2-41f4-8191-a5eea9cf00c6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .patch("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {
    email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "02da8btyih2r5prj0b00q27@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "073d287eaef70c3f60a4a8a5f22d4e90",
      email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
      unique_email_id: "47e4862d46",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:42+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/actions/delete-permanent",
          method: "POST",
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
      "b108f382-2296-4d12-8a4f-810c70f1366f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:42 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "96e6bf18-71f8-4a08-97ef-6e838a3c3e23",
    "Date",
    "Mon, 01 Mar 2021 18:32:43 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {})
  .once()
  .reply(
    200,
    {
      id: "073d287eaef70c3f60a4a8a5f22d4e90",
      email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
      unique_email_id: "47e4862d46",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:42+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/actions/delete-permanent",
          method: "POST",
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
      "1b12a432-3f48-4676-9e28-7cc82e43ea39",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {
    status: "subscribed",
    merge_fields: { email_address: "02da8btyih2r5prj0b00q27@grouparoo.com" },
    email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "073d287eaef70c3f60a4a8a5f22d4e90",
      email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
      unique_email_id: "47e4862d46",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:42+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/actions/delete-permanent",
          method: "POST",
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
      "7a0ce224-b14f-4263-afbb-e265f064a472",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "527b40df-a037-441d-a671-9624eaac398b",
    "Date",
    "Mon, 01 Mar 2021 18:32:45 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {})
  .once()
  .reply(
    200,
    {
      id: "073d287eaef70c3f60a4a8a5f22d4e90",
      email_address: "02da8btyih2r5prj0b00q27@grouparoo.com",
      unique_email_id: "47e4862d46",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:42+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/actions/delete-permanent",
          method: "POST",
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
      "789d10e6-7777-4767-846b-110697856698",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    200,
    {
      id: "f3509ac92768285a62ee1b9df5603b93",
      email_address: "thnhjr1y6w90wnjak26famb@grouparoo.com",
      unique_email_id: "e450a708e1",
      web_id: 383166853,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:53+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:43+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/actions/delete-permanent",
          method: "POST",
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
      "b957ee81-8dd6-4871-8592-4241bcb9952a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166853>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {
    email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "gtvyin843cp7qji17jd44r@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "479f5cc21074477ecc180ce20592d33f",
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      unique_email_id: "affcc2cff6",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:46+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/actions/delete-permanent",
          method: "POST",
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
      "e3ae46e5-4bdb-42d3-bde2-d4d034858fd7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(
    200,
    {
      id: "479f5cc21074477ecc180ce20592d33f",
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      unique_email_id: "affcc2cff6",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:46+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/actions/delete-permanent",
          method: "POST",
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
      "569c8b89-ddb8-4307-bd9f-64202f1f37d4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:46 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {
    status: "subscribed",
    merge_fields: {
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      FNAME: "Evan",
      PHONE: "+5583999999998",
    },
    email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "479f5cc21074477ecc180ce20592d33f",
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      unique_email_id: "affcc2cff6",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:47+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/actions/delete-permanent",
          method: "POST",
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
      "922d2579-ddec-4387-b3e2-a954242db3d5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:47 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "2e836c88-5f83-4048-bc0f-e679a9db0b20",
    "Date",
    "Mon, 01 Mar 2021 18:32:47 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(
    200,
    {
      id: "479f5cc21074477ecc180ce20592d33f",
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      unique_email_id: "affcc2cff6",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:47+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/actions/delete-permanent",
          method: "POST",
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
      "d9694ffc-7ea2-487f-ba1b-1f8d5ba3eb29",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:48 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "35288efb-2e7f-42a4-9ba6-5865d7f9c525",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "35288efb-2e7f-42a4-9ba6-5865d7f9c525",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:48 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9bb68978-cf59-4c6b-9a65-1dfa50f401be",
    "Date",
    "Mon, 01 Mar 2021 18:32:49 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(
    200,
    {
      id: "479f5cc21074477ecc180ce20592d33f",
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      unique_email_id: "affcc2cff6",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:49+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/actions/delete-permanent",
          method: "POST",
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
      "92ea4aed-498f-48b1-b629-fa557635cd69",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:49 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(
    200,
    {
      id: "479f5cc21074477ecc180ce20592d33f",
      email_address: "gtvyin843cp7qji17jd44r@grouparoo.com",
      unique_email_id: "affcc2cff6",
      web_id: 383166849,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:29:35+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:49+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/actions/delete-permanent",
          method: "POST",
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
      "482fc717-05f3-45a5-b4e5-928934c78ef3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166849>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "bcb97e56-8064-48e6-83a7-541103dff957",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "bcb97e56-8064-48e6-83a7-541103dff957",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Mon, 01 Mar 2021 18:32:50 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "e0ba6dc7-8fb5-4017-86ac-d9829928658f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e0ba6dc7-8fb5-4017-86ac-d9829928658f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:51 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "648b28fe-9188-4b90-bea1-cbab53ebda53",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "648b28fe-9188-4b90-bea1-cbab53ebda53",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:51 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: {
      email_address: "i7qxh5i1co2etsul5hkcw@grouparoo.com",
      FNAME: "Carlos",
    },
    email_address: "i7qxh5i1co2etsul5hkcw@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5f15835c82468be6f7ba064625c477de",
      email_address: "i7qxh5i1co2etsul5hkcw@grouparoo.com",
      unique_email_id: "d33f38479c",
      web_id: 383166873,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:32:51+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:51+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/actions/delete-permanent",
          method: "POST",
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
      "8a0cc9e5-51ad-41fd-86e6-a9d7a0329a3e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166873>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:51 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/tags", {
    tags: [{ name: "list four", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "7cc5efea-9424-4a07-b216-05ce08246f89",
    "Date",
    "Mon, 01 Mar 2021 18:32:52 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de", {})
  .once()
  .reply(
    200,
    {
      id: "5f15835c82468be6f7ba064625c477de",
      email_address: "i7qxh5i1co2etsul5hkcw@grouparoo.com",
      unique_email_id: "d33f38479c",
      web_id: 383166873,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:32:51+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:52+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3202",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "afd14f98-20ce-43f0-8750-de95f1b1af55",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166873>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "129013bc-6265-4324-8995-15a1cf920273",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "129013bc-6265-4324-8995-15a1cf920273",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/cbeb584bff750fe06eccd20110375c0b", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "aa455b9d-b243-4e94-bfaf-9a3f7bb4be42",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "aa455b9d-b243-4e94-bfaf-9a3f7bb4be42",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/cbeb584bff750fe06eccd20110375c0b", {
    email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "c7cc5fa1c2ef61928f87b2c2a7530b11",
      email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
      unique_email_id: "1764771857",
      web_id: 383166877,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:32:54+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:54+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/actions/delete-permanent",
          method: "POST",
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
      "e6247518-9a3c-43a2-8836-1113a4164aed",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166877>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11", {})
  .once()
  .reply(
    200,
    {
      id: "c7cc5fa1c2ef61928f87b2c2a7530b11",
      email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
      unique_email_id: "1764771857",
      web_id: 383166877,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:32:54+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:54+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/actions/delete-permanent",
          method: "POST",
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
      "40cf582e-a0af-4ff0-b3e8-8727c4411369",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166877>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11", {
    status: "subscribed",
    merge_fields: {
      email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
      FNAME: "Jake",
    },
    email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "c7cc5fa1c2ef61928f87b2c2a7530b11",
      email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
      unique_email_id: "1764771857",
      web_id: 383166877,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:32:54+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:55+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/actions/delete-permanent",
          method: "POST",
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
      "3c70d251-eff6-4d73-a25f-25a691863cb1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166877>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "57337bfd-7288-4f97-9414-400f9d4dec8b",
    "Date",
    "Mon, 01 Mar 2021 18:32:56 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11", {})
  .once()
  .reply(
    200,
    {
      id: "c7cc5fa1c2ef61928f87b2c2a7530b11",
      email_address: "pf1aynm6qwe7ola0ks1ov6@grouparoo.com",
      unique_email_id: "1764771857",
      web_id: 383166877,
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
      ip_opt: "45.228.144.6",
      timestamp_opt: "2021-03-01T18:32:54+00:00",
      member_rating: 2,
      last_changed: "2021-03-01T18:32:55+00:00",
      language: "",
      vip: false,
      email_client: "",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/actions/delete-permanent",
          method: "POST",
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
      "e3c4a1dc-79f1-438a-8b4e-706bf9f1daac",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383166877>; rel="dashboard"',
      "Date",
      "Mon, 01 Mar 2021 18:32:56 GMT",
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
      instance: "3be50e22-321a-48ca-8303-deba4ebbb097",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "3be50e22-321a-48ca-8303-deba4ebbb097",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:56 GMT",
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
      instance: "a61aa5ea-407a-491d-9c0f-7daf2ba0a4db",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "a61aa5ea-407a-491d-9c0f-7daf2ba0a4db",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "f6fe4e13-8e0b-4aba-b764-f525e7098628",
    "Date",
    "Mon, 01 Mar 2021 18:32:57 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/f3509ac92768285a62ee1b9df5603b93", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "74a5ef2e-f1a7-4944-9438-ca5445b74c81",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "74a5ef2e-f1a7-4944-9438-ca5445b74c81",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Mon, 01 Mar 2021 18:32:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/073d287eaef70c3f60a4a8a5f22d4e90/tags", {
    tags: [],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "ca520faa-5216-4934-8705-a6e08eaa8d25",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "ca520faa-5216-4934-8705-a6e08eaa8d25",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:32:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "7844b403-ad0c-4461-8e52-df71071c6aa4",
    "Date",
    "Mon, 01 Mar 2021 18:32:59 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/479f5cc21074477ecc180ce20592d33f", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "38e492c1-2bee-4788-b5fb-7dcd9536431b",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "38e492c1-2bee-4788-b5fb-7dcd9536431b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Mon, 01 Mar 2021 18:33:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "fee72462-476d-4e60-9524-8732d8d235b5",
    "Date",
    "Mon, 01 Mar 2021 18:33:00 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/5f15835c82468be6f7ba064625c477de", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "89c2027e-cc0e-46c9-93b8-43252c535c51",
    "Date",
    "Mon, 01 Mar 2021 18:33:01 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "8d64d34d-8c5b-4945-8431-ab9b9acff91b",
    "Date",
    "Mon, 01 Mar 2021 18:33:02 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/c7cc5fa1c2ef61928f87b2c2a7530b11", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "d000b5e5-4d49-41b5-884c-90e7fe6d044e",
    "Date",
    "Mon, 01 Mar 2021 18:33:02 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/cbeb584bff750fe06eccd20110375c0b/tags", {
    tags: [],
  })
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "1e03396a-e00d-4ca5-a190-20f1c7cb506f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "1e03396a-e00d-4ca5-a190-20f1c7cb506f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Mon, 01 Mar 2021 18:33:03 GMT",
      "Connection",
      "close",
    ]
  );
