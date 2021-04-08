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
      "6d08177b-0fc6-480b-9f1e-6d06d8d63c71",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Sat, 27 Feb 2021 00:32:02 GMT",
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
      "5978a134-3d66-4dcb-8dfe-5b3967be21d2",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/MergeFields/Collection.json>; rel="describedBy"',
      "Date",
      "Sat, 27 Feb 2021 00:32:02 GMT",
      "Connection",
      "close",
    ]
  );
