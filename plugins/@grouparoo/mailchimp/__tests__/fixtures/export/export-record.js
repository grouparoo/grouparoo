const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
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
      instance: "55d7a0cc-5cbf-9fb4-0053-76654b0d322f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "55d7a0cc-5cbf-9fb4-0053-76654b0d322f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/tags", {
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
      instance: "e0f96050-ae54-f5a8-5020-57af0e630ba7",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e0f96050-ae54-f5a8-5020-57af0e630ba7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/tags", {
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
      instance: "d26905ac-5c1b-473f-a826-25d3f86ab7c3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "d26905ac-5c1b-473f-a826-25d3f86ab7c3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/tags", {
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
      instance: "e94fd346-deca-cb67-2878-9316bf4a1553",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "e94fd346-deca-cb67-2878-9316bf4a1553",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:53 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/tags", {
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
      instance: "385c1f4a-c726-f2e9-2f2a-3c697bdfd39e",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "385c1f4a-c726-f2e9-2f2a-3c697bdfd39e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1/tags", {
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
      instance: "08f12628-6805-f683-f852-c774f739bb86",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "08f12628-6805-f683-f852-c774f739bb86",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7e006fcb-7140-7112-0696-bedf22b111b3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7e006fcb-7140-7112-0696-bedf22b111b3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:54 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "05a8def8-0e38-c927-b403-16ddff3a0dbe",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "05a8def8-0e38-c927-b403-16ddff3a0dbe",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "5c16462c-29cf-436c-5f8f-16c7713293a6",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "5c16462c-29cf-436c-5f8f-16c7713293a6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:55 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "dfc681d6-3ccc-1c2b-3d77-a220a5918c44",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "dfc681d6-3ccc-1c2b-3d77-a220a5918c44",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:51:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: {
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:56+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "0069ac12-3c76-00ce-4116-bc266031deb7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:56 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "3311e62a-43f1-0aaf-5013-3c20078adcfe",
    "Date",
    "Tue, 23 Nov 2021 22:51:56 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:56+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "70b498ed-389e-e2e8-0d79-8b5f60c0f497",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:56+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "3948ca87-a6bc-9623-9b08-0d8dc7daece4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: {
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      FNAME: "Caio",
      LNAME: "Silveira",
      PHONE: "+5583999999999",
    },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:57+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "f562506d-86f9-5bf2-60e1-ca63da5035fa",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:57 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "83c6f496-862c-21d2-25a5-10dd520135c0",
    "Date",
    "Tue, 23 Nov 2021 22:51:57 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:57+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "442b7769-4855-4824-20ef-cf95c648787a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    status: "unsubscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:58+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "1553c75d-48cc-7fd1-a657-43106670a16b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:58+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "cfc0825a-b923-5c28-6775-d4bece87da81",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:58 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:58+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "0c3ce5f3-890c-667a-6cac-4e5f316ff122",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: {
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      FNAME: "Samba",
    },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Samba Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:59+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3389",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fc6963d4-cf59-944b-1023-8b28a91fffb2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:51:59 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "c870a4c5-7813-ad92-ab83-2100620c27b2",
    "Date",
    "Tue, 23 Nov 2021 22:51:59 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Samba Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:51:59+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3389",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0183d14c-6b2e-8b0f-4eb0-86062f434646",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Samba Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:00+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "f4789eda-92a2-d2d0-8a86-4f92d6bbf8b3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Samba Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:00+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "623f5ece-4a52-6963-357d-a7bf114cd639",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:00 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Samba Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:00+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "c213b75d-ad63-14c6-6ebf-a1820c2ec304",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: {
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "+5583999999998",
      LTV: 15.5,
      JOINED_AT: "1980-12-21",
    },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:01+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3346",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9681fab2-c4e9-9202-8ba9-136513742218",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:01 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "333431ad-be2c-f3f0-38a6-c3a53dc10f5e",
    "Date",
    "Tue, 23 Nov 2021 22:52:01 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:01+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3346",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "c1f34876-f393-4bc2-a3e7-2d08219d3d42",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:01+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3346",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "57f90d3c-745e-3005-fc0e-cfdc0d76f7dc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: {
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      FNAME: "Evan",
      LNAME: "Silveira",
      PHONE: "000",
      LTV: "AAAAA",
    },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    400,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Invalid Resource",
      status: 400,
      detail: "Your merge fields were invalid.",
      instance: "14c40d88-9b23-1adf-9d0b-bb2996468021",
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
      "14c40d88-9b23-1adf-9d0b-bb2996468021",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:02 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan Silveira",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:01+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3346",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d08a3e35-40d4-ce19-eb9e-0b82a863a922",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: {
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      FNAME: "",
      LNAME: "",
      PHONE: "",
      LTV: "",
    },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:03+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3305",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b9bfd1b4-8ec8-badc-76a1-45be1ac3cbff",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:03 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "f108213b-7d60-28de-b89a-90849395e75a",
    "Date",
    "Tue, 23 Nov 2021 22:52:03 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:03+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3305",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "54ee1925-0631-d96a-0aa8-521aa1be164d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:03+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3305",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f991c7e9-aeb3-fcfe-da1c-07ce61fb2a15",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: { email_address: "wx3ti580f4ycqy185cumm@grouparoo.com" },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:03+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3305",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5513403d-0b98-061b-8a09-5a61ba546546",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:04 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
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
    "49e07fb3-9011-a0c4-6469-992d15e8c8a5",
    "Date",
    "Tue, 23 Nov 2021 22:52:05 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:05+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3370",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5ea5f558-cc9f-3581-3248-0eb1c356db64",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:05+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3370",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "841ad0a2-6fdd-41a9-b7fb-6cdc440a5418",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:05 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: { email_address: "wx3ti580f4ycqy185cumm@grouparoo.com" },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:05+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3370",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "df62c55b-4a95-42c2-b808-1a05e20da25d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [{ name: "list two", status: "inactive" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "4b988c26-889c-6713-68ac-3d12fcf0b2b8",
    "Date",
    "Tue, 23 Nov 2021 22:52:06 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:06+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "15a3b6b5-216b-830d-c89f-2655969131e4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:06 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:06+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "c81711cf-c15a-fbb5-d06f-d42e0ba87422",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: { email_address: "wx3ti580f4ycqy185cumm@grouparoo.com" },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:06+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "2e43871d-46c7-7dd8-e3d9-632ed5bc6e7b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:07 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
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
    "e846bcbe-0199-95d0-8e2b-4023ba3c2f23",
    "Date",
    "Tue, 23 Nov 2021 22:52:07 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:07+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "a85ebe1d-e1a5-2766-d9ef-11edee6ed115",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:07+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "340b1d4c-855b-60c0-39a7-baab8ea20cb1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    merge_fields: { email_address: "wx3ti580f4ycqy185cumm@grouparoo.com" },
    email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:07+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "229516fe-5dd2-b6ff-d1fe-ad5c82e737ee",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:08 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "4a276cf0-9b87-3dd1-74bf-3137f57e96e1",
    "Date",
    "Tue, 23 Nov 2021 22:52:09 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:07+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "86d86e71-f6e6-f8a5-bf18-8f45c2dda194",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    200,
    {
      id: "5eb0d793a5aa4f1b9fd29305d6afbf7c",
      email_address: "wx3ti580f4ycqy185cumm@grouparoo.com",
      unique_email_id: "7ee8f2229e",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:07+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/actions/delete-permanent",
          method: "POST",
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
      "0cf0a436-d401-78a6-2d3e-c1bb75b318ce",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:09 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "776dddf5-765c-c864-6da7-98edf345bb16",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "776dddf5-765c-c864-6da7-98edf345bb16",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {
    email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "f0f4a3247e34526684cc57236c91d4da",
      email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
      unique_email_id: "615e0a5cd4",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:10+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3406",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5f351882-9ca3-2b86-a917-c07f7a1636f7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {})
  .once()
  .reply(
    200,
    {
      id: "f0f4a3247e34526684cc57236c91d4da",
      email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
      unique_email_id: "615e0a5cd4",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:10+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3406",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "62a7fe3f-ab96-1816-e3f3-85fa0b02fdb6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:10 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {
    merge_fields: { email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com" },
    email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "f0f4a3247e34526684cc57236c91d4da",
      email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
      unique_email_id: "615e0a5cd4",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:10+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3406",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "7d5de669-07dc-de8d-d518-242b4ea2e771",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/tags", {
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
    "b41261be-1697-0d58-0d9c-ff822e981491",
    "Date",
    "Tue, 23 Nov 2021 22:52:11 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {})
  .once()
  .reply(
    200,
    {
      id: "f0f4a3247e34526684cc57236c91d4da",
      email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
      unique_email_id: "615e0a5cd4",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:11+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3338",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a75983bf-ea78-764a-9958-ae146d242967",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:11 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {})
  .once()
  .reply(
    200,
    {
      id: "f0f4a3247e34526684cc57236c91d4da",
      email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
      unique_email_id: "615e0a5cd4",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:11+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3338",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "80cd5e6f-321d-8749-7b6f-8f7006d98c55",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "955cb798-af75-68d1-d0c9-9f627546c117",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "955cb798-af75-68d1-d0c9-9f627546c117",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {})
  .once()
  .reply(
    200,
    {
      id: "f0f4a3247e34526684cc57236c91d4da",
      email_address: "6pf0bp7w89fy5hit308x4m@grouparoo.com",
      unique_email_id: "615e0a5cd4",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:11+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3338",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e64affc4-21d8-43cd-5cd0-d309ca1b1a02",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:12 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "f095600e-b2a7-3168-355d-16e341d404c5",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "f095600e-b2a7-3168-355d-16e341d404c5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da", {
    email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "angs8opvojuj3c2qvps6an@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:13+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3338",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a713d7b2-3181-b672-5319-c6e8eeb987bb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:13+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3338",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "4aaaa419-11ae-e50d-646f-008da0e2d1b4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {
    merge_fields: {
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      FNAME: "Evan",
      PHONE: "+5583999999998",
    },
    email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:14+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3360",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "88bcce41-4321-b75a-1ed5-1024490036c9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/tags", {
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
    "dc59ecf3-88d6-0467-cce4-fcb341defc59",
    "Date",
    "Tue, 23 Nov 2021 22:52:14 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:14+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3462",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "832b1124-9b04-0ed8-5e63-fd2bf8d7dedd",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:14+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3462",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d47243c1-ca25-88f1-465d-8051f6117f7f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "82208a30-b5ae-b5ae-d70f-6fd675e690d6",
    "Date",
    "Tue, 23 Nov 2021 22:52:15 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:15+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
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
      "36f3d4b6-1131-e8ab-1452-accedef340ad",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Evan",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:51:56+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:15+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
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
      "0a32a60d-fd80-6cbf-f398-77b961361d2e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: {
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      FNAME: "Caio",
    },
    email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:16+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3462",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "8636d59a-8e79-55aa-ec34-8570bfe833cf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:16 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/tags", {
    tags: [{ name: "list three", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9dd17b05-a15f-a751-a9c7-8cbe567e30f5",
    "Date",
    "Tue, 23 Nov 2021 22:52:17 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:17+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3462",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "977b9fc7-5489-a0ae-45f2-3424da431451",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:17 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "599639d8-9eef-260a-f483-dac292f2fdf7",
    "Date",
    "Tue, 23 Nov 2021 22:52:18 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:18+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
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
      "fbb6b2b3-ae8b-0fb9-e9cc-87d115d9ec61",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:18 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:18+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
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
      "e75750cd-d5a1-8125-d3a6-d9be234797ef",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail:
        "This list member cannot be removed. Can not archive a contact that is bounced, pending or archived",
      instance: "0c3e7376-09a3-bb6b-f885-52533cc74ab3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "267",
      "X-Request-Id",
      "0c3e7376-09a3-bb6b-f885-52533cc74ab3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Tue, 23 Nov 2021 22:52:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    200,
    {
      id: "aebd14df525c6670d3145987e33343ab",
      email_address: "angs8opvojuj3c2qvps6an@grouparoo.com",
      unique_email_id: "cd96794972",
      contact_id: "93b835cc104791040b356ff76030415d",
      full_name: "Caio",
      web_id: 400751728,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:16+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:18+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/actions/delete-permanent",
          method: "POST",
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
      "b607c533-7417-0cc6-cc17-7592e22debd3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751728>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:19 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "8b13c0fc-c515-677b-3988-07ba669c074a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "8b13c0fc-c515-677b-3988-07ba669c074a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "502ce802-7d2c-12ec-2906-268081117a70",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "502ce802-7d2c-12ec-2906-268081117a70",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:20 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members", {
    merge_fields: {
      email_address: "790x5cewt9fpapr0vmu5s@grouparoo.com",
      FNAME: "Carlos",
    },
    email_address: "790x5cewt9fpapr0vmu5s@grouparoo.com",
    status: "subscribed",
  })
  .once()
  .reply(
    200,
    {
      id: "e5ae8d069b5354e796f7f58056467422",
      email_address: "790x5cewt9fpapr0vmu5s@grouparoo.com",
      unique_email_id: "884b314e1e",
      contact_id: "56ddd9c7c90148053977a9c5e747f4fe",
      full_name: "Carlos",
      web_id: 400751732,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:20+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:20+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3307",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "84dd0648-2e87-d83e-63a1-00e3c12d4183",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751732>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/tags", {
    tags: [{ name: "list four", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "43ba190f-63a0-abea-a629-d8c0c1fa9db2",
    "Date",
    "Tue, 23 Nov 2021 22:52:21 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422", {})
  .once()
  .reply(
    200,
    {
      id: "e5ae8d069b5354e796f7f58056467422",
      email_address: "790x5cewt9fpapr0vmu5s@grouparoo.com",
      unique_email_id: "884b314e1e",
      contact_id: "56ddd9c7c90148053977a9c5e747f4fe",
      full_name: "Carlos",
      web_id: 400751732,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:20+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:21+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3340",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "c3aec45e-e778-a9f8-c21b-99865db06d50",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751732>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:21 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b10fdee3-e919-37d9-ed6f-e3b7090bb33f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b10fdee3-e919-37d9-ed6f-e3b7090bb33f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "d48169d6-2c77-d12d-60a8-c06cc2b36927",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "d48169d6-2c77-d12d-60a8-c06cc2b36927",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "b869b944-4ad6-b578-1cfc-4194ea9230c8",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "b869b944-4ad6-b578-1cfc-4194ea9230c8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:22 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "c2b1f101-efd0-8f97-8674-a4e719ce36cf",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "c2b1f101-efd0-8f97-8674-a4e719ce36cf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "cd825094-0516-f68a-0712-da0c362c80fa",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "cd825094-0516-f68a-0712-da0c362c80fa",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "a749c49d-0090-6555-2cf6-f838f0109c85",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "a749c49d-0090-6555-2cf6-f838f0109c85",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "96b1c240-7cf7-be91-7dc9-73eae32df098",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "96b1c240-7cf7-be91-7dc9-73eae32df098",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "49e38e95-f831-c333-0bfd-6f5fa0079ca4",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "49e38e95-f831-c333-0bfd-6f5fa0079ca4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "0aa6fe01-1db3-e5b4-19b2-79f16574290c",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "0aa6fe01-1db3-e5b4-19b2-79f16574290c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "69f99c32-0694-c6e0-614c-20eb77c019fc",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "69f99c32-0694-c6e0-614c-20eb77c019fc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {
    email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com" },
  })
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3296",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "36ff9064-2f9f-ffaa-3f2e-2a644e677e72",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3296",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ebe1eebd-8257-84b4-f513-d8c2610f0d0c",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {
    merge_fields: {
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      FNAME: "Jake",
    },
    email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Jake",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "6289586a-b553-fe3b-fa0a-d78887f19d0e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "751df09e-7bb5-c282-32a0-69e3591dd3c9",
    "Date",
    "Tue, 23 Nov 2021 22:52:26 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Jake",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "3511274a-1ef9-7360-0a4d-3446c0c8d32f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "40e0b112-75a1-fa54-3135-f168e62af9c3",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "40e0b112-75a1-fa54-3135-f168e62af9c3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Jake",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "310c019c-4ee7-9e95-1337-055cd95debea",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "2f384ac5-2918-5fa1-9eb2-218143ccde24",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "2f384ac5-2918-5fa1-9eb2-218143ccde24",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "734aaf3d-f130-8030-4a90-5df4e91bf007",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "734aaf3d-f130-8030-4a90-5df4e91bf007",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Jake",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "695cbbfe-9bf7-5f26-2254-a32aaf213ed2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {
    email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "n8htra9b3gb2zhfprw32d4@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "c70d656a-9180-6140-4ace-d011c655279f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "c70d656a-9180-6140-4ace-d011c655279f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Jake",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:25+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "4b321433-64c8-6933-fca4-089b998d6e44",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {
    merge_fields: {
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      FNAME: "Carl",
    },
    email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Carl",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:29+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1e2b07e7-2dfe-69e7-b601-e50ecda28012",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "54d22cd5-bb4d-9723-4837-5a4322366ffb",
    "Date",
    "Tue, 23 Nov 2021 22:52:29 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Carl",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:29+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ba302377-4b87-3cd3-8737-987854a33feb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "7de97b75-5212-2aa8-cfbc-f7845a2dfcce",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "7de97b75-5212-2aa8-cfbc-f7845a2dfcce",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Carl",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:29+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9d996154-a117-699a-e99b-efea3ae7fbef",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "cc1fab99-659a-63c4-133a-5b9af4b3e28a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "cc1fab99-659a-63c4-133a-5b9af4b3e28a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:30 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "6258cda2-fbfe-f06c-b2a6-f03992ac5ed5",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "6258cda2-fbfe-f06c-b2a6-f03992ac5ed5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Carl",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:29+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3304",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "0169d42d-afa6-edf4-623d-7f480799f8ba",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {
    email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
    status: "subscribed",
    merge_fields: { email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com" },
  })
  .once()
  .reply(
    400,
    {
      title: "Member Exists",
      status: 400,
      detail:
        "n8htra9b3gb2zhfprw32d4@grouparoo.com is already a list member. Use PUT to insert or update list members.",
      instance: "4c72056c-295b-f099-2942-dc99cf5ff5e2",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "4c72056c-295b-f099-2942-dc99cf5ff5e2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:31 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9b400266-c106-3896-278d-b88e9a5f85e1",
    "Date",
    "Tue, 23 Nov 2021 22:52:32 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    200,
    {
      id: "6059ab0cb1e5a7ccdfa29a2deae9ba5a",
      email_address: "n8htra9b3gb2zhfprw32d4@grouparoo.com",
      unique_email_id: "8d1766b62b",
      contact_id: "f1c7a7860937eb8b56120507d6d2595e",
      full_name: "Carl",
      web_id: 400751736,
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
      ip_opt: "45.228.145.112",
      timestamp_opt: "2021-11-23T22:52:25+00:00",
      member_rating: 2,
      last_changed: "2021-11-23T22:52:32+00:00",
      language: "",
      vip: false,
      email_client: "",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
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
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a",
          method: "DELETE",
        },
        {
          rel: "activity",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/actions/delete-permanent",
          method: "POST",
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
      "db1a9b71-f00e-71e2-042a-8caf02a05238",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=400751736>; rel="dashboard"',
      "Date",
      "Tue, 23 Nov 2021 22:52:32 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1", {})
  .once()
  .reply(
    404,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Resource Not Found",
      status: 404,
      detail: "The requested resource could not be found.",
      instance: "ce8c842f-9efa-6083-90f9-ae6f2e4124ca",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "ce8c842f-9efa-6083-90f9-ae6f2e4124ca",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:32 GMT",
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
      instance: "4aac23d0-57ec-db30-367d-fb75e4870337",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "4aac23d0-57ec-db30-367d-fb75e4870337",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:33 GMT",
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
      instance: "7f915f9d-5642-60b1-3b71-a0d81b1b9612",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "204",
      "X-Request-Id",
      "7f915f9d-5642-60b1-3b71-a0d81b1b9612",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:34 GMT",
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
      instance: "d720714c-816c-b4ff-0021-d71b345f3d37",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "d720714c-816c-b4ff-0021-d71b345f3d37",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:34 GMT",
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
      instance: "d0b0ba5c-91ef-ef20-da8a-a43a72ed2df5",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "240",
      "X-Request-Id",
      "d0b0ba5c-91ef-ef20-da8a-a43a72ed2df5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:35 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/5eb0d793a5aa4f1b9fd29305d6afbf7c/tags", {
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
      instance: "d1e6b5cf-50ca-371a-d59f-02a2e336fb3a",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "d1e6b5cf-50ca-371a-d59f-02a2e336fb3a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:35 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/f0f4a3247e34526684cc57236c91d4da/tags", {
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
      instance: "bb4bb044-d1e5-9a2e-141a-1208b2a4805f",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "bb4bb044-d1e5-9a2e-141a-1208b2a4805f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:36 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab/tags", {
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
    "85a5db83-d228-e420-ebcf-b6f817caf892",
    "Date",
    "Tue, 23 Nov 2021 22:52:36 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/aebd14df525c6670d3145987e33343ab", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail:
        "This list member cannot be removed. Can not archive a contact that is bounced, pending or archived",
      instance: "fe2a9d56-6f2d-62ca-7dc0-6673dcdb3adf",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "267",
      "X-Request-Id",
      "fe2a9d56-6f2d-62ca-7dc0-6673dcdb3adf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Tue, 23 Nov 2021 22:52:37 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422/tags", {
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
    "b01466cb-56b9-6827-4fd6-9db371523a4a",
    "Date",
    "Tue, 23 Nov 2021 22:52:37 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/e5ae8d069b5354e796f7f58056467422", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "3c08179a-8cbe-017d-2e4b-124cf2f456ec",
    "Date",
    "Tue, 23 Nov 2021 22:52:38 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a/tags", {
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
    "35606d5b-64bf-ee5e-261d-53565f4a915f",
    "Date",
    "Tue, 23 Nov 2021 22:52:38 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/a36b032126/members/6059ab0cb1e5a7ccdfa29a2deae9ba5a", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail:
        "This list member cannot be removed. Can not archive a contact that is bounced, pending or archived",
      instance: "3b90ed50-80e5-e59c-6a15-ee6184ea9d26",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "267",
      "X-Request-Id",
      "3b90ed50-80e5-e59c-6a15-ee6184ea9d26",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Tue, 23 Nov 2021 22:52:38 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a36b032126/members/17cee0cf256326fd9119bae95bcb47b1/tags", {
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
      instance: "694ad945-1730-83de-c0e4-82626a8d5aec",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "211",
      "X-Request-Id",
      "694ad945-1730-83de-c0e4-82626a8d5aec",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Date",
      "Tue, 23 Nov 2021 22:52:39 GMT",
      "Connection",
      "close",
    ]
  );
