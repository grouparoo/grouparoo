import nock from "nock";

// --- past nock output below ---

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .reply(
    200,
    {
      lists: [
        {
          id: "23d8e9cb6e",
          web_id: 363213,
          name: "Grouparoo",
          contact: {},
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
          name: "Demo",
          contact: {},
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
            member_count: 271,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 384,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 17019,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-03-26T21:02:52+00:00",
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
          name: "Staging",
          contact: {},
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
            member_count_since_send: 5112,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 3876,
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
      total_items: 3,
      constraints: {
        may_create: false,
        max_instances: 3,
        current_total_instances: 3,
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
      "bc5a7312-8196-42ec-9fba-9742826183e8",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Content-Length",
      "17395",
      "Date",
      "Tue, 31 Mar 2020 17:01:37 GMT",
      "Connection",
      "close",
      "Set-Cookie",
      "_AVESTA_ENVIRONMENT=prod; path=/",
      "Set-Cookie",
      "_mcid=1.34a59c049ed5fed65e2daa9e7fab73e2.d16d4868b3f9a0315ac4e614f2046db1c328588a2a8423b33571d8eed4215219; expires=Wed, 31-Mar-2021 17:01:37 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists", {})
  .reply(
    200,
    {
      lists: [
        {
          id: "23d8e9cb6e",
          web_id: 363213,
          name: "Grouparoo",
          contact: {},
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
          name: "Demo",
          contact: {},
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
            member_count: 271,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 384,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 17019,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2020-03-26T21:02:52+00:00",
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
          name: "Staging",
          contact: {},
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
            member_count_since_send: 5112,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 7,
            avg_sub_rate: 3876,
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
      total_items: 3,
      constraints: {
        may_create: false,
        max_instances: 3,
        current_total_instances: 3,
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
      "081b6c1e-5f99-458a-8709-a76cefc61545",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Content-Length",
      "17395",
      "Date",
      "Tue, 31 Mar 2020 17:01:37 GMT",
      "Connection",
      "close",
      "Set-Cookie",
      "_AVESTA_ENVIRONMENT=prod; path=/",
      "Set-Cookie",
      "_mcid=1.cb1886ed403a642734770793f8e110e9.cc91d50678ecb3d1e220db30e620d0f566e5f2fcbb2c50cd9e387efb9b02d31e; expires=Wed, 31-Mar-2021 17:01:37 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
    ]
  );

nock("https://us4.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a42c031026/members", {})
  .reply(
    200,
    {
      members: [
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
            COOL: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2020-03-31T16:51:30+00:00",
          member_rating: 2,
          last_changed: "2020-03-31T16:52:49+00:00",
          language: "",
          vip: false,
          email_client: "",
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
          tags: [{ id: 1690590, name: "mailchimp people" }],
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
              href:
                "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
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
      ],
      list_id: "a42c031026",
      total_items: 1,
      _links: [
        {
          rel: "self",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
        },
        {
          rel: "parent",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026",
          method: "GET",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us4.api.mailchimp.com/3.0/lists/a42c031026/members",
          method: "POST",
          targetSchema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us4.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "4043",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "b9e2f8bf-2dba-4d30-b0d3-cb79dec13eca",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 31 Mar 2020 17:01:38 GMT",
      "Connection",
      "close",
      "Set-Cookie",
      "_AVESTA_ENVIRONMENT=prod; path=/",
      "Set-Cookie",
      "_mcid=1.c7981d227f0113f521055e6ebf730b52.58be7e44dd346b39c99543fe67c4bda4ac27e28dd6b08b9edeb87ab241056fc7; expires=Wed, 31-Mar-2021 17:01:38 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
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
        COOL: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "71.231.106.197",
      timestamp_opt: "2020-03-31T16:51:30+00:00",
      member_rating: 2,
      last_changed: "2020-03-31T16:52:49+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1690590, name: "mailchimp people" }],
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
      "3209",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "668fae77-8a9b-40e0-90ca-aa21200a2af4",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=349069938>; rel="dashboard"',
      "Date",
      "Tue, 31 Mar 2020 17:01:38 GMT",
      "Connection",
      "close",
      "Set-Cookie",
      "_AVESTA_ENVIRONMENT=prod; path=/",
      "Set-Cookie",
      "_mcid=1.93a6cbb82e4d51d5ae29ff11bacd8ced.739baa363479a6f65f0882d0ab74cb448e803113df9e6ca4568bad47cd6c6f94; expires=Wed, 31-Mar-2021 17:01:38 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
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
      ADDRESS: "",
      PHONE: "",
      LTV: "",
      COOL: "",
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
        COOL: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "71.231.106.197",
      timestamp_opt: "2020-03-31T16:51:30+00:00",
      member_rating: 2,
      last_changed: "2020-03-31T16:52:49+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1690590, name: "mailchimp people" }],
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
      "3209",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "466691ab-e0dc-4dbb-b9bb-87491ce7c482",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=349069938>; rel="dashboard"',
      "Date",
      "Tue, 31 Mar 2020 17:01:38 GMT",
      "Connection",
      "close",
      "Set-Cookie",
      "_AVESTA_ENVIRONMENT=prod; path=/",
      "Set-Cookie",
      "_mcid=1.161e597f5d297692fa0a2d059d7513db.9d107cdc5c79e8868ccb76ede9e98fadfebdc7bd809d6f8d74d1891c61133967; expires=Wed, 31-Mar-2021 17:01:38 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
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
    "4dd3c4a5-3580-4640-b652-dabe650527e1",
    "Date",
    "Tue, 31 Mar 2020 17:01:39 GMT",
    "Connection",
    "close",
    "Set-Cookie",
    "_AVESTA_ENVIRONMENT=prod; path=/",
    "Set-Cookie",
    "_mcid=1.9318ed8a7c96b479e7a8f937df0628eb.eac64a8cbdf298d52cfcad0692d0b354d57d997620345228fba86bc29ec54066; expires=Wed, 31-Mar-2021 17:01:39 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
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
        COOL: "",
      },
      stats: { avg_open_rate: 0, avg_click_rate: 0 },
      ip_signup: "",
      timestamp_signup: "",
      ip_opt: "71.231.106.197",
      timestamp_opt: "2020-03-31T16:51:30+00:00",
      member_rating: 2,
      last_changed: "2020-03-31T16:52:49+00:00",
      language: "",
      vip: false,
      email_client: "",
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
      tags: [{ id: 1690590, name: "mailchimp people" }],
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
      "3209",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "501510de-5930-40ec-bf2d-057fa463374c",
      "Link",
      '<https://us4.api.mailchimp.com/schema/3.0/Lists/Members/Instance.json>; rel="describedBy", <https://us4.admin.mailchimp.com/lists/members/view?id=349069938>; rel="dashboard"',
      "Date",
      "Tue, 31 Mar 2020 17:01:39 GMT",
      "Connection",
      "close",
      "Set-Cookie",
      "_AVESTA_ENVIRONMENT=prod; path=/",
      "Set-Cookie",
      "_mcid=1.778dceb90b97c0efe1ce35ad19e1be2b.c0fa8bcbcc4ce7388c0db39cb2b5f1f96ca2c7e0074762e3916fb539d8df920b; expires=Wed, 31-Mar-2021 17:01:39 GMT; Max-Age=31536000; path=/; domain=.mailchimp.com",
    ]
  );
