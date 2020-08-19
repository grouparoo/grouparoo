import nock from "nock";

// --- paste nock output below ---

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a42c031026/merge-fields", {})
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/3",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 7,
          tag: "LANGUAGE",
          name: "Language",
          type: "text",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: { size: 25 },
          help_text: "",
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/7",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/7",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/2",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/6",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/4",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "a42c031026",
      total_items: 7,
      _links: [
        {
          rel: "self",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
        },
        {
          rel: "create",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
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
      "2bc328ff-b2e1-46a3-b0e4-f07ea5e46128",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Aug 2020 21:27:59 GMT",
      "Content-Length",
      "8778",
      "Connection",
      "close",
    ]
  );
nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .reply(
    200,
    {
      lists: [
        {
          id: "1b724bb934",
          web_id: 382062,
          name: "Demo (Evan)",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "8602639544",
          },
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
            member_count_since_send: 70,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 6,
            avg_sub_rate: 262,
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
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "23d8e9cb6e",
          web_id: 363213,
          name: "Grouparoo",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "",
          },
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
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=23d8e9cb6e",
          beamer_address: "us4-0c2a01eabd-840733a81d@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 1,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 1,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 0,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-02-06T21:02:34+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "6f890f62ee",
          web_id: 365697,
          name: "Demo (Andy)",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "",
          },
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
            member_count_since_send: 5186,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 9517,
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
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "a42c031026",
          web_id: 363225,
          name: "Demo (Brian)",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "",
          },
          permission_reminder: "STAGING",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo Staging",
            from_email: "hello@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-02-06T21:50:53+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gShnRT",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=a42c031026",
          beamer_address: "us4-0c2a01eabd-6eb9fef1e1@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 1,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 355,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 1373,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-03-31T16:51:30+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
      ],
      total_items: 4,
      constraints: {
        may_create: true,
        max_instances: 5,
        current_total_instances: 4,
      },
      _links: [
        {
          rel: "self",
          href: "https://us4.api.mailchimp.com/3.0/lists",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Root/Response.json",
        },
        {
          rel: "create",
          href: "https://us4.api.mailchimp.com/3.0/lists",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/POST.json",
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
      "3bb69483-e7da-4eae-9244-db453bd84649",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Aug 2020 21:27:59 GMT",
      "Content-Length",
      "22915",
      "Connection",
      "close",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .reply(
    200,
    {
      lists: [
        {
          id: "1b724bb934",
          web_id: 382062,
          name: "Demo (Evan)",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "8602639544",
          },
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
            member_count_since_send: 70,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 6,
            avg_sub_rate: 262,
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
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/1b724bb934",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/1b724bb934/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "23d8e9cb6e",
          web_id: 363213,
          name: "Grouparoo",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "",
          },
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
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=23d8e9cb6e",
          beamer_address: "us4-0c2a01eabd-840733a81d@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 1,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 1,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 0,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-02-06T21:02:34+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/23d8e9cb6e/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "6f890f62ee",
          web_id: 365697,
          name: "Demo (Andy)",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "",
          },
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
            member_count_since_send: 5186,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 9517,
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
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
        {
          id: "a42c031026",
          web_id: 363225,
          name: "Demo (Brian)",
          contact: {
            company: "Grouparoo",
            address1: "1001 University Dr",
            address2: "",
            city: "Menlo Park",
            state: "CA",
            zip: "94025-4614",
            country: "US",
            phone: "",
          },
          permission_reminder: "STAGING",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Grouparoo Staging",
            from_email: "hello@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2020-02-06T21:50:53+00:00",
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gShnRT",
          subscribe_url_long:
            "https://grouparoo.us4.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=a42c031026",
          beamer_address: "us4-0c2a01eabd-6eb9fef1e1@inbound.mailchimp.com",
          visibility: "pub",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 1,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 355,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 1373,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-03-31T16:51:30+00:00",
            last_unsub_date: "",
          },
          _links: [
            {
              rel: "self",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
            },
            {
              rel: "parent",
              href: "https://us4.api.mailchimp.com/3.0/lists",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
            },
            {
              rel: "update",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/PATCH.json",
            },
            {
              rel: "batch-sub-unsub-members",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "POST",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST-Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/BatchPOST.json",
            },
            {
              rel: "delete",
              href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
              method: "DELETE",
            },
            {
              rel: "abuse-reports",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Abuse.json",
            },
            {
              rel: "activity",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/activity",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/clients",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/growth-history",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Growth.json",
            },
            {
              rel: "interest-categories",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/interest-categories",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/InterestCategories.json",
            },
            {
              rel: "members",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
            },
            {
              rel: "merge-fields",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "segments",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/segments",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Segments.json",
            },
            {
              rel: "webhooks",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/webhooks",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Webhooks.json",
            },
            {
              rel: "signup-forms",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/signup-forms",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/SignupForms.json",
            },
            {
              rel: "locations",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/locations",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Locations.json",
            },
          ],
        },
      ],
      total_items: 4,
      constraints: {
        may_create: true,
        max_instances: 5,
        current_total_instances: 4,
      },
      _links: [
        {
          rel: "self",
          href: "https://us4.api.mailchimp.com/3.0/lists",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Root/Response.json",
        },
        {
          rel: "create",
          href: "https://us4.api.mailchimp.com/3.0/lists",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/POST.json",
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
      "9b00a096-71a0-4e6e-bbd4-4e06c4d967b1",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Aug 2020 21:27:59 GMT",
      "Content-Length",
      "22915",
      "Connection",
      "close",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a42c031026/merge-fields", {})
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/3",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 7,
          tag: "LANGUAGE",
          name: "Language",
          type: "text",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: { size: 25 },
          help_text: "",
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/7",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/7",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/2",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/6",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/4",
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
          list_id: "a42c031026",
          _links: [
            {
              rel: "self",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
              method: "GET",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
            },
            {
              rel: "update",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "a42c031026",
      total_items: 7,
      _links: [
        {
          rel: "self",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/MergeFields.json",
        },
        {
          rel: "create",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/merge-fields",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Response.json",
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
      "7354b309-85b7-4d96-bc96-cab289bb3cc9",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Aug 2020 21:28:00 GMT",
      "Content-Length",
      "8778",
      "Connection",
      "close",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2", {})
  .reply(
    200,
    {
      id: "c0d3f5ab2377be2c897398242b9703e2",
      email_address: "luigi@grouparoo.com",
      unique_email_id: "f621d67732",
      web_id: 349069938,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Mario",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
        LANGUAGE: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "71.231.106.197",
      timestamp_opt: "2020-03-31T16:51:30+00:00",
      member_rating: 2,
      last_changed: "2020-08-19T21:25:35+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1701334, name: "mailchimp people" }],
      list_id: "a42c031026",
      _links: [
        {
          rel: "self",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "update",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PATCH",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PUT",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/activity",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/goals",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/notes",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/events",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3213",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b69e31f2-06da-4234-9251-8222c74f7590",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=349069938>; rel="dashboard"',
      "Date",
      "Wed, 19 Aug 2020 21:28:00 GMT",
      "Connection",
      "close",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .put("/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2", {
    email_address: "luigi@grouparoo.com",
    status: "subscribed",
    merge_fields: {
      email_address: "luigi@grouparoo.com",
      USERID: 100,
      FNAME: "Luigi",
      LNAME: "Mario",
    },
  })
  .reply(
    200,
    {
      id: "c0d3f5ab2377be2c897398242b9703e2",
      email_address: "luigi@grouparoo.com",
      unique_email_id: "f621d67732",
      web_id: 349069938,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Mario",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
        LANGUAGE: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "71.231.106.197",
      timestamp_opt: "2020-03-31T16:51:30+00:00",
      member_rating: 2,
      last_changed: "2020-08-19T21:25:35+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1701334, name: "mailchimp people" }],
      list_id: "a42c031026",
      _links: [
        {
          rel: "self",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "update",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PATCH",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PUT",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/activity",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/goals",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/notes",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/events",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3213",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "1a9383b6-2373-489c-ac25-0ecb6e6477c1",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=349069938>; rel="dashboard"',
      "Date",
      "Wed, 19 Aug 2020 21:28:00 GMT",
      "Connection",
      "close",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .post("/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/tags", {
    tags: [],
  })
  .reply(204, "", [
    "Server",
    "openresty",
    "Content-Type",
    "application/json; charset=utf-8",
    "X-Request-Id",
    "f9af77d4-1731-49d3-99dd-aeddf167741b",
    "Date",
    "Wed, 19 Aug 2020 21:28:01 GMT",
    "Connection",
    "close",
  ]);

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2", {})
  .reply(
    200,
    {
      id: "c0d3f5ab2377be2c897398242b9703e2",
      email_address: "luigi@grouparoo.com",
      unique_email_id: "f621d67732",
      web_id: 349069938,
      email_type: "html",
      status: "subscribed",
      merge_fields: {
        FNAME: "Luigi",
        LNAME: "Mario",
        ADDRESS: "",
        PHONE: "",
        USERID: 100,
        LTV: "",
        LANGUAGE: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "71.231.106.197",
      timestamp_opt: "2020-03-31T16:51:30+00:00",
      member_rating: 2,
      last_changed: "2020-08-19T21:25:35+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1701334, name: "mailchimp people" }],
      list_id: "a42c031026",
      _links: [
        {
          rel: "self",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "update",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PATCH",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
        },
        {
          rel: "upsert",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "PUT",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
        },
        {
          rel: "delete",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2",
          method: "DELETE",
        },
        {
          rel: "activity",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/activity",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
        },
        {
          rel: "goals",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/goals",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
        },
        {
          rel: "notes",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/notes",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
        },
        {
          rel: "events",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/events",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
        },
        {
          rel: "delete_permanent",
          href:
            "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members/c0d3f5ab2377be2c897398242b9703e2/actions/delete-permanent",
          method: "POST",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "3213",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "cf1c4e34-207b-41ec-ac78-b246f5389419",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=349069938>; rel="dashboard"',
      "Date",
      "Wed, 19 Aug 2020 21:28:01 GMT",
      "Connection",
      "close",
    ]
  );
