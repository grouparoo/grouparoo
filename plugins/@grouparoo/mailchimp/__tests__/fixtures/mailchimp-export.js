const nock = require("nock");

nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(
    405,
    {
      type: "https://mailchimp.com/developer/marketing/docs/errors/",
      title: "Method Not Allowed",
      status: 405,
      detail: "This list member cannot be removed.  Please contact support.",
      instance: "3fcc9511-7a5c-42a2-9151-986ba51e8c39",
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/problem+json; charset=utf-8",
      "Content-Length",
      "229",
      "X-Request-Id",
      "3fcc9511-7a5c-42a2-9151-986ba51e8c39",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Definitions/ProblemDetailDocument.json>; rel="describedBy"',
      "Allow",
      "GET, PUT",
      "Date",
      "Fri, 23 Apr 2021 04:13:23 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Test2",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:12:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:12:26+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3198",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "251f4d6e-e0b5-4d61-91f3-08fdf9f5d7d2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/merge-fields", {})
  .once()
  .reply(
    200,
    {
      merge_fields: [
        {
          merge_id: 3,
          tag: "ADDRESS",
          name: "Address",
          type: "address",
          required: false,
          default_value: "",
          public: false,
          display_order: 4,
          options: { default_country: 164 },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/3",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 1,
          tag: "FNAME",
          name: "First Name",
          type: "text",
          required: false,
          default_value: "",
          public: true,
          display_order: 2,
          options: { size: 25 },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 2,
          tag: "LNAME",
          name: "Last Name",
          type: "text",
          required: false,
          default_value: "",
          public: true,
          display_order: 3,
          options: { size: 25 },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/2",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 6,
          tag: "LTV",
          name: "LTV",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 7,
          options: {},
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/6",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 4,
          tag: "PHONE",
          name: "Phone Number",
          type: "phone",
          required: false,
          default_value: "",
          public: false,
          display_order: 5,
          options: { phone_format: "none" },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/4",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 5,
          tag: "USERID",
          name: "UserID",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 6,
          options: {},
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "26d8e9db1e",
      total_items: 6,
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
        },
        {
          rel: "create",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "7653",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bf4a2393-388f-44b7-afa7-64a1476c7406",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 04:13:25 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .query({ count: "1000" })
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: "1b724bb934",
          web_id: 382062,
          name: "First Time Setup Video",
          permission_reminder: "You aren't a real person - this is a demo.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo",
            from_email: "fake-evan@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-08-12T16:21:04+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/haJ6YH",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=1b724bb934",
          beamer_address: "us4-0c2a01eabd-992b9e38fb@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 12,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 430,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 13,
            avg_sub_rate: 658,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-10-07T21:38:39+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "1fb4269058",
          web_id: 382274,
          name: "Demo-Environment",
          permission_reminder: "A test email list",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo Staging",
            from_email: "no-reply@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-08-25T00:18:03+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hbEP6f",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=1fb4269058",
          beamer_address: "us4-0c2a01eabd-453791f0ab@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: true,
          has_welcome: false,
          marketing_permissions: true,
          modules: [],
          stats: {
            member_count: 15,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 81,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 8,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 68,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-01-27T01:59:12+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "6f890f62ee",
          web_id: 365697,
          name: "Demo (Andy)",
          permission_reminder: "DEMO",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo Demo",
            from_email: "hello@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-02-11T17:12:54+00:00",
          list_rating: 3,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gSKdJ1",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=6f890f62ee",
          beamer_address: "us4-0c2a01eabd-80bbdfd596@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 208,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 209,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 2,
            campaign_last_sent: "",
            merge_field_count: 9,
            avg_sub_rate: 4455,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-04-12T23:07:09+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "7cf8c94812",
          web_id: 390273,
          name: "Production-List",
          permission_reminder:
            "You joined the Grouparoo mailing list either from our website, our blog, or from using our product.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Brian Leonard",
            from_email: "help@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2021-03-13T01:35:42+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hs2d2P",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=7cf8c94812",
          beamer_address: "us4-0c2a01eabd-8fb7b9ab22@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 89,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 133,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 4,
            avg_sub_rate: 95,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-04-22T04:51:57+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "26d8e9db1e",
          web_id: 383113,
          name: "Test Source",
          permission_reminder: "Testing Grouparoo source",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo",
            from_email: "test@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-11-10T19:32:49+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hivDK9",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=26d8e9db1e",
          beamer_address: "us4-0c2a01eabd-c14b2192b3@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 56,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 295,
            unsubscribe_count_since_send: 7,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 6,
            avg_sub_rate: 514,
            avg_unsub_rate: 1,
            target_sub_rate: 1,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-03-23T18:24:29+00:00",
            last_unsub_date: "2021-04-23T02:54:59+00:00",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
      ],
      total_items: 5,
      constraints: {
        may_create: false,
        max_instances: 5,
        current_total_instances: 5,
      },
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/POST.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "aedf0f37-d4e9-4a12-9f55-60848c35437b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 04:13:26 GMT",
      "Content-Length",
      "28511",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .query({ count: "1000" })
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: "1b724bb934",
          web_id: 382062,
          name: "First Time Setup Video",
          permission_reminder: "You aren't a real person - this is a demo.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo",
            from_email: "fake-evan@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-08-12T16:21:04+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/haJ6YH",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=1b724bb934",
          beamer_address: "us4-0c2a01eabd-992b9e38fb@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 12,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 430,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 13,
            avg_sub_rate: 658,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-10-07T21:38:39+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "1fb4269058",
          web_id: 382274,
          name: "Demo-Environment",
          permission_reminder: "A test email list",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo Staging",
            from_email: "no-reply@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-08-25T00:18:03+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hbEP6f",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=1fb4269058",
          beamer_address: "us4-0c2a01eabd-453791f0ab@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: true,
          has_welcome: false,
          marketing_permissions: true,
          modules: [],
          stats: {
            member_count: 15,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 81,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 8,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 68,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-01-27T01:59:12+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "6f890f62ee",
          web_id: 365697,
          name: "Demo (Andy)",
          permission_reminder: "DEMO",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo Demo",
            from_email: "hello@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-02-11T17:12:54+00:00",
          list_rating: 3,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gSKdJ1",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=6f890f62ee",
          beamer_address: "us4-0c2a01eabd-80bbdfd596@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 208,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 209,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 2,
            campaign_last_sent: "",
            merge_field_count: 9,
            avg_sub_rate: 4455,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-04-12T23:07:09+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "7cf8c94812",
          web_id: 390273,
          name: "Production-List",
          permission_reminder:
            "You joined the Grouparoo mailing list either from our website, our blog, or from using our product.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Brian Leonard",
            from_email: "help@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2021-03-13T01:35:42+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hs2d2P",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=7cf8c94812",
          beamer_address: "us4-0c2a01eabd-8fb7b9ab22@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 89,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 133,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 4,
            avg_sub_rate: 95,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-04-22T04:51:57+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
        {
          id: "26d8e9db1e",
          web_id: 383113,
          name: "Test Source",
          permission_reminder: "Testing Grouparoo source",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo",
            from_email: "test@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-11-10T19:32:49+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hivDK9",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=26d8e9db1e",
          beamer_address: "us4-0c2a01eabd-c14b2192b3@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 56,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 295,
            unsubscribe_count_since_send: 7,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 6,
            avg_sub_rate: 514,
            avg_unsub_rate: 1,
            target_sub_rate: 1,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2021-03-23T18:24:29+00:00",
            last_unsub_date: "2021-04-23T02:54:59+00:00",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
            },
          ],
        },
      ],
      total_items: 5,
      constraints: {
        may_create: false,
        max_instances: 5,
        current_total_instances: 5,
      },
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/POST.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fb644215-91e5-46de-85ca-ec796cba7839",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 04:13:26 GMT",
      "Content-Length",
      "28511",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/merge-fields", {})
  .once()
  .reply(
    200,
    {
      merge_fields: [
        {
          merge_id: 3,
          tag: "ADDRESS",
          name: "Address",
          type: "address",
          required: false,
          default_value: "",
          public: false,
          display_order: 4,
          options: { default_country: 164 },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/3",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 1,
          tag: "FNAME",
          name: "First Name",
          type: "text",
          required: false,
          default_value: "",
          public: true,
          display_order: 2,
          options: { size: 25 },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 2,
          tag: "LNAME",
          name: "Last Name",
          type: "text",
          required: false,
          default_value: "",
          public: true,
          display_order: 3,
          options: { size: 25 },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/2",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 6,
          tag: "LTV",
          name: "LTV",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 7,
          options: {},
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/6",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 4,
          tag: "PHONE",
          name: "Phone Number",
          type: "phone",
          required: false,
          default_value: "",
          public: false,
          display_order: 5,
          options: { phone_format: "none" },
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/4",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 5,
          tag: "USERID",
          name: "UserID",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 6,
          options: {},
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "26d8e9db1e",
      total_items: 6,
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
        },
        {
          rel: "create",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "7653",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "8f6e8d9b-2a80-445b-8bb7-800432605cdb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Fri, 23 Apr 2021 04:13:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "archived",
      merge_fields: {
        FNAME: "Test2",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:12:24+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:12:26+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3198",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e597a7a7-a794-42a5-968e-194f1c118090",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:27 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members", {
    status: "subscribed",
    merge_fields: {
      email_address: "test2@grouparoo.com",
      USERID: 100,
      FNAME: "Luigi",
      LNAME: "Plumber",
    },
    email_address: "test2@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:13:27+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:13:27+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3200",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "42bd50f6-065b-44b1-bba2-b9a91cf8c4ff",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/tags", {
    tags: [{ name: "mailchimp people", status: "active" }],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "9db9faf5-3177-4f14-8a45-b88226e7d502",
    "Date",
    "Fri, 23 Apr 2021 04:13:28 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:13:27+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:13:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3200",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a56f13af-0897-4892-9903-dafcb4e7c5b8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:13:27+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:13:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3200",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "f666d744-992c-49c1-a1b9-e6e4d3f90515",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {
    status: "subscribed",
    merge_fields: {
      email_address: "test2@grouparoo.com",
      USERID: 100,
      FNAME: "Test2",
      LNAME: "Plumber",
    },
    email_address: "test2@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Test2",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:13:27+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:13:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3200",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e96e17b7-8795-4cb6-83c4-a26379d9fc52",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "e457d88c-e916-4313-a305-d18b5c583d28",
    "Date",
    "Fri, 23 Apr 2021 04:13:29 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(
    200,
    {
      id: "6dbfa7bcb1816b00b02d298e7aff9985",
      email_address: "test2@grouparoo.com",
      unique_email_id: "54eeb7beea",
      web_id: 383140613,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Test2",
        LNAME: "Plumber",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "191.253.18.8",
      timestamp_opt: "2021-04-23T04:13:27+00:00",
      member_rating: 2,
      last_changed: "2021-04-23T04:13:28+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 4437817, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
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
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3200",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "29f4df5c-8fa8-4a6e-8392-2d3c28449578",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=383140613>; rel="dashboard"',
      "Date",
      "Fri, 23 Apr 2021 04:13:29 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .delete("/3.0/lists/26d8e9db1e/members/6dbfa7bcb1816b00b02d298e7aff9985", {})
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "a2dcefc0-48fc-4f96-8ffe-5ff8051aee73",
    "Date",
    "Fri, 23 Apr 2021 04:13:29 GMT",
    "Connection",
    "close",
  ]);
