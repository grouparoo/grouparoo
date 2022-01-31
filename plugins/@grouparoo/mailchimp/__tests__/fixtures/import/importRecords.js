const nock = require("nock");

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
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "9100f543-8c42-48ff-adfe-4e473aefa99b",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:07 GMT",
      "Content-Length",
      "32714",
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
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "44b096e4-841f-44ff-9954-d919398d88f6",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:07 GMT",
      "Content-Length",
      "32714",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "834",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "9c3cd718-5bb2-4467-af17-a6f247dba43a",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:08 GMT",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "fe424281-67f0-4892-a35a-4d2c61d8443d",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:08 GMT",
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
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "d3a665ed-e259-48d4-8b21-af0c64ac7777",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Content-Length",
      "13576",
      "Date",
      "Tue, 10 Nov 2020 22:30:09 GMT",
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
    since_last_changed: "2020-11-10T19%3A50%3A52.999Z",
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
          web_id: 368925349,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Dorthy",
            LNAME: "Iston",
            ADDRESS: "",
            PHONE: "",
            USERID: 10,
            LTV: 290.53,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925353,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Helga",
            LNAME: "Kleis",
            ADDRESS: "",
            PHONE: "",
            USERID: 7,
            LTV: 407.05,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925357,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Cacilie",
            LNAME: "Eate",
            ADDRESS: "",
            PHONE: "",
            USERID: 2,
            LTV: 94.36,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925361,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Deni",
            LNAME: "Scalia",
            ADDRESS: "",
            PHONE: "",
            USERID: 6,
            LTV: 273.98,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "8bd9e7e7-68dd-4ade-9fa7-f303f8aeb003",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:09 GMT",
      "Content-Length",
      "13576",
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
    since_last_changed: "2020-11-10T19%3A50%3A52.999Z",
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
          web_id: 368925365,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Lira",
            LNAME: "Johnston",
            ADDRESS: "",
            PHONE: "",
            USERID: 5,
            LTV: 823.16,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925369,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Lurleen",
            LNAME: "Browell",
            ADDRESS: "",
            PHONE: "",
            USERID: 9,
            LTV: 623.34,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925373,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Erie",
            LNAME: "Jervois",
            ADDRESS: "",
            PHONE: "",
            USERID: 1,
            LTV: 259.12,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925377,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Amata",
            LNAME: "Cotesford",
            ADDRESS: "",
            PHONE: "",
            USERID: 4,
            LTV: 489,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "5d7213c4-1dff-4c8d-8ae9-a8560d974b38",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:10 GMT",
      "Content-Length",
      "13593",
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
    since_last_changed: "2020-11-10T19%3A50%3A52.999Z",
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
          web_id: 368925381,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Gertie",
            LNAME: "Cubitt",
            ADDRESS: "",
            PHONE: "",
            USERID: 8,
            LTV: 841.45,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
          web_id: 368925385,
          email_type: "html",
          status: "subscribed",
          merge_fields: {
            FNAME: "Gretel",
            LNAME: "Groucock",
            ADDRESS: "",
            PHONE: "",
            USERID: 3,
            LTV: 668.3,
          },
          stats: { avg_open_rate: 0, avg_click_rate: 0 },
          ip_signup: "",
          timestamp_signup: "",
          ip_opt: "98.33.107.133",
          timestamp_opt: "2020-11-10T19:50:53+00:00",
          member_rating: 2,
          last_changed: "2020-11-10T19:50:53+00:00",
          language: "",
          vip: false,
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
          tags_count: 1,
          tags: [{ id: 1910789, name: "Test" }],
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
                "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "7213",
      "Vary",
      "Accept-Encoding",
      "X-Request-Id",
      "fa3802ad-5a64-4b51-8e6b-0bdf1c36f6f5",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:11 GMT",
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
    since_last_changed: "2020-11-10T19%3A50%3A52.999Z",
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
            "https://us3.api.mailchimp.com/schema/3.0/CollectionLinks/Lists/Members.json",
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
      "9a1d7edd-4f78-4992-b9c1-c97a4383060e",
      "Link",
      '<https://us3.api.mailchimp.com/schema/3.0/Lists/Members/Collection.json>; rel="describedBy"',
      "Date",
      "Tue, 10 Nov 2020 22:30:12 GMT",
      "Connection",
      "close",
    ]
  );
