const nock = require("nock");

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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
          merge_id: 5,
          tag: "BIRTHDAY",
          name: "Birthday",
          type: "birthday",
          required: false,
          default_value: "",
          public: true,
          display_order: 6,
          options: { date_format: "MM/DD" },
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
          merge_id: 7,
          tag: "LTV",
          name: "LTV",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: {},
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/7",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/7",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
          merge_id: 6,
          tag: "USERID",
          name: "UserID",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
      ],
      list_id: "26d8e9db1e",
      total_items: 7,
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "662749f2-4626-48d5-9abe-585b05fdeaca",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 11 Nov 2020 01:08:32 GMT",
      "Content-Length",
      "8794",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: "1b724bb934",
          web_id: 382062,
          name: "Demo (Evan)",
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
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 0,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 13,
            avg_sub_rate: 960,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
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
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 0,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 2,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 179,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "26d8e9db1e",
          web_id: 363213,
          name: "Grouparoo",
          permission_reminder:
            "You are receiving this email because you opted in via our website.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Evan",
            from_email: "evan.tahler@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-02-06T21:02:33+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gShnbH",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=26d8e9db1e",
          beamer_address: "us4-0c2a01eabd-840733a81d@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 2,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 2,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 0,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-11-10T22:45:47+00:00",
            last_unsub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
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
          list_rating: 0,
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
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 271,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 9,
            avg_sub_rate: 7055,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "a36b032126",
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
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=a36b032126",
          beamer_address: "us4-0c2a01eabd-c14b2192b3@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 10,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 0,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 6,
            avg_sub_rate: 0,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-11-10T19:50:53+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Root/Response.json",
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
      "3c73c7e8-7504-4b3f-b88b-650c56ff3cdb",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 11 Nov 2020 01:08:32 GMT",
      "Content-Length",
      "28449",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .once()
  .reply(
    200,
    {
      lists: [
        {
          id: "1b724bb934",
          web_id: 382062,
          name: "Demo (Evan)",
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
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 0,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 13,
            avg_sub_rate: 960,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
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
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 0,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 2,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 179,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "26d8e9db1e",
          web_id: 363213,
          name: "Grouparoo",
          permission_reminder:
            "You are receiving this email because you opted in via our website.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Evan",
            from_email: "evan.tahler@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-02-06T21:02:33+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gShnbH",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=26d8e9db1e",
          beamer_address: "us4-0c2a01eabd-840733a81d@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 2,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 2,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 0,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-11-10T22:45:47+00:00",
            last_unsub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
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
          list_rating: 0,
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
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 271,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 9,
            avg_sub_rate: 7055,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "a36b032126",
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
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=a36b032126",
          beamer_address: "us4-0c2a01eabd-c14b2192b3@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 10,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 0,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 6,
            avg_sub_rate: 0,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-11-10T19:50:53+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/a36b032126/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Root/Response.json",
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
      "6a86683f-3ffd-48b1-adff-79cc9f0b1224",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Content-Length",
      "28449",
      "Date",
      "Wed, 11 Nov 2020 01:08:33 GMT",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
          merge_id: 5,
          tag: "BIRTHDAY",
          name: "Birthday",
          type: "birthday",
          required: false,
          default_value: "",
          public: true,
          display_order: 6,
          options: { date_format: "MM/DD" },
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
          merge_id: 7,
          tag: "LTV",
          name: "LTV",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: {},
          help_text: "",
          list_id: "26d8e9db1e",
          _links: [
            {
              rel: "self",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/7",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields/7",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
          merge_id: 6,
          tag: "USERID",
          name: "UserID",
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
      ],
      list_id: "26d8e9db1e",
      total_items: 7,
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
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
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "d1bf908a-8c0d-436e-a1a9-cf56604aa53d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 11 Nov 2020 01:08:33 GMT",
      "Content-Length",
      "8794",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2", {})
  .once()
  .reply(
    200,
    {
      id: "c0d3f5ab2377be2c897398242b9703e2",
      email_address: "luigi@grouparoo.com",
      unique_email_id: "a7ff1b05a7",
      web_id: 368926889,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Mario",
        ADDRESS: "",
        PHONE: "",
        BIRTHDAY: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "98.33.107.133",
      timestamp_opt: "2020-11-10T22:45:47+00:00",
      member_rating: 2,
      last_changed: "2020-11-10T23:02:20+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1910837, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "update",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3212",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "329e2244-8f77-4087-9393-67c856e3acd3",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=368926889>; rel="dashboard"',
      "Date",
      "Wed, 11 Nov 2020 01:08:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2", {
    status: "subscribed",
    merge_fields: {
      LNAME: "Mario",
      FNAME: "Luigi",
      USERID: 100,
      email_address: "luigi@grouparoo.com",
    },
    email_address: "luigi@grouparoo.com",
  })
  .once()
  .reply(
    200,
    {
      id: "c0d3f5ab2377be2c897398242b9703e2",
      email_address: "luigi@grouparoo.com",
      unique_email_id: "a7ff1b05a7",
      web_id: 368926889,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Mario",
        ADDRESS: "",
        PHONE: "",
        BIRTHDAY: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "98.33.107.133",
      timestamp_opt: "2020-11-10T22:45:47+00:00",
      member_rating: 2,
      last_changed: "2020-11-10T23:02:20+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1910837, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "update",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3212",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "3b37c099-2a51-46ec-ac40-8e3c230cb5c9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=368926889>; rel="dashboard"',
      "Date",
      "Wed, 11 Nov 2020 01:08:34 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/tags", {
    tags: [],
  })
  .once()
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "23ca1893-2625-4257-af7d-da57d6cfbd39",
    "Date",
    "Wed, 11 Nov 2020 01:08:34 GMT",
    "Connection",
    "close",
  ]);
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2", {})
  .once()
  .reply(
    200,
    {
      id: "c0d3f5ab2377be2c897398242b9703e2",
      email_address: "luigi@grouparoo.com",
      unique_email_id: "a7ff1b05a7",
      web_id: 368926889,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Mario",
        ADDRESS: "",
        PHONE: "",
        BIRTHDAY: "",
        USERID: 100,
        LTV: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "98.33.107.133",
      timestamp_opt: "2020-11-10T22:45:47+00:00",
      member_rating: 2,
      last_changed: "2020-11-10T23:02:20+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1910837, name: "mailchimp people" }],
      list_id: "26d8e9db1e",
      _links: [
        {
          rel: "self",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "update",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PATCH",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PUT",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/activity",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/goals",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/notes",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/events",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us3.api.mailchimp.com/3.0/lists/26d8e9db1e/members/c0d3f5ab2377be2c897398242b9703e2/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3212",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "e0490ccb-17a4-4d47-b431-b254c9476d09",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=368926889>; rel="dashboard"',
      "Date",
      "Wed, 11 Nov 2020 01:08:34 GMT",
      "Connection",
      "close",
    ]
  );
