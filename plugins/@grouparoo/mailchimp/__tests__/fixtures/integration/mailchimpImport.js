const nock = require("nock");

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
          name: "UI Config",
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
            "https://grouparoo.us3.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=1b724bb934",
          beamer_address: "us3-0c2a01eabd-992b9e38fb@inbound.mailchimp.com",
          visibility: "prv",
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
            merge_field_count: 13,
            avg_sub_rate: 433,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2022-01-18T23:17:07+00:00",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href: "https://us3.api.mailchimp.com/3.0/lists/1b724bb934/locations",
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
            "https://grouparoo.us3.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=1fb4269058",
          beamer_address: "us3-0c2a01eabd-453791f0ab@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: true,
          has_welcome: false,
          marketing_permissions: true,
          modules: [],
          stats: {
            member_count: 0,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 13,
            unsubscribe_count_since_send: 1,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 5,
            avg_sub_rate: 178,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
            last_unsub_date: "2022-01-12T15:41:33+00:00",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href: "https://us3.api.mailchimp.com/3.0/lists/1fb4269058/locations",
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
          list_rating: 0,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/gSKdJ1",
          subscribe_url_long:
            "https://grouparoo.us3.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=6f890f62ee",
          beamer_address: "us3-0c2a01eabd-80bbdfd596@inbound.mailchimp.com",
          visibility: "pub",
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
            merge_field_count: 10,
            avg_sub_rate: 3174,
            avg_unsub_rate: 0,
            target_sub_rate: 0,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "",
            last_unsub_date: "2021-11-23T13:56:49+00:00",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href: "https://us3.api.mailchimp.com/3.0/lists/6f890f62ee/locations",
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
          name: "Grouparoo Newsletter",
          permission_reminder:
            "You joined the Grouparoo mailing list either from our website, our blog, or from using our product.",
          use_archive_bar: true,
          campaign_defaults: {
            from_name: "Brian Leonard",
            from_email: "brian.leonard@grouparoo.com",
            subject: "",
            language: "en",
          },
          notify_on_subscribe: "",
          notify_on_unsubscribe: "",
          date_created: "2021-03-13T01:35:42+00:00",
          list_rating: 3,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hs2d2P",
          subscribe_url_long:
            "https://grouparoo.us3.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=7cf8c94812",
          beamer_address: "us3-0c2a01eabd-8fb7b9ab22@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 181,
            unsubscribe_count: 17,
            cleaned_count: 28,
            member_count_since_send: 54,
            unsubscribe_count_since_send: 4,
            cleaned_count_since_send: 8,
            campaign_count: 18,
            campaign_last_sent: "2022-01-17T05:00:29+00:00",
            merge_field_count: 4,
            avg_sub_rate: 29,
            avg_unsub_rate: 1,
            target_sub_rate: 4,
            open_rate: 37.291280148423006,
            click_rate: 6.83111954459203,
            last_sub_date: "2022-01-15T00:02:02+00:00",
            last_unsub_date: "2022-01-11T14:51:37+00:00",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href: "https://us3.api.mailchimp.com/3.0/lists/7cf8c94812/locations",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Locations/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Locations/Collection.json",
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
          list_rating: 3,
          email_type_option: false,
          subscribe_url_short: "http://eepurl.com/hivDK9",
          subscribe_url_long:
            "https://grouparoo.us3.list-manage.com/subscribe?u=5f6e3ecf127508cdb5e31e90b&id=a36b032126",
          beamer_address: "us3-0c2a01eabd-c14b2192b3@inbound.mailchimp.com",
          visibility: "prv",
          double_optin: false,
          has_welcome: false,
          marketing_permissions: false,
          modules: [],
          stats: {
            member_count: 10,
            unsubscribe_count: 0,
            cleaned_count: 0,
            member_count_since_send: 1,
            unsubscribe_count_since_send: 0,
            cleaned_count_since_send: 0,
            campaign_count: 0,
            campaign_last_sent: "",
            merge_field_count: 8,
            avg_sub_rate: 1207,
            avg_unsub_rate: 2,
            target_sub_rate: 2,
            open_rate: 0,
            click_rate: 0,
            last_sub_date: "2022-01-19T01:54:52+00:00",
            last_unsub_date: "2021-12-09T15:22:52+00:00",
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
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Collection.json",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/abuse-reports",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Abuse/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Abuse/Collection.json",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Activity/Response.json",
            },
            {
              rel: "clients",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/clients",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Clients/Response.json",
            },
            {
              rel: "growth-history",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/growth-history",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Growth/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Growth/Collection.json",
            },
            {
              rel: "interest-categories",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/interest-categories",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/InterestCategories/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/InterestCategories/Collection.json",
            },
            {
              rel: "members",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
            },
            {
              rel: "merge-fields",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "segments",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/segments",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Segments/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Segments/Collection.json",
            },
            {
              rel: "webhooks",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/webhooks",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Webhooks/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Webhooks/Collection.json",
            },
            {
              rel: "signup-forms",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/signup-forms",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/SignupForms/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/SignupForms/Collection.json",
            },
            {
              rel: "locations",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/locations",
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
      "cd837e68-7338-b70b-d7ff-53bbeb3849f5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:39 GMT",
      "Content-Length",
      "28588",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/merge-fields", {})
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 8,
          tag: "JOINED_AT",
          name: "JOINED_AT",
          type: "date",
          required: false,
          default_value: "",
          public: true,
          display_order: 9,
          options: { date_format: "MM/DD/YYYY" },
          help_text: "",
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 7,
          tag: "TICKET",
          name: "TICKET",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: {},
          help_text: "",
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 8,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
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
      "bb5c7899-16d5-cbff-6c8c-f8215b40e166",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:39 GMT",
      "Content-Length",
      "9927",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({ sort_field: "last_changed", sort_dir: "DESC", count: "10" })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "eecb8de8-5d6c-ca40-b715-b68a0abdc6ab",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "33884",
      "Date",
      "Wed, 19 Jan 2022 01:58:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/merge-fields", {})
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 8,
          tag: "JOINED_AT",
          name: "JOINED_AT",
          type: "date",
          required: false,
          default_value: "",
          public: true,
          display_order: 9,
          options: { date_format: "MM/DD/YYYY" },
          help_text: "",
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 7,
          tag: "TICKET",
          name: "TICKET",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: {},
          help_text: "",
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 8,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
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
      "de74fa5f-ff1d-befd-5714-fab8b7a9e504",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Content-Length",
      "9927",
      "Date",
      "Wed, 19 Jan 2022 01:58:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({ sort_field: "last_changed", sort_dir: "DESC", count: "10" })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "bc2fda45-920f-1760-4a3c-ac0e31405afc",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:40 GMT",
      "Content-Length",
      "33884",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/merge-fields", {})
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/3",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/1",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 8,
          tag: "JOINED_AT",
          name: "JOINED_AT",
          type: "date",
          required: false,
          default_value: "",
          public: true,
          display_order: 9,
          options: { date_format: "MM/DD/YYYY" },
          help_text: "",
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/8",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/2",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/6",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/4",
              method: "DELETE",
            },
          ],
        },
        {
          merge_id: 7,
          tag: "TICKET",
          name: "TICKET",
          type: "number",
          required: false,
          default_value: "",
          public: true,
          display_order: 8,
          options: {},
          help_text: "",
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/7",
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
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
            },
            {
              rel: "parent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
            },
            {
              rel: "update",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/PATCH.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields/5",
              method: "DELETE",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 8,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/MergeFields/Collection.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/merge-fields",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/MergeFields/POST.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
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
      "f7120743-af03-411a-f152-6c8992284be1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:41 GMT",
      "Content-Length",
      "9927",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({ sort_field: "last_changed", sort_dir: "DESC", count: "10" })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "9f1b8791-477a-92cc-1446-94d96c158495",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:41 GMT",
      "Content-Length",
      "33884",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "100",
    offset: "0",
  })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "00392617-35cc-a3d2-1cab-d145ae23ae2e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:42 GMT",
      "Content-Length",
      "33884",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "100",
    offset: "0",
    since_last_changed: "2022-01-19T01%3A54%3A51.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "c6529080-3968-0852-baa9-438a3ffaf214",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:42 GMT",
      "Content-Length",
      "33884",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "100",
    offset: "10",
    since_last_changed: "2022-01-19T01%3A54%3A51.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "836",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "bf142167-5a21-a795-d829-a49632e5e64e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:44 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "100",
    offset: "0",
  })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "5f9e472f-05af-acf2-9908-14e97ed5819f",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:44 GMT",
      "Content-Length",
      "33884",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "100",
    offset: "0",
    since_last_changed: "2022-01-19T01%3A54%3A51.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [
        {
          id: "6373a8b568272a9aa5ec381fc83bd926",
          email_address: "xdiston9@grouparoo.com",
          unique_email_id: "c3262b9248",
          contact_id: "53a728c901621a09feebb95e7b92ff1b",
          full_name: "Dorthy Iston",
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/6373a8b568272a9aa5ec381fc83bd926/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "a5f9a835de129f22568b80e14119c344",
          email_address: "xhkleis6@grouparoo.com",
          unique_email_id: "7ffeccfd93",
          contact_id: "090f6300a3d3273fd8ca5fe0f7302279",
          full_name: "Helga Kleis",
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/a5f9a835de129f22568b80e14119c344/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "ed30f5fbf3b4f4c8a9226c89668c3e5e",
          email_address: "xceate1@grouparoo.com",
          unique_email_id: "880d0ac212",
          contact_id: "0408e20ddb0120b446deaa3038040f8e",
          full_name: "Cacilie Eate",
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/ed30f5fbf3b4f4c8a9226c89668c3e5e/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "9d4f9f1852f7bffd4ce50e27e81fdc32",
          email_address: "xdscalia5@grouparoo.com",
          unique_email_id: "98a6b77df4",
          contact_id: "e5d700edaf84687c7f4026ed16f567e5",
          full_name: "Deni Scalia",
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/9d4f9f1852f7bffd4ce50e27e81fdc32/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "bbdf10196516354d893d6eadafbd5ee9",
          email_address: "xljohnston4@grouparoo.com",
          unique_email_id: "5200eaa076",
          contact_id: "f28d2db5bca46ae2f5d583358fb79b2f",
          full_name: "Lira Johnston",
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/bbdf10196516354d893d6eadafbd5ee9/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "7c4a9836082e002f0426e27284f3e3e0",
          email_address: "xlbrowell8@grouparoo.com",
          unique_email_id: "e7c1d68b1c",
          contact_id: "e8c649a754cdaaaddf71faadebb30a13",
          full_name: "Lurleen Browell",
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/7c4a9836082e002f0426e27284f3e3e0/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "b67317b9b6aaf019d4623137fe8d59d8",
          email_address: "xejervois0@grouparoo.com",
          unique_email_id: "c0820e2f6e",
          contact_id: "d96408650d373290f1d9459ced6acba7",
          full_name: "Erie Jervois",
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/b67317b9b6aaf019d4623137fe8d59d8/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "8dbbbdffcb675daf8bbe4d75257a620b",
          email_address: "xacotesford3@grouparoo.com",
          unique_email_id: "eb14a3dbbc",
          contact_id: "17a23ae99d8c068569e3bce4ae6536a2",
          full_name: "Amata Cotesford",
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/8dbbbdffcb675daf8bbe4d75257a620b/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "f94bec6a6160353a3389bb7c1dc72fca",
          email_address: "xgcubitt7@grouparoo.com",
          unique_email_id: "45e1d38425",
          contact_id: "c45a15a2959ed4a2132f1a65acda2998",
          full_name: "Gertie Cubitt",
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/f94bec6a6160353a3389bb7c1dc72fca/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
        {
          id: "eb0776939e8f173a219ad196e647aeda",
          email_address: "xggroucock2@grouparoo.com",
          unique_email_id: "7aa82b7a12",
          contact_id: "1c6eb4babd94e280b7b2206a5816b0d9",
          full_name: "Gretel Groucock",
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          consents_to_one_to_one_messaging: true,
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
            TICKET: "",
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "71.231.106.197",
          timestamp_opt: "2022-01-19T01:54:52+00:00",
          member_rating: 2,
          last_changed: "2022-01-19T01:54:52+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
          },
          source: "Import",
          tags_count: 0,
          tags: [],
          list_id: "a36b032126",
          _links: [
            {
              rel: "self",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
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
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PATCH",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
            },
            {
              rel: "upsert",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "PUT",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
              schema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
            },
            {
              rel: "delete",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda",
              method: "DELETE",
            },
            {
              rel: "activity",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/activity",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
            },
            {
              rel: "goals",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/goals",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
            },
            {
              rel: "notes",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/notes",
              method: "GET",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
            },
            {
              rel: "events",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/events",
              method: "POST",
              targetSchema:
                "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
            },
            {
              rel: "delete_permanent",
              href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members/eb0776939e8f173a219ad196e647aeda/actions/delete-permanent",
              method: "POST",
            },
          ],
        },
      ],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
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
      "f9d64201-40f8-c97a-9134-85561e72fcdf",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "33884",
      "Date",
      "Wed, 19 Jan 2022 01:58:45 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "100",
    offset: "10",
    since_last_changed: "2022-01-19T01%3A54%3A51.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [],
      list_id: "a36b032126",
      total_items: 10,
      _links: [
        {
          rel: "self",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
        },
        {
          rel: "parent",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126",
          method: "GET",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        },
        {
          rel: "create",
          href: "https://us3.api.mailchimp.com/3.0/lists/a36b032126/members",
          method: "POST",
          targetSchema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
          schema:
            "https://us3.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/POST.json",
        },
      ],
    },
    [
      "Server",
      "openresty",
      "Content-Type",
      "application/json; charset=utf-8",
      "Content-Length",
      "836",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "ebdcc55a-6686-281f-7518-2b4d41728ad9",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 19 Jan 2022 01:58:45 GMT",
      "Connection",
      "close",
    ]
  );
