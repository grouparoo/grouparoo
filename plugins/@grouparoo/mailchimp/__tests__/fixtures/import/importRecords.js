const nock = require("nock");

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
      total_items: 7,
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
      "74266153-4753-0867-4eef-0ec66f326c31",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Content-Length",
      "8805",
      "Date",
      "Wed, 23 Feb 2022 16:26:11 GMT",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "4ad5a5e8-8fb0-d2b1-b364-b004fe7b8c04",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "33874",
      "Date",
      "Wed, 23 Feb 2022 16:26:11 GMT",
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
    exclude_fields: "email_address",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "2986f017-92b5-dd6f-4dbf-067ec464fec7",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "33874",
      "Date",
      "Wed, 23 Feb 2022 16:26:12 GMT",
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
    exclude_fields: "email_address",
    since_last_changed: "2020-02-07T12%3A13%3A13.999Z",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "073236fb-b6ff-c3fd-ecfb-0e418d1f789a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "33874",
      "Date",
      "Wed, 23 Feb 2022 16:26:12 GMT",
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
    exclude_fields: "email_address",
    since_last_changed: "2025-02-11T12%3A13%3A13.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [],
      list_id: "a36b032126",
      total_items: 0,
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
      "835",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "a689ab4f-b5c2-6251-e181-52de7c1881d4",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 23 Feb 2022 16:26:13 GMT",
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
    offset: "1000",
    exclude_fields: "email_address",
    since_last_changed: "2020-02-07T12%3A13%3A13.999Z",
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
      "db8ab20d-5ea5-19fa-d0eb-7de123d86cb8",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 23 Feb 2022 16:26:13 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "4",
    offset: "0",
    exclude_fields: "email_address",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "77c6dddc-1864-6876-8b1e-03295cc9e5ad",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "14035",
      "Date",
      "Wed, 23 Feb 2022 16:26:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "4",
    offset: "0",
    exclude_fields: "email_address",
    since_last_changed: "2022-02-23T16%3A25%3A56.999Z",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "564020cb-d400-e142-a71f-10962d079841",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "14035",
      "Date",
      "Wed, 23 Feb 2022 16:26:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "4",
    offset: "4",
    exclude_fields: "email_address",
    since_last_changed: "2022-02-23T16%3A25%3A56.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "5a22f3cc-ff9c-49f9-6521-0f8562576af1",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "14061",
      "Date",
      "Wed, 23 Feb 2022 16:26:14 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "4",
    offset: "8",
    exclude_fields: "email_address",
    since_last_changed: "2022-02-23T16%3A25%3A56.999Z",
  })
  .once()
  .reply(
    200,
    {
      members: [
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
            JOINED_AT: "",
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "186.6.243.135",
          timestamp_opt: "2022-02-23T16:25:57+00:00",
          member_rating: 2,
          last_changed: "2022-02-23T16:25:57+00:00",
          language: "",
          vip: false,
          email_client: "",
          location: {
            latitude: 0,
            longitude: 0,
            gmtoff: 0,
            dstoff: 0,
            country_code: "",
            timezone: "",
            region: "",
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
      "Content-Length",
      "7448",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "5f677cab-22a2-a806-d895-719be2e1fbd0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 23 Feb 2022 16:26:15 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://us3.api.mailchimp.com:443", { encodedQueryParams: true })
  .get("/3.0/lists/a36b032126/members", {})
  .query({
    sort_field: "last_changed",
    sort_dir: "ASC",
    count: "4",
    offset: "10",
    exclude_fields: "email_address",
    since_last_changed: "2022-02-23T16%3A25%3A56.999Z",
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
      "2314ca5d-6c65-df33-872b-2bd6e26dd8a0",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Wed, 23 Feb 2022 16:26:15 GMT",
      "Connection",
      "close",
    ]
  );
